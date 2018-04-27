<template>
  <div class="SSComp">
    <!-- 大数据风控-百融 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">输入参数</span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label>身份证：</label>
                <b>{{parmaAndRisk.certCode}}</b>
              </p>
              <p>
                <label>手机号：</label>
                <b>{{parmaAndRisk.mobile }}</b>
              </p>
              <p>
                <label>姓名：</label>
                <b>{{parmaAndRisk.custName }}</b>
              </p>
            </li>
            <li>
              <p>
                <label>联系人手机号：</label>
                <b>{{parmaAndRisk.linkmanMobile }}</b>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">风险详情</span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label>策略集：</label>
                <b>{{parmaAndRisk.policy_set_name }}</b>
              </p>
              <p>
                <label>风险状态：</label>
                <b>{{parmaAndRisk.final_decision }}</b>
              </p>
              <p>
                <label>风险系数：</label>
                <b>{{parmaAndRisk.final_score }}</b>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">命中规则</span>
        </template>
        <div class="tes">
          <div class="tab_wrap">
            <el-table :data="tableData" border height="100%" style="width: 100%">
              <el-table-column prop="rulercode" label="规则编号" align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="name" label="规则名称" align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="score" label="规则分数" align="center" min-width="100">
              </el-table-column>
              <el-table-column prop="decision" label="规则结果" align="center" min-width="100">
              </el-table-column>
              <el-table-column prop="action" label="查看规则详情" align="center" min-width="100">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn'
  export default {
    data() {
      return {
        localInf: null,
        parmaAndRisk: {},
        activeNames: ['1', "2", "3"],
        tableData: []
      }
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
      } else if (this.judgeFlag.flag == '02') {
        this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      } else if (this.judgeFlag.flag == '03' ||this.judgeFlag.flag == '04') {
        this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
      }
      //  else if (this.judgeFlag.flag == '04') {
      //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      // } 
      else if (this.judgeFlag.flag == '05' ||this.judgeFlag.flag == '06') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
      } 
      // else if (this.judgeFlag.flag == '06') {
      //   this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议经理
      // }
      this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getTdTabInfo.action', {
        //  applyId:'b14455f1-5531-4cf2-883b-f6dc0049e3bb'
        applyId: this.localInf.applyId
      }).then(res => {
        if (res.success) {
          this.parmaAndRisk = res.obj.tdResponsec;
          this.tableData = res.obj.rules.rows;
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }

</script>
<style scoped>
  .SSComp {
    overflow-x: hidden;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px;
  }

  .lists {
    padding: 10px 0 0 21px;
  }

  .SSComp p {
    float: left;
    width: 33.3%;
    margin-bottom: 10px;
  }

  .SSComp label {
    display: inline-block;
    width: 95px;
    text-align: right;
  }

  .SSComp b {
    display: inline-block;
    width: calc(100% - 120px);
  }

  .tab_wrap {
    margin: 10px;
    border-radius: 4px;
    overflow-x: hidden;
  }

</style>
