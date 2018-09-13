<template>
<div class="wrap">
	<rButton >默认按钮 default</rButton>
	<rButton type="default" fill="off">空心默认按钮</rButton>

	<rButton type="warning">示警按钮 warning</rButton>
	<rButton type="warning" fill="off">空心示警按钮 warning</rButton>

	<rButton type="disabled">不可用按钮 disabled</rButton>
	<rButton type="disabled" fill="off">空心不可用按钮 disabled</rButton>

	<rButton radius="on">圆角默认按钮</rButton>
	<rButton type="warning" radius="on" fill="off">圆角 空心 示警按钮</rButton>

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
				this.$toast('你点击了蓝色button!');
			},
			tipme(){
				this.$toast('你点击了灰色button!');
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
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