<template>
  <!--  储蓄卡   -->
  <div class="SocialSecurity debitCardReport">
    <el-tabs v-model="editableTabsValue" type="border-card">
      <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.type" :name="index+''">
        <debitCardConponent :totalVal='item' v-if="item.type=='储蓄卡'"> </debitCardConponent>
        <creditCardConponent :totalVal='item' v-if="item.type=='信用卡'"> </creditCardConponent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  import debitCardConponent from './debitCardConponent.vue';
  import creditCardConponent from './creditCardConponent.vue';

  export default {
    data() {
      return {
        totalAccount: [],
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        caReport: {},
        behaviorCheck: [],
        contactRegion: [],
        contactList: [],
        cellBehavior: [],
        deliverAddress: [],
        ebusinessExpense: [],
        collectionContact: [],
        triInfo: [],
        activeName: 'first',
        editableTabs: [],
        CreditCard: [],
        editableTabsValue: '0',
        tabIndex: 0,
        defaultPart: false,
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
      tab2() {

      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getInf() {
        this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getdCardReport.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          // console.log(3, res)
          if (!res.success) {
            return;
          }
          if ("" != res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10061'] && result.result['10061'].bizInfo && result.result[
                '10061'].bizInfo.data) {
              var report = result.result['10061'].bizInfo.data.report;
              var arr = [];
              // console.log('result:', result)
              // console.log('report:', report)
              // console.log('editableTabs', this.editableTabs)
              if (report.length > 0) {
                $.each(report, (i, eh) => {
                  if ('储蓄卡' == eh.type && eh.data.length > 0) {
                    // console.log('储蓄卡')
                    $.each(eh.data, (n, v) => {
                      var obj = {
                        type: n == 0 ? '储蓄卡' : '储蓄卡' + n,
                        data: {}
                      }
                      // console.log(n, v)
                      Object.assign(obj.data, v)
                      this.editableTabs.push(obj)
                    });
                  }
                });
                $.each(report, (i, eh) => {
                  if ('信用卡' == eh.type && eh.data.length > 0) {
                    // console.log('信用卡')
                    $.each(eh.data, (n, v) => {
                      var credObj = {
                        type: n == 0 ? '信用卡' : '信用卡' + n,
                        data: {}
                      }
                      Object.assign(credObj.data, v)
                      this.CreditCard.push(credObj)
                    });
                  }
                });
              }
              // console.log('editableTabs.push::::::', this.editableTabs);
            }
          }
          if ("" != res.obj.rawRpt) {
            var rawResult = $.parseJSON(res.obj.rawRpt);
            // console.log('rawResult:', rawResult)
            var dCardRawReport;
            if (rawResult && rawResult.result && rawResult.result['10063'] && rawResult.result['10063'].bizInfo) {
              dCardRawReport = rawResult.result['10063'].bizInfo.data;
              // console.log('bizInfo:', dCardRawReport)
              // console.log(7987984, this.editableTabs)
              // 储蓄卡
              if (this.editableTabs.length > 0) {
                $.each(this.editableTabs, (ind, val) => {
                  // console.log(999, val)
                  // 账户信息
                  if (dCardRawReport.accounts && dCardRawReport.accounts.length > 0) {
                    $.each(dCardRawReport.accounts, (i, eh) => {
                      var rawobj = {
                        accounts: {}
                      }
                      // console.log(909897, val.data.account_id)
                      // console.log(8888888, eh)
                      // console.log(i, eh.id)
                      if (val.data.account_id == eh.id) {
                        // console.log('匹配出来了')
                        // console.log(val.data)
                        // console.log(typeof (val.data))
                        Object.assign(rawobj.accounts, eh)
                        Object.assign(val, rawobj)
                      }
                      // console.log(111, eh)
                      // console.log(1222, i)
                      // console.log('我要添加进去', this.editableTabs)
                    })
                  }
                  // console.log('长度', dCardRawReport)
                  // 流水
                  if (dCardRawReport.flows && dCardRawReport.flows.length > 0) {
                    // console.log(222222222222222, val)
                    var rawflows = {
                      flows: []
                    }
                    $.each(dCardRawReport.flows, (i, eh) => {
                      if (val.data.account_id == eh.account_id) {
                        rawflows.flows.push(eh)
                      }
                    })
                    Object.assign(val, rawflows)
                  }
                })
              }

              // console.log(111111111111, this.CreditCard)
              // 信用卡信息
              if (this.CreditCard.length > 0) {
                $.each(this.CreditCard, (ind, val) => {
                  // console.log(999, val)
                  if (dCardRawReport.accounts && dCardRawReport.accounts.length > 0) {
                    $.each(dCardRawReport.accounts, (i, eh) => {
                      var rawobj = {
                        accounts: {}
                      }
                      if (val.data.account_id == eh.id) {
                        Object.assign(rawobj.accounts, eh)
                        Object.assign(val, rawobj)
                      }
                    })
                  }
                  if (dCardRawReport.flows && dCardRawReport.flows.length > 0) {
                    var rawflows = {
                      flows: []
                    }
                    $.each(dCardRawReport.flows, (i, eh) => {
                      if (val.data.account_id == eh.account_id) {
                        rawflows.flows.push(eh)
                      }
                    })
                    Object.assign(val, rawflows)
                  }
                })
              }
            }
          }
          // console.log('最后结果：', this.editableTabs)
          // console.log('最后结果：', this.CreditCard)
          this.totalAccount = this.totalAccount.concat(this.editableTabs, this.CreditCard)
          // console.log('totalAccountL', this.totalAccount)
        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
