<template>
  <div class="specialQT">
 <!-- <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in tabTitle" :key="index" @click="tabClick($event,index,val)" :class="{tabAct:tabIndex==index}">
              {{val}}</li>
          </ul> -->
      <el-table :data="aaa( this.ccc)" border style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="核实类型" prop='date' align="left" width="180">
              </el-table-column>
              <el-table-column label="核实结论" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                     <b class="required_Red"> * </b>
                    <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="scope.row.insResult=='00'?scope.row.remark='':scope.row.remark">
                      <el-radio label="00">正常</el-radio>
                      <el-radio label="01">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center">
                <template slot-scope="scope">
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark"
                    :maxlength="this.textareaL" placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
    <ul>
      <li ref="tabOne" class="tab1Default" v-for="(val,index) in tabTitle" :key="index" @click="tabClick($event,index,val)">
        {{val}}</li>
    </ul>

      <p>{{ccc}}</p>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    mounted(){
this.kkk[0]=this.fff[0];
console.log(this.kkk);
    },
    data() {
      return {
        kkk:[{
          abc:'ddd',
          ddd:'idj'
        },{
 abc:'fff',
          ddd:'fff'
        }],
        jjj:{
          abc:'bbbb',
          ddd:"bbbb",
          ckj:'bbbb'
        },
        fff:[{
          abc:'ccc',
          ddd:"ccc",
          ckj:'ccc'
        },{
            abc:'fff',
          ddd:"fff",
          ckj:'fff'
        }],
        ccc: '',
        ddd: true,
        tabTitle: ["客户本人", "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
        tableData: [{
          date: '2016-05-02',
          insResult: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          insResult: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          insResult: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          insResult: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: {
          date: '2016-05-02',
          insResult: '王小虎',
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

    methods: {
      tabClick(ev, ind, val) {
        console.log(ind)
        this.ccc=ind;
      },
      aaa(){
        
      }

    }
  }

</script>

<style scoped>


</style>
