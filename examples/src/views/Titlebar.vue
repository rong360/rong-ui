<template>
	<div class="wrap">
		<div class="exp">
			<rTitlebar theme="a" title="主题a" backurl="/" @onback="onBack"></rTitlebar>
			<rTitlebar theme="b" title="主题b"></rTitlebar>
			<rTitlebar theme="c" title="主题c"></rTitlebar>
			<rTitlebar theme="d" title="主题d"></rTitlebar>
			<rTitlebar theme="e" title="主题e"></rTitlebar>
			<rTitlebar title="自定义1" :tbStyle="tbStyle0">
				<div slot="r" @click="doQask">
					常见问题
				</div>
			</rTitlebar>
			<rTitlebar title="自定义2" :tbStyle="tbStyle1">				
				<div slot="l" @click="goHome"><rIcon type="return" size="13"></rIcon>返回</div>
				<div slot="r" @click="goCenter">我的<rIcon type="arrow-right" size="13"></rIcon></div>
			</rTitlebar>			
		</div>
	</div>
</template>
<script>
	export default{
		name: "rTitlebarExp",
		data(){
			return {
				tbStyle0: {
					background: "#999"
				},
				tbStyle1: {
					background: "#4080e8",
					color: "#11ea11",
					"font-size": "13px"
				}
			}
		},
		methods:{
			onBack(){
				this.$toast("点击返回触发的回调函数~");
			},
			doQask(){
				this.$toast("点击了常见问题")
			},
			goHome(){
				this.$toast("点击返回~");
			},
			goCenter(){
				this.$toast("要去用户中心了~");
			}
		}
	}
</script>
<style lang="scss" scoped>
	
@function r($px){
	@return $px/18.75*1rem;
}
.exp{
	margin: r(15) 0;
}
.r-titlebar{
	margin: r(10) 0;
}	
</style>