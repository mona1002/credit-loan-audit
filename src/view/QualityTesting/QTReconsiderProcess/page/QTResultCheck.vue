<template>
  <div class="regularQT">
    <!-- 质检复议流程  初终审质检结论查看页 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批信息 </span>
        </template>
        <div class="info">
          <p>
            <label>进件编号： </label>
            <span>{{applyInfoPool.applySubno}} </span>
          </p>
          <p>
            <label>证件号码： </label>
            <span>{{applyInfoPool.certCode}} </span>
          </p>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">质检结论</span>
        </template>
        <div class="QTResult_class">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label='质检结果' prop="name" width="120"></el-table-column>
            <el-table-column label='差错类型' prop="name" width="150"></el-table-column>
            <el-table-column label='差错描述' prop="name" width="150"></el-table-column>
            <el-table-column label='备注（非必填）' prop="name"></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 底部按钮 -->
    <div class="QT_btns_wrap">
      <el-button @click="NoReconsider">
        <img src="../../../../../static/images/back.png">
        <label class="labelTxt">无需复议</label>
      </el-button>
      <el-button @click="Reconsider">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">发起复议</label>
      </el-button>
      <el-button @click="getLcgjList">
        <img src="../../../../../static/images/liucheng.png">
        <label class="labelTxt">流程轨迹</label>
      </el-button>
      <el-button @click="RiskControl">
        <img src="../../../../../static/images/bigdata.png">
        <label class="labelTxt">大数据风控</label>
      </el-button>
    </div>
    <!-- 弹窗 -->
    <!-- 流程轨迹 -->
    <div class="liuchenggj">
      <el-dialog title='流程轨迹' :visible.sync="lcdialogVisible" :modal="false" width="860px" top="20vh">
        <div class="splcBody">
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
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="lcdialogVisible = false">返回</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 大数据风控 -->
    <div class="bigDataLog">
      <el-dialog title="提示" :visible.sync="bigDataLogVisible" :modal="false" width="420px" top="35vh">
        <span>此进件不存在大数据风控明细！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="this.bigDataLogVisible=false">确定</el-button>
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
          lcgjData:'',
        lcdialogVisible: false,
        bigDataLogVisible: false,
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
        activeNames: ['1', "2"], //折叠面板 默认显示下标
        applyInfoPool: {
          applySubno: '',
        },
      }
    },
    methods: {
      NoReconsider() {
        this.$router.push('/SelfTaskList')
      },
      Reconsider() {
        this.$router.push('/ReApply')
      },
      // 流程轨迹
      getLcgjList() {
        console.log('流程轨迹')
        this.lcdialogVisible = true;
        console.log(this.processInstanceId)
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processInstanceId + '&' + Math.random())
          .then(res => {
            console.log(res);
            if (res.statusCode == '200') {
              this.lcgjData = res.data;
            } else {
              this.$message(res.msg);
            }
          })
      },
      //大数据风控
      RiskControl() {
        // console.log('大数据')
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          // applyId: this.applyId
          applyId: '申请单id'
        }).then(res => {
          //console.log(res.data);
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
      // this.processInstanceId = JSON.parse(localStorage.getItem('未存储，未确定，待更改-RtaskInWaitting')).processInstanceId;

    }
  }

</script>
<style scoped>
  .regularQT {
    min-width: 1366px;
    overflow: auto;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .info {
    padding-top: 10px;
    padding-left: 45px;
  }

  .info p {
    float: left;
    width: 49%;
    margin-bottom: 10px;
  }

  .QTResult_class {
    padding: 10px;
  }

  .regularQT .QT_btns_wrap {
    padding-left: 600px;
    margin-top: 100px;
  }

</style>
