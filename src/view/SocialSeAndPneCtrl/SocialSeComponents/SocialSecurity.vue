<template>
  <div class="SSComp">
<!-- 社保 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">输入参数</span>
        </template>
        <div class="lists">
           <ul>
            <li>
              <p>
                <label>姓名：</label>
              </p>
              <p>
                <label>身份证号：</label>
              </p>
              <p>
                <label>账号：</label>
              </p>
            </li>
            <li>
              <p>
                <label>密码：</label>
              </p>
              <p>
                <label>省市：</label>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
<!-- =========================================== -->
  <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">基本信息</span>
        </template>
        <div class="lists">
          <h4>基本信息</h4>
          <h4>保险费用</h4>
          <h4>保险费用记录</h4>
          <h4>医疗保险记录</h4>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">报告信息</span>
        </template>
        <div class="lists">
          <h4>用户及账户基本信息</h4>
          <h4>用户基本信息效验</h4>
          <h4>社保信息</h4>
          <h4>医疗保险缴存信息</h4>
          <h4>医保消费明细</h4>
          <h4>医保卡消费记录</h4>
        </div>
      </el-collapse-item>
    </el-collapse>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3"],
      }
    },
    mounted(){
        //          this.get("/credit/queryCityCounty", {
        // //   parentCode: this.checkData.workProvince,
        // }).then(res => {
        //   if (res.statusCode == 200) {
           
        //   } else {
        //     this.$message.error('查询失败');
        //   }
        // })
    }
  }

</script>
<style scoped>
  .SSComp {
    overflow-x: hidden;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px;
  }

  .lists {
    padding: 10px 0 0 21px;
  }

  .SSComp p {
    float: left;
    width: 33.3%;
    margin-bottom: 10px;
  }
  .SSComp h4{
clear: both;

  }
  .SSComp label {
    display: inline-block;
    width:92px;
    text-align: right;
  }

</style>