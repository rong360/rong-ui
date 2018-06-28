<template>
	<span :class="iconClsName" :style="styles" @click="doClick"></span>
</template>
<script>
	export default{
		name: "rIcon",
		props: {
			size: [String,Number],
			color: String,
			type: String
		},
		computed:{
			iconClsName(){
				return `r-iconfont-${this.type}`
			},
			styles(){
				let style = {};

                if (this.size) {
                    style['font-size'] = this.size;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
			}

		},
		methods:{
			doClick(e){
				this.$emit("iconClick",e);
			}
		}	

	}
</script>
<style>
	@import '../../assets/iconfont/style.scss'
</style>