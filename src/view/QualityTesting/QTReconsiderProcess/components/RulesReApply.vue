<template>
  <div class="aAntiApplyInf ReApply RulesReApply">
    <!-- 合规复议申请  -->
    <div class="content">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">复议基本信息</span>
          </template>
          <div class="checkedInf checkedInf_li_width_triplet clearFix">
            <ul>
              <div class=" CreditForm_div_border clearFix">
                <li>
                  <label class="label_width_166">进件编号： </label>
                  <span>{{applyInfoPool.applySubNo}} </span>
                </li>
                <li>
                  <label class="label_width_166">客户名称： </label>
                  <span>{{applyInfoPool.custName}} </span>
                </li>
                <li>
                  <label class="label_width_166">证件类型： </label>
                  <span>{{applyInfoPool.certTypeTxt}} </span>
                </li>
              </div>
              <div class=" clearFix">
                <li>
                  <label class="label_width_166">证件号码： </label>
                  <span>{{applyInfoPool.certCode}} </span>
                </li>
                <li>
                  <label class="label_width_166">移动电话： </label>
                  <span>{{applyInfoPool.mobile}} </span>
                </li>
                <li>
                  <label class="label_width_166">申请类型： </label>
                  <span>{{applyInfoPool.appTypeTxt}} </span>
                </li>
              </div>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">合规质检结论</span>
          </template>
          <div class="height_auto">
            <el-table :data="tableData" border style="width: 100%">
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
          <div class="AntiConclution checkedInf checkedInf_li_width_triplet clearFix">
            <ul style="margin:20px 0;">
              <div class=" CreditForm_div_border clearFix">
                <li class="li_triplet_two_rows">
                  <label class="label_width_166">复议说明： </label>
                  <span class="text_area_span_minus170">{{auditDesc.reviewRemark}} </span>
                </li>
              </div>
              <div>
                <li>
                  <label class="label_width_166">复议申请人：</label>
                  <span>{{auditDesc.approverUserCode}} </span>
                </li>
                <li>
                  <label class="label_width_166">复议申请日期： </label>
                   <span>{{ systermTime | dateFilter}}</span>
                </li>
              </div>

            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
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
        Confirm: false,
        adbtn: '确认',
        ReIllustrate: false,
        loadsitu: false,
        tableData: [],
        activeNames: ['0', '1', "2", "3"], //折叠面板 默认显示下标
        applyInfoPool: {
          // applySubno: '',
        },
        auditDesc: {
          reviewRemark: ''
        },
      }
    },
    props: ['propReApply', 'applyId'],
    watch: {
      '$route' (to, from) {
        if (to.path === '/RulesReApply') {
          this.mountedInf();
        }
      }
    },
    methods: {
      mountedInf() {
        this.getSystermTime();
        this.reApplyInf = JSON.parse(localStorage.getItem('userInf'));
        this.getInf();
        this.getDec(); //查询复议说明字段
      },
      getSystermTime() { // 获取系统时间-质检结论-质检日期取值---基础接口
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.systermTime = res.data;
          }
        })
      },
      getInf() { //查询页面信息
        // this.get('/insReconApply/queryInsConclusionInfo', {
        //   applyId: this.applyId
        // }
        this.get('/insReconApply/queryInsConclusionInfo?applyId=' + this.applyId + "&" + Math.random())
          .then(res => {
            this.tableData = [];
            this.applyInfoPool = res.data.applyBaseInfo; //基本信息
            this.tableData.push(res.data.insConclusion); //-----------需要调接口查看返回对象，还是数组
          })
      },
      getDec() { //查询复议说明字段
        this.get('/insReconApply/getReconApplyReconApproval?applyId=' + this.applyId + "&" + Math.random())
          .then(res => {
            this.auditDesc = res.data.insReconApplyList[res.data.insReconApplyList.length - 1];
          })
      }
    },
    mounted() {
      this.mountedInf();
    }
  }

</script>
<style scoped>
  .aAntiApplyInf {
    min-width: 1366px;
    height: 100%;
    width: 100%;
    /* overflow-x: hidden; */
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

  .area {
    display: inline-block;
    border: 1px solid #ebeef5;
    height: 70px;
    width: 800px;
    border-radius: 4px;
    vertical-align: top;
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
