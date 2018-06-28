import rMvcode from "./rmvcode"
import keyboard from "../keyboard/"
import toast from "../toast/"

rMvcode.install = function(Vue){
	Vue.component(rMvcode.name, rMvcode);
	Vue.use(keyboard);
	Vue.use(toast);
}

export default rMvcode;