<template>
<div class="wrap">
	<div class="exp">
		<div class="title">实例</div>
		<div class="tip">请输入以下信息：</div>
		<rSelect :attrs="config1" :ref="config1.name"></rSelect>
		<rSelect :attrs="config2" :ref="config2.name"></rSelect>
		<rSelect :attrs="config3" :ref="config3.name"></rSelect>
		<div class="btn" @click="doSubmit">提交</div>
	</div>	
	
	<div class="title">Select 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">attrs</div>
			<div class="col">{}</div>
			<div class="col">配置参数</div>
		</div>
		<div class="row rowsp">
			attrs下各项配置说明：<br>
			title: "表单名称"<span class="comment">&emsp; //表单名称 label</span><br>
			name: ''<span class="comment">&emsp; //select name属性</span><br>
			value: ""<span class="comment">&emsp; //select value</span><br>
			data: []<span class="comment" style="color:red">&emsp; //实例数据：[{
					text: "请选择", 
					value: "0", 
					children: [{
						type:"idcard", 
						title: "身份证号码",
						name: "idcard",
						placeholder: "请输入身份证号码"
					},{
						type:"phone", 
						title: "手机号码",
						name: "mobile",
						placeholder: "请输入您的手机号码"
					}]
				}]</span><br>
			lblWidth: ""<span class="comment">&emsp; //表单名称字长， eg: "4em"</span><br>
			placeholder: "请输入"<span class="comment">&emsp; //select placeholder</span><br>
			lr: "right"<span class="comment">&emsp; //select文案 text-align: right/left</span><br>		
			disabled: 'disabled'<span class="comment">&emsp; //select disabled</span><br>
			readonly: false<span class="comment">&emsp; //select readonly</span><br>
			needVerify: true<span class="comment">&emsp; //是否需要校验</span><br>
			verify: function(value){}<span class="comment">&emsp; //自定义校验函数，需有明确的返回（true | false）</span><br>
		</div>
		<div class="row">
			<div class="col">@onconfirm</div>
			<div class="col">function</div>
			<div class="col">点确定按钮返回选择结果：{text:'', value:''}</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<textarea class="code-content" >
<rSelect :attrs="config1" :ref="config1.name"></rSelect>

config1: {
	title: "贷款期限",
	name: "loan_term",
	value: '2',
	placeholder: "请选择贷款期限",
	data:[{
		text:"1个月",
		value: "1"
	},{
		text:"2个月",
		value: '2'

	},{
		text:"36个月",
		value:"36"
	},{
		text: "自己输入",
		value: "0",
		children: [{
			type:"rInt", 
			title: "输入您的贷款期限",
			name: "m_term",
			unit: "个月",
			placeholder: "请输入您期望的贷款期限",
			verify(val){
				if(val > 12){
					this.$toast('贷款期限最长12个月，以为您变更为12个月！');
					this.currentValue = 12;
					return false;
				}else if(val < 3){
					this.$toast('贷款期限最短3个月，以为您变更为3个月！');
					this.currentValue = 3;
					return false;
				}else{
					return true;
				}
			}
		}]
	}],
	verify(val, selectedIndex){
		if(val.value == 1){
			this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
			return false;
		}else{
			return true;
		}
	}
}
	</textarea>
</div>

</template>
<script>
	export default{
		name: "rReginExp",
		data(){
			return {
				config1: {
					title: "人群类别",
					name: "population_category",
					value: '',
					data: [
						{
							text: '上班族',
							value: 'office_lady',
							children: [
								{
									type:"rInput", 
									title: "姓名(无需校验)",
									name: "username",
									needVerify: false,
									placeholder: "请输入用户姓名"
								},
								{
									type:"rIDCard", 
									title: "身份证号码",
									name: "idcard",
									placeholder: "请输入身份证号码"
								},
								{
									type:"rTelephone", 
									title: "手机号码",
									name: "mobile",
									placeholder: "请输入您的手机号码"
								}
							]
						},
						{
							text: '学生',
							value: 'student',
							children: [
								{
									type:"rInt", 
									title: "每月花费",
									name: "expense",
									unit: "元",
									placeholder: "请输入您每月生活费"
								},
								{
									type: "rSelect",
									title: "爱好",
									name: "interest",
									value: 'maishu',
									data: [
										{
											text: "买书",
											value: 'maishu',
											children: [
												{
													type: "rSelect",
													title: "书籍类型",
													name: "book_type",
													value: 'xiaoshuo',
													data: [
														{
															text: '外语',
															value: 'waiyu'
														},
														{
															text: '汉语',
															value: 'hanyu'
														},
														{
															text: '小说',
															value: 'xiaoshuo'
														}
													]
												},
												{
													type:"rInt", 
													title: "买书花费",
													name: "buy_book_expense",
													unit: "元",
													placeholder: "请输入您每月买书费用"
												}
											]
										},
										{
											text: "娱乐",
											value: '娱乐'
										}
									]
								}
							]
						},
						{
							text: '自由职业者',
							value: 'free',
							children: [
								{
									type: "rSelect",
									title: "自由职业者类型",
									name: "free_type",
									value: 1,
									data: [
										{
											text: "微商",
											value: 0
										},
										{
											text: "网络小说写手",
											value: 1
										}
									]
								}
							]
						}
					]
				},
				config2: {
					title: "贷款期限",
					name: "loan_term",
					value: '2',
					lblWidth: "4em",
					lr: "right",
					placeholder: "请选择贷款期限",
					data:[{
						text:"1个月",
						value: "1"
					},{
						text:"2个月",
						value: '2'

					},{
						text:"36个月",
						value:"36"
					},{
						text: "自己输入",
						value: "0",
						children: [{
							type:"rInt", 
							title: "输入您的贷款期限",
							name: "m_term",
							unit: "个月",
							placeholder: "请输入您期望的贷款期限",
							verify(val){
								if(val > 12){
									this.$toast('贷款期限最长12个月，以为您变更为12个月！');
									this.currentValue = 12;
									return false;
								}else if(val < 3){
									this.$toast('贷款期限最短3个月，以为您变更为3个月！');
									this.currentValue = 3;
									return false;
								}else{
									return true;
								}
							}
						}]
					}],
					verify(val, selectedIndex){
						if(val.value == 1){
							this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
							return false;
						}else{
							return true;
						}
					}
				},
				config3: {
					title: "教育程度",
					name: "education",
					value: '2',
					lblWidth: "4em",
					lr: "right",
					placeholder: "请选择贷款期限",
					readonly: true,
					data:[{
						text:"硕士及以上",
						value: "1"
					},{
						text:"本科",
						value: '2'

					},{
						text:"大专",
						value:"3"
					},{
						text: "中专/高中及以下",
						value: "4"
					}]
				}
			}			
		},
		created(){
			var self = this;
			setTimeout(function(){
				self.config1.title = '人群类别2'
				//self.config1.value = 'office_lady';
			}, 1000)
		},
		methods:{
			doSubmit(){
				let pass;
				for(var key in this.$refs){
					pass = this.$refs[key].verify();
					if(!pass){
						// this.$tip("请输入有效的" + this.$refs[key].attrs.title + "~");
						return;
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
<style lang="scss">
	.row{
		span{
			color: green;
		}
	}
</style>