// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/wechat.css'
import '@/assets/css/contact.css'
import '@/assets/css/explore.css'
import '@/assets/css/self.css'
import '@/assets/css/lib/animate.css'
import '@/assets/css/lib/iconfont.css'
import '@/assets/css/lib/weui.min.css'
import '@/assets/css/common.css'
import '@/assets/css/wx-header.css'
import '@/assets/css/wx-nav.css'
import '@/assets/css/reset.css'
import '@/assets/css/chat.css'
import '@/assets/css/base.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
