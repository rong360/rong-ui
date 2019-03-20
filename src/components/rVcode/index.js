import rVcode from './rVcode'
import toast from '../toast'

rVcode.install = function (Vue) {
  Vue.component(rVcode.name, rVcode)
  Vue.use(toast)
}

export default rVcode
