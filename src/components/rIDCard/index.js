import rIDCard from "./rIDCard"
import keyboard from "../keyboard"
import toast from "../toast"

rIDCard.install = function(Vue){
	Vue.component(rIDCard.name, rIDCard);
	Vue.use(keyboard);
	Vue.use(toast);
}

export default rIDCard;