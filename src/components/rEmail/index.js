import rEmail from './rEmail'
import toast from "../toast"

rEmail.install = function(Vue){
	Vue.component(rEmail.name,rEmail);
	Vue.use(toast);
}

export default rEmail;