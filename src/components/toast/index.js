import Vue from "vue"
import Toast from './toast'

let ToastConstructor = Vue.extend(Toast);

let toastCst = function (options) {
	if(typeof options === 'string'){
		options = {
			propsData: {
				message: options
			}
		}
	}

    let instance = new ToastConstructor(options);

    document.body.appendChild(instance.$mount().$el);

    return instance;
}

Toast.install = function(Vue){
	Vue.prototype.$toast = toastCst;
}

export default Toast