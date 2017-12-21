import Vue from 'vue'
import Router from 'vue-router'
// import {
//   getCookie
// } from '@/util/util'
// 头部导航
import myHead from '@/view/header'
import test from '@/view/test'
import new2 from '@/view/new2'
import new1 from '@/view/new1'
// import testCF from '@/view/testCF'


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

// import cCreditForm from '@/view/FirstTrail/checkComponent/cCreditForm'
// 内部匹配
import InternalMatch from '@/view/FirstTrail/InternalMatch'
// 电话征信
import PhoneCredit from '@/view/FirstTrail/PhoneCredit'

// 信审审批
import CreditApproval from '@/view/FirstTrail/CreditApproval'
//----- 匹配查询页面--------
import MatchingInf from '@/view/FirstTrail/MatchingInf'
// 审批结论轨迹（部分）
import RApprovalConclusion from '@/view/FirstTrail/ReadComponent/RApprovalConclusion'
// 放账信息（部分）
import RFinanceInformation from '@/view/FirstTrail/ReadComponent/RFinanceInformation'
// ----------终审-------------------------
import FSplitScreen from '@/view/FinalTrial/FSplitScreen'
// import FMatchingInf from '@/view/FinalTrial/FMatchingInf'

// ------------反欺诈------------------


// 系统管理
// 机构管理
import organManage from '@/view/systemManage/organManage/organManage'
// 资源管理
// import resourceManage from '@/view/systemManage/resourceManage/resourceManage'
// 用户管理
import userManage from '@/view/systemManage/userManage/userManage'
// 流程角色管理
import processRoleManage from '@/view/systemManage/processRoleManage/processRoleManage'
// 功能角色管理
import functionalRoleManage from '@/view/systemManage/functionalRoleManage/functionalRoleManage'

Vue.use(Router)

const routes = [{

  path: '/',
  component: login
  // path: '/',
  // component: login
  // meta: {
  //   requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  // },
},
{
  // 工作台  误改, 误删
  /*
    userCode:    用户编码
    orgCode:     机构编码
   */
  path: '/workbench',
  component: workbench,
  require: myHead
},
{
  path: '/test',
  component: test
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
// 匹配查看-页面
{
  path: '/MatchingInf',
  component: MatchingInf
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
// 审批结论轨迹
{
  path: '/RApprovalConclusion',
  component: RApprovalConclusion
},
// 账务信息
{
  path: '/RFinanceInformation',
  component: RFinanceInformation
},
{
  // 信审审批
  path: '/CreditApproval',
  component: CreditApproval
},
// ----------------终审----------------
{
  path: '/FSplitScreen',
  component: FSplitScreen
},
// {
//   path: '/FMatchingInf',
//   component: FMatchingInf
// },
//-------------------反欺诈------------
// {
//   path:'/FSplitScreen',
//   component:FSplitScreen
// },
// {
//   path:'/FMatchingInf',
//   component:FSplitScreen
// },
// {
//   path:'/FSplitScreen',
//   component:FSplitScreen
// },

//-------------------系统管理------------
{
  path: '/organManage',
  component: organManage
},
// {
//   path: '/resourceManage',
//   component: resourceManage
// },
{
  path: '/userManage',
  component: userManage
},
{
  path: '/processRoleManage',
  component: processRoleManage
},
{
  path: '/functionalRoleManage',
  component: functionalRoleManage
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
