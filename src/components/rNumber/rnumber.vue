<template>
	<div class="r-number">
		<div class="r-txt-wrap">
			<label class="r-input-label" :style="lblStyle">
				<span>{{conf.title}}</span>
				<rIcon 
					:type="conf.labelIconType" 
					size="0.8rem" 
					v-if="conf.showLabelIcon" 
					@iconClick="onclickLabelIcon"
				></rIcon>
			</label>
			<div class="input-wrap">
			    <div :class="iClsName" @click="doInput"><span>{{ currentValue ? currentValue : conf.placeholder }}</span></div>
				<input type="text" :name="conf.name" v-model="currentValue" style="display:none;">
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
		name: "rNumber",
		components: { rIcon },
		props: {
			attrs: Object
		},
		data(){
			return {
				currentValue: this.attrs.value || "",
				showKb: false
			}
		},
		computed:{
			conf(){
				//检测type是否是支持的类型
				if('int|float|idcard'.indexOf(this.attrs.type)<0) this.attrs.type = 'float';
				//默认参数
				let defaultConfig = {
						title: "表单名称",
						name: '',
						value: "",
						type: 'float',
						floatFixed: -1,
						lr: "right",
						placeholder: "请输入",
						maxlength: -1,
						disabled: false,
						readonly: false,
						unit: '',
						//显示input后面icon
						showInputIcon: true,
						//input后面icon的类型
						inputIconType: "close-circled",
						//显示label后面的icon
						showLabelIcon: false,
						//label后面icon的类型
						labelIconType: 'info',
						needVerify: true,
						verify: function(){ return true }
					};
				return this.extendObj(defaultConfig,this.attrs);
			},
			iClsName(){
				//键盘显示时，placeholde及输入框显示光标
				//currentValue=”“时，光标位置根据字对齐向左或向右
				//currentValue!=""时，光标位置在输入数字的后面
				let cls = "rinput";
				cls += ((this.conf.readonly||this.conf.disabled) ? " read-only" : ''); //只读或者disabled样式
				cls += ((this.conf.lr=="right") ? " ta-right " : " ta-left "); //输入框对齐样式
				cls += (this.currentValue ? " txt-value " : " txt-placeholder "); //输入框样式
				if(!this.showKb) return cls;
				return cls += ( this.currentValue ? " rinput-value-right" : (" rinput-value-"+this.conf.lr) ); //光标样式
			},
			lblStyle(){
				return this.conf.lblWidth ? {width: this.conf.lblWidth} : {};
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
			}
		},
		watch:{
			conf(){
				this.currentValue = this.conf.value;
			},
			currentValue: function(){
				this.$emit("oninput",this.currentValue);
			}
		},
		methods:{
			doInput(e){
				var self = this;

				if(this.conf.readonly || this.conf.disabled) return;

				var keyboard = this.$keyboard({
					propsData: {
						//键盘类型 float、int、idcard
						type: this.conf.type,
						//键盘类型为float时，小数点后面保留位数
						floatFixed: this.conf.floatFixed,
						//键盘默认值
						value: this.currentValue,
						//codeStr最大长度
						maxlength: this.conf.maxlength,
						//点击目标对象时的事件对象
						e: e
					},
					methods: {
						typing(code, codeStr){
							self.currentValue = codeStr;

							if(code == 'ok'){
								self.showKb = false;
								self.$emit('onconfirm', code, codeStr, self);
							}
						}
					}
				})

				this.showKb = true;		
			},
			onclickLabelIcon(e){
				this.$emit("onclickLabelIcon", e, this);
			},
		    onclickInputIcon(e){
		    	if(this.conf.inputIconType == 'close-circled'){
		    		this.$el.querySelector("input").focus();
		    		this.currentValue = "";
		    		this.$emit("onclear", e, this);
		    	}else{
		    		this.$emit("onclickInputIcon", e, this);
		    	}
		    },
			/**
			* 验证函数
			* needVerify开启校验时首先调用defaultVerify进行默认的非空校验，
			* 非空校验通过后调用attrs中verify函数进一步校验。
			**/
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
			/**
			* 默认验证函数
			**/
			defaultVerify(){
				if(!this.currentValue){
					this.$toast && this.$toast({
						propsData: {
							message:this.conf.title + "不能为空！",
							type:"negetive"
						}
					});
					return false;
				}
				return true;
			},
			/*获取表单数据*/
			getSerialize(){
				return this.conf.name + "=" + this.currentValue;
			},
			getSerializeArray(){
				let obj = {};
				obj[this.conf.name] = this.currentValue;
				return obj;
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
	@import "./rNumber.scss"
</style>