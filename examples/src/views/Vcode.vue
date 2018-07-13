<template>
<div class="wrap">
	<div class="exp">
		<rTitlebar theme="a" title="Vcode 图片验证码"></rTitlebar>		
		<div class="tip">请输入以下信息：</div>
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
		<rVcode :attrs="config1"  :ref="config1.name"></rVcode>
		<rVcode :attrs="config2" :ref="config2.name"></rVcode>
		<rVcode :attrs="config3" :ref="config3.name"></rVcode>
		<div class="btn" @click="doSubmit">提交</div>
	</div>
</div>
</template>
<script>
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
					unit: '',
					src: "https://m.rong360.com/mapi/loan/vcodecreate?rongid=0cj50abn4mtc5jv86ouou0s3s7&type=contact_banker"
				},
				config3: {
					lblWidth: "7em",
					title: "码码左对齐",
					name: 'vcode5',
					maxlength: 4,
					value: "",
					lr: "left",
					placeholder: "请输入图片验证码2",
					disabled: false,
					readonly: false,
					autofocus: false,
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
			doSubmit(){
				let pass;
				for(var key in this.$refs){
					pass = this.$refs[key].verify();
					if(!pass){
						// this.$tip(this.$refs[key].attrs.title + "输入错误~");
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