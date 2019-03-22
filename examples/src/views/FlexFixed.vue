<template>
	<rFlexFixed @scroll="scroll">
		<rTitlebar slot="header"  title="FlexFixed 吸顶或吸底" @onback="goback"></rTitlebar>	
		<p>content 11111</p>
		<p>content </p>
		<p>content </p>
		<button>{{count}}</button>
		<p>content 2</p>
		<p>content </p>
		<p>content </p>
		<p>content 3</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 4</p>
		<p>content </p>
		<p>content </p>
		<p>content 5</p>
		<p>content </p>
		<p>content </p>
		<p>content 6</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 2</p>
		<p>content </p>
		<p>content </p>
		<p>content 3</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 4</p>
		<p>content </p>
		<p>content </p>
		<p>content 5</p>
		<p>content </p>
		<p>content </p>
		<p>content 6</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 2</p>
		<p>content </p>
		<p>content </p>
		<p>content 3</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 4</p>
		<p>content </p>
		<p>content </p>
		<p>content 5</p>
		<p>content </p>
		<p>content </p>
		<p>content 6</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 2</p>
		<p>content </p>
		<p>content </p>
		<p>content 3</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 4</p>
		<p>content </p>
		<p>content </p>
		<p>content 5</p>
		<p>content </p>
		<p>content </p>
		<p>content 6</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 2</p>
		<p>content </p>
		<p>content </p>
		<p>content 3</p>
		<p>content </p>
		<p>content </p>
		<p>content </p>
		<p>content 4</p>
		<p>content </p>
		<p>content </p>
		<p>content 5</p>
		<p>content </p>
		<p>content </p>
		<p>content 6</p>
		<p>content </p>
		<p>content </p>
		<p>content 7</p>
		<p style="text-align: center"><a href="https://github.com/rong360/rong360.github.io/tree/master/rong-ui/doc" target="_blank">查看文档</a></p>
		<p></p>
		<rButton slot="footer">
			下一步{{scrollTop}} -- {{maxScrollHeight}}
		</rButton>
	</rFlexFixed>
</template>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      maxScrollHeight: 0,
      count: 0
    }
  },
  methods: {
    scroll (scrollTop, maxScrollHeight) {
      console.log(scrollTop, maxScrollHeight)
      this.scrollTop = scrollTop
      this.maxScrollHeight = maxScrollHeight
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@function r($px){
	@return $px/18.75*1rem;
}
p{
    line-height: 2rem;
}
</style>