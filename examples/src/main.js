// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require("./util/rem.js");

// import "../dist/rong-ui.css"
// import {
//   Dialog, 
//   Tip, 
//   Toast, 
//   Loading, 
//   rProgress, 
//   rButton, 
//   rRadio, 
//   rIcon, 
//   rInput, 
//   rInt, 
//   rFloat, 
//   rTelephone, 
//   rIDCard, 
//   rNumber, 
//   keyboard
// } from "../dist/rong-ui.js"

// import "../dist/css/dialog.css"
// import Dialog from "../dist/js/dialog.js"
// Vue.use(Dialog);

import Dialog from "@/components/dialog"
import Toast from "@/components/toast"
import Loading from "@/components/loading"
import rButton from "@/components/rButton"
//import rRadio from "@/components/rRadio"
import rIcon from "@/components/rIcon"
import rTitlebar from "@/components/rTitlebar"
import rInput from "@/components/rInput"
import rVcode from "@/components/rVcode"
import rInt from "@/components/rInt"
import rFloat from "@/components/rFloat"
import rTelephone from '@/components/rTelephone'
import rIDCard from "@/components/rIDCard"
import rMvcode from "@/components/rMvcode"
import rNumber from "@/components/rNumber"
import Keyboard from "@/components/keyboard"
import rRegion from "@/components/rRegion"
import rUpload from "@/components/rUpload"
import rEmail from "@/components/rEmail"
import rSelect from "@/components/rSelect"
import rDatepicker from "@/components/rDatepicker"
import rTabs from '@/components/rTabs'

const components = [
	Dialog,
  Toast,
	Loading,
  rButton,
  //rRadio,
  rIcon,
  rTitlebar,
  rInput,
  rVcode,
  rNumber,
  rInt,
  rFloat,
  rTelephone,
  rMvcode,
  rIDCard,
  rRegion,
  Keyboard,
  rUpload,
  rEmail,
  rSelect,
  rDatepicker,
  rTabs
]


components.map(cp => Vue.use(cp));


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
