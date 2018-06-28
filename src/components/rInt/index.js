import rInt from "./rInt"
import keyboard from "../keyboard"
import toast from "../toast"

rInt.install = function(Vue){
	Vue.component(rInt.name, rInt);
	Vue.use(keyboard);
	Vue.use(toast);
}

export default rInt;