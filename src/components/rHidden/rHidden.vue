<template>
	<div class="r-hidden">
		<div class="r-txt-wrap">
			<input type="hidden" 
			:name="conf.name"
			:title="conf.title"
            v-model="conf.value">  
		</div>		
	</div>
</template>
<script>
	export default{
		name: "rHidden",
		props:{
			attrs: Object
		},
		computed:{
			conf(){
				let defaultConfig = {
						title: "表单名称",
						name: '',
						value: ""
					};
				return this.extendObj(defaultConfig,this.attrs);
			}
		},
		methods:{
			getSerializeArray(){
				let obj = {};
				obj[this.conf.name] = this.conf.value;
				return obj;
			},
			getSerialize(){
				return this.conf.name+"="+this.conf.value;
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
