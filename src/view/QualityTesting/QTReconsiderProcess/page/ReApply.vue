<template>
  <div class="aAntiApplyInf ReApply">
    <!-- 复议申请页面 -->
    <myHead></myHead>
    <div class="content">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
            <span class="headFont">复议基本信息 </span>
          </template>
          <div class="baseInf baseTop">
            <ul>
              <li>
                <p>
                  <label>进件编号： </label>
                  <span>{{applyInfoPool.applySubNo}} </span>
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
                  <span>{{applyInfoPool.appType}} </span>
                </p>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
            <span class="headFont">合规质检结论</span>
          </template>
          <div class="AntiInf">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column label='质检结果' prop="checkResult" width="120"></el-table-column>
              <el-table-column label='差错类型' prop="errorType" width="150"></el-table-column>
              <el-table-column label='差错描述' prop="errorDescribe" width="150"></el-table-column>
              <el-table-column label='备注' prop="remark"></el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
            <span class="headFont">复议申请信息 </span>
          </template>
          <div class="AntiConclution">
            <ul style="margin:20px 0;">
              <li>
                <p class="description" style="position:relative;;">
                  <i v-show="fraudAuditOpinion.auditDesc&&fraudAuditOpinion.auditDesc.length>=500" class="hint_word" style="left:165px">输入长度不能超过500</i>
                  <label>
                    <b class="required_Red" v-show="HintStar"> * </b> 复议说明： </label>
                  <!-- <span class="textA"> {{fraudAuditOpinion.auditDesc}}</span> -->
                  <el-input :disabled="manager" class="ccccc" type="textarea" :rows='3' resize='none' v-model='fraudAuditOpinion.auditDesc'
                    :maxlength="500"></el-input>
                </p>
              </li>
              <li class="ApplyInf">
                <p>
                  <label>复议申请人：</label>{{reApplyInf.userName }}
                </p>
                <p>
                  <label>复议申请日期： </label>{{ systermTime | dateFilter}}
                </p>
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="ReApply_btn" v-if="ManagerBtn">
        <el-button type="primary" @click="sumt">提交</el-button>
        <el-button @click="$router.push('/SelfTaskList?taskNodeName=checkApp_apply&flag=09')">取消</el-button>
      </div>
      <!-- 弹窗 -->
      <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
        <span>确定操作？</span>
        <span slot="footer" class="dialog-footer">
          <el-button class="calbtn" @click="Confirm=false">取消</el-button>
          <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveInf">{{adbtn}}</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import myHead from '../../../header.vue';

  export default {
    data() {
      return {
        systermTime: null,
        reApplyInf: {},
        taskwaitting: {},
        manager: false,
        ManagerBtn: true,
        HintStar: true,
        Confirm: false,
        adbtn: '确认',
        ReIllustrate: false,
        loadsitu: false,
        tableData: [],
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }],
        activeNames: ['0', '1', "2", "3"], //折叠面板 默认显示下标
        applyInfoPool: {
          // applySubno: '',
        },
        fraudAuditOpinion: {
          auditDesc: '',
        }
      }
    },
    props: ['propReApply'],
    components: {
      myHead
    },
    methods: {
      getSystermTime() { // 获取系统时间-质检结论-质检日期取值---基础接口
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.systermTime = res.data;
          }
        })
      },
      getInf() { //查询页面信息
        this.get('/insReconApply/queryInsConclusionInfo', {
          applyId: this.taskwaitting.ApplyId,
        }).then(res => {
          this.applyInfoPool = res.data.applyBaseInfo; //基本信息
          this.tableData[0] = res.data.insConclusion; //-----------需要调接口查看返回对象，还是数组
        })
        //  this.get('/insReconApply/queryInsConclusionInfo', {
        //     applyId: this.taskwaitting.ApplyId,
        //   }).then(res => {
        //     this.baseInfo = res.data.applyBaseInfo; //基本信息
        //     this.tableData = res.data.insConclusion; //-----------需要调接口查看返回对象，还是数组
        //   })
      },
      sumt() {
        this.loadsitu = false;
        this.adbtn = '确定';
        if (this.fraudAuditOpinion.auditDesc == '') { //复议说明如果为空 不提交------复议说明自段待更改
          this.$message.error('有必填项未填写！');
          this.confirm = false;
          return
        }
        this.Confirm = true;
      },
      SaveInf() { //提交
        this.loadsitu = true;
        this.adbtn = '提交中';
        // 提交信息
        this.post("/insReconApply/saveInsReconApply", {
          applyId: this.taskwaitting.ApplyId, //申请单id
          // taskNode: '', //复议节点----暂时不入
          // taskNodeName: '', //复议节点名称----暂时不入
          reviewRemark: this.fraudAuditOpinion.auditDesc, //复议说明
          approverUserCode: this.reApplyInf.userCode, //经办人
          reconDate: this.systermTime, //发起复议时间
          reconType: this.taskwaitting.reconType, //复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
          taskId: this.taskwaitting.taskId, //任务id
        }).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              message: '发起复议成功',
              type: 'sucess'
            });
          } else {
            this.$message.error(res.msg);
          }
        });
        this.Confirm = false;
      },
    },
    mounted() {
      this.propReApply.pageType='ComponentPage'?this.ManagerBtn=false;'';//是否显示提交按钮
      this.getSystermTime();
      console.log(JSON.parse(localStorage.getItem('QTToReconsiderParams')));
      this.taskwaitting = JSON.parse(localStorage.getItem('QTToReconsiderParams'));
      this.reApplyInf = JSON.parse(localStorage.getItem('userInf'));
      console.log(this.reApplyInf)
      this.getInf();
      //传入isManager判断是否可编辑
      // if (this.isManager == 'Manager') {
      //   this.manager = true;
      //   this.ReIllustrate = false;
      //   this.ManagerBtn = false;
      //   this.HintStar = false;
      // }
    }
  }

</script>
<style scoped>
  .aAntiApplyInf {
    min-width: 1366px;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .content {
    height: calc(100% - 95px);
    overflow: auto;
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

  /* .AntiInf li:nth-of-type(1) p,
  .AntiInf li:nth-of-type(3) p {
    width: 33.3%;
    float: left;
    margin: 10px 0;
  } */

  .AntiInf {
    padding-top: 10px;
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
