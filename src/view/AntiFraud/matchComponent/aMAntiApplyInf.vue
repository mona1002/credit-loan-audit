<template>
  <div class="aAntiApplyInf">
    <!-- 反欺诈结论 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">基本信息</span>
        </template>
        <div class="baseInf">
          <!-- <ul>
            <li> -->
          <p>
            <label>进件编号： </label>
            <span>{{this.applyInfoPool.applySubno}} </span>
          </p>
          <p>
            <label>证件号码： </label>
            <span>{{this.applyInfoPool.certCode}} </span>
          </p>
          <!-- </li>
            <li> -->
          <p>
            <label>客户名称： </label>
            <span>{{this.applyInfoPool.custName}} </span>
          </p>
          <p>
            <label>移动电话： </label>
            <span>{{this.applyInfoPool.mobile}} </span>
          </p>
          <!-- </li>
            <li> -->
          <p>
            <label>证件类型： </label>
            <span>{{this.applyInfoPool.certTypeTxt}} </span>
          </p>
          <!-- </li>
          </ul> -->
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">反欺诈申请信息</span>
        </template>
        <div class="AntiInf">
          <ul>
            <li>
              <p>
                <label>借欺诈申请类型主原因： </label>
                <span>{{fraudApplyInfo.mainreaName}} </span>
              </p>
              <p>
                <label>子原因： </label>
                <span>{{fraudApplyInfo.subreaName}} </span>
              </p>
            </li>
            <li>
              <p class="description">
                <label>欺诈上报描述：</label>
                <span class="textA">{{fraudApplyInfo.applyDesc}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>反欺诈申请人： </label>
                <span>{{fraudApplyInfo.applyPersonName}} </span>
              </p>
              <p>
                <label>反欺诈申请日期： </label>
                <span>{{fraudApplyInfo.appDate}} </span>
              </p>
              <p>
                <label>反欺诈申请机构： </label>
                <span>{{fraudApplyInfo.appOrgName}} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">反欺诈结论</span>
        </template>
        <div class="AntiConclution">
          <ul style="margin:20px 0;">
            <li>
              <p class="description">
                <label>反欺诈决策反馈： </label>
                <span class="textA">{{fraudAuditOpinion.auditDesc}} </span>
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
        MatchInf: '',
        MatchFlag: '',
        applyInfoPool: '',
        fraudApplyInfo: '',
        fraudAuditOpinion: '',
      }
    },
    mounted() {
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag")) //初审-匹配查看
      this.MatchInf = JSON.parse(localStorage.getItem("internalObj"));
      if (this.MatchFlag.MatchFlag == 'internal') { //反欺诈专员-匹配查看 + 主管
        this.MatchInf = JSON.parse(localStorage.getItem('internalObj'));
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.MatchInf = JSON.parse(localStorage.getItem("Query")) //初审-匹配查看
      } else if (this.MatchFlag.MatchFlag == 'QT') {
        this.MatchInf = JSON.parse(localStorage.getItem("QT")) //综合查询
      }

      this.post("/fraudApplyInfoController/getRecentFraudApplyInfoWithOpinion", {
        applyId: this.MatchInf.matchApplyId,
      }).then(res => {
        if (res.statusCode == 200) {
          this.applyInfoPool = res.data.applyInfoPool; //基本信息
          this.fraudApplyInfo = res.data.fraudApplyInfo; //反欺诈申请信息
          this.fraudAuditOpinion = res.data.fraudAuditOpinion; //反欺诈结论
        } else {
          this.$message.error(res.msg);
        }
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

  .description {
    clear: both;
    margin: 10px 0;
  }

  .AntiInf li:nth-of-type(1) p,
  .AntiInf li:nth-of-type(3) p {
    width: 33.3%;
    float: left;
    margin: 10px 0;
  }

  .baseInf p {
    width: 33%;
    float: left;
    height: 20px;
    margin-bottom: 5px;
  }

  .aAntiApplyInf label {
    width: 145px;
    display: inline-block;
    text-align: right;
    color: #475669;
  }

</style>
