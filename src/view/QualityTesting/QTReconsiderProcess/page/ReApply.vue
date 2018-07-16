<template>
  <div class="aAntiApplyInf ReApply overFlow_x">
    <!-- 复议申请页面 -->
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
               <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">复议基本信息</span>
          </template>
          <div class="checkedInf checkedInf_li_width_triplet clearFix">
            <ul>
              <li>
                  <label class="label_width_166">进件编号： </label>
                  <span>{{applyInfoPool.applySubNo}} </span>
                     </li>
              <li>
                  <label  class="label_width_166">证件号码： </label>
                  <span>{{applyInfoPool.certCode}} </span>
              </li>
              <li>
                  <label  class="label_width_166">客户名称： </label>
                  <span>{{applyInfoPool.custName}} </span>
                     </li>
              <li>
                  <label  class="label_width_166">移动电话： </label>
                  <span>{{applyInfoPool.mobile}} </span>
              </li>
              <li>
                  <label  class="label_width_166">证件类型： </label>
                  <span>{{applyInfoPool.certTypeTxt}} </span>
                     </li>
              <li>
                  <label  class="label_width_166">申请类型： </label>
                  <span>{{applyInfoPool.appTypeTxt}} </span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
               <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">合规质检结论</span>
          </template>
          <div class="AntiInf">
            <el-table :data="tableData" border style="width: 100%;height:auto !important">
              <el-table-column label='质检结果' prop="checkResultTxt" width="120"></el-table-column>
              <el-table-column label='差错类型' prop="errorType" width="150"></el-table-column>
              <el-table-column label='差错描述' prop="errorDescribe" width="150"></el-table-column>
              <el-table-column label='备注' prop="remark"></el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
               <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">复议申请信息</span>
          </template>
          <div class="AntiConclution">
            <ul>
              <li>
                <p class="description" style="position:relative;margin-top:10px;">
                  <i v-show="fraudAuditOpinion.auditDesc&&fraudAuditOpinion.auditDesc.length>=500" class="hint_word" style="left:165px;top:-15px;z-index:9999">输入长度不能超过500</i>
                  <label style='vertical-align:top;'>
                    <b class="required_Red" v-show="HintStar"> * </b> 复议说明： </label>
                  <el-input style="width:calc(100% - 200px);" :disabled="manager"  class="ccccc" type="textarea" :rows='3' resize='none' v-model='fraudAuditOpinion.auditDesc'
                    :maxlength="500"></el-input>
                </p>
              </li>
              <li class="ApplyInf">
                <p>
                  <label>复议申请人：</label>{{reApplyInf.userCode }}
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
        <el-button @click="calc">取消</el-button>
        <!-- <el-button @click="cancle">取消</el-button> -->
      </div>
      <!-- 弹窗 -->
      <!-- <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
        <span>确定操作？</span>
        <span slot="footer" class="dialog-footer">
          <el-button class="calbtn" @click="Confirm=false">取消</el-button>
          <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveInf">{{adbtn}}</el-button>
        </span>
      </el-dialog> -->
    </div>
</template>
<script>

  export default {
    data() {
      return {
        systermTime: null,
        reApplyInf: {},
        taskwaitting: {},
        manager: false,
        ManagerBtn: true,
        HintStar: true,
        // Confirm: false,
        // adbtn: '确认',
        ReIllustrate: false,
        // loadsitu: false,
        tableData: [],
        conclusionId: '', //提交入参
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
    watch: {
      '$route' (to, from) {
        if (to.path === '/ReApply') {
          this.mountedInf();
        }
      }
    },
    methods: {
      mountedInf() {
        console.log(this.propReApply)
        this.propReApply && this.propReApply.pageType == 'ComponentPage' ? this.ManagerBtn = false : ''; //是否显示提交按钮
        this.getSystermTime();
        this.taskwaitting = JSON.parse(localStorage.getItem('QTToReconsiderParams'));
        console.log('reconType:', this.taskwaitting.reconType)
        this.reApplyInf = JSON.parse(localStorage.getItem('userInf'));
        this.getInf();
      },
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
          this.tableData = [];
          this.applyInfoPool = res.data.applyBaseInfo; //基本信息
          this.tableData.push(res.data.insConclusion); //-----------需要调接口查看返回对象，还是数组
          this.conclusionId = res.data.insConclusion.id;
        })
        //  this.get('/insReconApply/queryInsConclusionInfo', {
        //     applyId: this.taskwaitting.ApplyId,
        //   }).then(res => {
        //     this.baseInfo = res.data.applyBaseInfo; //基本信息
        //     this.tableData = res.data.insConclusion; //-----------需要调接口查看返回对象，还是数组
        //   })
      },
      //       cancle(){
      // this.$router.push('SelfTaskList?taskNodeName=checkApp_trial_self&flag=09');
      // // this.$router.push('SelfTaskList?taskNodeName='+this.taskwaitting+'&flag='+this.taskwaitting.mark);
      //       },
      sumt() {
        // this.loadsitu = false;
        // this.adbtn = '确定';
        if (this.fraudAuditOpinion.auditDesc == '') { //复议说明如果为空 不提交------复议说明自段待更改
          this.$message.error('有必填项未填写！');
          // this.confirm = false;
          return
        }
               this.$confirm('您确定操作？', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showCancelButton: false
            }).then(() => {
              this.SaveInf();
            }).catch(() => {});
        // this.Confirm = true;
      },
      SaveInf() { //提交
        // this.loadsitu = true;
        // this.adbtn = '提交中';
        // 提交信息
        this.post("/insReconApply/saveInsReconApply", {
          applyId: this.taskwaitting.ApplyId, //申请单id
          // taskNode: '', //复议节点----暂时不入
          // taskNodeName: '', //复议节点名称----暂时不入
          reviewRemark: this.fraudAuditOpinion.auditDesc, //复议说明
          approverUserCode: this.reApplyInf.userCode, //经办人 code
          approverUserName: this.reApplyInf.userName, //经办人
          reconDate: this.systermTime, //发起复议时间
          // reconType: this.taskwaitting.reconType, //复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
          reconType: '00', //复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
          taskId: this.taskwaitting.taskId, //任务id
          conclusionId: this.conclusionId //质检结论id
        }).then(res => {
          if (res.statusCode == 200) {
            this.$router.push('SelfTaskList?taskNodeName=checkApp_trial_self&flag=09');
            this.$message({
              message: '发起复议成功',
              type: 'success'
            });
            this.del();
          } else {
            this.$message.error(res.msg);
          }
        });
        // this.Confirm = false;
      },
      calc() {
        this.$router.push('/SelfTaskList?taskNodeName=checkApp_trial_self&flag=09');
        this.del();
      },
      del() {
        this.$store.dispatch('delVisitedViews', {
          name: '复议申请'
        }).then((views) => {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.StatefullPath);
          } else {
            this.$router.push('/')
          }
        })
      }
    },
    mounted() {
      this.mountedInf();
    }
  }

</script>
<style scoped>
.ReApply{
  height: calc( 100% - 90px );
  widows: 100%;
  background: #ffffff;
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
