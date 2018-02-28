import Vue from 'vue'
import Router from 'vue-router'
// 头部导航
import myHead from '@/view/header'

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
import AntiRules from '../view/AntiFraud/AntiRules.vue'//反欺诈规则设定
import AntiCaseNum from '../view/AntiFraud/AntiCaseNum'// 案件编号维护
import AnitAudioVisual from'../view/AntiFraud/components/AnitAudioVisual.vue'
// 反欺诈 列表
import AntiFraud from '@/view/AntiFraud/AntiFraud.vue'
// 反欺诈 专员 / 主管
import AntiFraud34 from '@/view/AntiFraud/AntiFraud34.vue'
// 反欺诈 申请
import AntiApplyEdit from '@/view/AntiFraud/AntiApplyEdit.vue'
import AntiApplyInf from '@/view/AntiFraud/AntiApplyInf.vue'
import AntiApplyAdd from '@/view/AntiFraud/AntiApplyAdd.vue'
import aAntiApplyInf from '@/view/AntiFraud/components/aAntiApplyInf.vue'
//反欺诈调查
import aAntiFraudInvestigation from '@/view/AntiFraud/components/aAntiFraudInvestigation.vue'
// 审批结论
import ApprovalConclus from '@/view/AntiFraud/approvalConclus.vue'
// 反欺诈借款人资料
import AborrowerInformationDetail from '@/view/AntiFraud/components/AborrowerInformationDetail.vue'
// 反欺诈、复议（内匹）借款人资料
import MborrowerInformationSetail from '@/view/AntiFraud/matchComponent/MborrowerInformationSetail.vue'
// -------------------------复议---------------------
import ReconsiderApply from '../view/Reconsider/ReconsiderComponents/ReconsiderApply.vue'//复议申请
import reconsiderList from '../view/Reconsider/reconsiderList.vue'//复议申请任务列表
import ReconsiderSplit from '../view/Reconsider/ReconsiderSplit.vue'//复议专员主管分屏
// import ReconsiderAntiSplit from '../view/Reconsider/ReconsiderAntiSplit.vue'//复议反欺诈分屏
//复议结论
import ReconsiderationConclusion from '../view/Reconsider/ReconsiderComponents/ReconsiderationConclusion.vue'//复议专员
import ReconjingliConclusion from '../view/Reconsider/ReconsiderComponents/ReconjingliConclusion.vue'//复议经理
// -------------------------流程监控---------------------
import processMoni from '../view/processMoni/processMoni.vue'
// -----------------------任务管理----------------------
import DoneTask from'../view/TaskManagement/reconsider/DoneTask.vue'//
import HistoryTask from'../view/TaskManagement/reconsider/HistoryTask.vue'//
import aDoneTask from'../view/TaskManagement/antiTaskManagment/aDoneTask.vue'//
import aHistoryTask from'../view/TaskManagement/antiTaskManagment/aHistoryTask.vue'//
import TaskManagementSplit from'../view/TaskManagement/reconsider/TaskManagementSplit.vue'//
import doTheTask from'../view/TaskManagement/examineAndApprove/doTheTask.vue'//审批任务管理——已办任务
import historicalTask from'../view/TaskManagement/examineAndApprove/historicalTask.vue'//审批任务管理——历史任务
//  -----------------------质检----------------------
import tb from'../view/QualityTesting/roles/tb.vue'
import tes from'../view/QualityTesting/roles/tes.vue'


Vue.use(Router)

const routes = [{
  path: '/',
  component: workbench
},
{
  path: '/workbench',
  component: login,
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
// 反欺诈 借款人资料
{
  path: '/AborrowerInformationDetail',
  component: AborrowerInformationDetail
},
// 反欺诈、复议（内匹） 借款人资料
{
  path: '/MborrowerInformationSetail',
  component: MborrowerInformationSetail
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
// 反欺诈 专员/主管
{
  path:'/AntiFraud34',
  component:AntiFraud34
},
// 反欺诈申请 编辑
{
  path:'/AntiApplyEdit',
  name:'AntiApplyEdit',
  component:AntiApplyEdit
},
// 反欺诈申请 查看
{
  path:'/AntiApplyInf',
  name:'AntiApplyInf',
  component:AntiApplyInf
},
// 反欺诈申请 添加
{
  path:'/AntiApplyAdd',
  name:'AntiApplyAdd',
  component:AntiApplyAdd
}, 
{
  path:'/aAntiApplyInf',
  component:aAntiApplyInf
},
//反欺诈调查
{
  path:'/aAntiFraudInvestigation',
  component:aAntiFraudInvestigation
},
// 审批结论
{
  path:'/ApprovalConclus',
  component:ApprovalConclus
},
// 反欺诈规则设定
{
  path:'/AntiRules',
  component:AntiRules
},
// 案件编号维护
{
  path:'/AntiCaseNum',
  component:AntiCaseNum
},
// ---------------------复议-------------
{
  path:'/ReconsiderApply',
  component:ReconsiderApply
},
{
  path:'/reconsiderList',
  component:reconsiderList
},
{
  path:'/ReconsiderSplit',
  component:ReconsiderSplit
},
//复议结论（专员）
{
  path:'/ReconsiderationConclusion',
  component:ReconsiderationConclusion
},
//复议结论（经理）
{
  path:'/ReconjingliConclusion',
  component:ReconjingliConclusion
},
// ---------------------流程监控---------
{
  path: '/processMoni',
  component: processMoni
},
// ------------------任务管理------------
{
  path: '/DoneTask',
  component: DoneTask
},
{
  path: '/aDoneTask',
  component: aDoneTask
},
{
  path: '/HistoryTask',
  component: HistoryTask
  
},
{
  path: '/aHistoryTask',
  component: aHistoryTask
},
{
  path: '/TaskManagementSplit',
  component: TaskManagementSplit
},
{
  path: '/doTheTask',
  component: doTheTask
},
{
  path: '/historicalTask',
  component: historicalTask
},
// ---------------质检--------------------
{
  path:'/tb',
  component:tb
},
{
  path:'/tes',
  component:tes
},
];

const router = new Router({
  routes
});
export default router;
