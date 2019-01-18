<template>
  <div class="aAntiApplyInf">
    <!-- 反欺诈结论  -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="tableData" style="width: 100%" border @row-dblclick="getDetail">
            <el-table-column prop="auditTime" label="结论时间">
            </el-table-column>
            <el-table-column prop="applySubno" label="进件编号">
            </el-table-column>
            <el-table-column prop="applyCustName" label="客户名称">
            </el-table-column>
            <el-table-column prop="certCode" label="身份证号">
            </el-table-column>
            <el-table-column prop="applyPersonName" label="申请人">
            </el-table-column>
            <el-table-column prop="appDate" label="申请日期">
            </el-table-column>
            <el-table-column prop="appOrgName" label="申请机构">
            </el-table-column>
          </el-table>
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
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">反欺诈申请人：</label>
                <span>{{fraudApplyInfo.applyPersonName}}</span>
              </li>
              <li>
                <label class="label_width_166">反欺诈申请日期：</label>
                <span>{{fraudApplyInfo.appDate}}</span>
              </li>
            </div>
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
        <!-- CreditForm_div_border -->
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li class="text_area_li triplet_textarea_width " style="margin-top:5px;">
              <label class="label_width_166">反欺诈决策反馈：</label>
              <span class="text_area_span text_area_span_minus220">{{fraudApplyInfo.auditDesc}}</span>
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
        tableData: [],
        activeNames: ['1', '2', '3'],
        fraudApplyInfo: {},
      }
    },
    methods: {
      getDetail({id}) {
        this.get('/fraudAuditOpinion/getOpinion/' + id).then(res => {
          if (res.statusCode == 200) {
            this.fraudApplyInfo = res.data;
          } else {
            this._error(res.msg);
            this.fraudApplyInfo = {};
          }
        });
      },
      mountedInf() {
        this.get('/fraudAuditOpinion/getOpinions/' + this.applyId).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
            if (this.tableData.length > 0) {
              this.getDetail(this.tableData[0]);
            }
          } else {
            this._error(res.msg);
            this.tableData = [];
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
