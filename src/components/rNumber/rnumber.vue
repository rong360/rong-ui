<template>
  <div :class="['r-number', !conf.showBottomBorder?'r-border--off':'']">
    <div class="r-txt-wrap">
      <label class="r-input-label" :style="lblStyle" v-show="conf.showLabel">
        <span>{{conf.title}}</span>
        <rIcon :type="conf.labelIconType" v-if="conf.showLabelIcon" @iconClick="onclickLabelIcon"></rIcon>
      </label>
      <div class="input-wrap" :data-keyboardid="kid">
        <div v-if="conf.useSafeKeyboard" :class="iClsName" @click="doInput">
          <span>
            {{ currentValue ? currentValue : conf.placeholder }}
            <i></i>
          </span>
        </div>
        <input
          v-else
          :type="conf.inputType"
          :name="conf.name"
          v-model="currentValue"
          :placeholder="conf.placeholder"
          :maxlength="conf.maxlength"
          :disabled="conf.disabled"
          :readonly="!!conf.readonly"
          :class="inputClsName"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @keyup="onKeyup"
          :pattern="conf.type=='int'?'[0-9]*':''"
        >
        <rIcon :type="conf.inputIconType" v-show="showInputIcon" @iconClick="onclickInputIcon"></rIcon>
      </div>
      <div
        :class="['r-input-unit', (this.conf.readonly||this.conf.disabled) ? 'read-only' : '']"
        v-if="conf.unit"
      >{{conf.unit}}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import rIcon from '../rIcon/rIcon'
export default {
  name: 'rNumber',
  components: { rIcon },
  props: {
    attrs: Object
  },
  data () {
    let ua = navigator.userAgent
    let isAndroid = !!ua.match(/(Android)\s+([\d.]+)/)
    return {
      kid: 0, // keyboard id
      kb: null, // 键盘，document下每次只存在一个键盘
      currentValue:
        typeof this.attrs.value !== 'undefined' ? this.attrs.value + '' : '',
      showKb: false, // 控制光标
      isAndroid: isAndroid
    }
  },
  computed: {
    conf () {
      // 检测type是否是支持的类型
      if ('int|float|idcard|telephone'.indexOf(this.attrs.type) < 0) { this.attrs.type = 'float' }
      // 存储初始化时掩码数据,用于校验时判断掩码是否发生变化
      if (
        typeof this.maskCode === 'undefined' &&
        typeof this.attrs.value !== 'undefined' &&
        (this.attrs.value + '').indexOf('*') > -1
      ) {
        this.maskCode = this.attrs.value
      }
      let inputType = ''
      if (this.attrs.type === 'idcard') {
        inputType = 'text'
      }else{
        if(this.isAndroid){
          inputType = 'tel'
        }else{
          inputType = 'number'
        }
      }
      // 默认参数
      let defaultConfig = {
        title: '表单名称',
        inputType: inputType,
        name: '',
        value: '',
        type: 'float',
        fixed: -1,
        lr: 'right',
        placeholder: '请输入',
        maxlength: -1,
        disabled: false,
        readonly: false,
        unit: '',
        // 显示底部border
        showBottomBorder: true,
        // 显示input后面icon
        showInputIcon: true,
        // input后面icon的类型
        inputIconType: 'close-circled',
        // 显示label后面的icon
        showLabelIcon: false,
        // label后面icon的类型
        labelIconType: 'info',
        needVerify: true,
        verify: function () {
          return true
        },
        needVerifyToast: true,
        showLabel: true,
        showKeyboardTitle: true,
        useSafeKeyboard: true
      }
      return this.extendObj(defaultConfig, this.attrs)
    },
    iClsName () {
      // 键盘显示时，placeholde及输入框显示光标
      // currentValue=”“时，光标位置根据字对齐向左或向右
      // currentValue!=""时，光标位置在输入数字的后面
      let cls = 'rinput'
      cls += this.conf.readonly || this.conf.disabled ? ' read-only' : '' // 只读或者disabled样式
      cls += this.conf.lr == 'right' ? ' ta-right ' : ' ta-left ' // 输入框对齐样式
      cls += this.currentValue ? ' txt-value ' : ' txt-placeholder ' // 输入框样式
      if (!this.showKb) return cls
      return (cls += this.currentValue
        ? ' rinput-value-right'
        : ' rinput-value-' + this.conf.lr) // 光标样式
    },
    inputClsName () {
      return this.conf.lr == 'right' ? 'ta-right' : 'ta-left'
    },
    lblStyle () {
      return this.conf.lblWidth ? { width: this.conf.lblWidth } : {}
    },
    showInputIcon () {
      if (this.conf.inputIconType == 'close-circled') {
        if (
          this.conf.showInputIcon &&
          this.currentValue &&
          !this.conf.readonly &&
          this.showKb
        ) {
          return true
        } else {
          return false
        }
      } else {
        return this.conf.showInputIcon
      }
    }
  },
  watch: {
    conf () {
      this.currentValue =
        typeof this.conf.value !== 'undefined' ? this.conf.value + '' : ''
    },
    currentValue: function () {
      let currentValue = this.currentValue;
      if (this.conf.type === 'idcard') {
        if (this.currentValue.length <= 17) {
          currentValue = currentValue.replace(/\D/g, '')
        } else {
          currentValue = currentValue.substr(0, 18)
          if (!/(\d|X|x)$/.test(currentValue)) {
            currentValue = currentValue.replace(/\D/g, '')
          }
        }
      } else if (this.conf.type === 'float') {
        currentValue = currentValue.replace(/\D/g, word => {
          return word === '.' ? '.' : ''
        })
        let numArr = currentValue.split('.')
        if (numArr.length > 1) {
          numArr = numArr.slice(0, 2)
          currentValue = numArr.join('.')
        }
				// 限制小数位数
        let dotPos = currentValue.indexOf('.')
        if (this.conf.fixed > -1 && dotPos > -1) {
          currentValue = currentValue.substring(0, dotPos + this.conf.fixed + 1)
        }
      } else {
        currentValue = currentValue.replace(/\D/g, '')
      }
      // 使用系统键盘时限制整数和浮点类型长度
      if (!this.conf.useSafeKeyboard && this.conf.type != 'idcard' && this.conf.maxlength > -1 && currentValue.length > this.conf.maxlength) {
        currentValue = currentValue.substr(0, this.conf.maxlength)
      }
      this.currentValue = currentValue
      this.$emit('oninput', this.currentValue)
    }
  },
  inject: {
    form: { default: null }
  },
  mounted () {
    this.form && this.form.fields.push(this)
  },
  methods: {
    doInput (e) {
      var self = this

      if (this.conf.readonly || this.conf.disabled) return

      // document下每次只存在一个键盘
      // 键盘为当前组件的，不创建新的
      if (this.kb) return
      // 键盘为其他组件的，触发其他组件的键盘收起
      this.clearKeyboard()

      this.showKb = true
      // 初始化当前组件的键盘
      this.initKeyboard(e)
    },
    clearKeyboard () {
      if (document.querySelector('.r-keyboard')) {
        var triggeredEvent = document.createEvent('Events')
        triggeredEvent.initEvent('touchstart', true, true)
        document
          .querySelector(".r-keyboard [data-code='ok']")
          .dispatchEvent(triggeredEvent)
      }
    },
    initKeyboard (e) {
      let self = this
      let kid = new Date().getTime()
      this.kid = kid
      this.kb = this.$keyboard({
        propsData: {
          kid: kid,
          // 键盘类型 float、int、idcard
          type: self.conf.type,
          // 键盘类型为float时，小数点后面保留位数
          fixed: self.conf.fixed,
          // 键盘默认值
          value: self.currentValue,
          // codeStr最大长度
          maxlength: self.conf.maxlength,
          // 是否显示title
          showTitle: self.conf.showKeyboardTitle
        },
        methods: {
          typing (code, codeStr) {
            self.currentValue = codeStr

            if (code == 'ok') {
              // 延迟设置showKb:false,因为false后clear清空按钮就不展示了，那么永远点击不到清空按钮上了
              setTimeout(() => {
                self.kb = null
                self.showKb = false
                self.$emit('onconfirm', code, codeStr, self)
              }, 100)
            }
          }
        }
      })
    },
    onclickLabelIcon (e) {
      this.$emit('onclickLabelIcon', this)
    },
    onclickInputIcon (e) {
      if (this.conf.inputIconType == 'close-circled') {
        this.currentValue = ''
        if (this.conf.useSafeKeyboard) {
          if (this.kb) {
            // 有键盘-清空当前组件的数据，键盘数据清空
            this.kb.currentValue = ''
          } else {
            // 无键盘-清掉其他键盘，focus当前输入框，为当前组件初始化一个键盘
            this.clearKeyboard()
            this.showKb = true
            this.initKeyboard()
          }
        }
        this.$emit('onclear', this)
      } else {
        this.$emit('onclickInputIcon', this)
      }
    },
    /**
     * 验证函数
     * needVerify开启校验时首先调用defaultVerify进行默认的非空校验，
     * 非空校验通过后调用attrs中verify函数进一步校验。
     **/
    verify () {
      if (this.conf.needVerify) {
        if (this.defaultVerify()) {
          if (this.currentValue == this.maskCode) return true // 用户没做任何操作，则认为默认值是合法的。如身份证、电话号码有'***'掩码的情况
          var res = this.conf.verify.apply(this, [this.currentValue])
          if (typeof res === 'undefined') {
            console.warn(
              this.conf.title +
                '组件 自定义校验函数verify中if else 必须有true和false返回值, 如：if(true){ return true } else{ return false }, 否则会忽略自定义校验函数，改为基本的非空校验!'
            )
            return this.defaultVerify()
          }
          return res
        } else {
          return false
        }
      } else {
        return true
      }
    },
    /**
     * 默认验证函数
     **/
    defaultVerify () {
      if (!this.currentValue) {
        this.conf.needVerifyToast &&
          this.$toast &&
          this.$toast({
            propsData: {
              message: this.conf.title + '不能为空！',
              type: 'negetive'
            }
          })
        return false
      }
      return true
    },
    /* 获取表单数据 */
    getSerialize () {
      return this.conf.name + '=' + this.currentValue
    },
    getSerializeArray () {
      let obj = {}
      obj[this.conf.name] = this.currentValue
      return obj
    },
    getSerializeObject () {
      return {
        name: this.conf.name,
        value: this.currentValue
      }
    },
    extendObj (obj1, obj2) {
      for (var key in obj2) {
        obj1[key] = obj2[key]
      }
      obj1.name = obj1.var_name || obj1.urlkey || obj1.name // 业务中的组件name取值
      if (!obj1.name) console.warn('组件未传入name属性！title=' + obj1.title)
      return obj1
    },
    onBlur (e) {
      let self = this
      let currentValue = e.target.value;
      if (this.conf.type === 'float') {
        if (currentValue === '.') {
          currentValue = ''
        } else if (
          currentValue.length > 1 &&
          /\.$/.test(currentValue)
        ) {
          currentValue = currentValue.substr(
            0,
            currentValue.length - 1
          )
        }
      }
      this.currentValue = currentValue
      if (currentValue == '') {
        e.target.value = typeof e.target.__value__ === 'undefined' ? '': e.target.__value__
      }
      setTimeout(function () {
        self.showKb = false
        self.$emit('onblur', e, self)
      }, 50)
    },
    onFocus (e) {
      this.showKb = true
      this.$emit('onfocus', e, this)
    },
    onInput (e) {
    },
    onKeyup (e) {
      if (typeof e.target.__value__ === 'undefined') {
        e.target.__value__ = ''
      }
      if (e.target.value != '' || e.keyCode == 8) {
        e.target.__value__ = e.target.value
      }
      e.target.value = e.target.__value__
    }
  },
  beforeDestroy () {
    this.form && this.form.fields.splice(this.form.fields.indexOf(this), 1)
  }
}
</script>
<style lang="scss">
@import "./rNumber.scss";
</style>
