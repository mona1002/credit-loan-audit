<!-- 电话征信 - 紧急联系人 -->
<template>
  <div>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
    </div>
    <ul>
      <li class="item-column3">
        <div class="left-title">客户名称</div>
        <div>
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型</div>
        <div>
          <el-select v-model="phoneType" disabled>
            <el-option label="紧急联系人" value="04"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">来源</div>
        <div>
          <el-select v-model="source" placeholder="请选择来源">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">接听情况</div>
        <div>
          <el-select v-model="answer" placeholder="请选择接听情况">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="4"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">调查阶段</div>
        <div>
          <el-select v-model="checkStage" placeholder="请选择调查阶段">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3" v-show="source=='02'">
        <div class="left-title">其他来源说明</div>
        <div>
          <el-input v-model="sourceDesc"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入紧急联系人调查信息</span>
    </div>
    <ul>
      <li class="item-column1">
        <div class="left-title">第三方查询信息</div>
        <div>
          <el-input type="textarea" v-model="thirdResult" :row="2" resize=none></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">三方查询是否异常</div>
        <div>
          <el-select v-model="threeQueries" placeholder="请选择调查情况">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">异常说明</div>
        <div>
          <el-input v-model="threeQueriestxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">微信/支付宝是否异常</div>
        <div>
          <el-select v-model="mobilepayment" placeholder="请选择调查情况">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">异常项说明</div>
        <div>
          <el-input v-model="mobilepaymenttxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">与借款人关系</div>
        <div>
          <el-select v-model="relBorrower" placeholder="请选择调查情况">
            <el-option label="父母" value="00"></el-option>
            <el-option label="爱人" value="01"></el-option>
            <el-option label="子女" value="02"></el-option>
            <el-option label="其他" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="relBorrower=='03'">
          <el-input v-model="relBorrowertxt"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">与借款人联系频繁</div>
        <div>
          <el-select v-model="contactfre" placeholder="请选择调查情况">
            <el-option label="频繁" value="00"></el-option>
            <el-option label="一般" value="01"></el-option>
            <el-option label="偶尔" value="02"></el-option>
            <el-option label="较少" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作情况</div>
        <div>
          <el-select v-model="checkWork" placeholder="请选择调查情况">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkWork=='01'">
          <el-input v-model="checkWorktxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对婚姻情况</div>
        <div>
          <el-select v-model="maritalStatus" placeholder="请选择调查情况">
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
        <div class="left-title">核对子女情况</div>
        <div>
          <el-select v-model="maritalStatustxt" placeholder="">
            <el-option label="有子女" value="00"></el-option>
            <el-option label="无子女" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">调查结果</div>
        <div>
          <el-input type="textarea" v-model="conclusion" :row="2" resize=none></el-input>
        </div>
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
      source: '',
      answer: '',
      checkStage: '',
      thirdResult: '',
      relBorrower: '',
      relBorrowertxt: '',
      checkWork: '',
      checkWorktxt: '',
      mobilepayment: '',
      mobilepaymenttxt: '',
      threeQueriestxt: '',
      maritalStatus: '',
      maritalStatustxt: '',
      contactfre: '',
      contactfretxt: '',
      conclusion: '',
      phoneType: '04',
      sourceDesc: '',
      threeQueries: '',
      phoneId: ''
    }
  },
  props: ['custName', 'phoneNum', 'applyId'],
  mounted() {
    this.phoneType = '04'; // 紧急联系人电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addTeleContract', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.source,
            answer: this.answer,
            checkStage: this.checkStage,
            sourceDesc: this.sourceDesc, // 其他来源说明
            applyId: this.applyId,
            id: this.phoneId
          },
          cretelecontact: {
            applyId: this.applyId,
            id: this.phoneId,
            thirdResult: this.thirdResult,
            relBorrower: this.relBorrower,
            relBorrowertxt: this.relBorrowertxt,
            checkWork: this.checkWork,
            checkWorktxt: this.checkWorktxt,
            mobilepayment: this.mobilepayment,
            mobilepaymenttxt: this.mobilepaymenttxt,
            threeQueries: this.threeQueries,
            threeQueriestxt: this.threeQueriestxt,
            maritalStatus: this.maritalStatus,
            maritalStatustxt: this.maritalStatustxt,
            contactfre: this.contactfre,
            contactfretxt: this.contactfretxt,
            conclusion: this.conclusion
          }
        })
        .then(res => {
          console.log(res);
          if (res.statusCode == '200') {

            this.phoneId = res.data.id;
            console.log(this.phoneId);

            // 清数据
            this.source = '';
            this.answer = '';
            this.checkStage = '';
            this.sourceDesc = '';
            this.thirdResult = '';
            this.relBorrower = '';
            this.relBorrowertxt = '';
            this.checkWork = '';
            this.checkWorktxt = '';
            this.mobilepayment = '';
            this.mobilepaymenttxt = '';
            this.threeQueries = '';
            this.threeQueriestxt = '';
            this.maritalStatus = '';
            this.maritalStatustxt = '';
            this.contactfre = '';
            this.contactfretxt = '';
            this.conclusion = '';

            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');
          }
        })
    }
  },
  watch: {
    source: function() {
      this.sourceDesc = '';
    },
    threeQueries: function() {
      this.threeQueriestxt = '';
    },
    mobilepayment: function() {
      this.mobilepaymenttxt = '';
    },
    relBorrower: function() {
      this.relBorrowertxt = '';
    },
    checkWork: function() {
      this.checkWorktxt = '';
    }
  }
}

</script>
