<template>
	<rNumber 
		:attrs="conf" 
		@oninput="oninput" 
		@onclear="onclear" 
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
			onclear(e){
				this.$emit("onclear", e);
			},
			onconfirm(code, codeStr){
				this.$emit('onconfirm', code, codeStr, this);
			},
			onclickLabelIcon(e){
				this.$emit("onclickLabelIcon", e, this);
			},
		    onclickInputIcon(e){
		    	this.$emit("onclickInputIcon", e, this);
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