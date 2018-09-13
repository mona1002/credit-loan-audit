<!-- 电话征信 - 工作证明人 -->
<template>
  <div>
    <div class="address-title">
      <i class="collapse_title_icon"></i>
      <span class="collapse_title_text">新增调查日志</span>
    </div>
    <ul class="content-ul" style="margin-left:15px;">
      <li class="item-column3">
        <div class="left-title">电话名称：</div>
        <div class="dis-input">
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型：</div>
        <div>
          <el-select v-model="phoneType" disabled>
            <el-option label="工作证明人" value="05"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码：</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          <span class="require-icon" style="left:80px;">* </span> 来源：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="mysource" @change="changes('mysource')">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column3">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span> 接听情况：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="myanswer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column3 Phone_credit_Form_search_bottom">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span> 调查阶段：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="mycheckStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column1" v-show="mysource=='02'">
        <div class="left-title">其他来源说明：</div>
        <div class="textarea-class">
          <el-input v-model="mysourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <i class="collapse_title_icon"></i>
      <span class="collapse_title_text">录入工作证明人调查信息</span>
    </div>
    <ul style="margin-left:15px;">
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2">
            <span class="require-icon" style="left:0px;">* </span>微信/支付宝是否异常：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="mymobilepayment" placeholder="请选择调查情况" @change="changes('mymobilepayment')">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-tooltip>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="mymobilepayment=='1'">
            <span class="require-icon" style="left:80px;">* </span> 说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="mymobilepayment=='1'">
              <el-input v-model="mymobilepaymenttxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">接电话人身份：</div>
          <div>
            <el-select v-model="myanswerIdentity" placeholder="请选择调查情况" @change="changes('myanswerIdentity')">
              <el-option label="同事" value="00"></el-option>
              <el-option label="本人" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="myanswerIdentity=='00'">说明：</div>
          <div class="textarea-class2" v-show="myanswerIdentity=='00'">
            <el-input v-model="myanswertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对单位工作情况：</div>
          <div>
            <el-select v-model="mycheckJob" @change="changes('mycheckJob')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="mycheckJob=='01'">说明：</div>
          <div class="textarea-class2" v-show="mycheckJob=='01'">
            <el-input v-model="mycheckJobtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">
            <span class="require-icon" style="left:50px;">* </span> 调查结果：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class">
              <el-input v-model="myconclusion" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <li class="item-column1 submit-class">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phoneType: '05',
        mysource: this.source,
        mysourceDesc: this.sourceDesc,
        myanswer: this.answer,
        mycheckStage: this.checkStage,
        myanswerIdentity: this.answerIdentity,
        myanswertxt: this.answertxt,
        mycheckJob: this.checkJob,
        mycheckJobtxt: this.checkJobtxt,
        mymobilepayment: this.mobilepayment,
        mymobilepaymenttxt: this.mobilepaymenttxt,
        myconclusion: this.conclusion,
        phoneId: '',
      }
    },
    props: ['custName', 'phoneNum', 'applyId', 'formId', 'isFull', 'source', 'answer', 'checkStage', 'sourceDesc',
      'mobilepayment', 'checkJob', 'checkJobtxt', 'mobilepaymenttxt', 'answerIdentity', 'answertxt', 'conclusion'
    ],
    mounted() {
      this.phoneType = '05'; // 住址电话
      if (this.isFull == true) { // 全屏
        $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
        $('.item-column1 textarea').css("width", "100%")
        // 提交按钮
        $('.submit-class').css("margin-left", "calc( 66% - 140px)")
        // 显示 column2
        $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
        $('.item-column2 textarea').css("width", "100%");
      } else if (this.isFull == false) { // 分屏
        // 提交按钮
        $('.submit-class').css("margin-left", "370px")
        $('.item-column3').css({
          "min-height": "0px",
          "margin-bottom": "10px"
        })
        $('.item-column1 textarea').css("width", "300px")
        $('.item-column2 textarea').css("width", "300px")
      }
    },
    methods: {
      submitForm() {
        // 检测必填项
        if (!this.mysource || !this.myanswer || !this.mycheckStage || !this.mymobilepayment || (this.mymobilepayment ==
            '1' && !this.mymobilepaymenttxt) || !this.myconclusion) {
          this.$message({
            message: '请输入必填项!',
            type: 'warning'
          });
          return;
        }
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.open();
        }).catch(() => {});
      },
      // 提交
      open() {
        this.post('/creTelResearchHis/addTeljobref', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.mysource,
            answer: this.myanswer,
            checkStage: this.mycheckStage,
            sourceDesc: this.mysourceDesc, // 其他来源说明
            applyId: this.applyId,
            id: this.phoneId
          },
          creteljobref: {
            applyId: this.applyId,
            id: this.phoneId,
            answer: this.myanswerIdentity, // 接电话人身份
            answertxt: this.myanswertxt,
            checkJob: this.mycheckJob,
            checkJobtxt: this.mycheckJobtxt,
            mobilepayment: this.mymobilepayment,
            mobilepaymenttxt: this.mymobilepaymenttxt,
            conclusion: this.myconclusion
          }
        }).then(res => {
          if (res.statusCode == '200') {
            this.phoneId = '';
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');
            this.$message({
              type: 'success',
              message: '提交成功!'
            });
          } else {
            this.$message.error(res.msg)
          }
        });
      },
      changes(flage) {
        switch (flage) {
          case 'mysource':
            if (this.mysource != '02') {
              this.mysourceDesc = '';
            }
            break;
          case 'myanswerIdentity':
            if (this.myanswerIdentity == '01') {
              this.myanswertxt = '';
            }
            break;
          case 'mymobilepayment':
            if (this.mymobilepayment == '0') {
              this.mymobilepaymenttxt = '';
            }
            break;
          case 'mycheckJob':
            if (this.mycheckJob != '01') {
              this.mycheckJobtxt = '';
            }
            break;
        }
      }
    },
    watch: {
      source(val) {
        this.mysource = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      sourceDesc(val) {
        this.mysourceDesc = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      answer(val) {
        this.myanswer = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      checkStage(val) {
        this.mycheckStage = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      answerIdentity(val) {
        this.myanswerIdentity = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      answertxt(val) {
        this.myanswertxt = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      checkJob(val) {
        this.mycheckJob = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      checkJobtxt(val) {
        this.mycheckJobtxt = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      mobilepayment(val) {
        this.mymobilepayment = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      mobilepaymenttxt(val) {
        this.mymobilepaymenttxt = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      conclusion(val) {
        this.myconclusion = val; //②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
      },
      // 判断全屏 , 更改样式
      isFull: function (val) {
        if (val == true) { // 全屏
          $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
          $('.item-column1 textarea').css("width", "100%")
          // 提交按钮
          $('.submit-class').css("margin-left", "calc( 66% - 140px)")
          // 显示 column2
          $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
          $('.item-column2 textarea').css("width", "100%");
        } else if (val == false) { // 分屏
          // 提交按钮
          $('.submit-class').css("margin-left", "370px")
          $('.item-column3').css({
            "min-height": "0px",
            "margin-bottom": "10px"
          })
          $('.item-column1 textarea').css("width", "300px")
          $('.item-column2 textarea').css("width", "300px")
        }
      }
    }
  }

</script>
