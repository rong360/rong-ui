<template>
	<div class="r-flexfixed">
		<header>
			<slot name="header"></slot>
		</header>
		<main ref="main" v-scroll="scroll">
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
export default {
  name: 'rFlexFixed',
  directives: {
    'scroll': {
      bind: (el, binding) => {
        let canBodyScroll = false
        let startY = 0
        let timeId = null
        el.__scrollBody__ = (e) => {
          if (!canBodyScroll) {
            e.preventDefault()
          }
        }
        el.__touchstartDiv__ = (e) => {
          startY = e.changedTouches[0].clientY
        }
        el.__touchmoveDiv__ = (e) => {
          let maxScrollHeight = el.scrollHeight - el.clientHeight
          el.__maxScrollHeight = maxScrollHeight

          if ((e.changedTouches[0].clientY - startY) > 0 && el.scrollTop == 0) { // 向下
            canBodyScroll = false
          } else if ((e.changedTouches[0].clientY - startY) < 0 && el.scrollTop >= maxScrollHeight) { // 向上
            canBodyScroll = false
          } else {
            canBodyScroll = true
          }
          binding.expression && binding.value(el.scrollTop, el.__maxScrollHeight)
        }
        el.__touchendDiv__ = (e) => {
          canBodyScroll = false
          let start = null

          function step (timestamp) {
            if (!start) start = timestamp
            var progress = timestamp - start
            if (progress < 5000) {
              timeId = requestAnimationFrame(step)
            }
            binding.expression && binding.value(el.scrollTop, el.__maxScrollHeight)
          }
          timeId && cancelAnimationFrame(timeId)
          timeId = requestAnimationFrame(step)
        }
        document.body.addEventListener('touchmove', el.__scrollBody__, {passive: false })
        el.addEventListener('touchstart', el.__touchstartDiv__, false)
        el.addEventListener('touchmove', el.__touchmoveDiv__, false)
        el.addEventListener('touchend', el.__touchendDiv__, false)
      },
      unbind: (el, binding) => {
        document.body.removeEventListener('touchmove', el.__scrollBody__, false)
        el.removeEventListener('touchstart', el.__touchstartDiv__, false)
        el.removeEventListener('touchmove', el.__touchmoveDiv__, false)
        el.removeEventListener('touchend', el.__touchmoveDiv__, false)
      }
    }
  },
  methods: {
    scroll (scrollTop, maxScrollHeight) {
      scrollTop = Math.max(0, scrollTop)
      scrollTop = Math.min(scrollTop, maxScrollHeight)
      this.$emit('scroll', scrollTop, maxScrollHeight)
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>