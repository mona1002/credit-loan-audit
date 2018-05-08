<template>
  <div class="aAntiApplyInf">
    <!-- 复议申请页面 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
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
              <p>
                <label>申请类型： </label>
                <span>{{applyInfoPool.certTypeTxt}} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">反欺诈申请信息</span>
        </template>
        <div class="AntiInf">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label='质检结果' prop="name" width="120"></el-table-column>
            <el-table-column label='差错类型' prop="name" width="150"></el-table-column>
            <el-table-column label='差错描述' prop="name" width="150"></el-table-column>
            <el-table-column label='备注（非必填）' prop="name"></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">反欺诈结论 </span>
        </template>
        <div class="AntiConclution">
          <ul style="margin:20px 0;">
            <li>
              <p class="description" style="position:relative;;">
                <i v-show="ReIllustrate" class="hint_word" style="left:165px">输入长度不能超过500</i>
                <label>
                  <b class="required_Red" v-show="HintStar"> * </b> 复议说明： </label>
                <!-- <span class="textA"> {{fraudAuditOpinion.auditDesc}}</span> -->
                <el-input :disabled="manager" class="ccccc" type="textarea" :rows='3' resize='none' v-model='fraudAuditOpinion.auditDesc'
                  :maxlength="500" @keyup.native='fraudAuditOpinion.auditDesc.length>=500?ReIllustrate=true:ReIllustrate=false;'></el-input>
              </p>
            </li>
            <li class="ApplyInf">
              <p>
                <label>复议申请人：</label>{{ }}
              </p>
              <p>
                <label>复议申请日期： </label>{{ }}
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="ReApply_btn" v-if="ManagerBtn">
      <el-button type="primary" @click="sumt">提交</el-button>
      <el-button @click="backToQTResult">取消</el-button>
    </div>
    <!-- 弹窗 -->
    <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
      <span>确定操作？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="confirm=false">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveInf">{{adbtn}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        manager: false,
        ManagerBtn: true,
        HintStar: true,
        Confirm: false,
        adbtn: '确认',
        ReIllustrate: false,
        loadsitu: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        activeNames: ['0', '1', "2", "3"], //折叠面板 默认显示下标
        applyInfoPool: {
          applySubno: '',
        },
        fraudAuditOpinion: {
          auditDesc: '',
        }
      }
    },
    props: ['isManager'],
    methods: {
      sumt() {
        this.loadsitu = false;
        this.adbtn = '确定';
        if (this.fraudAuditOpinion.auditDesc == '') { //复议说明如果为空 不提交------复议说明自段待更改
          this.$message.error('提交失败，有必填项未填写！');
          this.confirm = false;
          return
        }
        this.Confirm = true;
      },
      SaveInf() {
        this.loadsitu = true;
        this.adbtn = '提交中';
        // 提交信息
        this.post("/", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {

          } else {
            this.$message.error(res.msg);
          }
        });
        this.confirm = false;
      },
      backToQTResult() {
        // 4、回到质检结论页
      }
    },

    mounted() {
      //传入isManager判断是否可编辑
      if (this.isManager == 'Manager') {
        this.manager = true;
        this.ReIllustrate = false;
        this.ManagerBtn = false;
        this.HintStar = false;
      }
    }
  }

</script>
<style scoped>
  .aAntiApplyInf {
    min-width: 1366px;
    overflow: auto;
    height: 100%;
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

  .baseTop li {
    width: 33.3%;
    float: left;
  }

  .baseTop li p {
    margin: 10px 0;
  }

  .aAntiApplyInf label {
    width: 145px;
    display: inline-block;
    text-align: right;
    color: #475669;
  }

  .ApplyInf p {
    float: left;
    width: 635px;
  }

  .ReApply_btn {
    padding: 30px 0 40px 900px;
  }

</style>
