<template>
	<rNumber 
		:attrs="conf" 
		@oninput="oninput" 
		@onclear="onclear" 
		@onfocus="onfocus"
		@onblur="onblur"
		@onconfirm="onconfirm"
		@onclickLabelIcon="onclickLabelIcon"
		@onclickInputIcon="onclickInputIcon"
	>
	</rNumber>
</template>
<script>
	import rNumber from "../rNumber/rNumber"
	export default{
		name: "rInt",
		components: { rNumber },
		props: {
			attrs: Object
		},
		computed: {
			conf(){
				let defaultConfig = {};
				Object.assign(defaultConfig, this.attrs);
				defaultConfig.type = 'int';
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
			onfocus(e, component){
				this.$emit("onfocus", e , this, component);
			},
			onblur(e, component){
				this.$emit("onblur", e , this, component);
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
			getSerializeObject(){
				return this.$children[0].getSerializeObject();
			}
		}
	}
</script>