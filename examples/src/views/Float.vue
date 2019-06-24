<template>
  <div class="wrap">
    <div class="exp">
      <div class="tip">请输入以下信息：</div>
      <rFloat :attrs="config" :ref="config.name" @onclear="onclear"></rFloat>
      <rFloat :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rFloat>
      <rFloat
        :attrs="config1"
        :ref="config1.name"
        @onclickLabelIcon="onclickLabelIcon"
        @onfocus="onfocus"
        @onblur="onblur"
      ></rFloat>
      <rFloat :attrs="config2" @oninput="oninput" @onconfirm="onconfirm" :ref="config2.name"></rFloat>
      <rFloat :attrs="config3" @onblur="onblur" :ref="config3.name"></rFloat>
      <div class="btn" @click="doSubmit">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rFloatExp",
  data() {
    return {
      num: "",
      count: 0,
      txt: "",
      config: {
        title: "天上的✨大小",
        name: "stars",
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: "",
        showInputIcon: true,
        verify: function(val) {
          if (!val || val == 0) {
            this.$toast("天上的星星大小？答案：随意输入，不为零即可");
            return false;
          }
          return true;
        }
      },
      config0: {
        title: "森林里🌲的高度(小数点后三位)",
        name: "hair",
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: "",
        fixed: 3,
        showInputIcon: true,
        inputIconType: "info",
        verify: function(val) {
          if (val < 3) {
            this.$toast({
              propsData: {
                type: "negetive",
                message: "参天大树~(大于3)"
              }
            });
            return false;
          }
          return true;
        }
      },
      config1: {
        title: "海里的🐟有多大(自定义校验大于100)",
        name: "fish",
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: "",
        showLabelIcon: true,
        labelIconType: "info",
        fixed: 2,
        verify: function(val) {
          if (val < 100) {
            this.$toast({
              propsData: {
                type: "negetive",
                message: "请输入大于100的数！"
              }
            });
            return false;
          }
          return true;
        }
      },
      config2: {
        title: "白雪公主童话里小矮人的高度",
        name: "sand",
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: "",
        showInputIcon: true,
        verify: function(val) {
          if (!val || val > 1.5) {
            this.$toast({
              propsData: {
                type: "negetive",
                message: "傻瓜，小矮人高度不超过1米5啊！！！"
              }
            });
            return false;
          }
          return true;
        }
      },
      config3: {
        title: "白雪公主童话里小矮人的高度(系统键盘)",
        name: "sand2",
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: "",
        showInputIcon: true,
        maxlength: 6,
        useSafeKeyboard: false,
        verify: function(val) {
          if (!val || val > 1.5) {
            this.$toast({
              propsData: {
                type: "negetive",
                message: "傻瓜，小矮人高度不超过1米5啊！！！"
              }
            });
            return false;
          }
          return true;
        }
      }
    };
  },
  methods: {
    oninput(val) {
      this.num = val;
    },
    onclear() {
      this.$toast({
        propsData: {
          message: "数据为空了，你可以把button置灰"
        }
      });
    },
    onfocus(e, component) {
      console.log("获得焦点");
    },
    onblur(e, component) {
      console.log("失去焦点");
      component.verify();
    },
    onconfirm(code, codeStr, component) {
      // this.$refs.sand.verify();
      setTimeout(() => {
				component.verify();
			}, 60)
    },
    onclickInputIcon(component) {
      this.$toast(component.attrs.title + " --- InputIcon click");
    },
    onclickLabelIcon(component) {
      this.$toast(component.attrs.title + " --- LabelIcon click");
    },
    doSubmit() {
      let pass;
      for (var key in this.$refs) {
        pass = this.$refs[key].verify();
        if (!pass) {
          // this.$tip(this.$refs[key].attrs.title + "格式错误~");
          break;
        }
      }

      if (pass) {
        let s = [],
          sa = {};
        for (var key in this.$refs) {
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa, this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            showCancelBtn: false,
            message: "验证通过！ 序列化数据为：" + s.join("<br>&")
          },
          methods: {
            onConfirm: function() {
              this.remove();
              // alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@function r($px) {
  @return $px/18.75 * 1rem;
}
.cb {
  font-size: 0.75rem;
  margin: 1rem 0.8rem;
  line-height: 200%;
  .cb0 {
    color: #f66;
  }
}
#ta {
  color: #666;
  border: 1px solid #e5e5e5;
}
.tip {
  padding: 0.5rem 0.8rem;
  text-align: left;
  font-size: 0.8rem;
  color: #4080e8;
  background: rgb(245, 231, 185);
}
.btn {
  margin: r(50) auto;
  width: r(300);
  height: r(45);
  line-height: r(45);
  text-align: center;
  font-size: r(20);
  background: #4080e8;
  color: #fff;
  border-radius: 20px;
}
</style>