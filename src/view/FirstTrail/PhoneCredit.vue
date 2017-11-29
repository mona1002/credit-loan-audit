<!-- 电话征信 -->
<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- 左侧 导航列表 -->
      <el-aside width="200px" style="heightbackground-color: rgb(238, 241, 246)">
        <!-- 手风琴效果 -->
        <!-- no-key 每个树节点用来作为唯一标识的属性,整棵树应是唯一的 -->
        <!-- renderContent 指定渲染函数,该函数返回需要的节点区内容即可 -->
        <!-- highlight-current 是否高亮当前选中项 -->
        <el-tree :data="treeData" empty-text="123" :props="defaultProps" highlight-current expand-on-click-node default-expand-all no-key="id" @node-click="handleNodeClick">
        </el-tree>
        <!-- 备选  折叠面板- 手风琴效果 -->
        <el-button @click.native="coverShow=true">添加</el-button>
        <!-- <el-button type="text" @click="open">添加</el-button> -->
      </el-aside>
      <!-- 右侧 表单内容 -->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div v-if="hisListShow">
            <div class="head-title">
              历史调查日志
            </div>
            <!-- 列表 -->
            <el-table :data="listData" height="250" border style="width: 100%" @row-click="rowClick">
              <el-table-column type="index" label="序号">
              </el-table-column>
              <el-table-column prop="phoneType" label="电话类型">
              </el-table-column>
              <el-table-column prop="checkTime" label="调查时间">
              </el-table-column>
              <el-table-column prop="source" label="来源">
              </el-table-column>
              <el-table-column prop="phoneNum" label="电话号码">
              </el-table-column>
              <el-table-column prop="answer" label="接听情况">
              </el-table-column>
              <el-table-column prop="checkStage" label="调查阶段">
              </el-table-column>
              <el-table-column prop="conclusion" label="调查结论">
              </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="listData.length">
            </el-pagination>
          </div>
        </el-header>
        <!-- 表单部分 -->
        <el-main>
          <!-- 默认的新增表单 -->
          <!-- 住址电话 - 表单 -->
          <AddressForm class="form-his" v-if="addressFormShow"></AddressForm>
          <!-- 住址电话 - 历史 -->
          <AddressHis class="form-his" v-if="addressHisShow"></AddressHis>
          <!-- 单位电话 - 表单 -->
          <CompanyForm class="form-his" v-if="companyFormShow"></CompanyForm>
          <!-- 单位电话 - 历史 -->
          <CompanyHis class="form-his" v-if="companyHisShow"></CompanyHis>
          <!-- 家庭联系人 - 表单 -->
          <FamilyForm class="form-his" v-if="familyFormShow"></FamilyForm>
          <!-- 家庭联系人 - 历史 -->
          <FamilyHis class="form-his" v-if="familyHisShow"></FamilyHis>
          <!-- 紧急联系人 - 表单 -->
          <WorkForm class="form-his" v-if="workFormShow"></WorkForm>
          <!-- 紧急联系人 - 历史 -->
          <WorkHis class="form-his" v-if="workHisShow"></WorkHis>
          <!-- 子组件 -->
          <!-- <router-link to="/AddressForm/formTag='testtag'/id='123'/phoneType='01'">
            <el-button type="primary">住址电话</el-button>
          </router-link> -->
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>
    <!-- 点击 添加出现的弹窗 -->
    <div class="cover-view" v-show="coverShow">
      <div class="cover-content">
        <el-tag closable @close="coverShow=false"></el-tag>
        <div class="add-title">
          <span>添加申请单电话信息</span>
        </div>
        <ul class="add-content">
          <li>
            <span class="require-icon">*</span>
            <span>电话类型:</span>
            <el-select v-model="addTelType" placeholder="请选择">
              <el-option v-for="item in telTypes" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span class="require-icon">*</span>
            <span>电话名称:</span>
            <el-input type="text" name="" v-model="addTelName" value="" placeholder=""></el-input>
          </li>
          <li>
            <span class="require-icon">*</span>
            <span>电话号码:</span>
            <el-input type="text" name="" v-model="addTelNum" maxlength=13 value="" placeholder=""></el-input>
          </li>
        </ul>
        <el-button @click.native="append">确认</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// 电话征信 - 住址电话 表单
import AddressForm from './detailComponent/AddressForm'
// 电话征信 - 住址电话 详情
import AddressHis from './detailComponent/AddressHis'
// 电话征信 - 单位电话 表单 CompanyForm
import CompanyForm from './detailComponent/CompanyForm'
// 电话征信 - 单位电话  详情 CompanyHis
import CompanyHis from './detailComponent/CompanyHis'
// 电话征信 - 家庭联系人 表单
import FamilyForm from './detailComponent/FamilyForm'
// 电话征信 - 家庭联系人 详情
import FamilyHis from './detailComponent/FamilyHis'
// 电话征信 紧急联系人 表单
import HurryForm from './detailComponent/HurryForm'
// 电话征信 紧急联系人 历史
import HurryHis from './detailComponent/HurryHis'
// 电话征信 工作证明人 表单
import WorkForm from './detailComponent/WorkForm'
// 电话征信 工作证明人 历史 
import WorkHis from './detailComponent/WorkHis'



export default {
  data() {
    return {
      treeData: [{
          "children": [],
          "id": "01",
          "label": "住址电话"
        },
        {
          "children": [],
          "id": "02",
          "label": "单位电话"
        },
        {
          "children": [],
          "id": "03",
          "label": "家庭联系人"
        },
        {
          "children": [],
          "id": "04",
          "label": "紧急联系人"
        },
        {
          "children": [],
          "id": "05",
          "label": "工作证明人"
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 历史列表数据
      listData: [],


      // 添加界面
      coverShow: false,
      // 头部列表
      hisListShow: false,
      // 住址
      addressFormShow: false,
      addressHisShow: false,
      // 单位
      companyFormShow: false,
      companyHisShow: false,
      // 家庭
      familyFormShow: false,
      familyHisShow: false,
      // 紧急联系人
      hurryFormShow: false,
      hurryHisShow: false,
      // 工作证明人
      workFormShow: false,
      workHisShow: false,
      // 添加的电话类型
      telTypes: [
        { value: '01', label: '住址电话' },
        { value: '02', label: '单位电话' },
        { value: '03', label: '家庭联系人电话' },
        { value: '04', label: '紧急联系人电话' },
        { value: '05', label: '工作联系人电话' }
      ],
      // 添加申请单 带你和类型 
      addTelType: '',
      // 电话名称
      addTelName: '',
      // 电话号码
      addTelNum: '',

      //  历史列表相关
      applyId: '00542', // 申请单id
      phoneNum: '', // 电话号码
      phoneType: '', // 电话类型
      pageNum: '1', // 当前页数
      pageSize: '5', // 每页条数
      // 当前页码
      currentPage: 1,
      // 每页显示的条数
      currentPageSize: 5,
    }
  },
  created() {
    // 组件 创建 估计完成后获取数据
    // 此时 data 已经被 observed 了
    // 电话树数据
    this.fetchData();
  },
  methods: {
    fetchData() {
      // 测试数据
      this.applyId = '2222';
      this.post("/creTelInfo/queryTels", {
        applyId: this.applyId
      }).then(res => {
        console.log(res.data);
        this.treeData = res.data;
      });
    },
    handleNodeClick(data) {
      // 点击每条tree数据的事件
      this.treeId = data.id;
      // 点击数据展示历史记录  列表
      this.hisListShow = true;
      console.log(this.id);
      // 请求历史调查日志
      this.queryTelLogByPage();
    },
    queryTelLogByPage() {
      // 获取 历史调查日志 
      this.post('/creTelResearchHis/queryTelLogByPage', {
        applyId: '00542',
        phoneNum: '11111',
        phoneType: '00',
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res);
        //  历史table数据
        this.listData = res.data;
      })
    },
    append(data) {
      // 点击添加方法,用过 key 来判断 添加的哪项.
      console.log('append');
      console.log(this.id);
      // 点击添加 提交数据 
      this.coverShow = false;
      this.post('/creTelInfo/addTel', {
        "applyId": '2222',
        "telNum": this.addTelNum,
        "telName": this.addTelName,
        "telType": this.addTelType,
        // 登录人编号
        "creatorCode": this.userCode
      }).then(res => {
        console.log(res);

        if (res.statusCode == '200')
          // 点击提交之后 重新请求 电话树
          this.fetchData();
      })

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.queryTelLogByPage();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val;
      this.queryTelLogByPage();
    },
    rowClick() {
      // 历史列表  点击每一行
      console.log('click row')
      // 点击行显示
      // 通过 电话类型来判断 显示哪个表单
      switch (this.phoneType) {
        case '01':
          // 点击 住址电话 显示
          this.addressHisShow = false;
          this.addressFormShow = true;
          break;
        case '02':
          // 单位电话
          this.companyFormShow = false;
          this.companyHisShow = true;
          break;
        case '03':
          // 家庭联系人
          this.familyFormShow = false;
          this.familyHisShow = true;
          break;
        case '04':
          // 紧急联系人
          this.hurryFormShow = false;
          this.hurryHisShow = true;
          break;
        case '05':
          // 工作证明人
          this.workFormShow = false;
          this.workHisShow = true;
          break;
      }
    }
  },
  components: {
    AddressForm,
    AddressHis,
    CompanyForm,
    CompanyHis,
    FamilyForm,
    FamilyHis,
    HurryForm,
    HurryHis,
    WorkForm,
    WorkHis
  }
}

</script>
<style>
el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100%;
}










/* 树形  结构 */

.el-tree {
  padding-left: 10px;
}










/* element-ui tree icon 箭头*/

.el-tree-node__content>.el-tree-node__expand-icon {
  /*display: none;*/
  position: absolute;
  left: 150px;
}










/* 三角 icon */

.el-tree-node__expand-icon {
  font-size: 20px;
  /*display: none;*/
}










/* label 字体 */

.el-tree-node__label {
  font-size: 20px;
}










/* 二级 目录 样式 */

.el-tree-node__content {
  padding-left: 0px !important;
}










/* 添加电话 按钮 */

.el-aside .el-button {
  width: 80px;
  margin: 20px;
  margin-left: 60px;
}










/* 点击添加出现的 页面 */

.cover-view {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}










/* 添加页面内容 */

.cover-content {
  z-index: 99;
  background: #fff;
  width: 200px;
  height: 200px;
  vertical-align: middle;
  text-align: center;
  margin: 0 auto;
  position: relative;
  width: 338px;
  border-radius: 5px;
  top: calc( 50% - 100px);
  padding: 5px;
}










/* title */

.cover-content .add-title {
  text-align: left;
}










/**/

.add-content li {
  border-bottom: 1px solid #ededed;
  padding: 5px;
  height: 40px;
}

.add-content li span:first-child {
  width: 80px;
  text-align: center;
  padding-right: 5px;
}

.add-content li input {
  height: 30px;
  padding: 0;
  text-indent: 5px;
}










/* 确定按钮 */

.cover-content .el-button {
  display: block;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}










/* 弹窗页面 关闭按钮*/

.el-tag {
  width: 0;
  height: 0;
  color: none;
  border: none;
  position: absolute;
  right: 20px;
  top: 0;
}

.el-tag .el-icon-close {
  right: 0px;
}










/* 右侧 头 table*/

.el-header {
  width: 100%;
  height: auto !important;
  height: 350px !important;
}

.el-main {
  height: calc(100% - 300px);
  padding: 0;
  padding-bottom: 10px;
  overflow: hidden;
}

.el-header .head-title {
  font-size: 18px;
  width: 100%;
  height: 40px;
  text-align: left;
  background: #ededed;
  vertical-align: middle;
  line-height: 40px;
  padding-left: 20px;
}










/* 表格分页 */

.el-pagination {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}










/* 前往 第几页 */

.el-pagination__jump {
  display: none !important;
}










/* 共 100条*/

.el-pagination__total {}










/* form-his */

.form-his {
  width: 100%;
  height: 100%;
}







/* 添加申请单电话信息 必填 * */

.require-icon {
  color: #ff0000;
}

</style>
