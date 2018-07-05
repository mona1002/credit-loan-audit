<!-- 备注信息 -->
<template>
  <div class="remark">
    <div class="remarkHead">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="titleText">备注信息</span>
      <span class="iconContainer">
        <span class="icon-item" @click="add">
          <img src="../../../../static/images/add.png" class="icon">
          <span class="span-text">添加</span>
        </span>
        <span class="icon-item" @click="change">
          <img src="../../../../static/images/change.png" class="icon">
          <span class="span-text">修改</span>
        </span>
        <span class="icon-item" @click="delet">
          <img src="../../../../static/images/delete.png" class="icon">
          <span class="span-text">删除</span>
        </span>
      </span>
    </div>
    <div class="taskWtable">
      <el-table :data="tableData" height="710" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" show-header
        highlight-current-row @current-change="handleCurrentChange" border>
        <!-- order两个参数，顺序和倒序: ascending, descending -->
        <!-- @row-click="addHeight(backColor)" :class="{active: activeName == backColor}" -->
        <el-table-column type="index" :index='1' label="序号" min-width="50">
        </el-table-column>
        <el-table-column prop="remarkTypeTxt" label="备注类型" min-width="90">
        </el-table-column>
        <el-table-column prop="remarker" label="备注人" min-width="130">
        </el-table-column>
        <el-table-column prop="remarkTime" label="备注时间" min-width="150" sortable>
        </el-table-column>
        <el-table-column prop="remark" label="备注" show-overflow-tooltip min-width="580">
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="请输入您要添加的备注信息" :visible.sync="dialogVisible" :modal="false ">
        <el-form :model="FormAdd" :rules="rules" ref="FormAdd">
          <div class="dialog_textarea ">
            <el-form-item label="备注：" label-width="50px" prop="remark">
              <el-input type="textarea" :rows="7" placeholder="最多600字" v-model="FormAdd.remark" resize="none">
              </el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" :loading=addLodaing @click="sure('FormAdd')"> {{addSure}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 修改弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="请输入您要修改的备注信息" :visible.sync="chdialogVisible" :modal="false ">
        <el-form :model="FormEdit" :rules="rules" ref="FormEdit">
          <div class="dialog_textarea ">
            <el-form-item label="备注：" label-width="50px" prop="changeRemarks">
              <el-input type="textarea" :rows="7" placeholder="最多600字" v-model="FormEdit.changeRemarks" :maxlength="600" resize="none">
              </el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" :loading=changeLoading @click="changeSure('FormEdit')"> {{chSure}}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        ok: false,
        FormAdd: {
          remark: ''
        },
        FormEdit: {
          changeRemarks: ''
        },
        rules: {
          remark: [{
            min: 0,
            max: 600,
            message: '输入长度不能超过600',
            trigger: 'blur'
          }],
          changeRemarks: [{
            min: 0,
            max: 600,
            message: '输入长度不能超过600',
            trigger: 'blur'
          }],
        },
        tableData: [],
        remarkType: '',
        remarker: '',
        remarkTime: '',
        remark: '',
        changeLayer: false,
        promptLayer: false,
        k: 0,
        isChecked: '',
        changeRemark: '',
        changeRemarks: '',
        deletLayer: false,
        taskInWaitting: '',
        applyId: '',
        userInf: '',
        remarker: '',
        remarkType: '',
        //添加的弹层
        dialogVisible: false,
        //是否有数据的弹层
        isdialogVisible: false,
        //修改弹层
        chdialogVisible: false,
        //删除弹层
        dedialogVisible: false,
        //根据judgeFlag判断是初审还是终审
        judgeFlag: '',
        addLodaing: false,
        addSure: '确定',
        changeLoading: false,
		chSure: '确定',
		title:'',
      }
    },
    mounted() {
      //一进入页面就发送请求
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting')); // 初审
        this.applyId = this.taskInWaitting.applyId;
        this.remarkType = '03';
      } else if (this.judgeFlag.flag == '02') {
        this.taskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting')); // 终审
        this.applyId = this.taskInWaitting.applyId;
        this.remarkType = '04';
      }
      //获取当前登陆人的用户名
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.remarker = this.userInf.userCode;
      this.request(this.taskInWaitting.applyId);
    },
    methods: {
      request(param) {
        this.post("/applyRemark/getApplyRemarkList", {
          'applyId': param
        }).then(res => {
          this.tableData = res.data;
        });
      },
      add() {
        this.dialogVisible = true;
        // this.remark = '';
        this.FormAdd.remark = '';
        this.addSure = '确定';
        this.addLodaing = false;
      },
      change() {



        this.changeLoading = false;
        this.chSure = '确定';
        if (this.isChecked == '') {
		//   this.isdialogVisible = true;
		  this.title='请选择一条记录！';
		  this.promptSure();
        } else {
          this.FormEdit.changeRemarks = '';
          this.chdialogVisible = true;
          for (var i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].id == this.isChecked) {
              this.FormEdit.changeRemarks = this.tableData[i].remark;
            }
          }
        }
      },
      delet() {
        if (this.isChecked == '') {
			this.title='请选择一条记录！';
			 this.promptSure();
        } else {
		  this.title='您要删除该备注吗？';
		   this.promptSure();
        }
      },
      deletCancle() {
        this.dedialogVisible = false;
      },
      sure(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible = false;
            this.post('/applyRemark/addApplyRemark', {
                applyId: this.applyId,
                remarkType: this.remarkType,
                remark: this.FormAdd.remark,
                remarker: this.remarker
              })
              .then(res => {
                this.addSure = "确定";
                if (res.statusCode == 200) {
                  this.request(this.applyId);
                  this.$message({
                    message: "保存成功！",
                    type: 'success'
                  })
                } else {
                  this.$message({
                    message: "保存失败！",
                    type: 'error'
                  })

                }
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeSure() {
        this.changeLoading = true;
        this.chSure = '修改中';
        this.chdialogVisible = false;
        this.post('/applyRemark/modifyApplyRemark', {
            id: this.isChecked,
            remark: this.FormEdit.changeRemarks
          })
          .then(res => {
            if (res.statusCode == 200) {
              this.request(this.applyId);
              this.$message({
                message: "修改成功！",
                type: 'success'
              })
            } else {
              this.$message({
                message: "修改失败！",
                type: 'error'
              })
            }
          });
      },
      promptSure() {
		         this.$confirm(this.title, '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showCancelButton: false
            }).then(() => {
			this.title=='您要删除该备注吗？'?	this.deletSure():'';
			}).catch(() => {});
      },
      deletSure() {
        this.post("/applyRemark/deleteApplyRemark", {
          id: this.isChecked
        }).then(res => {
          if (res.statusCode == 200) {
            this.request(this.applyId);
            this.$message({
              message: "删除成功",
              type: 'success'
            })
          } else {
            this.$message({
              message: "删除失败",
              type: 'error'
            })
          }
        });
      },
      handleCurrentChange(val) {
        if (val == null) {
          this.isChecked = '';
        } else {
          this.isChecked = val.id;
        }
      },
    },
  }

</script>
<style type="text/css" scoped>
  .remark {
    width: 100%;
    height: 100%;
    background-color: #fafbfc;
    min-width: 1258px;
  }

  /* 备注信息 */

  .remark .remarkHead {
    opacity: 0.75;
    background: #ebedf8;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .remark .remarkHead .titleText {
    font-size: 16px;
    color: #1f2d3d;
    display: inline-block;
    font-weight: 400;
  }

  .remark .remarkHead .iconContainer {
    float: right;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin-right: 29px;
  }

  .remark .remarkHead .icon-item {
    cursor: pointer;
    display: inline-block;
    height: 40px;
    margin-right: 14px;
    float: left;
  }

  .remark .remarkHead .icon {
    font-size: 30px;
    padding-top: 5px;
    float: left;
  }

  .remark .remarkHead .span-text {
    font-size: 15px;
    color: #1f2d3d;
    float: left;
    padding-left: 10px;
  }

  /* 表格头部 */

  .taskWtable .el-table__header-wrapper {
    width: 100%;
  }

  /* 添加的弹层 */

  .addLog .addBody {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .addLog .addBody label {
    height: 208px;
    line-height: 208px;
    padding: 0 10px;
    font-size: 14px;
    float: left;
  }

  .addLog .addBody div {
    width: 90%;
    height: 200px;
    margin-top: 26px;
    float: left;
  }

  .addLog .addBody textarea {
    width: 100%;
    height: 100%;
  }

  .addLog .addBody span {
    position: absolute;
    left: 66px;
    top: 5px;
    font-size: 12px;
    color: #ff7676;
    display: inline-block;
    height: 17px;
    line-height: 17px;
  }

  .addLog .addBody span i {
    padding-right: 2px;
    font-style: normal;
  }

  .changeLog .changeBody {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .changeLog .changeBody label {
    height: 208px;
    line-height: 208px;
    padding: 0 10px;
    font-size: 14px;
    float: left;
  }

  .changeLog .changeBody div {
    width: 90%;
    height: 200px;
    margin-top: 26px;
    float: left;
  }

  .changeLog .changeBody textarea {
    width: 100%;
    height: 100%;
  }

  .changeLog .changeBody span {
    position: absolute;
    left: 66px;
    top: 5px;
    font-size: 12px;
    color: #ff7676;
    display: inline-block;
    height: 17px;
    line-height: 17px;
  }

  .changeLog .changeBody span i {
    padding-right: 2px;
    font-style: normal;
  }


  /* 折叠面板头部背景色 */

  .icon_hat {
    padding: 9px 10px 10px 13px;
    vertical-align: middle;
  }

  .headFont {
    font-size: 16px;
  }

</style>
