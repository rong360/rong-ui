<template>
	<span :class="iconClsName" :style="styles" @click="doClick">
		<template v-if="path">
			<span class="path1"></span>
			<span class="path2"></span>
		</template>
	</span>
</template>
<script>
	export default{
		name: "rIcon",
		props: {
			size: [String,Number],
			color: {
				type: String,
				default: '#4080e8'
			},
			type: String
		},
		computed:{
			iconClsName(){
				return `r-iconfont-${this.type}`
			},
			path(){
				let type = ["sort-inc-red","sort-inc-blue","sort-dec-red","sort-dec-blue","note"];
				return type.indexOf(this.type)>=0;
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