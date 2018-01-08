<template>
  <div class="aAntiApplyInf">
    <!-- 反欺诈结论======================= -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">基本信息</span>
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
          <span class="headFont">反欺诈申请信息</span>
        </template>
        <div class="AntiInf">
          <ul>
            <li>
              <p>
                <label>借欺诈申请类型主原因： </label>
                <span>{{this.conclu.certType}} </span>
                <!-- <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in mainReason" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->
              </p>
              <p>
                <label>子原因： </label>
                <span>{{this.conclu.certType}} </span>
              </p>
            </li>
            <li>
              <p class="description">
                <label>欺诈上报描述：</label>
                <span class="textA"> </span>
              </p>
            </li>
            <li>
              <p>
                <label>反欺诈申请人： </label>
                <span>{{this.conclu.certType}} </span>
              </p>
              <p>
                <label>反欺诈申请日期： </label>
                <span>{{this.conclu.certType}} </span>
              </p>
              <p>
                <label>反欺诈申请机构： </label>
                <span>{{this.conclu.certType}} </span>
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
                <span class="textA"> </span>
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
      }
    },
    mounted() {
      this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //反欺诈专员-匹配查看 + 主管
      //需要做判读的时候打开
      // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      // if (this.judgeFlag.flag == '03') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiinternalObj")); //反欺诈专员-匹配查看
      // } else if (this.judgeFlag.flag == '04') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiManagerinternalObj")); //反欺诈主管-匹配查看
      // }
      this.post("/creauditOpinion/queryByPage", {
        // applyId:"62fecf51-4839-4639-afe0-9b7cde722a5e",
        // applyId:"00542",
        applyId: this.MatchInf.matchApplyId,
      }).then(res => {
        if (res.statusCode == 200) {
          console.log(res.data)
          this.ConclutionInf = res.data.recordList;
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

  .baseInf li p,
  .AntiInf li:nth-of-type(1) p,
  .AntiInf li:nth-of-type(3) p {
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
