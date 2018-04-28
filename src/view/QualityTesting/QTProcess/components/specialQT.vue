<template>
  <div class="specialQT">
   <div>
        <el-button @click="coverFn('back')">
        <img src="/static/images/back.png">
        <label class="labelTxt">回退</label>
      </el-button>
      <el-button @click="coverFn('refuse')">
        <img src="/static/images/jujue.png">
        <label class="labelTxt">拒绝</label>
      </el-button>
      <el-button @click="shenpi">
        <img src="/static/images/back.png">
        <label class="labelTxt">审批</label>
      </el-button>
      <el-button @click="AntiFraudApplication">
        <img src="/static/images/faqi.png">
        <label class="labelTxt">反欺诈申请</label>
      </el-button>
      <el-button @click="getSpjlList">
        <img src="/static/images/jielun.png">
        <label class="labelTxt">审批流程轨迹</label>
      </el-button>
      <el-button @click="getLcgjList">
        <img src="/static/images/liucheng.png">
        <label class="labelTxt">流程轨迹</label>
      </el-button>
      <el-button @click="tobigData">
        <img src="/static/images/bigdata.png">
        <label class="labelTxt">大数据风控</label>
      </el-button>
      <el-button @click="roSocialSecurity">
        <img src="/static/images/social.png">
        <label class="labelTxt">社保/公积金{{social}}</label>
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
      watch: {
      '$route' (to, from) {
        if (to.fullPath !== from.fullPath) {
          this.toinner();
        }
      }
    },
}
</script>

<style scoped>

</style>
