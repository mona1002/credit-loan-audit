import Vue from 'vue'
import Router from 'vue-router'
// import {
//   getCookie
// } from '@/util/util'
// 头部导航
import myHead from '@/view/header'
import test from '@/view/test'

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
import FcCreditForm from '@/view/FinalTrial/FinalComponent/FcCreditForm'
//列表页
import FtaskInWaitting from '@/view/FinalTrial/FtaskInWaitting'
import FMCreditForm from '@/view/FinalTrial/FinalMatchComponent/FMCreditForm'
import FMatchingInf from '@/view/FinalTrial/FMatchingInf'
import FCreditForm from '../view/FinalTrial/FinalComponent/FCreditForm'


// ------------反欺诈------------------
import AntiAudit from '@/view/AntiFraud/AntiAudit.vue'//反欺诈分屏
// import AntiRules from '../view/AntiFraud/AntiRules.vue'//反欺诈规则设定
// import AntiCaseNum from '../view/AntiFraud/AntiCaseNum'// 案件编号维护
import AnitAudioVisual from'../view/AntiFraud/components/AnitAudioVisual.vue'
// 反欺诈 列表
import AntiFraud from '@/view/AntiFraud/AntiFraud.vue'
// 反欺诈 申请
import AntiApplyInf from '@/view/AntiFraud/AntiApplyInf.vue'
import aAntiApplyInf from '@/view/AntiFraud/components/aAntiApplyInf.vue'
// 审批结论
// import ApprovalConclus from '@/view/AntiFraud/approvalConclus.vue'
// -------------------------复议---------------------
import ReconsiderApply from '../view/Reconsider/ReconsiderComponents/ReconsiderApply.vue'//复议申请


Vue.use(Router)

const routes = [{
  path: '/',
  component: workbench
},
{
  path: '/workbench',
  component: login,
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
{
  path: '/FMatchingInf',
  component: FMatchingInf
},
{
  path: '/FcCreditForm',
  component: FcCreditForm
},
{
  path: '/FtaskInWaitting',
  component: FtaskInWaitting
},
{
  path: '/FCreditForm',
  component: FCreditForm
},
{
  path: '/FMCreditForm',
  component: FMCreditForm
},

//-------------------反欺诈------------
{
  path:'/AntiAudit',
  component:AntiAudit
},
{
  path:'/AnitAudioVisual',
  component:AnitAudioVisual
},
// 反欺诈列表
{
  path:'/AntiFraud',
  component:AntiFraud
},
// 反欺诈 申请信息
{
  path:'/AntiApplyInf',
  component:AntiApplyInf
},
{
  path:'/aAntiApplyInf',
  component:aAntiApplyInf
},
// 审批结论
// {
//   path:'/ApprovalConclus',
//   component:ApprovalConclus
// },
// 反欺诈规则设定
// {
//   path:'/AntiRules',
//   component:AntiRules
// },
// // 案件编号维护
// {
//   path:'/AntiCaseNum',
//   component:AntiCaseNum
// },
// ---------------------复议-------------
{
  path:'/ReconsiderApply',
  component:ReconsiderApply
},
// {
//   path:'/ReconsiderApply',
//   component:ReconsiderApply
// },


];

const router = new Router({
  routes
});
export default router;
