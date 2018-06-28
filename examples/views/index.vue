<template>
<div id="cps">
	<div class="title">Vue.prototype中的组件</div>
    <ul>
      	<li data-id="dialog" @click="goCp">Dialog 弹框</li>
    	<li data-id="toast" @click="goCp">Toast 提示</li>
      	<li data-id="loading" @click="goCp">Loading 加载中</li>
      	<li data-id="keyboard" @click="goCp">Keyborad 数字虚拟键盘</li>
    </ul>
    <div class="title">全局组件</div>
    <ul>
    	<li data-id="titlebar" @click="goCp">Titlebar 标题栏</li>
    	<li data-id="button" @click="goCp">Button 按钮</li>
	  	<li data-id="select" @click="goCp">Select 下拉列表</li>
		<li data-id="region" @click="goCp">Region 城市选取列表</li>
	  	<li data-id="datepicker" @click="goCp">Datepicker 日期选择</li>
		<li data-id="icon" @click="goCp">Icon 图标</li>
	  	<li data-id="upload" @click="goCp">Upload 文件上传</li>
	  	<li data-id="tabs" @click="goCp">Tabs 标签切换</li>
      	<!-- <li data-id="progress" class="ignore"  @click="goCp">Progress 进度条</li> -->
	  	<!-- <li data-id="radio" @click="goCp">Radio 按钮</li> -->

		<li data-id="input" @click="goCp" wrap="pt_30">Input 输入框</li>
		<li class="desc">(以下组件继承 Input输入框 组件)</li>
		<li data-id="vcode" @click="goCp">Input->vcode 图片验证码</li>
		<li data-id="email" @click="goCp">Email 邮箱</li>

		<li data-id="number" @click="goCp" wrap="pt_30">Number 数字类型组件</li>
		<li class="desc">(以下组件继承 Number 组件)</li>
		<li data-id="int"  @click="goCp">Number->Int 整数组件</li>
		<li data-id="float"  @click="goCp">Number->Float 浮点数组件</li>
		<li data-id="telephone" @click="goCp">Number->Telephone 手机号码</li>
		<li data-id="mvcode" @click="goCp">Number->Mvcode 短信验证码</li>
		<li data-id="idcard" @click="goCp">Number->IDCard 身份证号码</li>
    </ul>
    <div class="title">说明</div>
    <div class="desc">1) Input,Number,Select组件都有两个函数来获取表单数据<br>
		<span class="hl">getSerialize()</span> 返回值为 name=value,如phone=13234343434<br>
		<span class="hl">getSerializeArray()</span> 返回值为{name: value},如{phone: 13234343434}
    </div>
    <div class="desc">2）表单组件，默认校验是否输入为空，输入为空时若引入toast组件会使用toast提示</div>
	<!-- <div class="desc">3) Progress和Tip不是rong-ui组件库中的内容，打包时不打包这两个组件，代码暂时保留</div> -->
	<div class="desc" style="width: 90%; overflow: auto">
<pre>
npm 安装：
1，npm set registry http://npm.rong360.com
2，10.12.20.33  npm.rong360.com

#use rong-ui
import {Dialog, Tip} from "rong-ui"
import "rong-ui/lib/rong-ui.css"
let components = [Dialog, Tip];
components.map(cp => Vue.use(cp));

#use one component
import Dialog from "rong-ui/lib/dialog"
Vue.use(Dialog);
</pre>
	</div>
</div>	    
</template>
<script>
	export default{
		name: "CpList",
		methods:{
			goCp(e){
				this.$router.push({name: e.currentTarget.dataset.id});
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/18.75 * 1rem;
}
.ignore{
	text-decoration: line-through;
	text-decoration-color: red;
}
#cps{
	.title{
		font-size: .9rem;
		font-weight: bold;
		color: #4080e8;
		margin: r(30) 0;
	}
}
ul li{
	font-size: .8rem;
	color: #666;
	margin: r(30) 0;
}
.desc{
	text-align: justify;
	margin: 0 r(30) r(30);
	font-size: .8rem;
}
.hl{
	color: #4080e8;
	font-weight: bold;
}
[wrap~=pt_30]{
	padding-top: r(30);
}
li.desc{
	color: red;
	margin: 0;
	text-align: center;
	font-size: r(10);
}
</style>