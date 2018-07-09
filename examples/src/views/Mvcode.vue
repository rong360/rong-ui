<template>
<div class="wrap">
	<div class="exp">
		<rTitlebar theme="a" title="Mvcode 短信验证码"></rTitlebar>
		<div class="tip">请输入以下信息：</div>
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
	</div>
</div>
</template>
<script>
	export default{
		name: "rMvcodeExp",
		data(){
			return {
				phone: "",
				count: 0,
				txt: "",
				config: {
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
					counter: 30,
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
				this.num = val;
				// console.log(val)
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
			onclickInputIcon(component){
				this.$toast({
					propsData: {
						message: component.attrs.title + ' --- 提示信息'
					}
				})
			},
			onclickLabelIcon( component){
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
						// this.$tip(this.$refs[key].attrs.title + "输入错误~");
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
							showCancelBtn: false,
							message:"验证通过！ 序列化数据为："+s.join("&")
						},
						methods: {
							onConfirm: function(){
								this.remove();
								// alert("序列化数组："+JSON.stringify(sa));
							}
						}
					});
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/18.75*1rem;
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