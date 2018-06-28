<template>
<div id="tip-wrap" class="wrap">
	<div class="title">Tip 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">title</div>
			<div class="col">string: ""</div>
			<div class="col">标题</div>
		</div>
		<div class="row">
			<div class="col">message</div>
			<div class="col">string: ""</div>
			<div class="col">提示信息</div>
		</div>
		<div class="row">
			<div class="col">btnText</div>
			<div class="col">string: "朕知道了"</div>
			<div class="col">按钮文案</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<pre class="code-content">

this.$tip({
   title: "美少女变身",
   message: "代表月亮消灭你~",
   onConfirm: function(){
      alert("你是美少女吗？");
   }
});
	</pre>
	<div class="rg-button" @click="showTip1">
		点击查看示例	1
	</div>
	<div class="rg-button" @click="showTip2">
		点击查看示例	2
	</div>
	<div class="d3">回调会弹alert</div>
</div>

</template>
<script>
	export default{
		name: "tipExample",
		data(){
			return {
				txt: ""
			}
		},
		methods: {
			showTip1(){
				var that = this;
				this.$tip({
					title: "美少女变身",
					message: "代表月亮消灭你，哈哈，你怕了吗，精神分裂患者，了大夫两地分居地方了束带结发",
					onConfirm: function(){
						alert("你是美少女吗？");
					}
				});
			},
			showTip2(){
				var that = this;
				this.$tip({
					message: "我是没有标题的，代表月亮消灭你",
					onConfirm: function(){
						alert("你是没标题的美少女吗？");
					}
				});
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
	}
</style>