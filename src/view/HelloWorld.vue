<template>
  <div class="hello">
    <p>有get、post请求demo</p>
  
    <router-link to="/login">  <el-button type="primary">登录</el-button></router-link>
  <router-link to="/InternalMatch">  <el-button type="primary">内部匹配</el-button></router-link>
  <router-link to="/PhoneCredit">  <el-button type="primary">电话征信</el-button></router-link>
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
        this.get('/admin/admins').then(function (response) { // axios 请求
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
