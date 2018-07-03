<template>
<div class="wrap">
	<div class="exp">
		<div class="title">实例</div>
		<div class="tip">请输入以下信息：</div>
		<div class="dp-wrap"><rDatepicker :attrs='config' @onconfirm="birthDate"></rDatepicker></div>
		<div class="dp-wrap"><rDatepicker :attrs='config1' @onconfirm="birthDate"></rDatepicker></div>
		<div class="dp-wrap"><rDatepicker :attrs='config2' @onconfirm="birthDate"></rDatepicker></div>
		<div class="dp-wrap"><rDatepicker :attrs='config3'  @onconfirm="birthDate"></rDatepicker></div>
		<div class="dp-wrap"><rDatepicker :attrs='config4'  @onconfirm="birthDate"></rDatepicker></div>
	</div>	
	
	<div class="title">Datepicker 参数说明</div>
	<div class="content">
		<div class="row">
			<div class="col">参数</div>
			<div class="col">默认值</div>
			<div class="col">说明</div>
		</div>
		<div class="row">
			<div class="col">format</div>
			<div class="col">String:  "yyyy-mm-dd"</div>
			<div class="col">日期格式</div>
		</div>
		<div class="row">
			<div class="col">type</div>
			<div class="col">String: "date"</div>
			<div class="col">year,month,date三种选择器</div>
		</div>
		<div class="row">
			<div class="col">value</div>
			<div class="col">String: ""</div>
			<div class="col">默认显示日期</div>
		</div>
		<div class="row">
			<div class="col">placeholder</div>
			<div class="col">String: "请选择日期"</div>
			<div class="col">日期选择提示词</div>
		</div>
		<div class="row">
			<div class="col">disabled</div>
			<div class="col">Boolean:false</div>
			<div class="col">是否禁用</div>
		</div>
		<div class="row">
			<div class="col">startYear</div>
			<div class="col">String,Number</div>
			<div class="col">开始年份</div>
		</div>
		<div class="row">
			<div class="col">endYear</div>
			<div class="col">String,Number</div>
			<div class="col">结束年份</div>
		</div>
		<div class="row">
			<div class="col">yearsLength</div>
			<div class="col">String,Number</div>
			<div class="col">年份长度(显示多少年)</div>
		</div>
		<div class="row">
			<div class="col">@onconfirm</div>
			<div class="col">function</div>
			<div class="col">点确定按钮返回日期选择结果：{year: 2016, month: "02", date: "27", value: "2016-02-27"}</div>
		</div>
	</div>
	<div class="title">示例代码</div>
	<textarea name="" id="ta" cols="50" rows="3">
		<rDatepicker :attrs='config' @onconfirm="birthDate"></rDatepicker>
	</textarea>
		
</div>
</template>
<script>
	export default{
		name: "rDatepickerExp",
		data(){
			return {
				disabled: true,
				cnt: 0,
				config: {
					value: '',
					type: '',
					format: '',
					title: '',
					yearsLength: '4'
				},
				config1: {
					type: 'year',
					format: 'yyyy'
				},
				config2: {
					value: '1988/10',
					type: 'month',
					format: 'yyyy/mm'
				},
				config3: {
					value: '12/03/2015',
					format: 'dd/mm/yyyy'
				},
				config4: {
					value: '1990年02月27日',
					format: 'yyyy年mm月dd日'
				}
			}
		},
		created(){
			var self = this;
			setTimeout(function(){
				self.config = {
					value: '2016-02-27',
					type: 'date',
					format: 'yyyy-mm-dd',
					title: '我们都是小学生',
					yearsLength: '4'
				};
			}, 1000)
		},
		methods:{
			birthDate(date){
				console.log(date);
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
.dp-wrap{
	margin: r(20);
	border: 1px solid #dcdcdc;
	padding: r(10);
	font-size: r(16);
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