<template>
  <div class="aAntiApplyInf">
    <!-- 反欺诈结论  -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <div>
                  <label class="label_width_95">进件编号：</label>
                  <span>{{applyInfoPool.applySubno}}</span></div>
              </li>
              <li>
                <div>
                  <label class="label_width_95">客户名称：</label>
                  <span>{{applyInfoPool.custName}}</span> </div>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <div>
                  <label class="label_width_95">证件类型：</label>
                  <span>{{applyInfoPool.certTypeTxt}}</span> </div>
              </li>
              <li>
                <div>
                  <label class="label_width_95">证件号码：</label>
                  <span>{{applyInfoPool.certCode}}</span> </div>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <div>
                  <label class="label_width_95">移动电话：</label>
                  <span>{{applyInfoPool.mobile}}</span> </div>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">反欺诈申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">借欺诈申请类型主原因：</label>
                <span>{{fraudApplyInfo.mainreaName}}</span>
              </li>
              <li>
                <label class="label_width_166">子原因：</label>
                <span>{{fraudApplyInfo.subreaName}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li triplet_textarea_width" style="margin:5px 0;">
                <label class="label_width_166">欺诈上报描述：</label>
                <span class="text_area_span text_area_span_minus220">{{fraudApplyInfo.applyDesc}}</span>
              </li>
            </div>
            <li class="clearFloat">
              <div> <label class="label_width_166">反欺诈申请人：</label>
                <span>{{fraudApplyInfo.applyPersonName}}</span></div>
            </li>
            <li>
              <div> <label class="label_width_166">反欺诈申请日期：</label>
                <span>{{fraudApplyInfo.appDate}}</span></div>
            </li>
            <li>
              <div> <label class="label_width_166">反欺诈申请机构：</label>
                <span>{{fraudApplyInfo.appOrgName}}</span></div>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">反欺诈结论</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li class="text_area_li triplet_textarea_width" style="margin-top:5px;">
              <label class="label_width_166">反欺诈决策反馈：</label>
              <span class="text_area_span text_area_span_minus220">{{fraudAuditOpinion.auditDesc}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3'],
        applyInfoPool: {},
        fraudApplyInfo: {},
        fraudAuditOpinion: {},
        tastwaitingPass: '',
      }
    },
    methods: {
      mountedInf() {
        //基本信息:applyInfoPool
        // 反欺诈申请信息 fraudApplyInfo
        // 反欺诈结论 fraudAuditOpinion 
        this.post("/fraudApplyInfoController/getRecentFraudApplyInfoWithOpinion", {
          applyId: this.applyId
        }).then(res => {
          if (res.statusCode == 200) {
            this.applyInfoPool = res.data.applyInfoPool;
            this.fraudApplyInfo = res.data.fraudApplyInfo;
            this.fraudAuditOpinion = res.data.fraudAuditOpinion;
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    props: {
      applyId: {
        default: '',
        type: String,
        required: true
      }
    },
    mounted() {
      this.mountedInf();
    },
  }

</script>
