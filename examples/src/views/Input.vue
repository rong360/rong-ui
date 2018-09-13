<template>
	<div class="wrap">
		<div class="exp">		
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
							showCancelBtn: false,
							message:"验证通过！ 序列化数据为："+s.join("<br>&")
						},
						methods: {
							onConfirm: function(){
								this.remove();
								// alert("序列化数组："+JSON.stringify(sa));
							}
						}
					});
				}
			},
			onclickInputIcon( component){
				this.$toast(component.attrs.title + "  -  InputIcon点击")
			},
			onclickLabelIcon(component){
				this.$toast(component.attrs.title + "  -  LableIcon点击")
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