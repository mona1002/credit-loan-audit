<template>
  <div class="SSComp">
    <!-- 公积金 -->
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
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">基本信息</span>
        </template>
        <div class="lists">
          <h4>基本信息</h4>

          <h4>账单记录</h4>
          <h4>贷款记录</h4>
          <h4>还款记录</h4>
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
          <h4>账户基本信息</h4>
          <h4>缴纳信息</h4>
          <h4>还款信息</h4>
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
        tes:[]
      }
    },
    mounted(){
        //          this.get("../../../../static/json/a.json", {
        // //   parentCode: this.checkData.workProvince,
        // }).then(res => {
        //   if (res.statusCode == 200) {
        //    console.log(res)
        //   } else {
        //     this.$message.error('查询失败');
        //   }
        // })


// this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
// 		        'id':"78351fc3-5ca6-4d37-ac48-e7a69a8abc70"
// 		      }).then(res => {
// console.log(res.data)
// for(var i in res.data){
//     var y=[];
// console.log(i +':'+ res.data[i])
// y[0]=i;
// y[1]=res.data[i];
// this.tes.push(y);
// }
// console.log(this.tes)

//               })
var obj={
    name:2,
    name:4,
    age:3
}
    for(var i in obj){
console.log(i +':'+ obj[i])

    }

	
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
    width: 65px;
    text-align: right;
  }

</style>
