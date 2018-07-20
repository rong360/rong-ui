<template>
	<div class="r-datepicker" :style="dStyle" @click="showPicker">
		<span>{{date ? date : conf.placeholder}}</span>
	</div>
</template>
<script>
import Picker from 'better-picker'
	export default{
		name: "rDatepicker",
		props:{
			attrs: {
				type: Object,
				default: function(){
					return {};
				}
			}
		},
		data(){
			return {
				date: '',
				pickerData: [],
				pickerSelectedIndex: [],
				pickerTitle: ''
			}
		},
		computed:{
			conf(){
				let defaultConfig = {
					value: this.attrs.value || '',
					format: this.attrs.format || 'yyyy-mm-dd',
					type: this.attrs.type || 'date',
					placeholder: this.attrs.placeholder || '请选择日期',
					startYear: this.attrs.startYear || '',
					endYear: this.attrs.endYear || '',
					yearsLength: this.attrs.yearsLength || '10',
					title: this.attrs.title || '',
					disabled: this.attrs.disabled || false
				};
				return defaultConfig;
			},
			dStyle(){
				return {"color": this.date=="" ? "#C8C7CC": "#333"};
			}
		},
		created(){
			this.initPickerData();
		},
		watch:{
			conf(){
				this.initPickerData();
			}
		},
		mounted(){
			this.pickerSeat = document.createElement('div');
			document.body.appendChild(this.pickerSeat);
		},
		methods: {
			initPickerData(){
				let today = new Date(),
					thisYear = today.getFullYear(),
					thisMonth = today.getMonth() + 1,
					thisDate = today.getDate();

				if(this.conf.value){
					var value = this.conf.value.replace('年', '-').replace('月', '-').replace('日', ''),
						d = new Date(value),
						defaultYear = d.getFullYear(),
						defaultMonth = d.getMonth() + 1,
						defaultDate = d.getDate();

					if(!isNaN(defaultYear)){
						thisYear = defaultYear;
						thisMonth = defaultMonth;
						thisDate = defaultDate;
					}
				}

				let startYear = parseInt(this.conf.startYear) || thisYear,
					endYear = parseInt(this.conf.endYear) || startYear + parseInt(this.conf.yearsLength),
					years = this.generateYearData(startYear, endYear),
					months = this.generateMonthData(),
					dates = this.generateDateData();

				let selectedYearIndex = years.findIndex(function(year){
					return year.value == thisYear;
				});
				selectedYearIndex = selectedYearIndex == -1 ? 0 : selectedYearIndex;

				let maxDate = this.getMaxDate(parseInt(thisYear), parseInt(thisMonth));
				dates.length = maxDate;

				this.date = this.conf.value || '';
				this.pickerData = [years, months, dates],
				this.pickerSelectedIndex = [selectedYearIndex, thisMonth-1, thisDate-1];
				this.pickerTitle = this.conf.title;
			},
			showPicker(e){
				let self = this,
					pickerData = this.pickerData;

				if(this.conf.disabled) return;

				if(!this.picker){
					switch(this.conf.type){
						case 'year':
							pickerData = this.pickerData.slice(0, 1);
							break;
						case 'month':
							pickerData = this.pickerData.slice(0, 2);
							break;
					}
					this.picker = new Picker({
						data: pickerData,
						selectedIndex: self.pickerSelectedIndex,
						title: self.pickerTitle
					});
					this.picker.on('picker.change', function (index, selectedIndex) {
						self.pickerSelectedIndex[index] = selectedIndex;
						//年或月变化时更新天数
						if((index == 0 || index == 1) && self.conf.type == 'date'){
							self.refillDates();
						}
						self.generateResult();
					});
					this.picker.on('picker.select', function (index, selectedIndex) {
						self.generateResult();
						self.pickerSeat.style.height = "0px";
					});
					this.picker.on('picker.cancel', function () {
						self.pickerSeat.style.height = "0px";
					});
				}

				this.picker.show();
				this.pickerSeat.style.height = "300px";
				this.dealKeyboardOcclusion(e);
			},
			refillDates(){
				var thisYear = this.pickerData[0][this.pickerSelectedIndex[0]].value,
					thisMonth = this.pickerData[1][this.pickerSelectedIndex[1]].value,
					maxDate = this.getMaxDate(thisYear, thisMonth),
					dates = this.generateDateData(1, maxDate),
					dateSelectedIndex = this.pickerSelectedIndex[2];

				this.picker.refillColumn(2, dates);

				if(dateSelectedIndex > (maxDate -1) ){
					this.pickerSelectedIndex[2] = maxDate -1;
					this.picker.scrollColumn(2, this.pickerSelectedIndex[2]);
				}
			},
			formatTwoDigitInteger(value){
				value = value.toString();
				return (value.length == 1 ? '0' : '') + value;
			},
			generateYearData(startYear, endYear){
				var result = [],
					i = startYear,
					endYear = endYear;
				if(endYear <= startYear) endYear = startYear + this.conf.yearsLength*1;
				for(; i < endYear; i++){
					result.push({
						text: i + '年',
						value: i
					});
				}
				return result;
			},
			generateMonthData(){
				var result = [];
				for(var i = 1; i < 13; i++){
					result.push({
						text: this.formatTwoDigitInteger(i) + '月',
						value: this.formatTwoDigitInteger(i)
					})
				}
				return result;
			},
			generateDateData(startDate, endDate){
				var result = [],
					i = startDate || 1,
					endDate = endDate || 31;
				for(; i <= endDate; i++){
					result.push({
						text: this.formatTwoDigitInteger(i) + '日',
						value: this.formatTwoDigitInteger(i)
					})
				}
				return result;
			},
			generateResult(){
				var thisYear = this.pickerData[0][this.pickerSelectedIndex[0]].value,
					thisMonth = this.pickerData[1][this.pickerSelectedIndex[1]].value,
					thisDate = this.pickerData[2][this.pickerSelectedIndex[2]].value,
					f = this.conf.format.toLowerCase();

				f = f.replace('yyyy', thisYear);
				f = f.replace('mm', thisMonth);
				f = f.replace('dd', thisDate);

				this.date = f;

				this.$emit("onconfirm", {
					year: thisYear,
					month: thisMonth,
					date: thisDate,
					value: f
				});
			},
			getMaxDate(year, month){
				return (new Date(new Date(year, month, 1) - 1)).getDate();
			},
			//处理键盘遮挡问题
			dealKeyboardOcclusion(e){
				var e = e || window.event,
					target = e&&e.target;
				if(target){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
						offsetTop = this.getPos(target).top,
						pickerPanelHeight = this.picker.panelEl.offsetHeight,
						targetHeight = target.offsetHeight,
						screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
						viewHeight = screenHeight - pickerPanelHeight,
						eleHeight = offsetTop + targetHeight - scrollTop;

					document.documentElement.scrollTop += eleHeight - viewHeight;
					document.body.scrollTop += eleHeight - viewHeight;
				}
			},
			getPos(obj){
				var pos = {left:0, top:0};

				while(obj){
					pos.left += obj.offsetLeft;
					pos.top += obj.offsetTop;
					obj = obj.offsetParent;
				}
				return pos;
			}
		},
		beforeDestroy(){
			if(this.picker && this.picker.pickerEl){
				this.picker.pickerEl.parentNode.removeChild(this.picker.pickerEl);
			}
			if(this.pickerSeat){
				this.pickerSeat.parentNode.removeChild(this.pickerSeat);
			}
		}
	}
</script>