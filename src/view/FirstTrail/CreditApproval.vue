<!-- 信审 - 审批 -->
<template>
  <div class="creditApproval-class" style="padding:10px">
    <div class="address-title">
      概要信息
    </div>
    <el-form style="padding:0 20px;width:100%; height:150px; ">
      <el-form-item label="审批人:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="申请类型:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="进件编号:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="证件类型:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="证件号码:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="产品名称:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="申请期限[元]" class="item-column3">
        {{title}}
      </el-form-item>
    </el-form>
    <div class="btn-div">
      <el-button icon="el-icon-check" class="credit-btn" @click="open">挂起</el-button>
      <el-button icon="el-icon-check" class="credit-btn" @click="coverFn('02')">回退</el-button>
      <el-button icon="el-icon-check" class="credit-btn" @click="coverFn('01')">拒绝</el-button>
      <el-button icon="el-icon-check" class="credit-btn" @click="coverFn('07')">放弃</el-button>
      <el-button icon="el-icon-check" class="credit-btn" @click="coverFn('03')">审批</el-button>
      <el-button icon="el-icon-check" class="credit-btn">发起反欺诈</el-button>
      <el-button icon="el-icon-check" class="credit-btn" @click="coverFn('spjl')">审批结论轨迹</el-button>
      <el-button icon="el-icon-check" class="credit-btn" @click="coverFn('lcgj')">流程轨迹</el-button>
    </div>
    <!-- 弹窗 -->
    <div class="cover-view" v-show="coverShow">
      <!-- 回退 02 拒绝 01 放弃 07-->
      <el-form v-show=" this.showFlag=='02' || this.showFlag=='01' || this.showFlag=='07'" class="back-form">
        <div class="form-title" style="position:relative;" v-show="this.showFlag=='02'">
          回退信息
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="form-title" style="position:relative;" v-show="this.showFlag=='01'">
          拒绝原因
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="form-title" style="position:relative;" v-show="this.showFlag=='07'">
          放弃原因
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="back-form-li" v-show="this.showFlag==1">
          <el-form-item label="回退节点:">
            <el-select v-model="form.region" placeholder="请选择电话类型">
              <el-option label="申请登记" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="主原因:" class="item-column2">
            <el-select v-model="form.region" placeholder="请选择电话类型">
              <el-option label="住址电话" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="子原因:" class="item-column2">
            <el-select v-model="form.region" placeholder="请选择电话类型">
              <el-option label="住址电话" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
          <el-form-item label="原因说明:">
            <el-input type="textarea" resize="none"></el-input>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="经办人:" class="item-column2">
            <!-- <el-form-item label="0128155">
          </el-form-item> -->
            561513651
          </el-form-item>
          <el-form-item label="经办时间:" class="item-column2">
            <!-- <el-form-item label="2018-04-01">
          </el-form-item> -->
            2018-04-01
          </el-form-item>
        </div>
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <!-- 回退 -->
          <el-button type="info" plain v-show="this.showFlag=='02'" @click="submitFn('02')">提交</el-button>
          <el-button type="info" plain v-show="this.showFlag=='01'" @click="submitFn('01')">提交</el-button>
          <el-button type="info" plain v-show="this.showFlag=='07'" @click="submitFn('07')">提交</el-button>
          <el-button type="info " plain @click="showFlag=0,coverShow=false;">返回</el-button>
        </div>
      </el-form>
      <!-- 审批 03-->
      <el-form v-show=" this.showFlag=='03'" class="back-form appro-form">
        <div class="form-title" style="position:relative;" v-show="this.showFlag=='03'">
          审批信息
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div style="padding:5px;padding-top:0;">
          <div class="form-title">
            申请信息
          </div>
          <div class="back-form-li">
            <el-form-item label="申请金额[元]:" class="item-column2">
              80,000,00
            </el-form-item>
            <el-form-item label="申请期限[月]:" class="item-column2">
              18
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="申请产品:" class="item-column2">
              诺工贷
            </el-form-item>
            <el-form-item label="可接受最高每期还款额[元]:" class="item-column2">
              8,899.00
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="信用评分:" class="item-column2">
              6.19
            </el-form-item>
            <el-form-item label="申请类型:" class="item-column2">
              非循环贷
            </el-form-item>
          </div>
          <div class="form-title">
            信审核实信息
          </div>
          <el-form-item label="核实可接受最高每期还款额[元]:" style="width:300px;">
            8,000.00
          </el-form-item>
          <div class="form-title">
            审批信息
          </div>
          <div class="back-form-li">
            <el-form-item label="结论">
              <el-radio-group v-model="form.resource">
                <el-radio label="同意"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="月核实收入[元]:" class="item-column2">
              <el-input v-model="form.money"></el-input>
            </el-form-item>
            <el-form-item label="批准产品" class="item-column2">
              <el-select v-model="form.region" placeholder="请选择电话类型">
                <el-option label="产品1" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="批准期限[月]:" class="item-column2">
              <el-input v-model="form.month"></el-input>
            </el-form-item>
            <el-form-item label="批准金额[元]:" class="item-column2">
              <el-input v-model="form.money"></el-input>
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="审批倍数:" class="item-column2">
              审批倍数
            </el-form-item>
            <el-form-item label="月还款额[元]:" class="item-column2">
              156515
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="内部负债率:" class="item-column2">
              内部负债率
            </el-form-item>
            <el-form-item label="总信用负债率:">
              总信用负债率
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="总负债率:">
              总负债率
            </el-form-item>
          </div>
          <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
            <el-form-item label="意见说明:">
              <el-input type="textarea" resize="none"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button type="info" plain v-show="this.showFlag=='03'" @click="submitFn('03')">提交</el-button>
          <el-button type="info " plain @click="showFlag=0,coverShow=false;">返回</el-button>
        </div>
      </el-form>
      <!-- 审批结论轨迹 -->
      <div v-show=" this.showFlag=='spjl'" class="spjl-div">
        <div class="form-title" style="position:relative;">
          信审审批结论轨迹
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <el-table :data="tableData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
          <el-table-column prop="verIncome" label="核实收入[元]">
          </el-table-column>
          <el-table-column prop="proCode" label="批准产品">
          </el-table-column>
          <el-table-column prop="ploanAmt" label="批准金额[元]">
          </el-table-column>
          <el-table-column prop="ploanTerm" label="批准期限[月]">
          </el-table-column>
          <el-table-column prop="appmult" label="审批倍数">
          </el-table-column>
          <el-table-column prop="eachTermamt" label="每期还款额[元]">
          </el-table-column>
          <el-table-column prop="inteDebitrate" label="内部负债率">
          </el-table-column>
          <el-table-column prop="address" label="总信用负债率">
          </el-table-column>
          <el-table-column prop="totalRate" label="总负债率">
          </el-table-column>
          <el-table-column prop="appConclusion" label="审批结论">
          </el-table-column>
          <el-table-column prop="auditDate" label="审批时间">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block tool-bar">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
          </el-pagination>
        </div>
      </div>
      <!-- 流程轨迹 -->
      <div v-show=" this.showFlag=='lcgj'" class="lcgj-div">
        <div class="form-title" style="position:relative;">
          信审审批结论轨迹
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div>
          <div style="position:relative;">
            信审流程轨迹
          </div>
          <el-table :data="tableData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="verIncome" label="任务节点">
            </el-table-column>
            <el-table-column prop="proCode" label="任务类型">
            </el-table-column>
            <el-table-column prop="ploanAmt" label="进入本环节时间">
            </el-table-column>
            <el-table-column prop="ploanTerm" label="任务状态">
            </el-table-column>
            <el-table-column prop="appmult" label="处理人">
            </el-table-column>
            <el-table-column prop="eachTermamt" label="处理时间">
            </el-table-column>
            <el-table-column prop="inteDebitrate" label="处理结论">
            </el-table-column>
            <el-table-column prop="address" label="意见说明">
            </el-table-column>
          </el-table>
        </div>
        <!-- 反欺诈流程 -->
        <!-- <div>
          <div style="position:relative;">
            反欺诈流程
          </div>
          <el-table :data="tableData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
            <el-table-column prop="verIncome" label="任务节点">
            </el-table-column>
            <el-table-column prop="proCode" label="任务类型">
            </el-table-column>
            <el-table-column prop="ploanAmt" label="进入本环节时间">
            </el-table-column>
            <el-table-column prop="ploanTerm" label="任务状态">
            </el-table-column>
            <el-table-column prop="appmult" label="处理人">
            </el-table-column>
            <el-table-column prop="eachTermamt" label="处理时间">
            </el-table-column>
            <el-table-column prop="inteDebitrate" label="处理结论">
            </el-table-column>
            <el-table-column prop="address" label="意见说明">
            </el-table-column>
          </el-table>
        </div> -->
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button type="info " plain @click="showFlag=0,coverShow=false;">返回</el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      // 挂起

      model: '',
      title: '123',
      coverShow: false, // 弹窗
      showFlag: 0, // 要显示的 模块,
      form: {},
      tableData: [{
          verIncome: 'verIncome',
          proCode: 'proCode',
          ploanAmt: 'ploanAmt',
          ploanTerm: 'ploanTerm',
          appmult: 'appmult',
          eachTermamt: 'eachTermamt',
          inteDebitrate: 'inteDebitrate',
          address: 'address',
          totalRate: 'totalRate',
          appConclusion: 'appConclusion',
          auditDate: 'auditDate'
        },
        {
          verIncome: 'verIncome',
          proCode: 'proCode',
          ploanAmt: 'ploanAmt',
          ploanTerm: 'ploanTerm',
          appmult: 'appmult',
          eachTermamt: 'eachTermamt',
          inteDebitrate: 'inteDebitrate',
          address: 'address',
          totalRate: 'totalRate',
          appConclusion: 'appConclusion',
          auditDate: 'auditDate'
        }
      ],
      currentPage: 0
    }
  },
  mounted(){
    // 页面创建的时候  找数据 
    // 这里的数据是 申请信息 中存到本地的信息
    // var taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));

    
  },
  methods: {
    // open 打开 自定义 弹窗   挂起
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [
          h('span', null, '确定操作? '),
          // h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            // instance.confirmButtonLoading = true;
            // instance.confirmButtonText = '执行中...';
            // setTimeout(() => {
            //   // done();
            //   console.log("挂起")
            //   setTimeout(() => {
            //     // instance.confirmButtonLoading = false;
            //     // console.log("挂起1")
            //   }, 300);
            // }, 500);



            // 点击 确认 提交 方法
            this.post("/creauditInfo/approveHang ", {
              taskId: ''
            }).then(res => {
              console.log(res);
            });
          } else {
            done();
          }


        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        });
      });
    },
    coverFn(flag) {
      // 统一处理    回退 02 拒绝 01 放弃  07 审批 03 审批结论 spjl 流程轨迹 lcgj
      this.coverShow = true;
      switch (flag) {
        case '02':
          this.showFlag = '02';
          break;
        case '01':
          this.showFlag = '01';
          break;
        case '07':
          this.showFlag = '07';
          break;
        case '03':
          this.showFlag = '03';
          break;
        case 'spjl':
          this.showFlag = 'spjl';
          break;
        case 'lcgj':
          this.showFlag = 'lcgj';
          break;
      }

      // 这里处理  不同的 按钮事件

    },
    submitFn(opinionFlag) {
      console.log(opinionFlag)
      switch (opinionFlag) {
        case '01':
          console.log("拒绝");
          this.coverShow = false;
          this.showFlag = 0;
          break;
        case '02':
          console.log("回退");
          this.coverShow = false;
          this.showFlag = 0;
          break;
        case '07':
          console.log("放弃");
          this.coverShow = false;
          this.showFlag = 0;
          break;
        case '03':
          console.log("审批");
          this.coverShow = false;
          this.showFlag = 0;
      }
      // 点击 确认 提交 方法
      // this.post("/creauditInfo/approval ", {
      //   userCode: "02103C3003 ",
      //   loginPassword: "111111 "
      // }).then(res => {
      //   console.log(res);
      // });
    },
    itemDbclick(row, event) {
      // 行被双击 事件
      console.log('row dbclick');
      console.log(row.name);
    },
    cellHover(row, column, cell, event) {
      // cell hover 事件
      console.log(row);
      console.log(column);
      console.log(event);
      console.log(cell.innerText); // 备注
      console.log(column.label);
      // this.tableData[]

    },
    handleSizeChange(val) {
      console.log("每页 ${val}条", val);
    },
    handleCurrentChange(val) {
      console.log("当前页: ${val}", val);
    }
  }
}

</script>
<style>
.creditApproval-class .address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
}


/* 三列 */

.creditApproval-class .item-column3 {
  width: 30%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}

.creditApproval-class .el-form-item {
  height: 40px;
  line-height: 40px;
}


/* 按钮集合控件 */

.creditApproval-class .btn-div {
  text-align: center;
}


/* 信审审批 - btn*/

.creditApproval-class .credit-btn {
  padding: 10px;
  background: none;
  color: #333;
  border: none;
}


/* 弹窗背景 */

.creditApproval-class .cover-view {
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  width: 100%;
  height: 100%;
}


/* 两列 */

.creditApproval-class .item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}


/* 回退 拒绝 放弃 表单*/

.creditApproval-class .back-form {
  width: 600px;
  height: 350px;
  background: #fff;
  margin: 0 auto;
  margin-top: 300px;
  border-radius: 10px;
  overflow: hidden;
}


/* form-title */

.creditApproval-class .form-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  /*margin-top: 20px;*/
  overflow: hidden;
}

.creditApproval-class .back-form .back-form-li {
  border-top: 0.5px solid #ededed;
  margin: 10px 0px;
  line-height: 40px;
  height: 40px;
  padding: 0px 10px
}


/* textarea */

.creditApproval-class .back-form .back-form-li .el-textarea {
  width: 80%;
}


/* 单独设置  label*/

.creditApproval-class .back-form .el-form-item__label {
  width: 75px;
}


/* 弹窗页面 关闭按钮*/

.creditApproval-class .el-tag {
  width: 0;
  height: 0;
  color: none;
  border: none;
  position: absolute;
  right: 20px;
  top: 0;
}

.creditApproval-class .el-tag .el-icon-close {
  right: 0px;
}


/* 审批 表单 */

.creditApproval-class .appro-form {
  width: 80%;
  height: 600px;
  margin-top: 150px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  overflow: hidden;
}

.creditApproval-class .appro-form .el-form-item__label {
  width: 200px;
}

.creditApproval-class .appro-form .back-form-li .el-textarea {
  width: 60%;
}


/* 审批结论轨迹 */

.creditApproval-class .spjl-div {
  width: 80%;
  height: 400px;
  margin: 0 auto;
  margin-top: 250px;
  overflow: hidden;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
}

.creditApproval-class .el-table {
  font-size: 12px;
  line-height: 20px;
}


/* 分页 */

.creditApproval-class .tool-bar {
  width: 100%;
  text-align: center;
  padding: 10px 0 0 10px;
}


/* 流程轨迹 */

.creditApproval-class .lcgj-div {
  width: 80%;
  height: 400px;
  margin: 0 auto;
  margin-top: 250px;
  overflow: hidden;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  height: auto;
}

</style>
