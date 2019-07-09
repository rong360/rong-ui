import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index'
import DialogExp from '../views/Dialog'
import ToastExp from '../views/Toast'
// import TipExp from '../views/Tip'
import LoadingExp from '../views/Loading'
// import ProgressExp from "../views/Progress"
import ButtonExp from '../views/Button'
import rIconExp from '../views/Icon'
import rTitlebarExp from '../views/Titlebar'
import rInputExp from '../views/Input'
import rVcodeExp from '../views/Vcode'
import rNumberExp from '../views/Number'
import KeyboardExp from '../views/Keyboard'
import rTelephoneExp from '../views/Telephone'
import rIDCardExp from '../views/IDCard'
import rIntExp from '../views/Int'
import rFloatExp from '../views/Float'
import rMvcodeExp from '../views/Mvcode'
import rRegionExp from '../views/Region'
import rUploadExp from '../views/Upload'
import rEmailExp from '../views/Email'
import rSelectExp from '../views/Select'
import rDatepickerExp from '../views/Datepicker'
import rTabs from '../views/tabs.vue'
import rHidden from '../views/hidden.vue'
import rFixed from '../views/Fixed.vue'
import rFlexFixed from '../views/FlexFixed.vue'
import rRange from '../views/Range.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: DialogExp
    },
    {
      path: '/toast',
      name: 'toast',
      component: ToastExp
    },
    // {
    //   path: '/tip',
    //   name: 'tip',
    //   component: TipExp
    // },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingExp
    },
    // {
    //   path: '/progress',
    //   name: 'progress',
    //   component: ProgressExp
    // },
    {
      path: '/button',
      name: 'button',
      component: ButtonExp
    },
    {
      path: '/icon',
      name: 'icon',
      component: rIconExp
    },
    {
      path: '/titlebar',
      name: 'titlebar',
      component: rTitlebarExp
    },
    {
      path: '/input',
      name: 'input',
      component: rInputExp
    },
    {
      path: '/vcode',
      name: 'vcode',
      component: rVcodeExp
    },
    {
      path: '/keyboard',
      name: 'keyboard',
      component: KeyboardExp
    },
    {
      path: '/number',
      name: 'number',
      component: rNumberExp
    },
    {
      path: '/int',
      name: 'int',
      component: rIntExp
    },
    {
      path: '/float',
      name: 'float',
      component: rFloatExp
    },
    {
      path: '/telephone',
      name: 'telephone',
      component: rTelephoneExp
    },
    {
      path: '/mvcode',
      name: 'mvcode',
      component: rMvcodeExp
    },
    {
      path: '/idcard',
      name: 'idcard',
      component: rIDCardExp
    },
    {
      path: '/region',
      name: 'region',
      component: rRegionExp
    },
    {
      path: '/upload',
      name: 'upload',
      component: rUploadExp
    },
    {
      path: '/email',
      name: 'email',
      component: rEmailExp
    },
    {
      path: '/select',
      name: 'select',
      component: rSelectExp
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: rDatepickerExp
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: rTabs
    },
    {
      path: '/hidden',
      name: 'hidden',
      component: rHidden
    },
    {
      path: '/fixed',
      name: 'fixed',
      component: rFixed
    },
    {
      path: '/flexfixed',
      name: 'flexfixed',
      component: rFlexFixed
    },
    {
      path: '/range',
      name: 'range',
      component: rRange
    }
  ]
})
