<template>
	<div class="wrap">
		<div class="exp">
			<div class="tip">请输入以下信息：</div>
			<rInt :attrs="config" :ref="config.name" @onclear="onclear"></rInt>
			<rInt :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rInt>
			<rInt :attrs="config1" :ref="config1.name" @onclickLabelIcon="onclickLabelIcon" @onfocus="onfocus" @onblur="onblur"></rInt>
			<rInt :attrs="config2" @oninput="oninput"  @onconfirm="onconfirm" :ref="config2.name"></rInt>
			<rInt :attrs="config3" @onblur="onblur" :ref="config3.name"></rInt>
			<div class="btn" @click="doSubmit">提交</div>
		</div>				
	</div>
</template>
<script>
	export default{
		name: "rIntExp",
		data(){
			return {
				num: "",
				count: 0,
				txt: "",
				config: {
					title: "天上的✨有几颗(非空校验)",
					name: 'stars',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showInputIcon: true
				},
				config0: {
					title: "森林里有多少棵🌲(无需校验)",
					name: 'hair',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showInputIcon: true,
					inputIconType: 'info',
					needVerify: false
				},
				config1: {
					title: "海里的🐟有几种(自定义校验)",
					name: 'fish',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showLabelIcon: true,
					labelIconType: 'info',
					verify: function(val){
						if(val<1000){
							this.$toast({
								propsData: {
									type: "negetive",
									message: "🐟的种类不可胜举,至少1000种！"
								}
							})
							return false;
						}
						return true;
					}
				},
				config2: {
					title: "白雪和几个小矮人(键盘收起时触发校验)",
					name: 'sand',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showInputIcon: true,
					verify: function(val){
						if(val != 7){
							this.$toast({
								propsData: {
									type: "negetive",
									message: "傻瓜，小矮人是七个啊！！！"
								}
							});
							return false;
						}
						return true;
					}
				},
				config3: {
					title: "白雪和几个小矮人(系统键盘)",
					name: 'sand',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showInputIcon: true,
					maxlength: 6,
					useSafeKeyboard: false,
					verify: function(val){
						if(val != 7){
							this.$toast({
								propsData: {
									type: "negetive",
									message: "傻瓜，小矮人是七个啊！！！"
								}
							});
							return false;
						}
						return true;
					}
				}
			}
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
			onfocus(e, component){
				console.log('获得焦点')
			},
			onblur(e, component){
				console.log('失去焦点')
				component.verify()
			},
			onconfirm(code, codeStr, component){
				//this.$refs.sand.verify();
				component.verify();
			},
			onclickInputIcon(component){
				this.$toast(component.attrs.title + ' --- InputIcon click')
			},
			onclickLabelIcon(component){
				this.$toast(component.attrs.title+ ' --- LabelIcon click')
			},
			doSubmit(){
				let pass;
				for(var key in this.$refs){
					pass = this.$refs[key].verify();
					if(!pass){
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
							message:"验证通过！ 序列化数据为："+s.join("<br>&")
						},
						methods: {
							onConfirm: function(){
								this.remove();
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
.code-content{
	min-height: 50px;
}
.cb{
	font-size: .75rem;
    margin: 1rem .8rem;
    line-height: 200%;
    .cb0{
    	color: #f66;
    }
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