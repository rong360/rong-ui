<template>
<div class="wrap dtp-wrap">
	<rTitlebar theme="a" title="Datepicker 日期选择"></rTitlebar>
	<div class="exp">
		<div class="tip">请选择以下信息：</div>
		<div class="dp-wrap" wrap="box bp_j ba_c">
			<div class="lbl">爸爸生日：</div>
			<rDatepicker :attrs='config' @onconfirm="birthDate"></rDatepicker>
		</div>
		<div class="dp-wrap" wrap="box bp_j ba_c">
			<div class="lbl">妈妈出生年份：</div>
			<rDatepicker :attrs='config1' @onconfirm="birthDate"></rDatepicker>
		</div>
		<div class="dp-wrap" wrap="box bp_j ba_c">
			<div class="lbl">哥哥出生日期：</div>
			<rDatepicker :attrs='config2' @onconfirm="birthDate"></rDatepicker>
		</div>
		<div class="dp-wrap" wrap="box bp_j ba_c">
			<div class="lbl">妹妹出生日期：</div>
			<rDatepicker :attrs='config3'  @onconfirm="birthDate"></rDatepicker>
		</div>
		<div class="dp-wrap" wrap="box bp_j ba_c">
			<div class="lbl">狗狗出生日期：</div>
			<rDatepicker :attrs='config4'  @onconfirm="birthDate"></rDatepicker>
		</div>
	</div>			
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
					title: '爸爸生日',
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
<style lang="scss">
@function r($px){
	@return $px/18.75*1rem;
}
.dtp-wrap{
	background: #fff;
	.dp-wrap{
		padding: r(10) r(15);
		font-size: r(16);
		.lbl{
			width: r(120);
			text-align: left;
		}
		.r-datepicker{
			padding: r(10);
			border: 1px solid #efeff4;
		}
	}
}

</style>