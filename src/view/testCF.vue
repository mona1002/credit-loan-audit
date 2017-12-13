<template>
  <div class="testCF">
<input type="number">
<el-input  v-model="value" type="number"></el-input>
  </div>
</template>
<script>

export default {
data(){
  return{
value:'',
  }
}
}
</script>
<style scoped>
  .testCF li {
    /* background: red; */
    border: 1px solid yellowgreen;
    margin-top: 30px;
    height: 40px;
    line-height: 40px;
  }

  .testCF li p {
    float: left;
    width: 50%;
  }

  input {
    border: 1px solid lightblue;
  }

</style>
