import router from '@/router';
import Vue from 'vue';
import store from '@/store';
import { getEleByAttri } from '../utils';

import ElementUI from 'element-ui';
Vue.use(ElementUI);
new Vue({
  router,
  store,
});

import { mount as originalMount } from '@vue/test-utils';

export function getRenderedComponent(Component: Vue) {
  const Constructor = Vue.extend(Component);
  return new Constructor({
    router,
    store,
  });
}
export function mount(Component: Vue, propsData = {}) {
  return originalMount(Component, { ...propsData, router, store });
}

export default getEleByAttri;
