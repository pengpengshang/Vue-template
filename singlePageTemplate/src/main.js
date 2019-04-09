// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'


/*引入element-ui*/
import ElementUi from 'element-ui'
Vue.use(ElementUi)
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,              //注入vuex
  components: { App },
  template: '<App/>'
})