<template>
  <div class="HelloWorld">
    <p>有get、post请求demo</p>
    <router-link to="taskInWaitting">初审审批</router-link>
    <router-link to="remark">备注信息</router-link>
    <router-link to="creditInvestigation">实地征信</router-link>
    <router-link to="borrowerInformation">借款人资料</router-link>
    <router-link to="applicationInformation">申请信息</router-link>
   <router-link to="/workbench">  <el-button type="primary">workbench</el-button></router-link>
  <router-link to="/SplitScreen">  <el-button type="primary">SplitScreen</el-button></router-link>
  <router-link to="/AudioVisual">  <el-button type="primary">AudioVisual</el-button></router-link>
  <router-link to="/CreditForm">  <el-button type="primary">CreditForm</el-button></router-link>
  <router-link to="/cCreditForm">  <el-button type="primary">CreditFormCheck</el-button></router-link>
  
  <!-- <router-link to="/AudioVisual">  <el-button type="primary">AudioVisual</el-button></router-link> -->
  

  
    <router-link to="/login">  <el-button type="primary">登录</el-button></router-link>
  <router-link to="/InternalMatch">  <el-button type="primary">内部匹配</el-button></router-link>
  <router-link to="/PhoneCredit">  <el-button type="primary">电话征信</el-button></router-link>
  <router-link to="/ApprovalConclusion">  <el-button type="ApprovalConclusion">电话征信</el-button></router-link>
  
  
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    Get() {
      //get请求 示例
      this.get("/admin/admins").then(response => {
        // axios 请求
        console.info(response.data);
      });
    },
    mPost() {
      //post请求 示例
      this.post("/loginCookie", {
        username: "2",
        password: "1"
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>

</style>
