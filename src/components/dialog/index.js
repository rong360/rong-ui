import Vue from 'vue'
import Dialog from './index.vue'

let dlgConstructor = Vue.extend(Dialog);

var dlgCst = function (options) {
    /*let instance = new dlgConstructor();

    for(let key in options){
      let value = options[key];
      if(typeof value == 'function'){
        instance[key] = function(){
          value.call(instance);
        }
      }else{
        instance[key] = value;
      }
    }

    instance.$mount();

  document.body.appendChild(instance.$el);

  instance.resetPos();

  return instance;*/

  let instance = new dlgConstructor(options);
  document.body.appendChild(instance.$mount().$el);

  return instance;

}


Dialog.install = function(Vue){
  Vue.component(Dialog.name, Dialog);
  Vue.prototype.$dialog = dlgCst;
}

export default Dialog;

