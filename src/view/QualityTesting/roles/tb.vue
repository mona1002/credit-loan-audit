<template>
  <!-- 质检 -->
  <div class="tb">
    <!-- 审批信息 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批信息</span>
        </template>
        <div class="CreditForm_CheckId">
          <ul>
            <li>
              <p>客户名称：{{ }} </p>
              <p>产品名称： {{ }}</p>
            </li>
            <li>
              <p>初审人员：{{ }} </p>
              <p>初审日期：{{ }} </p>
            </li>
            <li>
              <p>终审人员：{{ }} </p>
              <p>终审日期：{{ }} </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 资料核实 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">资料核实</span>
        </template>
        <div class="CreditForm_CheckId">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
            <el-table-column label="核实类型" align="left" width="200">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column label="核实结论" align="center" width="180">
              <template slot-scope="scope">
                <!-- <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.conclution }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                 
                </el-popover> -->
                <div slot="reference" class="name-wrapper">
                  <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                  </el-radio-group>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="备注（非必填）" align="center" min-width="180">
              <template slot-scope="scope">
                <el-input type="textarea" v-if="scope.row.conclution=='2'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                  placeholder="请输入内容">
                </el-input>
                <!-- <el-input type="textarea" :rows="2" resize="none" v-model="form.desc" :maxlength="this.textareaL" placeholder="请输入内容" 
                  @compositionend.native="wordarea(checkData.iloanPurposetxt,'详细用途')" @keyup.native="wordarea(checkData.iloanPurposetxt,'详细用途')">
                </el-input> -->
                <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
              </template>
            </el-table-column>
          </el-table>


        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 三方信息查询=====后两个选否弹出未改 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">三方信息查询</span>
        </template>
        <div class="CreditForm_CheckId">
          <el-table :data="InforSearch" style="width: 100%">
            <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
            <el-table-column label="查询类型" align="left" width="320">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column label="查询结论" align="center" width="180">
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                  </el-radio-group>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="备注（非必填）" align="center" min-width="180">
              <template slot-scope="scope">
                <el-input type="textarea" v-if="scope.row.conclution=='1'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                  placeholder="请输入内容">
                </el-input>
              </template>
            </el-table-column>
          </el-table>


        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 内部匹配核实 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="4">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">内部匹配核实</span>
        </template>
        <div class="CreditForm_CheckId">
          <el-table :data="Match" style="width: 100%">
            <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
            <el-table-column label="核实类型" align="left" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column label="核实类型" align="center" width="180">
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                  </el-radio-group>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="备注（非必填）" align="center" min-width="180">
              <template slot-scope="scope">
                <el-input type="textarea" v-if="scope.row.conclution=='2'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                  placeholder="请输入内容">
                </el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 电话征信 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="5">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">电话征信</span>
        </template>
        <div class="CreditForm_CheckId">
          <!-- tab-title -->
          <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in tab" :key="index" @click="tabClick($event,index,val)" :class="{tabAct:tabIndex==index}">
              {{val}}</li>
          </ul>
          <!-- pay-content -->
          <div v-if="this.payment">
            <p class="P_title">微信/支付宝核实</p>
            <el-table :data="PhoneCre" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="核实类型" align="left" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="核实结论" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                      <el-radio :label="1">正常</el-radio>
                      <el-radio :label="2">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" v-if="scope.row.conclution=='2'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                    placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- call-content -->
          <div v-show="this.custom">
            <p class="P_title">电话拨打核实</p>
            <el-table :data="PhoneCheck" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="电话号码" align="center" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="Self" label="接听人是否借款人本人" align="center" width="180">
              </el-table-column>
              <el-table-column prop="Self" label="接听说明" width="180" align="center">
              </el-table-column>
              <el-table-column label="质检结果（必填项）" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                      <el-radio :label="1">正常</el-radio>
                      <el-radio :label="2">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" v-if="scope.row.conclution=='2'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                    placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- others-content -->
          <div v-show="this.others">
            <p class="P_title">电话拨打核实</p>
            <el-table :data="othersCheck" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="电话号码" align="center" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="title" label="来源" align="center" width="70">
              </el-table-column>
              <el-table-column prop="title" label="最新调查时间" align="center" width="180">
              </el-table-column>
              <el-table-column prop="title" label="最新接听情况" align="center" width="180">
              </el-table-column>
              <el-table-column prop="title" label="最新调查阶段" align="center" width="180">
              </el-table-column>
              <el-table-column prop="title" label="调查结论" align="center" width="180">
              </el-table-column>
              <el-table-column label="质检结果（必填项）" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                      <el-radio :label="1">正常</el-radio>
                      <el-radio :label="2">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" v-if="scope.row.conclution=='2'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                    placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 质检结论 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="4">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">质检结论</span>
        </template>
        <div class="CreditForm_CheckId">
          <p>
            <span class="btn" @click="addTr && add()">添加 </span>
            <span class="btn"> 删除</span>
          </p>
          <el-table ref="singleTable" :data="qulityConclution" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column type="index" label=" " align="center" width="50">
            </el-table-column>
            <el-table-column label="质检结果" align="center" width="180">
              <template slot-scope="scope">
                <div>
                  <el-select v-model="scope.row.result" placeholder="请选择" @click="handleCurrentChange">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <!-- <span style="margin-left: 10px">{{ scope.row.Self }}</span> -->
              </template>
            </el-table-column>
            <el-table-column label="差错类型" align="center" width="180">
              <template slot-scope="scope">
                <div>
                  <el-tooltip class="item" effect="dark" :disabled="scope.row.comment==''" :content="scope.row.comment" placement="top-start">
                    <el-input v-model="scope.row.comment" placeholder="请输入内容"></el-input>
                  </el-tooltip>
                </div>
                <!-- <span style="margin-left: 10px">{{ scope.row.Self }}</span> -->
              </template>
            </el-table-column>
            <el-table-column label="差错描述" align="center" width="180">
              <template slot-scope="scope">
                <div>
                  <el-tooltip class="item" effect="dark" :disabled="scope.row.comment==''" :content="scope.row.comment" placement="top-start">
                    <el-input v-model="scope.row.comment" placeholder="请输入内容"></el-input>
                  </el-tooltip>
                </div>
                <!-- <span style="margin-left: 10px">{{ scope.row.Self }}</span> -->
              </template>
            </el-table-column>
            <el-table-column label="备注（非必填）" align="center" width="180">
              <template slot-scope="scope">
                <div>
                  <el-tooltip class="item" effect="dark" :disabled="scope.row.result==''" :content="scope.row.result" placement="top-start">
                    <el-input v-model="scope.row.result" placeholder="请输入内容"></el-input>
                  </el-tooltip>
                </div>
                <!-- <span style="margin-left: 10px">{{ scope.row.Self }}</span> -->
              </template>
            </el-table-column>
            <el-table-column prop="person" label="质检员" width="180">
            </el-table-column>
            <el-table-column prop="date" label="质检日期" width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 电话征信 -->
    <!-- 测试 -->
    <el-table ref="singleTable" :data="tableData1" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column property="date" label="日期" width="120">
      </el-table-column>
      <el-table-column property="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column property="address" label="地址">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData1: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        //   ---
        textareaL: 300,
        tabIndex: 0,
        payment: true,
        custom: true,
        others: false,
        addTr: true,
        currentRow: null,
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        tab: ["客户本人", "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
        tableData: [{
          title: '申请表是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '身份证证明是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '收入证明是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '工作证明是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '房产资料是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '居住证明是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '经营证明是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '信用报告是否符合要求',
          date: '2016-05-03',
          conclution: 1,
          comment: ''
        }, {
          title: '客户流水是否符合要求',
          conclution: 1,
          comment: ''
        }, {
          title: '客户其他资料是否符合要求',
          date: '2016-05-03',
          conclution: 1,
          comment: ''
        }, {
          title: '负债计算是否正确',
          conclution: null,
          comment: ''
        }, {
          title: '流水计算是否正确',
          conclution: null,
          comment: ''
        }, {
          title: '征信录入是否正确',
          conclution: null,
          comment: ''
        }],
        InforSearch: [{
          title: '客户在人法网是否有被执行信息',
          conclution: null,
          comment: ''
        }, {
          title: '客户在失信网是否有失信记录',
          conclution: null,
          comment: ''
        }, {
          title: '网上搜索借款人的手机是否有异常',
          conclution: null,
          comment: ''
        }, {
          title: '网上搜索借款人现居住地址和房产地址是否异常',
          conclution: null,
          comment: ''
        }, {
          title: '当地工商网查询企业基本信息中是否有登记',
          conclution: null,
          comment: ''
        }, {
          title: '客户工作单位在全国组织代码查询中是否存在',
          conclution: null,
          comment: ''
        }, {
          title: '工商登记信息说明',
          conclution: null,
          comment: ''
        }],
        Match: [{
          title: '内部匹配是否进行排查',
          conclution: null,
          comment: ''
        }],
        PhoneCre: [{
          title: '微信查询结果',
          conclution: 1,
          comment: ''
        }, {
          title: '支付宝查询结果',
          conclution: 1,
          comment: ''
        }],
        PhoneCheck: [{
          title: '内部匹配是否进行排查',
          Self: '是',
          conclution: null,
          comment: ''
        }],

        othersCheck: [{
          title: '1242346956',
          Self: '否',
          conclution: null,
          comment: ''
        }],
        a: [{
          title: '4444444444',
          Self: '否',
          conclution: null,
          comment: ''
        }],
        b: [{
          title: '7777777777',
          Self: '否',
          conclution: null,
          comment: ''
        }],
        qulityConclution: [{
          title: "",
          Self: '否',
          conclution: null,
          comment: '',
          result: '',
          person: '吴彦祖',
          date: '2019-20-3'
        }, {
          title: "",
          Self: '否',
          conclution: null,
          comment: '',
          result: '',
          person: '吴彦祖',
          date: '2019-20-3'
        }],


        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''


      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        // this.currentRow!=''?this.addTr=true:this.addTr=false;
      
      for (var i = 0; i < this.qulityConclution.length; i++) {
          this.qulityConclution[i].result != '' ? this.addTr = true : this.addTr = false;
          console.log(this.addTr)
        }
        console.log(this.qulityConclution)
        console.log(this.addTr)
      },
      clearContent(sop) {
        console.log(sop.title)
        if (sop.title == '客户在人法网是否有被执行信息' || sop.title == '客户在失信网是否有失信记录' || sop.title == '网上搜索借款人的手机是否有异常' || sop.title ==
          '网上搜索借款人现居住地址和房产地址是否异常') {
          sop.conclution == '2' ? sop.comment = '' : '';
        } else {
          sop.conclution == '1' ? sop.comment = '' : '';
        }

      },
      add() {
        console.log('添加')
        var obj = [{
          title: "",
          Self: '否',
          conclution: null,
          comment: '',
          result: '',
          person: '吴彦祖',
          date: '2019-20-3'
        }];
        this.qulityConclution = this.qulityConclution.concat(obj)
        console.log(this.qulityConclution)
        //  <el-select v-model='value' placeholder='请选择'>
        //     <el-option
        //       v-for='item in options'
        //       :key='item.value'
        //       :label='item.label'
        //       :value='item.value'>
        //     </el-option>
        //   </el-select>
        this.addTr = false;
      },
      tabClick(ev, ind, val) {
        //  this.title = val;
        //         this.tabContent1 = ind;
        this.tabIndex = ind;
        if (ind == 0) {
          this.payment = true;
          this.custom = true;
          this.others = false;
        } else if (ind == 1) {
          this.payment = false;
          this.custom = false;
          this.others = true;
        } else if (ind == 2) {
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.a
        } else if (ind == 3) {
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.b

        } else if (ind == 4) {
          this.payment = true;
          this.custom = false;
          this.others = true;
        }
      }
    }
  }

</script>
<style scoped>
  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .headFont {
    font-size: 16px;
  }

  .tab1Default {
    float: left;
    width: 100px;
    border-right: 1px solid;
  }

  .tab1Default:hover {
    cursor: pointer;
  }

  .tabAct {
    color: white;
    background: #0077ff
  }

  .P_title {
    clear: both;
    background: silver;
    padding: 2px 0 2px 20px;
    font-size: 16px;
  }

  .btn {
    width: 100px;
    text-align: center;
    display: inline-block;
    border: 1px solid;
    background: #0077ff;
    color: white;
    border-radius: 4px;
  }

  .btn:hover {
    cursor: pointer;
  }

</style>
