<template>
  <!--  储蓄卡报告   -->
  <div class="SocialSecurity debitCardReport">
    <el-tabs v-model="editableTabsValue" type="border-card">
      <el-tab-pane label="储蓄卡">
        <debitCardConponent :totalVal.sync='debitCard' :rawData.sync='debitAccount'> </debitCardConponent>
      </el-tab-pane>
      <el-tab-pane label="信用卡">
        <creditCardConponent :totalVal.sync='creditCard' :rawData.sync='creditAccount'> </creditCardConponent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import debitCardConponent from './debitCardConponent.vue';
  import creditCardConponent from './creditCardConponent.vue';
  export default {
    data() {
      return {
        debitCard: {}, //储蓄卡
        creditCard: {}, //信用卡
        debitAccount: {},
        creditAccount: {},
        rawData: {
          accounts: {},
          flows: []
        }, //原始数据
        editableTabsValue: '0',
      }
    },
    components: {
      debitCardConponent,
      creditCardConponent
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
        //   applySubNo: this.applySubNo
        // this.get('http://10.1.26.130:20716/riskManagement/tripartiteData/queryReport', {
        this.get('/tripartiteData/queryReport', {
          applySubNo: this.applySubNo,
          category: '03',
          // applySubNo: '201801080512013502'
        }).then(res => {
          if (res.statusCode == 200) {
            let resp = res.data;
            let report = res.data.reportData ? JSON.parse(resp.reportData) : {}; //报告数据
            let rawreport = res.data.rawData ? JSON.parse(resp.rawData) : {}; //原始数据
            if (report && report.data && report.data.report && report.data.report.length > 0) {
              let repData = report.data.report;
              if (repData[0].type == '储蓄卡') {
                this.debitCard = repData[0].data[0];
                this.creditCard = repData[1].data[0]
              } else if (repData[0].type == '信用卡') {
                this.creditCard = repData[0].data[0];
                this.debitCard = repData[1].data[0]
              }
            }
            if (rawreport && rawreport.data) {
              let raw = rawreport.data;
              raw.accounts && raw.accounts.length > 0 ? this.rawData = raw.accounts[0] : '';
              this.rawData.flows = raw.flows;
              if (this.debitCard) {
                Object.assign(this.debitAccount, this.rawData)
              } else if (this.creditCard) {
                Object.assign(this.creditAccount, this.rawData)
              }
            }
            // console.log('储蓄卡', this.debitCard);
            // console.log('信用卡', this.creditCard);
          } else {
            this._error(res.msg);
          }
        });
      },
    },
    created() {
      this.getInf();
    }
  }

</script>
