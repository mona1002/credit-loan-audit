<!-- 审批结论 -->
<template>
  <div class="approval-colun">
    <ul>
      <li class="item-column3">
        <div class="left-title">
          审批结论：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3 item-column3-null">
        <div class="left-title"></div>
        <div class="">
        </div>
      </li>
      <li class="item-column3 item-column3-null">
        <div class="left-title"></div>
        <div class="">
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          主原因：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          子原因：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          主/从借款人：
        </div>
        <div>
          百丽决策
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">
          主原因：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">
          风险项：
        </div>
        <div class="textarea-class2">
          <el-input v-model="issameFamtxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">反欺诈决策反馈：</div>
        <div class="textarea-class2">
          <el-input v-model="issameFamtxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">案件描述：</div>
        <div class="textarea-class2">
          <el-input v-model="relBorrowertxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>
<style>
/*信审审批样式*/


/* 一列 */

.approval-colun .item-column1 {
  width: 90%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}








/* 两列 */

.approval-colun .item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}









/* 三列 */

.approval-colun .item-column3 {
  width: 33%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}

.approval-colun .left-title {
  float: left;
  width: 130px;
  line-height: 30px;
  min-height: 30px;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
}







/* 3列 空位 */

.approval-colun .item-column3-null {
  min-height: 30px;
}

.approval-colun .item-column3-2 {
  width: 66%;
}

.approval-colun .el-input__inner {
  height: 30px;
  line-height: 30px;
}


/* input hover 样式 */

.approval-colun .el-select:hover .el-input__inner {
  background: #ffffff;
  border: 1px solid #475669;
  border-radius: 4px;
  /*width: 258px;*/
  height: 30px;
}

.approval-colun .textarea-class2 {
  width: calc( 100% - 130px);
  float: left;
}

</style>
