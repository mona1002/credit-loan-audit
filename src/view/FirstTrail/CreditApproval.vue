<!-- 信审 - 审批 -->
<template>
  <div style="padding:10px">
    <div class="address-title">
      概要信息
    </div>
    <el-form  style="padding:0 20px;width:100%; height:150px; " >
      <el-form-item label="审批人:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="申请类型:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="进件编号:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="证件类型:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="证件号码:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="产品名称:" class="item-column3">
        {{title}}
      </el-form-item>
      <el-form-item label="申请期限[元]" class="item-column3">
        {{title}}
      </el-form-item>
    </el-form>
    <div class="btn-div">
      <el-button type="primary" icon="el-icon-check">挂起</el-button>
      <el-button type="primary" icon="el-icon-check">回退</el-button>
      <el-button type="primary" icon="el-icon-check">拒绝</el-button>
      <el-button type="primary" icon="el-icon-check">放弃</el-button>
      <el-button type="primary" icon="el-icon-check">审批</el-button>
      <el-button type="primary" icon="el-icon-check">发起反欺诈</el-button>
      <el-button type="primary" icon="el-icon-check">审批结论轨迹</el-button>
      <el-button type="primary" icon="el-icon-check">流程轨迹</el-button>
    </div>

  </div>
</template>
<script>

export default{
  data(){
    return{
      // 挂起
      
      model:'',
      title:'123'
    }
  }
}

</script>
<style>
.address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
}


/* 三列 */

.item-column3 {
  width: 30%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}

.el-form-item{
  height: 40px;
  line-height: 40px;
}
/* 按钮集合控件 */
.btn-div{
  text-align: center;

}
</style>
