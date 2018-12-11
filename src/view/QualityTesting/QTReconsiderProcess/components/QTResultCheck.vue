<template>
  <div class="regularQT selfRegularQT">
    <!-- 质检复议流程  初终审本人质检结论查看页 -->
    <!-- 审批信息 ============checked  待调试=一接口返回数据格式带确认-->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="0">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">审批信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" clearFix">
              <li>
                <label class="label_width_166">客户名称：</label>
                <span>{{baseInfo.custName }} </span>
              </li>
              <li>
                <label class="label_width_166">产品名称：</label>
                <span>{{baseInfo.proName }}</span>
              </li>
            </div>
          </ul>
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
        <div class="result height_auto">
          <el-table :data="tableData" style="width:100%;" border>
            <el-table-column prop="checkResultTxt" label="质检结果" width="120"></el-table-column>
            <el-table-column prop="errorType" label="差错类型" width="252"> </el-table-column>
            <el-table-column prop="errorDescribe" label="差错描述"> </el-table-column>
            <el-table-column prop="remark" label="备注"> </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 底部按钮 -->
    <div class="approve_btn_area approve_btn_area_width_700">
      <span class="approve_item" @click="NoReconsider">
        <i class="approve_icon backIcon"></i>
        <span class="approve_text">无需复议</span>
      </span>
      <span class="approve_item" @click="ToReconsider">
        <i class="approve_icon appro"></i>
        <span class="approve_text">发起复议</span>
      </span>
      <span class="approve_item" @click="RiskControl">
        <i class="approve_icon brokenLineIcon"></i>
        <span class="approve_text">大数据风控</span>
      </span>
    </div>
  </div>
</template>
<script>
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
        ToReconsiderParams: {
          id: '',
          taskId: '',
          reconType: '00' //复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
        }
      }
    },
    props: ['QTinf'],
    methods: {
      getInf() { //查询信息
        this.get('/insReconApply/queryInsConclusionInfo', {
          // applyId: this.taskwaitting.ApplyId,
          applyId: this.taskwaitting.applyId,
        }).then(res => {
          this.tableData = [];
          this.baseInfo = res.data.applyBaseInfo; //基本信息
          this.tableData.push(res.data.insConclusion); //-----------需要调接口查看返回对象，还是数组
        })
      },
      ToReconsider() {
        // this.ToReconsiderParams.ApplyId = this.taskwaitting.ApplyId;
        this.ToReconsiderParams.applyId = this.taskwaitting.applyId;
        this.ToReconsiderParams.taskId = this.taskwaitting.taskId;
        localStorage.setItem('QTToReconsiderParams', JSON.stringify(this.ToReconsiderParams)); //工作台部分信息，带入workbenchPass
        this.$router.push('/ReApply');
      },
      NoReconsider() {
        this.post('/insReconApply/noNeedReview', {
          // applyId: this.taskwaitting.ApplyId,
          applyId: this.taskwaitting.applyId,
          taskId: this.taskwaitting.taskId,
          reconType: '00' //复议类型(00:初终审本人，01:初终审主管首次，02:初终审主管二次)
        }).then(res => {
          if (res.statusCode == 200) {
            this._succe('提交成功')
            this.$router.push('/SelfTaskList?taskNodeName=checkApp_apply&flag=09')
            this._del('质检详情');
          } else {
            this._error(res.msg)
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
              this._error(res.msg);
            }
          })
      },
      //大数据风控
      RiskControl() {
        this.$router.push({
          name: 'PneCtrl',
          params: {
            newOne: true,
          }
        });
      },
    },
    mounted() {
      this.taskwaitting = JSON.parse(localStorage.getItem('QTSelfTW'));
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
