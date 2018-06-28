<template>
	<div class="r-progress">
		<div class="r-prog-outer-wrap">
			<div class="r-prog-outer">
				<div :class="progInnerClass" :style="{height: pwidth + 'px', width: percent, background: progInnerBg}">
					<div v-if="showText&&textInside&&percentage!=100" class="r-text-inside" :style="{'font-size': fz,'margin-top': -1*(parseInt(fz)+2)/2+'px'}">{{percent}}</div>
				</div>
			</div>
		</div>
		<div v-if="(showText&&!textInside) && (status=='normal')" class="r-text-outside" :style="{color: colorMap[status],'font-size': fz}">{{percent}}</div>
		<div v-else-if="status=='success' || status=='error'" class="r-text-outside"><rIcon :type="iconType" :size="fz" :color="colorMap[status]"></rIcon></div>
	</div>
</template>
<script>
import rIcon from "../rIcon/rIcon"
export default{
	name: "rProgress",//100%时是成功状态，文案都换成✔️
	props: {
		type: {
			type: String,
			default: "line",
			validator:val => ['line', 'circle'].indexOf(val) > -1
		},
		pwidth: {
			type: Number,
			default: 10
		},
		percentage: {
			type: Number,
			validator: val => val>=0 && val<=100
		},
		textInside: {
			type: Boolean,
			default: false
		},
		showText:{
			type: Boolean,
			default: true
		},
		status: {
			type: String,
			default: "normal",
			validator: val => ["normal", "success", "error"].indexOf(val)>-1
		},
		active: {
			type: Boolean,
			default: true
		},
		progColor: {//进度条颜色
			type: String
		}
	},
	data(){
		return {
			colorMap: {
				"normal": "#4080e8",
				"success": "#18d476",
				"error": "#f04134"
			}
		}
	},
	computed:{
		percent(){
			return this.percentage + "%";
		},
		fz(){
			return this.pwidth * 0.2 + 10+'px';
		},
		iconType(){
			return this.status=='success' ? "check-circled" : "close-circled";
		},
		progInnerBg(){
			return this.progColor || this.colorMap[this.status];
		},
		progInnerClass(){
			return (this.active&&this.status=="normal") ? "r-prog-inner active" : "r-prog-inner";
		}
	},
	watch:{
		percent (){
			if(this.percentage == 100){
				this.$emit("success");
			}
		}
	}
}
</script>
<style lang="scss">
	@import "./rprogress.scss";
</style>

