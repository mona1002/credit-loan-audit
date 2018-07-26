<template>
  <!-- 风控指引 -->
  <div class="SocialSecurity">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">大数据结论</span>
        </template>
        <div class="padding_left_5">
          <textarea id="bigDataConclusion" readonly="readonly" rows="20" cols="50" style="width:100%;height:200px;word-break:break-all;"></textarea>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">风控提示</span>
        </template>
        <div class="padding_left_5">
          <textarea id="riskGuide" readonly="readonly" rows="20" cols="50" style="width:100%;height:200px;word-break:break-all;"></textarea>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  export default {
    data() {
      return {
        activeNames: ['1', '2', ]
      }
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
    methods: {
      getInf() {
        this.post(baseurl.DataUrl + '/thirdrisk/ocrMessageAction!notSession_getRiskPoint.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          console.log(res)
          if (res) {
            //风控结论	
            var conclusion = res.msg + "\n" + res.scoreMsg;
            console.log(conclusion)
            if (conclusion != undefined) {
              conclusion = conclusion.replace(/\|\|/g, "\n");
            }
            $('#riskGuide').val(conclusion);

            var scoreFee = res.scoreFee;
            var temp = parseFloat(scoreFee);
            var scoreFeeFormat;
            /* if(isNaN(temp)) {
             scoreFeeFormat="月综合费率： 无 \n";
            }else{
            var tempFormat=(Number)(temp*100).toFixed(2)+'%';
             scoreFeeFormat="月综合费率："+tempFormat+"\n";
            } */
            var scoreLevel = "评分级别：" + res.scoreLevel;
            var str = "";
            if (res.amountAndTerm) {
              var objs = eval(res.amountAndTerm);
              $.each(objs, function (index, ele) {
                str += "借款期限[月]：" + ele.term + "  金额[元]：" + ele.amount + "\n";
              });
            }
            //大数据结论
            $('#bigDataConclusion').val(str + scoreLevel);
          }
        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
