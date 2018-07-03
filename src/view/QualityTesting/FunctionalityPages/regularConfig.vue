<template>
  <div class="taskWatting main-div Height_300">
    <!-- 质检  功能页面 常规抽单配置功能===============出了任务分配按钮 -->
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        质检规则设置查询
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='addInf'>
          <i class="el-icon addIcon"></i>
          <span class="el-icon-text">添加</span>
        </span>
        <span class="icon-item" @click='apportion'>
          <i class="el-icon addIcon"></i>
          <span class="el-icon-text">任务分派</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="drawSheetTypeTxt" label="抽单类型" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="recentDays" label="质检天数" align='center' min-width="120">
        </el-table-column>
        <el-table-column label="抽单比例[每人]" align='center' min-width="180">
          <template slot-scope='scope'>
            <span>{{scope.row.makeRatio | percent}}</span>
          </template>
        </el-table-column>
        <el-table-column label="通过比例[每人]" align='center' min-width="100">
          <template slot-scope='scope'>
            <span>{{scope.row.passRatio | percent}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="minPassNum" label="通过件最低抽单件数[人·件]" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="refuseRatio" label="拒绝比例[每人]" align='center' min-width="140">
          <template slot-scope='scope'>
            <span> {{scope.row.refuseRatio | percent}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="minRefuseNum" label="拒绝件最低抽单件数[人·件]" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="creator" label="创建人" align='center' min-width="120">
        </el-table-column>
        <el-table-column label="创建日期" align='center' min-width="100">
          <template slot-scope='scope'>
            <span>{{scope.row.createTime | dateFilter}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width='120' fixed="right">
          <template slot-scope="scope">
            <el-button class="btn-sm edit" size="small" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- ==============================任务分配=================================== -->
    <!-- <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
      <span>您确定生成质检任务？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="canc">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="CFsave">{{adbtn}}</el-button>
      </span>
    </el-dialog> -->
    <!-- ==============================添加=================================== -->
    <el-dialog title="质检规则新增" :modal="false" :visible.sync="add" width="920px">
      <div class="newContent">
        <ul>
          <li>
            <p>
              <label>
                <b class="required_Red"> * </b>质检天数：</label>
              <span>
                <el-input v-model="addNew.recentDays" placeholder="请输入质检天数" @blur="Num('质检天数',addNew.recentDays)"> </el-input> 天</span>
            </p>
            <p>
              <label></label>
              <span></span>
            </p>
          </li>
          <li>
            <p>
              <label>
                <b class="required_Red"> * </b>抽单类型：</label>
              <span>
                <el-select v-model="addNew.drawSheetType" placeholder="请选择">
                  <el-option v-for=" item in QTSituation" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
              </span>
            </p>
            <p>
              <label>
                <b class="required_Red"> * </b>抽单比例[每人]：</label>
              <span>
                <el-input v-model="addNew.makeRatio" placeholder="请输入抽单比例" @blur="Num('抽单比例',addNew.makeRatio)"> </el-input> %</span>
            </p>
          </li>
          <li>
            <p>
              <label>
                <b class="required_Red"> * </b>通过比例[每人]：</label>
              <span>
                <el-input v-model="addNew.passRatio" placeholder="请输入通过比例" @blur="Num('通过比例',addNew.passRatio)"> </el-input> %</span>
            </p>
            <p>
              <label>
                <b class="required_Red"> * </b>通过件最低抽单件数[人·件]：</label>
              <span>
                <el-input v-model="addNew.minPassNum" placeholder="请输入最低抽单件数" @blur="Num('通过件最低抽单件数',addNew.minPassNum)"> </el-input> 件</span>
            </p>
          </li>
          <li>
            <p>
              <label>
                <b class="required_Red"> * </b>拒绝比例[每人]：</label>
              <span>
                <el-input v-model="addNew.refuseRatio" placeholder="请输入拒绝比例" @blur="Num('拒绝比例',addNew.refuseRatio)"> </el-input> %</span>
            </p>
            <p>
              <label>
                <b class="required_Red"> * </b>拒绝件最低抽单件数[人·件]：</label>
              <span>
                <el-input v-model="addNew.minRefuseNum" placeholder="请输入最低抽单件数" @blur="Num('拒绝件最低抽单件数',addNew.minRefuseNum)"> </el-input> 件</span>
            </p>
          </li>
          <li class="colorGray">
            <p>
              <label>创建人：</label>
              <span>{{ addNew.creator }}</span>
            </p>
            <p>
              <label>创建日期：</label>
              <!-- <span>{{ addNew.createTime }}</span> -->
              <span>{{ addNew.createTime | dateFilter }}</span>
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
    <!-- 编辑 -->
    <el-dialog title="质检规则编辑" :modal="false" :visible.sync="Edit" width="820px">
      <el-form :model="updateInf" :rules="rulesAdd" ref="ruleFormAdd">
        <el-form-item label="质检天数：" prop="recentDays" :label-width="formLeftLabelWidth">
          <el-input v-model="updateInf.recentDays" placeholder="请输入质检天数" @blur="Num('质检天数-编辑',updateInf.recentDays)"> </el-input>
          <span> 天</span>
        </el-form-item>
        <div class="bfc">
          <el-form-item class="fl" label="抽单类型：" prop="drawSheetType" :label-width="formLeftLabelWidth">
            <el-select v-model="updateInf.drawSheetType" placeholder="请选择">
              <el-option v-for=" item in QTSituation" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item  class="fr" label="抽单比例[每人]：" prop="makeRatio" :label-width="formLabelWidth">
            <el-input v-model="updateInf.makeRatio" placeholder="请输入抽单比例" @blur="Num('抽单比例-编辑',updateInf.makeRatio)"> </el-input> %</span>
          </el-form-item>
        </div>
        <div class="bfc">
          <el-form-item class="fl" label="通过比例[每人]：" prop="passRatio" :label-width="formLeftLabelWidth">
            <el-input v-model="updateInf.passRatio" placeholder="请输入通过比例" @blur="Num('通过比例-编辑',updateInf.passRatio)"> </el-input> %</span>
          </el-form-item>
          <el-form-item class="fr" label="通过件最低抽单件数[人·件]：" prop="minPassNum" :label-width="formLabelWidth">
            <el-input v-model="updateInf.minPassNum" placeholder="请输入最低抽单件数" @blur="Num('通过件最低抽单件数-编辑',updateInf.minPassNum)"> </el-input> 件</span>
          </el-form-item>
        </div>
        <div class="bfc">
        <el-form-item  class="fl" label="拒绝比例[每人]：" prop="refuseRatio" :label-width="formLeftLabelWidth">
          <el-input v-model="updateInf.refuseRatio" placeholder="请输入拒绝比例" @blur="Num('拒绝比例',addNew.refuseRatio)"> </el-input> %</span>
        </el-form-item>
        <el-form-item class="fr" label="拒绝件最低抽单件数[人·件]：" prop="minRefuseNum" :label-width="formLabelWidth">
          <el-input v-model="updateInf.minRefuseNum" placeholder="请输入最低抽单件数" @blur="Num('拒绝件最低抽单件数',addNew.minRefuseNum)"> </el-input> 件</span>
        </el-form-item>
        </div>
        <div class="bfc">
        <el-form-item  class="fl" label="创建人：" prop="caseNum" :label-width="formLeftLabelWidth">
          <span>{{ addNew.creator }}</span>
        </el-form-item>
        <el-form-item class="fr" label="创建日期：" prop="caseNum" :label-width="formLabelWidth">
          <span>{{ addNew.createTime | dateFilter }}</span>
        </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="canc">取 消</el-button>
        <el-button type="primary" :loading="loadsitu" @click="SaveEdit('ruleFormAdd')">{{adbtn}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        addNew: { //添加
          recentDays: '',
          drawSheetType: '',
          makeRatio: '',
          passRatio: '',
          minPassNum: '',
          refuseRatio: '',
          minRefuseNum: '',
          creator: '',
          createTime: '',

        },
        updateInf: {}, //编辑
        formLabelWidth: '200px',
        formLeftLabelWidth: '140px',
        recentDays: "",
        rulesAdd: {
          recentDays: [{
            required: true,
            message: '请输入质检天数',
            trigger: 'blur'
          }],
          drawSheetType: [{
            required: true,
            message: '请输入抽单类型',
            trigger: 'blur'
          }],
          makeRatio: [{
            required: true,
            message: '请输入抽单比例',
            trigger: 'blur'
          }],
          passRatio: [{
            required: true,
            message: '请输入通过比例',
            trigger: 'blur'
          }],
          minPassNum: [{
            required: true,
            message: '请输入通过件最低抽单件数',
            trigger: 'blur'
          }],
          refuseRatio: [{
            required: true,
            message: '请输入拒绝比例',
            trigger: 'blur'
          }],
          minRefuseNum: [{
            required: true,
            message: '请输入拒绝件最低抽单件数',
            trigger: 'blur'
          }],
        },
        Confirm: false,
        add: false,
        Edit: false,
        adbtn: '确认',
        loadsitu: false,
        createTime: '',
        query: {
          id: '',
          matchApplyId: "",
        },
        userInf: null,
        tableData: [],
        tableDataTransform: [],
        QTSituation: [{ //抽单类型
          value: '01',
          label: '熟练'
        }, {
          value: '02',
          label: '新人'
        }],
        proficiencyCount: 0,
        newOneCount: 0,
      }
    },
    methods: {
      Num(el, val) { //整数
        // console.log(el, val)
        // console.log(val=='')
        // console.log(Number(val))
        // console.log(parseInt(val))
        // console.log(val === '')
        // console.log(val == null)
        val = val.replace(/\s/g, ''); //去空格，避免输入框出现NaN
        switch (el) {
          case '质检天数':
            val === '' || isNaN(val) || val < 0 ? this.addNew.recentDays = '' : this.addNew.recentDays = parseInt(this.addNew
              .recentDays);
            break;
          case '通过件最低抽单件数':
            val === '' || isNaN(val) || val < 0 ? this.addNew.minPassNum = '' : this.addNew.minPassNum = parseInt(this.addNew
              .minPassNum);
            break;
          case '拒绝件最低抽单件数':
            val === '' || isNaN(val) || val < 0 ? this.addNew.minRefuseNum = '' : this.addNew.minRefuseNum = parseInt(
              this.addNew.minRefuseNum);
            break;
          case '抽单比例':
            val === '' || isNaN(val) || val > 100 || val < 0 ? this.addNew.makeRatio = '' : this.addNew.makeRatio =
              parseFloat(this.addNew.makeRatio);
            break;
          case '通过比例':
            val === '' || isNaN(val) || val > 100 || val < 0 ? this.addNew.passRatio = '' : this.addNew.passRatio =
              parseFloat(this.addNew.passRatio);
            break;
          case '拒绝比例':
            val === '' || isNaN(val) || val > 100 || val < 0 ? this.addNew.refuseRatio = '' : this.addNew.refuseRatio =
              parseFloat(this.addNew.refuseRatio);
            break;
            // 编辑
          case '质检天数-编辑':
            val === '' || val == null || isNaN(val) || val < 0 ? this.updateInf.recentDays = '' : this.updateInf.recentDays =
              parseInt(this.updateInf.recentDays);
            break;
          case '通过件最低抽单件数-编辑':
            val === '' || val == null || isNaN(val) || val < 0 ? this.updateInf.minPassNum = '' : this.updateInf.minPassNum =
              parseInt(this.updateInf.minPassNum);
            break;
          case '拒绝件最低抽单件数-编辑':
            val === '' || val == null || isNaN(val) || val < 0 ? this.updateInf.minRefuseNum = '' : this.updateInf.minRefuseNum =
              parseInt(this.updateInf.minRefuseNum);
            break;
          case '抽单比例-编辑':
            val === '' || val == null || isNaN(val) || val > 100 || val < 0 ? this.updateInf.makeRatio = '' : this.updateInf
              .makeRatio = parseFloat(this.updateInf.makeRatio);
            break;
          case '通过比例-编辑':
            val === '' || val == null || isNaN(val) || val > 100 || val < 0 ? this.updateInf.passRatio = '' : this.updateInf
              .passRatio = parseFloat(this.updateInf.passRatio);
            break;
          case '拒绝比例-编辑':
            val === '' || val == null || isNaN(val) || val > 100 || val < 0 ? this.updateInf.refuseRatio = '' : this.updateInf
              .refuseRatio = parseFloat(this.updateInf.refuseRatio);
            break;
        }
      },
      getListInf() {
        // 质检-常规抽单配置—查询列表        
        this.get("/insMakeRules/getInfoList?" + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.tableDataTransform = res.data;
            for (var i = 0; i < this.tableDataTransform.length; i++) {
              this.tableDataTransform[i].makeRatio = this.tableDataTransform[i].makeRatio * 100;
              this.tableDataTransform[i].passRatio = this.tableDataTransform[i].passRatio * 100;
              this.tableDataTransform[i].refuseRatio = this.tableDataTransform[i].refuseRatio * 100;
              this.tableDataTransform[i].drawSheetType == '01' ? this.proficiencyCount++ : ''; //熟悉
              this.tableDataTransform[i].drawSheetType == '02' ? this.newOneCount++ : ''; //新人
            }
            this.tableData = this.tableDataTransform;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getSystemDate() { //获取系统时间
        this.get("/system/getSystemDate?" + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.createTime = this.addNew.createTime = res.data; //createTime展示给用户看的日期格式，this.addNew.createTime 入参的时间戳格式
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      //  编辑按钮-弹出弹窗
      handleEdit(index, row) {
        console.log(row)
        this.Edit = true;
        // this.updateInf = row;
        // this.recentDays=row.recentDays;
        this.updateInf = Object.assign({}, row);
        this.loadsitu = false;
        this.adbtn = '确定';
      },
      addInf() { //添加 按钮弹窗
        this.add = true;
        this.loadsitu = false;
        this.adbtn = '确定';
      },
      apportion() { //分配 按钮弹窗
        this.$confirm('您确定生成质检任务？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showCancelButton: false
        }).then(() => {
          this.CFsave();
        }).catch(() => {});
      },
      canc() { //弹窗 取消按钮关闭
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
        // this.addNew.creator = '';
        // this.addNew.createTime = '';
      },
      SaveAdd(formName) { //添加  提交
        // if (this.addNew.recentDays === '' || this.addNew.drawSheetType === '' || this.addNew.makeRatio === '' || this.addNew
        //   .passRatio === '' ||
        //   this.addNew.minPassNum === '' || this.addNew.refuseRatio === '' || this.addNew.minRefuseNum === '' || this.addNew
        //   .creator === '' || this.addNew.createTime === '') {
        //   this.$message.error('请输入必填项！');
        //   return
        // }
        //  this.addNew.drawSheetType == '01' ? this.proficiencyCount++ : ''; //熟悉
        //     this.addNew.drawSheetType == '02' ? this.newOneCount++ : ''; //新人
        if ((this.addNew.drawSheetType == '01' && this.proficiencyCount > 0) || (this.addNew.drawSheetType == '02' &&
            this.newOneCount > 0)) { //熟悉
          this.$message.error(' 抽单类型设置重复！');
          return
        }

        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loadsitu = true;
            this.adbtn = '保存中';
            this.post("/insMakeRules/addInfo", {
              drawSheetType: this.addNew.drawSheetType,
              recentDays: this.addNew.recentDays,
              makeRatio: this.addNew.makeRatio / 100,
              passRatio: this.addNew.passRatio / 100,
              minPassNum: this.addNew.minPassNum,
              refuseRatio: this.addNew.refuseRatio / 100,
              minRefuseNum: this.addNew.minRefuseNum,
              creator: this.addNew.creator,
              createTime: this.addNew.createTime
            }).then(res => {
              if (res.statusCode == 200) {
                this.$message({
                  message: '提交成功!',
                  type: 'success'
                });
                this.calcAddinfo();
                this.getListInf();
              } else {
                this.$message.error(res.msg);
                this.getListInf();
              }
            });
            this.add = false;

          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      SaveEdit(formName) { //编辑  提交  
        // if (this.updateInf.recentDays === '' || this.updateInf.recentDays == null ||
        //   this.updateInf.drawSheetType === '' || this.updateInf.drawSheetType == null ||
        //   this.updateInf.makeRatio === '' || this.updateInf.makeRatio == null ||
        //   this.updateInf.passRatio === '' || this.updateInf.passRatio == null ||
        //   this.updateInf.minPassNum === '' || this.updateInf.minPassNum == null ||
        //   this.updateInf.refuseRatio === '' || this.updateInf.refuseRatio == null ||
        //   this.updateInf.minRefuseNum === '' || this.updateInf.minRefuseNum == null
        //   // ||this.updateInf.creator === '' || this.updateInf.creator == null ||
        //   // this.updateInf.createTime === '' || this.updateInf.createTime == null
        // ) {
        //   this.$message.error('请输入必填项！');
        //   return
        // }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loadsitu = true;
            this.adbtn = '保存中';
            this.post("/insMakeRules/updateInfo", {
              id: this.updateInf.id,
              drawSheetType: this.updateInf.drawSheetType,
              recentDays: this.updateInf.recentDays,
              makeRatio: this.updateInf.makeRatio / 100,
              passRatio: this.updateInf.passRatio / 100,
              minPassNum: this.updateInf.minPassNum,
              refuseRatio: this.updateInf.refuseRatio / 100,
              minRefuseNum: this.updateInf.minRefuseNum
            }).then(res => {
              if (res.statusCode == 200) {
                this.$message({
                  message: '提交成功!',
                  type: 'success'
                });
                this.getListInf();
              } else {
                this.$message.error(res.msg);
                this.getListInf();
              }
            });
            this.Edit = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      CFsave() { //任务分配
        // 生成 质检任务接口
        this.post("insTask/addConventionalInsTaskByManual").then(res => {
          if (res.statusCode == 200) {
            this.$message({
              message: '提交成功!',
              type: 'success'
            });
            this.getListInf();
          } else {
            this.$message.error(res.msg);
            this.getListInf();
          }
        });
      },
    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.addNew.creator = this.userInf.userCode;
      // this.addNew.creator = JSON.parse(localStorage.getItem('userInf')).userCode;
      console.log(this.userInf)
      this.getListInf(); //查询
      this.getSystemDate(); //调用系统时间
    },
  }

</script>
<style scoped>
  .taskWatting {
    width: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
    /* 统一导航 --去掉高度*/
    height: 100%;
  }

  .taskWatting label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
  }

  .taskWatting i {
    color: #ff7676;
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
    font-style: normal;
  }

  /* 综合查询页面加上分页pad-bottom 改为20px*/

  .newContent {
    height: 230px;
  }

  .newContent p {
    width: 49%;
    height: 50px;
    float: left;
  }

  .newContent p:nth-of-type(odd) label {
    width: 130px;
  }

  .newContent p:nth-of-type(even) label {
    width: 210px;
  }

  .newContent p span {
    width: 210px;
    display: inline-block;
  }

  .colorGray p label,
  .colorGray p span {
    color: #AEAEAE;
  }

</style>
