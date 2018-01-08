<template>
  <div class="aAntiApplyInf">
    <!-- 反欺诈结论======================= -->
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
                <label>证件号码： </label>
                <span>{{this.conclu.applySubno}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>客户名称： </label>
                <span>{{this.conclu.custName}} </span>
              </p>
              <p>
                <label>移动电话： </label>
                <span>{{this.conclu.applySubno}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>证件类型： </label>
                <span>{{this.conclu.certType}} </span>
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
                <span>{{this.conclu.certType}} </span>
              </p>
              <p>
                <label>拒贷部门： </label>
                <span>{{this.conclu.certType}} </span>
              </p>
               <p>
                <label>拒贷结论： </label>
                <span>{{this.conclu.certType}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>拒贷主原因码： </label>
                <span>{{this.conclu.certType}} </span>
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
              <p>
                <label>复议说明： </label>
                <span>{{this.conclu.applySubno}} </span>
              </p>
            </li>
            <li>
              <p>
               <label>复议申请人： </label>
                <span>{{this.conclu.applySubno}} </span>
              </p>
              <p>
                <label>复议申请日期： </label>
                <span>{{this.conclu.applySubno}} </span>
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
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("taskInWaitting")); // 初审
      } else if (this.judgeFlag.flag == '02') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      }
      this.post("/creauditOpinion/queryByPage", {
        // applyId:"62fecf51-4839-4639-afe0-9b7cde722a5e",
        // applyId:"00542",
        applyId: this.tastwaitingPass.applyId,
      }).then(res => {
        console.log(res.data)
        this.ConclutionInf = res.data.recordList;
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

.aAntiApplyInf li{
    clear: both;
}
  .aAntiApplyInf li p{
    width: 33.3%;
    float: left;
    margin: 10px 0;
  }

  .aAntiApplyInf label {
    width: 145px;
    display: inline-block;
    text-align: right;
    color: #475669;
  }

</style>
