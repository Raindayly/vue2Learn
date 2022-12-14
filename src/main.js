import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
