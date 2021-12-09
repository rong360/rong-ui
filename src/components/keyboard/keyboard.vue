<template>
  <div class="r-keyboard">
    <div :class="['r-keyboard-content',show?'':'r-keyboard-content-hidden']"
         ref="content">
      <div class="r-keyboard-head">
        <div class="cancel">取消</div>
        <div class="title"><span v-if="showTitle">{{title}}</span></div>
        <div data-code="ok"
             @touchstart="doTouch"
             @touchend="endTouch"
             class="confirm">确定</div>
      </div>
      <div class="r-keyboard-row">
        <div data-code="1"
             @touchstart="doTouch"
             @touchend="endTouch">1</div>
        <div data-code="2"
             @touchstart="doTouch"
             @touchend="endTouch">2</div>
        <div data-code="3"
             @touchstart="doTouch"
             @touchend="endTouch">3</div>
      </div>
      <div class="r-keyboard-row">
        <div data-code="4"
             @touchstart="doTouch"
             @touchend="endTouch">4</div>
        <div data-code="5"
             @touchstart="doTouch"
             @touchend="endTouch">5</div>
        <div data-code="6"
             @touchstart="doTouch"
             @touchend="endTouch">6</div>
      </div>
      <div class="r-keyboard-row">
        <div data-code="7"
             @touchstart="doTouch"
             @touchend="endTouch">7</div>
        <div data-code="8"
             @touchstart="doTouch"
             @touchend="endTouch">8</div>
        <div data-code="9"
             @touchstart="doTouch"
             @touchend="endTouch">9</div>
      </div>
      <div class="r-keyboard-row">
        <div :data-code="typeStr.code"
             @touchstart="doTouch"
             @touchend="endTouch"
             v-html="typeStr.str"></div>
        <div data-code="0"
             @touchstart="doTouch"
             @touchend="endTouch">0</div>
        <div class="d">
          <rIcon type="clear"></rIcon>
          <div data-code="d"
               @touchstart="doTouch"
               @touchend="endTouch"
               class="mask delet"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rIcon from "../rIcon/rIcon";
export default {
  name: "rKeyboard",
  components: {
    rIcon
  },
  data () {
    return {
      currentValue: this.value + "",
      show: false,
      pageScrollEle: window.pageScrollEle || document.querySelector('#app') || document.documentElement || document.body,
      keyboardHeight: window.keyboardHeight || 0
    }
  },
  props: {
    kid: {
      type: Number,
      default: new Date().getTime()
    },
    type: {
      type: String,
      default: "float"
    },
    value: {
      type: [String, Number],
      default: ''
    },
    //最大长度
    maxlength: {
      type: Number,
      default: -1
    },
    //小数点后保留几位，"-1"表示不限制
    fixed: {
      type: Number,
      default: -1
    },
    //是否显示键盘上title
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeStr () {
      let obj = {};
      switch (this.type) {
        case "float":
          obj.str = "&sdot;";
          obj.code = ".";
          break;
        case "int":
          obj.str = "";
          obj.code = "";
          break;
        case "telephone":
          obj.str = "";
          obj.code = "";
          break;
        case "idcard":
          obj.str = "X";
          obj.code = "X";
          break;
      }
      return obj;
    },
    title () {
      if (this.currentValue.indexOf('*') > 0) {
        return this.currentValue
      } else {
        if (this.type === 'telephone') {
          return this.currentValue.replace(/^(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
        } else if (this.type === 'idcard') {
          return this.currentValue.replace(/^(\d{6})(\d{1,4})(\d{0,2})(\d{0,2})(\d{0,3}[\dxX]?)/, '$1 $2 $3 $4 $5')
        } else {
          return this.currentValue.replace(/(.{4})/g, "$1 ")
        }
      }
    }
  },
  mounted () {
    var self = this;

    this.show = true;

    //键盘遮挡时，加长页面，便于滚动
    this.keyboardSeat = document.createElement('div');

    this.$nextTick(function () {
      if (!document.querySelector("[data-keyboardid='" + this.kid + "']")) {
        console.warn("当前键盘未被绑定！")
      }
      // 判断页面滚动元素
      if (!window.pageScrollEle) {
        document.body.scrollTop++
        document.documentElement.scrollTop++
        if (document.body.scrollTop > 0) {
          this.pageScrollEle = document.body
        } else if (document.documentElement.scrollTop > 0) {
          this.pageScrollEle = document.documentElement
        }
        window.pageScrollEle = this.pageScrollEle
      }
      // 挂载keyboardSeat
      window.pageScrollEle.appendChild(this.keyboardSeat);
      // 存储键盘高度
      if (!window.keyboardHeight) {
        this.keyboardHeight = this.$el.querySelector('.r-keyboard-content').offsetHeight
        window.keyboardHeight = this.keyboardHeight
      }
      self.dealKeyboardOcclusion();
      //点击非键盘部分，收起键盘
      document.addEventListener("touchstart", self.docTouchStart)
      /**
       * 解决华为部分机型事件定位不准确bug
       * 	特殊机型以顶部定位 top
       * 	其它机型以底部定位 bottom
       */
      let setKeyboardPosition = () => {
        let content = this.$refs.content
        let ua = navigator.userAgent.toLowerCase()
        let isHonor_8x = (ua.indexOf('honorjsn-al00a') > -1) && /mqqbrowser\/8.1/.test(ua)// 华为荣耀8x
        if (isHonor_8x) {
          let clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
          if (clientH < 670) {
            content.style.top = (clientH - content.clientHeight) - 50 + 'px'
          } else {
            content.style.top = (clientH - content.clientHeight) + 'px'
          }
        } else {
          content.style.bottom = '0px'
        }
      }
      //setKeyboardPosition()
    })

    //页面路由变化时移除组件
    window.addEventListener('hashchange', this.remove);
  },
  methods: {
    doTouch (e) {
      var self = this;
      var target = e.target,
        code = target.dataset.code;

      e.preventDefault();

      //点击样式
      if (code == 'd') {
        this.$el.querySelector("div[data-code='" + code + "']").parentNode.setAttribute('active', true);
      } else {
        this.$el.querySelector("div[data-code='" + code + "']").setAttribute('active', true);
      }

      if (code) {
        if (code == 'd') {
          this.currentValue = this.currentValue.substr(0, this.currentValue.length - 1);
        } else {
          if (code == 'ok') {
            this.show = false;
            if (this.type == 'float') {
              if (this.currentValue == ".") {
                this.currentValue = ""
              }
              if (this.currentValue != "" && this.currentValue != "0") {
                this.currentValue = parseFloat(this.currentValue * 1) + ""
              }
            }
            setTimeout(function () {
              self.remove();
            }, 100)
          } else {
            //最大长度
            if (this.maxlength > 0 && this.currentValue.length >= this.maxlength) return;
            //type类型为float
            if (this.type == 'float' && this.currentValue) {
              //有小数点输入了
              if (this.currentValue.indexOf(".") > -1) {
                //超过小数点后保留位数
                if (this.fixed > 0 && this.currentValue.split(".")[1].length >= this.fixed) {
                  return;
                }
                //已经有一个点了，就不要再输"."了
                if (code == '.') {
                  return;
                }
              }
              //小数点前不允许输入多个"0"
              if (this.currentValue == '0' && code == '0') {
                return;
              }
            }

            //type类型为idcard
            if (this.type == 'idcard' && this.currentValue.length != (this.maxlength - 1) && code == 'X') {
              return;
            }
            this.currentValue += code;
          }
        }

        this.typing(code, this.currentValue);
      }
    },
    endTouch (e) {
      //移除点击样式
      e.preventDefault();
      let code = e.target.dataset.code;
      if (code) {
        if (code == 'd') {
          this.$el.querySelector("div[data-code='" + code + "']").parentNode.removeAttribute('active');
        } else {
          this.$el.querySelector("div[data-code='" + code + "']").removeAttribute('active');
        }
      }
    },
    typing (code, codeStr) {
      this.$emit("typing", code, codeStr);
    },
    remove () {
      if (this.$el && this.$el.parentNode) {
        //this.$el.parentNode.removeChild(this.$el);
        this.$el.remove();
        this.$destroy();
        window.removeEventListener('hashchange', this.remove);
        document.removeEventListener("touchstart", this.docTouchStart)
      }
      if (this.keyboardSeat) {
        this.keyboardSeat.parentNode && this.keyboardSeat.parentNode.removeChild(this.keyboardSeat);
      }
    },
    docTouchStart (e) {
      //键盘上的touchstart事件，不执行
      if (e.target.closest(".r-keyboard")) return;
      //跟当前关联的输入组件，不做收起操作
      if (e.target.closest("[data-keyboardid='" + this.kid + "']")) return;

      var triggeredEvent = document.createEvent('Events');
      triggeredEvent.initEvent('touchstart', true, true);
      this.$el.querySelector("[data-code='ok']").dispatchEvent(triggeredEvent)
    },
    //处理键盘遮挡问题
    dealKeyboardOcclusion () {
      var target = document.querySelector("[data-keyboardid='" + this.kid + "']");

      if (target) {
        (!target.top) && (target.top = this.getPos(target).top)
        var scrollTop = this.pageScrollEle.scrollTop,
          targetOffsetTop = target.top,
          targetHeight = target.offsetHeight,
          screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
          viewHeight = screenHeight - this.keyboardHeight,
          eleHeight = targetOffsetTop + targetHeight - scrollTop;

        //alert(`${this.pageScrollEle.scrollTop}-${eleHeight}-${viewHeight}`)
        if (eleHeight > viewHeight) {
          this.pageScrollEle.scrollTop += eleHeight - viewHeight;
        } else if (targetOffsetTop - scrollTop < 0) {
          this.pageScrollEle.scrollTop = targetOffsetTop
        }
      }
    },
    getPos (obj) {
      var pos = { left: 0, top: 0 };

      while (obj) {
        pos.left += obj.offsetLeft;
        pos.top += obj.offsetTop;
        obj = obj.offsetParent;
      }

      return pos;
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.keyboardSeat.style.height = "16rem";
        document.body.setAttribute('rKeyboard', "")
      } else {
        this.keyboardSeat.style.height = "0px";
        document.body.removeAttribute('rKeyboard')
      }
    }
  }
}
</script>
<style lang="scss">
@import "./keyboard.scss";
</style>
