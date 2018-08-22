<template>
	<div :class="['r-input', !conf.showBottomBorder?'r-border--off':'']">
		<div class="r-txt-wrap">
			<label class="r-input-label" :style="lblStyle" v-show="conf.showLabel">
				<span>{{conf.title}}</span><!--
				--><rIcon :type="conf.labelIconType" size="0.8rem" v-if="conf.showLabelIcon" @iconClick="onclickLabelIcon"></rIcon>
			</label>
			<div class="input-wrap">
				<input type="text" 
				:name="conf.name"
				:placeholder="conf.placeholder"
				:maxlength="conf.maxlength"
	            :disabled="conf.disabled"
	            :readonly="conf.readonly"
	            @keyup.enter="onEnter"
	            @focus="onFocus"
	            @blur="onBlur"
	            @input="onInput"
	            @change="onChange"
	            v-model="currentValue"
	            :class="iClsName">
		        <rIcon 
		        	:type="conf.inputIconType" 
		        	size="0.8rem" 
					v-show="showInputIcon"
					@iconClick="onclickInputIcon"
		        ></rIcon>
			</div>   		
    		<slot>
    			<div class="r-input-unit" v-if="conf.unit">{{conf.unit}}</div>
    		</slot>
		</div>		
	</div>
</template>
<script>
	import rIcon from "../rIcon/rIcon"
	export default{
		name: "rInput",
		components:{
			rIcon
		},
		props:{
			attrs: Object
		},
		data(){
			return {
				currentValue: this.attrs.value || ""
			}
		},
		computed:{
			conf(){
				let defaultConfig = {
						title: "表单名称",
						lr: "right",
						name: '',
						value: "",
						placeholder: "请输入",
						lblWidth: {},
						maxlength: -1,
						disabled: false,
						readonly: false,
						unit: '',
						//显示底部border
						showBottomBorder: true,
						//显示input后面icon
						showInputIcon: true,
						//input后面icon的类型
						inputIconType: "close-circled",
						//显示label后面的icon
						showLabelIcon: false,
						//label后面icon的类型
						labelIconType: 'info',
						needVerify: true,
						verify: function(){ return true },
						needVerifyToast: true,
						showLabel: true
					};
				return this.extendObj(defaultConfig,this.attrs);
			},
			lblStyle(){
				return {"width": this.conf.lblWidth}
			},
			showInputIcon(){
				if(this.conf.inputIconType == "close-circled"){
					if(this.conf.showInputIcon && this.currentValue && !this.conf.readonly){
						return true;
					}else{
						return false;
					}
				}else{
					return this.conf.showInputIcon;
				}
			},
			iClsName(){
				return this.conf.lr=="right" ? "ta-right" : "ta-left";
			}
		},
		watch:{
			conf(){
				this.currentValue = this.conf.value;
			}
		},
		methods:{
			onEnter(e){
				this.$emit("onenter",e, this);
			},
			onFocus(e){
				this.$emit("onfocus",e, this);
			},
			onBlur(e){
				this.$emit("onblur",e, this);
			},
			onInput(e){
				this.currentValue = e.target.value;	
				this.$emit("oninput",e, this);

			},
			onChange(e){
				this.$emit("onchange",e, this);
			},
			onclickLabelIcon(e){
				this.$emit("onclickLabelIcon", this);
			},
		    onclickInputIcon(e){
		    	if(this.conf.inputIconType == 'close-circled'){
		    		this.$el.querySelector("input").focus();
		    		this.currentValue = "";
		    		this.$emit("onclear", this);
		    	}else{
		    		this.$emit("onclickInputIcon", this);
		    	}
		    },
			verify(){
				if(this.conf.needVerify){
					if(this.defaultVerify()){
						var res = this.conf.verify.apply(this,[this.currentValue]);
						if(typeof res == "undefined"){
							console.warn(this.conf.title + "组件 自定义校验函数verify中if else 必须有true和false返回值, 如：if(true){ return true } else{ return false }, 否则会忽略自定义校验函数，改为基本的非空校验!");
							return this.defaultVerify();
						}
						return res;
					}else{
						return false;
					}
				}else{
					return true;
				}				
			},
			defaultVerify(){
				if(!this.currentValue){
					this.conf.needVerifyToast&&this.$toast && this.$toast({
						propsData: {
							message:this.conf.title + "不能为空！",
							type:"negetive"
						}
					});
					return false;
				}
				return true;				
			},
			getSerializeArray(){
				let obj = {};
				obj[this.conf.name] = this.currentValue;
				return obj;
			},
			getSerialize(){
				return this.conf.name+"="+this.currentValue;
			},
			extendObj(obj1,obj2){
		        for(var key in obj2){
		            obj1[key] = obj2[key];
		        }
		        obj1.name = obj1.var_name || obj1.urlkey || obj1.name; //业务中的组件name取值
		        if(!obj1.name) console.warn("组件未传入name属性！title="+obj1.title);
		        return obj1;
		    }
		}
	}
</script>
<style lang="scss">
	@import "./rInput.scss"
</style>