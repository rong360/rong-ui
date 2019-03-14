<template>
	<div class="r-flexfixed">
		<header>
			<slot name="header"></slot>
		</header>
		<main v-scroll>
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

          if ((e.changedTouches[0].clientY - startY) > 0 && el.scrollTop == 0) { // 向下
            canBodyScroll = false
          } else if ((e.changedTouches[0].clientY - startY) < 0 && el.scrollTop >= maxScrollHeight) { // 向上
            canBodyScroll = false
          } else {
            canBodyScroll = true
          }
        }
        el.__touchendDiv__ = (e) => {
          canBodyScroll = false
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
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>