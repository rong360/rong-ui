<template>
  <div class="r-dialog" :class="className" v-show="show" @touchstart="touchstartDialog($event)" @touchmove="touchmoveDialog($event)">
    <transition name="dialog-fade">
      <div class="r-dlg-cliper" :style="CliperStyleObj" v-show="animateShow"></div>
    </transition>
    <transition
      name="dialog-slide"
      v-on:enter="enter"
      v-on:before-enter="beforeEnter"
      v-on:after-leave="afterLeave"
    >
      <div
        class="r-dlg-content"
        :style="dlgStyleObj"
        ref="dlgContent"
        v-show="animateShow"
        @touchstart="clickDlg"
        @touchmove="moveDlg"
      >
        <div class="r-title" v-if="showTitle" :style="titleStyleObj">
          <div class="r-title-wrap">{{title}}</div>
        </div>
        <img :src="iconComputed" alt v-if="showIcon" :style="iconStyleObj">
        <div class="r-dlg-close" v-if="showCloseBtn" :style="closeStyleObj" @click="onClose">
          <svg
            width="11px"
            height="11px"
            viewBox="0 0 11 11"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="rong360_Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-249.000000, -10.000000)" fill="#999999">
                <path
                  d="M254.50013,14.8683272 L249.762514,10.1306735 C249.588122,9.95644215 249.305423,9.95644215 249.130794,10.1306735 C248.956402,10.3052215 248.956402,10.5880359 249.130794,10.7624255 L253.868428,15.500023 L249.130795,20.2376113 C248.956402,20.4120016 248.956402,20.6948302 249.130795,20.8692073 C249.305425,21.0435976 249.588125,21.0435976 249.76228,20.8692073 L254.499971,16.1315614 L259.237665,20.8692176 C259.411819,21.0435941 259.694768,21.0435941 259.869384,20.8692176 C260.043539,20.694828 260.043539,20.4120004 259.869384,20.2376239 L255.131668,15.4998705 L259.869205,10.7623788 C260.043598,10.5880017 260.043598,10.3053314 259.869205,10.1307828 C259.694588,9.95640572 259.411875,9.95640572 259.23772,10.1307828 L254.50013,14.8683272 Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div
          :class="['r-content',!showIcon&&!showTitle&&showCloseBtn?'r-content-top':'']"
          :style="contentStyleObj"
        >
          <div v-html="message"></div>
          <slot name="content"></slot>
        </div>
        <rContent :rContentData="rContentData" ref="rContent"></rContent>
        <div class="r-btn-group" v-if="showCancelBtn || showConfirmBtn">
          <div
            class="r-btn-cancel"
            v-if="showCancelBtn"
            :style="cancelBtnStyleObj"
            @click="onCancel"
            v-html="cancelBtnText"
          ></div>
          <div
            class="r-btn-confirm"
            v-if="showConfirmBtn"
            :style="confirmBtnStyleObj"
            @click="onConfirm"
            v-html="confirmBtnText"
          ></div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'rDialog',
  data: function () {
    return {
      animateShow: !this.animate,
			fromDlgCst: false,
			scrollList: null,
      currentScrollArea: null,
      dialogMouseInfo: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      }
    }
  },
  props: {
    // 标题
    title: String,
    showTitle: {
      type: Boolean,
      default: false
    },
    titleStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // icon
    icon: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
		},
		iconStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 内容
    message: String,
    contentStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // cancelBtn
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // confirmBtn
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    confirmBtnStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // closeBtn
    showCloseBtn: {
      type: Boolean,
      default: false
    },
    closeStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 遮罩层
    CliperStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // dialog框
    dlgStyleObj: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 显示位置
    position: {
      type: Object,
      default: function () {
        return {
          x: 'center',
          y: 'center'
        }
      }
    },
    animate: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    rContentData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    canDrag: {
      type: Boolean,
      default: false
    },
    removeDialogOnHashChange: {
      type: Boolean,
      default: true
    },
    className: String
  },
  computed: {
    iconComputed () {
      var icon = 'changgui'

      if (this.icon) icon = this.icon

      // 配置icon
      switch (icon) {
        case 'changgui': // 常规
          icon =
            'https://static.rong360.com/upload/png/9d/20/9d20557ddb328a4f3b47cd1d2e258a3f.png'
          break
        case 'shuxie': // 书写
          icon =
            'https://static.rong360.com/upload/png/92/d3/92d34073abe419d05590abaf410d85e6.png'
          break
        case 'beiju': // 悲剧了
          icon =
            'https://static.rong360.com/upload/png/bf/14/bf14d3364823a05b5d17ac554908fb02.png'
          break
      }

      return icon
    }
  },
  components: {
    rContent: {
      template: '<div></div>'
    }
  },
  updated () {
    this.resetPos()
  },
  mounted () {
    var self = this

    this.animateShow = true

    this.$nextTick(function () {
      this.resetPos()
      this.viewWidth = document.documentElement.clientWidth
      this.viewHeight = document.documentElement.clientHeight
      this.maxL = this.viewWidth - this.$refs.dlgContent.offsetWidth
			this.maxT = this.viewHeight - this.$refs.dlgContent.offsetHeight
			if(this.scrollList===null){
        this.scrollList = this.$refs.dlgContent.querySelectorAll('.scroll-area')
      }
    })

    if (this.fromDlgCst) {
      this.removeDialogOnHashChange && window.addEventListener('hashchange', this.remove)
    }
  },
  methods: {
    onCancel () {
      this.$emit('onCancel')
    },
    onConfirm () {
      this.$emit('onConfirm', this)
    },
    onClose () {
      this.$emit('onClose')
    },
    remove () {
      if (this.animate) {
        this.animateShow = false
      } else {
        this._remove()
      }
    },
    _remove () {
      if (this.fromDlgCst && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy()
        this.removeDialogOnHashChange && window.removeEventListener('hashchange', this.remove)
      }
    },
    resetPos () {
      if (!this.$refs.dlgContent) return

      var dialogWidth = this.$refs.dlgContent.offsetWidth
      var dialogHeight = this.$refs.dlgContent.offsetHeight
      var screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      var screenHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight

      if (dialogWidth > screenWidth) {
        this.$refs.dlgContent.style.width = screenWidth + 'px'
      } else {
        switch (this.position.x) {
          case 'center':
            this.$refs.dlgContent.style.marginLeft =
              (screenWidth - dialogWidth) / 2 + 'px'
            break
          case 'left':
            this.$refs.dlgContent.style.left = '0px'
            break
          case 'right':
            this.$refs.dlgContent.style.right = '0px'
            break
          default:
            this.$refs.dlgContent.style.left = this.position.x
        }
      }

      if (dialogHeight > screenHeight) {
        this.$refs.dlgContent.style.top = '0px'
        this.$refs.dlgContent.style.height = screenHeight + 'px'
      } else {
        switch (this.position.y) {
          case 'top':
            this.$refs.dlgContent.style.top = '0px'
            break
          case 'center':
            this.$refs.dlgContent.style.top =
              (screenHeight - dialogHeight) / 2 + 'px'
            break
          case 'bottom':
            this.$refs.dlgContent.style.bottom = '0px'
            break
          default:
            this.$refs.dlgContent.style.top = this.position.y
        }
      }
    },
    beforeEnter: function (el) {
      // ...
    },
    enter: function (el, done) {
      // ...
      // done()
    },
    afterLeave: function (el) {
      this._remove()
    },
    clickDlg (e) {
      if (this.canDrag) {
        this.disX =
          e.targetTouches[0].clientX - this.$refs.dlgContent.offsetLeft
        this.disY =
          e.targetTouches[0].clientY - this.$refs.dlgContent.offsetTop
      }
    },
    moveDlg (e) {
      if (this.canDrag) {
        let L = e.targetTouches[0].clientX - this.disX
        let T = e.targetTouches[0].clientY - this.disY
        if (L > this.maxL) L = this.maxL
        if (L < 0) L = 0
        if (T > this.maxT) T = this.maxT
        if (T < 0) T = 0
        this.$refs.dlgContent.style.marginLeft = L + 'px'
        this.$refs.dlgContent.style.top = T + 'px'
      }
		},
		touchstartDialog(e){
      this.currentScrollArea = null
      this.scrollList.forEach(element => {
        if (element.contains(e.target)) {
          this.currentScrollArea = element
        }
      })
      this.dialogMouseInfo.startX = e.targetTouches[0].clientX
      this.dialogMouseInfo.startY = e.targetTouches[0].clientY
    },
    touchmoveDialog(e){
      this.dialogMouseInfo.endX = e.targetTouches[0].clientX
      this.dialogMouseInfo.endY = e.targetTouches[0].clientY
      let directionY = ""
      if(this.dialogMouseInfo.endY - this.dialogMouseInfo.startY > 0){
        directionY = 'down'
      }else if(this.dialogMouseInfo.endY - this.dialogMouseInfo.startY < 0){
        directionY = 'up'
      }
      if(
        !this.currentScrollArea ||
        (
          this.currentScrollArea &&
          (
            (directionY=='down'&& this.currentScrollArea.scrollTop==0) ||
            (directionY=='up'&& this.currentScrollArea.scrollTop>= (this.currentScrollArea.scrollHeight-this.currentScrollArea.offsetHeight) )
          )
        )
      ){
        e.preventDefault();
      }
    }
  }
}
</script>
<style lang='scss'>
@import "./index.scss";
</style>
