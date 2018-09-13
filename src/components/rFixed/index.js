import rFixed from "./index.vue"

rFixed.install = function(Vue){
	Vue.component(rFixed.name, rFixed);
}

export default rFixed;