import rSelect from './rSelect'
import toast from "../toast"

rSelect.install = function(Vue){
	Vue.component(rSelect.name, rSelect);
	Vue.use(toast);
}

export default rSelect