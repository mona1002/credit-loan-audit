<template>
  <div class="taskWatting main-div">
    <!-- 直销人员查询 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">用户名称： </span>
          <el-input v-model.trim="params.userName" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">用户编号：</span>
          <el-input v-model.trim="params.userCode" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">手机号码：</span>
          <el-input v-model.trim="params.tel" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">用户状态：</span>
          <el-select v-model="params.validFlag" placeholder="请选择">
            <el-option v-for="item in Status" :key='item.value' :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <!-- <span class="keywordText">所属机构：</span>
          <el-select v-model="params.orgName" placeholder="请选择">
            <el-option v-for="item in orgnize" :key='item.value' :label="item.label" :value="item.value">
            </el-option>
          </el-select> -->
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="Rsearch">查询</el-button>
          <el-button class="btn reset" @click="Rreset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        直销人员列表
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column type="index" label=序号 width="55">
        </el-table-column>
        <el-table-column prop="userName" label="用户名称" width="140">
        </el-table-column>
        <el-table-column prop="userCode" label="用户编号" width="140">
        </el-table-column>
        <el-table-column prop="sexTxt" label="性别" width="80">
        </el-table-column>
        <el-table-column prop="tel" label="手机号码" width="160">
        </el-table-column>
        <el-table-column prop="orgName" label="所属机构" min-width="150">
        </el-table-column>
        <el-table-column prop="subOrgName" label="所属科室" min-width="140">
        </el-table-column>
        <el-table-column prop="registerDate" label="注册日期" width="160">
        </el-table-column>
        <el-table-column prop="logoutDate" label="注销日期" width="160">
        </el-table-column>
        <el-table-column prop="validFlagTxt" label="用户状态" width="80">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [],
        params: {
          userName: '',
          userCode: '',
          tel: '',
          validFlag: '',
          orgName: '',
        },
        // orgnize: [],
        Status: [{
            label: '正常',
            value: '0'
          },
          {
            label: '休息',
            value: '1'
          }, {
            label: '注销',
            value: '2'
          }
        ]
      }
    },
    methods: {
      Rreset() {
        this.params.userName = '';
        this.params.userCode = '';
        this.params.tel = '';
        this.params.validFlag = '';
        this.params.orgName = '';
      },
      Rsearch() {
        if (this.params.userCode != '' || this.params.userName != '' || this.params.tel != '' || this.params.validFlag !=
          '') {
          this.inquire(this.params);
        } else {
          this.$message.error('请输入查询条件')
        }
      },
      inquire(pam) {
        // 基础接口-综合查询
        this.post("/credit/filteredSalePer", pam).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.tableData = [];
            this.$message.error(res.msg);
          }
        })
      },
    },
  }

</script>
