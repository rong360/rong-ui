# rong-ui

> 基于Vue.js 2.0 UI组件库 && 构建npm包.

## 查看组件效果

``` bash
# install dependencies
npm install

#examples for components
npm run dev
```


## How to Use

``` bash
#install module
npm install rong-ui --save

#use one component
import Dialog from "rong-ui/lib/dialog"
Vue.use(Dialog);

#use rong-ui
import {Dialog, Tip} from "rong-ui"
import "rong-ui/lib/rong-ui.css"
let components = [Dialog, Tip];
components.map(cp => Vue.use(cp));



文件命名特别说明：
  Vue.prototype上的组件直接导入，如：
      import Dialog from "rong-ui/lib/dialog"

  其它非Vue.prototype上的组件导入的时候需在组件名称前加"r",即"number"->"rNumber"，如：
      import Dialog from "rong-ui/lib/rNumber"
```


## all components

Vue.prototype上的组件
``` bash
Dialog 弹框
Toast 提示
Loading 加载中
Keyboard 数字虚拟键盘

#use it on vue instance

this.$dialog({
  propsData: {
    message: 'sf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sd'
  },
  methods: {
    onCancel(){
      this.remove();
    },
    onConfirm(){
      alert('点击了确认按钮');
    }
  }
});
```

非 Vue.prototype上的组件
``` bash
Titlebar 标题栏
Button 按钮
Select 下拉列表
Datepicker 日期选择
Icon 图标
tabs 标签切换

Input 输入框
  以下组件继承 Input输入框 组件:
    vcode 图片验证码
    Email 邮箱

Number 数字类型组件
  以下组件继承 Number 组件:
    Int 整数组件
    Float 浮点数组件
    Telephone 手机号码
    Mvcode 短信验证码
    IDCard 身份证号码

#use it on vue template
    <rTabs>
      <rTab label="tab1">
        <p>content1</p>
      </rTab>
      <rTab label="tab2">
        <p>content2</p>
        <p>content2</p>
      </rTab>
      <rTab label="tab3">
        <p>content3</p>
        <p>content3</p>
        <p>content3</p>
      </rTab>
    </rTabs
  
```

## 组件详解
Dialog 弹框
``` bash
安装：
  import Dialog from "rong-ui/lib/dialog"
  Vue.use(Dialog);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {Dialog} from 'rong-ui'
  Vue.use(Dialog);


dialog实例方法通过 子类组件 覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

propsData属性传入的数据大致分以下几部分：
  1：弹窗标题
  2：弹窗Icon
  3：弹窗内容
  4：弹窗按钮

1,弹窗标题
参数                     默认值            说明
showTitle            true || false      是否显示标题
title                ""                 标题内容,  如："还款失败"
titleStyleObj        {}                 标题样式，如：{fontWeight:'bold'}

2,弹窗icon
参数                     默认值                                     说明
showIcon             true || false                              是否显示icon
icon                 支持传入"beiju"、"shuxie"、或者url           icon样式

3,弹窗内容
参数                     默认值                      说明
message              ""                  content内容（普通文本或简单html）
contentStyleObj      {}                  内容样式，如：{fontSize:'30px'}
rContentData         {}                  弹窗内容部分为rContent组件时，rContentData为组件所需数据，例如：
                                         propsData: {
                                            rContentData: {
                                                message: "hello",
                                                list: [1,2,3,4,5,6,7,8,9]
                                            }
                                          }
rContent              {}                 弹窗内容部分需要插入组件时，通过rContent传入需要插入的组件,例如：
                                         components: {
                                           rContent: require('xxx.vue')
                                         }

4,弹窗取消按钮
参数                     默认值                      说明
cancelBtnText         "取消"               取消按钮文案 
showCancelBtn         true || false       是否显示取消按钮
cancelBtnStyleObj     {}                  取消按钮样式，如：{color:'white', background:'#4080e8'}
onCancel              function            点击取消按钮回调，如：
                                          onCancel: function(){
                                            this.remove();
                                          }
                                          this指向弹窗组件实例

5,弹窗确认按钮
参数                     默认值                      说明
confirmBtnText         "确认"              确认按钮文案
showConfirmBtn         true || false      是否显示确认按钮
confirmBtnStyleObj     {}                 确认按钮样式，如：{color:'white', background:'#4080e8'}
onConfirm              function           点击确认按钮回调，如：
                                          onConfirm: function(){
                                            this.message = "hello";
                                          }
                                          this指向弹窗组件实例

6.弹窗右上角关闭按钮
参数                     默认值                      说明
showCloseBtn           true || false      是否显示关闭按钮

7,遮罩层
参数                     默认值                      说明
CliperStyleObj         {}                 遮罩层样式，如：{background:'rgba(14, 14, 14, 0.5)'}

8,弹框
参数                     默认值                      说明
dlgStyleObj            {}                 弹框样式，如：{background:'darkcyan', width:'600px'}

9,弹窗动画
参数                     默认值                      说明
animate                true || false      是否开启动画

10,弹窗显示位置
参数                     默认值                      说明
position               {x:'center',y:'bottom'}    x表示横轴方向，值有：'left','center','right'    
                                                  y表示纵轴方向，值有：'top','center','bottom'
11,slot插槽
组件中有个具名slot=rContent，便于用户更改图标和按钮中间的内容
如果要使用具名slot更改内容，请使用全局组件rDialog结点形式


基本用法：
this.$dialog({
  propsData: {
    message: 'sf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sdsf<br>sd'
  },
  methods: {
    onCancel(){
      this.remove();
    },
    onConfirm(){
      alert('点击了确认按钮');
    }
  }
});

弹窗插入组件，并向组件传递数据。组件props通过rContentData字段接收数据。
this.$dialog({
  propsData: {
    rContentData: {
      message: "test rContentData2",
      list: [1,2,3,4,5,6,7,8,9]
    }
  },
  components: {
    rContent: resolve => resolve(require("xxx/repaymentTip.vue"))
  },
  methods: {
    onCancel(){
      this.remove();
    },
    onConfirm(){
      alert('点击了确认按钮');
    }
  }
});



1）用法一 所有配置参数：
this.$dialog({
  propsData: {
    //标题
    showTitle: true,
    title: '标题',
    titleStyleObj: {color:'green'},
    //右上角关闭按钮
    showCloseBtn: true,
    //Icon
    showIcon: true,
    icon: 'beiju',
    //内容(普通文本或简单html)
    message: 'hello',
    contentStyleObj: {fontSize:'30px'},
    //内容(rContent组件数据)
    rContentData: {
      message: "test rContentData",
      list: [1,2,3,4,5,6,7,8,9]
    },
    //取消按钮
    cancelBtnText: "取消",
    showCancelBtn: true,
    cancelBtnStyleObj: {color:'white', background:'#4080e8'},
    //确认按钮
    confirmBtnText: "秀一把",
    showConfirmBtn: true,
    confirmBtnStyleObj: {color:'white', background:'#4080e8'},
    //遮罩层
    CliperStyleObj: {background:'rgba(14, 14, 14, 0.5)'},
    //dialog框
    dlgStyleObj: {background:'darkcyan', width:'15rem'},
    //动画
    animate: true,
    //显示位置
    position: {x:'center', y:'bottom'}
    },
    mounted: function(){
      
    },
    //rContent为内容区域组件，通过rContentData接收外部数据
    components: {
      //用法一：
      rContent: {
        props: {
            rContentData: {
              type: Object,
              default: function(){
                return {};
              }
            }
          },
          template: `<div @click="clickHandle" style="height:200px;overflow-y:scroll">
              {{rContentData.message}}
              <ul>
                <li v-for="item in rContentData.list">{{item}} </li>
              </ul>
            </div>`,
          methods: {
            clickHandle: function(){
              alert('click content');
            }
          }
      },
      //用法二:
      //rContent: resolve => resolve(require("xxx/repaymentTip.vue"))
    },
    methods: {
      //取消按钮
      onCancel: function(){
        this.remove();
      },
      //确认按钮
      onConfirm: function(){
        alert('点击了确认按钮');
      },
      //右上角关闭按钮
      onClose: function(){
        this.remove();
      }
    }
});
2）用法二 所有配置参数：
<rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
  <div slot="content" class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
</rDialog>


```

Toast 提示
``` bash
安装：
  import Toast from "rong-ui/lib/toast"
  Vue.use(Toast);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {Toast} from 'rong-ui'
  Vue.use(Toast);


toast实例方法通过 子类组件 覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

参数                     默认值                      说明
message                string                     toast文案
type                   string                     toast类型，positive积极文案,negetive消极文案,long长文本
time                   Number                     多少ms后toast消失
callback               function                   toast消失时回调函数， 函数中this指向toast组件实例


简洁版用法
this.$toast('Hello World!');

标准用法
this.$toast({
  propsData: {
    message: 'Hello World!',
    type: 'negetive',
    time: 5000
  },
  methods: {
    callback(){
      alert('toast关闭了');
    }
  }
});

```

Loading 加载中
``` bash
安装：
  import Loading from "rong-ui/lib/loading"
  Vue.use(Loading);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {Loading} from 'rong-ui'
  Vue.use(Loading);


Loading实例方法通过 子类组件 覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

参数                     默认值                      说明
text                   String                      加载文案提示
width                  Number:100                  loading区的长度（750px设计图下）
cwidth                 Number:30                   loading区圆圈的大小（750px设计图下）
textInside             Boolean: false              文案位置是否在圆圈内
color                  String: "#4080e8"           loading圆圈的颜色
textColor              String: "#fff"              文案的颜色
textFontSize           Number: 28                  文案的字体大小（750px设计图下）

//常规
var loading = this.$loading();

setTimeout(function(){
  loading.remove();
}, 2000)



//倒计时效果
var loading = this.$loading({
  propsData: {
    text: '10s',
    textInside: true
  }
});

var count = 10;

var timer = setInterval(function(){
  count--;
  if(count == 0){
    loading.remove();
  }else{
    loading.text = count + 's';
  }
}, 1000)
```

Keyboard 数字虚拟键盘
``` bash
安装：
  import Keyboard from "rong-ui/lib/keyboard"
  Vue.use(Keyboard);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {Keyboard} from 'rong-ui'
  Vue.use(Keyboard);


Keyboard实例方法通过 子类组件 覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

参数                     默认值                      说明
type                    String                     数字键盘类型：int,float
value                   String                     支持给键盘传入默认字符串,如”123“，拉起键盘时以该值为起始
maxlength               String                     codeStr最大长度
e                       Event                      点击目标对象时的事件对象
typing                  function                   键盘输入触发的事件。回调函数参数有两个(code,codeStr)
                                                   code:键盘值
                                                   codeStr:连续点击键盘生成的字符串

//配置参数
var keyboard = this.$keyboard({
  propsData: {
    //键盘类型 float、int、idcard
    type: 'int',
    //键盘默认值
    value: document.getElementById('infos').innerHTML,
    //codeStr最大长度
    maxlength: 8,
    //点击目标对象时的事件对象。处理键盘遮挡时需要获取目标元素的位置信息，默认不用传，如果事件存在兼容问题，可以通过这个参数传入事件对象
    e: e
  },
  methods: {
    typing(code, codeStr){
      console.log(code + '--' + codeStr);

      document.getElementById('infos').innerHTML = codeStr;
    }
  }
})

//示例代码
<div class="infos" @click="createKb" id="infos">123</div>
export default{
  methods: {
    createKb(e){
      var keyboard = this.$keyboard({
        propsData: {
          //键盘默认值
          value: document.getElementById('infos').innerHTML
        },
        methods: {
          typing(code, codeStr){
            console.log(code + '--' + codeStr);

            document.getElementById('infos').innerHTML = codeStr;
          }
        }
      })
    }
  }
}
```

Titlebar 标题栏
``` bash
安装：
  import rTitlebar from 'rong-ui/lib/rTitlebar'
  Vue.use(rTitlebar);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rTitlebar} from 'rong-ui'
  Vue.use(rTitlebar);

参数                     默认值                      说明
title                   String                     标题
theme                   String                     标题栏背景主题，a,b,c,d,e，默认'a'
backurl                 String                     返回按钮url
tbStyle                 Object                     标题栏自定义样式
onback                  Function                   回调函数，点击返回时触发

组件含有两个具名slot，slot=l是左侧操作，slot=r是右侧操作
默认slot=l里, 当传入backurl时，出现返回按钮，点击返回，触发事件onback


示例代码：
<rTitlebar theme="a" title="主题a" backurl="https://m.rong360.com" @onback="onBack"></rTitlebar>
<rTitlebar theme="b" title="主题b"></rTitlebar>
<rTitlebar theme="c" title="主题c"></rTitlebar>
<rTitlebar theme="d" title="主题d">
  <div slot="l" @click="goHome">首页</div>
  <div slot="r" @click="goCenter">账户</div>
</rTitlebar>
<rTitlebar theme="e" title="主题e"></rTitlebar>
<rTitlebar title="自定义背景" :tbStyle="tbStyle"></rTitlebar>

export default{
  name: "rTitlebarExp",
  data(){
    return {
      tbStyle: {
        background: "#999"
      }
    }
  },
  methods:{
    onBack(){
      alert("左侧操作触发的函数回调~");
    },
    goHome(){
      alert("要去首页了~");
    },
    goCenter(){
      alert("要去用户中心了~");
    }
  }
}
```

Button 按钮
``` bash
安装：
  import rButton from "rong-ui/lib/rButton"
  Vue.use(rButton);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rButton} from 'rong-ui'
  Vue.use(rButton);

参数                     默认值                      说明
type                    String                     按钮类型【 default | warning | disabled 】
radius                  String                     圆角开关, off-无圆角，on-有圆角。 默认off
fill                    String                     背景是否填充 on-非空心按钮 off-空心按钮。默认：on
btnStyle                Object                     button自定义样式
click                   Function                   回调函数，点击button时触发

示例代码：
<rButton >默认按钮 default</rButton>
<rButton type="warning">示警按钮 warning</rButton>
<rButton type="disabled">不可用按钮 disabled</rButton>
<rButton radius="on">圆角默认按钮</rButton>
<rButton :btnStyle="btnStyle">
  <div class="btn-text">
    <p>下载APP</p>
    <p>马上申请</p>
  </div>
</rButton>
<div class="btn-group">
  <rButton :btnStyle="btnStyle1" @click="clickme">
  自定义样式1 click me
  </rButton>
  <rButton :btnStyle="btnStyle2" @click="tipme">
  自定义样式2 click me
  </rButton>
</div>

export default{
  name: "buttonExample",
  data(){
    return {
      btnStyle: {
        'background': '-webkit-linear-gradient(30deg,#f66,#369)',
        'line-height': '120%'
      },
      
      btnStyle1: {
        'width': '50%',
        'background': "#4080e8"
      },
      btnStyle2:{
        'width': '50%',
        'background': "#d8d7d7"
      },
      btnStyle3:{
        'color': '#efb615'
      }
    }
  },
  methods:{
    clickme(){
      alert('你点击了蓝色button!');
    },
    tipme(){
      alert('你点击了灰色button!');
    }
  }
}
```

Select 下拉列表
``` bash
安装：
  import rSelect from 'rong-ui/lib/rSelect'
  Vue.use(rSelect);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rSelect} from 'rong-ui'
  Vue.use(rSelect);


参数                     默认值                      说明
attrs                    {}                        配置参数
onconfirm               function                   点确定按钮返回选择结果：{text:'', value:''}

attrs下各项配置说明：
attrs: {
  title: "", //表单名称 label,
  name: "",  //select name属性
  value: "", //select value
  data: [],  //实例数据：[{
                      text: "请选择", 
                      value: "0", 
                      children: [{
                        type:"idcard", 
                        title: "身份证号码",
                        name: "idcard",
                        placeholder: "请输入身份证号码"
                      },{
                        type:"phone", 
                        title: "手机号码",
                        name: "mobile",
                        placeholder: "请输入您的手机号码"
                      }]
                    }]
  lblWidth: "", //表单名称字长， eg: "4em"
  placeholder: "请输入", //select placeholder
  lr: "right",  //select文案 text-align: right/left
  disabled: 'disabled', //select disabled
  readonly: false,  //select readonly
  needVerify: true, //是否需要校验
  verify: function(value){}   //自定义校验函数，需有明确的返回（true | false）
}

示例代码：
<rSelect :attrs="config1" :ref="config1.name"></rSelect>
<rSelect :attrs="config2" :ref="config2.name"></rSelect>
<rSelect :attrs="config3" :ref="config3.name"></rSelect>
<div class="btn" @click="doSubmit">提交</div>
export default{
  name: "rReginExp",
  data(){
    return {
      config1: {
        title: "人群类别",
        name: "population_category",
        value: '',
        data: [
          {
            text: '上班族',
            value: 'office_lady',
            children: [
              {
                type:"rInput", 
                title: "姓名(无需校验)",
                name: "username",
                needVerify: false,
                placeholder: "请输入用户姓名"
              },
              {
                type:"rIDCard", 
                title: "身份证号码",
                name: "idcard",
                placeholder: "请输入身份证号码"
              },
              {
                type:"rTelephone", 
                title: "手机号码",
                name: "mobile",
                placeholder: "请输入您的手机号码"
              }
            ]
          },
          {
            text: '学生',
            value: 'student',
            children: [
              {
                type:"rInt", 
                title: "每月花费",
                name: "expense",
                unit: "元",
                placeholder: "请输入您每月生活费"
              },
              {
                type: "rSelect",
                title: "爱好",
                name: "interest",
                value: 'maishu',
                data: [
                  {
                    text: "买书",
                    value: 'maishu',
                    children: [
                      {
                        type: "rSelect",
                        title: "书籍类型",
                        name: "book_type",
                        value: 'xiaoshuo',
                        data: [
                          {
                            text: '外语',
                            value: 'waiyu'
                          },
                          {
                            text: '汉语',
                            value: 'hanyu'
                          },
                          {
                            text: '小说',
                            value: 'xiaoshuo'
                          }
                        ]
                      },
                      {
                        type:"rInt", 
                        title: "买书花费",
                        name: "buy_book_expense",
                        unit: "元",
                        placeholder: "请输入您每月买书费用"
                      }
                    ]
                  },
                  {
                    text: "娱乐",
                    value: '娱乐'
                  }
                ]
              }
            ]
          },
          {
            text: '自由职业者',
            value: 'free',
            children: [
              {
                type: "rSelect",
                title: "自由职业者类型",
                name: "free_type",
                value: 1,
                data: [
                  {
                    text: "微商",
                    value: 0
                  },
                  {
                    text: "网络小说写手",
                    value: 1
                  }
                ]
              }
            ]
          }
        ]
      },
      config2: {
        title: "贷款期限",
        name: "loan_term",
        value: '2',
        lblWidth: "4em",
        lr: "right",
        placeholder: "请选择贷款期限",
        data:[{
          text:"1个月",
          value: "1"
        },{
          text:"2个月",
          value: '2'

        },{
          text:"36个月",
          value:"36"
        },{
          text: "自己输入",
          value: "0",
          children: [{
            type:"rInt", 
            title: "输入您的贷款期限",
            name: "m_term",
            unit: "个月",
            placeholder: "请输入您期望的贷款期限",
            verify(val){
              if(val > 12){
                this.$toast('贷款期限最长12个月，以为您变更为12个月！');
                this.currentValue = 12;
                return false;
              }else if(val < 3){
                this.$toast('贷款期限最短3个月，以为您变更为3个月！');
                this.currentValue = 3;
                return false;
              }else{
                return true;
              }
            }
          }]
        }],
        verify(val, selectedIndex){
          if(val.value == 1){
            this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
            return false;
          }else{
            return true;
          }
        }
      },
      config3: {
        title: "教育程度",
        name: "education",
        value: '2',
        lblWidth: "4em",
        lr: "right",
        placeholder: "请选择贷款期限",
        readonly: true,
        data:[{
          text:"硕士及以上",
          value: "1"
        },{
          text:"本科",
          value: '2'

        },{
          text:"大专",
          value:"3"
        },{
          text: "中专/高中及以下",
          value: "4"
        }]
      }
    }     
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config1.title = '人群类别2'
      //self.config1.value = 'office_lady';
    }, 1000)
  },
  methods:{
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast("请输入有效的" + this.$refs[key].attrs.title + "~");
          return;
        }
      }
      if(pass) {
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```

Datepicker 日期选择
``` bash
安装：
  import rDatepicker from 'rong-ui/lib/rDatepicker'
  Vue.use(rDatepicker);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rDatepicker} from 'rong-ui'
  Vue.use(rDatepicker);


参数                     默认值                      说明
attrs                    {}                        配置参数
      format              String:  "yyyy-mm-dd"       日期格式
      type                String: "date"              year,month,date三种选择器
      value               String: ""                  默认显示日期
      placeholder         String: "请选择日期"         日期选择提示词
      disabled            Boolean:false               是否禁用
      startYear           String,Number               开始年份
      endYear             String,Number               结束年份
      yearsLength         String,Number               年份长度(显示多少年)
onconfirm               function                   回调函数，点确定按钮返回日期选择结果：
                                                  {year: 2016, month: "02", date: "27", value: "2016-02-27"}


示例代码：
<rDatepicker :attrs='config' @onconfirm="birthDate"></rDatepicker>
<rDatepicker :attrs='config1' @onconfirm="birthDate"></rDatepicker>
<rDatepicker :attrs='config2' @onconfirm="birthDate"></rDatepicker>
<rDatepicker :attrs='config3'  @onconfirm="birthDate"></rDatepicker>
<rDatepicker :attrs='config4'  @onconfirm="birthDate"></rDatepicker>

export default{
  name: "rDatepickerExp",
  data(){
    return {
      disabled: true,
      cnt: 0,
      config: {
        value: '',
        type: '',
        format: '',
        title: '',
        yearsLength: '4'
      },
      config1: {
        type: 'year',
        format: 'yyyy'
      },
      config2: {
        value: '1988/10',
        type: 'month',
        format: 'yyyy/mm'
      },
      config3: {
        value: '12/03/2015',
        format: 'dd/mm/yyyy'
      },
      config4: {
        value: '1990年02月27日',
        format: 'yyyy年mm月dd日'
      }
    }
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config = {
        value: '2016-02-27',
        type: 'date',
        format: 'yyyy-mm-dd',
        title: '我们都是小学生',
        yearsLength: '4'
      };
    }, 1000)
  },
  methods:{
    birthDate(date){
      console.log(date);
    }
  }
}
```

Icon 图标
``` bash
安装：
  import rIcon from 'rong-ui/lib/rIcon'
  Vue.use(rIcon);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rIcon} from 'rong-ui'
  Vue.use(rIcon);


参数                     默认值                      说明
type                    String                     icon类型
                                                        close, close-circled, inform, addrlist
                                                        check, uncheck, check-circled, return
                                                        triangle-down, info, info-neg, info-pos
                                                        arrow-left, arrow-right, arrow-up, arrow-down
                                                        clear
size                    String,Number              字体大小
color                   String                     颜色
iconClick                   function                   回调函数，点击icon时触发


示例代码：
<rIcon type="close" @click="iconClick"></rIcon>
<rIcon type="close-circled"></rIcon>
<rIcon type="inform"></rIcon>
```

Tabs 标签切换
``` bash
安装：
  import rTabs from 'rong-ui/lib/rTabs'
  Vue.use(rTabs);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rTabs} from 'rong-ui'
  Vue.use(rTabs);


参数                     默认值                      说明
value                   string: "0"                默认选中项，以"0"开始。
                                                   可给每个rTab设置不同的index,然后value与之匹配即为当前项。
label                    String                    标签tab文字。
                                                   标签也可以通过slot形式添加:‹span slot="label" style="color:red"›tab2‹/sapn›
onclick                  function                  回调函数，点击tab时触发。返回参数index



默认tabs是不带样式的，可在外部自定义。选中状态的样式是"active"。如：
.rTabs-header{ 
  -webkit-box-pack: justify;
  box-pack: justify;
  background: -webkit-linear-gradient(to top, #fcccc4 1px, rgba(24, 24, 24, 0) 1px);
  background: linear-gradient(to top, #fcccc4 1px, rgba(24, 24, 24, 0) 1px);
  li{
    padding: 10px 15px;
    &.active{
      border-bottom: 2px solid red;
    }
  }
}


示例代码(常规)：
<rTabs>
  <rTab label="tab1">
    <p>tab1 content</p>
  </rTab>
  <rTab label="tab2">
    <p>tab2 content</p>
  </rTab>
  <rTab label="tab3">
    <p>tabs3 content</p>
  </rTab>
</rTabs>
  

示例代码(通过value指定默认tab)：
<rTabs value="0">
  <rTab label="tab1">
    <p>tab1 content</p>
  </rTab>
  <rTab label="tab2">
    <p>tab2 content</p>
  </rTab>
  <rTab label="tab3">
    <p>tabs3 content</p>
  </rTab>
</rTabs>

或者：
<rTabs value="b">
  <rTab label="tab1" index="a">
    <p>tab1 content</p>
  </rTab>
  <rTab label="tab2" index="b">
    <p>tab2 content</p>
  </rTab>
  <rTab label="tab3" index="c">
    <p>tabs3 content</p>
  </rTab>
</rTabs>


示例代码(标签tab通过slot形式插入)：
<rTabs>
  <rTab label="tab1">
    <p>tab1 content</p>
  </rTab>
  <rTab>
    <span slot="label" style="padding-left: 10px; padding-right: 10px">tab2</span>
    <p>tab2 content</p>
  </rTab>
  <rTab label="tab3">
    <p>tabs3 content</p>
  </rTab>
</rTabs>
```



Input 输入框
``` bash
安装：
  import rInput from 'rong-ui/lib/rInput'
  Vue.use(rInput);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rInput} from 'rong-ui'
  Vue.use(rInput);


参数                     默认值                      说明
attrs                   Object                     输入框的配置
@oninput                function(value)            输入框输入输入值有变化时的操作
@onclear                function(e, component)     清空输入框时触发的操作
                                                  （可用于清空数据时把button置灰等效果）
@onclickLabelIcon       function(e, component)     点击表单名称后的icon
@onclickInputIcon       function(e, component)     点击表单input后的icon
@onenter                function(e, component)
@onfocus                function(e, component)
@onchange               function(e, component)
@onblur                 function(e, component)


attrs下各项配置说明：
attrs: {
  title: "表单名称"      //表单名称 label
  lblWidth: ""          //表单名称字长， eg: "4em"
  name: ''              //input name属性
  value: ""             //input value属性
  placeholder: "请输入"  //input placeholder
  lr: "right"           //input text-align: right/left
  maxlength: null       //input maxlength
  disabled: 'disabled'  //input disabled
  readonly: false       //input readonly
  autofocus: false      //input autofocus
  unit: ''              //标单输入的单位，eg. 元
  showInputIcon: true   //是否显示表单input后的icon
  inputIconType: "info" //表单input后icon的类型，取值为rIcon组件的type，eg. info
  showLabelIcon: true   //是否显示表单名称后的icon
  labelIconType: "info"  //表单名称后icon的类型，取值为rIcon组件的type，eg. info
  needVerify: true       //是否需要校验
  verify: function(value){}   //自定义校验函数，需有明确的返回（true | false）
};


配置参数
<rInput :attrs="config" 
  //下面绑定事件的回调函数都有两个参数（e, component）,事件和当前组件
  @onclickLabelIcon="onclickLabelIcon" 
  @onclickInputIcon="onclickInputIcon" 
  @oninput="oninput"
  @onenter="onenter"
  @onfocus="onfocus"
  @onchange="onchange"
  @onblur="onblur"
></rInput>
config: {
  title: "爸爸的名字",
  name: 'fatherName',
  value: "",
  maxlength: 3,
  placeholder: "请输入马云",
  disabled: false,
  readonly: false,
  autofocus: false,
  unit: '',
  //显示input后面icon
  showInputIcon: false,
  //input后面icon的类型
  inputIconType: "close-circled",
  //显示label后面的icon
  showLabelIcon: false,
  //label后面icon的类型
  labelIconType: 'info',
  needVerify: true,
  verify: function(value){}
}


示例代码：
<template v-for="item in items">
  <component :is="item.type" :attrs="item.config" :ref="item.config.name" @onclickLabelIcon="onclickLabelIcon" @onclickInputIcon="onclickInputIcon" @oninput="oninput" ></component>
</template>
<div class="btn" @click="doSubmit">提交</div>

<div class="tip">以下为输入框左对齐</div>
<template v-for="item in items1">
  <component :is="item.type" :attrs="item.config" :ref="item.config.name"></component>
</template>

export default{
  name: "rInputExp",
  data(){
    return {
      items: [
        {
          type: "rInput",
          config: {
            title: "爸爸的名字",
            name: 'fatherName',
            value: "",
            placeholder: "请输入马云",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            verify: function(value){
              if(value != "马云"){
                this.$toast("请输入马云爸爸的名字！");
                return false;
              }else{
                return true;
              }
            }
          }
        },
        {
          type: "rInput",
          config: {
            title: "爸爸有多少钱",
            name: 'fatherMoney',
            value: "",
            placeholder: "请输入十个亿",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            inputIconType: 'info',
            verify: function(value){
              var reg = /^[0-9]*[1-9][0-9]*$/;

              if(!reg.test(value)){
                this.$toast("马云爸爸的钱填正整数！");
                return false;
              }else{
                return true;
              }
            }
          }
        },
        {
          type: "rInput",
          config: {
            title: "爸爸儿子的名字",
            name: 'sonName',
            value: "",
            placeholder: "请输入王思聪",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            showLabelIcon: true,
            labelIconType: 'addrlist'
          }
        },
        {
          type: "rInput",
          config:  {
            title: "爸爸儿子女友的数目",
            name: 'girlfriend',
            value: "",
            placeholder: "随你所想 不超过三位数",
            maxlength: 3,
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '个',
            showInputIcon: false
          }
        },
        {
          type: "rInput",
          config:  {
            title: "想不想成为爸爸的儿子",
            name: 'beSon',
            value: "想(readonly)",
            readonly: true,
            placeholder: "一定要",
            disabled: 'disabled',
            autofocus: false,
            unit: ''
          }

        }
      ],
      items1: [
        {
          type: "rInput",
          config: {
            title: "登录名",
            name: 'uName',
            value: "",
            placeholder: "邮箱/手机号/昵称",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            lr: "left",
            lblWidth: "4em"
          }
        },
        {
          type: "rInput",
          config: {
            title: "登录密码",
            name: 'uPwd',
            value: "",
            placeholder: "6-12位数字加字母",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            inputIconType: 'info',
            lr: 'left',
            lblWidth: "4em"
          }
        }
      ]
    }
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.items[0].config.value = '老马';
    }, 2000)
  },
  methods: {
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key][0].verify();
        if(!pass){
          break;
        }
      }
      if(pass) {
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key][0].getSerialize());
          Object.assign(sa,this.$refs[key][0].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title
        }
      })
    },
    oninput(e, component){
      if(component.conf.name == 'girlfriend' || component.conf.name == 'fatherMoney'){
        var target = e.target,
          value = target.value;
        value = value.replace(/[０１２３４５６７８９]/g, function(v){
          return v.charCodeAt(0)-65296;}
        );
          component.currentValue = value.replace(/[^\d]/g,'');
      }
    }
  }

}
```

vcode 图片验证码
``` bash
安装：
  import rVcode from 'rong-ui/lib/rVcode'
  Vue.use(rVcode);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rVcode} from 'rong-ui'
  Vue.use(rVcode);



组件参数继承rInput组件，参数可查看rInput组件。attrs新增属性{src: ""//图片地址}


示例代码：
<rVcode 
  :attrs="config" 
  @oninput="oninput" 
  @onclear="onclear" 
  @onfocus="onfocus"
  @onblur="onblur" 
  @onenter="onenter"
  @onchange="onchange"
  @onclickLabelIcon="onclickLabelIcon"
  @onclickInputIcon="onclickInputIcon"
  :ref="config.name" 
></rVcode>
<rVcode :attrs="config0" @oninput="oninput" @onclear="onclear" :ref="config0.name"></rVcode>
<rVcode :attrs="config1" @onclickLabelIcon="onclickLabelIcon"  :ref="config1.name"></rVcode>
<rVcode :attrs="config2" @onclickInputIcon="onclickInputIcon" :ref="config2.name"></rVcode>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rVcodeExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        title: "图片验证码",
        lblWidth: "7em",
        name: 'vcode1',
        value: "",
        lr: "right",
        placeholder: "请输入图片验证码",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: '',
        src: "https://m.rong360.com/mapi/loan/vcodecreate?rongid=0cj50abn4mtc5jv86ouou0s3s7&type=contact_banker",
        verify(val){
          if(val.length > 4){
            this.$toast(this.conf.title + ': 哥，你输入的也太长了吧');
            return false;
          }else{
            return true;
          }
        }
      },
      config0: {
        lblWidth: "7em",
        title: "验证码限制长度",
        name: 'vcode2',
        maxlength: 4,
        value: "",
        lr: "right",
        placeholder: "请输入图片验证码",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: '',
        src: "https://m.rong360.com/mapi/loan/vcodecreate?rongid=0cj50abn4mtc5jv86ouou0s3s7&type=contact_banker"
      },
      config1: {
        lblWidth: "7em",
        title: "验证码",
        name: 'vcode3',
        maxlength: 4,
        value: "",
        lr: "right",
        placeholder: "请输入图片验证码1",
        disabled: false,
        readonly: false,
        autofocus: false,
        showLabelIcon: true,
        labelIconType: 'addrlist',
        unit: '',
        src: "https://m.rong360.com/mapi/loan/vcodecreate?rongid=0cj50abn4mtc5jv86ouou0s3s7&type=contact_banker"
      },
      config2: {
        lblWidth: "7em",
        title: "验证码左对齐",
        name: 'vcode4',
        maxlength: 4,
        value: "",
        lr: "left",
        placeholder: "请输入图片验证码2",
        disabled: false,
        readonly: false,
        autofocus: false,
        inputIconType: 'info',
        unit: '',
        src: "https://m.rong360.com/mapi/loan/vcodecreate?rongid=0cj50abn4mtc5jv86ouou0s3s7&type=contact_banker"
      }
    }
  },
  methods:{
    oninput(e, component){
      console.log("输入的验证码： "+ e.target.value);
    },
    onclear(e, component){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    onfocus(e, component){
      console.log("获得焦点");
    },
    onblur(e, component){
      component.verify();
    },
    onenter(e, component){
      console.log("点击了确认按钮");
    },
    onchange(e, component){
      console.log("内容发生了变化");
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "输入错误~");
          break;
        }
      }

      if(pass){
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```

Email 邮箱
``` bash
安装：
  import rEmail from 'rong-ui/lib/rEmail'
  Vue.use(rEmail);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rEmail} from 'rong-ui'
  Vue.use(rEmail);


组件参数继承rInput组件，参数可查看rInput组件。attrs新增邮箱列表属性{emailList:[]}


示例代码：
<rEmail :attrs="configs" :ref="configs.name" @onchange="onchange"></rEmail>
<rEmail 
  :attrs="configs1" 
  @oninput="oninput" 
  @onclear="onclear" 
  @onfocus="onfocus"
  @onblur="onblur" 
  @onenter="onenter"
  @onchange="onchange"
  @onclickLabelIcon="onclickLabelIcon"
  @onclickInputIcon="onclickInputIcon"
  :ref="configs1.name"
></rEmail>
export default{
  name: "rEmailExp",
  data(){
    return {
      configs: {
        title: "您的邮箱地址",
        lr: "right",
        lblWidth: "7em",
        placeholder: "请输入您的邮箱地址",
        name: "email",
        emailList:[
          "qq.com",
          "sina.com",
          "sohu.com",
          "163.com",
          "foxmail.com",
          "gmail.com",
          "rong360.com",
          "edu.cn",
          "outlook.com",
          "vip.qq.com",
          "126.com"
        ]
      },
      configs1: {
        title: "二哈的邮箱地址",
        lr: "right",
        placeholder: "请输入您狗狗的邮箱地址",
        name: "dog-email",
        showLabelIcon: true,
        emailList:[
          "qq.com",
          "sina.com",
          "sohu.com",
          "163.com",
          "foxmail.com",
          "gmail.com",
          "rong360.com",
          "edu.cn",
          "outlook.com",
          "vip.qq.com",
          "126.com"
        ]
      }
    }
  },
  methods: {
    oninput(e, component){
      console.log("输入的邮箱： "+ e.target.value);
    },
    onclear(e, component){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    onfocus(e, component){
      console.log("获得焦点");
    },
    onblur(e, component){
      component.verify();
    },
    onenter(e, component){
      console.log("点击了确认按钮");
    },
    onchange(e, component){
      console.log("内容发生了变化");
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "格式错误~");
          break;
        }
      }

      if(pass){
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```



Number 数字类型组件
``` bash
安装：
  import rNumber from 'rong-ui/lib/rNumber'
  Vue.use(rNumber);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rNumber} from 'rong-ui'
  Vue.use(rNumber);


参数                     默认值                                    说明
attrs                   Object                                   输入框的配置
@oninput                function(value)                          输入框输入输入值有变化时的操作
@onconfirm              function(code, codeStr, component)       点键盘确认按钮
@onclear                function(e, component)                   清空输入框时触发的操作
                                                                （可用于清空数据时把button置灰等效果）
@onclickLabelIcon       function(e, component)                   点击表单名称后的icon
@onclickInputIcon       function(e, component)                   点击表单input后的icon


attrs下各项配置说明：
  attrs:{
    title: "表单名称"       //表单名称 label
    lblWidth: ""           //预留字段，label的长度，便于用户手动修改，可以设置为几个字长，eg. "4em"
    name: ''               //input name属性
    value: ""              //input value属性
    type: 'int'            //键盘类型，int, float, idcard
    placeholder: "请输入"   //input placeholder
    lr: "right"            //input text-align
    maxlength: null        //input maxlength
    disabled: false        //input disabled
    readonly: false        //input readonly
    unit: ''               //标单输入的单位，eg. 元
    showInputIcon: true    //是否显示表单input后的icon
    inputIconType: "info"  //表单input后icon的类型，取值为rIcon组件的type，eg. info
    showLabelIcon: true    //是否显示表单名称后的icon
    labelIconType: "info"  //表单名称后icon的类型，取值为rIcon组件的type，eg. info
    needVerify: true       //是否需要校验
    verify: function       //自定义校验函数，需有明确的返回（true | false）
  };


示例代码：
<rNumber :attrs="config" :ref="config.name" @onclear="onclear"></rNumber>
<rNumber :attrs="config0" :ref="config0.name"></rNumber>
<rNumber 
  :attrs="config1" 
  :ref="config1.name" 
  @onconfirm="confrimFatherHand" 
  @onclickLabelIcon="onclickLabelIcon" 
  @onclickInputIcon="onclickInputIcon"
>
</rNumber>
<rNumber 
  :attrs="config2" 
  :ref="config2.name"
  @onclickLabelIcon="onclickLabelIcon" 
>
</rNumber>
<rNumber :attrs="config3" :ref="config3.name"></rNumber>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rNumberExp",
  data(){
    return {
      config: {
        title: "马云爸爸有多少钱(覆盖默认校验)",
        name: 'fatherName',
        value: "3000",
        maxlength: 5,
        placeholder: "请输入几个亿",
        disabled: false,
        readonly: false,
        unit: '亿',
        verify(val){
          if(val < 10000){
            this.$toast({
              propsData: {
                message: '你也太小看马玉爸爸了'
              }
            })
            return false;
          }else{
            return true;
          }
        }
      },
      config0: {
        title: "马云爸爸的年龄(maxlength=3)",
        type: 'int',
        name: 'fatherAge',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '岁',
        maxlength: 3
      },
      config1: {
        title: "马云爸爸几个秘书(键盘确认会触发校验)",
        type: 'int',
        name: 'fatherHand',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        inputIconType: 'info',
        verify: function(val){
          if(val===""){
            this.$toast("爸爸的秘书个数-请输入数字！");
            return false;
          }else if(val>3){
            this.$toast("爸爸的秘书个数-输入的数字须小于3！");
            return false;
          }
          return true;
          
        }
      },
      config2: {
        title: "马云爸爸几个老婆",
        name: 'fatherWife',
        value: "1",
        placeholder: "请输入",
        disabled: false,
        readonly: true,
        autofocus: false,
        unit: '(readonly)个',
        showLabelIcon: true,
        labelIconType: 'info'
      },
      config3: {
        title: "马云爸爸的身份证号(键盘类型idcard)",
        type: 'idcard',
        name: 'fatherID',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: ''
      }
    }     
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config.value = 789;
      self.config.placeholder = 'xxx';
      //self.config.readonly = 'readonly';
      self.config.lr = 'right';
      self.config.type = 'int';
      self.config.maxlength = 8;
      self.config.canDelete = true;
      //self.config.unit = '元';
    }, 2000)
  },
  methods: {
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          break;
        }
      }
      if(pass){
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    confrimFatherHand(){
      this.$refs.fatherHand.verify();
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    }
  }
}
```

Int 整数组件
``` bash
安装：
  import rInt from 'rong-ui/lib/rInt'
  Vue.use(rInt);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rInt} from 'rong-ui'
  Vue.use(rInt);


组件参数继承rNumber组件，参数可以查看rNumber组件。限定type=int


示例代码：
<rInt :attrs="config" :ref="config.name" @onclear="onclear"></rInt>
<rInt :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rInt>
<rInt :attrs="config1" :ref="config1.name" @onclickLabelIcon="onclickLabelIcon"></rInt>
<rInt :attrs="config2" @oninput="oninput"  @onconfirm="onconfirm" :ref="config2.name"></rInt>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rIntExp",
  data(){
    return {
      num: "",
      count: 0,
      txt: "",
      config: {
        title: "天上的✨有几颗(默认非空校验)",
        name: 'stars',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true
      },
      config0: {
        title: "森林里有多少棵🌲(无需校验)",
        name: 'hair',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        inputIconType: 'info',
        needVerify: false
      },
      config1: {
        title: "海里的🐟有几种(自定义校验规则)",
        name: 'fish',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showLabelIcon: true,
        labelIconType: 'info',
        verify: function(val){
          if(val<1000){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "🐟的种类不可胜举,至少1000种！"
              }
            })
            return false;
          }
          return true;
        }
      },
      config2: {
        title: "白雪和几个小矮人(点键盘确认时触发校验)",
        name: 'sand',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        verify: function(val){
          if(val != 7){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "傻瓜，小矮人是七个啊！！！"
              }
            });
            return false;
          }
          return true;
        }
      }
    }
  },
  methods:{
    oninput(val){
      this.num = val;console.log(val)
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    onconfirm(code, codeStr, component){
      //this.$refs.sand.verify();
      component.verify();
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "格式错误~");
          break;
        }
      }

      if(pass) {
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}

```

Float 浮点数组件
``` bash
安装：
  import rFloat from 'rong-ui/lib/rFloat'
  Vue.use(rFloat);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rFloat} from 'rong-ui'
  Vue.use(rFloat);


组件参数继承rNumber组件，参数可查看rNumber组件。限定type=float。floatFixed属性限定小数点后保留位数，默认不限制。


示例代码：
<rFloat :attrs="config" :ref="config.name" @onclear="onclear"></rFloat>
<rFloat :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rFloat>
<rFloat :attrs="config1" :ref="config1.name" @onclickLabelIcon="onclickLabelIcon"></rFloat>
<rFloat :attrs="config2" @oninput="oninput"  @onconfirm="onconfirm" :ref="config2.name"></rFloat>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rFloatExp",
  data(){
    return {
      num: "",
      count: 0,
      txt: "",
      config: {
        title: "天上的✨大小",
        name: 'stars',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        verify: function(val){
          if(!val){
            this.$toast("天上的星星大小？答案：天知道");
            return false;
          }
          return true;
        }
      },
      config0: {
        title: "森林里🌲的高度(小数点后三位)",
        name: 'hair',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        floatFixed: 3,
        showInputIcon: true,
        inputIconType: 'info',
        verify: function(val){
          if(val<3){
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
        name: 'fish',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showLabelIcon: true,
        labelIconType: 'info',
        verify: function(val){
          if(val<100){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "🐟的大小不量！"
              }
            })
            return false;
          }
          return true;
        }
      },
      config2: {
        title: "白雪公主童话里小矮人的高度",
        name: 'sand',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        verify: function(val){
          if(!val || val > 1.5){
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
    }
  },
  methods:{
    oninput(val){
      this.num = val;
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
      this.txt = "执行清空操作次数："+ (++this.count);
    },
    onconfirm(code, codeStr, component){
      //this.$refs.sand.verify();
      component.verify();
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "格式错误~");
          break;
        }
      }

      if(pass){
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```

Telephone 手机号码
``` bash
安装：
  import rTelephone from 'rong-ui/lib/rTelephone'
  Vue.use(rTelephone);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rTelephone} from 'rong-ui'
  Vue.use(rTelephone);


组件参数继承rNumber组件，参数可查看rNumber组件。限定type=int,attrs里{maxlength:11,unit:""}


示例代码：
<rTelephone :attrs="config" :ref="config.name"></rTelephone>
<rTelephone :attrs="config0" @oninput="oninput" @onclear="onclear" @onconfirm="onconfirm" :ref="config0.name"></rTelephone>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rTelephoneExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        title: "马云爸爸手机号码(不校验)",
        name: 'fatherPhone',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        needVerify: false
      },
      config0: {
        title: "思聪老公的手机号码(键盘确定时校验)",
        name: 'sonPhone',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: ''
      }
    }
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config.value = '1328888888';
      self.config.readonly = true;
    }, 2000)
  },
  methods:{
    oninput(val){
      this.phone = val;
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
      this.txt = "执行清空操作次数："+ (++this.count);
    },
    onconfirm(code, codeStr, component){
      //this.$refs.sonPhone.verify();
      component.verify();
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "格式错误~");
          break;
        }
      }

      if(pass) {
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```

Mvcode 短信验证码
``` bash
安装：
  import rMvcode from 'rong-ui/lib/rMvcode'
  Vue.use(rMvcode);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rMvcode} from 'rong-ui'
  Vue.use(rMvcode);


组件参数继承rNumber组件，参数可查看rNumber组件。限定type=int。
attrs里新增{
  counter: 60,//倒计时时长 
  action:'/sendMvcode', //发送短信验证码接口
  params:{phone: '13234343434'} //发送短信验证码需携带的参数
}三个字段


示例代码：
<rMvcode 
  :attrs="config" 
  @oninput="oninput" 
  @onclear="onclear" 
  @onconfirm="onconfirm" 
  @onclickLabelIcon="onclickLabelIcon"
  @onclickInputIcon="onclickInputIcon"  
  @success="onSuccess"
  @fail="onFail"
  :ref="config.name"
>
</rMvcode>
<rMvcode :attrs="config0" @oninput="oninput" @onclear="onclear" @success="onSuccess" @fail="onFail" :ref="config0.name"></rMvcode>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rMvcodeExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        counter: 10,
        action: "/sendMvcode",
        params: {
          phone: '13234343434'
        },
        title: "验证码",
        //lblWidth: "5em",
        name: 'mvcode1',
        value: "",
        placeholder: "请输入短信验证码",
        disabled: false,
        readonly: false,
        showLabelIcon: true,
        maxlength: 4
      },
      config0: {
        counter: 5,
        action: "/sendMvcode",
        params: {
          phone: '13234343434'
        },
        lblWidth: "5em",
        title: "验证码2",
        name: 'mvcode2',
        value: "",
        placeholder: "请输入短信验证码",
        disabled: false,
        readonly: false
      }
    }
  },
  created(){
    var self = this;

    setTimeout(function(){
      self.config.value = 2000;
      self.config.counter = 5
    }, 2000)
  },
  methods:{
    oninput(val){
      this.num = val;console.log(val)
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    onconfirm(code, codeStr, component){
      //this.$refs.sand.verify();
      component.verify();
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    },
    onSuccess(result){
      this.$toast('短信验证码发送成功');
    },
    onFail(result){
      this.$toast('短信验证码发送失败');
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "输入错误~");
          break;
        }
      }

      if(pass) {
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```

IDCard 身份证号码
``` bash
安装：
  import rIDCard from 'rong-ui/lib/rIDCard'
  Vue.use(rIDCard);

  或者：
  import 'rong-ui/lib/rong-ui.css'
  import {rIDCard} from 'rong-ui'
  Vue.use(rIDCard);


组件参数继承rNumber组件，限定type=idcard,attrs里{maxlength:18,unit:""}


示例代码：
<rIDCard :attrs="config" :ref="config.name"></rIDCard>
<rIDCard :attrs="config0" @oninput="oninput" @onclear="onclear" @onconfirm="verifyIDCard" :ref="config0.name"></rIDCard>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rIDCardExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        title: "马云爸爸身份证号码(不校验)",
        name: 'fatherID',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: '',
        canDelete: false,
        needVerify: false
      },
      config0: {
        title: "思聪老公身份证号码(键盘确认时校验)",
        name: 'sonID',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: '',
        canDelete: true
      }
    }
  },
  methods:{
    oninput(val){
      this.phone = val;
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
      this.txt = "执行清空操作次数："+ (++this.count);
    },
    verifyIDCard(code, codeStr, component){
      //this.$refs.sonID.verify();
      component.verify();
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "格式错误~");
          break;
        }
      }

      if(pass){
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    }
  }
}
```

## how to get form data

``` bash
1) Input,Number,Select组件都有两个函数来获取表单数据
getSerialize(),  返回值为 name=value,如phone=13234343434
getSerializeArray(), 返回值为{name: value},如{phone: 13234343434}

2）表单组件，默认校验是否输入为空，输入为空时若引入toast组件会使用toast提示
```


### rule of plugin

* The nameplace of plugin is rXXXX. for example:

``` bash

import rButton from './rButton'

rButton.install = function(Vue){
  Vue.component(rButton.name, rButton);
}

export default rButton

```


## iconfont that you can use

these icons can be found in rIcon component

```bash
<rIcon type="arrow-top" color="#4080e8"></rIcon>
```

<img src="https://static.rong360.com/upload/png/44/40/444089aa7426b45c88aea93f20205e52.png" >

supported types are below:
* close
* close-circled
* inform
* addrlist
* check
* uncheck
* check-circled
* return
* triangle-down
* info
* info-neg
* info-pos
* arrow-left
* arrow-right
* arrow-top
* arrow-bottom