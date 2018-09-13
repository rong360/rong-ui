<template>
	<div class="wrap example">
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="toast-btn" @click="showToast0">默认</div>
			<p data-id="0" @click="doSource">查看源码</p>
		</div>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="toast-btn" @click="showToast1">消极文案</div>
			<p data-id="1" @click="doSource">查看源码</p>
		</div>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="toast-btn" @click="showToast2">积极文案</div>
			<p data-id="2" @click="doSource">查看源码</p>
		</div>
		<div class="r-example" wrap="box ba_c bp_c">
			<div class="toast-btn" @click="showToast3">自定义</div>
			<p data-id="3" @click="doSource">查看源码</p>
		</div>
		
		<div id="code_area" v-show="showSource">
        <!-- <div class="code-body" wrap="box ba_c">
			<div class="c-lines"></div>
			<div class="c-content"></div>
		</div> -->
			<div class="code-body"></div>
			<div class="close" @click="hideSource"><rIcon type="close-circled"></rIcon></div>
		</div>
	</div>
</template>
<script>
import Decode from "../util/decode.js"

	export default{
		name: "toastExp",
		data(){
			return {
				showSource: false,
				f0: 'this.$toast("纵然伤心，也不要愁眉不展，因为你不知是谁会爱上你的笑容")',
				f1: `this.$toast({
						propsData: {
							message: '天空没有翅膀的痕迹，而我已飞过。',
							type: 'negetive'
						}
					})`,
				f2: `this.$toast({
						propsData: {
							message: '我的心是旷野的鸟，在你的眼睛里找到了它的天空。',
							type: 'positive'
						}
					})`,
				f3: `this.$toast({
					propsData: {
						message: '有时候爱情不是因为看到了才相信，而是因为相信才看得到。',
						type: "positive",
						time: 4000,
						wrapStyleObj: {
							bottom: "25%",
							color: "#5cb43f",
							background: "#000"
						}
					},
					methods: {
						callback(){
							alert("这是toast消失的回调");
						}
					}
				})`
			}
		},
		methods:{
			showToast0(){
				this.$toast("纵然伤心，也不要愁眉不展，因为你不知是谁会爱上你的笑容");
			},
			showToast1(){
				this.$toast({
					propsData: {
						message: '天空没有翅膀的痕迹，而我已飞过。',
						type: 'negetive'
					}
				});
			},
			showToast2(){
				this.$toast({
					propsData: {
						message: '我的心是旷野的鸟，在你的眼睛里找到了它的天空。',
						type: 'positive'
					}
				});
			},
			showToast3(){
				this.$toast({
					propsData: {
						message: '有时候爱情不是因为看到了才相信，而是因为相信才看得到。',
						type: "positive",
						time: 4000,
						wrapStyleObj: {
							bottom: "25%",
							color: "#5cb43f",
							background: "#000"
						}
					},
					methods: {
						callback(){
							alert("这是toast消失的回调");
						}
					}
				});
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
	@return $px/18.75*1rem;
}

.toast-btn{
	margin: 1.333rem 0;
	width: r(150);
	height: r(45);
	line-height: r(45);
	text-align: center;
	font-size: r(20);
	background: #4080e8;
	color: #fff;
	border-radius: r(10);
}
</style>