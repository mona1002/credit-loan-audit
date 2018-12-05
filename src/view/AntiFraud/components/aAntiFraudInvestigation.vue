<!-- 反欺诈调查 -(反欺诈主管、专员用)  -->
<template>
  <div class="aAntiFraudInvestigation">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="tableData" style="width: 100%" @row-dblclick='searchInf' border>
            <el-table-column prop="creatTime" label="提报时间" width="155">
            </el-table-column>
            <el-table-column prop="applySubno" label="进件编号" width="165">
            </el-table-column>
            <el-table-column prop="caseNum" label="案件编号" width="175">
            </el-table-column>
            <el-table-column prop="applyCustName" label="客户姓名" width="100">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="165">
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
                v-model="reason" readonly>
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
            <!-- <div class=" CreditForm_div_border clearFix"> -->
              <li class="text_area_li triplet_textarea_width">
                <label class="label_width_166">网查：</label>
                <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                  :readonly=' !showBtn' v-model="fraudAuditInfo.netCheck">
                </el-input>
              </li>
            <!-- </div> -->
            <!-- <div class=" CreditForm_div_border clearFix"> -->
              <li class="text_area_li triplet_textarea_width margin_top_5">
                <label class="label_width_166">114：</label>
                <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                  :readonly=' !showBtn' v-model="fraudAuditInfo.oof">
                </el-input>
              </li>
            <!-- </div> -->
            <li class="text_area_li triplet_textarea_width margin_top_5">
              <label class="label_width_166">其他：</label>
              <el-input class="text_area_li_3rows text_area_span_minus170" type="textarea" :rows="3" resize="none"
                :readonly=' !showBtn' v-model="fraudAuditInfo.other">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电核区</span>
          <div class="title_icon" v-if="showBtn">
            <span @click.stop="add">
              <i class="title_icon_img addIcon"></i>
              <span class="title_icon_span">添加</span>
            </span>
            <span @click.stop="delet">
              <i class="title_icon_img deleteIcon"></i>
              <span class="title_icon_span">删除</span>
            </span>
          </div>
        </template>
        <div class="height_auto">
          <el-table :data="fraudTelCheckList" style="width: 100%" highlight-current-row border @current-change="handleCurrentChanges">
            <el-table-column type="index" :index='1' label="序号" width="50">
            </el-table-column>
            <el-table-column label="姓名" width="120">
              <template slot-scope="scope">
                <el-input v-model="scope.row.name" placeholder="请输入姓名" :readonly="!showBtn || scope.row.isInitFlag=='0' "></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="phoneNum" label="手机号码" width="180">
              <template slot-scope="scope">
                <el-input v-model="scope.row.phoneNum" placeholder="请输入内容" @blur="regPhone(scope.row)" :readonly="!showBtn || scope.row.isInitFlag=='0'"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="relation" label="关系" width="180">
              <template slot-scope="scope">
                <el-select v-model="scope.row.relation" placeholder="请选择" :disabled="!showBtn || scope.row.isInitFlag=='0' ">
                  <el-option v-for="item in relations" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="record" label="记录录入" min-width="150">
              <template slot-scope="scope">
                <el-input v-model="scope.row.record" placeholder="请输入内容" :readonly=' !showBtn'></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="button" v-if="showBtn">
      <el-button type="primary" @click="bigSure">确定</el-button>
    </div>
    <!-- 弹框 -->
    <el-dialog title='命中规则名称：' :visible.sync="dialogVisible" width="860px">
      <div class="numBody">
        <div class="markIcon">
          <span @click="relieve">
            <img src="../../../../static/images/relieve.png" class="icon">
            <span>解除</span>
          </span>
          <span @click="recovery">
            <img src="../../../../static/images/back.png" class="icon">
            <span>恢复</span>
          </span>
        </div>
        <div>
          <el-table ref="multipleTable" :data="recordList" style="width: 100%" height="250" border
            highlight-current-row @selection-change="handleSelectionChange">
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
              :page-sizes="[10, 20,50]" :page-size='setPageSize' layout="total, sizes, prev, pager, next, jumper"
              :total="totals.totalRecord">
            </el-pagination>
          </div>
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
        showBtn: this.PropshowBtn,
        ind: '',
        // query: {
        //   // id: '',
        //   // applyId: '',
        // },
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
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
        isValidPhone: /^1[345789]\d{9}$/,
        regLandlinePhone: /^(0[0-9]{2,3}-?)?([0-9]{7,8})$/,
        relations: [{
            'value': '01',
            'label': '夫妻'
          },
          {
            'value': '02',
            'label': '父母'
          },
          {
            'value': '03',
            'label': '子女'
          },
          {
            'value': '04',
            'label': '兄弟'
          },
          {
            'value': '05',
            'label': '姐妹'
          },
          {
            'value': '06',
            'label': '兄妹'
          },
          {
            'value': '07',
            'label': '姐弟'
          },
          {
            'value': '08',
            'label': '朋友'
          },
          {
            'value': '09',
            'label': '同事'
          },
          {
            'value': '10',
            'label': '房东'
          },
          {
            'value': '11',
            'label': '亲属'
          },
          {
            'value': '12',
            'label': '其他'
          },
          {
            'value': '13',
            'label': '本人'
          },
          {
            'value': '14',
            'label': '单位'
          }
        ],
      }
    },
    props: {
      applyId: {
        default: '',
        required: true,
        type: String
      },
      PropshowBtn: {
        default: false,
        type: Boolean
      }
    },
    mounted() {
      this.infoList();
    },
    methods: {
      // 点击基本信息查询其他信息
      searchInf(row) {
        if (this.PropshowBtn == true) {
          this.ind = this.tableData.indexOf(row);
          if (this.ind == '0') {
            this.showBtn = true;
          } else {
            this.showBtn = false;
          }
        }
        this.appinfoId = row.id;
        this.request(this.appinfoId)
      },
      // 基本信息列表      
      infoList() {
        this.get('antiFraud/getFraudApplyInfosByApplyId', {
          applyId: this.applyId
        }).then(res => {
          if (res.statusCode == 200 && res.data) {
            this.tableData = res.data;
            this.appinfoId = this.tableData[0].id;
            this.request(this.appinfoId)
          }
        });
      },
      /*先查询列表*/
      request(val) {
        this.post('antiFraud/getAntiFraudSurveyInfo', {
          'appinfoId': val //'1',
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
                this.reason = this.fraudApplyInfo.mainreaName + this.fraudApplyInfo.subreaName + this.fraudApplyInfo
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
              this.fraudTelCheckList = [];
            } else {
              this.fraudTelCheckList = res.data.fraudTelCheckList;
              for (var i = 0; i < res.data.fraudTelCheckList.legth; i++) {
                this.createTime = res.data.fraudTelCheckList[i].createTime;
              };
              for (var i = 0; i < this.fraudTelCheckList.legth; i++) {
                this.fraudTelCheckList[i].createTime = this.createTime;
              };
            };
          }
        })
      },
      /*保存*/
      bigSure() {
        //当前审核人编号 登陆人	
        this.fraudAuditInfo.auditCode = JSON.parse(localStorage.getItem('userInf')).userCode;
        //当前审核人姓名 登陆人
        this.fraudAuditInfo.auditName = JSON.parse(localStorage.getItem('userInf')).userName;
        this.post('antiFraud/saveAntiFraudSurveyInfo', {
          "appinfoId": this.appinfoId, //'1', // 反欺诈申请id
          "fraudAuditInfo": {
            "appinfoId": this.appinfoId, //'1', // 反欺诈申请id
            "netCheck": this.fraudAuditInfo.netCheck, // 网查
            "oof": this.fraudAuditInfo.oof, // 114
            "other": this.fraudAuditInfo.other, // 其他
            "auditCode": this.fraudAuditInfo.auditCode, // 当前审核人编号
            "auditName": this.fraudAuditInfo.auditName, // 当前审核人姓名
            "id": this.fraudAuditInfo.id, // 当前审核人姓名
            "userName": this.fraudAuditInfo.userName, //操作人姓名
            "userCode": this.fraudAuditInfo.userCode //操作人code
          },
          "fraudTelCheckList": this.fraudTelCheckList
        }).then(res => {
          if (res.statusCode == 200) {
            this.request(this.appinfoId);
            this.$message({
              message: "保存成功！",
              type: 'success'
            })
          } else {
            this.$message({
              message: "保存失败！",
              type: 'error'
            })
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
      add: function (event) {
        event.stopPropagation();
        this.fraudTelCheckList.push({
          "appinfoId": this.appinfoId, // 反欺诈申请id
          "phoneNum": "", // 号码
          "relation": "", // 关系
          "record": "", // 记录录入
          "applyId": this.applyId,
          'name': '', //姓名
          "createTime": '' //时间顺序 保证页面上的列表顺序不会乱
        });
      },
      delet: function (event) {
        event.stopPropagation();
        for (var i = 0; i < this.fraudTelCheckList.length; i++) {
          if (this.fraudTelCheckList[i] == this.currentRow && this.fraudTelCheckList[i].isInitFlag == '0') {
            return
          } else if (this.fraudTelCheckList[i] == this.currentRow) {
            this.fraudTelCheckList.splice(i, 1);
          }
        }
      },
      regPhone(phone) {
        if (!this.isValidPhone.test(phone.phoneNum) && !this.regLandlinePhone.test(phone.phoneNum)) {
          phone.phoneNum = '';
        }
      },
      sure() {
        this.dialogVisible = false;
      },
      handlDetail(index, row) {
        let query={};
        // this.query.id = row.id;
        // this.query.applyId = row.applyId;
        query = Object.assign({}, query, row)
        this.$router.push({
          name: 'MatchingInf',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("internalObj", JSON.stringify(query));
      },
      /*命中客户数 查询*/
      inquiry(row) {
        if (row) {
          if (row.custCount == 0) {
            return
          }
        };
        this.dialogVisible = true;
        this.ruleId = row.ruleId;
        this.check(this.pageParam, this.ruleId);
      },
      // 弹窗list查询
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
      handleSizeChange(val) { //每页 N 条
        this.pageParam.pageSize = val;
        this.pageParam.pageNum = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.check(this.pageParam, this.ruleId);
        };
      },
      handleCurrentChange(val) { //当前页: N
        this.pageParam.pageNum = val;
        this.check(this.pageParam, this.ruleId);
      },
      /*多选框*/
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      /*解除*/
      relieve() {
        if (this.multipleSelection.length == 0) return;
        var fg = this.multipleSelection.every(function (item) {
          return (item.statusTxt == '未解除')
        });
        if (!fg) {
          this.$confirm('只能针对未解除状态数据进行操作，请重新选择！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
        }
        if (fg) {
          this.newArray = [];
          for (var i = 0; i < this.multipleSelection.length; i++) {
            this.newArray.push({
              'id': this.multipleSelection[i].id,
              'status': '01'
            });
          };
          this.post("antiFraud/batchUpdateHitRule",
            this.newArray
          ).then(res => {
            if (res.statusCode == 200) {
              this.check(this.pageParam, this.ruleId);
              this.$message({
                message: "解除成功！",
                type: 'success'
              })
            } else {
              this.$message({
                message: "解除失败！",
                type: 'error'
              })
            }
          })
        }
      },
      /*恢复*/
      recovery() {
        if (this.multipleSelection.length == 0) return;
        var fg = this.multipleSelection.every(function (item) {
          return (item.statusTxt == '已解除')
        });
        if (!fg) {
          this.$confirm('只能针对已解除状态数据进行操作，请重新选择', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
        }
        if (fg) {
          this.newArray = [];
          for (var i = 0; i < this.multipleSelection.length; i++) {
            this.newArray.push({
              'id': this.multipleSelection[i].id,
              'status': '00'
            });
          };
          this.post("antiFraud/batchUpdateHitRule",
            this.newArray
          ).then(res => {
            if (res.statusCode == 200) {
              this.check(this.pageParam, this.ruleId);
              this.$message({
                message: "恢复成功！",
                type: 'success'
              })
            } else {
              this.$message({
                message: "恢复失败！",
                type: 'error'
              })
            }
          })
        }
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
    text-align: left;
    padding-left: 10px;
  }

  .table td {
    color: #666;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e6ebf5;
    padding-left: 10px;
  }

  /* 提报来源 */

  .tibao {
    width: 100%;
  }

  .tibao ul {
    width: 100%;
    text-align: center;
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
    width: 70px;
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
    cursor: pointer;
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
