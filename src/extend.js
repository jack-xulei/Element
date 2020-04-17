/* Automatically generated by './build/bin/build-entry.js' */

import AreaPicker from '../packages-my/area-picker/index.js';

const components = [
  AreaPicker
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.13.0',
  install,
  AreaPicker
};