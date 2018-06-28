import RProgress from './rprogress';

/* istanbul ignore next */
RProgress.install = function(Vue) {
  Vue.component(RProgress.name, RProgress);
};

export default RProgress;
