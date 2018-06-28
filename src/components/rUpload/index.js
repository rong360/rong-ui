import Vue from "vue"
import rUpload from './rUpload'

rUpload.install = function(Vue){
	Vue.component(rUpload.name, rUpload);
}

export default rUpload