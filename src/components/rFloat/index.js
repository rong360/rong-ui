import rFloat from "./rFloat"
import keyboard from "../keyboard"
import toast from "../toast"

rFloat.install = function(Vue){
	Vue.component(rFloat.name, rFloat);
	Vue.use(keyboard);
	Vue.use(toast);
}

export default rFloat;