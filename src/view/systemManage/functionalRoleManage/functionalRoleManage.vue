// 系统管理-功能角色管理
<template>
  <div class="functionalRoleManage">
    <!-- <my-head></my-head> -->

    <!-- 关键字查询 -->
    <!-- <div class="title titleContainer"><span class="titleText">高级查询</span></div> -->
    <div class="keywordContainer">
      <el-row class="row row1"  type="flex">
        <el-col :span="8" :offset="0">
          <span class="keywordText">角色名称</span><el-input class="" v-model="roleName" placeholder="请输入角色名称"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">角色编号</span><el-input class="" v-model="roleCode" placeholder="请输入角色编号"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button class="btn reset" @click="reset">重置</el-button><el-button class="btn query" type="primary" @click="getRolesByKey">查询</el-button>
        </el-col>
        <!-- <el-col :span="8">
          <span class="keywordText">资源名称</span><el-input class="" v-model="resourceName" placeholder="请输入资源名称"></el-input>
        </el-col> -->
      </el-row>
    </div>

    <!-- 列表 -->
    <div class="title titleContainer">
      <span class="titleText">角色列表</span>
      <span class="iconContainer">
        <span class="icon-item" @click="dialogAddVisible = true;">
          <i class="el-icon el-icon-circle-plus"></i><span class="el-icon-text">添加</span>
        </span>
        <span class="icon-item" @click="handleItem('auth')">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">授权</span>
        </span>
        <span class="icon-item" @click="handleItem('stop')">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">停用</span>
        </span>
        <span class="icon-item" @click="handleItem('enable')">
          <i class="el-icon el-icon-edit-outline"></i><span class="el-icon-text">启用</span>
        </span>
      </span>
    </div>

    <div class="listContainer">
      <el-table
        :data="roleDatas"
        height="400"
        border
        show-header
        highlight-current-row
        @row-click="selectRow">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="roleCode"
          label="角色编码"
          width="120">
        </el-table-column>
        <el-table-column
          prop="roleName"
          label="角色名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="resNameList"
          label="拥有资源"
          show-overflow-tooltip
          min-width="450">
        </el-table-column>
        <el-table-column
          prop="roleRemark"
          label="备注"
          width="275">
        </el-table-column>
        <el-table-column
          prop="validFlagTxt"
          label="状态"
          width="80">
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="140">
          <template slot-scope="scope">
            <el-button class="btn-sm edit" @click="getItem('edit',scope.row)">编辑</el-button><el-button class="btn-sm check" type="primary" @click="getItem('check',scope.row)">查看</el-button>
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
          :page-size= setPageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total=responseDatas.totalRecord>
        </el-pagination>
      </div>
    </div>



    <!-- 添加角色框 -->
    <el-dialog title="添加角色" :visible.sync="dialogAddVisible">
      <el-form :model="newItem">
        <el-form-item label="角色名称：" :label-width="formLabelWidth">
          <el-input v-model="newItem.roleName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色编号：" :label-width="formLabelWidth">
          <el-input v-model="newItem.roleCode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序：" :label-width="formLabelWidth">
          <el-input type="number" v-model="newItem.roleSeq" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" v-model="newItem.roleRemark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRole">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑框 -->
    <el-dialog title="编辑角色" :visible.sync="dialogEditVisible">
      <el-form :model="itemOfLists">
        <el-form-item label="角色名称：" :label-width="formLabelWidth">
          <el-input v-model="itemOfLists.roleName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色编号：" :label-width="formLabelWidth">
          <el-input v-model="itemOfLists.roleCode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序：" :label-width="formLabelWidth">
          <el-input type="number" v-model="itemOfLists.roleSeq" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" v-model="itemOfLists.roleRemark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitEditedItem">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 查看框 -->
    <el-dialog title="角色信息" :visible.sync="dialogCheckVisible">
      <el-form :model="itemOfLists">
        <el-form-item label="角色名称：" :label-width="formLabelWidth">
          <el-input v-model="itemOfLists.roleName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色编号：" :label-width="formLabelWidth">
          <el-input v-model="itemOfLists.roleCode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序：" :label-width="formLabelWidth">
          <el-input type="number" v-model="itemOfLists.roleSeq" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" v-model="itemOfLists.roleRemark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCheckVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogCheckVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 授权框 -->
    <el-dialog title="角色授权" :visible.sync="dialogAuthVisible">
      <span>确定授权？</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAuthVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAuthVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 停用 -->
    <el-dialog title="询问" :visible.sync="dialogStopVisible" width="30%" :before-close="handleClose">
      <span>确定操作？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogStopVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateValidFlag('0')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 启用 -->
    <el-dialog title="询问" :visible.sync="dialogEnableVisible" width="30%" :before-close="handleClose">
      <span>确定操作？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogEnableVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateValidFlag('1')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 未选中提示 -->
    <el-dialog title="提示" :visible.sync="dialogAlertVisible" width="30%" :before-close="handleClose">
      <span>请选中要操作的记录！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAlertVisible = false">确定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import myHead from "@/view/header.vue";
import systemManageHttp from "../systemMange_ser";

export default {
  data() {
    return {
      roleName: "",
      roleCode: "",
      resourceName: "",

      responseDatas: {}, // 角色列表请求的返回值
      roleDatas: [], // 角色列表数组

      currentRow: {}, // 当前选中的那一行数据
      newItem: {}, // 添加一行数据

      itemOfLists: {}, // 编辑、查看、授权某一条数据前，根据 id 查询其详细数据

      currentPage: 1, // 默认显示的当前页
      pageSizesArr: [20, 50, 80, 100], // 每页显示的数据数
      setPageSize: 20,

      queryParam: {
        // 查询角色的入参
        roleCode: "",
        roleName: "",
        roleName_la: "",
        pageNum: 1,
        pageSize: 20,
        orders: null
      },

      dialogAddVisible: false,
      dialogAuthVisible: false,
      dialogStopVisible: false,
      dialogEnableVisible: false,
      dialogEditVisible: false,
      dialogCheckVisible: false,
      dialogAlertVisible: false,

      formLabelWidth: "120px"
    };
  },

  mounted() {
    this.getRolesAll();
  },

  methods: {
    //请求数据接口
    getRoles(param) {
      systemManageHttp
        .getRoles(this.queryParam)
        .then(res => {
          this.responseDatas = res.data.data;
          this.roleDatas = this.responseDatas.recordList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 根据 id 查询角色
    getRoleById(id) {
      systemManageHttp
        .getRoleById({ params: { roleId: id } })
        .then(res => {
          this.itemOfLists = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 请求全部数据
    getRolesAll() {
      this.queryParam.roleCode = "";
      this.queryParam.roleName_la = "";
      this.queryParam.pageNum = 1;
      this.queryParam.pageSize = 20;
      this.queryParam.orders = null;
      (this.setPageSize = 20), (this.currentPage = 1);
      this.getRoles(this.queryParam);
    },
    // 查询按钮
    getRolesByKey() {
      this.queryParam.roleCode = this.roleCode;
      this.queryParam.roleName_la = this.roleName;
      this.getRoles(this.queryParam);
    },
    // 重置按钮
    reset() {
      this.roleCode = "";
      this.roleName = "";
      this.getRolesAll();
    },
    // 每页条数变化时，重新请求
    changePageSize(val) {
      this.queryParam.pageSize = val;
      this.queryParam.pageNum = 1;
      if (this.currentPage !== 1 || this.setPageSize !== 20) {
        this.currentPage = 1;
        this.setPageSize = 20;
      } else {
        this.getRoles(this.queryParam);
      }
    },
    // 改变页码时，重新请求
    changeCurrentPage(val) {
      this.queryParam.pageNum = val;
      this.getRoles(this.queryParam);
    },

    // 查看或编辑条目
    getItem(flag, item) {
      console.log(item);
      if (flag === "edit") {
        this.dialogEditVisible = true;
      } else {
        this.dialogCheckVisible = true;
      }
      this.getRoleById(item.id);
    },
    // 提交编辑过的条目
    commitEditedItem() {
      systemManageHttp
        .updateRole(this.itemOfLists)
        .then(res => {
          console.log(res.data.statusCode);
          if (res.data.statusCode === 200) {
            this.getRoles(this.queryParam);
          }
        })
        .catch(err => {
          console.log(err);
        });
      this.dialogEditVisible = false;
    },

    // 授权、启用、停用
    handleItem(flag) {
      console.log(this.currentRow);
      if (!this.currentRow) {
        this.dialogAlertVisible = true;
        return;
      }
      if (flag === "auth") {
        this.dialogAuthVisible = true;
      } else if (flag === "stop") {
        this.dialogStopVisible = true;
      } else if (flag === "enable") {
        this.dialogEnableVisible = true;
      }
    },

    // 选中某一行
    selectRow(row, event, column) {
      console.log(row);
      this.currentRow = row;
    },

    // 启用停用角色
    updateValidFlag(flag) {
      systemManageHttp
        .updateValidFlag({
          params: {
            roleId: this.currentRow.id,
            validFlag: flag
          }
        })
        .then(res => {
          console.log(res.data.msg);
          this.currentRow = null;
          this.getRoles(this.queryParam);
        });
      if (flag === "0") {
        this.dialogStopVisible = false;
      } else {
        this.dialogEnableVisible = false;
      }
    },

    // 新增角色
    addRole() {
      systemManageHttp
        .addRole({
          roleCode: this.newItem.roleCode,
          roleName: this.newItem.roleName,
          roleRemark: this.newItem.roleRemark,
          // pid: "",
          roleSeq: this.newItem.roleSeq
          // validFlag: "",
          // modelFlag: ""
        })
        .then(res => {
          console.log(res.data);
          if (res.data.statusCode === 200) {
            this.newItem = {};
            this.getRoles(this.queryParam);
          }
        });
      this.dialogAddVisible = false;
    },

    // 授权角色
    grantRes() {
      systemManageHttp.grantRes({
        roleId: this.currentRow.roleId,
        reslds: this.resourceName
      }).then(res => {
        console.log(res.data);
      });
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },

  components: {
    myHead
  }
};
</script>

<style>
.functionalRoleManage {
  padding: 15px 30px;
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
}
.functionalRoleManage .row {
  margin-bottom: 20px;
}
.functionalRoleManage .row1 {
  margin-top: 21px;
}

.functionalRoleManage .titleContainer {
  opacity: 0.75;
  background: #eef0f9;
  border-radius: 6px;
  width: 100%;
  height: 50px;
}
.functionalRoleManage .titleText {
  font-size: 16px;
  color: #1f2d3d;
  text-align: left;
  margin: 15px 25px 13px;
  display: inline-block;
  height: 22px;
  width: 130px;
  line-height: 22px;
  font-weight: bold;
}
.functionalRoleManage .keywordContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 26px;
}
.functionalRoleManage .keywordText {
  font-size: 14px;
  color: #475669;
  text-align: right;
  display: inline-block;
  width: 126px;
  height: 20px;
  margin-right: 10px;
}
.functionalRoleManage .keywordContainer .el-input__inner {
  border-radius: 6px;
  height: 35px;
  width: 258px;
}
.functionalRoleManage .btn {
  height: 33px;
  border-radius: 8px;
  width: 79px;
  font-size: 14px;
  line-height: 33px;
  padding: 0;
}
.functionalRoleManage .query {
  margin-left: 20px;
}
.functionalRoleManage .reset {
  margin-left: 214px;
}

.functionalRoleManage .listContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 40px;
  padding: 25px;
  width: 100%;
}
.functionalRoleManage .el-table .cell {
  line-height: 23px;
}
.functionalRoleManage .el-table {
  font-size: 13px;
}
.functionalRoleManage .el-table__header-wrapper tr {
  height: 40px;
}
.functionalRoleManage .el-table__body-wrapper tr {
  height: 35px;
}

.functionalRoleManage .el-icon {
  font-size: 24px;
  color: #0077ff;
  margin-right: 6px;
  vertical-align: sub;
}
.functionalRoleManage .el-icon-text {
  font-size: 14px;
  color: #1f2d3d;
}

.functionalRoleManage .btn-sm {
  border-radius: 3px;
  width: 44px;
  height: 24px;
  font-size: 12px;
  padding: 0;
}

.functionalRoleManage .page {
  text-align: center;
  margin-top: 20px;
}

.functionalRoleManage .iconContainer {
  float: right;
  line-height: 50px;
  margin-right: 29px;
}
.functionalRoleManage .icon-item {
  cursor: pointer;
  margin-right: 14px;
  float: left;
}

.functionalRoleManage .el-textarea {
  width: 90%;
}
.functionalRoleManage .el-form-item {
  margin-bottom: 10px;
}

/* 样式冲突的解决 */
.functionalRoleManage .el-button{
  padding: 0;
}
.functionalRoleManage .el-input{
  width: initial;
}
</style>