// 系统管理-用户管理
<template>
  <div class="userManage">
    <!-- <my-head></my-head> -->
    <div class="keywordContainer">
      <el-row class="row row1"  type="flex">
        <el-col :span="8" :offset="0">
          <span class="keywordText">用户名称</span><el-input class="" v-model="userName" placeholder="请输入用户名称"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">用户编号</span><el-input class="" v-model="userCode" placeholder="请输入用户编号"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">证件号码</span><el-input class="" v-model="cerdCode" placeholder="请输入证件号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="8" :offset="0">
          <span class="keywordText">用户状态</span><el-select v-model="queryParams.userState" placeholder="请选择用户状态">
            <el-option
              v-for="item in userStates"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">所属机构</span><el-select v-model="queryParams.organ" placeholder="请选择所属机构">
            <el-option
              v-for="item in organs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">功能角色</span><el-select v-model="queryParams.functionalRole" placeholder="请选择功能角色">
            <p style="height: 34px;line-height: 34px;padding: 0 20px;font-size: 14px;background: #eee;">
              <span style="width:66px;display:inline-block;">角色编码</span><span style="margin-left: 20px">角色名称</span>
            </p>
            <el-option
              v-for="item in functionalRoles"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <span style="float: left;width:66px">{{ item.value }}</span>
              <span style="float: left; color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.label }}</span>
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row3" type="flex">
        <el-col :span="8" :offset="0">
          <span class="keywordText">流程角色</span><el-select v-model="queryParams.processRole" placeholder="请选择流程角色">
            <p style="height: 34px;line-height: 34px;padding: 0 20px;font-size: 14px;background: #eee;">
              <span style="width:66px;display:inline-block;">角色编码</span><span style="margin-left: 20px">角色名称</span>
            </p>
            <el-option
              v-for="item in functionalRoles"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <span style="float: left;width:66px">{{ item.value }}</span>
              <span style="float: left; color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.label }}</span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">联系电话</span><el-input v-model="mobile" placeholder="请输入联系电话"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button class="btn reset" type="primary">重置</el-button><el-button class="btn query" type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="title titleContainer">
      <span class="titleText">用户列表</span>
      <span class="iconContainer">
        <span class="icon-item">
          <i class="el-icon el-icon-circle-plus"></i><span class="el-icon-text">添加</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">授权功能角色</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">查看所拥资源</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">授权流程角色</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">授权数据角色</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">重置密码</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">休息</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">激活</span>
        </span>
        <span class="icon-item">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">注销</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table
        :data="userDatas"
        height="400"
        border
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名称"
          width="80">
        </el-table-column>
        <el-table-column
          prop="userCode"
          label="用户编号"
          width="110">
        </el-table-column>
        <el-table-column
          prop="cerdCode"
          label="证件号码"
          width="170">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="联系电话"
          width="110">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="50">
        </el-table-column>
        <el-table-column
          prop="orgName"
          label="所属机构"
          width="140">
        </el-table-column>
        <el-table-column
          prop="office"
          label="所属机构科室"
          width="110">
        </el-table-column>
        <el-table-column
          prop="orgCode"
          label="机构编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="post"
          label="岗位"
          width="120">
        </el-table-column>
        <el-table-column
          prop="functionalRole"
          label="功能角色"
          show-overflow-tooltip
          min-width="180">
        </el-table-column>
        <el-table-column
          prop="processRole"
          label="流程角色"
          show-overflow-tooltip
          min-width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="注册日期"
          width="100">
        </el-table-column>
        <el-table-column
          prop="userState"
          label="用户状态"
          width="80">
        </el-table-column>
        <el-table-column
          prop="flag"
          label="自动分单标示"
          width="110">
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="140">
          <template slot-scope="scope">
            <el-button class="btn-sm edit" @click="handleClick(scope.row)">编辑</el-button><el-button class="btn-sm check" type="primary">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 页码 -->
      <div class="page">
        <el-pagination
          @size-change="changePageSize"
          @current-change="changeCurrentPage"
          :current-page.sync="currentPage"
          :page-sizes= pageSizesArr
          :page-size= pageSizesArr[0]
          layout="total, sizes, prev, pager, next, jumper"
          :total=200>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import myHead from "@/view/header.vue";

export default {
  data() {
    return {
      userName: "",
      userCode: "",
      cerdCode: "",
      mobile: "",
      currentPage: 1, // 默认显示的当前页
      pageSizesArr: [20, 50, 80, 100], // 每页显示的数据数
      // 用户状态
      userStates: [
        { label: "正常", value: "01" },
        { label: "休息", value: "02" },
        { label: "注销", value: "03" }
      ],
      // 所属机构
      organs: [
        { label: "正常", value: "01" },
        { label: "休息", value: "02" },
        { label: "注销", value: "03" }
      ],
      // 功能角色
      functionalRoles: [
        { label: "进件客服", value: "AX01" },
        { label: "直销人员", value: "AX02" },
        { label: "团队经理", value: "AX03" },
        { label: "营业部副经理", value: "AX04" },
        { label: "营业部经理", value: "AX05" },
        { label: "城市经理", value: "AX06" },
        { label: "大区经理", value: "AX07" },
        { label: "销售总监", value: "AX08" },
        { label: "总部信销助理", value: "AX09" },
        { label: "分部人员管理", value: "AX10" },
        { label: "分部合规管理", value: "AX11" },
        { label: "车贷进件客服", value: "AX12" },
        { label: "门店评估师", value: "AX13" },
        { label: "车贷主管/经理", value: "AX14" },
        { label: "车贷门店管理", value: "AX15" },
        { label: "车贷总部管理", value: "AX16" },
        { label: "测试电销进件", value: "AX21" },
        { label: "电销经理", value: "AX22" },
        { label: "初审员", value: "BX01" },
        { label: "终审员", value: "BX02" },
        { label: "信审经理", value: "BX03" },
        { label: "信审高级经理", value: "BX04" },
        { label: "信审总监", value: "BX05" },
        { label: "数据员", value: "BX06" },
        { label: "合规初检质检员", value: "BX07" },
        { label: "初审主管", value: "BX08" },
        { label: "终审主管", value: "BX09" },
        { label: "合规经理", value: "BX10" },
        { label: "合规质检主管", value: "BX11" },
        { label: "合规终检质检员", value: "BX12" },
        { label: "反欺诈经理", value: "BX14" },
        { label: "反欺诈专员-初/中级", value: "BX15" },
        { label: "反欺诈专员-高级", value: "BX16" },
        { label: "反欺诈主管", value: "BX17" },
        { label: "车贷定价", value: "BX18" },
        { label: "车审终审员", value: "BX19" },
        { label: "初审拒绝", value: "BX20" },
        { label: "信贷系统管理员", value: "CSYSTEM" },
        { label: "信贷合同审核员", value: "CX01" },
        { label: "信贷结算审核员", value: "CX02" },
        { label: "信贷结算记账员", value: "CX03" },
        { label: "运营总监", value: "CX04" },
        { label: "结算总监", value: "CX05" },
        { label: "运营客服", value: "CX06" },
        { label: "财务专员", value: "CX07" },
        { label: "权证入库员", value: "CX08" },
        { label: "BOSS", value: "CX96" },
        { label: "匹配员", value: "CX98" },
        { label: "数据导出员", value: "DS99" },
        { label: "催收员", value: "DX01" },
        { label: "催收经理", value: "DX02" },
        { label: "催收高级经理", value: "DX03" },
        { label: "催收总监", value: "DX04" },
        { label: "贷中检查员", value: "DX05" },
        { label: "H5后台管理员", value: "DX15" },
        { label: "减免审批-H5", value: "DX16" },
        { label: "H5后台运营", value: "DX17" },
        { label: "退还服务费比例变更", value: "DX23" },
        { label: "线上减免申请撤销", value: "DX99" },
        { label: "系统管理员", value: "SYSTEM" },
        { label: "全权", value: "all" }
      ],
      // 流程角色
      processRoles: [
        { label: "正常", value: "01" },
        { label: "休息", value: "02" },
        { label: "注销", value: "03" }
      ],
      queryParams: {
        userState: "",
        organ: "",
        functionalRole: "",
        processRole: ""
      },

      // 用户列表数据
      userDatas: [
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "数据导出员",
          processRole: "终审二级,信审经理",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级,信贷运营总监,信贷展期审核员",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级,信贷运营总监,信贷展期审核员",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级,信贷运营总监,信贷展期审核员",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级,信贷运营总监,信贷展期审核员",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级,信贷运营总监,信贷展期审核员",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        },
        {
          userName: "诸葛很亮",
          userCode: "017304F009",
          cerdCode: "41272319900523357X",
          mobile: "13525896548",
          sex: "男",
          orgName: "呼和浩特信审一部",
          office: "反欺诈科室",
          orgCode: "02109",
          post: "车贷定价专员",
          functionalRole: "BOSS,数据导出员,退还服务费比例变更,线上减免申请撤销,系统管理员",
          processRole: "终审二级,信审经理,信审高级经理,反欺诈一级,信贷运营总监,信贷展期审核员",
          date: "2016-05-01",
          userState: "正常",
          flag: "是"
        }
      ],
      currentRow: null
    };
  },
  methods: {
    changePageSize(val) {
      this.queryParam.pageSize = val;
      this.queryParam.pageNum = 1;
      if (this.currentPage !== 1) {
        this.currentPage = 1;
      } else {
        this.getRoles(this.queryParam);
      }
    },
    changeCurrentPage(val) {
      this.queryParam.pageNum = val;
      this.getRoles(this.queryParam);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(this.currentRow);
    }
  },
  components: {
    myHead
  }
};
</script>

<style>
.userManage {
  padding: 15px 30px;
  background-color: #fafbfc;
}
.userManage .row {
  margin-bottom: 20px;
}
.userManage .row1 {
  margin-top: 21px;
}

.userManage .titleContainer {
  opacity: 0.75;
  background: #eef0f9;
  border-radius: 6px;
  width: 100%;
  height: 50px;
}
.userManage .titleText {
  font-size: 16px;
  color: #1f2d3d;
  letter-spacing: 0.11px;
  text-align: left;
  margin: 15px 25px 13px;
  display: inline-block;
  height: 22px;
  width: 130px;
  line-height: 22px;
  font-weight: bold;
}
.userManage .keywordContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 26px;
}
.userManage .keywordText {
  font-size: 14px;
  color: #475669;
  text-align: right;
  display: inline-block;
  width: 126px;
  height: 20px;
  margin-right: 10px;
}
.userManage .keywordContainer .el-input {
  width: 258px;
}
.userManage .keywordContainer .el-input__inner {
  border-radius: 6px;
  height: 35px;
  width: 258px;
}
.userManage .btn {
  height: 33px;
  border-radius: 8px;
  width: 79px;
  font-size: 14px;
  line-height: 33px;
  padding: 0;
}
.userManage .query {
  margin-left: 20px;
}
.userManage .reset {
  margin-left: 214px;
}

.userManage .listContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 40px;
  padding: 25px;
  width: 100%;
}
.userManage .el-table .cell {
  line-height: 23px;
}
.userManage .el-table {
  font-size: 13px;
}
.userManage .el-table__header-wrapper tr {
  height: 40px;
}
.userManage .el-table__body-wrapper tr {
  height: 35px;
}

.userManage .el-icon {
  font-size: 24px;
  color: #0077ff;
  margin-right: 6px;
  vertical-align: sub;
}
.userManage .el-icon-text {
  /* margin-right: 24px; */
  font-size: 14px;
  color: #1f2d3d;
}
.userManage .btn-sm {
  border-radius: 3px;
  width: 44px;
  height: 24px;
  font-size: 12px;
  padding: 0;
}

.userManage .page {
  text-align: center;
  margin-top: 20px;
}

.userManage .iconContainer {
  float: right;
  line-height: 50px;
  margin-right: 29px;
}
.userManage .icon-item {
  cursor: pointer;
  margin-right: 14px;
  float: left;
}

.userManage .el-textarea {
  width: 90%;
}
.userManage .el-form-item {
  margin-bottom: 0;
}
</style>