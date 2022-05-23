import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
Vue.config.productionTip = false;

/*--------------------REGISTER VEE-VALIDATE---------------------------------*/
import VeeValidate from 'vee-validate';
import pt from 'vee-validate/dist/locale/pt_BR';
import { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('pt', pt);

/*--------------------REGISTER BOOTSTRAP---------------------------------*/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
/*-----------------------------------------------------------------------*/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
