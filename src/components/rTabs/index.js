import rTabs from './rTabs'
import rTab from './rTab'

rTabs.install = function(Vue){
	Vue.component(rTabs.name, rTabs);
	Vue.component(rTab.name, rTab);
}

export default rTabs