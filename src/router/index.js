import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from '@/util/util'
import HelloWorld from '@/view/HelloWorld'
import login from '@/view/login'
/*初审审批*/
import taskInWaitting from '@/view/FirstTrail/taskInWaitting'
/*备注信息*/
import remark from '@/view/FirstTrail/detailComponent/remark'
/*实地征信*/
import creditInvestigation from '@/view/FirstTrail/detailComponent/creditInvestigation'
/*借款人资料*/
import borrowerInformation from '@/view/FirstTrail/detailComponent/borrowerInformation'



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
  /*初审审批*/
  {
    path: '/taskInWaitting',
    component: taskInWaitting
  },
  /*备注信息*/
  {
    path: '/remark',
    component: remark
  },
  /*实地征信*/
  {
    path: '/creditInvestigation',
    component: creditInvestigation
  },
  /*借款人资料*/
  {
    path: '/borrowerInformation',
    component: borrowerInformation
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
