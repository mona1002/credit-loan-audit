<template>
  <div class="aAntiApplyInf">
    <!-- 复议申请 ======================= -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">复议基本信息</span>
        </template>
        <div class="baseInf">
          <ul>
            <li>
              <p>
                <label>进件编号： </label>
                <span>{{this.conclu.applySubno}} </span>
              </p>
              <p>
                <label>客户名称： </label>
                <span>{{this.conclu.custName}} </span>
              </p>
              <p>
                <label>证件类型： </label>
                <span>{{this.conclu.certTypeTxt}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>证件号码： </label>
                <span>{{this.conclu.certCode}} </span>
              </p>
              <p>
                <label>移动电话： </label>
                <span>{{this.conclu.mobile}} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">原审批信息</span>
        </template>
        <div class="AntiInf">
          <ul>
            <li>
              <p>
                <label>拒贷日期： </label>
                <span>{{this.conclu.dealOperDate}} </span>
              </p>
              <p>
                <label>拒贷部门： </label>
                <span>{{this.conclu.dealOrgCode}} </span>
              </p>
              <p>
                <label>拒贷结论： </label>
                <span>{{this.conclu.applyConclusion}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>拒贷主原因码： </label>
                <span>{{this.conclu.mainreasonCode}} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">复议申请信息</span>
        </template>
        <div class="AntiConclution">
          <ul style="margin:20px 0;">
            <li>
              <p style="width:100%;">
                <label>复议说明： </label>
                 <el-tooltip class="item" effect="dark" :disabled="this.conclu.reconRemark==null||this.conclu.reconRemark==''" :content="this.conclu.reconRemark" placement="top-start">
                           <span class="Tarea">{{this.conclu.reconRemark}} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label>复议申请人： </label>
                <span>{{this.conclu.reconOpercode}} </span>
              </p>
              <p>
                <label>复议申请日期： </label>
                <span>{{this.conclu.reconDate}} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3'],
        conclu: '',
        tastwaitingPass: '',
      }
    },
    mounted() {
      // 复议不用flag判断，列表页专员、主管存的同一个字段
       this.tastwaitingPass = JSON.parse(localStorage.getItem("RtaskInWaitting")); //复议申请专员+主管
      this.post("/accepApplyReconController/getAccepApplyReconByProcessId", {
        processInstanceId: this.tastwaitingPass.processInstanceId,
        // id:'500001'
      }).then(res => {
        this.conclu = res.data;
      });
    },
  }

</script>
<style scoped>
  .aAntiApplyInf {
    min-width: 788px;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .textA {
    display: inline-block;
    width: calc( 66% - 145px);
    height: 60px;
    vertical-align: top;
    overflow: auto;
    border: 1px solid #d8dce5;
    padding: 5px 10px;
    border-radius: 4px;
  }

  .aAntiApplyInf li {
    clear: both;
    width: 100%;
  }

  .aAntiApplyInf li p {
    width: 33.3%;
    float: left;
    margin: 10px 0;
    /* border:1px solid red; */
  }

  .aAntiApplyInf label {
    width: 145px;
    display: inline-block;
    text-align: right;
    color: #475669;
  }
.Tarea{
  display: inline-block;
  /* background: #000; */
  height: 60px;
    border: 1px solid #d8dce5;
        padding: 5px 10px;
    border-radius: 4px;
        overflow: auto;
  vertical-align: top;
  width:calc( 100% - 150px);
}
</style>
