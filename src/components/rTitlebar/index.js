import rTitlebar from "./rtitlebar"

rTitlebar.install = function(Vue){
	Vue.component(rTitlebar.name, rTitlebar);
}

export default rTitlebar;