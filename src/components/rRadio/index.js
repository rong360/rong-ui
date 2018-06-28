import Vue from "vue"
import rRadio from './rRadio'
import rRadioGroup from './rRadio-group.vue';
let RRadio = Vue.extend(rRadio);

RRadio.install = function(Vue){
	Vue.component(rRadio.name, rRadio);
}

Vue.component(rRadioGroup.name, rRadioGroup);
rRadio.Group = rRadioGroup;
export default RRadio