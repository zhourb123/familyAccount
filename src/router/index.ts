import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//RouteRecordRaw：用户级的路由地址，允许在基础路由里面增加开发者自定义属性
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component:()=>import('component/Home.vue')
  },
  {
    path: "/404",
    component:()=>import('@/views/404.vue')
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next)=>{
  NProgress.start() //进度条开始
  //  从其他地方访问是否有这个地址
  if(to.matched.length == 0){
    next('/404')
  }else{
    next()
  }
})
router.afterEach((to,from)=>{
  NProgress.done()  //进度条结束
})
export default router