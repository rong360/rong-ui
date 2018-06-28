import Vue from "vue"
import Loading from './loading'

let LoadingConstructor = Vue.extend(Loading);

let loadingCst = function (options) {
	let instance = new LoadingConstructor(options);

	document.body.appendChild(instance.$mount().$el);

	return instance;
}

Loading.install = function(Vue){
	Vue.prototype.$loading = loadingCst;
}

export default Loading