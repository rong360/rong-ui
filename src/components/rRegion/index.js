import Vue from "vue"
import rRegion from './rRegion'

let RRegion = Vue.extend(rRegion);

RRegion.install = function(Vue){
	Vue.component(rRegion.name, rRegion);
}

export default RRegion