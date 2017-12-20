<!-- 电话征信 - 家庭联系人 -->
<template>
  <div>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
    </div>
    <ul>
      <li class="item-column3">
        <div class="left-title">客户名称:</div>
        <div>
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型:</div>
        <div>
          <el-select v-model="phoneType" disabled>
            <el-option label="家庭联系人" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码:</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:90px;">*</span>来源:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="source">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:60px;">*</span>接听情况:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="answer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:60px;">*</span>调查阶段:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="checkStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column1" v-show="source=='02'">
        <div class="left-title">其他来源说明:</div>
        <div class="textarea-class">
          <el-input v-model="sourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入家庭联系人电话调查信息</span>
    </div>
    <ul>
      <li class="item-column1">
        <div class="left-title">第三方查询信息:</div>
        <div class="textarea-class">
          <el-input type="textarea" v-model="thirdResult" :rows="3" resize=none></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"><span class="require-icon" style="left:5px;">*</span>三方查询是否异常:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="threeQueries">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="threeQueries=='1'"><span class="require-icon" style="left:90px;">*</span>说明:</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class2" v-show="threeQueries=='1'">
            <el-input v-model="threeQueriestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column2">
        <div class="left-title left-title2"><span class="require-icon" style="left:0px; top:-8px;">*</span>微信/支付宝是否异常:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="mobilepayment">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="mobilepayment=='1'"><span class="require-icon" style="left:90px;">*</span>说明:</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class2" v-show="mobilepayment=='1'">
            <el-input v-model="mobilepaymenttxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column2">
        <div class="left-title left-title2">是否与家庭联系人为同一接听人:</div>
        <div class="textarea-class2">
          <el-select v-model="issameFam">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="issameFam=='0'">说明:</div>
        <div class="textarea-class2" v-show="issameFam=='0'">
          <el-input v-model="issameFamtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">与借款人关系:</div>
        <div>
          <el-select v-model="relBorrower">
            <el-option label="父母" value="00"></el-option>
            <el-option label="爱人" value="01"></el-option>
            <el-option label="子女" value="02"></el-option>
            <el-option label="其他" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="relBorrower=='03'">说明:</div>
        <div class="textarea-class2" v-show="relBorrower=='03'">
          <el-input v-model="relBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作情况:</div>
        <div>
          <el-select v-model="checkWork">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="checkWork=='01'">说明:</div>
        <div class="textarea-class2" v-show="checkWork=='01'">
          <el-input v-model="checkWorktxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对婚姻情况:</div>
        <div>
          <el-select v-model="maritalStatus">
            <el-option label="未婚" value="00"></el-option>
            <el-option label="已婚" value="01"></el-option>
            <el-option label="离异" value="02"></el-option>
            <el-option label="丧偶" value="03"></el-option>
            <el-option label="准备结婚" value="04"></el-option>
            <el-option label="被调查人不清楚" value="05"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对子女情况:</div>
        <div>
          <el-select v-model="maritalStatustxt">
            <el-option label="有子女" value="00"></el-option>
            <el-option label="无子女" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核实居住地址:</div>
        <div>
          <el-select v-model="checkAddr">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="checkAddr=='01'">说明:</div>
        <div class="textarea-class2" v-show="checkAddr=='01'">
          <el-input v-model="checkAddrtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对房产:</div>
        <div>
          <el-select v-model="checkEstate">
            <el-option label="有" value="00"></el-option>
            <el-option label="无" value="01"></el-option>
            <el-option label="租房" value="02"></el-option>
            <el-option label="与父母同住" value="03"></el-option>
            <el-option label="被调查人不清楚" value="04"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="checkEstate=='00'">说明:</div>
        <div class="textarea-class2" v-show="checkEstate=='00'">
          <el-input v-model="checkEstatetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">其他收入:</div>
        <div>
          <el-select v-model="otherIncome">
            <el-option label="有" value="00"></el-option>
            <el-option label="无" value="01"></el-option>
            <el-option label="被调查人不清楚" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="otherIncome=='00'">说明:</div>
        <div class="textarea-class2" v-show="otherIncome=='00'">
          <el-input v-model="otherIncometxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title"><span class="require-icon" style="left:60px;">*</span>调查结果:</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class">
            <el-input type="textarea" v-model="conclusion" :rows="3" resize=none></el-input>
          </div>
        </el-tooltip>
      </li>
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
      phoneType: '03',
      source: '',
      answer: '',
      sourceDesc: '',
      checkStage: '',
      thirdResult: '',
      threeQueries: '',
      threeQueriestxt: '',
      issameFam: '',
      issameFamtxt: '',
      wetherThirdAbnormal: '',
      wetherThirdAbnormaltxt: '',
      mobilepayment: '',
      mobilepaymenttxt: '',
      relBorrower: '',
      relBorrowertxt: '',
      checkWork: '',
      checkWorktxt: '',
      maritalStatus: '',
      maritalStatustxt: '',
      checkAddr: '',
      checkAddrtxt: '',
      checkEstate: '',
      checkEstatetxt: '',
      otherIncome: '',
      otherIncometxt: '',
      conclusion: '',
      phoneId: ''
    }
  },
  props: ['custName', 'phoneNum', 'applyId', 'formId', 'isFull'],
  mounted() {
    this.phoneType = '03'; // 家庭联系人电话
    if (this.isFull == true) { // 全屏
      console.log('全屏');
      $(".textarea-class").css("minWidth", "500px")
      // 提交按钮
        $('.submit-class').css("margin-left", "810px")
      // 显示 column2
      $('.item-column2').css({
        "min-height": "50px"
      })
      // textarea
      $('.item-column1 textarea').css("width", "149%")

    } else if (this.isFull == false) { // 分屏
      console.log("分屏");
      // $(".textarea-class").css("minWidth", "300px")
      // 提交按钮
      $('.submit-class').css("margin-left", "370px")
      $('.item-column2').css({
        "min-height": "0px",
        "margin-bottom": "10px"
      })
      $('.item-column1 textarea').css("width", "300px")
    }
  },
  methods: {
    submitForm() {
      console.log('submit!');

      if (!this.source || !this.answer || !this.checkStage || !this.threeQueries || (this.threeQueries == '1' && !this.threeQueriestxt) || !this.mobilepayment || (this.mobilepayment == '1' && !this.mobilepaymenttxt) || !this.conclusion) {
        this.$message({
          message: '请输入必填项!',
          type: 'warning'
        });
        return;
      }

      this.post('/creTelResearchHis/addTelfContract', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.source,
            answer: this.answer,
            sourceDesc: this.sourceDesc,
            checkStage: this.checkStage,
            applyId: this.applyId,
            id: this.phoneId
          },
          cretelfcontact: {
            applyId: this.applyId,
            id: this.phoneId,
            thirdResult: this.thirdResult, // 第三方查询信息
            threeQueries: this.threeQueries, // 三方异常
            threeQueriestxt: this.threeQueriestxt, // 三方异常说明
            issameFam: this.issameFam,
            issameFamtxt: this.issameFamtxt,
            wetherThirdAbnormal: this.wetherThirdAbnormal,
            wetherThirdAbnormaltxt: this.wetherThirdAbnormaltxt,
            mobilepayment: this.mobilepayment,
            mobilepaymenttxt: this.mobilepaymenttxt, // 微信/支付宝异常说明
            relBorrower: this.relBorrower,
            relBorrowertxt: this.relBorrowertxt,
            checkWork: this.checkWork,
            checkWorktxt: this.checkWorktxt,
            maritalStatus: this.maritalStatus,
            maritalStatustxt: this.maritalStatustxt,
            checkAddr: this.checkAddr,
            checkAddrtxt: this.checkAddrtxt,
            checkEstate: this.checkEstate,
            checkEstatetxt: this.checkEstatetxt,
            otherIncome: this.otherIncome,
            otherIncometxt: this.otherIncometxt,
            conclusion: this.conclusion
          }
        })
        .then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.phoneId = res.data.id;
            // 清数据
            this.source = '';
            this.answer = '';
            this.sourceDesc = '';
            this.checkStage = '';
            this.thirdResult = '';
            this.threeQueries = '';
            this.threeQueriestxt = '';
            this.issameFam = '';
            this.issameFamtxt = '';
            this.wetherThirdAbnormal = '';
            this.wetherThirdAbnormaltxt = '';
            this.mobilepayment = '';
            this.mobilepaymenttxt = '';
            this.relBorrower = '';
            this.relBorrowertxt = '';
            this.checkWork = '';
            this.checkWorktxt = '';
            this.maritalStatus = '';
            this.maritalStatustxt = '';
            this.checkAddr = '';
            this.checkAddrtxt = '';
            this.checkEstate = '';
            this.checkEstatetxt = '';
            this.otherIncome = '';
            this.otherIncometxt = '';
            this.conclusion = '';

            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');

            this.$message({
              message: res.msg,
              type: 'success'
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: 'warning'
            });
          }
        })
    }
  },
  watch: {
    threeQueries: function() {
      this.threeQueriestxt = '';
    },
    mobilepayment: function() {
      this.mobilepaymenttxt = '';
    },
    issameFam: function() {
      this.issameFamtxt = '';
    },
    relBorrower: function() {
      this.relBorrowertxt = '';
    },
    checkWork: function() {
      this.checkWorktxt = '';
    },
    checkAddr: function() {
      this.checkAddrtxt = '';
    },
    otherIncome: function() {
      this.otherIncometxt = '';
    },
    // 判断全屏 , 更改样式
    isFull: function(val) {
      if (val == true) { // 全屏
        console.log('全屏');
        $(".textarea-class").css("minWidth", "500px")
        // 提交按钮
        $('.submit-class').css("margin-left", "810px")
        // 显示 column2
        $('.item-column2').css({
          "min-height": "50px"
        })
        // textarea
        $('.item-column1 textarea').css("width", "149%")
      } else if (val == false) { // 分屏
        console.log("分屏");
        $(".textarea-class").css("minWidth", "300px")
        // 提交按钮
        $('.submit-class').css("margin-left", "370px")
        $('.item-column2').css({
          "min-height": "0px",
          "margin-bottom": "10px"
        })
        $('.item-column1 textarea').css("width", "300px")
      }
    }
  }
}

</script>
