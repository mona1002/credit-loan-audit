import Vue from 'vue'
import Router from 'vue-router'
import {
  getCookie
} from '@/util/util'
import HelloWorld from '@/view/HelloWorld'
import workbench from '@/view/FirstTrail/workbench'
import SplitScreen from '@/view/FirstTrail/SplitScreen'
import AudioVisual from '@/view/FirstTrail/detailComponent/AudioVisual'
import CreditForm from '@/view/FirstTrail/detailComponent/CreditForm'
import login from '@/view/login/login'
import InternalMatch from '@/view/InternalMatch/InternalMatch'



Vue.use(Router)

const routes = [{
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
  {
    path: '/workbench',
    component: workbench,
  },
  {
    path: '/SplitScreen',
    component: SplitScreen
  },
  {
    path: '/AudioVisual',
    component: AudioVisual
  },
  {
    path: '/CreditForm',
    component: CreditForm
  },
  {
    //内部匹配
    path: '/InternalMatch',
    component: InternalMatch
  }
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
