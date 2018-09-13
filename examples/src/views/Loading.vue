<template>
<div class="wrap example">
	<div class="r-example" wrap="box ba_c bp_c">
		<div class="rg-button" @click="showLoading0">默认</div>
		<p data-id="0" @click="doSource">查看源码</p>
	</div>
	<div class="r-example" wrap="box ba_c bp_c">
		<div class="rg-button" @click="showLoading1">添加文案</div>
		<p data-id="1" @click="doSource">查看源码</p>
	</div>
	<div class="r-example" wrap="box ba_c bp_c">
		<div class="rg-button" @click="showLoading2">倒计时</div>
		<p data-id="2" @click="doSource">查看源码</p>
	</div>
	<div class="r-example" wrap="box ba_c bp_c">
		<div class="rg-button" @click="showLoading3">自定义</div>
		<p data-id="3" @click="doSource">查看源码</p>
	</div>
	<div id="code_area" v-show="showSource">
		<div class="code-body"></div>
		<div class="close" @click="hideSource"><rIcon type="close-circled"></rIcon></div>
	</div>
</div>

</template>
<script>
import Decode from "../util/decode.js"

	export default{
		name: "loadingExample",
		data(){
			return {
				showSource: false,
				f0: `var loading = this.$loading();

				setTimeout(function(){
					loading.remove();
				}, 2000)`,
				f1: `var loading = this.$loading({
					propsData: {
						text: '灰太狼快跑！'
					}
				});

				setTimeout(function(){
					loading.remove();
				}, 2000)`,
				f2: `var loading = this.$loading({
					propsData: {
						text: '3s',
						textInside: true
					}
				});

				var count = 3;

				var timer = setInterval(function(){
					count--;
					if(count == 0){
						loading.remove();
					}else{
						loading.text = count + 's';
					}
				}, 1000)`,
				f3:`var loading = this.$loading({
					propsData: {
						text: 'Hello World，disappear in 2s',
						width: 140,
						cwidth: 40,
						textFontSize: 32,
						color: '#e0a711',
						textColor: '#e0a711'
					}
				});

				setTimeout(function(){
					loading.remove();
				},2000)`
			}
		},
		methods: {
			showLoading0(){
				var loading = this.$loading();

				setTimeout(function(){
					loading.remove();
				}, 2000)
			},
			showLoading1(){
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
				var loading = this.$loading({
					propsData: {
						text: '3s',
						textInside: true
					}
				});

				var count = 3;

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
				var loading = this.$loading({
					propsData: {
						text: 'Hello World，disappear in 2s',
						width: 140,
						cwidth: 40,
						textFontSize: 32,
						color: '#e0a711',
						textColor: '#e0a711'
					}
				})

				setTimeout(function(){
					loading.remove();
				},2000)
				
			},
			doSource(e){
				var id = e.target.dataset.id;				
				var jscode = this["f"+id];
				var decode_jscode = Decode(jscode);
				this.$el.querySelector("#code_area .code-body").innerHTML = decode_jscode.code;
					
				this.showSource = true;
			},
			hideSource(){
				this.showSource = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/2/18.75* 1rem;
}
.rg-button{
	margin: r(30) 0;
}
</style>