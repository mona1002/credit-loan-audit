<!-- 反欺诈调查-(内匹、质检、复议详情用)-(调查记录只能查看,无添加删除按钮)  -->
<template>
  <div class="aAntiFraudInvestigation RaAntiFraudInvestigation AlertDialogBox">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="tableData" style="width: 100%" @row-dblclick='searchInf' border>
            <el-table-column prop="creatTime" label="提报时间" width="160">
            </el-table-column>
            <el-table-column prop="applySubno" label="进件编号" width="170">
            </el-table-column>
            <el-table-column prop="caseNum" label="案件编号" width="175">
            </el-table-column>
            <el-table-column prop="applyCustName" label="客户姓名" width="100">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="170">
            </el-table-column>
            <el-table-column prop="proName" label="申请产品" width="100">
            </el-table-column>
            <el-table-column prop="operOrgName" label="进件机构" width="130">
            </el-table-column>
            <el-table-column prop="salePersonName" label="销售人员" width="100">
            </el-table-column>
            <el-table-column prop="applyPersonName" label="提报人" width="100">
            </el-table-column>
            <el-table-column prop="appSuborgName" label="提报组别" min-width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">提报来源</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">提报人工号：</label>
                <span>{{fraudApplyInfo.applyCode}}</span>
              </li>
              <li>
                <label class="label_width_166">提报人姓名：</label>
                <span>{{fraudApplyInfo.applyPersonName}}</span>
              </li>
              <li>
                <label class="label_width_166">提报渠道：</label>
                <span>{{fraudApplyInfo.channelTxt}}</span>
              </li>
            </div>
            <li class="text_area_li triplet_textarea_width margin_top_5">
              <label class="label_width_166">理由：</label>
              <span class="text_area_span text_area_span_minus170">{{reason}}</span>
              <!-- <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                v-model="reason" disabled>
              </el-input> -->
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">命中规则</span>
        </template>
        <div class="height_auto">
          <el-table :data="hitRuleList" style="width: 100%" @cell-click="inquiry" border>
            <el-table-column type="index" :index='1' label="序号" width="50">
            </el-table-column>
            <el-table-column prop="ruleContent" label="命中规则名称">
            </el-table-column>
            <el-table-column prop="custCount" label="命中客户数">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">调查记录</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li triplet_textarea_width">
                <label class="label_width_166">网查：</label>
                <span class="text_area_span text_area_span_minus170">{{fraudAuditInfo.netCheck}}</span>
                <!-- <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                  v-model="fraudAuditInfo.netCheck" disabled>
                </el-input> -->
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li triplet_textarea_width margin_top_5">
                <label class="label_width_166">114：</label>
                <span class="text_area_span text_area_span_minus170">{{fraudAuditInfo.oof}}</span>
                <!-- <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                  v-model="fraudAuditInfo.oof" disabled>
                </el-input> -->
              </li>
            </div>
            <li class="text_area_li triplet_textarea_width margin_top_5">
              <label class="label_width_166">其他：</label>
              <span class="text_area_span text_area_span_minus170">{{fraudAuditInfo.other}}</span>
              <!-- <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                v-model="fraudAuditInfo.other" disabled>
              </el-input> -->
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电核区</span>
        </template>
        <div class="height_auto">
          <el-table :data="fraudTelCheckList" style="width: 100%" highlight-current-row border @current-change="handleCurrentChanges">
            <el-table-column type="index" :index='1' label="序号" width="50">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="phoneNum" label="手机号码" width="180">
            </el-table-column>
            <el-table-column prop="relation" label="关系" width="180">
            </el-table-column>
            <el-table-column prop="record" label="记录录入" min-width="150">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 弹框 -->
    <el-dialog :title='aa' :visible.sync="dialogVisible" width="860px">
      <div class="numBody">
        <el-table ref="multipleTable" :data="recordList" style="width: 100%" height="250" border highlight-current-row
          @selection-change="handleSelectionChange">
          <el-table-column type="index" :index='1' label="序号" min-width="50">
          </el-table-column>
          <el-table-column type="selection" min-width="50">
          </el-table-column>
          <el-table-column label="进件编号" prop="applySubNo" min-width="120">
          </el-table-column>
          <el-table-column prop="ruleContent" label="命中客户名称" min-width="120">
          </el-table-column>
          <el-table-column prop="statusTxt" label="状态" min-width="80">
          </el-table-column>
          <el-table-column label="操作" min-width="50" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" @click="handlDetail(scope.$index, scope.row)">详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[10, 20,50]" :page-size='setPageSize' layout="total, sizes, prev, pager, next, jumper" :total="totals.totalRecord">
          </el-pagination>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        tableData: [],
        // query: {
        //   id: '',
        //   applySubNo: '',
        // },
        aa: '命中规则名称：',
        activeNames: ['1', '2', '3', '4', '5'],
        fraudApplyInfo: '',
        hitRuleList: [],
        fraudTelCheckList: [],
        createTime: '',
        fraudAuditInfo: {
          "appinfoId": "", // 反欺诈申请id
          "netCheck": "", // 网查
          "oof": "", // 114
          "other": "", // 其他
          "auditCode": "", // 当前审核人编号
          "auditName": "", // 当前审核人姓名
          "userName": '', //操作人姓名
          "userCode": '' //操作人code
        },
        dialogVisible: false,
        totals: {},
        currentPage: 1, // 默认显示的当前页
        setPageSize: 10,
        recordList: [],
        /*反欺诈申请ID*/
        appinfoId: '',
        /*命中规则列表参数*/
        ruleId: '',
        pageParam: {
          pageSize: 10,
          pageNum: 1
        },
        /*存放多选时选中的数据*/
        multipleSelection: [],
        //根据judgeFlag判断取 反欺诈专员 还是 反欺诈主管的申请ID
        judgeFlag: '',
        //理由：主原因+子原因+描述
        reason: '',
        //恢复、解除的新数组
        newArray: [],
      }
    },
    props: ['applyId', 'isShow'],
    mounted() {
      this.infoList();
    },
    methods: {
      // 点击基本信息查询其他信息
      searchInf(row) {
        this.request(row.id)
      },
      // 基本信息列表
      infoList() {
        this.get('antiFraud/getFraudApplyInfosByApplyId', {
          applyId: this.applyId
        }).then(res => {
          if (res.statusCode == 200 && res.data) {
            this.tableData = res.data ? res.data : [];
            if (this.tableData.length > 0) this.request(this.tableData[0].id);
          }
        });
      },
      /*先查询列表*/
      request(val) {
        this.post('antiFraud/getAntiFraudSurveyInfo', {
          appinfoId: val
        }).then(res => {
          if (res.statusCode == 200 && res.data != null) {
            //基本信息
            if (res.data.fraudApplyInfo == null) {
              this.fraudApplyInfo = this.fraudApplyInfo;
            } else {
              this.fraudApplyInfo = res.data.fraudApplyInfo;
              //提报来源  理由
              if (this.fraudApplyInfo.mainreaName == null && this.fraudApplyInfo.subreaName == null && this.fraudApplyInfo
                .applyDesc == null) {
                this.reason = '';
              } else {
                this.reason = this.fraudApplyInfo.mainreaName + '' + this.fraudApplyInfo.subreaName + this.fraudApplyInfo
                  .applyDesc;
                var reg = /null/g;
                this.reason = this.reason.replace(reg, '');
              };
            };
            //命中规则
            if (res.data.hitRuleList == null) {
              this.hitRuleList = [];
            } else {
              this.hitRuleList = res.data.hitRuleList;
            };
            if (res.data.fraudAuditInfo == null) {
              this.fraudAuditInfo = {};
            } else {
              this.fraudAuditInfo = res.data.fraudAuditInfo;
            };
            //电核区
            if (res.data.fraudTelCheckList == null) {
              this.fraudTelCheckList = this.fraudTelCheckList;
            } else {
              this.fraudTelCheckList = res.data.fraudTelCheckList;
              for (var i = 0; i < this.fraudTelCheckList.length; i++) {
                this.createTime = this.fraudTelCheckList[i].createTime;
                if (this.fraudTelCheckList[i].relation == '01') {
                  this.fraudTelCheckList[i].relation = '夫妻';
                } else if (this.fraudTelCheckList[i].relation == '02') {
                  this.fraudTelCheckList[i].relation = '父母';
                } else if (this.fraudTelCheckList[i].relation == '03') {
                  this.fraudTelCheckList[i].relation = '子女';
                } else if (this.fraudTelCheckList[i].relation == '04') {
                  this.fraudTelCheckList[i].relation = '兄弟';
                } else if (this.fraudTelCheckList[i].relation == '05') {
                  this.fraudTelCheckList[i].relation = '姐妹';
                } else if (this.fraudTelCheckList[i].relation == '06') {
                  this.fraudTelCheckList[i].relation = '兄妹';
                } else if (this.fraudTelCheckList[i].relation == '07') {
                  this.fraudTelCheckList[i].relation = '姐弟';
                } else if (this.fraudTelCheckList[i].relation == '08') {
                  this.fraudTelCheckList[i].relation = '朋友';
                } else if (this.fraudTelCheckList[i].relation == '09') {
                  this.fraudTelCheckList[i].relation = '同事';
                } else if (this.fraudTelCheckList[i].relation == '10') {
                  this.fraudTelCheckList[i].relation = '房东';
                } else if (this.fraudTelCheckList[i].relation == '11') {
                  this.fraudTelCheckList[i].relation = '亲属';
                } else if (this.fraudTelCheckList[i].relation == '12') {
                  this.fraudTelCheckList[i].relation = '其他';
                } else if (this.fraudTelCheckList[i].relation == '13') {
                  this.fraudTelCheckList[i].relation = '本人';
                } else if (this.fraudTelCheckList[i].relation == '14') {
                  this.fraudTelCheckList[i].relation = '单位';
                }
              };
              for (var i = 0; i < this.fraudTelCheckList.legth; i++) {
                this.fraudTelCheckList[i].createTime = this.createTime;
              };
            };
          }
        })
      },
      handleCurrentChanges(val) {
        if (val == null) {
          this.currentRow = '';
        } else {
          this.currentRow = val;
        };
      },
      sure() {
        this.dialogVisible = false;
      },
      handlDetail(index, row) {
        // let query={};
        //  query.applyId = row.applyId;
        //  query = Object.assign(query, row)
        this.$router.push({
          name: 'MatchingInfQuery',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("Query", JSON.stringify(row));
      },
      /*命中客户数 查询*/
      inquiry(row) {
        if (this.isShow == false) {
          return
        } else {
          if (row) {
            if (row.custCount == 0) {
              return
            }
          };

          this.dialogVisible = true;
          this.ruleId = row.ruleId;
          this.check(this.pageParam, this.ruleId);
        }

      },
      check(param, id) {
        this.post("antiFraud/getHitRuleCustList", {
          'pageParam': param,
          'ruleId': id
        }).then(res => {
          if (res.statusCode == 200) {
            this.totals = res.data;
            this.recordList = res.data.recordList;
          }
        })
      },
      handleSizeChange(val) {
        this.pageParam.pageSize = val;
        this.pageParam.pageNum = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.check(this.pageParam, this.ruleId);
        };
      },
      handleCurrentChange(val) {
        this.pageParam.pageNum = val;
        this.check(this.pageParam, this.ruleId);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    }
  }

</script>
<style type="text/css" scoped>
  .aAntiFraudInvestigation {
    min-width: 1327px;
    font-size: 14px;
    color: #475669;
  }

  /* 折叠面板头部背景色和icon */

  .table {
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #e6ebf5;
    border-collapse: collapse;
    width: 100%;
  }

  .table thead {
    width: 100%;
  }

  .table th {
    color: #1f2d3d;
    font-weight: 800;
    height: 35px;
    line-height: 35px;
    border: 1px solid #e6ebf5;
  }

  .table td {
    color: #666;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e6ebf5;
    text-align: left;
    padding-left: 10px;
  }

  /* 提报来源 */

  .tibao {
    width: 100%;
  }

  .tibao ul {
    width: 100%;
    padding-left: 10px;
    margin-top: 20px;
    height: 28px;
  }

  .tibao ul li {
    float: left;
    width: 33.3%;
    line-height: 28px;
  }

  .tibao ul li label {
    float: left;
    width: 150px;
    display: inline-block;
    text-align: right;
  }

  .tibao ul li p {
    float: left;
    width: 200px;
    display: inline-block;
    text-align: left;
  }

  .tibao div {
    width: 100%;
    padding-right: calc(66.6% - 350px);
    height: 75px;
    margin: 20px 0;
  }

  .tibao div label {
    width: 150px;
    text-align: right;
    display: inline-block;
    float: left;
    line-height: 75px;
  }

  .tibao div div {
    width: calc(100% - 150px);
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
    margin: 0 0;
  }

  /* 命中规则 */

  .tableDiv {
    width: calc(33.3% + 350px);
  }

  /* 调查记录 */

  .record ul li {
    width: 100%;
    padding-right: calc(66.6% - 350px);
  }

  .record ul li label {
    width: 150px;
    display: inline-block;
    float: left;
    height: 75px;
    line-height: 75px;
    text-align: right;
    padding-top: 20px;
  }

  .record ul li div {
    width: calc(100% - 150px);
    display: inline-block;
    margin-top: 20px;
  }

  /* 电核*/

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .right .rightSpans {
    margin-left: 10px;
    display: inline-block;
    width: 66px;
    height: 40px;
    float: left;
  }

  .right .rightSpans img {
    padding-top: 5px;
    float: left;
  }

  .right .rightSpans span {
    margin-left: 10px;
    float: left;
  }

  .right .rightSpans .icon {
    color: #20a0ff;
    font-size: 20px;
  }

  /* 确定按钮 */

  .button {
    width: 100%;
  }

  .button button {
    margin-right: calc(66.6% - 350px);
    float: right;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #409eff;
    border-color: #409eff;
  }

  /* 弹层 */

  .numBody .markIcon span {
    height: 30px;
    display: inline-block;
  }

  .numBody .markIcon span img {
    float: left;
  }

  .numBody .markIcon span span {
    height: 30px;
    line-height: 30px;
    float: left;
    padding: 0 5px;
    font-size: 14px;
  }

</style>
