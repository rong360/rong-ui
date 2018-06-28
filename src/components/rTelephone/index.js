import rTelephone from "./rTelephone"
import keyboard from "../keyboard/"
import toast from "../toast/"

rTelephone.install = function(Vue){
	Vue.component(rTelephone.name, rTelephone);
	Vue.use(keyboard);
	Vue.use(toast);
}

export default rTelephone;