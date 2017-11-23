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
// 工作台
import workbench from '@/view/FirstTrail/workbench'
// 分屏
import SplitScreen from '@/view/FirstTrail/SplitScreen'
// 影音资料
import AudioVisual from '@/view/FirstTrail/detailComponent/AudioVisual'
// 信审表
import CreditForm from '@/view/FirstTrail/detailComponent/CreditForm'
// 登录页
import login from '@/view/login/login'

import cCreditForm from '@/view/FirstTrail/checkComponent/cCreditForm'
// 内部匹配
import InternalMatch from '@/view/FirstTrail/InternalMatch'
// 电话征信
import PhoneCredit from '@/view/FirstTrail/PhoneCredit'
// 查询详情页面（部分）
import ApprovalConclusion from '@/view/FirstTrail/checkComponent/ApprovalConclusion'

// 信审审批
import CreditApproval from '@/view/FirstTrail/CreditApproval'

Vue.use(Router)

const routes = [{
    path: '/',
    component: login
    // meta: {
    //   requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    // },
  },
  {
    path: '/workbench',
    component: workbench
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
    path: '/HelloWorld',
    component: HelloWorld,
  },
  // 分屏
  {
    path: '/SplitScreen',
    component: SplitScreen
  },
  // 影音资料
  {
    path: '/AudioVisual',
    component: AudioVisual
  },
  // 申请表
  {
    path: '/CreditForm',
    component: CreditForm
  },
  // 申请表
  {
    path: '/cCreditForm',
    component: cCreditForm
  },
  {
    //内部匹配
    path: '/InternalMatch',
    component: InternalMatch
  },
  {
    //电话征信  
    path: '/PhoneCredit',
    component: PhoneCredit
  },
  // 
  {
    path: '/ApprovalConclusion',
    component: ApprovalConclusion
  },
{
    // 信审审批
    path: '/CreditApproval',
    component: CreditApproval
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
