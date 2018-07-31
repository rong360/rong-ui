<template>
	<div class="r-select">
		<div class="r-select-txt-wrap">
			<label class="r-select-label" :style="lblStyle">
				<slot name="label">{{conf.title}}</slot>
			</label>
			<div :class="inputClsName" @click="showPicker">{{text?text:conf.placeholder}}</div>
			<rIcon type="arrow-right" @iconClick="showPicker"></rIcon>
		</div>			
		<div class="r-select-children" v-if="children && children.length">
			<template v-for="(child,index) in children">
				<component :is="child.type" :attrs="child" :ref="child.name"></component>
			</template>		
		</div>
	</div>
</template>
<script>
import Picker from '../../util/picker.js'
import rIcon from "../rIcon/rIcon"
	export default{
		name: "rSelect",
		components: { rIcon },
		props: {
			attrs: Object
		},
		data(){
			return {
				selectedIndex: -1
			}
		},
		computed:{
			conf(){
				let defaultConfig = {
						title: "表单名称",
						name: '',
						value: "",
						data: [],
						pickerTitle: '',
						lr: "right",
						lblWidth: {},
						placeholder: "请选择",
						disabled: false,
						readonly: false,
						needVerify: true,
						verify: function(){ return true }
					};
				Object.assign(defaultConfig,this.attrs);

				if(!defaultConfig.name) console.warn("select组件name未赋值！");

				if(parseInt(defaultConfig.value)===0 || defaultConfig.value ){
				//有默认值时，修改text，对应value下有子组件时，子组件需挂上
					let option = defaultConfig.data,
						idx = -1,
						selectedOption = option.filter(function(item,index){
							if(item.value==defaultConfig.value){
								idx = index;
							}
							return item.value == defaultConfig.value;
						});

					if(selectedOption.length){
						this.selectedIndex = idx;
					}

				}else{
					this.selectedIndex = -1;
				}

				return defaultConfig;
			},
			text(){
				return this.selectedIndex > -1 ? this.conf.data[this.selectedIndex].text : '';
			},
			children(){
				return this.selectedIndex > -1 ? this.conf.data[this.selectedIndex].children : [];
			},
			inputClsName(){
				let cls = "r-select-input ";
				cls += (this.conf.lr=="right" ? " ta-right" : " ta-left");
				cls += ((this.conf.readonly || this.conf.disabled || this.text=="") ? " c-grey" : "");
				return cls;
			},
			lblStyle(){
				return {
					width: this.conf.lblWidth
				}
			}
		},
		watch: {
			attrs: {
				handler(){
					let self = this;

					if(self.picker){ //picker存在，清原来的picker,创建新的
						var pickerEl = self.picker.panelEl.parentNode;
						pickerEl.parentNode.removeChild(pickerEl);
						self.picker = null;
					}
				},
				deep: true
			}
		},
		mounted(){
			this.pickerSeat = document.createElement('div');
			document.body.appendChild(this.pickerSeat);
		},
		methods: {
			showPicker(e){
				let self = this,
					pickerData = this.conf.data,
					selectedIndex = this.selectedIndex > -1 ? this.selectedIndex : 0,
					pickerTitle = this.conf.pickerTitle;
				if(this.conf.readonly || this.conf.disabled) return;
				if(!this.picker){
					this.picker = new Picker({
						data: [pickerData],
						selectedIndex: [selectedIndex],
						title: pickerTitle
					});
					this.picker.on('picker.change', function (index, selectedIndex) {
						//self.selectedIndex = selectedIndex;
					});
					this.picker.on('picker.select', function (selectedVal, selectedIndex) {
						self.selectedIndex = selectedIndex[0];
						self.pickerSeat.style.height = "0px";
						self.$emit("onconfirm", self.conf.data[self.selectedIndex]);
					});
					this.picker.on('picker.cancel', function () {
						self.pickerSeat.style.height = "0px";
					});
				}

				this.picker.show();
				this.pickerSeat.style.height = "300px";
				this.dealKeyboardOcclusion(e);
			},
			/**
			* 验证函数
			* needVerify开启校验时首先调用defaultVerify进行默认的非空校验，
			* 非空校验通过后调用attrs中verify函数进一步校验。
			**/
			verify(){
				if(this.conf.needVerify){
					if(this.defaultVerify()){
						var res = this.conf.verify.apply(this, [this.conf.data[this.selectedIndex],this.selectedIndex]);
						if(typeof res == "undefined"){
							console.warn(this.conf.title + "组件 自定义校验函数verify中if else 必须有true和false返回值, 如：if(true){ return true } else{ return false }, 否则会忽略自定义校验函数，改为基本的非空校验!");
							return this.defaultVerify();
						}
						//自身校验通过再校验children
						if(res){
							return this.childrenVerify();
						}else{
							return false
						}
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
				if(this.selectedIndex < 0){
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
			childrenVerify(){
				var allChildren = [],
					pass = true;
				function readChildrend(component){
					//rInt|rFloat|rIDCard|rTelephone组件继承rNumber组件，因此没必要继续往下找children了
					if('rInt|rFloat|rIDCard|rTelephone|rMvcode|rVcode'.indexOf(component.$options.name) > -1) return;
					var $children = component.$children;
					if($children && $children.length){
						$children.forEach(function(component, index){
							if(component.verify) allChildren.push(component);
							readChildrend(component);
						})
					}
				}
				readChildrend(this);
				this.allChildren = allChildren;
 				for(var i = 0; i < allChildren.length; i++){
 					if(!allChildren[i].verify()){
 						pass = false;
 						break;
 					}
 				}
 				return pass;
			},
			/*获取表单数据*/
			getSerialize(){
				let name = this.conf.name,
					value = this.conf.data[this.selectedIndex]?this.conf.data[this.selectedIndex].value:'',
					sarray = [name + '=' + value];
				if(this.allChildren && this.allChildren.length){
					for(var i = 0; i < this.allChildren.length; i++){
						sarray.push(this.allChildren[i].getSerialize());
					}
				}
				return sarray.join("&");
			},
			getSerializeArray(){
				let s = this.getSerialize(),
					sarray = s.split("&"),
					obj = {};
				for(var i=0; i<sarray.length; i++){
					let kv = sarray[i].split("=");
					obj[kv[0]] = kv[1];
				}
				return obj;
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
			//this.picker && this.picker.hide();
			if(this.picker && this.picker.pickerEl){
				this.picker.pickerEl.parentNode.removeChild(this.picker.pickerEl);
			}
			if(this.pickerSeat){
				this.pickerSeat.parentNode.removeChild(this.pickerSeat);
			}
		}
	}
</script>
<style lang="scss">
@import "./rSelect.scss";
</style>