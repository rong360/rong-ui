import rVcode from "./rvcode"
import toast from "../toast"

rVcode.install = function(Vue){
	Vue.component(rVcode.name, rVcode);
	Vue.use(toast);
}

export default rVcode;