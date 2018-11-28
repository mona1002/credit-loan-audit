<!-- 反欺诈申请 - - 详情编辑页面 -->
<template>
  <div date="AntiApplyAdd" class="AntiApplyAdd">
    <el-collapse v-model="activeName">
      <el-collapse-item name='1'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_190">
                  <i class="required_Red">* </i>进件编号：</label>
                <span style="display:inline-block;width:160px">{{applySubNo}}</span>
                <el-button icon="el-icon-search" style="width: 25px;height: 25px;" @click="coverFn('shwoList')"></el-button>
              </li>
              <li>
                <label class="label_width_190">客户名称：</label>
                <span>{{applyCustName}}</span>
              </li>
              <li>
                <label class="label_width_190">证件类型：</label>
                <span>{{certTypeTxt}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_190">证件号码：</label>
              <span>{{certCode}}</span>
            </li>
            <li>
              <label class="label_width_190">移动电话：</label>
              <span>{{mobile}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">反欺诈申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li class="inputInf">
              <label class="label_width_190">
                <i class="required_Red">* </i>反欺诈申请类型主原因：</label>
              <span>
                <el-select @change="mainselectChange" v-model="mainReason">
                  <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
                  </el-option>
                </el-select>
              </span>
            </li>
            <li class="inputInf">
              <label class="label_width_190">子原因：</label>
              <span>
                <el-select @change="secondselectChange" v-model="secondReason">
                  <el-option v-for="item in secondReasons" :key="item.id" :label="item.reasonName" :value="item">
                  </el-option>
                </el-select>
              </span>
            </li>
            <li class="text_area_li_5rows triplet_textarea_width" style="margin-top:5px;">
              <label class="label_width_190">
                <i class="required_Red">* </i>欺诈上报描述：</label>
              <span>
                <el-input v-model="applyDesc" style='width:calc( 50% + 170px);' type="textarea" :rows="5" resize=none
                  :maxlength="500"></el-input>
              </span>
            </li>
            <li class='clearFloat'>
              <label class="label_width_190">反欺诈申请人：</label>
              <span>{{userCode}}</span>
            </li>
            <li>
              <label class="label_width_190">反欺诈申请日期：</label>
              <span> {{dealroperDate | dateFilter}}</span>
            </li>
            <li>
              <label class="label_width_190">反欺诈申请机构：</label>
              <span> {{orgCode}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="submitPage_button">
      <el-button plain @click="backRoute()">取消</el-button>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
    </div>
    <el-dialog title="请选择一条信息" :visible.sync="coverShow" width='1130px'>
      <div>
        <div class="taskWinput search-div">
          <el-row class="row row1" type="flex">
            <el-col :sm='7' class="search-item" :offset="0">
              <span class="keywordText_dialog">进件编号： </span>
              <el-input v-model="applySubNos"></el-input>
            </el-col>
            <el-col :sm='7' class="search-item">
              <span class="keywordText_dialog">客户名称：</span>
              <el-input v-model="custName_la"></el-input>
            </el-col>
            <el-col :sm='7' class="search-item">
              <span class="keywordText_dialog">证件号码：</span>
              <el-input v-model="subCertCode"></el-input>
            </el-col>
            <el-col :sm='4' class="search-item">
              <el-button class="btn query" type="primary" @click="request">查询</el-button>
              <el-button class="btn reset" @click="resetQuery">重置</el-button>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-table :data="tableData.recordList" height="250" border style="width: 100%" highlight-current-row center
            @row-click="itemClick">
            <el-table-column type="index" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="applySubno" label="进件编号" width="170">
            </el-table-column>
            <el-table-column prop="appDate" label="申请日期" width="170">
            </el-table-column>
            <el-table-column prop="custName" label="客户名称" width="120">
            </el-table-column>
            <el-table-column prop="certTypeTxt" label="证件类型" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="证件号码" width="170">
            </el-table-column>
            <el-table-column prop="operOrgName" label="进件机构名称" width="130">
            </el-table-column>
            <el-table-column prop="proName" label="产品名称" width="100">
            </el-table-column>
            <el-table-column prop="operName" label="进件客服" width="120" show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div class="block tool-bar">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
              :page-sizes="[10, 20,50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord"
              v-show="tableData.totalRecord">
            </el-pagination>
          </div>
        </div>
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button plain @click="btnClick">取消</el-button>
          <el-button type="primary" @click="btnClick('sure')">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: ['1', '2'],
        creditappTaskid: '', // 任务id
        userCode: '', // 用户编号
        orgCode: '', // 机构编号
        applyId: '', // 申请单ID
        applySubNo: '', // 进件编号
        applyCode: '', // 申请人code
        applyPersonName: '', // 申请人姓名
        appOrgCode: '', // 申请机构code
        appDate: '', // 申请日期
        operOrgName: '', // 申请机构名称
        mainId: '', // 欺诈主原因id
        secondId: '', // 欺诈子原因id
        applyDesc: '', // 反欺诈申请描述
        mainReason: '', // 欺诈主原因名称
        secondReason: '', // 欺诈子原因名称
        appOrgId: '', // 申请机构id
        appSuborgId: '', // 申请机构科室id
        appSuborgCode: '', // 申请机构科室code
        appSuborgName: '', // 申请机构科室名称
        proId: '', // 产品id
        proCode: '', // 产品code
        applyCustId: '', // 客户id
        applyCustName: '', // 客户姓名
        applyCustNo: '', // 客户编号
        channel: '', // 渠道
        certCode: '', // 证件号码
        proName: '', // 产品名称
        mobile: '', // 移动电话
        dealroperDate: '', // 反欺诈申请日期
        certTypeTxt: '', // 证件类型
        mainReasons: [],
        secondReasons: [],
        antiFlag: '', // 标志
        coverShow: false, // 弹窗
        tableData: [], // 详情列表数据
        processTemplateId: '',
        taskNodeName: '',
        taskStatus: '',
        userCode: '',
        pageNum: 1, // 页码
        pageSize: 10, // 每页条数
        applySubno: '',
        custName_la: '',
        certCode: '',
        rowObj: '', // 点击的列表数据
        subCertCode: '', // 弹窗的证件号码
        processInstanceId: '',
        busiState: '', //业务状态
        applySubNos: '', //弹框的案件编号
        flowRoleCodesList: [], //用来判断channel的值
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/AntiApplyAdd' && this.$route.params.newOne) {
          this.mountedInf();
          // 请选择一条信息弹窗
          this.applySubNos = '';
          this.custName_la = '';
          this.subCertCode = '';
          // 基本信息
          this.applySubNo = '';
          this.applyCustName = '';
          this.certTypeTxt = '';
          this.certCode = '';
          this.mobile = '';
          // 申请信息
          this.mainReason = '';
          this.secondReason = '';
          this.applyDesc = '';
        }
      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        // 经办人 登录用户名
        var userInfo = JSON.parse(localStorage.getItem('userInf'));
        this.userCode = userInfo.userCode;
        this.orgCode = userInfo.orgCode;
        this.flowRoleCodesList = userInfo.flowRoleCodesList;
        if (this.flowRoleCodesList) {
          for (var i = 0; i < this.flowRoleCodesList.length; i++) {
            if (this.flowRoleCodesList[i] == 'BL12' || this.flowRoleCodesList[i] == 'BL108' || this.flowRoleCodesList[i] ==
              'BL07') {
              this.channel = '07';
            } else {
              this.channel = '99';
            }
          }
        }
        // 请求系统时间
        this.getSystemDate();
        // 请求主原因
        this.firstNodeReason();
      },
      // 请求系统时间
      getSystemDate() {
        // 获取系统时间
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          // 请求系统时间
          this.dealroperDate = res.data;
        })
      },
      // 反欺诈申请 获取 主原因子原因
      firstNodeReason() {
        this.get('/credit/firstNodeReason?reasonType=' + '08,09' + '&' + Math.random()).then(res => {
          this.mainReasons = res.data;
        })
      },
      submitForm() {
        // 判断必填
        if (!this.applySubNo) {
          this.$message({
            message: "提示：请选择进件!",
            type: 'warning'
          })
          return;
        }
        if (!this.mainId || !this.mainReason) {
          this.$message({
            message: "提示：请选择主原因！",
            type: 'warning'
          });
          return;
        }
        if (!this.applyDesc) {
          this.$message({
            message: "提示：请填写欺诈上报描述!",
            type: 'warning'
          });
          return;
        }
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '确定操作? '),
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          modal: false,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              this.post('/fraudApplyInfoController/startAntiFraudForFinishedApply', {
                  fraudApplyInfo: {
                    applyCustId: this.applyCustId, // 客户id
                    applyCustName: this.applyCustName, // 客户姓名
                    applyCustNo: this.applyCustNo, // 客户编号
                    applyDesc: this.applyDesc, // 反欺诈申请描述applyId: this.applyId, // 申请单ID
                    applyPersonName: this.applyPersonName, // 申请人姓名
                    applySubno: this.applySubNo, // 进件编号
                    channel: this.channel, // 渠道
                    certCode: this.certCode, // 证件号码
                    mainreasonId: this.mainId, // 欺诈主原因id
                    mainreaName: this.mainReason, // 欺诈主原因名称
                    proId: this.proId, // 产品id
                    proCode: this.proCode, // 产品code
                    proName: this.proName, // 产品名称
                    subreaName: this.secondReason, // 欺诈子原因名称
                    subreasonId: this.secondId, // 欺诈子原因id
                    busiState: this.busiState,
                    applyId: this.applyId
                  }
                })
                .then(res => {
                  if (res.statusCode == '200') {
                    this.$router.push('/AntiFraud');
                    this.$store.dispatch('delVisitedViews', {
                      name: '反欺诈申请-添加'
                    }).then((views) => {
                      const latestView = views.slice(-1)[0]
                      if (latestView) {
                        this.$router.push(latestView.StatefullPath);
                      } else {
                        this.$router.push('/')
                      }
                    })
                  } else {
                    if (res.msg) {
                      this.$message({
                        type: 'warning',
                        message: res.msg
                      });
                    } else {
                      this.$message({
                        type: 'warning',
                        message: '您无此操作权限！'
                      });
                    }
                    instance.confirmButtonText = '';
                    instance.confirmButtonLoading = false;
                  }
                })
            } else {}
            done();
          }
        }).then(action => {
          this.$message({
            type: 'success',
            message: '提交成功'
          });
          instance.confirmButtonLoading = false;
        });
      },
      // 返回  上级路由
      backRoute() {
        window.history.go(-1);
        this.$store.dispatch('delVisitedViews', {
          name: '反欺诈申请-添加'
        }).then((views) => {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.StatefullPath);
          } else {
            this.$router.push('/')
          }
        })
      },
      // 主原因改变
      mainselectChange(val) {
        // 主原因改变 清空子原因
        this.secondReason = '';
        this.secondId = '';
        this.mainReason = val.reasonName;
        this.mainId = val.id;
        // 请求子原因
        this.findNodeFirstChildren();
      },
      // 获取子原因
      findNodeFirstChildren(val) {
        // 请求子原因
        this.get('/credit/findNodeFirstChildren?id=' + this.mainId + '&' + Math.random()).then(res => {
          if (res.statusCode == '200') {
            this.secondReasons = res.data;
          }
        })
      },
      // 子原因改变
      secondselectChange(val) {
        this.secondReason = val.reasonName;
        this.secondId = val.id
      },
      coverFn(flag) {
        switch (flag) {
          case 'shwoList':
            this.coverShow = true;
            this.applySubNos = ''; // 进件编号
            this.custName_la = ''; // 客户名称
            this.subCertCode = ''; // 客户编号
            this.tableData = '';
            break;
        }
      },
      // 每页条数
      handleSizeChange(val) {
        this.pageSize = val;
        this.request();
      },
      // 页码
      handleCurrentChange(val) {
        this.pageNum = val;
      },
      // 请求列表
      request() {
        if (!this.applySubNos && !this.custName_la && !this.subCertCode) {
          return
        } else {
          this.post('/applyInfoPool/queryListForFraud', {
            pageParam: {
              pageNum: this.pageNum,
              pageSize: this.pageSize
            },
            applySubNo: this.applySubNos,
            custName: this.custName_la,
            certCode: this.subCertCode
          }).then(res => {
            if (res.statusCode == 200) {
              this.tableData = res.data;
              for (var i = 0; i < res.data.recordList.length; i++) {
                var regs = /\d{4}-\d{1,2}-\d{1,2}/g;
                this.tableData.recordList[i].appDate = regs.exec(res.data.recordList[i].appDate)[0];
              }
            }
          })
        }
      },
      // 重置查询
      resetQuery() {
        // 清空数据 重新查询
        // 查询条件 初始化
        this.applySubNos = ''; // 进件编号
        this.custName_la = ''; // 客户名称
        this.subCertCode = ''; // 客户编号
        this.tableData = '';
      },
      // 选中弹窗某行
      itemClick(row, event, column) {
        // 点击的列表数据
        this.rowObj = row;
      },
      // 点击 确定/取消
      btnClick(val) {
        // 确定
        if (val == 'sure') {
          if (!this.rowObj) {
            this.$message.error('请选择一条数据')
            return
          }
          if (this.rowObj.canStartAntiFraudFlag == '1') {
            this.applySubNo = this.rowObj.applySubno; // 进件编号
            this.applyCustName = this.rowObj.custName; // 客户名称
            this.certTypeTxt = this.rowObj.certTypeTxt; // 证件类型
            this.certType = this.rowObj.certType; // 证件类型
            this.certCode = this.rowObj.certCode; // 证件号码
            this.mobile = this.rowObj.mobile; // 移动电话
            this.applyId = this.rowObj.applyId;
            this.proId = this.rowObj.proId;
            this.proCode = this.rowObj.proCode;
            this.proName = this.rowObj.proName;
            this.busiState = this.rowObj.busiState;
            this.applyId = this.rowObj.applyId;
            // 新增字段
            this.processInstanceId = this.rowObj.processInstanceId;
          } else if (this.rowObj.canStartAntiFraudFlag == '0') {
            this.applySubNo = ''; // 进件编号
            this.$message({
              message: "提示：该件无法发起反欺诈!",
              type: 'warning'
            })
            return;
          }
        }
        this.coverShow = false;
      }
    }
  }

</script>
