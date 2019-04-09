import Vue from 'vue'
import Router from 'vue-router'

/*路由配置  使用const定义路由，界面点击打开的时候才会加载响应的js*/

const Index = ()=> import('@/views/index/Index')

Vue.use(Router)

export default new Router({
  mode: 'history',                    //为了去除访问链接上的 # 号
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },

  ]
})
