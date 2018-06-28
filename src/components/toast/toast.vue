<template>
	<div class="r-toast">
		<div class="r-toast-wrap">
			<div class="r-toast-icon" v-if="type!='long'"><rIcon :type="iconType" size="1.6rem"></rIcon></div>
			<div :class="['r-toast-msg',
					type=='long' ? 'r-toast-longmsg': '']"
				v-html="message"
			></div>
		</div>		
	</div>
</template>
<script>
	import rIcon from "../rIcon/rIcon"
	export default{
		name: "rToast",
		components: { rIcon },
		props: {
			//toast显示信息
			message: {
				type: String
			},
			//toast类型
			type: {
				type: String,
				default: 'positive'//positive积极文案,negetive消极文案,long长文本
			},
			//toast显示时间（ms）
			time: {
				type: Number,
				default: 2000
			}
		},
		computed:{
			iconType(){
				return this.type=="positive" ? "info-pos" : ((this.type=="negetive") ? "info-neg" : "");
			}
		},

		mounted(){
			let that = this;
			this.timeoutId = setTimeout(function(){
				that.remove();
				that.callback();
			},that.time);
			window.addEventListener('hashchange', this.remove);
		},
		methods: {
			callback(){

			},
			remove(){
				this.$el.remove();
				window.removeEventListener('hashchange', this.remove);
				clearTimeout(this.timeoutId);
				this.$destroy();
			}
		}
	}
</script>
<style lang='scss'>
@import "./toast.scss";
</style>