<template>
  <!-- <div class="AntiCaseNum IntegratedQuery regularConfig"> -->
  <div class="regularConfig">
    <!-- 质检  功能页面 常规抽单配置功能===============出了任务分配按钮 -->
    <myHead></myHead>
    <div class="content">
      <div class="title">
        <h1>质检规则设置查询</h1>
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
          <!-- drawSheetTypeTxt -->
          <el-table-column prop="drawSheetType" label="抽单类型" align='center' min-width="180">
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
    <!-- ==============================任务分配=================================== -->
    <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
      <span>您确定生成质检任务？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="canc">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="CFsave">{{adbtn}}</el-button>
      </span>
    </el-dialog>
    <!-- ==============================添加=================================== -->
    <el-dialog title="质检规则新增" :modal="false" :visible.sync="add" width="865px">
      <div class="newContent">
        <ul>
          <li>
            <p>
              <label>质检天数：</label>
              <span>
                <el-input v-model="addNew.recentDays " placeholder="请输入质检天数"> </el-input> 天</span>
            </p>
            <p>
              <label></label>
              <span></span>
            </p>
          </li>

          <li>
            <p>
              <label>抽单类型：</label>
              <span>
                <el-select v-model="addNew.drawSheetType" placeholder="请选择">
                  <el-option v-for=" item in QTSituation" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
              </span>
            </p>
            <p>
              <label>抽单比例[每人]：</label>
              <span>
                <el-input v-model="addNew.makeRatio " placeholder="请输入抽单比例"> </el-input> %</span>
            </p>
          </li>
          <li>
            <p>
              <label>通过比例[每人]：</label>
              <span>
                <el-input v-model="addNew.passRatio " placeholder="请输入通过比例"> </el-input> %</span>
            </p>
            <p>
              <label>通过件最低抽单件数[人·件]：</label>
              <span>
                <el-input v-model="addNew.minPassNum " placeholder="请输入最低抽单件数"> </el-input> 件</span>
            </p>
          </li>
          <li>
            <p>
              <label>拒绝比例[每人]：</label>
              <span>
                <el-input v-model="addNew.refuseRatio " placeholder="请输入拒绝比例"> </el-input> %</span>
            </p>
            <p>
              <label>拒绝件最低抽单件数[人·件]：</label>
              <span>
                <el-input v-model="addNew.minRefuseNum " placeholder="请输入最低抽单件数"> </el-input> 件</span>
            </p>
          </li>
          <li class="colorGray">
            <p>
              <label>创建人：</label>
              <span>{{ addNew.creator }}</span>
            </p>
            <p>
              <label>创建日期：</label>
              <span>{{ addNew.createTime }}</span>
            </p>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="calcAddinfo">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveAdd">{{adbtn}}</el-button>
      </span>
    </el-dialog>
    <!-- ==============================编辑=================================== -->
    <el-dialog title="质检规则编辑" :modal="false" :visible.sync="Edit" width="865px">
      <div class="newContent">
        <ul>
          <li>
            <p>
              <label>质检天数：</label>
              <span>
                <el-input v-model="updateInf.recentDays " placeholder="请输入质检天数"> </el-input> 天</span>
            </p>
            <p>
              <label></label>
              <span></span>
            </p>
          </li>
          <li>
            <p>
              <label>抽单类型：</label>
              <span>
                <el-select v-model="updateInf.drawSheetType" placeholder="请选择">
                  <el-option v-for=" item in QTSituation" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
              </span>
            </p>
            <p>
              <label>抽单比例[每人]：</label>
              <span>
                <el-input v-model="updateInf.makeRatio " placeholder="请输入抽单比例"> </el-input> %</span>
            </p>
          </li>
          <li>
            <p>
              <label>通过比例[每人]：</label>
              <span>
                <el-input v-model="updateInf.passRatio " placeholder="请输入通过比例"> </el-input> %</span>
            </p>
            <p>
              <label>通过件最低抽单件数[人·件]：</label>
              <span>
                <el-input v-model="updateInf.minPassNum " placeholder="请输入最低抽单件数"> </el-input> 件</span>
            </p>
          </li>
          <li>
            <p>
              <label>拒绝比例[每人]：</label>
              <span>
                <el-input v-model="updateInf.refuseRatio " placeholder="请输入拒绝比例"> </el-input> %</span>
            </p>
            <p>
              <label>拒绝件最低抽单件数[人·件]：</label>
              <span>
                <el-input v-model="updateInf.minRefuseNum " placeholder="请输入最低抽单件数"> </el-input> 件</span>
            </p>
          </li>
          <li class="colorGray">
            <p>
              <label>创建人：</label>
              <span>{{ updateInf.creator }}</span>
            </p>
            <p>
              <label>创建日期：</label>
              <span>{{ updateInf.createTime }}</span>
            </p>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="canc">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveEdit">{{adbtn}}</el-button>
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
        addNew: {
          recentDays: null,
          drawSheetType: null,
          makeRatio: null,
          passRatio: null,
          minPassNum: null,
          refuseRatio: null,
          minRefuseNum: null,
          creator: null,
          createTime: null,
        },
        updateInf: {},
        Confirm: false,
        add: false,
        Edit: false,
        adbtn: '确认',
        loadsitu: false,

        query: {
          id: '',
          matchApplyId: "",
        },
        userInf: null,
        tableData: [{

        }],
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

        QTSituation: [{ //抽单类型
          value: '01',
          label: '熟人'
        }, {
          value: '02',
          label: '生人'
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
      getListInf() {
        // 质检-常规抽单配置—查询列表        
        this.get("/insMakeRules/getInfoList?" + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      //  编辑按钮-弹出弹窗
      handleEdit(index, row) {
        console.log(index, row);
        this.Edit = true;
        this.updateInf = row;
      },
      addInf() { //添加 按钮弹窗
        console.log('tianjia')
        this.add = true;
        this.loadsitu = false;
        this.adbtn = '确定';
      },
      apportion() { //分配 按钮弹窗
        console.log('apportion')
        this.Confirm = true;
        this.loadsitu = false;
        this.adbtn = '确定';
      },
      canc() { //弹窗 取消按钮关闭
        console.log('取消任务分配')
        this.Confirm = false;
        this.Edit = false;
      },
      calcAddinfo() {
        this.add = false;
        this.addNew.recentDays = '';
        this.addNew.drawSheetType = '';
        this.addNew.makeRatio = '';
        this.addNew.passRatio = '';
        this.addNew.minPassNum = '';
        this.addNew.refuseRatio = '';
        this.addNew.minRefuseNum = '';
        this.addNew.creator = '';
        this.addNew.createTime = '';
    },
    SaveAdd() { //添加  提交
      this.loadsitu = true;
      this.adbtn = '保存中';
      this.post("/insMakeRules/addInfo", this.addNew).then(res => {
        if (res.statusCode == 200) {
          this.$message({
            message: '提交成功!',
            type: 'success'
          });
        } else {
          this.$message.error(res.msg);
        }
      });
      this.getListInf();
    },
    SaveEdit() { //编辑  提交
      this.loadsitu = true;
      this.adbtn = '保存中';
      this.post("/insMakeRules/updateInfo", {
        id: this.updateInf.id,
        drawSheetType: this.updateInf.drawSheetType,
        recentDays: this.updateInf.recentDays,
        makeRatio: this.updateInf.makeRatio,
        passRatio: this.updateInf.passRatio,
        minPassNum: this.updateInf.minPassNum,
        refuseRatio: this.updateInf.refuseRatio,
        minRefuseNum: this.updateInf.minRefuseNum
      }).then(res => {
        if (res.statusCode == 200) {
          this.$message({
            message: '提交成功!',
            type: 'success'
          });
        } else {
          this.$message.error(res.msg);
        }
      });
      this.getListInf();
    },
    CFsave() { //分配  提交
      console.log('任务分配')
      this.loadsitu = true;
      this.adbtn = '保存中';
      // 生成 质检任务接口------选中某一条还是全部生成--待确认---------接口未开发
      this.post("insMakeRules/addInfo", {
        drawSheetType: 'xx',
        recentDays: 10,
        makeRatio: 0.3,
        passRatio: 0.4,
        minPassNum: 3,
        refuseRatio: 0.2,
        minRefuseNum: 3,
        creator: xx,
        createTime: 'xxx'
      }).then(res => {
        if (res.statusCode == 200) {
          this.$message({
            message: '提交成功!',
            type: 'success'
          });
        } else {
          this.$message.error(res.msg);
        }
      });
      this.getListInf();
    },
    //   handleSizeChange(val) {
    //     this.params.pageSize = val;
    //     this.params.pageNum = 1;
    //     // this.getInf(this.params);
    //     this.inquire(this.params);
    //   },

    handleCurrentChange(val) {
      // this.query.id = val.id;
      // this.query.matchApplyId = val.applyId;
      // localStorage.setItem("query", JSON.stringify(this.query));
      // this.$router.push('/MatchingInfQuery');

      // this.params.pageNum = val;
      // this.inquire(this.params);
    },
  },
  mounted() {
      //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
      //   this.params.applySubno = this.params.applySubno.replace(this.reg, this.reVal)
      //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
      //   this.params.pageNum = this.currentPage, //页数（第几页）
      //     this.params.pageSize = this.pageCount, //页面显示行数
      this.getListInf();
    },
    components: {
      myHead
    }
  }

</script>
<style scoped>
  .regularConfig {
    width: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
    /* 统一导航 --去掉高度*/
    height: 100%;
  }

  .regularConfig label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    /* width: 126px; */
    /* height: 20px; */
    /* margin-right: 10px; */
  }

  .regularConfig i {
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

  .newContent {
    /* background:red; */
    height: 230px;
  }

  .newContent p {
    width: 49%;
    height: 50px;
    float: left;
  }

  .newContent p:nth-of-type(odd) label {
    width: 115px;
  }

  .newContent p:nth-of-type(even) label {
    width: 185px;
  }

  .colorGray p label,
  .colorGray p span {
    color: #AEAEAE;
  }

</style>
