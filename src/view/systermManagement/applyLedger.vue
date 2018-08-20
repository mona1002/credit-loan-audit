<template>
  <!-- 申请台账 -->
  <div class="taskWatting main-div el-table_450_scroll">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model.trim="params.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.custName" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">手机号码：</span>
          <el-input v-model.trim="params.mobile" placeholder="请输入手机号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品类型： </span>
          <el-select v-model="params.proType" placeholder="请选择">
            <el-option v-for="item in proType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-autocomplete popper-class="my-autocomplete" v-model="proCode" :fetch-suggestions="ProQuerySearch" placeholder="请输入内容"
            @select="ProhandleSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
            <template slot-scope="{ item }">
              <span style="float: left; width:66px">{{ item.proName }}</span>
              <span style="float: left;color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.proCode }}</span>
            </template>
          </el-autocomplete>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">申请类型： </span>
          <el-select v-model="params.appType" placeholder="请选择">
            <el-option v-for="item in applyType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">借款人类型： </span>
          <el-select v-model="params.borrType" placeholder="请选择">
            <el-option v-for="item in applierType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">直销人员： </span>
          <el-input v-model.trim="params.salPerCode" placeholder="请输入直销人员"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">借款用途： </span>
          <el-select v-model="params.loanPurpose" placeholder="请选择">
            <el-option v-for="item in loanUse" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">申请日期：</span>
          <el-date-picker v-model="applyData" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">借款期限[月]： </span>
          <el-select v-model="params.loanTerm" placeholder="请选择">
            <el-option v-for="item in loanExp" :key="item.appDuration" :label="item.appDuration" :value="item.appDuration">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">紧急程度： </span>
          <el-select v-model="params.emerType" placeholder="请选择">
            <el-option v-for="item in emergency" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">进件机构：</span>
          <el-autocomplete popper-class="my-autocomplete" v-model="agencyCode" :fetch-suggestions="querySearch" placeholder="请输入内容"
            @select="handleSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
            <template slot-scope="{ item }">
              <span style="float: left;">{{ item.orgName }}</span>
              <span style="float: right;color: #8492a6; font-size: 13px;">{{ item.orgCode }}</span>
            </template>
          </el-autocomplete>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">来源渠道： </span>
          <el-select v-model="params.sourcesChan" placeholder="请选择">
            <el-option v-for="item in source" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">业务状态： </span>
          <el-select v-model="params.busiState" placeholder="请选择">
            <el-option v-for="item in Status" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件客服： </span>
          <el-input v-model.trim="params.appSerPerCode" placeholder="请输入进件客服"></el-input>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="Rsearch">查询</el-button>
          <el-button class="btn reset" @click="Rreset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        申请台账
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">申请信息</span>
        </span>
        <span class="icon-item" @click='getExcel' v-if='ExcelBtnShow'>
          <i class="el-icon appro"></i>
          <span class="ExcelIcon">导出Excel</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="410" highlight-current-row border @row-click='selectRow'>
        <el-table-column type="index" label=序号 fixed width="50">
        </el-table-column>
        <el-table-column prop="applyMainNo" label="主进件编号" fixed width="160">
        </el-table-column>
        <el-table-column prop="applyMainNo" label="进件编号" fixed width="160">
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期" fixed sortable width="150">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" fixed width="80">
        </el-table-column>
        <el-table-column prop="sex" label="性别" fixed width="50">
        </el-table-column>
        <el-table-column prop="certTypeTxt" label="证件类型" fixed width="105">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" fixed width="160">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号码" width="115">
        </el-table-column>
        <el-table-column prop="appTypeTxt" label="申请类型" width="80">
        </el-table-column>
        <el-table-column prop="borrTypeTxt" label="借款人类型" width="90">
        </el-table-column>
        <el-table-column prop="emerTypeTxt" label="紧急程度" align='center' width="80">
        </el-table-column>
        <el-table-column prop="proTypeTxt" label="产品类型" width="80">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" width="105">
        </el-table-column>
        <el-table-column prop="loanAmt" label="借款金额[元]" width="110">
        </el-table-column>
        <el-table-column prop="loanTerm" label="借款期限[月]" width="100">
        </el-table-column>
        <el-table-column prop="loanPurposeTxt" label="借款用途" width="105">
        </el-table-column>
        <el-table-column prop="guarnTypeTxt" label="担保方式" width="80">
        </el-table-column>
        <el-table-column prop="comBorrFlagTxt" label="是否共同借款" width="100">
        </el-table-column>
        <el-table-column prop="comBorrFlagTxt" label="来源渠道" width="80">
        </el-table-column>
        <el-table-column prop="salPerCode" label="直销人员" width="100">
        </el-table-column>
        <el-table-column prop="salPerName" label="直销人员名称" width="100">
        </el-table-column>
        <el-table-column prop="teamLeaderCode" label="团队经理" width="100">
        </el-table-column>
        <el-table-column prop="teamLeaderCode" label="团队经理名称" width="100">
        </el-table-column>
        <el-table-column prop="subOrgCode" label="进件团队" width="100">
        </el-table-column>
        <el-table-column prop="subOrgName" label="进件团队名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerCode" label="进件客服" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="进件客服名称" width="100">
        </el-table-column>
        <el-table-column prop="appOrgCode" label="进件机构" width="100">
        </el-table-column>
        <el-table-column prop="appOrgName" label="进件机构名称" width="130">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="业务状态" min-width="110">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20,50]" :current-page.sync="currentPage"
          :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ininin: '',
        currentRow: {},
        userInf: null,
        ExcelBtnShow: false,
        Routes: [],
        params: {
          userCode: '', //	用户编号
          applySubNo: '', //	进件编号
          proType: '', //	产品类型
          salPerCode: '', //	直销人员
          emerType: '', //	紧急程度
          appSerPerCode: '', //	进件客服
          custName: '', //	客户名称（输入客户编号）
          proCode: '', //	产品名称（输入产品编号）
          loanPurpose: '', //	借款用途
          appOrgCode: '', //	进件机构
          appOrgName: '', //	进件机构名称
          certCode: '', //	证件号码
          appType: '', //	申请类型
          sourcesChan: '', //	来源渠道
          appDate_ge: this._getDate(-6), //	,高级查询 起始时间
          appDate_le: this._getDate(), //	高级查询 终止时间
          mobile: '', //	手机号码
          borrType: '', //	借款人类型
          loanTerm: '', //	借款期限
          busiState: '', //	业务状态
          page: 1, //	页码
          rows: 10, //	每页条数
        },
        judge: {
          flag: '16'
        },
        proCode: "",
        selectedProName: "",
        agencyCode: '',
        selectedAgenName: "",
        applyData: [this._getDate(-6), this._getDate()],
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        tableData: [],
        production: [], //产品名称
        proType: [ //产品类型
          {
            value: '00',
            label: '信用'
          }, {
            value: '01',
            label: '车贷'
          }, {
            value: '02',
            label: '房贷'
          }
        ],
        applyType: [ //申请类型
          {
            value: '00',
            label: '非循环贷'
          }, {
            value: '01',
            label: '循环贷(借新还旧)'
          }, {
            value: '02',
            label: '循环贷(非借新还旧)'
          }
        ],
        applierType: [ //借款人类型
          {
            value: '01',
            label: '主借款人'
          }, {
            value: '02',
            label: '从借款人'
          }
        ],
        loanUse: [ //借款用途
          {
            value: '01',
            label: '日常生活消费'
          }, {
            value: '02',
            label: '教育支出'
          }, {
            value: '03',
            label: '医疗支出'
          }, {
            value: '04',
            label: '提高生活质量'
          }, {
            value: '05',
            label: '其他消费'
          }, {
            value: '06',
            label: '货物采买'
          }, {
            value: '07',
            label: '商铺运营'
          }, {
            value: '08',
            label: '家庭消费'
          }, {
            value: '09',
            label: '个人消费'
          }, {
            value: '10',
            label: '资金周转'
          }, {
            value: '11',
            label: '扩大经营'
          }, {
            value: '12',
            label: '购物（生活用品；原材料；设备）'
          }, {
            value: '13',
            label: '装修家居'
          }, {
            value: '14',
            label: '旅游'
          }
        ],
        loanExp: [ //借款期限
        ],
        emergency: [ //紧急程度
          {
            value: '00',
            label: '普通'
          }, {
            value: '01',
            label: '免费加急'
          }, {
            value: '02',
            label: '收费加急'
          }
        ],
        agency: [ //进件机构
        ],
        source: [ //来源渠道
          {
            value: '01',
            label: '报纸'
          }, {
            value: '02',
            label: '网络'
          }, {
            value: '03',
            label: '促销朋友'
          }, {
            value: '04',
            label: '朋友介绍'
          }, {
            value: '05',
            label: '销售开发'
          }, {
            value: '99',
            label: '其他'
          }
        ],
        Status: [ //业务状态
          {
            value: "00",
            label: "申请登记",
          }, {
            value: "01",
            label: "申请登记-放弃",
          }, {
            value: "02",
            label: "申请登记-拒绝",
          }, {
            value: "03",
            label: "质检复核",
          }, {
            value: "04",
            label: "初审-待处理",
          }, {
            value: "05",
            label: "申请登记-暂存",
          }, {
            value: "07",
            label: "初审-拒绝",
          }, {
            value: "08",
            label: "初审-放弃",
          }, {
            value: "09",
            label: "初审-回退补充材料",
          }, {
            value: "12",
            label: "终审-待处理",
          }, {
            value: "15",
            label: "终审-拒绝"
          }, {
            value: "16",
            label: "终审-放弃"
          }, {
            value: "17",
            label: "终审-回退门店补充材料"
          }, {
            value: "20",
            label: "终审-回退初审重审"
          }, {
            value: "21",
            label: "终审通过-待签约"
          }, {
            value: "22",
            label: "协议签订"
          }, {
            value: "23",
            label: "协议审核"
          }, {
            value: "24",
            label: "协议签订-放弃"
          }, {
            value: "25",
            label: "协议签订-拒绝"
          }, {
            value: "26",
            label: "等待放款",
          }, {
            value: "27",
            label: "放款处理",
          }, {
            value: "28",
            label: "放款成功-借据生效",
          }, {
            value: "29",
            label: "提前结清"
          }, {
            value: "30",
            label: "到期结清"
          }, {
            value: "31",
            label: "决策通过-待签约"
          }, {
            value: "32",
            label: "决策拒绝"
          }, {
            value: "33",
            label: "超时拒绝"
          }, {
            value: "34",
            label: "协议拟制"
          }, {
            value: "35",
            label: "等待匹配"
          }, {
            value: "36",
            label: "门店待评估"
          }, {
            value: "37",
            label: "总部待评估"
          }, {
            value: "38",
            label: "总部评估-回退"
          }, {
            value: "39",
            label: "终审-回退总部待评估"
          }, {
            value: "40",
            label: "权证登记"
          }, {
            value: "41",
            label: "权证入库"
          }, {
            value: "42",
            label: "回退-权证登记"
          },

        ],
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path == '/applyLedger') {
          if (!this.Routes[3].closed) {
            this.currentRow = {};
            this.params.page = this.currentPage = 1;
            this.params.rows = this.pageCount = 10;
            this.Rreset();
            this.applyData = [this._getDate(-6), this._getDate()];
            this.params.appDate_ge = this._getDate(-6);
            this.params.appDate_le = this._getDate();
            // this.tableData = [];
            this.Routes[3].closed = true;
          }
        }
      },
    },
    methods: {
      getExcel() { //导出Excel
        // 校验：
        if (this.applyData && this.applyData.length > 0) {
          let beginDate = new Date(this.applyData[0].replace(/-/g, '/')).getTime(),
            endDate = new Date(this.applyData[1].replace(/-/g, '/')).getTime();
          var day = (endDate - beginDate) / (1000 * 3600 * 24);
        }
        if (this.userInf.userCode !== "superadmin" && (!day || day > 31)) {
          this.$message.error('查询条件【申请日期】项请选择时间跨度小于等于31天的数据进行导出 ！');
          return
        }
        // 日期入参
        if (this.applyData.length > 0) {
          this.params.appDate_ge = this.applyData[0];
          this.params.appDate_le = this.applyData[1];
        }
        // 删除多余入参
        let obj = Object.assign({}, this.params);
        delete obj.page;
        delete obj.rows;

        axios.post('/export/applyLedger', obj, {
          responseType: 'arraybuffer'
        }).then((res) => {
          //           if(res.statusCode!=200){
          //             alert(res.msg)
          //             alert(res.data)
          // this.$message.error(res.data)
          //           }else{
          let blob = new Blob([res.data], {
            type: "application/vnd.ms-excel"
          });　　　　　
          let objectUrl = URL.createObjectURL(blob);　　　　　
          window.location.href = objectUrl;　
          // }
          　　　
        }).catch(function (res) {})
      },
      selectRow(row) {
        this.currentRow = row;
      },
      toDetailPage() {
        if (JSON.stringify(this.currentRow) == '{}') {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return
        }
        this.$router.push({
          name: 'appLedgerDetail',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("appLedgerTW", JSON.stringify(this.currentRow));
        localStorage.setItem("judge", JSON.stringify(this.judge));
      },
      querySearch(queryString, cb) { //进件机构下拉查询
        let restaurants = this.agency;
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      ProQuerySearch(queryString, cb) { //产品下拉查询
        let restaurants = this.production;
        let results = queryString ? restaurants.filter(this.ProcreateFilter(queryString)) : restaurants;
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.orgName.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
        };
      },
      ProcreateFilter(queryString) {
        return (restaurant) => {
          return (restaurant.proName.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
        };
      },
      handleSelect(item) { //进件机构下拉查询选中项
        this.params.appOrgName = this.agencyCode = this.selectedAgenName = item.orgName;
        this.params.appOrgCode = item.orgCode;
      },
      ProhandleSelect(item) { //产品下拉选中项
        this.proCode = this.selectedProName = item.proName;
        this.params.proCode = item.proCode;
      },
      handleSizeChange(val) { //每页 N 条
        this.params.rows = val;
        this.params.page = this.currentPage = 1;
        this.getInf(this.params);
      },
      handleCurrentChange(val) { //查看第 N 页
        this.params.page = val;
        this.getInf(this.params);
      },
      Rreset() {
        this.params.applySubNo = ''; //	进件编号
        this.params.proType = ''; //	产品类型
        this.params.salPerCode = ''; //	直销人员
        this.params.emerType = ''; //	紧急程度
        this.params.appSerPerCode = ''; //	进件客服
        this.params.custName = ''; //	客户名称
        this.params.proCode = ''; //	产品名称（输入产品编号）
        this.params.loanPurpose = ''; //	借款用途
        this.params.appOrgCode = ''; //	进件机构
        this.params.appOrgName = ''; //	进件机构名称
        this.params.certCode = ''; //	证件号码
        this.params.appType = ''; //	申请类型
        this.params.sourcesChan = ''; //	来源渠道
        this.params.appDate_ge = ''; //	高级查询 起始时间
        this.params.appDate_le = ''; //	高级查询 终止时间
        this.params.mobile = ''; //	手机号码
        this.params.borrType = ''; //	借款人类型
        this.params.loanTerm = ''; //	借款期限
        this.params.busiState = ''; //	业务状态
        this.params.page = this.currentPage = 1; //	页码-页码重置
        this.totalRecord = 0;
        // this.params.rows	='';//	每页条数
        this.applyData = []; //申请日期
        // this.applyData = ''; //申请日期
        this.agencyCode = ''; //进件机构
        this.selectedAgenName = '';
        this.proCode = ''; //产品名称
        this.selectedProName = '';
        this.tableData = []; ////清空已查处列表
        this.currentRow = {}; //清空选中行        
      },
      Rsearch() {
        if (this.applyData.length > 0) {
          this.params.appDate_ge = this.applyData[0];
          this.params.appDate_le = this.applyData[1];
        }
        this.params.page = this.currentPage = 1;
        this.getInf(this.params);
      },
      getInf(pam) {
        this.currentRow = {}; //清空选中行        
        this.proCode != this.selectedProName ? (this.proCode = this.selectedProName = this.params.proCode = "") :
          "";
        this.agencyCode != this.selectedAgenName ? (this.agencyCode = this.selectedAgenName = this.params.agencyCode =
          "") : "";
        this.post("/credit/getApplyLedger", pam).then(res => {
          // this.post("http://10.1.26.47:8099/riskManagement/credit/getApplyLedger", pam).then(res => {
          if (res.statusCode == 200) {
            if (res.data) {
              this.tableData = res.data.rows;
              this.totalRecord = res.data.total; // 总数
              // this.changeColor();
            } else {
              this.tableData = [];
              this.totalRecord = 0;
            }
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getProducts() { //产品名称下拉
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            for (let k in res.data) {
              this.production.push(res.data[k])
            }
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      getloanTime() { //借款期限下拉 
        this.get('/credit/getAppduRations?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.loanExp = res.data;
          } else {
            // this.$message.error(res.msg);
            this.$message.error('获取借款期限失败！');

          }
        })
      },
      getAgency() { //获取进件机构下拉
        this.post('/credit/getSmOrgByLevelCate', {
          orgLevel: '06',
          orgCate: '01',
          sort: 'orgCode',
          order: 'asc'
        }).then(res => {
          if (res.statusCode == 200) {
            this.agency = res.data;
          } else {
            // this.$message.error(res.msg);
            this.$message.error('获取进件机构失败！');

          }
        })
      },
      // changeColor() {
      //   for (var i = 0; i < this.tableData.length; i++) {
      //     this.tableData[i].completeTime * 1 >= 48 ? this.tableData[i].isEmer = true : this.tableData[i].isEmer =
      //       false;
      //     if (this.tableData[i].emerType == '00') {
      //       this.tableData[i].emerType = "普通";
      //     } else if (this.tableData[i].emerType == '01') {
      //       this.tableData[i].emerType = "免费加急";
      //     } else if (this.tableData[i].emerType == '02') {
      //       this.tableData[i].emerType = "收费加急";
      //     };
      //   }
      // }
    },
    created() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      // 是否显示导出按钮
      let roleCodesList = false;
      for (let i = 0; i < this.userInf.roleCodesList.length; i++) {
        if (this.userInf.roleCodesList[i] === 'DS99') {
          roleCodesList = true;
          break;
        }
      }
      if (this.userInf.userCode === "superadmin" || this.roleCodesList) {
        this.ExcelBtnShow = true;
      }
      this.params.userCode = this.userInf.userCode; //userCode
      this.Routes = this.$router.options.routes;
      this.getProducts();
      this.getloanTime();
      this.getAgency();
    },
  }

</script>
<style scoped>
  .listContainer {
    margin-bottom: 0;
  }

</style>
