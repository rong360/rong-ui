<template>
<div class="wrap">
	<div class="title">说明</div>
	<div class="content">
		<div class="row">组件参数继承rNumber组件，限定type=int,attrs里新增{
		counter: 60,//倒计时时长 
		action:'/sendMvcode', //发送短信验证码接口
		params:{phone: '13234343434'} //发送短信验证码需携带的参数
		}三个字段, <span style="color: red;">不对parames里的参数进行校验</span></div>
		<div class="row"></div>
	</div>
	<div class="title">示例代码</div>
	<textarea name="" id="ta" cols="50" rows="10">
		<rMvcode 
			:attrs="config" 
			@oninput="oninput" 
			@onclear="onclear" 
			@onconfirm="onconfirm" 
			@onclickLabelIcon="onclickLabelIcon"
			@onclickInputIcon="onclickInputIcon"  
			@send-success="onSuccess"
			:ref="config.name"
		>
		</rMvcode>
	</textarea>
	<div class="exp">
		<div class="title">实例</div>
		<div class="tip">请输入以下信息：{{config.counter}}</div>
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