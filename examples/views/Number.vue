<template>
	<div class="wrap">
		<div class="title">Number 参数说明</div>
		<div class="content">
			<div class="row rowtip">组件说明：这个组件可以当全局组件用，自己传type=int | float | idcard,默认校验函数是非空校验，需要其他校验可以自己传verify函数<br><span class="hl">身份证号码，手机号，浮点数，整数</span>等组件在该组件基础上扩展</div>
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
				{
				title: "表单名称"<span class="comment">&emsp; //表单名称 label</span><br>
				lblWidth: ""<span class="comment">&emsp; //预留字段，label的长度，便于用户手动修改，可以设置为几个字长，eg. "4em"</span><br>
				name: ''<span class="comment">&emsp; //input name属性</span><br>
				value: ""<span class="comment">&emsp; //input value属性</span><br>
				type: 'int'<span class="comment">&emsp; //键盘类型，int, float, idcard</span><br>
				placeholder: "请输入"<span class="comment">&emsp; //input placeholder</span><br>
				lr: "right"<span class="comment">&emsp; //input text-align</span><br>
				maxlength: null<span class="comment">&emsp; //input maxlength</span><br>
				disabled: false<span class="comment">&emsp; //input disabled</span><br>
				readonly: false<span class="comment">&emsp; //input readonly</span><br>
				unit: ''<span class="comment">&emsp; //标单输入的单位，eg. 元</span><br>
				showInputIcon: true<span class="comment">&emsp; //是否显示表单input后的icon</span><br>
				inputIconType: "info"<span class="comment">&emsp; //表单input后icon的类型，取值为rIcon组件的type，eg. info</span><br>
				showLabelIcon: true<span class="comment">&emsp; //是否显示表单名称后的icon</span><br>
				labelIconType: "info"<span class="comment">&emsp; //表单名称后icon的类型，取值为rIcon组件的type，eg. info</span><br>
				needVerify: true<span class="comment">&emsp; //是否需要校验</span><br>
				verify: function<span class="comment">&emsp; //自定义校验函数，需有明确的返回（true | false）</span><br>
				};
			</div>
			<div class="row">
			Number组件有个不具名slot,便于用户拓展，比如拓展成短信验证码组件
			</div>
			<div class="row">
				<div class="col">@oninput</div>
				<div class="col">function(value)</div>
				<div class="col">输入框输入输入值有变化时的操作</div>
			</div>
			<div class="row">
				<div class="col">@onconfirm</div>
				<div class="col">function(code, codeStr, component)</div>
				<div class="col">点键盘确认按钮</div>
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
		<textarea class="code-content" rows='18' cols='40'>
		<rNumber 
			:attrs="config1" 
			:ref="config1.name" 
			@onconfirm="confrimFatherHand" 
			@onclickLabelIcon="onclickLabelIcon" 
			@onclickInputIcon="onclickInputIcon"
		>
		</rNumber>
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
		}
		</textarea>
		<div class="title">实例</div>
		<div class="tip">请输入以下信息：</div>
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

		<div class="tip">以下为输入左对齐</div>
		<rNumber :attrs="config4"></rNumber>
		<rNumber :attrs="config5"></rNumber>
	</div>
</template>
<script>
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
				},
				config4: {
					title: "每月工资收入",
					type: 'float',
					name: 'income',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					autofocus: false,
					unit: '元',
					lr: "left",
					lblWidth: "6em"
				},
				config5: {
					title: "每月营业额",
					type: 'int',
					name: 'water',
					value: "9000",
					placeholder: "请输入",
					disabled: false,
					readonly: true,
					autofocus: false,
					unit: '万元',
					lr: "left",
					lblWidth: "6em"
				},
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
</script>
<style lang="scss" scoped>
@function r($px){
    @return $px/18.75 * 1rem;
}
	.tip{
		padding: .5rem .8rem;
		text-align: left;
		font-size: .8rem;
		color: #4080e8;
		background: rgb(245, 231, 185);
	}
	.rowtip{
		font-size: .8rem;
		color: #e6500e;
		padding: r(15) 0;
		text-align: left !important;
		.hl{
			color: #e60e0e;
			font-weight: bold;
		}
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