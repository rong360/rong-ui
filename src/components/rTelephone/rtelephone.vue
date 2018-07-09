<template>
	<rNumber :attrs="conf" @oninput="oninput" @onclear="onclear" @onconfirm="onconfirm" @onclickLabelIcon="onclickLabelIcon" @onclickInputIcon="onclickInputIcon"></rNumber>
</template>
<script>
	import rNumber from "../rNumber/rNumber"
	export default{
		name: "rTelephone",
		components: { rNumber },
		props: {
			attrs: Object
		},
		computed: {
			conf(){
				let self = this,
					defaultConfig = {
						verify: function(){
							return self.telephoneVerify(this);
						}
					};
				Object.assign(defaultConfig, this.attrs);
				defaultConfig.type = 'int';
				defaultConfig.maxlength = 11;
				defaultConfig.unit = '';
				return defaultConfig;
			}
		},
		methods:{
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
			},
			telephoneVerify(numberComponent){
				var phone = numberComponent.currentValue;
				if(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)){
					return true;
				}else{
					this.$toast && this.$toast(this.attrs.title+"格式错误！")
					return false;
				}
			}
		}
	}
</script>