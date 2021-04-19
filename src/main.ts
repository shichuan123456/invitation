import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/locales/i18n';
//add element i18n
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.scss';

console.log(process.env.NODE_ENV, 'env');

process.env.NODE_ENV === 'mock' && require('../mock/mock');
Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'production' ? false : true;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
