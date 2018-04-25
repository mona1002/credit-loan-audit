<template>
  <div class="AntiCaseNum IntegratedQuery">
    <!-- 质检  功能页面 常规抽单配置功能 -->
    <myHead></myHead>
    <div class="content">
      <div class="title">
        <h1>质检信息</h1>
        <div class="icon_wrap">
          <span class="icon" @click="addInf">
            <img src="../../../../static/images/add.png" style="margin:10px;">
            <span class="span-text">添加</span>
          </span>
          <span class="icon" @click="apportion">
            <img src="../../../../static/images/add.png">
            <span class="span-text">任务分派</span>
          </span>
        </div>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" height="100%" @current-change="handleCurrentChange" border>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="drawSheetTypeTxt" label="抽单类型" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="recentDays" label="质检天数" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="makeRatio" label="抽单比例[每人]" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="passRatio" label="通过比例[每人]" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="minPassNum" label="通过件最低抽单件数[人·件]" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="refuseRatio" label="拒绝比例[每人]" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="minRefuseNum" label="拒绝件最低抽单件数[人·件]" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="creator" label="创建人" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="creator" label="创建日期" align='center' min-width="100">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页  -->
        <!-- <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div> -->
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
        query: {
          id: '',
          matchApplyId: "",
        },
        userInf: null,
        tableData: [],
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        params: {
          applySubno: '',
          custName: '',
          certCode: '',
          mobile: '',
          //   pageNum: '', //页数（第几页）
          //   pageSize: '', //页面显示行数
        },
        // currentPage: 1, //分页选中页
        // pageCount: 10, // 每页显示条数
        // totalRecord: 0, //总条数
        value: '',

        QTSituation: [{
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
        RiskType: [{
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
      }
    },
    methods: {
      //  编辑按钮
      handleEdit(index, row) {
        console.log(index, row);
      },
      apportion(){

      },
      num(el, val) {
        switch (el) {
          case 'Subno':
            isNaN(this.params.applySubno) ? this.params.applySubno = '' : this.params.applySubno;
            break;
          case 'mobile':
            isNaN(this.params.mobile) ? this.params.mobile = '' : this.params.mobile;
            break;
        }
      },

      //   handleSizeChange(val) {
      //     this.params.pageSize = val;
      //     this.params.pageNum = 1;
      //     // this.getInf(this.params);
      //     this.inquire(this.params);
      //   },
      gopath() {
        this.$store.dispatch('addVisitedViews', {
          name: '综合查询-查看',
          path: '/MatchingInfQuery',
          flag: '',
          params: '',
          StatefullPath: '/MatchingInfQuery',
        })
      },
      handleCurrentChange(val) {
        this.query.id = val.id;
        this.query.matchApplyId = val.applyId;
        localStorage.setItem("query", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQuery');
        this.gopath();
        // this.params.pageNum = val;
        // this.inquire(this.params);
      },
      Rreset() {
        this.params.applySubno = '';
        this.params.custName = '';
        this.params.certCode = '';
        this.params.mobile = '';
      },
      Rsearch() {
        // this.params.pageNum = this.currentPage = 1;
        if (this.params.applySubno != '' || this.params.custName != '' || this.params.certCode != '' || this.params.mobile !=
          '') {
          this.inquire(this.params);
        } else {
          this.$message.error('请输入查询条件')
        }
      },
      inquire(pam) {
        // 基础接口-综合查询
        this.post("applyInfoPool/multipleQuery", pam).then(res => {
          if (res.statusCode == 200) {
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].certCode) {
                res.data[i].certCode = res.data[i].certCode.replace(this.reg, this.reVal);
              }
              if (res.data[i].mobile) {
                res.data[i].mobile = res.data[i].mobile.replace(this.Telreg, this.telVal);
              }
            }
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
    },
    mounted() {
      //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
      //   this.params.applySubno = this.params.applySubno.replace(this.reg, this.reVal)
      //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
      //   this.params.pageNum = this.currentPage, //页数（第几页）
      //     this.params.pageSize = this.pageCount, //页面显示行数
      // 质检-常规抽单配置—查询列表

      this.get("/insMakeRules/getInfoList").then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data.recordList;
          } else {
            this.$message.error(res.msg);
          }
        });
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
    height: calc( 100% - 100px);
    /* 统一导航 */
    /* height: 100%; */
  }

  /* .search {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    padding-bottom: 20px;
    height: auto;
  } */

  /* .search li {
    clear: both;
    height: 55px;
  } */

  /* .search li p {
    width: 33.3%;
    float: left;
    margin-top: 20px;
  } */

  /* .btn_wrap {
    margin-top: 20px;
    height: 33px;
    width: calc( 66.6% + 394px);
  } */

  /* .btn {
    border-radius: 8px;
    width: 79px;
    font-size: 14px;
    line-height: 33px;
    padding: 0;
  } */

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
    font-size: 16px;
  }

  .title h1 {
    color: #1f2d3d;
    padding-left: 37px;
    text-align: left;
    line-height: 50px;
    padding-right: 37px;
    float: left;
  }

  .icon_wrap {
    float: right;
    height: 50px;
    vertical-align: middle;
    line-height: 50px;
  }

  .icon_wrap span {
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
    cursor: pointer;
  }

  .icon_wrap span img {
    vertical-align: middle;
  }

  /* 综合查询页面加上分页pad-bottom 改为20px*/

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px 25px 20px 25px;
    width: 100%;
    height: calc( 100% - 50px);
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
