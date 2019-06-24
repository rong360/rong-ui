<template>
	<div class="wrap">
		<div class="exp">
			<div class="tip">请输入以下信息：</div>
			<rTelephone :attrs="config" :ref="config.name" @onclickLabelIcon="labelClick"></rTelephone>
			<rTelephone :attrs="config0" @oninput="oninput" @onclear="onclear" @onfocus="onfocus" @onblur="onblur" @onconfirm="onconfirm" :ref="config0.name"></rTelephone>
			<rTelephone :attrs="config1" @onblur="onblur" :ref="config1.name"></rTelephone>
			<div class="btn" @click="doSubmit">提交</div>
		</div>
	</div>
</template>
<script>
	export default{
	  name: 'rTelephoneExp',
	  data () {
	    return {
	    phone: '',
	    count: 0,
	    txt: '',
	    config: {
	    title: '马云爸爸手机号码(不校验)',
	    name: 'fatherPhone',
	    value: '',
	    showLabelIcon: true,
	    placeholder: '请输入',
	    disabled: false,
	    readonly: false,
	    unit: '',
	    needVerify: false
  },
	    config0: {
	    title: '思聪老公的手机号码(键盘确定时校验)',
	    name: 'sonPhone',
	    value: '',
	    placeholder: '请输入',
	    disabled: false,
	    readonly: false,
			unit: ''
	},
	config1: {
	    title: '思聪老公的手机号码(系统键盘)',
	    name: 'sonPhone2',
	    value: '',
	    placeholder: '请输入',
	    disabled: false,
	    readonly: false,
			unit: '',
			useSafeKeyboard: false
  }
  }
  },
	  created () {
	    var self = this
	    setTimeout(function () {
	  self.config.value = '1328888888'
		self.config.readonly = true
	}, 2000)
  },
	  methods: {
	    labelClick () {
	    this.$toast('LabelIcon Click: 需要输入11位手机号码')
  },
	    oninput (val) {
	    this.phone = val
	  },
	    onclear () {
	    this.$toast({
	    propsData: {
	    message: '数据为空了，你可以把button置灰'
	},
  })
	},
			onfocus(e, component){
				console.log('获得焦点')
			},
			onblur(e, component){
				console.log('失去焦点')
				component.verify()
			},
	    onconfirm (code, codeStr, component) {
				// this.$refs.sonPhone.verify();
	    component.verify()
	  },
	    doSubmit () {
	    let pass
	    for (var key in this.$refs) {
	  pass = this.$refs[key].verify()
	  if (!pass) {
						// this.$tip(this.$refs[key].attrs.title + "格式错误~");
	  break
	}
	}

	    if (pass) {
	    let s = [],
	    sa = {}
	    for (var key in this.$refs) {
	  s.push(this.$refs[key].getSerialize())
	  Object.assign(sa, this.$refs[key].getSerializeArray())
	}
	    this.$dialog({
	    propsData: {
	    showCancelBtn: false,
	    message: '验证通过！ 序列化数据为：' + s.join('<br>&')
  },
	    methods: {
	    onConfirm: function () {
	    this.remove()
							// alert("序列化数组："+JSON.stringify(sa));
	  }
  }
  })
	  }
  }
  }
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/18.75*1rem;
}
.cb{
	font-size: .75rem;
    margin: 1rem .8rem;
    line-height: 200%;
    .cb0{
    	color: #f66;
    }
}
#ta{
	color: #666;
	border: 1px solid #e5e5e5;
}
.tip{
	padding: .5rem .8rem;
	text-align: left;
	font-size: .8rem;
	color: #4080e8;
	background: rgb(245, 231, 185);
}
.btn{
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