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
		<!-- <li data-id="region" @click="goCp">Region 城市选取列表</li> -->
	  	<li data-id="datepicker" @click="goCp">Datepicker 日期选择</li>
		<li data-id="icon" @click="goCp">Icon 图标</li>
	  	<!-- <li data-id="upload" @click="goCp">Upload 文件上传</li> -->
	  	<li data-id="tabs" @click="goCp">Tabs 标签切换</li>
      	<!-- <li data-id="progress" class="ignore"  @click="goCp">Progress 进度条</li> -->
	  	<!-- <li data-id="radio" @click="goCp">Radio 按钮</li> -->

		<li data-id="input" @click="goCp" wrap="pt_30">Input 输入框</li>
		<li class="desc" wrap="ml_15">(以下组件继承 Input输入框 组件)</li>
		<li data-id="vcode" wrap="ml_15" @click="goCp">Input->vcode 图片验证码</li>
		<li data-id="email" wrap="ml_15" @click="goCp">Email 邮箱</li>

		<li data-id="number" @click="goCp" wrap="pt_30">Number 数字类型组件</li>
		<li class="desc" wrap="ml_15">(以下组件继承 Number 组件)</li>
		<li data-id="int" wrap="ml_15" @click="goCp">Number->Int 整数组件</li>
		<li data-id="float" wrap="ml_15" @click="goCp">Number->Float 浮点数组件</li>
		<li data-id="telephone"wrap="ml_15" @click="goCp">Number->Telephone 手机号码</li>
		<li data-id="mvcode"wrap="ml_15" @click="goCp">Number->Mvcode 短信验证码</li>
		<li data-id="idcard"wrap="ml_15" @click="goCp">Number->IDCard 身份证号码</li>
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
</pre>
	</div>
</div>	    
</template>
<script>
	export default{
		name: "CpList",
		methods:{
			goCp(e){
				this.$router.push({
					name: e.currentTarget.dataset.id,
					query: {
						title: encodeURIComponent(e.currentTarget.innerHTML)
					}
				});
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
		text-align: left;
		font-size: .9rem;
		font-weight: bold;
		color: #4080e8;
		padding: r(20) 0 0 r(15);
	}
}
ul{
	padding-left: r(30);
}
ul li{
	font-size: .8rem;
	color: #666;
	text-align: left;
	border-bottom: 1px solid #D8D9DC;
	padding: r(20) 0;
	position: relative;
	&:before,
	&:after{
		position: absolute;
		right: r(15);
		top: 50%;
		-webkit-transform-origin: right center;
		transform-origin: right center;
		width: r(10);
		height: 1px;
		overflow: hidden;
		background-color: #d8d9dc;
		display: block;
		content: "";
	}
	&:before{
		transform: rotate(45deg);
	}
	&:after{
		transform: rotate(-45deg);
	}
}
.hl{
	color: #4080e8;
	font-weight: bold;
}
[wrap~=pt_30]{
	padding-top: r(30);
}
[wrap~=ml_15]{
	margin-left: r(15);
}
li.desc{
	color: red;
	text-align: left;
	font-size: r(10);
	&:before,
	&:after{
		display: none;
	}
}
div.desc{
	font-size: r(14);
	text-align: left;
	padding: r(15);
}
</style>