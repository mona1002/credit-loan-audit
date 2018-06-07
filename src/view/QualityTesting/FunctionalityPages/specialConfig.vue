<template>
  <!-- 专纵项抽单配置功能===业务状态接口-基础接口4 -->
  <!-- <div class="batchApportion"> -->
  <div class="AntiCaseNum IntegratedQuery">
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <ul>
          <li>
            <p>
              <label> 审批结论时间 </label>
              <el-date-picker v-model="ploanDate" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </p>
            <p>
              <label> 进件机构</label>
              <el-select v-model="params.operOrgCodes" multiple placeholder="请选择">
                <el-option v-for="item in shopCodesSelection" :key="item.code" :label="item.name" :value="item.code">
                  <span style="float: left">{{ item.name }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
                </el-option>
              </el-select>
            </p>
            <p>
              <label> 初终审编号</label>
              <el-input v-model="params.userCode" placeholder="请输入初审人员"></el-input>
            </p>
          </li>
          <li>
            <p>
              <label> 产品名称</label>
              <el-select v-model="params.proCodes" multiple placeholder="请选择">
                <el-option v-for="item in production" :key="item.code" :label="item.name" :value="item.code">
                  <span style="float: left">{{ item.name }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
                </el-option>
              </el-select>
            </p>
            <p>
              <label> 业务状态</label>
              <el-select v-model="params.busiState" placeholder="请选择">
                <el-option v-for="item in busiStateSelect" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </p>
            <p>
              <label> 拒绝主原因</label>
              <el-select v-model="params.mainReasonIds" placeholder="请选择" @change='selectSubRea(params.mainReasonIds)'>
                <el-option v-for="item in mainReason" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </p>
          </li>
          <li>
            <p>
              <label> 拒绝子原因 </label>
              <el-select v-model="params.subReasonIds" multiple placeholder="请选择">
                <el-option v-for="item in secondReason" :key="item.id" :label="item.reasonName" :value="item.id">
                </el-option>
              </el-select>
            </p>
            <p>
            </p>
            <p class="btn_wrap">
              <el-button class="btn" type="primary" style="marginLeft:228px" @click="Rsearch">查询</el-button>
              <el-button class="btn" type="primary" @click="Rreset">重置</el-button>
            </p>
          </li>
        </ul>
      </div>
      <div class="title">
        <h1>质检任务分派查询
          <span @click="apportion">
            <!-- <span @click="allot"> -->
            <img src="../../../../static/images/add.png" style=" vertical-align: middle;"> 任务分派
          </span>
        </h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
          <el-table-column type="selection" align='center' width="55">
          </el-table-column>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="ploanDate" label="审批结论时间" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="operOrgName" label="进件机构" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="auditNamec" label="初审姓名" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="auditCodec" label="初审编号" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="auditNamez" label="终审姓名" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="auditCodez" label="终审编号" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="proName" label="产品名称" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="busiStateTxt" label="业务状态" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="mainReasonName" label="拒绝主原因" align='center' min-width="220">
          </el-table-column>
          <el-table-column prop="subReasonName" label="拒绝子原因" align='center' min-width="160">
          </el-table-column>
        </el-table>
        <!-- 分页  -->
        <!-- <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handlePageChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div> -->
      </div>
    </div>
    <!-- ==============================任务分配=================================== -->
    <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
      <span>您确定生成质检任务？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="Confirm=false">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="allot">{{adbtn}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import myHead from '../../header.vue';
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        Confirm: false,
        loadsitu: false,
        adbtn: '确定',
        ploanDate: '',
        tableData: [],
        production: [], //产品下拉
        mainReason: [], //拒绝主原因下拉
        secondReason: [], //拒绝子原因下拉
        shopCodesSelection: [], //进件机构下拉
        userInf: '',
        mainReasonId: '',
        allotParams: {
          operCode: '',
          operName: '',
          list: []
        },
        // reg: /(\w{6})\w*(\w{4})/,
        // Telreg: /(\w{7})\w*/,
        // reVal: '$1********$2',
        // telVal: '$1****',
        params: {
          // pageParam: {
          //   pageNum: 1, //当前页
          //   pageSize: 10, //每页的显示数量
          // },
          ploanDateBegin: '', //审批结论开始时间
          ploanDateEnd: '', //审批结论结束时间
          operOrgCodes: '', //	进件机构       多选
          userCode: '', //	初终审编号
          proCodes: '', //	产品          多选
          busiState: '', //	业务状态     
          mainReasonIds: '', //	拒绝主原因      多选
          subReasonIds: '', //	拒绝子原因      多选
        },
        QTtime: '',
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        busiStateSelect: [],
      }
    },
    methods: {
      apportion() { //分配 按钮弹窗
        this.Confirm = true;
        this.loadsitu = false;
        this.adbtn = '确定';
      },
      allot() { //批量转分派
        this.loadsitu = true;
        this.adbtn = '保存中';
        this.post("/insTask/addSpecialInsTask", this.allotParams).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '提交成功！'
            })
            this.inquire(this.params);
            this.Confirm = false;
          } else {
            this.$message.error('批量转分派失败');
            this.inquire(this.params);
            this.Confirm = false;
          }
        });
      },
      Rreset() { // 重置
        this.params.ploanDateBegin = ''; //审批结论开始时间
        this.params.ploanDateEnd = ''; //审批结论结束时间
        this.params.operOrgCodes = []; //	进件机构       多选
        this.params.userCode = ''; //	初终审编号
        this.params.proCodes = []; //	产品          多选
        this.params.busiState = ''; //	业务状态     
        this.params.mainReasonIds = ''; //	拒绝主原因     
        this.params.subReasonIds = []; //	拒绝子原因      多选
        this.secondReason = []; //	拒绝子原因     下拉内容
        this.ploanDate = ''; //审批结论时间数组
      },
      Rsearch() { // 查询
        if (this.ploanDate == '' && this.params.operOrgCodes == '' && this.params.userCode == '' && this.params.proCodes ==
          '' && this.params.busiState == '' && this.params.mainReasonIds == '' && this.params.subReasonIds == '') {
          this.$message.error('请输入查询条件')
          return
        }
        this.ploanDate[0] ? this.params.ploanDateBegin = this.ploanDate[0] : this.params.ploanDateBegin = '';
        this.ploanDate[1] ? this.params.ploanDateEnd = this.ploanDate[1] : this.params.ploanDateEnd = '';
        this.inquire(this.params);
      },
      inquire(pam) { //查询列表     质检-复议结果查询功能
        this.post("/insTask/getSpecialInsTaskList", pam).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
            // this.totalRecord = res.data.totalRecord; //总记录数
            // res.data. totalPage // 总页数
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      getSelection() { //查询所有下拉
        this.get("/insTask/initSpecialInsTaskPage?" + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.busiStateSelect = res.data.busiStateList; // 业务状态
            this.mainReason = res.data.mainReasonList; // 拒绝主原因
            this.shopCodesSelection = res.data.orgList; // 进件机构
            this.production = res.data.proList; // 产品名称
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      selectSubRea(id) { //查询子原因
        this.get("/credit/findNodeFirstChildren", {
          id: id
        }).then(res => {
          if (res.statusCode == 200) {
            this.secondReason = res.data;

          } else {
            this.$message.error(res.msg);
          }
        });
      },
      handleSelectionChange(val) {
        this.allotParams.list = val;
      },
    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.allotParams.operCode = this.userInf.userCode;
      this.allotParams.operName = this.userInf.userName;
      // this.getProducts(); //查询产品
      // this.getBusiState(); //获取业务状态下拉
      this.getSelection(); //获取所有下拉
      //   this.params.pageNum = this.currentPage, //页数（第几页）
      //  this.params.pageParam.pageNum = this.currentPage = 1;
      //     this.params.pageSize = this.pageCount, //页面显示行数
    },
    components: {
      myHead
    }
  }

</script>
<style scoped>
  .AntiCaseNum {
    width: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
    /* 统一导航 --去掉高度*/
    height: 100%;
  }

  .AntiCaseNum label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    width: 126px;
    height: 20px;
    margin-right: 10px;
  }

  .AntiCaseNum i {
    color: #ff7676;
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
    font-style: normal;
  }

  .content {
    padding: 30px 30px;
    width: 100%;
    height: calc( 100% - 70px);
    /* 统一导航 */
    /* height: 100%; */
  }

  .search {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    padding-bottom: 20px;
    height: auto;
  }

  .search li {
    clear: both;
    height: 55px;
  }

  .search li p {
    width: 33.3%;
    float: left;
    margin-top: 20px;
  }

  .btn_wrap {
    margin-top: 20px;
    height: 33px;
    width: calc( 66.6% + 394px);
  }

  .btn {
    border-radius: 8px;
    width: 79px;
    font-size: 14px;
    line-height: 33px;
    padding: 0;
  }

  .noBk {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    opacity: 0.75;
    background: #ebedf8;
    border-radius: 6px;
    width: 100%;
    height: 50px;
  }

  .title h1 {
    font-size: 16px;
    color: #1f2d3d;
    padding-left: 37px;
    text-align: left;
    line-height: 50px;
    padding-right: 37px;
  }

  .title span {
    float: right;
    cursor: pointer;
  }

  /* 综合查询页面加上分页pad-bottom 改为20px*/

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px 25px 20px 25px;
    width: 100%;
    /* height: auto; */
  }

  .paging {
    text-align: center;
    /* 统一导航 */
    margin-top: 28px;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
