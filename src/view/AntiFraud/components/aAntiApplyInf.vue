<template>
  <div class="aAntiApplyInf">
    <!-- 反欺诈结论  ======================= -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">基本信息 </span>
        </template>
        <div class="baseInf baseTop">
          <ul>
            <li>
              <p>
                <label>进件编号： </label>
                <span>{{applyInfoPool.applySubno}} </span>
              </p>
              <p>
                <label>证件号码： </label>
                <span>{{applyInfoPool.certCode}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>客户名称： </label>
                <span>{{applyInfoPool.custName}} </span>
              </p>
              <p>
                <label>移动电话： </label>
                <span>{{applyInfoPool.mobile}} </span>
              </p>
            </li>
            <li>
              <p>
                <label>证件类型： </label>
                <span>{{applyInfoPool.certTypeTxt}} </span>
              </p>
            </li>
          </ul>
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
                <span class="textA"> {{fraudApplyInfo.applyDesc}}</span>
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
          <span class="headFont">反欺诈结论 </span>
        </template>
        <div class="AntiConclution">
          <ul style="margin:20px 0;">
            <li>
              <p class="description">
                <label>反欺诈决策反馈： </label>
                <span class="textA"> {{fraudAuditOpinion.auditDesc}}</span>
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
        applyInfoPool: {},
        fraudApplyInfo: {},
        fraudAuditOpinion: {},
        tastwaitingPass: '',
      }
    },
    methods:{
      mountedInf(){
      //基本信息:applyInfoPool
      // 反欺诈申请信息 fraudApplyInfo
      // 反欺诈结论 fraudAuditOpinion 
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("taskInWaitting")); // 初审
      } else if (this.judgeFlag.flag == '02') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      } else if (this.judgeFlag.flag == '05'||this.judgeFlag.flag == '06') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议申请专员+主管
      }
      this.post("/fraudApplyInfoController/getRecentFraudApplyInfoWithOpinion", {
        applyId: this.tastwaitingPass.applyId,
      }).then(res => {
        if (res.statusCode == 200) {
          this.applyInfoPool = res.data.applyInfoPool;
          this.fraudApplyInfo = res.data.fraudApplyInfo;
          this.fraudAuditOpinion = res.data.fraudAuditOpinion;
        } else {
          this.$message.error(res.msg);
        }
      });
      }
    },
    mounted() {
      this.mountedInf();
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

  .baseTop li{
    width: 33.3%;
    float: left;
  } 

  .baseTop li p{
    margin: 10px 0;
  } 

  .aAntiApplyInf label {
    width: 145px;
    display: inline-block;
    text-align: right;
    color: #475669;
  }

</style>
