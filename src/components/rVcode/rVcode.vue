<template>
	<rInput 
		:attrs="conf" 
		@oninput="oninput" 
		@onclear="onclear"
		@onenter="onenter"
		@onfocus="onfocus"
		@onblur="onblur"
		@onchange="onchange"
		@onclickLabelIcon="onclickLabelIcon"
		@onclickInputIcon="onclickInputIcon"
	>
		<slot>
			<div class="r-vcode-img" @click="doRefresh"><img ref="rvcodeImg" :src="conf.src" alt=""></div>
		</slot>
	</rInput>
</template>
<script>
	import rInput from "../rInput/rInput"
	export default{
		name: "rVcode",
		components: { rInput },
		props: {
			attrs: Object
		},
		computed:{
			conf(){
				return this.extendObj(this.attrs,{unit: ""});
			}
		},
		methods:{
			doRefresh(){
				let img = this.$refs.rvcodeImg;
				img.setAttribute("src",img.getAttribute("src"));
			},
			onenter(e, component){
				this.$emit("onenter", e, this);
			},
			onfocus(e, component){
				this.$emit("onfocus", e, this);
			},
			onblur(e, component){
				this.$emit("onblur", e, this);
			},
			oninput(e, component){
				this.$emit("oninput", e, this);
			},
			onchange(e, component){
				this.$emit("onchange", e, this);
			},
			onclear(e){
				this.$emit("onclear", this);
			},
			onclickLabelIcon(component){
				this.$emit("onclickLabelIcon", this);
			},
			onclickInputIcon(component){
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
			extendObj(obj1,obj2){
		        for(var key in obj2){
		            obj1[key] = obj2[key];
		        }
		        obj1.name = obj1.var_name || obj1.urlkey || obj1.name; //业务中的组件name取值
		        return obj1;
		    }
		}
	}
</script>
<style lang="scss">
@function r($px){
	@return $px/18.75 * 1rem;
}
.r-vcode-img{
	margin-left: r(20);
	width: r(65);
	height: r(22);
	img{
		width: 100%;
		height: 100%;
	}
}
</style>