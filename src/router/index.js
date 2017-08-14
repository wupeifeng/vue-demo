import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import WeChat from '@/components/wechat/wechat'
import Contact from '@/components/contact/contact'
import Explore from '@/components/explore/explore'
import Self from '@/components/self/self'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeChat',
      component: WeChat
    },
    {
      path: '/wechat',
      name: 'WeChat',
      component: WeChat
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    }
  ]
})
