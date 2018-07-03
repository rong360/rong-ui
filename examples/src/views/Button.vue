<template>
<div id="dl-wrap" class="wrap">
	<div class="title">示例</div>
	<rButton >
		默认按钮 default
	</rButton>
	<rButton type="default" fill="off">
		空心默认按钮
	</rButton>

	<rButton type="warning">
		示警按钮 warning
	</rButton>
	<rButton type="warning" fill="off">
		空心示警按钮 warning
	</rButton>

	<rButton type="disabled">
		不可用按钮 disabled
	</rButton>
	<rButton type="disabled" fill="off">
		空心不可用按钮 disabled
	</rButton>

	<rButton radius="on">
		圆角默认按钮
	</rButton>
	<rButton type="warning" radius="on" fill="off">
		圆角 空心 示警按钮
	</rButton>

	<rButton :btnStyle="btnStyle">
		<div class="btn-text">
			<p>下载APP</p>
			<p>马上申请</p>
		</div>
	</rButton>
	
	<div class="btn-group">
		<rButton :btnStyle="btnStyle1" @click="clickme">
		自定义样式1 click me
		</rButton>
		<rButton :btnStyle="btnStyle2" @click="tipme">
		自定义样式2 click me
		</rButton>
	</div>
	<div class="btn-middle">
	<rButton type="warning" radius="on" fill="off" :btnStyle="btnStyle3">
		圆角 空心 示警 自定义宽度
	</rButton>
	</div>

	<div class="title">Button 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">type</div>
			<div class="col">string: "default"</div>
			<div class="col">按钮类型【 default | warning | disabled 】</div>
		</div>
		<div class="row">
			<div class="col">radius</div>
			<div class="col">String: "off"</div>
			<div class="col">圆角开关, off-无圆角，on-有圆角)</div>
		</div>
		<div class="row">
			<div class="col">fill</div>
			<div class="col">String: 'on'</div>
			<div class="col">背景是否填充 on-非空心按钮 off-空心按钮</div>
		</div>
		<div class="row">
			<div class="col">btnStyle</div>
			<div class="col">Object: {}</div>
			<div class="col">button自定义样式</div>
		</div>
		<div class="row">
			<div class="col">click</div>
			<div class="col">function</div>
			<div class="col">点击button回调函数</div>
		</div>			
	</div>
	<div class="title">示例代码</div>
	<textarea class="code-content" style="min-height: 10rem;margin: 0;padding: 0; width: 90%;">
	<rButton >
		默认按钮 default
	</rButton>

	<rButton type="warning">
		示警按钮 warning
	</rButton>

	<rButton type="disabled">
		不可用按钮 disabled
	</rButton>

	<rButton radius="on">
		圆角默认按钮
	</rButton>

	</textarea>

</div>

</template>
<script>
	export default{
		name: "buttonExample",
		data(){
			return {
				btnStyle: {
					'background': '-webkit-linear-gradient(30deg,#f66,#369)',
					'line-height': '120%'
				},
				
				btnStyle1: {
					'width': '50%',
					'background': "#4080e8"
				},
				btnStyle2:{
					'width': '50%',
					'background': "#d8d7d7"
				},
				btnStyle3:{
					'color': '#efb615'
				}
			}
			
		},
		methods:{
			clickme(){
				alert('你点击了蓝色button!');
			},
			tipme(){
				alert('你点击了灰色button!');
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
	#dl-wrap{
		padding-bottom: r(30);
		.d3{
			margin: r(60);
			
			color: #4080e8;
			font-size: r(30);
		}
	}
	.r-button{margin: 5px 0;}
	.btn-text{
		padding-top: r(10);
	}
	.btn-group{
		display: -webkit-box;

	}
	.btn-middle{
		width: 12rem;
		margin: 0 auto;
	}
</style>