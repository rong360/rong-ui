<template>
	<rFixed>
		<rTitlebar slot="header" backurl="#" title="Fixed 吸顶或吸底"  @onback="goback"></rTitlebar>	
		<p>content 1</p>
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
			下一步
		</rButton>
	</rFixed>
</template>

<script>
export default {
  methods: {
    goback (e) {
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
	text-align: left;
	padding: 1rem .8rem;
	background: #fff;
}
</style>