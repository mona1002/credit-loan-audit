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
              <el-date-picker v-model="ploanDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </p>
            <p>
              <label> 进件机构</label>
              <el-select v-model="params.shopCodes" placeholder="请选择">
                <el-option v-for="item in ReconsiderType" :key="item.value" :label="item.label" :value="item.value">
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
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
              <el-select v-model="params.mainReasonIds" multiple placeholder="请选择">
                <el-option v-for="item in ReconsiderType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </li>
          <li>
            <p>
              <label> 拒绝子原因 </label>
              <el-select v-model="params.subReasonIds" multiple placeholder="请选择">
                <el-option v-for="item in ReconsiderType" :key="item.value" :label="item.label" :value="item.value">
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
          <span @click="allot">
            <img src="../../../../static/images/add.png" style=" vertical-align: middle;"> 批量转分派
          </span>
        </h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" height="100%" @current-change="handleCurrentChange" border>
          <el-table-column type="selection" align='center' width="55">
          </el-table-column>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="applySubNo" label="审批结论时间" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="applySubNo" label="初审姓名" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="custName" label="初审编号" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="certCode" label="终审姓名" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="proName" label="终审编号" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="auditNamec" label="产品名称" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="auditNamez" label="业务状态" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="auditDatez" label="拒绝主原因" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="checkStateTxt" label="拒绝子原因" align='center' min-width="100">
          </el-table-column>
        </el-table>
        <!-- 分页  -->
        <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handlePageChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../../header.vue';
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        ploanDate: [],
        tableData: [],
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
          shopCodes: '', //	进件机构
          userCode: '', //	初终审编号
          proCodes: '', //	产品
          busiState: '', //	业务状态
          mainReasonIds: '', //	拒绝主原因
          subReasonIds: '', //	拒绝子原因
        },
        QTtime: '',
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        RresetParams: {
          // pageParam: {
          //   pageNum: 1, //当前页
          //   pageSize: 10, //每页的显示数量
          // },
         ploanDateBegin: '', //审批结论开始时间
          ploanDateEnd: '', //审批结论结束时间
          shopCodes: '', //	进件机构
          userCode: '', //	初终审编号
          proCodes: '', //	产品
          busiState: '', //	业务状态
          mainReasonIds: '', //	拒绝主原因
          subReasonIds: '', //	拒绝子原因
        },
        totalRecord: 0, //总条数
        ProductName: [{ //产品名称
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        QTSituation: [{ //质检状态
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
busiStateSelect:[],
        ReconsiderType: [{ //复议状态
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        multipleSelection: []
      }
    },
    methods: {
      allot() {

      },
      handleSizeChange(val) {
        this.params.pageParam.pageSize = val;
        this.inquire(this.params);
      },
      handlePageChange(val) {
        this.params.pageParam.pageNum = val;
        this.inquire(this.params);
      },
      Rreset() {
        this.params = this.RresetParams; //全部清空
        this.inquire(this.params);
      },
      Rsearch() {
        this.params.ploanDateBegin = this.ploanDate[0];
        this.params.ploanDateEnd = this.ploanDate[1];
        // this.params.pageParam.pageNum = this.currentPage = 1;
        this.inquire(this.params);
      },
      inquire(pam) {
        // 质检-复议结果查询功能----------------------------------------------------接口地址未添加
        this.post("", pam).then(res => {
          if (res.statusCode == 200) {
            // for (var i = 0; i < res.data.length; i++) {
            //   if (res.data[i].certCode) {
            //     res.data[i].certCode = res.data[i].certCode.replace(this.reg, this.reVal);
            //   }
            //   if (res.data[i].mobile) {
            //     res.data[i].mobile = res.data[i].mobile.replace(this.Telreg, this.telVal);
            //   }
            // }
            this.tableData = res.data.recordList;
            this.totalRecord = res.data.totalRecord; //总记录数
            // res.data. totalPage // 总页数
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      getServiceStates() {
        this.get('/system/getAllBusiState' + Math.random())
          .then(res => {
            console.log(res);
            if (res.statusCode == '200') {
              this.busiStateSelect = res.data;
            } else {
              this.$message(res.msg);
            }
          })
      },
      // 点击tab每一行数据切换 value 值
      handleCurrentChange(val) {
        console.log(val)
        // this.query.id = val.id;
        // this.query.matchApplyId = val.applyId;
        // localStorage.setItem("query", JSON.stringify(this.query));
        // this.$router.push('/MatchingInfQuery');
        // this.gopath();
        // this.params.pageNum = val;
        // this.inquire(this.params);
      },
    },
    mounted() {
      // this.inquire(this.params);

      //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
      //   this.params.applySubno = this.params.applySubno.replace(this.reg, this.reVal)
      //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
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
    height: calc( 100% - 370px);
  }

  .paging {
    /* margin-top: 15px; */
    text-align: center;
    /* 统一导航 */
    margin-top: 28px;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
