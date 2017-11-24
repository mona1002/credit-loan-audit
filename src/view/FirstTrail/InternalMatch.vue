<template>
  <div>
    <!--     <internal-match-list :title="title1"></internal-match-list>
    <internal-match-list :title="title2"></internal-match-list>
    <internal-match-list :title="title3"></internal-match-list> -->
    <div>
      <div class="title-bar">
        {{title1}}
      </div>
      <el-table :data="mobileData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
        <el-table-column prop="matchApplyCustName" label="命中号码姓名">
        </el-table-column>
        <el-table-column prop="applyTelTypeTxt" label="电话类型">
        </el-table-column>
        <el-table-column prop="matchApplySubNo" label="进件编号">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称">
        </el-table-column>
        <el-table-column prop="certCode" label="身份证号">
        </el-table-column>
        <el-table-column prop="matchApplyCustComName" label="进件单位">
        </el-table-column>
        <el-table-column prop="matchApplyStateTxt" label="业务状态">
        </el-table-column>
        <el-table-column prop="remark" width="200" fit="false" class="mark-cell" label="备注">
        </el-table-column>
      </el-table>
      <div class="block tool-bar">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="mobileData.length">
        </el-pagination>
      </div>
    </div>
    <div>
      <div class="title-bar">
        {{title2}}
      </div>
      <el-table :data="telData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
        <el-table-column prop="name" label="命中号码姓名">
        </el-table-column>
        <el-table-column prop="phoneType" label="电话类型">
        </el-table-column>
        <el-table-column prop="inNumber" label="进件编号">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称">
        </el-table-column>
        <el-table-column prop="idNumber" label="身份证号">
        </el-table-column>
        <el-table-column prop="inCompany" label="进件单位">
        </el-table-column>
        <el-table-column prop="busState" label="业务状态">
        </el-table-column>
        <el-table-column prop="mark" width="200" fit="false" class="mark-cell" label="备注">
        </el-table-column>
      </el-table>
      <div class="block tool-bar">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="telData.length">
        </el-pagination>
      </div>
    </div>
    <div>
      <div class="title-bar">
        {{title3}}
      </div>
      <el-table :data="workData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
        <el-table-column prop="name" label="命中号码姓名">
        </el-table-column>
        <el-table-column prop="phoneType" label="电话类型">
        </el-table-column>
        <el-table-column prop="inNumber" label="进件编号">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称">
        </el-table-column>
        <el-table-column prop="idNumber" label="身份证号">
        </el-table-column>
        <el-table-column prop="inCompany" label="进件单位">
        </el-table-column>
        <el-table-column prop="busState" label="业务状态">
        </el-table-column>
        <el-table-column prop="mark" width="200" fit="false" class="mark-cell" label="备注">
        </el-table-column>
      </el-table>
      <div class="block tool-bar">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="workData.length">
        </el-pagination>
      </div>
    </div>
    <internal-match-textarea></internal-match-textarea>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      title1: "移动号码类(手机号和联系人)|同事 1380013800 王五{{}}",
      title2: "固定电话类(家电、单电)|单位电话 888-88888888 诺远(住宅电话此项无)",
      title3: "单位名称|诺远 888-8888888",
      currentPage: 1,
      currentPageSize: 5,
      queryData: {
        pageParam: {
          pageNum: this.currentPage,
          pageSize: this.currentPageSize
        },
        applySubNo: '111'
      },
      mobileData: [],
      telData: [],
      workData: []
    };
  },
  created() {
    //   // 组件歘估计完成后获取数据
    //   // 此时 data 已经被 observed 了
    //   // 移动号码类匹配
    //   this.fetchData("internalMatch/getInternalMatchListByMobile");
    //   // 固定电话类匹配
    //   this.fetchData("internalMatch/getInternalMatchListByFixTel");
    //   // 单位名称类匹配
    //   // this.fetchData("internalMatch/getInternalMatchListByWorkName");

    this.fetchData();
  },
  methods: {
    fetchData(url) {
      // 请求数据 移动号码类匹配
      var queryData = {
        pageParam: {
          pageNum: this.currentPage,
          pageSize: this.currentPageSize
        },
        applySubNo: '111'
      };
      var queryData2 = {
        pageParam: {
          pageNum: this.currentPage,
          pageSize: this.currentPageSize
        },
        applySubNo: '111',
        workName:'阿里'
      };

      // 移动号码类
      this.post('internalMatch/getInternalMatchListByMobile',queryData).then(res => {
        this.mobileData = res.data.recordList;
      });
      // 固定电话类
      this.post('internalMatch/getInternalMatchListByFixTel', queryData).then(res => {
        this.telData = res.data.recordList;
      });
      // 单位名称类
      this.post('internalMatch/getInternalMatchListByWorkName',queryData2).then(res => {
        this.workData = res.data.recordList;
      })



      // axios.all([
      //   axios.post("internalMatch/getInternalMatchListByMobile"),
      //   axios.post("internalMatch/getInternalMatchListByFixTel"),
      //   axios.post("internalMatch/getInternalMatchListByWorkName"),
      // ]).then(axios.spread(function(mobileData, telData) {
      //   console.log(mobileData);
      //   this.mobileData = mobileData.data.recordList;
      //   console.log(telData);
      //   this.telData = mobileData.data.recordList;
      //   console.log(workData);
      // }));

    },
    itemDbclick(row, event) {
      // 行被双击 事件
      console.log('row dbclick');
      console.log(row.name);
    },
    cellHover(row, column, cell, event) {
      // cell hover 事件
      console.log(row);
      console.log(column);
      console.log(event);
      console.log(cell.innerText); // 备注
      console.log(column.label);
      // this.tableData[]

    },
    handleSizeChange(val) {
      console.log("每页 ${val}条", val);
    },
    handleCurrentChange(val) {
      console.log("当前页: ${val}", val);
    }
  },
  components: {


    "internal-match-textarea": {
      template: '\
            <el-form label-width="100px" class="demo-ruleForm">\
            <el-form-item label="活动形式" class="mark-title">\
            </el-form-item>\
            <el-input type="textarea" v-model="ruleForm.desc" class="mark-textarea" resize="none" :rows="5"></el-input>\
            <el-form-item class="mark-button">\
                <el-button type="primary" @click="submitForm()">确认</el-button>\
            </el-form-item>\
            </el-form>\
            ',
      data() {
        return {
          mark: "",
          ruleForm: {
            type: []
          }
        };
      },
      methods: {
        submitForm: function() {
          console.log('click button')
        }
      }
    }
  }
};

</script>
<style lang="css">
/* 表头 */

.title-bar {
  width: 100%;
  height: 50px;
  line-height: 50px;
}







/* 分页 */

.tool-bar {
  width: 100%;
  text-align: center;
  padding: 10px 0 0 10px;
}







/* 匹配结论 */

.mark-title {
  width: 100%;
  margin: 0;
}

.mark-title label {
  text-align: left;
}

.mark-textarea {
  margin: 10px;
  width: 98.5%;
}

.mark-textarea textarea {
  min-height: 100px;
  max-height: 100px;
}







/* 确认按钮 */

.mark-button {
  text-align: right;
  margin-right: 0px;
  margin-top: 20px;
}







/* 行高 */

thead tr {
  height: 40px;
}







/* 表头 header 颜色 */

.el-table thead tr {
  background-color: #f5f7fa;
}







/* 备注 width*/

.mark-cell {
  overflow: hidden;
  overflow-wrap: break-word;
}

</style>
