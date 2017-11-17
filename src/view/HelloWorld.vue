<template>
  <div class="hello">
    <p>有get、post请求demo</p>
   <router-link to="/workbench">  <el-button type="primary">workbench</el-button></router-link>
  <router-link to="/SplitScreen">  <el-button type="primary">SplitScreen</el-button></router-link>
  <router-link to="/AudioVisual">  <el-button type="primary">AudioVisual</el-button></router-link>
  <router-link to="/CreditForm">  <el-button type="primary">CreditForm</el-button></router-link>
  <!-- <router-link to="/AudioVisual">  <el-button type="primary">AudioVisual</el-button></router-link> -->
  
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
       
      }
    },
    methods: {
      Get() { //get请求 示例
        this.get('/admin/admins').then(response=> { // axios 请求
          console.info(response.data);
        })
      },
      mPost() {  //post请求 示例
        this.post('/loginCookie', {
            username: '2',
            password: '1'
          })
          .then(res => {
            console.log(res)
          });
      }
    }
  }

</script>

<style scoped>


</style>
