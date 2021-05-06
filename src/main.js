// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import VueLazyLoad from 'vue-lazyload'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueLazyLoad)
Vue.use(vueSmoothScroll)

/* eslint-disable no-new */
new Vue({
  axios,
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
