<template>
  <div class="hello">
    <p>有get、post请求demo</p>
  
  
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
