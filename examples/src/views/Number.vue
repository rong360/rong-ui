<template>
	<div class="wrap">
		<div class="exp">
			<div class="tip">以下输入点击提交后会进行校验：</div>
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
			<rNumber :attrs="config6"></rNumber>
			<div class="btn" @click="doSubmit">提交</div>

			<div class="tip">以下为输入左对齐</div>
			<rNumber :attrs="config4"></rNumber>
			<rNumber :attrs="config5"></rNumber>
			<rNumber :attrs="config7"></rNumber>
		</div>		
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
							this.$toast('马云爸爸钱数小于10000亿元')
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
					unit: '(readonly)个',
					showLabelIcon: true,
					labelIconType: 'info'
				},
				config3: {
					title: "身份证号(键盘类型idcard)",
					type: 'idcard',
					name: 'fatherID',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: ''
				},
				config6: {
					title: "爸爸家的面积",
					type: 'float',
					name: 'area',
					value: "",
					fixed: 3,
					placeholder: "请输入别墅面积",
					disabled: false,
					readonly: false,
					unit: '平方米'
				},
				config4: {
					title: "每月工资收入",
					type: 'float',
					name: 'income',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
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
					unit: '万元',
					lr: "left",
					lblWidth: "6em"
				},
				config7: {
					title: "每月保险支出",
					type: 'float',
					name: 'funds',
					value: "",
					placeholder: "请输入",
					disabled: false,
					readonly: false,
					unit: '元',
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
							showCancelBtn: false,
							message:"验证通过！ 序列化数据为："+s.join("<br>&")
						},
						methods: {
							onConfirm(){
								this.remove();
							}
						}
					});
				}
			},
			onclear(){
				this.$toast('数据清空后的回调函数，eg. 你可以把button置灰')
			},
			confrimFatherHand(){
				this.$refs.fatherHand.verify();
			},
			onclickInputIcon(component){
				this.$toast(component.attrs.title + ' --- 点击InputIcon的回调')
			},
			onclickLabelIcon(component){
				this.$toast(component.attrs.title+ ' --- 点击labelIcon的回调')
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