<!-- 电话征信 - 紧急联系人 -->
<template>
  <div>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
    </div>
    <ul class="content-ul" style="margin-left:15px;">
      <li class="item-column3">
        <div class="left-title">电话名称：</div>
        <div>
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型：</div>
        <div>
          <el-select v-model="phoneType" disabled>
            <el-option label="其他联系人" value="04"></el-option>
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
        <div class="left-title"><span class="require-icon" style="left:80px;">*</span>来源：</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="Hsource" placeholder="请选择来源" @change="changes('Hsource')">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>接听情况：</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="Hanswer" placeholder="请选择接听情况">
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
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>调查阶段：</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="HcheckStage" placeholder="请选择调查阶段">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column1" v-show="Hsource=='02'">
        <div class="left-title">其他来源说明：</div>
        <div class="textarea-class">
          <el-input v-model="HsourceDesc" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入其他联系人调查信息</span>
    </div>
    <ul style="margin-left:15px;">
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">第三方查询信息：</div>
          <div class="textarea-class">
            <el-input type="textarea" v-model="HthirdResult" :row="2" resize=none></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title"><span class="require-icon" style="left:0px;">*</span>三方查询是否异常：</div>
          <!-- <div> -->
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="HthreeQueries" placeholder="请选择调查情况" @change="changes('HthreeQueries')">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-tooltip>
          <!-- </div> -->
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="HthreeQueries =='1'"><span class="require-icon" style="left:80px;">*</span>说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="HthreeQueries =='1'">
              <el-input v-model="HthreeQueriestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2"><span class="require-icon" style="top:-5px;left:0px;">*</span>微信/支付宝是否异常：</div>
          <!-- <div> -->
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="Hmobilepayment" placeholder="请选择调查情况" @change="changes('Hmobilepayment')">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-tooltip>
          <!-- </div> -->
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="Hmobilepayment=='1'"><span class="require-icon" style="left:80px;">*</span>说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="Hmobilepayment=='1'">
              <el-input v-model="Hmobilepaymenttxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">与借款人关系：</div>
          <div>
            <el-select v-model="HrelBorrower" placeholder="请选择调查情况" @change="changes('HrelBorrower')">
              <el-option label="父母" value="00"></el-option>
              <el-option label="爱人" value="01"></el-option>
              <el-option label="子女" value="02"></el-option>
              <el-option label="其他" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="HrelBorrower=='03'">说明：</div>
          <div class="textarea-class2" v-show="HrelBorrower=='03'">
            <el-input v-model="HrelBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2">与借款人联系是否频繁：</div>
          <div>
            <el-select v-model="Hcontactfre" placeholder="请选择调查情况">
              <el-option label="频繁" value="00"></el-option>
              <el-option label="一般" value="01"></el-option>
              <el-option label="偶尔" value="02"></el-option>
              <el-option label="较少" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对工作情况：</div>
          <div>
            <el-select v-model="HcheckWork" placeholder="请选择调查情况" @change="changes('HcheckWork')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="HcheckWork=='01'">说明：</div>
          <div class="textarea-class2" v-show="HcheckWork=='01'">
            <el-input v-model="HcheckWorktxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对婚姻情况：</div>
          <div>
            <el-select v-model="HmaritalStatus" placeholder="请选择调查情况">
              <el-option label="未婚" value="00"></el-option>
              <el-option label="已婚" value="01"></el-option>
              <el-option label="离异" value="02"></el-option>
              <el-option label="丧偶" value="03"></el-option>
              <el-option label="准备结婚" value="04"></el-option>
              <el-option label="被调查人不清楚" value="05"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">核对子女情况：</div>
          <div>
            <el-select v-model="HmaritalStatustxt" placeholder="">
              <el-option label="有子女" value="00"></el-option>
              <el-option label="无子女" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3 item-column3-null">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title"><span class="require-icon" style="left:50px;">*</span>调查结果：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class">
              <el-input type="textarea" v-model="Hconclusion" :rows="5" resize=none :maxlength="500"></el-input>
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

      Hsource:this.hurryList.source,
      Hanswer:this.hurryList.answer,
      HcheckStage:this.hurryList.checkStage,
      HthirdResult:this.hurryList.thirdResult,
      HrelBorrower:this.hurryList.relBorrower,
      HrelBorrowertxt:this.hurryList.relBorrowertxt,
      HcheckWork:this.hurryList.checkWork,
      HcheckWorktxt:this.hurryList.checkWorktxt,
      Hmobilepayment:this.hurryList.mobilepayment,
      Hmobilepaymenttxt:this.hurryList.mobilepaymenttxt,
      HthreeQueriestxt:this.hurryList.threeQueriestxt,
      HmaritalStatus:this.hurryList.maritalStatus,
      HmaritalStatustxt:this.hurryList.maritalStatustxt,
      Hcontactfre:this.hurryList.contactfre,
      Hcontactfretxt:this.hurryList.contactfretxt,
      Hconclusion:this.hurryList.conclusion,


      phoneType: '04',


      HsourceDesc:this.hurryList.sourceDesc,
      HthreeQueries:this.hurryList.threeQueries,


      phoneId: '',
      resMsg:''
    }
  },
  /*props: ['custName', 'phoneNum', 'applyId', 'isFull','source' , 'answer' , 'checkStage' , 'sourceDesc' , 'thirdResult' , 'threeQueries' , 'threeQueriestxt' , 'mobilepayment' , 'mobilepaymenttxt' , 'relBorrower' , 'relBorrowertxt' , 'contactfre' , 'checkWork' , 'checkWorktxt' , 'maritalStatus' , 'maritalStatustxt' , 'conclusion'],*/
  props: ['custName', 'phoneNum', 'applyId', 'isFull','hurryList'],
  mounted() {
    this.phoneType = '04'; // 住址电话
    if (this.isFull == true) { // 全屏
      console.log('全屏');
      $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      $('.item-column1 textarea').css("width", "100%")
      $('.item-column1 textarea').css("width", "100%")
      // 提交按钮
      $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      // 显示 column2
      // $('.item-column3').css({
      //   "min-height": "50px"
      // })
      $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
      $('.item-column2 textarea').css("width", "100%");
    } else if (this.isFull == false) { // 分屏
      console.log("分屏");
      // $(".textarea-class").css("minWidth", "300px")
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
      console.log('submit!');
      // 检测必填项
      if (!this.Hsource || !this.Hanswer || !this.HcheckStage || !this.HthreeQueries || (this.HthreeQueries == '1' && !this.HthreeQueriestxt) || !this.Hmobilepayment || (this.Hmobilepayment == '1' && !this.Hmobilepaymenttxt) || !this.Hconclusion) {
        this.$message({
          message: '请输入必填项!',
          type: 'warning'
        });
        return;
      }
      this.open();
    },
    // open 打开 是否确认提交弹窗
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [
          h('span', null, '确定操作? '),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            console.log(this.taskId)
            // 点击 确认 提交 方法
            this.post('/creTelResearchHis/addTeleContract', {
              cretelinvest: {
                custName: this.custName,
                phoneType: this.phoneType,
                phoneNum: this.phoneNum,
                source: this.Hsource,
                answer: this.Hanswer,
                checkStage: this.HcheckStage,
                sourceDesc: this.HsourceDesc, // 其他来源说明
                applyId: this.applyId,
                id: this.phoneId
              },
              cretelecontact: {
                applyId: this.applyId,
                id: this.phoneId,
                thirdResult: this.HthirdResult,
                relBorrower: this.HrelBorrower,
                relBorrowertxt: this.HrelBorrowertxt,
                checkWork: this.HcheckWork,
                checkWorktxt: this.HcheckWorktxt,
                mobilepayment: this.Hmobilepayment,
                mobilepaymenttxt: this.Hmobilepaymenttxt,
                threeQueries: this.HthreeQueries,
                threeQueriestxt: this.HthreeQueriestxt,
                maritalStatus: this.HmaritalStatus,
                maritalStatustxt: this.HmaritalStatustxt,
                contactfre: this.Hcontactfre,
                contactfretxt: this.Hcontactfretxt,
                conclusion: this.Hconclusion
              }
            }).then(res => {
              if (res.statusCode == '200') {
                this.phoneId = '';
                // 清数据
                 /*this.source = '';
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
                 this.conclusion = '';*/
                // 提交数据成功,广播事件 重新刷新列表
                this.$emit('updateList');
                this.$emit('updateTree');
                this.resMsg = res.msg;
                done();
              } else {
                // this.$message(res.msg);
                this.resMsg = res.msg;
                instance.confirmButtonText = '';
              }
              instance.confirmButtonLoading = false;
            });
          } else {
            // this.$message({ message: this.resMsg, type: 'warning' });

            done();
          }
        }
      }).then(action => {
        this.$message({ type: 'success', message: this.resMsg });

      });
    },
    changes(flage){
      switch (flage){
        case 'Hsource':
          if(this.Hsource != '02'){
            this.HsourceDesc = '';
          }
        break;
        case 'HthreeQueries':
          if(this.HthreeQueries == '0'){
            this.threeQueriestxt = '';
          }
        break;
        case 'Hmobilepayment':
          if(this.Hmobilepayment == '0'){
          this.Hmobilepaymenttxt = '';
        }
        break;
        case 'HrelBorrower':
          if(this.HrelBorrower!='03'){
            this.HrelBorrowertxt = '';
          } 
        break;
        case 'HcheckWork':
          if(this.HcheckWork!='01'){
          this.HcheckWorktxt = '';
        }
        break;
      }
    }
  },
  watch: {
    /*source: function() {
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
    },*/
    hurryList(val){
      console.log(val);
      this.Hsource = val.source;
      this.Hanswer = val.answer;
      this.HcheckStage = val.checkStage;
      this.HthirdResult = val.thirdResult;
      this.HrelBorrower = val.relBorrower;
      this.HrelBorrowertxt = val.relBorrowertxt;
      this.HcheckWork = val.checkWork;
      this.HcheckWorktxt = val.checkWorktxt;
      this.Hmobilepayment = val.mobilepayment;
      this.Hmobilepaymenttxt = val.mobilepaymenttxt;
      this.HthreeQueriestxt = val.threeQueriestxt;
      this.HmaritalStatus = val.maritalStatus;
      this.HmaritalStatustxt = val.maritalStatustxt;
      this.Hcontactfre = val.contactfre;
      this.Hcontactfretxt = val.contactfretxt;
      this.Hconclusion = val.conclusion;
      this.HsourceDesc = val.sourceDesc;
      this.HthreeQueries = val.threeQueries;
    },
    // 判断全屏 , 更改样式
    isFull: function(val) {
      this.phoneType = '01'; // 住址电话
      if (val == true) { // 全屏
        console.log('全屏');
        $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
        $('.item-column1 textarea').css("width", "100%")
        // 提交按钮
        $('.submit-class').css("margin-left", "calc( 66% - 140px)")
        // 显示 column2
        // $('.item-column3').css({
        //   "min-height": "50px"
        // })
        $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
        $('.item-column2 textarea').css("width", "100%");
      } else if (val == false) { // 分屏
        console.log("分屏");
        // $(".textarea-class").css("minWidth", "300px")
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
