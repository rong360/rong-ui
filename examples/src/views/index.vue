<template>
<div>
	<div class="head">
	    <div class="logo">RongUI</div>
	    <p class="desc">基于Vue2.0的移动组件库</p>
	</div>
	<div id="comp-list">
	    <ul>
	      	<li data-id="dialog" @click="goCp">Dialog 弹框</li>
	    	<li data-id="toast" @click="goCp">Toast 提示</li>
	      	<li data-id="loading" @click="goCp">Loading 加载中</li>
	      	<li data-id="keyboard" @click="goCp">Keyborad 数字虚拟键盘</li>
		</ul>
		<ul>
	    	<li data-id="titlebar" @click="goCp">Titlebar 标题栏</li>
	    	<li data-id="button" @click="goCp">Button 按钮</li>
			<li data-id="icon" @click="goCp">Icon 图标</li>
		  	<li data-id="tabs" @click="goCp">Tabs 标签页</li>
	  	</ul>
	  	<ul>
		  	<li data-id="input" @click="goCp">Input 输入框</li>
			<li data-id="vcode" class="comp-child" @click="goCp">Vcode 图片验证码</li>
			<li data-id="email" class="comp-child" @click="goCp">Email 邮箱</li>
			<li data-id="number" @click="goCp">Number 数字类型</li>
			<li data-id="int" class="comp-child" @click="goCp">Int 整数</li>
			<li data-id="float" class="comp-child" @click="goCp">Float 浮点数</li>
			<li data-id="telephone"class="comp-child" @click="goCp">Telephone 手机号码</li>
			<li data-id="mvcode"class="comp-child" @click="goCp">Mvcode 短信验证码</li>
			<li data-id="idcard"class="comp-child" @click="goCp">IDCard 身份证号码</li>
			<li data-id="hidden"class="comp-child" @click="goCp">hidden 隐藏域</li>
		</ul>
		<ul>
		  	<li data-id="select" @click="goCp">Select 下拉列表</li>
		  	<li data-id="datepicker" @click="goCp">Datepicker 日期选择</li>
	    </ul>
	    <ul>
		  	<li data-id="fixed" @click="goCp">Fixed 吸顶或吸底</li>
	    </ul>
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

.head{
	text-align: center;
	margin: r(30) 0 r(20) 0;
	// background: #fff;
	.logo{
		background: #4080e8;
		color: #fff;
		letter-spacing: 4px;
		font-size: r(30);
		font-weight: 900;
		width: r(133);
		margin: r(25) auto r(15) auto;
		padding: 8px 0 8px 4px;
		border-radius: 8px;
		box-shadow: 4px 2px 6px #81acf3;
	}
	.desc{
		font-size: r(16);
		color: #666;
		font-weight: 400;
	}
}

#comp-list{
	margin: 0 r(15);
	ul{
		border-radius: r(6);
		margin-bottom: r(15);
		background: #fff;
		font-size: r(15);
		color: #666;
		text-align: left;
	}
	ul li{
		border-bottom: 1px solid #efeff4;
		padding: r(20) r(15);
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
	.comp-child{
		margin-left: r(15);
		padding-left: r(5);
	}
}

</style>