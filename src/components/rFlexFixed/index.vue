<template>
	<div class="r-flexfixed" @touchstart="touchstartFlexFixed" @touchend="touchendFlexFixed">
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
        el.canBodyScroll = false
        let startX = 0
        let startY = 0
        let timeId = null
        let isInScrollList = false
        let oldStartY = 0
        let directionY = ''
        let isSupportDevice = () => {
          let isSupportDevice = true
          let ua = navigator.userAgent
          if (/iP(ad|hone|od)/.test(ua) && /OS [1-9]_/.test(ua)) { // ios9以下不支持
            isSupportDevice = false
          }
          return isSupportDevice
        }
        el.__scrollBody__ = (e) => {
          if (isSupportDevice() && !el.canBodyScroll) {
            e.preventDefault()
          }
        }
        el.__touchstartDiv__ = (e) => {
          startX = e.changedTouches[0].clientX
          startY = e.changedTouches[0].clientY
          oldStartY = startY
          if (typeof el.scrollList === 'undefined') el.scrollList = el.querySelectorAll('.rFlexFixed-scroll')
          el.scrollList.forEach(element => {
            if (element.contains(e.target)) {
              isInScrollList = true
            }
          })
        }
        el.__touchmoveDiv__ = (e) => {
          let maxScrollHeight = el.scrollHeight - el.clientHeight
          el.__maxScrollHeight = maxScrollHeight

          if (e.changedTouches[0].clientY > oldStartY) {
            directionY = 'down' // 向下
          } else if (e.changedTouches[0].clientY < oldStartY) {
            directionY = 'up' // 向上
          }
          oldStartY = e.changedTouches[0].clientY

          if (directionY === 'down' && el.scrollTop == 0) { // 顶部向下
            el.canBodyScroll = false
          } else if (directionY === 'up' && el.scrollTop >= maxScrollHeight) { // 底部向上
            el.canBodyScroll = false
          } else {
            el.canBodyScroll = true
          }
          if (isInScrollList && (Math.abs(e.changedTouches[0].clientX - startX) > Math.abs(e.changedTouches[0].clientY - startY))) {
            el.canBodyScroll = true
          }
          binding.expression && binding.value(el.scrollTop, el.__maxScrollHeight, directionY)
        }
        el.__touchendDiv__ = (e) => {
          el.canBodyScroll = false
          isInScrollList = false
          let start = null

          function step (timestamp) {
            if (!start) start = timestamp
            var progress = timestamp - start
            if (progress < 10000) {
              timeId = requestAnimationFrame(step)
            }
            if (el.scrollTop > el.oldScrollTop) {
              directionY = 'up'
            } else if (el.scrollTop < el.oldScrollTop) {
              directionY = 'down'
            }
            binding.expression && binding.value(el.scrollTop, el.__maxScrollHeight, directionY)
            el.oldScrollTop = el.scrollTop
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
    scroll (scrollTop, maxScrollHeight, directionY) {
      scrollTop = Math.max(0, scrollTop)
      scrollTop = Math.min(scrollTop, maxScrollHeight)
      if (scrollTop !== this.oldScrollTop) {
        this.$emit('scroll', scrollTop, maxScrollHeight, directionY)
      }
      this.oldScrollTop = scrollTop
    },
    touchstartFlexFixed () {
      this.$refs.main.canBodyScroll = false // 解决keep-alive兼容
    },
    touchendFlexFixed () {
      this.$refs.main.canBodyScroll = true // 解决keep-alive兼容
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>