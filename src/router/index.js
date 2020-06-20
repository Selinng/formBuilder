import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/edit'
import Preview from '@/components/preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/preview',
      alias: '/',
      name: 'preview',
      component: Preview
    },
    {
      path: '*',
      redirect: '/preview'
    }
  ],
  mode: 'history'
})
