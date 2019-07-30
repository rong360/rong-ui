import Vue from 'vue';
import Keyboard from "./keyboard";

let KeyboardConstructor = Vue.extend(Keyboard);

var keyboardCst = function (options) {
	let instance = new KeyboardConstructor(options);

	document.body.appendChild(instance.$mount().$el);
  
	return instance;
}

Keyboard.install = function(Vue){
	Vue.component(Keyboard.name, Keyboard);
	Vue.prototype.$keyboard = keyboardCst;
}

export default Keyboard;
