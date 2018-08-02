<template>
	<rNumber 
		:attrs="conf" 
		@oninput="oninput" 
		@onclear="onclear"
		@onconfirm="onconfirm"
		@onclickLabelIcon = "onclickLabelIcon"
		@onclickInputIcon = "onclickInputIcon"
	>
		<slot>
			<div :class="['r-mvcode-btn', disabled?'disabled':'']" @click="doSendMvcode">{{btnText}}</div>
		</slot>
	</rNumber>
</template>
<script>
	import { ajax } from "../../util/ajax"
	import rNumber from "../rNumber/rNumber"
	export default{
		name: "rMvcode",
		components: { rNumber },
		data(){
			return {
				disabled: false,
				btnText: '获取验证码'
			}
		},
		props: {
			attrs: Object
		},
		computed: {
			conf(){
				let defaultConfig = {
					type: 'int',
					counter: 10,
					params: {}
				}
				Object.assign(defaultConfig, this.attrs)
				this.disabled = this.attrs.disabled || this.attrs.readonly || false
				defaultConfig.disabled = false //只禁用按钮，不禁用输入框
				defaultConfig.readonly = false
				return defaultConfig
			}
		},
		methods:{
			doSendMvcode(){
				let self = this;
				if(this.disabled) return;
				this.disabled = true;
				this.startTimer();
				if(self.conf.action){
					ajax({
						url: self.conf.action,
						method: "post",
						data: self.conf.params,
						success: function(res){
							self.$emit("success",res);
						},
						error: function(res){
							self.$emit("fail",res);
						}
					})
				}
				this.$emit("onclickSendBtn")
			},
			startTimer(){
				let self = this,
					counter = this.conf.counter,
					timer = null;
				this.btnText = counter + "s后获取";
				timer = setInterval(function(){
					counter--;
					self.btnText = counter + "s后获取";
					if(counter == 0){
						self.disabled = false;
						clearInterval(timer);
						self.btnText = "获取验证码";
					}
				},1000)
			},
		    oninput(val){
				this.$emit("oninput", val);
			},
			onclear(){
				this.$emit("onclear", this);
			},
			onconfirm(code, codeStr){
				this.$emit('onconfirm', code, codeStr, this);
			},
			onclickLabelIcon(){
				this.$emit("onclickLabelIcon", this);
			},
		    onclickInputIcon(){
		    	this.$emit("onclickInputIcon", this);
		    },
			verify(){
				return this.$children[0].verify();
			},
			/*获取表单数据*/
			getSerialize(){
				return this.$children[0].getSerialize();
			},
			getSerializeArray(){
				return this.$children[0].getSerializeArray();
			}
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/18.75 * 1rem;
}
.r-mvcode-btn{
	margin-left: r(20);
	width: r(72);
	height: r(20);
	line-height: r(20);
	font-size: r(12);
	color: #666;
	border: 1px solid #666;
	// box-sizing: border-box;
	border-radius: 20px;
	text-align: center;
	&.disabled{
		border: 1px solid #C8C7CC;
		color: #C8C7CC;
	}
}
</style>