<template>
  <div>
    <el-submenu v-if="item.children && item.children.length" :index="navIndex">
      <!-- 创建父级菜单 -->
      <template slot="title">{{ item.resName }}</template>
      <!-- 创建子菜单 -->
      <nav-item v-for="(subItem,i) in item.children" :key="navIndex+'-'+i" :navIndex="navIndex+'-'+i" :item="subItem">
      </nav-item>
    </el-submenu>
    <el-menu-item @click="clickMenu(item.resUrl)" v-else :index="item.resUrl ? item.resUrl : '#'">{{ item.resName }}</el-menu-item>
  </div>
</template>
<script>
  export default {
    // 递归组件必须有name
    name: 'navItem',
    methods: {
      clickMenu(item) {
        if (item.indexOf('?') != -1) {
          var nodeName, RoutePath, nodeFlag, routeParams;
          nodeName = RoutePath = routeParams = '';
          var num = item.indexOf('?');
          var str = item.substr(num + 1); //得到？后面的字符串
          var strs = str.split('&'); //将得到的参数分隔成数组[]
          if (strs[0].split('=')[1] == "creditApp_firstTrial" && strs[1].split('=')[1] == "01") {
            var row = {
              "processTemplateId": "creditApp",
              "taskStatus": "01",
              "taskNodeName": "creditApp_firstTrial"
            };
            var judge = {
              "flag": "01"
            };
            localStorage.setItem("workbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
            // 导航进入的 标志 , 优先级最高
            var navJudge = {
              "flag": "nav_first"
            }
            localStorage.setItem("navJude", JSON.stringify(navJudge))
          };
          //终审一级
          if (strs[0].split('=')[1] == "creditApp_finalTrial_one" && strs[1].split('=')[1] == "02") {
            var row = {
              "processTemplateId": "creditApp",
              "taskStatus": "01",
              "taskNodeName": "creditApp_finalTrial_one"
            };
            var judge = {
              "flag": "02"
            };
            localStorage.setItem("FinalWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //终审二级
          if (strs[0].split('=')[1] == "creditApp_finalTrial_two" && strs[1].split('=')[1] == "02") {
            var row = {
              "processTemplateId": "creditApp",
              "taskStatus": "01",
              "taskNodeName": "creditApp_finalTrial_two"
            };
            var judge = {
              "flag": "02"
            };
            localStorage.setItem("FinalWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //信审经理
          if (strs[0].split('=')[1] == "creditApp_finalTrial_three" && strs[1].split('=')[1] == "02") {
            var row = {
              "processTemplateId": "creditApp",
              "taskStatus": "01",
              "taskNodeName": "creditApp_finalTrial_three"
            };
            var judge = {
              "flag": "02"
            };
            localStorage.setItem("FinalWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //信审高级经理
          if (strs[0].split('=')[1] == "creditApp_finalTrial_four" && strs[1].split('=')[1] == "02") {
            var row = {
              "processTemplateId": "creditApp",
              "taskStatus": "01",
              "taskNodeName": "creditApp_finalTrial_four"
            };
            var judge = {
              "flag": "02"
            };
            localStorage.setItem("FinalWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //信审总监
          if (strs[0].split('=')[1] == "creditApp_finalTrial_five" && strs[1].split('=')[1] == "02") {
            var row = {
              "processTemplateId": "creditApp",
              "taskStatus": "01",
              "taskNodeName": "creditApp_finalTrial_five"
            };
            var judge = {
              "flag": "02"
            };
            localStorage.setItem("FinalWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //反欺诈专员
          if (strs[0].split('=')[1] == "antiFraudApp_commissioner" && strs[1].split('=')[1] == "03") {
            var row = {
              "processTemplateId": "",
              "taskStatus": "01",
              "taskNodeName": "antiFraudApp_commissioner"
            };
            var judge = {
              "flag": "03"
            };
            localStorage.setItem("AntiWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //反欺诈主管
          if (strs[0].split('=')[1] == "antiFraudApp_manager" && strs[1].split('=')[1] == "04") {
            var row = {
              "processTemplateId": "",
              "taskStatus": "01",
              "taskNodeName": "antiFraudApp_manager"
            };
            var judge = {
              "flag": "04"
            };
            localStorage.setItem("AntiManagerWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //反欺诈申请
          if (strs[0].split('=')[1] == "'antiFraudApp_apply'") {
            var row = {
              "processTemplateId": "",
              "taskStatus": "01",
              "taskNodeName": "antiFraudApp_apply"
            };
            localStorage.setItem("FinalWorkbenchPass", JSON.stringify(row));
          };
          //复议专员
          if (strs[0].split('=')[1] == "reconsiderApp_commissioner" && strs[1].split('=')[1] == "05") {
            var row = {
              "processTemplateId": "",
              "taskStatus": "01",
              "taskNodeName": "reconsiderApp_commissioner"
            };
            var judge = {
              "flag": "05"
            };
            localStorage.setItem("ReWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //复议经理
          if (strs[0].split('=')[1] == "reconsiderApp_manager" && strs[1].split('=')[1] == "06") {
            var row = {
              "processTemplateId": "",
              "taskStatus": "01",
              "taskNodeName": "reconsiderApp_manager"
            };
            var judge = {
              "flag": "06"
            };
            localStorage.setItem("ReManagerWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检专员

          if (strs[0].split('=')[1] == "checkApp_apply" && strs[1].split('=')[1] == "07") {

            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_apply"
            };
            var judge = {
              "flag": "07"
            };
            localStorage.setItem("QTWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检 主管  
          if (strs[0].split('=')[1] == "checkApp_check_manager" && strs[1].split('=')[1] == "08") {
            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_check_manager"
            };
            var judge = {
              "flag": "08"
            };
            localStorage.setItem("QTManagerWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检 本人
          if (strs[0].split('=')[1] == "checkApp_trial_self" && strs[1].split('=')[1] == "09") {
            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_trial_self"
            };
            var judge = {
              "flag": "09"
            };
            localStorage.setItem("QTTrialSelftWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检 初终审主管
          if (strs[0].split('=')[1] == "checkApp_trial_manager" && strs[1].split('=')[1] == "10") {
            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_trial_manager"
            };
            var judge = {
              "flag": "10"
            };
            localStorage.setItem("QTTrialManagerWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检-复议任务列表（首次） 
          if (strs[0].split('=')[1] == "checkApp_check_recon_manager" && strs[1].split('=')[1] == "11") {
            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_check_recon_manager"
            };
            var judge = {
              "flag": "11"
            };
            localStorage.setItem("QTReWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检-区域经理
          if (strs[0].split('=')[1] == "checkApp_regional_manager" && strs[1].split('=')[1] == "12") {
            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_regional_manager"
            };
            var judge = {
              "flag": "12"
            };
            localStorage.setItem("QTAreaWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
          //质检-合规经理
          if (strs[0].split('=')[1] == "checkApp_compliance_manager" && strs[1].split('=')[1] == "13") {
            var row = {
              "processTemplateId": "checkApp",
              "taskStatus": "01",
              "taskNodeName": "checkApp_compliance_manager"
            };
            var judge = {
              "flag": "13"
            };
            localStorage.setItem("QTComplianceWorkbenchPass", JSON.stringify(row));
            localStorage.setItem("judge", JSON.stringify(judge));
          };
        }
      },
    },
    props: ['item', 'navIndex']
  }

</script>
