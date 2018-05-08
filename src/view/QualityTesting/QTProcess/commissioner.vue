 <script>
this.taskwaitting=JSON.parse(localStorage.getItem('AntitaskInWaitting'));
 this.taskName = this.taskwaitting.taskName;
 this.taskId=this.taskwaitting.taskId;
 this.applyId =this.taskwaitting.applyId;
 this.processInstanceId=this.taskwaitting.processInstanceId;
  this.taskNodeName=this.taskwaitting.taskNodeName;
   this.taskStatus=this.taskwaitting.taskStatus;
 this.processTemplateId = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).processTemplateId;
   var insertObj = JSON.parse(localStorage.getItem('saveInsertObj'));
       if (insertObj != undefined) {
          this.auditResult = insertObj.auditResult; // 审核结论
          this.auditResulttext = insertObj.auditResulttext; // 审核结论 名称
          this.mainReason = insertObj.mainreasonId; // 欺诈主原因id
          this.mainReasonName = insertObj.mainreaName, // 欺诈主原因名称
            this.secondReason = insertObj.subreasonId; // 欺诈子原因id
          this.subreaName = insertObj.subreaName, // 欺诈子原因名称
            this.riskSection = insertObj.riskSection; // 风险项
          this.auditDesc = insertObj.auditDesc; // 反欺诈决策反馈
          this.caseNum = insertObj.caseNum; // 案件编号 caseNum
          this.caseDesc = insertObj.caseDesc; // 案件描述

        }
         // 请求风险项
        this.getRiskItems();
if( this.taskName=='antiFraudApp_commissioner'){ // 专员
 this.isEdit = true;
   if (this.userInfo.roleCodesList) {
          for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
            if (this.userInfo.roleCodesList[i] == 'BX22')
              if (this.judgeFlag == '03')
                this.shenPiBtnShow = true;
        }
         this.queryCaseNumList();
}else if( this.taskName=='antiFraudApp_commissioner'){//主管

}


</script>