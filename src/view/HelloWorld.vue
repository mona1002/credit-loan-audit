<template>
  <div class="HelloWorld">
    <div class="b">
      <el-button type="primary">按钮 </el-button>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <button @click="shi"> aaaaa</button>
    <button @click="p"> bbb</button>
  </div>
</template>
<script>
  export default {
    // name: "HelloWorld",
    data() {
      return {
        adf: '123456789',
        arr: ["blue", "baldk", "white"],
        arr1: [1, 2, 3, 4, 5, 6],
        arr2: ["1", "2", '3'],
        value: ''
      }
    },
    methods: {
      shi() {
        this.arr1.filter(function (item, index, array) {
          return (item > 3)
        })
      },
      p() {
        this.arr2.shift()
      },
      Get() {
        //get请求 示例
        this.get("/admin/admins").then(response => {
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
    },
    mounted() {
      console.log(this.adf.substring(-6))
      window.find();
    }
  }
</script>
<style scoped>
  .a {
    width: 500px;
    height: 600px;
    background: pink;
    /* margin: 0 auto; */
    margin-left: 30px;
    overflow: auto;
    position: absolute;
  }

  .b {
    height: 1000px;
    width: 100%;
    background: yellowgreen;
  }

</style>
