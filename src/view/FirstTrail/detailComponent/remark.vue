<!-- 备注信息 -->
<template>
  <div class="remark">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">备注信息</span>
          <div class="title_icon" v-if='btnShow'>
            <span @click.stop="add">
              <i class="title_icon_img addIcon"></i>
              <span class="title_icon_span">添加</span>
            </span>
            <span @click.stop="change">
              <i class="title_icon_img editIcon"></i>
              <span class="title_icon_span">修改</span>
            </span>
            <span @click.stop="delet">
              <i class="title_icon_img deleteIcon"></i>
              <span class="title_icon_span">删除</span>
            </span>
          </div>
        </template>
        <div class="taskWtable">
          <el-table :data="tableData" height="710" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}"
            show-header highlight-current-row @current-change="handleCurrentChange" border>
            <el-table-column type="index" :index='1' label="序号" width="50">
            </el-table-column>
            <el-table-column prop="remarkTypeTxt" label="备注类型" width="90">
            </el-table-column>
            <el-table-column prop="remarker" label="备注人" width="100">
            </el-table-column>
            <el-table-column prop="remarkTime" label="备注时间" width="150" sortable>
            </el-table-column>
            <el-table-column prop="riskTipTxt" label="风险提示" width="130">
            </el-table-column>
            <el-table-column prop="remark" label="备注" show-overflow-tooltip min-width="90">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 添加弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="请输入您要添加的备注信息" :visible.sync="dialogVisible" width='600px' :modal="false ">
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
      <el-dialog title="请输入您要修改的备注信息" :visible.sync="chdialogVisible" width='600px' :modal="false ">
        <el-form :model="FormEdit" :rules="rules" ref="FormEdit">
          <div class="dialog_textarea ">
            <el-form-item label="备注：" label-width="50px" prop="changeRemarks">
              <el-input type="textarea" :rows="7" placeholder="最多600字" v-model="FormEdit.changeRemarks" :maxlength="600"
                resize="none">
              </el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" :loading='changeLoading' @click="changeSure('FormEdit')"> {{chSure}}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1'],
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
        userInf: '',
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
        title: '',
      }
    },
    props: {
      applyId: {
        default: '',
        type: String,
        required: true
      },
      btnShow: {
        default: false,
        type: Boolean
      }
    },
    mounted() {
      //一进入页面就发送请求
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if(this.judgeFlag ){//初审03，终审04
        this.judgeFlag.flag == '01' ? this.remarkType = '03' :'';
        this.judgeFlag.flag == '02' ? this.remarkType = '04' :'';
      }
      //获取当前登陆人的用户名
      this.remarker = JSON.parse(localStorage.getItem('userInf')).userCode;
      this.request();
    },
    methods: {
      request() {
        this.post("/applyRemark/getApplyRemarkList", {
          'applyId': this.applyId
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.tableData = [];
            this._error(res.msg)
          }
        });
      },
      add() {
        this.dialogVisible = true;
        this.FormAdd.remark = '';
        this.addSure = '确定';
        this.addLodaing = false;
      },
      change() {
        this.changeLoading = false;
        this.chSure = '确定';
        if (this.isChecked == '') {
          this.title = '请选择一条记录！';
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
        this.isChecked == ''?  this.title = '请选择一条记录！': this.title = '您要删除该备注吗？';
        this.promptSure();
      },
      deletCancle() {
        this.dedialogVisible = false;
      },
      sure(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible = false;
            this.addLodaing = true;
            this.addSure = '执行中';
            this.post('/applyRemark/addApplyRemark', {
                applyId: this.applyId,
                remarkType: this.remarkType,
                remark: this.FormAdd.remark,
                remarker: this.remarker
              })
              .then(res => {
                this.addSure = "确定";
                if (res.statusCode == 200) {
                  this.request();
                  this._succe('保存成功！')
                } else {
                  this._error('保存失败！')
                }
              });
          } else {
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
              this._succe('修改成功！')
              this.request();
            } else {
              this._error('修改失败！')
            }
          });
      },
      promptSure() {
        this.$confirm(this.title, '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.title == '您要删除该备注吗？' ? this.deletSure() : '';
        }).catch(() => {});
      },
      deletSure() {
        this.post("/applyRemark/deleteApplyRemark", {
          id: this.isChecked
        }).then(res => {
          if (res.statusCode == 200) {
            this.request();
            this._succe('删除成功！')
          } else {
            this._error('删除失败！')
          }
        });
      },
      handleCurrentChange(val) {
        val == null? this.isChecked = '': this.isChecked = val.id;
      },
    },
  }

</script>
