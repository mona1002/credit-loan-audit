<template>
  <!-- 通讯录-->
  <div class="SocialSecurity el_table_100Percent">
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
        tableData: []
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
.SocialSecurity{
  overflow: hidden;
}
</style>
