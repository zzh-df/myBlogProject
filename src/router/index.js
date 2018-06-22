import Vue from 'vue'
import Router from 'vue-router'
import $store from '@/vuex'
import mainPage from '@/components/main'
import home from '@/components/home/home'
import snow from '@/components/canvas/snow'
import matrix from '@/components/canvas/matrix'
import particalLine from '@/components/canvas/particalLine'

Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: home
    },
    {
      path:'/snow',
      name:'snow',
      component:snow
    },
    {
      path:'/matrix',
      name:'matrix',
      component:matrix
    },
    {
      path:'/particalLine',
      name:'particalLine',
      component:particalLine
    }
  ]
})

// 全局导航钩子
router.beforeEach((to,from,next)=>{
    if(from.fullPath=='/snow'){
      // 清除雪花的定时器
      clearInterval(router.app.$store.state.canvas.snowTimer)
    }
    next()
})
export default router
