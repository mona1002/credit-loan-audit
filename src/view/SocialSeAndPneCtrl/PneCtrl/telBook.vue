<template>
  <!-- 通讯录-->
  <div class="SocialSecurity el_table_100Percent">
    <div class="source" v-if="type"> 客户提交授信来源：{{type}}</div>
    <el-table :data="tableData" highlight-current-row border style="width: 100%">
      <el-table-column type="index" label="序号" width="55">
      </el-table-column>
      <el-table-column prop="name" label="联系人姓名" width="200">
      </el-table-column>
      <el-table-column prop="phone" label="电话号码">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
        tableData: [],
        type: ''
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
        this.post(baseurl.DataUrl + '/thirdrisk/ocrMessageAction!notSession_getTelBook.action', {
          applySubNo: this.applySubNo
          //  applySubNo : '201506260111012193'
        }).then(res => {
          if (res && res.success == true && res.obj) {
            this.tableData = res.obj.contracts;
            this.type = '';
            if (res.obj.td_clientType) {
              if (res.obj.td_clientType == '3') this.type = 'IOS';
              else if (res.obj.td_clientType == '2') this.type = 'Android';
              else this.type = 'Web';
            }
          }
        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
  .SocialSecurity {
    overflow: hidden;
  }

  .source {
    font-weight: 800;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding-left: 10px;
    color: #777;
  }

</style>
