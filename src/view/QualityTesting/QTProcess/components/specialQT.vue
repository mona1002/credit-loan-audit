<template>
  <div class="specialQT">
     <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in tabTitle" :key="index" @click.once="tabClick($event,index,val)">
              {{val}}</li>
          </ul>
    <div>
       <el-radio-group :disabled='ddd' v-model="ccc">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
                <p>{{ccc}}</p>
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
export default {
   data() {
        return {
          ccc:'',
          ddd:true,
           tabTitle: ["客户本人", "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableData1:{
              date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        }
      },
      watch: {
      '$route' (to, from) {
        if (to.fullPath !== from.fullPath) {
          this.toinner();
        }
      }
    },

methods:{
     tabClick(ev, ind, val) {
       console.log(ind)
     }

  }
}
</script>

<style scoped>

</style>
