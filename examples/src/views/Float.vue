<template>
	<div class="wrap">
		<div class="exp">
			<div class="title">实例</div>
			<div class="tip">请输入以下信息：</div>
			<rFloat :attrs="config" :ref="config.name" @onclear="onclear"></rFloat>
			<rFloat :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rFloat>
			<rFloat :attrs="config1" :ref="config1.name" @onclickLabelIcon="onclickLabelIcon"></rFloat>
			<rFloat :attrs="config2" @oninput="oninput"  @onconfirm="onconfirm" :ref="config2.name"></rFloat>
			<div class="btn" @click="doSubmit">提交</div>
		</div>		
		<div class="cb">
			<div class="cb0">小矮人输入时，触发事件的操作返回结果：</div>
			<div class="cb1" v-text="num"></div>
		</div>
		<div class="cb">
			<div class="cb0">小矮人清空时，触发事件的操作返回结果：</div>
			<div class="cb1" v-text="txt"></div>
		</div>
		<div class="title">说明</div>
		<div class="content">
			<div class="row">组件参数继承rNumber组件，限定type=float, <br/>fixed属性限定小数点后保留位数，默认不限制</div>
		</div>
		<div class="title">示例代码</div>
		<textarea name="" id="ta" cols="50" rows="3" style="height:200px">
			<rFloat 
				:attrs="config2" 
				:ref="config2.name"
				@oninput="oninput" 
				@onclear="onclear" 
				@onconfirm="onconfirm"
				@onclickLabelIcon="onclickLabelIcon"
				@onclickInputIcon="onclickInputIcon"
			>
			</rFloat>
		</textarea>
	</div>
</template>
<script>
	export default{
		name: "rFloatExp",
		data(){
			return {
				num: "",
				count: 0,
				txt: "",
				config: {
					title: "天上的✨大小",
					name: 'stars',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showInputIcon: true,
					verify: function(val){
						if(!val){
							this.$toast("天上的星星大小？答案：天知道");
							return false;
						}
						return true;
					}
				},
				config0: {
					title: "森林里🌲的高度(小数点后三位)",
					name: 'hair',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					fixed: 3,
					showInputIcon: true,
					inputIconType: 'info',
					verify: function(val){
						if(val<3){
							this.$toast({
								propsData: {
									type: "negetive",
									message: "参天大树~(大于3)"
								}
							});
							return false;
						}
						return true;
					}
				},
				config1: {
					title: "海里的🐟有多大(自定义校验大于100)",
					name: 'fish',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showLabelIcon: true,
					labelIconType: 'info',
					verify: function(val){
						if(val<100){
							this.$toast({
								propsData: {
									type: "negetive",
									message: "🐟的大小不量！"
								}
							})
							return false;
						}
						return true;
					}
				},
				config2: {
					title: "白雪公主童话里小矮人的高度",
					name: 'sand',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '',
					showInputIcon: true,
					verify: function(val){
						if(!val || val > 1.5){
							this.$toast({
								propsData: {
									type: "negetive",
									message: "傻瓜，小矮人高度不超过1米5啊！！！"
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
			},
			onclear(){
				this.$toast({
					propsData: {
						message: '数据为空了，你可以把button置灰'
					}
				})
				this.txt = "执行清空操作次数："+ (++this.count);
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
.cb{
	font-size: .75rem;
    margin: 1rem .8rem;
    line-height: 200%;
    .cb0{
    	color: #f66;
    }
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