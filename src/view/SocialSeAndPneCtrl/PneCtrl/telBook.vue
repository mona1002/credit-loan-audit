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
        this.get('/tripartiteData/' + this.applySubNo + '/getContactsInfo').then(res => {
        // this.get('/tripartiteData/201801080512013502/getContactsInfo?' + Math.random()).then(res => {
          if (res.statusCode==200) {
            console.log()
            let resp=JSON.parse(res.data);
            this.tableData = resp.contactsInfo;
            if(resp.clientType){
              resp.clientType==1? this.type ='H5':'';
              resp.clientType==2? this.type ='Android':'';
              resp.clientType==3? this.type ='IOS':'';
            }
            // 下面的无返回值
            // if (res.obj.td_clientType) {
              // if (res.obj.td_clientType == '3') this.type = 'IOS';
              // else if (res.obj.td_clientType == '2') this.type = 'Android';
              // else this.type = 'Web';
            // }
          }else{
            this._error(res.msg)
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
