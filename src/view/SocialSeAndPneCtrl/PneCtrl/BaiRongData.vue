<template>
  <div class="SSComp">
    <!-- 大数据风控 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">输入参数</span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label>身份证：</label>
              </p>
              <p>
                <label>手机号：</label>
              </p>
              <p>
                <label>姓名：</label>
              </p>
            </li><li>
            <p>
              <label>联系人手机号：</label>
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
          <span class="headFont">风险详情</span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label>策略集：</label>
              </p>
              <p>
                <label>风险状态：</label>
              </p>
              <p>
                <label>风险系数：</label>
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
          <span class="headFont">命中规则</span>
        </template>
        <div class="tes">
          <div class="tab_wrap">
            <el-table :data="tableData" border height="100%" style="width: 100%">
              <el-table-column prop="date" label="规则编号" align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="name" label="规则名称" align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="address" label="规则分数" align="center" min-width="100">
              </el-table-column>
              <el-table-column prop="address" label="规则结果" align="center" min-width="100">
              </el-table-column>
              <el-table-column prop="address" label="查看规则详情" align="center" min-width="100">
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
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
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
    width: 95px;
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
