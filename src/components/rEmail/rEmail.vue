<template>
	<div class="r-email" v-clickoutside="handleClose">
		<rInput 
			:attrs="conf" 
			@oninput="oninput" 
			@onclear="onclear"
			@onenter="onenter"
			@onfocus="onfocus"
			@onchange="onchange"
			@onclickLabelIcon="onclickLabelIcon"
			@onclickInputIcon="onclickInputIcon"
		>
		</rInput>
		<div class="r-email-pad" v-show="showPad&&filteredOptions.length">
			<template v-for="opt in filteredOptions" v-key="opt">
				<div class="r-email-item" @click="setEmail">{{currentValue.split("@")[0] + "@" + opt}}</div>	
			</template>
		</div>
	</div>
</template>
<script>
import rInput from "../rInput/rInput"
	export default{
		name: "rEmail",
		data(){
			return {
				showPad: false,
				currentValue: ""
			}
		},
		props:{
			attrs: Object
		},
		computed:{
			conf(){
				let self = this,
					defaultConfig = {
					emailList: [],
					verify(){
						return self.emailVerify(this);
					}
				}
				return this.extendObj(defaultConfig, this.attrs);
			},
			filteredOptions(){
				let emailList = this.conf.emailList, //邮箱列表
					emailSuffix = this.currentValue.split("@")[1], //当前输入邮箱的后缀
					arr = [];
				for(var i = 0; i< emailList.length; i++){
					var email = emailList[i].replace("@","");
					if(email.indexOf(emailSuffix) > -1){
						arr.push(email);
					}
				}
				return arr;
			}
		},
		components: {rInput},
		directives: {
			clickoutside: {
				bind (el, binding, vnode) {
			        function documentHandler (e) {
			            if (el.contains(e.target)) {
			                return false;
			            }
			            if (binding.expression) {
			                binding.value(e);
			            }
			        }
			        el.__vueClickOutside__ = documentHandler;
			        document.addEventListener('click', documentHandler);
			    },
			    unbind (el, binding) {
			        document.removeEventListener('click', el.__vueClickOutside__);
			        delete el.__vueClickOutside__;
			    }
			}
		},
		methods:{
			handleClose(){
				this.showPad = false;
			},
			setEmail(e){
				this.showPad = false; 
				this.$children[0].currentValue = e.target.innerText;

				//点击邮箱列表面板后触发blur事件
				this.$emit("onset", this);
			},
		
			onenter(e, component){
				this.$emit("onenter", e, this);
			},
			onfocus(e, component){
				this.showPad = true;
				this.$emit("onfocus", e, this);
			},
			onblur(e, component){
				this.$emit("onblur", e, this);
			},
			oninput(e, component){
				this.showPad = true;
				this.currentValue = e.target.value;
				this.$emit("oninput", e, this);
			},
			onchange(e, component){
				this.$emit("onchange", e, this);
			},
			onclear(e){
				this.currentValue = "";
				this.showPad = false;
				this.$emit("onclear", e, this);
			},
			onclickLabelIcon(e, component){
				this.$emit("onclickLabelIcon", e, this);
			},
			onclickInputIcon(e, component){
		    	this.$emit("onclickInputIcon", e, this);
		    },
			verify(){
				return this.$children[0].verify();
			},
			emailVerify(inputComponent){
				var email = inputComponent.currentValue;
				if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email)){
					return true
				}else{
					this.$toast(this.attrs.title+"格式错误！");
					return false;
				}
			},
			/*获取表单数据*/
			getSerialize(){
				return this.$children[0].getSerialize();
			},
			getSerializeArray(){
				return this.$children[0].getSerializeArray();
			},
			extendObj(obj1,obj2){
		        for(var key in obj2){
		            obj1[key] = obj2[key];
		        }
		        obj1.name = obj1.var_name || obj1.urlkey || obj1.name; //业务中的组件name取值
		        return obj1;
		    }
		}
	}
</script>
<style lang="scss">
	@import "./rEmail.scss"
</style>