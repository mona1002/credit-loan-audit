// 系统管理-资源管理
<template>
  <div class="resourceManage"  @click="getDropDownSelect">
    <div class="listContainer" v-if="resDatas.length">
      <div>
        <span class="icon-item" @click="dialogAddVisible = true">
          <i class="el-icon el-icon-circle-plus"></i><span class="el-icon-text">添加</span>
        </span>
      </div>
      <div style="border-radius:4px; border:1px solid #e6eaee;">
        <div class="titleContainer">
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span style="width:170px;text-indent:2em">资源名称</span>
            <span style="flex: 1; display: flex; align-items: center;justify-content: flex-end">
              <span style="width:120px;text-indent:3em;">资源编号</span>
              <span style="width:160px;text-align:center">上级资源</span>
              <span style="flex: 1; display: flex; align-items: center;justify-content: flex-end">
                <span style="flex: 1; display: flex; align-items: center;justify-content: center">
                  <span class="resUrl">资源路径</span>
                </span>
                <span style="width:100px;text-align:center">资源类型</span>
                <span style="width:100px;text-align:center">资源次序</span>
              </span>
            </span>
            <span style="width:100px;text-align:center">操作</span>
          </span>
        </div>

        <el-tree
          :data="resDatas"
          node-key="id"
          :indent=16
          :props="defaultProps"
          :expand-on-click-node= false
          @node-click="getItem"
          :render-content="renderContent">
        </el-tree>
      </div>
    </div>

    <!-- 添加 -->
    <el-dialog title="添加资源" :visible.sync="dialogAddVisible">
      <el-form>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源名称：" :label-width="formLabelWidth">
            <el-input v-model="newItem.resName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="资源编号：" :label-width="formLabelWidth">
            <el-input v-model="newItem.resCode" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item class="dialogResUrl" label="资源路径：" :label-width="formLabelWidth">
          <el-input v-model="newItem.resUrl" auto-complete="off"></el-input>
        </el-form-item>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源类型：" :label-width="formLabelWidth">
            <!-- <el-input v-model="newItem.resType" auto-complete="off"></el-input> -->
            <el-select v-model="newItem.resType" placeholder="">
              <el-option
                v-for="item in resTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="superRes" label="上级资源：" :label-width="formLabelWidth">
            <div class="dropdown">
                <span class="dropdownInput" v-bind:title=resName>{{resName}}</span>
                <!-- <span style="float:rigth;"> -->
                <!-- <i class="el-select__caret el-input__icon el-icon-arrow-up is-reverse"></i> -->
                <!-- </span> -->
                <div class="dropList" v-show="dropdownFlag">
                  <el-tree
                    v-if="resDatas.length"
                    :data="resDatas"
                    node-key="id"
                    :props="defaultProps"
                    :expand-on-click-node= false
                    @node-click="getItemSelect">
                  </el-tree>
                </div>
            </div>
          </el-form-item>
        </div>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源图标：" :label-width="formLabelWidth">
            <el-input v-model="newItem.resIcon" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="资源次序：" :label-width="formLabelWidth">
            <el-input type="number" v-model="newItem.resSeq" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="资源描述：" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" v-model="newItem.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitAddItem">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑框 -->
    <el-dialog title="编辑资源" :visible.sync="dialogEditVisible">
      <el-form>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源名称：" :label-width="formLabelWidth">
            <el-input v-model="itemOfLists.resName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="资源编号：" :label-width="formLabelWidth">
            <el-input v-model="itemOfLists.resCode" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item class="dialogResUrl" label="资源路径：" :label-width="formLabelWidth">
          <el-input v-model="itemOfLists.resUrl" auto-complete="off"></el-input>
        </el-form-item>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源类型：" :label-width="formLabelWidth">
            <!-- <el-input v-model="itemOfLists.resType" auto-complete="off"></el-input> -->
            <el-select v-model="itemOfLists.resType" placeholder="请选择">
              <el-option
                v-for="item in resTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="superRes" label="上级资源：" :label-width="formLabelWidth">
            <div class="dropdown">
                <span class="dropdownInput" v-bind:title=resNameEdit>{{resNameEdit}}</span>
                <!-- <span style="float:rigth;"> -->
                <!-- <i class="el-select__caret el-input__icon el-icon-arrow-up is-reverse"></i> -->
                <!-- </span> -->
                <div class="dropList" v-show="dropdownFlag">
                  <el-tree
                    v-if="resDatas.length"
                    :data="resDatas"
                    node-key="id"
                    :props="defaultProps"
                    :expand-on-click-node= false
                    @node-click="getItemSelect">
                  </el-tree>
                </div>
            </div>
          </el-form-item>
        </div>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源图标：" :label-width="formLabelWidth">
            <el-input v-model="itemOfLists.resIcon" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="资源次序：" :label-width="formLabelWidth">
            <el-input type="number" v-model="itemOfLists.resSeq" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="资源描述：" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" v-model="itemOfLists.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitEditedItem">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 查看框 -->
    <el-dialog title="资源信息" :visible.sync="dialogCheckVisible">
      <el-form>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源名称：" :label-width="formLabelWidth">
            <el-input :disabled="true" v-model="itemOfLists.resName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="资源编号：" :label-width="formLabelWidth">
            <el-input :disabled="true" v-model="itemOfLists.resCode" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item class="dialogResUrl" label="资源路径：" :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="itemOfLists.resUrl" auto-complete="off"></el-input>
        </el-form-item>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源类型：" :label-width="formLabelWidth">
            <!-- <el-input :disabled="true" v-model="itemOfLists.resType" auto-complete="off"></el-input> -->
            <el-select :disabled="true" v-model="itemOfLists.resType" placeholder="请选择">
              <el-option
                v-for="item in resTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上级资源：" :label-width="formLabelWidth">
            <el-input :disabled="true" v-model="itemOfLists.pid" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex;justify-content: space-between;">
          <el-form-item label="资源图标：" :label-width="formLabelWidth">
            <el-input :disabled="true" v-model="itemOfLists.resIcon" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="资源次序：" :label-width="formLabelWidth">
            <el-input :disabled="true" type="number" v-model="itemOfLists.resSeq" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="资源描述：" :label-width="formLabelWidth">
          <el-input :disabled="true" type="textarea" :rows="2" v-model="itemOfLists.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCheckVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogCheckVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import appConstant from '../../../util/constant'
import systemManageHttp from "../systemMange_ser";
export default {
  data() {
    return {
      resDatas: [],
      resDatasAll:[],

      newItem: {},
      itemOfLists: {},

      dialogAddVisible: false,
      dialogEditVisible: false,
      dialogCheckVisible: false,

      dropdownFlag: false,
      resName:'',
      resNameEdit: '',

      resTypes: [{
        value: '01',
        label: '菜单'
      },{
        value: '02',
        label: '功能'
      }],

      formLabelWidth: "100px",

      defaultProps: {
        children: "children",
        label: "resName"
      }
    };
  },
  created() {
    this.getResTree();
  },
  methods: {
    // 树形结构的渲染函数
    renderContent(h, { node, data, store }) {
      return (
        <span style="border-bottom:1px solid #efefef;flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span style="width:200px;">{data.resName}</span>
          <span style="flex: 1; display: flex; align-items: center;justify-content: flex-end">
            <span style="width:100px;">{data.resCode}</span>
            <span style="width:100px;">{data.parentResName}</span>
            <span style="flex: 1; display: flex; align-items: center;justify-content: flex-end">
              <span style="flex: 1; display: flex; align-items: center;justify-content: center">
                <span class="resUrl" title={data.resUrl}>
                  {data.resUrl}
                </span>
              </span>
              <span style="width:100px;">{data.resTypeTxt}</span>
              <span style="width:60px;">{data.resSeq}</span>
            </span>
          </span>
          <span>
            <el-button
              class="btn-sm" on-click={ () => this.dialogEditVisible = true }>
              编辑
            </el-button>
            <el-button class="btn-sm"  type="primary" on-click={ () => this.dialogCheckVisible=true }>
              查看
            </el-button>
          </span>
        </span>
      );
    },



    // 获取资源列表
    getResTree() {
      systemManageHttp
        .getResTree({
          reqFlag: "2",
          pid: "",
          resType: "",
          validFlag: "",
          recursiveFlag: 1
        })
        .then(res => {
          this.resDatas = res.data.data;
        });
    },

    // 获取某一条资源的信息
    getItem(row,node,arr){
      console.log(row.id);
      this.get(appConstant.baseUrl_user+"res/get/"+row.id).then(res => {
        console.log(res.data);
        this.itemOfLists = res.data;
        this.resNameEdit = res.data.resName;
      });
    },

    // 确定编辑一条资源
    commitEditedItem(){
      console.log(this.itemOfLists);
      systemManageHttp
        .update(this.itemOfLists)
        .then(res => {
          console.log(res.data);
        });
      this.dialogEditVisible = false;
    },

    // 确定提交一条新增资源
    commitAddItem(){
      this.newItem.reqFlag = "2",
      console.log(this.newItem);
      systemManageHttp
        .add(this.newItem)
        .then(res => {
          console.log(res.data);
        });
      this.dialogAddVisible = true;
    },

    // 打开下拉菜单里的树形结构
    getDropDownSelect(event){
      if(!this.dropdownFlag && event.target.className ==='dropdownInput'){
        this.dropdownFlag = true;
      }else{
        this.dropdownFlag = false;
      }
    },
    // 下拉菜单里的树形结构选取某一级数据
    getItemSelect(row,node,arr){
      this.dropdownFlag = false;
      this.get(appConstant.baseUrl_user+"res/get/"+row.id).then(res => {
        this.newItem.pid = res.data.pid;
        this.itemOfLists.pid = res.data.pid;
        this.resName = res.data.resName;
        this.resNameEdit = res.data.resName;
      });
    }

  }
};
</script>

<style>
.resourceManage {
  padding: 15px 30px;
}
.resourceManage .listContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 40px;
  padding: 0 25px 25px 25px;
  width: 100%;
  border-radius:6px 6px 0 0;
}

.resourceManage .titleContainer{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #efefef;
  font-size: 14px;
  color: #1f2d3d;
  background-color: #f8f9fd;
}

.resourceManage .btn-sm {
  border-radius: 3px;
  width: 44px;
  height: 24px;
  font-size: 12px;
  padding: 0;
}
.resourceManage .el-tree-node__content {
  height: 35px;
  font-size: 13px;  
  align-items: normal;
}

.resourceManage .resUrl {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 500px;
  text-align: center;
}

.resourceManage .btn-sm {
  border-radius: 3px;
  width: 44px;
  height: 24px;
  font-size: 12px;
  padding: 0;
}
.resourceManage [class*=" el-icon-"], .resourceManage [class^=el-icon-]{
  line-height: 2;
}

.resourceManage .icon-item {
  cursor: pointer;
  margin-right: 14px;
}
.resourceManage .el-icon {
  font-size: 24px;
  color: #0077ff;
  margin-right: 6px;
  vertical-align: sub;
}
.resourceManage .el-icon-text {
  font-size: 14px;
  color: #1f2d3d;
}

.resourceManage .el-dialog{
  width: 660px;
}
.resourceManage .el-dialog .el-input__inner{
  width: 185px;
  height: 35px;
}
.resourceManage .el-dialog .dialogResUrl .el-input__inner{
  width: 100%;
}



.resourceManage .el-dialog .el-form-item .dropdown{
  width: 185px;
  height: 35px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d8dce5;
  padding: 0 15px;
  position: relative;
}
.resourceManage .el-dialog .el-form-item .dropdown .dropdownInput{
  width:155px;
  height:35px;
  /* display:inline-block; */
  float: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.resourceManage .el-dialog .el-form-item .dropList{
  background-color: #fff;
  border: 1px solid #dfe4ed;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 111;
  height: 235px;
  width: 184px;
  font-size: 12px;
  overflow-y: scroll;
  overflow-x: scroll;
}
.resourceManage .el-dialog .el-tree-node>.el-tree-node__children{
  overflow:initial;
}
</style>
