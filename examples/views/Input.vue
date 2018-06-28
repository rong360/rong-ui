<template>
	<div class="wrap">
	<div class="title">Input 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">attrs</div>
			<div class="col">Object</div>
			<div class="col">输入框的配置</div>
		</div>
		<div class="row rowsp">
			attrs下各项配置说明：<br>
			title: "表单名称"<span class="comment">&emsp; //表单名称 label</span><br>
			lblWidth: ""<span class="comment">&emsp; //表单名称字长， eg: "4em"</span><br>
			name: ''<span class="comment">&emsp; //input name属性</span><br>
			value: ""<span class="comment">&emsp; //input value属性</span><br>
			placeholder: "请输入"<span class="comment">&emsp; //input placeholder</span><br>
			lr: "right"<span class="comment">&emsp; //input text-align: right/left</span><br>
			maxlength: null<span class="comment">&emsp; //input maxlength</span><br>
			disabled: 'disabled'<span class="comment">&emsp; //input disabled</span><br>
			readonly: false<span class="comment">&emsp; //input readonly</span><br>
			autofocus: false<span class="comment">&emsp; //input autofocus</span><br>
			unit: ''<span class="comment">&emsp; //标单输入的单位，eg. 元</span><br>
			showInputIcon: true<span class="comment">&emsp; //是否显示表单input后的icon</span><br>
			inputIconType: "info"<span class="comment">&emsp; //表单input后icon的类型，取值为rIcon组件的type，eg. info</span><br>
			showLabelIcon: true<span class="comment">&emsp; //是否显示表单名称后的icon</span><br>
			labelIconType: "info"<span class="comment">&emsp; //表单名称后icon的类型，取值为rIcon组件的type，eg. info</span><br>
			needVerify: true<span class="comment">&emsp; //是否需要校验</span><br>
			verify: function(value){}<span class="comment">&emsp; //自定义校验函数，需有明确的返回（true | false）</span><br>
			};
		</div>
		<div class="row">
			Input组件有个不具名slot,便于用户拓展，比如拓展成图片验证码组件
		</div>
		<div class="row">
				<div class="col">@oninput</div>
				<div class="col">function(value)</div>
				<div class="col">输入框输入输入值有变化时的操作</div>
			</div>
			<div class="row">
				<div class="col">@onclear</div>
				<div class="col">function(e, component)</div>
				<div class="col">清空输入框时触发的操作（可用于清空数据时把button置灰等效果）</div>
			</div>
			<div class="row">
				<div class="col">@onclickLabelIcon</div>
				<div class="col">function(e, component)</div>
				<div class="col">点击表单名称后的icon</div>
			</div>
			<div class="row">
				<div class="col">@onclickInputIcon</div>
				<div class="col">function(e, component)</div>
				<div class="col">点击表单input后的icon</div>
			</div>
	</div>
	<div class="title">示例代码</div>
	<textarea class="code-content">
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
	</textarea>
		<div class="title">实例</div>
		
		<form id="form0">
			<div class="tip">请输入您的信息：</div>
			<template v-for="item in items">
				<component :is="item.type" :attrs="item.config" :ref="item.config.name" @onclickLabelIcon="onclickLabelIcon" @onclickInputIcon="onclickInputIcon" @oninput="oninput" ></component>
			</template>
			<div class="btn" @click="doSubmit">提交</div>
		</form>
		<form id="form1">
			<div class="tip">以下为输入框左对齐</div>
			<template v-for="item in items1">
				<component :is="item.type" :attrs="item.config" :ref="item.config.name"></component>
			</template>
		</form>
	</div>
</template>
<script>
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
</script>
<style lang="scss" scoped>
@function r($px){
    @return $px/18.75 * 1rem;
}	.tip{
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