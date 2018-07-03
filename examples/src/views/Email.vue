<template>
	<div class="wrap">
		<div class="exp">
			<!-- <div class="title">示例</div> -->
			<div class="tip">请输入以下信息：</div>
			<rEmail :attrs="configs" :ref="configs.name" @onchange="onchange"></rEmail>
			<rEmail 
				:attrs="configs1" 
				@oninput="oninput" 
				@onclear="onclear" 
				@onfocus="onfocus"
				@onblur="onblur" 
				@onenter="onenter"
				@onchange="onchange"
				@onclickLabelIcon="onclickLabelIcon"
				@onclickInputIcon="onclickInputIcon"
				:ref="configs1.name"
			></rEmail>
			<div class="btn" @click="doSubmit">提交</div>
		</div>

		<div class="title">Email 说明</div>
		<div class="content">
			<div class="row">
				<div class="col">参数</div>
				<div class="col">默认值</div>
				<div class="col">说明</div>
			</div>
			<div class="row">组件参数继承rInput组件，attrs新增邮箱列表属性{emailList:[]}</div>
			<div class="row">已知bug: 滑动穿透，邮箱列表滑动时会会滚动body,解决方案都不太完美。目前只有抓取用，目测不会出这个bug,搁置</div>
		</div>

		<div class="title">代码示例</div>
		<textarea rows="30">
			<rEmail 
				:attrs="configs1" 
				@oninput="oninput" 
				@onclear="onclear" 
				@onfocus="onfocus"
				@onblur="onblur" 
				@onenter="onenter"
				@onchange="onchange"
				@onclickLabelIcon="onclickLabelIcon"
				@onclickInputIcon="onclickInputIcon"
				:ref="configs1.name"
			></rEmail>

			configs1: {
				title: "二哈的邮箱地址",
				lr: "right",
				placeholder: "请输入您狗狗的邮箱地址",
				name: "dog-email",
				showLabelIcon: true,
				emailList:[
					"qq.com",
					"sina.com",
					"sohu.com",
					"163.com",
					"foxmail.com",
					"gmail.com",
					"rong360.com",
					"edu.cn",
					"outlook.com",
					"vip.qq.com",
					"126.com"
				]
			}
		</textarea>
					
	</div>
</template>
<script>
	export default{
		name: "rEmailExp",
		data(){
			return {
				configs: {
					title: "您的邮箱地址",
					lr: "right",
					lblWidth: "7em",
					placeholder: "请输入您的邮箱地址",
					name: "email",
					emailList:[
						"qq.com",
						"sina.com",
						"sohu.com",
						"163.com",
						"foxmail.com",
						"gmail.com",
						"rong360.com",
						"edu.cn",
						"outlook.com",
						"vip.qq.com",
						"126.com"
					]
				},
				configs1: {
					title: "二哈的邮箱地址",
					lr: "right",
					placeholder: "请输入您狗狗的邮箱地址",
					name: "dog-email",
					showLabelIcon: true,
					emailList:[
						"qq.com",
						"sina.com",
						"sohu.com",
						"163.com",
						"foxmail.com",
						"gmail.com",
						"rong360.com",
						"edu.cn",
						"outlook.com",
						"vip.qq.com",
						"126.com"
					]
				}
			}
		},
		mounted(){
		
		},
		methods: {
			oninput(e, component){
				console.log("输入的邮箱： "+ e.target.value);
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
			doSubmit(){
				let pass;
				for(var key in this.$refs){
					pass = this.$refs[key].verify();
					if(!pass){
						// this.$tip(this.$refs[key].attrs.title + "格式错误~");
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
			}
		}
	}
</script>
<style lang="scss" scoped>
@function r($px){
	@return $px/18.75*1rem;
}
textarea{
	width: 90%;
    border: 1px dotted #4080e8;
    background: #efeff4;
    padding: 3px;
}
.exp{
	border: 1px dotted #98ee1a;
}
.tip{
	padding: .5rem .8rem;
	text-align: left;
	font-size: .8rem;
	color: #4080e8;
	background: rgb(245, 231, 185);
}
.btn{
	margin: r(20) auto;
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