<template>
<div id="tip-wrap" class="wrap">
	<div class="title">Progress 参数说明</div>
	<div class="title" style="color: #f63;">暂时完成了line形进度条，circle形待开发</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">percentage</div>
			<div class="col">Number: </div>
			<div class="col">当前进度</div>
		</div>
		<div class="row">
			<div class="col">pwidth</div>
			<div class="col">Number: 10</div>
			<div class="col">进度条默认高度</div>
		</div>
		<div class="row">
			<div class="col">status</div>
			<div class="col">String: "normal"</div>
			<div class="col">normal，success，error</div>
		</div>
		<div class="row">
			<div class="col">active</div>
			<div class="col">Boolean: true</div>
			<div class="col">进度动效（只在status=normal时有效）</div>
		</div>
		<div class="row">
			<div class="col">textInside</div>
			<div class="col">Boolean: false</div>
			<div class="col">进度百分比位置</div>
		</div>
		<div class="row">
			<div class="col">showText</div>
			<div class="col">Boolean: true</div>
			<div class="col">是否显示进度</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<textarea class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
<rProgress :percentage="10" :active="false"></rProgress>
<rProgress :percentage="40" status="error"></rProgress>
<rProgress :percentage="100" status="success"></rProgress>
<rProgress :percentage="80" :pwidth="15"></rProgress>
<rProgress :percentage="50" :textInside="true"></rProgress>
	</textarea>
	<div class="exps">
		<rProgress :percentage="10" :active="false" :progColor="clc"></rProgress>
		<rProgress :percentage="40" status="error"></rProgress>
		<rProgress :percentage="100" status="success"></rProgress>
		<rProgress :percentage="80" :pwidth="15"></rProgress>
		<rProgress ref="lastP" :status="lastP_status" :active="lastP_active" :percentage="pnt" :textInside="true" @success="onSuccess"></rProgress>
	</div>	
	<div>最后一个进度条的进度：{{pnt}}%</div>
</div>

</template>
<script>
	export default{
		name: "progressExample",
		data(){
			return {
				pnt: 0,
				clc: "#e0d70f",
				lastP_status: 'normal',
				lastP_active: true
			}
		},
		mounted(){
			let that = this;
			let timer = setInterval(function(){
				let num = Math.random()*10;
				that.pnt += parseInt(num.toFixed(1));
				if(that.pnt>=100){
					that.pnt=100;
					clearInterval(timer);
				}
			},1500);
		},
		methods: {
			onSuccess: function(){
				this.lastP_active = false;
				this.lastP_status = "success";
				this.$toast("最后一个进度条加载成功~");
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
	#tip-wrap{
		.d3{
			margin: r(60);
			color: #4080e8;
			font-size: r(30);
		}
		.exps{
			padding: 1rem;
		}
		.r-progress{
			margin: r(50) 0;
		}
	}
</style>