// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as wilddog from 'wilddog'
import axios from 'axios'
import App from './App'
import router from './router'
// import store from './store'

Vue.config.productionTip = false
Vue.use(Elementui)

const wilddogConfig = {
	syncURL: "https://wd3472473338ryrats.wilddogio.com/" //输入节点 URL
}
wilddog.initializeApp(wilddogConfig)
Vue.prototype.wilddog = wilddog.sync().ref()
axios.defaults.baseURL = 'https://wd3472473338ryrats.wilddogio.com/'
Vue.prototype.http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})

