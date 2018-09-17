<template>
  <div class="internalMatch-class">
    <el-collapse v-model="activeNames">
      <!-- 移动电话 -->
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">移动号码类(手机号和联系人)</span>
          <span class="collapse_title_text internalMatch_head_tab">{{mobileTab}}</span>
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
            <el-table-column prop="matchApplySubNo" label="进件编号" width="160">
            </el-table-column>
            <el-table-column prop="matchApplyCustName" label="客户名称" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="160">
            </el-table-column>
            <el-table-column prop="matchApplyWorkName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="matchApplyStateTxt" label="业务状态" width="110">
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
          <span class="collapse_title_text internalMatch_head_tab">{{fixTelTab}}</span>
        </template>
        <div class="height_auto">
          <el-table :data="fixTelData.recordList" border style="width: 100%;height:auto;" @row-dblclick="itemDbclickFixTel"
            highlight-current-row v-loading="fixTelLoading">
            <el-table-column prop="targetCustName" label="命中号码姓名" width="105">
            </el-table-column>
            <el-table-column prop="matchTel" label="命中号码" width="110">
            </el-table-column>
            <el-table-column prop="matchTelTypeTxt" label="电话类型" width="100">
            </el-table-column>
            <el-table-column prop="matchApplySubNo" label="进件编号" width="160">
            </el-table-column>
            <el-table-column prop="matchApplyCustName" label="客户名称" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="160">
            </el-table-column>
            <el-table-column prop="matchApplyWorkName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="matchApplyStateTxt" label="业务状态" width="110">
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
          <el-table :data="workData.recordList" border style="width: 100%;height:auto;" @row-dblclick="itemDbclickCompany"
            highlight-current-row v-loading="companyLoading">
            <el-table-column prop="targetCustName" label="命中号码姓名" width="105">
            </el-table-column>
            <el-table-column prop="applyTelTypeTxt" label="电话类型" width="100">
            </el-table-column>
            <el-table-column prop="matchApplySubNo" label="进件编号" width="160">
            </el-table-column>
            <el-table-column prop="matchApplyCustName" label="客户名称" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号" width="160">
            </el-table-column>
            <el-table-column prop="matchApplyWorkName" label="进件机构" width="100">
            </el-table-column>
            <el-table-column prop="matchApplyStateTxt" label="业务状态" width="110">
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
      <!-- 匹配结论 -->
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">匹配结论</span>
        </template>
        <div class="height_auto">
          <!-- 匹配结论编辑 -->
          <internal-match-textarea v-show="SplitS=='right'"></internal-match-textarea>
          <!-- 匹配结论查看 -->
          <internal-match-read v-show="SplitS!='right'"></internal-match-read>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4'],
        title1: "移动号码类(手机号和联系人)",
        title2: "固定电话类(家电、单电)",
        title3: "单位名称",
        mobileData: [], // 移动电话数据
        fixTelData: [], // 固话数据
        workData: [], // 单位数据
        applySubNo: '', // 进件编号
        workName: '', // 公司名称
        MobilePageSize: 10, // 移动 每页条数
        MobilePageNum: 1, // 移动 当前页
        FixTelPageSize: 5, // 固定电话 每页条数
        FixTelPageNum: 1, // 固定电话 当前页
        CompanyPageSize: 5, // 公司电话 每页条数
        CompanyPageNum: 1, // 公司电话 当前页
        mobileLoading: true,
        fixTelLoading: true,
        companyLoading: true,
        auditId: '', // 匹配结论id
        isInterFlag: false,
        fixTelTab: '', // 固定电话标签
        mobileTab: '', // 移动电话标签
        fixTelcustName: ''
      };
    },
    props: ['isFull', 'SplitS'],
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        //   // 组件歘估计完成后获取数据
        //   // 此时 data 已经被 observed 了
        var applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
        // 进件编号
        this.applySubNo = applicationInformationDetail.applySubNo;
        this.workName = applicationInformationDetail.workName;
        this.fixTelcustName = applicationInformationDetail.custName;
        // 测试数据
        this.fetchData('mobile');
        this.fetchData('fixed');
        this.fetchData('company');
        // 样式处理
        if (this.isFull == true) { // 全屏
          $(".internalMatch-class .mark-textarea").css("width", "800px")
          $(".internalMatch-class .mark-textarea textarea").css("width", "800px");
          // 按钮
          $(".internalMatch-class .mark-button").css("margin-left", "775px")
        } else if (this.isFull == false) { // 分屏
          $(".internalMatch-class .mark-textarea").css("width", "600px")
          $(".internalMatch-class .mark-textarea textarea").css("width", "600px");
          // 按钮
          $(".internalMatch-class .mark-button").css("margin-left", "580px")
        }
      },
      /*
        mobile: 移动电话
        fixed:  固定电话
        company:  公司电话
        option: 匹配结论
       */
      fetchData(type) {
        // 只做判断分流
        switch (type) {
          case 'mobile':
            this.getListByMobile();
            this.getTabByMobile();
            break;
          case 'fixed':
            this.getListByFixTel();
            this.getTabByFixTel();
            break;
          case 'company':
            this.getListByWorkName();
            break;

        }
      },
      getListByMobile() {
        // 移动号码类
        this.post('internalMatch/getInternalMatchListByMobile', {
          pageParam: {
            pageNum: this.MobilePageNum,
            pageSize: this.MobilePageSize
          },
          applySubNo: this.applySubNo
        }).then(res => {
          this.mobileData = res.data;
          this.mobileLoading = false;
        });
      },
      getTabByMobile() {
        // 获取移动电话类标签
        this.post('internalMatch/getTabByMobile', {
          applySubNo: this.applySubNo
        }).then(res => {
          this.mobileTab = res.data;
        })
      },
      getListByFixTel() {
        // 固定电话类
        this.post('internalMatch/getInternalMatchListByFixTel', {
          pageParam: {
            pageNum: this.FixTelPageNum,
            pageSize: this.FixTelPageSize
          },
          applySubNo: this.applySubNo
        }).then(res => {
          this.fixTelData = res.data;
          this.fixTelLoading = false;
        });
      },
      getTabByFixTel() {
        // 获取固定电话类标签
        this.post('internalMatch/getTabByFixTel', {
          applySubNo: this.applySubNo,
          name: this.fixTelcustName,
        }).then(res => {
          this.fixTelTab = res.data;
        })
      },
      getListByWorkName() {
        // 单位名称类
        this.post('internalMatch/getInternalMatchListByWorkName', {
          pageParam: {
            pageNum: this.CompanyPageNum,
            pageSize: this.CompanyPageSize
          },
          applySubNo: this.applySubNo,
          workName: this.workName
        }).then(res => {
          this.workData = res.data;
          this.companyLoading = false;
        })
      },
      itemDbclickMobiel(row, event) {
        let query = {};
        query.id = row.id;
        query.matchApplyId = row.matchApplyId;
        // 行被双击 事件  移动电话
        this.isInterFlag = query.isInterFlag = true;
        query.applySubNo = row.matchApplySubNo;
        query = Object.assign({}, row, query)
        // id: 客户id     orgCate
        // isInterFlag  标志是否是  内部匹配跳转的  查看
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
      itemDbclickFixTel(row, event) {
        let query = {};
        query.id = row.id;
        query.matchApplyId = row.matchApplyId;
        // 行被双击 事件  固定电话
        this.isInterFlag = query.isInterFlag = true;
        query.applySubNo = row.matchApplySubNo;
        query = Object.assign({}, row, query)
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
      itemDbclickCompany(row, event) {
        let query = {};
        query.id = row.id;
        query.matchApplyId = row.matchApplyId;
        // 行被双击 事件  单位名称
        this.isInterFlag = query.isInterFlag = true;
        query.applySubNo = row.matchApplySubNo;
        query = Object.assign({}, row, query)
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
        // 每页 10条
        this.MobilePageSize = val;
        this.fetchData('mobile');
      },
      handleCurrentChangeMobile(val) {
        // 第几页
        this.MobilePageNum = val;
        this.fetchData('mobile');
      },
      // 固定电话
      handleSizeChangeFixTel(val) {
        // 每页 10条
        this.FixTelPageSize = val;
        this.fetchData('fixed');
      },
      handleCurrentChangeFixTel(val) {
        // 第几页
        this.FixTelPageNum = val;
        this.fetchData('fixed');
      },
      // 单位电话
      handleSizeChangeCompany(val) {
        // 每页 10条
        this.CompanyPageSize = val;
        this.fetchData('company');
      },
      handleCurrentChangeCompany(val) {
        // 第几页
        this.CompanyPageNum = val;
        this.fetchData('company');
      },
    },
    watch: {
      isFull() {
        // 样式处理
        if (this.isFull == true) { // 全屏
          $(".internalMatch-class .mark-textarea").css("width", "800px")
          $(".internalMatch-class .mark-textarea textarea").css("width", "800px");
          // 按钮
          $(".internalMatch-class .mark-button").css("margin-left", "775px")
        } else if (this.isFull == false) { // 分屏
          $(".internalMatch-class .mark-textarea").css("width", "600px")
          $(".internalMatch-class .mark-textarea textarea").css("width", "600px");
          // 按钮
          $(".internalMatch-class .mark-button").css("margin-left", "580px")
        }
      }
    },
    components: {
      "internal-match-textarea": {
        template: '\
        <div>\
            <el-form label-width="10px" class="demo-ruleForm">\
            <el-input type="textarea" v-model="audit_desc" class="mark-textarea" resize="none" :rows="5" :maxlength="500"></el-input>\
            <el-form-item class="mark-button">\
                <el-button type="primary" @click="hangOoutBtn()">确定</el-button>\
            </el-form-item>\
            </el-form>\
        </div>\
            ',
        data() {
          return {
            mark: "",
            ruleForm: {
              type: []
            },
            applyId: '', // 申请单id
            audit_desc: '', //匹配结论
            creator_code: '', // 用户操作人编码 userCode
            resMsg: '',
            hangOut: false,
            loadsitu: false,
            adbtn: '确定',
          };
        },
        mounted() {
          this.mountedf();
        },
        methods: {
          mountedf() {
            var applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
            this.applyId = applicationInformationDetail.applyId;
            var userInfo = JSON.parse(localStorage.getItem('userInf'));
            this.creator_code = userInfo.userCode;
            this.getOption();
          },
          getOption() {
            // 获取匹配结论
            this.post('internalMatch/getInternalMatchOption', {
              applyId: this.applyId
            }).then(res => {
              res.data != null ? this.audit_desc = res.data.auditDesc : '';
              res.data != null ? this.auditId = res.data.id : '';
            })
          },
          hangOoutBtn() {
            this.$confirm('确定操作？', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              cancelButtonText: '取消',
              showCancelButton: true
            }).then(() => {
              this.Csave();
            }).catch(() => {});
          },
          canc() {
            this.hangOut = false;
          },
          Csave() {
            this.post('internalMatch/addInternalMatchOption', {
              // 申请单id
              applyId: this.applyId,
              // 操作人用户编码  userCode
              creator_code: this.creator_code,
              // 匹配结论
              audit_desc: this.audit_desc,
              id: this.auditId
            }).then(res => {
              if (res.statusCode == '200') {
                this.resMsg = '保存成功！';
                this.$message({
                  type: 'success',
                  message: this.resMsg
                });
              } else {
                this.resMsg = '提交失败,请重试！';
              }
            });
          },
          submitForm: function () {
            this.open();
          },
          // open 打开 是否确认提交弹窗
          open() {
            const h = this.$createElement;
            this.$msgbox({
              title: '提示',
              message: h('p', null, [
                h('span', null, '确定操作? '),
              ]),
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = '执行中...';
                  // 提交 匹配结论
                  this.post('internalMatch/addInternalMatchOption', {
                    // 申请单id
                    applyId: this.applyId,
                    // 操作人用户编码  userCode
                    creator_code: this.creator_code,
                    // 匹配结论
                    audit_desc: this.audit_desc,
                    id: this.auditId
                  }).then(res => {
                    if (res.statusCode == '200') {

                      this.resMsg = '保存成功！';
                      done();
                    } else {
                      this.resMsg = '提交失败,请重试！';
                      instance.confirmButtonText = '';
                    }
                    instance.confirmButtonLoading = false;
                  });
                } else {
                  done();
                }
              }
            }).then(action => {
              this.$message({
                type: 'success',
                message: this.resMsg
              });
            });
          }
        },
        watch: {
          // 匹配结论输入
          audit_desc: function (val) {
            if (val.length >= 500) {
              this.$message({
                type: 'warning',
                message: '请输入500字以内的结论！'
              });
            }
          }
        }
      },
      // 匹配结论查看
      "internal-match-read": {
        template: '\
            <el-form label-width="10px" class="demo-ruleForm">\
            <el-input disabled type="textarea" v-model="audit_desc" class="mark-textarea" resize="none" :rows="5" :maxlength="500"></el-input>\
            </el-form>\
            ',
        data() {
          return {
            mark: "",
            ruleForm: {
              type: []
            },
            applyId: '', // 申请单id
            audit_desc: '', //匹配结论
            creator_code: '' // 用户操作人编码 userCode
          };
        },
        mounted() {
          this.mountedC();
        },
        methods: {
          mountedC() {
            var applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
            this.applyId = applicationInformationDetail.applyId;
            var userInfo = JSON.parse(localStorage.getItem('userInf'));
            this.creator_code = userInfo.userCode;
            // 获取匹配信息
            this.getOption();
          },
          getOption() {
            // 获取匹配结论
            this.post('internalMatch/getInternalMatchOption', {
              applyId: this.applyId
            }).then(res => {
              res.data != null ? this.audit_desc = res.data.auditDesc : '';
              res.data != null ? this.auditId = res.data.id : '';
            })

          },
        }
      }
    }
  };

</script>
<style lang="css">
  /* 分页 */

  .internalMatch-class .tool-bar {
    width: 100%;
    text-align: center;
    padding: 10px 0 0 10px;
    margin-bottom: 10px;
  }

  .internalMatch-class .mark-textarea {
    margin: 10px;
    width: 98.5%;
  }

  .internalMatch-class .mark-textarea textarea {
    min-height: 100px;
    width: 800px;
    margin-left: 50px;
  }

  /* 确认按钮 */

  .internalMatch-class .mark-button {
    text-align: left;
    margin-right: 0px;
    margin-top: 20px;
    margin-left: 775px;
  }

  /* 备注 width*/

  .internalMatch-class .mark-cell {
    overflow: hidden;
    overflow-wrap: break-word;
  }

  .internalMatch_head_tab {
    color: #2DA8E1;
    font-weight: normal;
  }

</style>
