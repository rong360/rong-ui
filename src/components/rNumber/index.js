import rNumber from "./rNumber"
import keyboard from "../keyboard"
import toast from "../toast"

rNumber.install = function(Vue){
	Vue.component(rNumber.name, rNumber);
	Vue.use(keyboard);
	Vue.use(toast);
}

export default rNumber;