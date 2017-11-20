import Vue from 'vue'
import Router from 'vue-router'
import {
  getCookie
} from '@/util/util'
import HelloWorld from '@/view/HelloWorld'

/*初审审批*/
import taskInWaitting from '@/view/FirstTrail/taskInWaitting'
/*备注信息*/
import remark from '@/view/FirstTrail/detailComponent/remark'
/*实地征信*/
import creditInvestigation from '@/view/FirstTrail/detailComponent/creditInvestigation'
/*借款人资料*/
import borrowerInformation from '@/view/FirstTrail/detailComponent/borrowerInformation'
/*申请信息*/
import applicationInformation from '@/view/FirstTrail/detailComponent/applicationInformation'

import workbench from '@/view/FirstTrail/workbench'
import SplitScreen from '@/view/FirstTrail/SplitScreen'
import AudioVisual from '@/view/FirstTrail/detailComponent/AudioVisual'
import CreditForm from '@/view/FirstTrail/detailComponent/CreditForm'
import login from '@/view/login/login'
import InternalMatch from '@/view/InternalMatch/InternalMatch'
import PhoneCredit from '@/view/PhoneCredit/PhoneCredit'



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

  /*申请信息*/
  {
    path: '/applicationInformation',
    component: applicationInformation
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
  }, {
    //电话征信
    path: '/PhoneCredit',
    component: PhoneCredit
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
