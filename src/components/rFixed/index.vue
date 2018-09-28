<template>
	<div class="r-fixed">
		<header>
			<slot name="header"></slot>
		</header>
		<main :style="mainStyle" ref="main">
			<slot></slot>
		</main>
		<footer @click="clickFooter">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script type="text/javascript">
	export default { 
		name: 'rFixed',
		props: {
			paddingTop: {
				type: String,
				default: '2.4rem'
			},
			paddingBottom: {
				type: String,
				default: '2.4rem'
			}
		},
		computed: {
			mainStyle(){
				let style = {}
				if(this.$slots.header) style.paddingTop = this.paddingTop
				if(this.$slots.footer) style.paddingBottom = this.paddingBottom
				return style
			}
		},
		mounted(){
			document.body.addEventListener('touchstart', this.startBody)
			document.body.addEventListener('touchmove', this.scrollBody, { passive: false })
		},
		methods: {
			clickFooter(){
				let self = this;
				//处理footer中有input等输入框时文字被遮挡三分之一的bug。
				clearInterval(this.intervalId)
				this.count = 0
				this.intervalId = setInterval(function(){
					document.body.scrollTop = document.body.scrollHeight;
					self.count++;
					if(self.count > 3){
						clearInterval(self.intervalId)
					}
				}, 200)
			},
			startBody(e){
				this.maxScrollTop = this.$refs.main.scrollHeight - this.$refs.main.clientHeight;
				this.startY = e.targetTouches && e.targetTouches[0].pageY
			},
			scrollBody(e){
				let currentY = e.targetTouches && e.targetTouches[0].pageY,
					scrollTop = this.$refs.main.scrollTop
				if((currentY > this.startY && scrollTop == 0) || (currentY < this.startY && scrollTop >= this.maxScrollTop)){
					e.preventDefault()
				}
			}
		},
		beforeDestroy(){
			document.body.removeEventListener('touchstart', this.startBody)
			document.body.removeEventListener('touchmove', this.scrollBody, { passive: false })
		}
	}
</script>

<style lang='scss'>
@import "./index.scss";
</style>