import Vue from "vue"
import rButton from './rButton'

let RButton = Vue.extend(rButton);

RButton.install = function(Vue){
	Vue.component(rButton.name, rButton);
}

export default RButton