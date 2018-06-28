import rInput from "./rInput"
import toast from "../toast"

rInput.install = function(Vue){
	Vue.component(rInput.name, rInput);
	Vue.use(toast);
}

export default rInput;