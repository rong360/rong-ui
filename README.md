# rong-ui

> 基于Vue.js 2.0 UI组件库.


## 示例

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)

## 使用说明

### 安装

```bash

npm install rong-ui --save

```

### 引入

#### 引入单个组件

```js

import Dialog from "rong-ui/components/dialog"
Vue.use(Dialog);

引用单个组件时babel-loader需配置include和exclude，即：
{
test: /\.js$/,
loader: 'babel-loader',
include: [resolve('node_modules/rong-ui/components')],
exclude: [resolve('node_modules/rong-ui/components/rong-ui.js')]
}
```

#### 引入多个组件

```js
import "rong-ui/components/rong-ui.css"
import {Dialog, Toast} from "rong-ui"
let components = [Dialog, Toast];
components.map(cp => Vue.use(cp));
```


### 使用

Dialog提示框、Toast弹框、Loading加载中、Keyboard虚拟数字键盘 均以挂载到Vue.prototype，引入后，直接使用$dialog(options),$toast(options),$loading(options),$keyboard(options)使用

其他组件未挂载到Vue.prototype上，组件名均已`r`开头的camelCase命名

如Title标题组件，html如下：

```html

<rTitlebar theme="a" title="Title标题"></rTitlebar>   

```

## 说明文档

各组件说明文档如下：

| 组件      | 文档地址    | 
|---------- |-------- 
| Dialog 弹框 | [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/dialog.md)|
| Toast 提示 | [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/toast.md)|
| Loading 加载中 | [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/loading.md)|
|Keyborad 数字虚拟键盘| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/keyboard.md)|
|Titlebar 标题栏| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/titlebar.md)|
|Button 按钮| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/button.md)|
|Icon 图标| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/icon.md)|
|Tabs 标签页| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/tabs.md)|
|Input 输入框| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/input.md)|
|Vcode 图片验证码| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/vcode.md)|
|Email 邮箱| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/email.md)|
|Number 数字类型| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/number.md)|
|Int 整数| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/int.md)|
|Float 浮点数| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/float.md)|
|Telephone 手机号码| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/telephone.md)|
|Mvcode 短信验证码| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/mvcode.md)|
|IDCard 身份证号码| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/idcard.md)|
|Select 下拉列表| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/select.md)|
|Datepicker 日期选择| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/datepicker.md)|
|Hidden 隐藏域| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/hidden.md)|
|Fixed 吸顶或吸底| [点击查看](https://github.com/rong360/rong360.github.io/blob/master/rong-ui/doc/fixed.md)|

