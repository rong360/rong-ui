<template>
<div class="wrap">
	<rTitlebar theme="a" title="Select 下拉列表"></rTitlebar>
	<div class="exp select-exp">
		<div class="tip">请选择以下信息：</div>
		<rSelect :attrs="config" :ref="config.name"></rSelect>
		<rSelect :attrs="config2" :ref="config2.name"></rSelect>
		<rSelect :attrs="config3" :ref="config3.name"></rSelect>
		<div class="btn" @click="doChangeData">点击改变人群类别data</div>
		<div class="btn" @click="doSubmit">提交</div>
	</div>
</div>

</template>
<script>
	export default{
		name: "rSelectExp",
		data(){
			return {
				config: {},
				config0: {
					title: "人群类别-before",
					name: "population_category0",
					value: '',
					data: [
						{
							text: '企业主',
							value: 'office_lady',
							children: [
								{
									type:"rInput", 
									title: "每月收入流水",
									unit: "万元",
									name: "waterflow",
									placeholder: "请输入每月收入流水"
								}
							]
						},
						{
							text: '医生',
							value: 'doctor',
							children: [
								{
									type: "rSelect",
									title: "职位",
									name: "free_type",
									value: 2,
									data: [
										{
											text: "院长",
											value: 0
										},
										{
											text: "主任医师",
											value: 1
										},
										{
											text: "副主任医师",
											value: 2
										},
										{
											text: "住院医",
											value: 3
										},
										{
											text: "医学生",
											value: 4
										}
									]
								}
							]
						}
					]
				},
				config1: {
					title: "人群类别-after",
					name: "population_category1",
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
			this.config = this.config0;
		},
		methods:{
			doChangeData(){
				if(this.config.name == "population_category0"){
					this.config = this.config1;
				}else{
					this.config = this.config0;
				}
			},
			doSubmit(){
				let pass;
				for(var key in this.$refs){
					if(!this.$refs[key]) continue;
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
<style lang="scss">

</style>