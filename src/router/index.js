import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from '@/util/util'
import HelloWorld from '@/view/HelloWorld'
import login from '@/view/login'



Vue.use(Router)

const routes = [
  {
    path: '/',
    component: HelloWorld,
      // meta: {
    //   requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    // },
  },
  {
    path: '/login',
    component: login
  },
];

const router = new Router({
routes
});
router.beforeEach((to, from, next) => {
if (to.matched.some(r => r.meta.requireAuth)) {
  if (getCookie("sessionId") !== "") {
    next();
  } else {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
} else {
  next();
}
});

export default router;
