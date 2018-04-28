<!-- 电话征信 - 工作证明人 -->
<template>
  <div>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
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
        <div class="left-title"><span class="require-icon" style="left:80px;">*</span> 来源：</div>
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
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span> 接听情况：</div>
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
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span> 调查阶段：</div>
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
        <div class="left-title">其他来源说明：</div>
        <div class="textarea-class">
          <el-input v-model="sourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入工作证明人调查信息</span>
    </div>
    <ul style="margin-left:15px;">
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2"><span class="require-icon" style="left:0px;">*</span>微信/支付宝是否异常：</div>
          <!-- <div> -->
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="mobilepayment" placeholder="请选择调查情况">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-tooltip>
          <!-- </div> -->
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="mobilepayment=='1'"><span class="require-icon" style="left:80px;">*</span> 说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="mobilepayment=='1'">
              <el-input v-model="mobilepaymenttxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">接电话人身份：</div>
          <div>
            <el-select v-model="answerIdentity" placeholder="请选择调查情况">
              <el-option label="同事" value="00"></el-option>
              <el-option label="本人" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="answerIdentity=='00'">说明：</div>
          <div class="textarea-class2" v-show="answerIdentity=='00'">
            <el-input v-model="answertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对单位工作情况：</div>
          <div>
            <el-select v-model="checkJob">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="checkJob=='01'">说明：</div>
          <div class="textarea-class2" v-show="checkJob=='01'">
            <el-input v-model="checkJobtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title"><span class="require-icon" style="left:50px;">*</span> 调查结果：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class">
              <el-input v-model="conclusion" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
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
      // custName: '',
      phoneType: '05',
      // phoneNum: '',
      source: '',
      answer: '',
      checkStage: '',
      sourceDesc: '',
      answerIdentity: '',
      answertxt: '',
      checkJob: '',
      checkJobtxt: '',
      mobilepayment: '',
      mobilepaymenttxt: '',
      conclusion: '',
      phoneId: '',
      resMsg: ''
    }
  },
  props: ['custName', 'phoneNum', 'applyId', 'formId', 'isFull'],
  mounted() {
    this.phoneType = '05'; // 住址电话
    if (this.isFull == true) { // 全屏
      console.log('全屏');
      $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      $('.item-column1 textarea').css("width", "100%")
      // 提交按钮
      $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      // 显示 column2
      $('.item-column3').css({
        "min-height": "50px"
      })
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
      if (!this.source || !this.answer || !this.checkStage || !this.mobilepayment || (this.mobilepayment == '1' && !this.mobilepaymenttxt) || !this.conclusion) {
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
            this.post('/creTelResearchHis/addTeljobref', {
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
              creteljobref: {
                applyId: this.applyId,
                id: this.phoneId,
                answer: this.answerIdentity, // 接电话人身份
                answertxt: this.answertxt,
                checkJob: this.checkJob,
                checkJobtxt: this.checkJobtxt,
                mobilepayment: this.mobilepayment,
                mobilepaymenttxt: this.mobilepaymenttxt,
                conclusion: this.conclusion
              }
            }).then(res => {
              if (res.statusCode == '200') {

                this.phoneId = res.data.id;

                // 清数据
                 this.source = '';
                 this.answer = '';
                 this.checkStage = '';
                 this.sourceDesc = '';
                 this.answerIdentity = '';
                 this.answertxt = '';
                 this.checkJob = '';
                 this.checkJobtxt = '';
                 this.mobilepayment = '';
                 this.mobilepaymenttxt = '';
                 this.conclusion = '';

                // 提交数据成功,广播事件 重新刷新列表
                this.$emit('updateList');
                this.$emit('updateTree');

                this.resMsg = res.msg;
                done();
              } else {
                this.resMsg = res.msg;
                done();
                instance.confirmButtonText = '';
              }
              instance.confirmButtonLoading = false;
            });
          } else {
            

            done();
          }
        }
      }).then(action => {
        this.$message({ type: 'success', message: this.resMsg });

      });
    },
  },
  watch: {
    source: function() {
      this.sourceDesc = '';
    },
    answerIdentity: function() {
      this.answertxt = '';
    },
    checkJob: function() {
      this.checkJobtxt = '';
    },
    // 判断全屏 , 更改样式
    isFull: function(val) {
      if (val == true) { // 全屏
        console.log('全屏');
        $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
        $('.item-column1 textarea').css("width", "100%")
        // 提交按钮
        $('.submit-class').css("margin-left", "calc( 66% - 140px)")
        // 显示 column2
        $('.item-column3').css({
          "min-height": "50px"
        })
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
