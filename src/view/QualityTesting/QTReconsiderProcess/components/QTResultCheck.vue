<template>
  <div class="regularQT">
    <!-- 质检复议流程  初终审本人质检结论查看页 -->
    <!-- 审批信息 ============checked  待调试=一接口返回数据格式带确认-->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="0">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批信息</span>
        </template>
        <div class="baseInf">
          <p>客户名称：{{baseInfo.custName }} </p>
          <p>产品名称： {{baseInfo.proName }}</p>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 质检结论 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">质检结论</span>
        </template>
        <div class="result">
          <el-table :data="tableData" border>
            <el-table-column prop="checkResultTxt" label="质检结果" width="120"></el-table-column>
            <el-table-column prop="errorType" label="差错类型" width="150"></el-table-column>
            <el-table-column prop="errorDescribe" label="差错描述" width="150"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 底部按钮 -->
    <div class="bottom_btn">
      <el-button @click="NoReconsider">
        <img src="../../../../../static/images/back.png">
        <label class="labelTxt">无需复议</label>
      </el-button>
      <el-button @click="ToReconsider">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">发起复议</label>
      </el-button>
      <!-- <el-button @click="getLcgjList">
        <img src="../../../../../static/images/liucheng.png">
        <label class="labelTxt">流程轨迹</label>
      </el-button> -->
      <el-button @click="RiskControl">
        <img src="../../../../../static/images/bigdata.png">
        <label class="labelTxt">大数据风控</label>
      </el-button>
    </div>
    <!-- ===================================弹出层===================================== -->
    <!-- 流程轨迹 -->
    <!-- <div class="liuchenggj">
      <el-dialog title='流程轨迹' :visible.sync="lcdialogVisible" :modal="false" width="860px" top="0">
        <div class="first">
          <el-table :data="lcgjData" style="width: 100%" height="296" border>
            <el-table-column type="index" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="taskNameTxt" label="任务节点" min-width="120">
            </el-table-column>
            <el-table-column prop="taskTypeTxt" label="任务类型" min-width="120">
            </el-table-column>
            <el-table-column prop="activationTime" label="进入本环节时间" min-width="180">
            </el-table-column>
            <el-table-column prop="taskStatusTxt" label="任务状态" min-width="100">
            </el-table-column>
            <el-table-column prop="operatorCode" label="处理人" min-width="120">
            </el-table-column>
            <el-table-column prop="completeTime" label="处理时间" min-width="180">
            </el-table-column>
            <el-table-column prop="approvalOpinionTxt" label="处理结论" min-width="120">
            </el-table-column>
            <el-table-column prop="opinionExplain" label="意见说明" min-width="200" show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="lcdialogVisible = false">返回</el-button>
        </span>
      </el-dialog>
    </div> -->
    <!-- 大数据风控 -->
    <!-- <div class="bigDataLog"> -->
    <div class="liuchenggj">
      <el-dialog title="提示" :visible.sync="bigDataLogVisible" :modal="false" width="420px">
        <span>此进件不存在大数据风控明细！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="bigDataLogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import baseurl from '../../../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
        tableData: [],
        taskwaitting: {},
        baseInfo: {},
        activeNames: ['0', '1'],
        lcgjData: [],
        lcdialogVisible: false,
        processInstanceId: '',
        bigDataLogVisible: false,
        ToReconsiderParams: {
          id: '',
          taskId:'',
          flag: 'zhijian',
          busiState: '30',
          wayOf: '02', //质检
           channel:'00',
          reconType:'00'//复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
        }
      }
    },
    props: ['QTinf'],
    methods: {
      //     this.get('/insReconApply/queryInsConclusionInfo?applyId='+this.taskwaitting.ApplyId)      
      getInf() { //查询信息
        this.get('/insReconApply/queryInsConclusionInfo', {
          applyId: this.taskwaitting.ApplyId,
        }).then(res => {
          this.tableData=[];
          this.baseInfo = res.data.applyBaseInfo; //基本信息
          this.tableData.push( res.data.insConclusion ); //-----------需要调接口查看返回对象，还是数组
        })
      },
      ToReconsider() {
       console.log(this.taskwaitting)
      this.ToReconsiderParams.ApplyId=  this.taskwaitting.ApplyId;
      this.ToReconsiderParams.taskId=  this.taskwaitting.taskId;
         localStorage.setItem('QTToReconsiderParams', JSON.stringify(this.ToReconsiderParams)); //工作台部分信息，带入workbenchPass
         this.$router.push('/ReApply');
      },
      NoReconsider() {
        this.post('/insReconApply/noNeedReview', {
          applyId: this.taskwaitting.ApplyId,
          taskId: this.taskwaitting.taskId,
          reconType: '00' //复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
        }).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              message: '提交成功',
              type: 'success'
            })
            this.$router.push('/SelfTaskList?taskNodeName=checkApp_apply&flag=09')
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      //   流程轨迹
      getLcgjList() {
        this.lcdialogVisible = true;
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.taskwaitting.processInstanceId + '&' +
            Math.random())
          .then(res => {
            if (res.statusCode == '200') {
              this.lcgjData = res.data;
            } else {
              this.$message(res.msg);
            }
          })
      },
      //大数据风控
      RiskControl() {
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          applyId: this.taskwaitting.ApplyId
        }).then(res => {
          if (res.obj == null) {
            this.bigDataLogVisible = true;
          } else if (res.obj) {
            this.$router.push({
              path: '/PneCtrl'
            });
          }
        });
      },
    },
    mounted() {
      this.taskwaitting = JSON.parse(localStorage.getItem('QTSelfTW'));
      console.log(this.taskwaitting)
      //   this.processInstanceId =  this.taskwaitting.processInstanceId;
      this.getInf();
    }
  }

</script>
<style scoped>
  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .baseInf {
    padding: 5px 5px 5px 46px;
  }

  .baseInf p {
    width: 48%;
    display: inline-block;

  }

  .result {
    padding: 10px;
    max-height: 400px;
    overflow: auto;
  }

  .headFont {
    font-size: 16px;
  }

  .bottom_btn {
    text-align: center;
  }

  .bottom_btn img {
    vertical-align: middle;
  }

</style>
