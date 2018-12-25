<template>
  <div class="internalMatch-class">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="0">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">客户历史贷款信息</span>
        </template>
        <div class="height_auto">
          <!--  v-loading="mobileLoading" -->
          <el-table :data="applyInfoHistory" border style="width: 100%;height:auto;" @row-dblclick="itemDbclickMobiel"
            highlight-current-row>
            <el-table-column prop="applySubno" label="进件编号" width="165">
            </el-table-column>
            <el-table-column prop="custName" label="客户名称" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="165">
            </el-table-column>
            <el-table-column prop="appDate" label="申请日期" width="105">
            </el-table-column>
            <el-table-column prop="iloanAmt" label="借款金额" width="90">
            </el-table-column>
            <el-table-column prop="proName" label="产品名称" width="100">
            </el-table-column>
            <el-table-column prop="operOrgName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="busiStateTxt" label="业务状态" width="110">
            </el-table-column>
            <el-table-column prop="hitRulesTxt" label="命中规则" width="180">
            </el-table-column>
            <el-table-column prop="remark" label="备注" show-overflow-tooltip min-width="100">
            </el-table-column>
          </el-table>
        </div>
        <!-- <div class="block tool-bar" v-show="CustomData.totalRecord>0">
          <el-pagination @size-change="handleSizeChangeMobile" @current-change="handleCurrentChangeMobile"
            :current-page="CudstomPageNum" :page-sizes="[10, 20,50]" :page-size="CudstomPageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="CustomData.totalRecord">
          </el-pagination>
        </div> -->
      </el-collapse-item>
      <!-- 移动电话 -->
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">移动号码类(手机号和联系人)</span>
          <span class="collapse_title_text internalMatch_head_tab">{{init.mobileInternalMatchTab}}</span>
        </template>
        <div class="height_auto">
          <el-table :data="mobileData.recordList" border style="width: 100%;height:auto;" @row-dblclick="itemDbclickMobiel"
            highlight-current-row v-loading="mobileLoading">
            <el-table-column prop="targetCustName" label="命中号码姓名" width="105">
            </el-table-column>
            <el-table-column prop="matchTel" label="命中号码" width="110">
            </el-table-column>
            <el-table-column prop="matchTelTypeTxt" label="电话类型" width="100">
            </el-table-column>
            <el-table-column prop="matchApplySubNo" label="进件编号" width="165">
            </el-table-column>
            <el-table-column prop="matchApplyCustName" label="客户名称" width="80">
            </el-table-column> 
            <el-table-column prop="certCode" label="身份证号" width="165">
            </el-table-column>
            <el-table-column prop="matchApplyWorkName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="matchApplyStateTxt" label="业务状态" width="110">
            </el-table-column>
            <el-table-column prop="hitRulesTxt" label="命中规则" width="180">
            </el-table-column>
            <el-table-column prop="remark" fit="false" class="mark-cell" label="备注" show-overflow-tooltip min-width="100">
            </el-table-column>
          </el-table>
        </div>
        <div class="block tool-bar" v-show="mobileData.totalRecord>0">
          <el-pagination @size-change="handleSizeChangeMobile" @current-change="handleCurrentChangeMobile"
            :current-page="MobilePageNum" :page-sizes="[10, 20,50]" :page-size="MobilePageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="mobileData.totalRecord">
          </el-pagination>
        </div>
      </el-collapse-item>
      <!-- 固定电话 -->
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">固定电话类(家电、单电)</span>
          <span class="collapse_title_text internalMatch_head_tab">{{init.fixTelInternalMatchTab}}</span>
        </template>
        <div class="height_auto">
          <el-table :data="fixTelData.recordList" border style="width: 100%;height:auto;" @row-dblclick="itemDbclickMobiel"
            highlight-current-row v-loading="fixTelLoading">
            <el-table-column prop="targetCustName" label="命中号码姓名" width="105">
            </el-table-column>
            <el-table-column prop="matchTel" label="命中号码" width="110">
            </el-table-column>
            <el-table-column prop="matchTelTypeTxt" label="电话类型" width="100">
            </el-table-column>
            <el-table-column prop="matchApplySubNo" label="进件编号" width="165">
            </el-table-column>
            <el-table-column prop="matchApplyCustName" label="客户名称" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="165">
            </el-table-column>
            <el-table-column prop="matchApplyWorkName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="matchApplyStateTxt" label="业务状态" width="110">
            </el-table-column>
            <el-table-column prop="hitRulesTxt" label="命中规则" width="180">
            </el-table-column>
            <el-table-column prop="remark" min-width="100" fit="false" class="mark-cell" label="备注"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
        <div class="block tool-bar" v-show="fixTelData.totalRecord>0">
          <el-pagination @size-change="handleSizeChangeFixTel" @current-change="handleCurrentChangeFixTel"
            :current-page="FixTelPageNum" :page-sizes="[10, 20,50]" :page-size="MobilePageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="fixTelData.totalRecord">
          </el-pagination>
        </div>
      </el-collapse-item>
      <!-- 单位名称 -->
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">单位名称</span>
          <span class="collapse_title_text internalMatch_head_tab">{{workName}}</span>
        </template>
        <div class="height_auto">
          <el-table :data="workData.recordList" border style="width: 100%;height:auto;" @row-dblclick="itemDbclickMobiel"
            highlight-current-row v-loading="companyLoading">
            <el-table-column prop="targetCustName" label="命中号码姓名" width="105">
            </el-table-column>
            <el-table-column prop="applyTelTypeTxt" label="电话类型" width="100">
            </el-table-column>
            <el-table-column prop="matchApplySubNo" label="进件编号" width="165">
            </el-table-column>
            <el-table-column prop="matchApplyCustName" label="客户名称" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="165">
            </el-table-column>
            <el-table-column prop="matchApplyWorkName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="matchApplyStateTxt" label="业务状态" width="110">
            </el-table-column>
            <el-table-column prop="hitRulesTxt" label="命中规则" width="180">
            </el-table-column>
            <el-table-column prop="remark" min-width="100" fit="false" class="mark-cell" label="备注"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
        <div class="block tool-bar" v-show="workData.totalRecord>0">
          <el-pagination @size-change="handleSizeChangeCompany" @current-change="handleCurrentChangeCompany"
            :current-page="CompanyPageNum" :page-sizes="[10, 20,50]" :page-size="MobilePageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="workData.totalRecord">
          </el-pagination>
        </div>
      </el-collapse-item>
      <!-- 本次进件命中规则 -->
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">本次进件命中规则</span>
        </template>
        <div class="checkedInf margin_top_15 margin_left_30">
          <span class="text_area_span  width_800 height_120 padding_0_10">{{ hitRulesTxt }} </span>
        </div>
      </el-collapse-item>
      <!-- 匹配结论 -->
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">匹配结论</span>
        </template>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="30px" v-if="!read">
          <el-form-item prop="audit_desc" class="height_120 margin_top_15 margin_right_5">
            <b v-show="ruleForm.audit_desc&&ruleForm.audit_desc.length>=500" class="hint_word loca">
              输入长度不能超过500</b>
            <el-input type="textarea" class="txt_width" v-model="ruleForm.audit_desc" :readonly="read" resize="none"
              :rows="5" :maxlength="500"></el-input>
          </el-form-item>
          <!-- v-if="!read" -->
          <el-form-item>
            <el-button type="primary" class="margin_left_735" @click="submitForm('ruleForm')">确定</el-button>
          </el-form-item>
        </el-form>
        <div class="checkedInf margin_top_15 margin_left_30" v-else>
          <span class="text_area_span  width_800 height_120 padding_0_10 ">{{ruleForm.audit_desc}}</span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['0', '1', '2', '3', '4', '5'],
        title1: "移动号码类(手机号和联系人)",
        title2: "固定电话类(家电、单电)",
        title3: "单位名称",
        init: {},
        ruleForm: {
          applyId: this.listInf.applyId, // 申请单id
          creator_code: this.creator_code, // 操作人用户编码  userCode
          audit_desc: '', // 匹配结论
          id: ''
        },
        rules: { //结论为必填项时打开
          //   audit_desc: [{
          //     required: true,
          //     message: '请填写活动形式',
          //     trigger: 'blur'
          //   }]
        },
        applyInfoHistory: [], //客户历史贷款信息
        CustomData: [], //客户数据
        mobileData: [], // 移动电话数据
        fixTelData: [], // 固话数据
        workData: [], // 单位数据
        workName: '', // 公司名称
        MobilePageSize: 10, // 移动 每页条数
        MobilePageNum: 1, // 移动 当前页
        CudstomPageNum: 1, // 客户 当前页
        CudstomPageSize: 10, // 移动 每页条数
        FixTelPageSize: 10, // 固定电话 每页条数
        FixTelPageNum: 1, // 固定电话 当前页
        CompanyPageSize: 10, // 公司电话 每页条数
        CompanyPageNum: 1, // 公司电话 当前页
        mobileLoading: false,
        fixTelLoading: false,
        companyLoading: false,
        auditId: '', // 匹配结论id
        hitRulesTxt: ''
      };
    },
    props: {
      listInf: {
        default: function () {
          return {}
        },
        type: Object,
        required: true
      },
      read: {
        default: true,
        type: Boolean,
      }
    },
    mounted() {
      // 获取入参
      var applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
      var userInfo = JSON.parse(localStorage.getItem('userInf'));
      this.workName = applicationInformationDetail.workName;
      this.creator_code = userInfo.userCode;
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        // 初始化接口
        this.post('/internalMatch/getInternalMatchInfo', {
          pageParam: {
            pageNum: 1, //		页码
            pageSize: 10 //每页条数
          },
          applyId: this.listInf.applyId, //	申请单id
          applySubNo: this.listInf.applySubNo, //	进件编号
          name: this.listInf.custName, //	借款人名字
          workName: this.workName, //	单位名称
          certCode:this.listInf.certCode
        }).then(res => {
          if (res.statusCode == 200) {
            this.init = res.data;
            this.hitRulesTxt = this.init.hitRulesTxt;
            this.applyInfoHistory = this.init.applyInfoHistory; //客户历史贷款信息  - 无分页
            this.mobileData = this.init.mobileInternalMatch; //移动号码类  
            this.fixTelData = this.init.fixTelInternalMatch; //固定电话类  
            this.workData = this.init.workInternalMatch; //单位名称  
            if (this.init && this.init.matchOption) {
              this.ruleForm.audit_desc = this.init.matchOption.auditDesc; //内匹结论
              this.ruleForm.id = this.init.matchOption.id //内匹结论id
            }
          } else {
            this._error(res.msg)
          }
        })
      },
      // 移动号码类
      getListByMobile() {
        this.mobileLoading = true;
        this.post('internalMatch/getInternalMatchListByMobile', {
          pageParam: {
            pageNum: this.MobilePageNum,
            pageSize: this.MobilePageSize
          },
          applySubNo: this.listInf.applySubNo //this.applySubNo
        }).then(res => {
          this.mobileData = res.data;
          this.mobileLoading = false;
        });
      },
      // 固定电话类
      getListByFixTel() {
        this.fixTelLoading = true;
        this.post('internalMatch/getInternalMatchListByFixTel', {
          pageParam: {
            pageNum: this.FixTelPageNum,
            pageSize: this.FixTelPageSize
          },
          applySubNo: this.listInf.applySubNo, ///this.applySubNo
        }).then(res => {
          this.fixTelData = res.data;
          this.fixTelLoading = false;
        });
      },
      // 单位名称类
      getListByWorkName() {
        this.companyLoading = true;
        this.post('internalMatch/getInternalMatchListByWorkName', {
          pageParam: {
            pageNum: this.CompanyPageNum,
            pageSize: this.CompanyPageSize
          },
          applySubNo: this.listInf.applySubNo, //this.applySubNo,
          workName: this.workName
        }).then(res => {
          this.workData = res.data;
          this.companyLoading = false;
        })
      },
      // 表格双击跳转
      itemDbclickMobiel(row, event) {
        let query = {};
        // query.id = row.id;
        query.applyId = row.matchApplyId;
        query.applySubNo = row.matchApplySubNo;
        query = Object.assign({}, row, query)
        // id: 客户id     orgCate
        localStorage.setItem("internalObj", JSON.stringify(query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'internal'
        }));
        this.$router.push({
          name: 'MatchingInf',
          params: {
            newOne: true,
          }
        });
      },
      // 移动电话
      handleSizeChangeMobile(val) {
        this.MobilePageSize = val;
        this.getListByMobile();
      },
      handleCurrentChangeMobile(val) {
        this.MobilePageNum = val;
        this.getListByMobile();
      },
      // 固定电话
      handleSizeChangeFixTel(val) {
        this.FixTelPageSize = val;
        this.getListByFixTel();
      },
      handleCurrentChangeFixTel(val) {
        this.FixTelPageNum = val;
        this.getListByFixTel();
      },
      // 单位电话
      handleSizeChangeCompany(val) {
        this.CompanyPageSize = val;
        this.getListByWorkName();
      },
      handleCurrentChangeCompany(val) {
        this.CompanyPageNum = val;
        this.getListByWorkName();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('确定操作？', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              cancelButtonText: '取消',
              showCancelButton: true
            }).then(() => {
              this.post('internalMatch/addInternalMatchOption', this.ruleForm).then(res => {
                if (res.statusCode == '200') {
                  this._succe('保存成功！')
                  this.mountedInf();
                } else {
                  this._error('提交失败,请重试！');
                }
              });
            }).catch(() => {});
          } else {
            return false;
          }
        });
      },
    },
  };

</script>
<style scoped>
  .loca {
    left: 10px;
  }

  .tool-bar {
    width: 100%;
    text-align: center;
    padding: 10px 0 0 10px;
    margin-bottom: 10px;
  }

  .mark-cell {
    overflow: hidden;
    overflow-wrap: break-word;
  }

  .internalMatch_head_tab {
    color: #2DA8E1;
    font-weight: normal;
  }

  .txt_width {
    min-width: 400px;
    max-width: 800px;
  }

</style>
