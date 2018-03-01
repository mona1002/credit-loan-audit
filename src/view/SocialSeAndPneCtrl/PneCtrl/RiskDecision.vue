<template>
  <div class="SSComp">
    <!-- 大数据风控 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">产品输出标识
          </span>
        </template>
        <div class="lists">
<ul>
            <li>
              <p>
                <label>身份证：</label>
              </p>
            </li>
          </ul>

        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">返回参数
          </span>
        </template>
        <div class="lists">
<ul>
            <li>
              <p>
                <label>提交状态码说明：</label>
              </p>
              <p>
                <label>返回结果码说明：	</label>
              </p>
              <p>
                <label>核验代码描述：	</label>
              </p>
            </li><li>
            <p>
              <label>前科案件数量：	</label>
            </p>
           </li>
          </ul>

        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">案件说明</span>
        </template>
       <div class="tes">
          <div class="tab_wrap">
            <el-table :data="tableData" border height="100%" style="width: 100%">
              <el-table-column prop="date" label="案件类别 " align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="name" label="案发时间 " align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="address" label="案件来源 " align="center" min-width="100">
              </el-table-column>
              <el-table-column prop="address" label="案件级别 " align="center" min-width="100">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3"],
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
        mounted(){
            this.get("/credit/queryCityCounty", {
          parentCode: this.checkData.workProvince,
        }).then(res => {
          if (res.statusCode == 200) {
           
          } else {
            this.$message.error('查询失败');
          }
        })
    }
  }

</script>
<style scoped>
 .SSComp {
    overflow-x: hidden;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px;
  }

  .lists {
    padding: 10px 0 0 21px;
  }

  .SSComp p {
    float: left;
    width: 33.3%;
    margin-bottom: 10px;
  }

  .SSComp label {
    display: inline-block;
    width: 105px;
    text-align: right;
  }

  .tab_wrap {
  margin: 10px;
  border-radius: 4px;
    
    overflow-x: hidden;
    /* border: 1px solid red; */
  }
.tes{
  /* max-height: 500px; */

  /* border: 3px solid green; */
}

</style>
