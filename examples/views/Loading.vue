<template>
<div id="tip-wrap" class="wrap">
	<div class="title">Loading 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">text</div>
			<div class="col">string: ""</div>
			<div class="col">加载文案提示</div>
		</div>
		<div class="row">
			<div class="col">width</div>
			<div class="col">Number: 100</div>
			<div class="col">loading区的长度（750px设计图下）</div>
		</div>
		<div class="row">
			<div class="col">cwidth</div>
			<div class="col">Number: 30</div>
			<div class="col">loading区圆圈的大小（750px设计图下）</div>
		</div>
		<div class="row">
			<div class="col">textInside</div>
			<div class="col">Boolean: false</div>
			<div class="col">文案位置是否在圆圈内</div>
		</div>
		<div class="row">
			<div class="col">color</div>
			<div class="col">String: "#4080e8"</div>
			<div class="col">loading圆圈的颜色</div>
		</div>
		<div class="row">
			<div class="col">textColor</div>
			<div class="col">String: "#fff"</div>
			<div class="col">文案的颜色</div>
		</div>
		<div class="row">
			<div class="col">textFontSize</div>
			<div class="col">Number: 28</div>
			<div class="col">文案的字体大小（750px设计图下）</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<pre class="code-content">
//常规
var loading = this.$loading();

setTimeout(function(){
	loading.remove();
}, 2000)


//倒计时效果
var loading = this.$loading({
	propsData: {
		text: '10s',
		textInside: true
	}
});

var count = 10;

var timer = setInterval(function(){
	count--;
	if(count == 0){
		loading.remove();
	}else{
		loading.text = count + 's';
	}
}, 1000)
	</pre>
	<div class="rg-button" @click="showLoading0">
		Loading 默认样式
	</div>
	<div class="rg-button" @click="showLoading1">
		Loading 添加文案
	</div>
	<div class="rg-button" @click="showLoading2">
		Loading 倒计时
	</div>
	<div class="rg-button" @click="showLoading3">
		Loading 更改样式
	</div>
</div>

</template>
<script>
	// import emitter from "../../src/mixins/emitter"
	export default{
		name: "loadingExample",
		// mixins: [emitter],
		data(){
			return {
				txt: ""
			}
		},
		methods: {
			showLoading0(){
				var self = this;

				var loading = this.$loading();

				setTimeout(function(){
					loading.remove();
				}, 2000)
			},
			showLoading1(){
				var self = this;

				var loading = this.$loading({
					propsData: {
						text: '灰太狼快跑！'
					}
				});

				setTimeout(function(){
					loading.remove();
				}, 2000)
			},
			showLoading2(){
				var self = this;

				var loading = this.$loading({
					propsData: {
						text: '10s',
						textInside: true
					}
				});

				var count = 10;

				var timer = setInterval(function(){
					count--;
					if(count == 0){
						loading.remove();
					}else{
						loading.text = count + 's';
					}
				}, 1000)
			},
			showLoading3(){
				var self = this;

				var loading = this.$loading({
					propsData: {
						text: 'Hello World',
						textFontSize: 32,
						color: '#e0a711',
						textColor: '#e0a711'
					}
				})
				
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