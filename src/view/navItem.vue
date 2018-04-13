<template>
    <div>
        <el-submenu v-if="item.children && item.children.length" :index="navIndex"> 
            <!-- 创建父级菜单 -->
            <template slot="title">{{ item.resName }}</template>
            <!-- 创建子菜单 -->
            <nav-item 
                v-for="(subItem,i) in item.children" 
                :key="navIndex+'-'+i" 
                :navIndex="navIndex+'-'+i"
                :item="subItem" >
            </nav-item>
        </el-submenu>

       <!--  <el-menu-item @click="clickMenu(item.resUrl)" v-else :index="item.resUrl">{{ item.resName }}</el-menu-item> -->
        <el-menu-item @click="clickMenu(item.resUrl)" v-else :index="item.resUrl ? item.resUrl : '#'">{{ item.resName }}</el-menu-item>
    </div>
</template>
<script>
    export default {
        // 递归组件必须有name
        name: 'navItem',
        data(){
            return{

            }
        },
        methods:{
            clickMenu(item){
                console.log(item);
                console.log(typeof(item));
                if(item.indexOf('?') !=-1 ){
                    var nodeName ,RoutePath ,nodeFlag ,routeParams;
                    nodeName = RoutePath = routeParams = '';
                    var num = item.indexOf('?');
                    var str = item.substr(num+1);//得到？后面的字符串
                    var strs = str.split('&');//将得到的参数分隔成数组[]
                        if(strs[0].split('=')[1] == "'creditApp_firstTrial'" && strs[1].split('=')[1] == "'01'"){
                            var row ={
                                "processTemplateId":"creditApp",
                                "taskStatus":"01",
                                "taskNodeName":"creditApp_firstTrial"
                            };
                            var judge ={
                                "flag":"01"
                            };
                            localStorage.setItem("workbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                             nodeName = '初审审批';
                               RoutePath = '/taskInWaitting';
                              nodeFlag = "01";
                        };
                        //终审一级
                        if(strs[0].split('=')[1] == "'creditApp_finalTrial_one'" && strs[1].split('=')[1] == "'02'"){
                            var row ={
                                "processTemplateId":"creditApp",
                                "taskStatus":"01",
                                "taskNodeName":"creditApp_finalTrial_one"
                            };
                            var judge ={
                                "flag":"02"
                            };
                            localStorage.setItem("FinalWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                             nodeName = '终审一级审批';
                             RoutePath = '/FtaskInWaitting';
                             nodeFlag = "02";
                             routeParams = '?taskNodeName=creditApp_finalTrial_one';
                        };
                        //终审二级
                        if(strs[0].split('=')[1] == "'creditApp_finalTrial_two'" && strs[1].split('=')[1] == "'02'"){
                            var row ={
                                "processTemplateId":"creditApp",
                                "taskStatus":"01",
                                "taskNodeName":"creditApp_finalTrial_two"
                            };
                            var judge ={
                                "flag":"02"
                            };
                            localStorage.setItem("FinalWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                            nodeName = '终审二级审批';
                             RoutePath = '/FtaskInWaitting';
                             nodeFlag = "02";
                             routeParams = '?taskNodeName=creditApp_finalTrial_two';
                        };
                        //信审经理
                        if(strs[0].split('=')[1] == "'creditApp_finalTrial_three'" && strs[1].split('=')[1] == "'02'"){
                            var row ={
                                "processTemplateId":"creditApp",
                                "taskStatus":"01",
                                "taskNodeName":"creditApp_finalTrial_three"
                            };
                            var judge ={
                                "flag":"02"
                            };
                            localStorage.setItem("FinalWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                            nodeName = '信审经理审批';
                             RoutePath = '/FtaskInWaitting';
                             nodeFlag = "02";
                             routeParams = '?taskNodeName=creditApp_finalTrial_three';
                        };
                        //信审高级经理
                        if(strs[0].split('=')[1] == "'creditApp_finalTrial_four'" && strs[1].split('=')[1] == "'02'"){
                            var row ={
                                "processTemplateId":"creditApp",
                                "taskStatus":"01",
                                "taskNodeName":"creditApp_finalTrial_four"
                            };
                            var judge ={
                                "flag":"02"
                            };
                            localStorage.setItem("FinalWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                            nodeName = '信审高级经理审批';
                             RoutePath = '/FtaskInWaitting';
                             nodeFlag = "02";
                             routeParams = '?taskNodeName=creditApp_finalTrial_four';
                        };
                        //信审总监
                        if(strs[0].split('=')[1] == "'creditApp_finalTrial_five'" && strs[1].split('=')[1] == "'02'"){
                            var row ={
                                "processTemplateId":"creditApp",
                                "taskStatus":"01",
                                "taskNodeName":"creditApp_finalTrial_five"
                            };
                            var judge ={
                                "flag":"02"
                            };
                            localStorage.setItem("FinalWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                            nodeName = '信审总监审批审批';
                             RoutePath = '/FtaskInWaitting';
                             nodeFlag = "02";
                             routeParams = '?taskNodeName=creditApp_finalTrial_five';
                        };
                        //反欺诈专员
                        if(strs[0].split('=')[1] == "'antiFraudApp_commissioner'" && strs[1].split('=')[1] == "'03'"){
                            var row ={
                                "processTemplateId":"",
                                "taskStatus":"01",
                                "taskNodeName":"antiFraudApp_commissioner"
                            };
                            var judge ={
                                "flag":"03"
                            };
                            localStorage.setItem("AntiWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                             nodeName = '反欺诈专员审批';
                               RoutePath = '/AntiFraud34';
                              nodeFlag = "03";
                               routeParams = '?taskNodeName=antiFraudApp_commissioner';
                        };
                        //反欺诈主管
                        if(strs[0].split('=')[1] == "'antiFraudApp_manager'" && strs[1].split('=')[1] == "'04'"){
                            var row ={
                                "processTemplateId":"",
                                "taskStatus":"01",
                                "taskNodeName":"antiFraudApp_manager"
                            };
                            var judge ={
                                "flag":"04"
                            };
                            localStorage.setItem("AntiManagerWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                             nodeName = '反欺诈主管审批';
                               RoutePath = '/AntiFraud34';
                              nodeFlag = "04";
                               routeParams = '?taskNodeName=antiFraudApp_manager';
                        };
                        //反欺诈申请
                        if(strs[0].split('=')[1] == "'antiFraudApp_apply'"){
                            var row ={
                                "processTemplateId":"",
                                "taskStatus":"01",
                                "taskNodeName":"antiFraudApp_apply"
                            };
                            localStorage.setItem("FinalWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                            //      nodeName = '反欺诈主管审批';
                            //    RoutePath = '/AntiFraud34';//待确认
                            //   nodeFlag = "";
                            //    routeParams = '?taskNodeName=';
                 // this.$store.dispatch('addVisitedViews', {
                    //   name: '反欺诈申请',
                    //   path: '/AntiFraud',
                    //   flag: '',
                    //   params: '',
                    //   StatefullPath: '/AntiFraud'
                    // })
                        };
                        //复议专员
                        if(strs[0].split('=')[1] == "'reconsiderApp_commissioner'" && strs[1].split('=')[1] == "'05'"){
                            var row ={
                                "processTemplateId":"",
                                "taskStatus":"01",
                                "taskNodeName":"reconsiderApp_commissioner"
                            };
                            var judge ={
                                "flag":"05"
                            };
                            localStorage.setItem("ReWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                              nodeName = '复议专员审批';
                               RoutePath = '/reconsiderList';
                              nodeFlag = "05";
                            //    routeParams = '?taskNodeName=reconsiderApp_commissioner';
                               routeParams = '?taskNodeName=antiFraudApp_commissioner&flag=03';
                               
                        };
                        //复议经理
                        if(strs[0].split('=')[1] == "'reconsiderApp_manager'" && strs[1].split('=')[1] == "'06'"){
                            var row ={
                                "processTemplateId":"",
                                "taskStatus":"01",
                                "taskNodeName":"reconsiderApp_manager"
                            };
                            var judge ={
                                "flag":"06"
                            };
                            localStorage.setItem("ReWorkbenchPass",JSON.stringify(row));
                            localStorage.setItem("judge",JSON.stringify(judge));
                              nodeName = '复议经理审批';
                               RoutePath = '/reconsiderList';
                              nodeFlag = "06";
                            //    routeParams = '?taskNodeName=reconsiderApp_manager';
                               routeParams = '?taskNodeName=antiFraudApp_manager&flag=04';
                            
                        };

                   // }
                //    反欺诈申请未添加 此方法的变量
                console.log( nodeName)
                    this.$store.dispatch('addVisitedViews', {
                    name: nodeName,
                    path: RoutePath,
                    flag: nodeFlag,
                    params: routeParams,
                    StatefullPath: RoutePath + routeParams
                    })
                }
            },
        },
        props: ['item','navIndex']
    }
</script>