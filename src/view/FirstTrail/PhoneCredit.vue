<!-- 电话征信 -->
<template>
  <div class="phone-credit">
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
          <div v-show="hisListShow">
            <div class="head-title">
              历史调查日志
            </div>
            <!-- 列表 -->
            <el-table :data="listData.recordList" height="250" border style="width: 100%" @row-click="rowClick" stripe v-loading="mobileLoading">
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
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listData.totalRecord">
            </el-pagination>
            </el-pagination>
          </div>
        </el-header>
        <!-- 表单部分 -->
        <el-main>
          <!-- 默认的新增表单 -->
          <!-- 住址电话 - 表单 -->
          <AddressForm class="form-his" v-if="formShow && phoneType =='01'" :custName="custName" :phoneNum="phoneNum"></AddressForm>
          <!-- 住址电话 - 历史 -->
          <AddressHis class="form-his" v-if="hisShow && phoneType == '01'" :custName="custName" :phoneNum="phoneNum"></AddressHis>
          <!-- 单位电话 - 表单 -->
          <CompanyForm class="form-his" v-if="formShow && phoneType=='02'" :custName="custName" :phoneNum="phoneNum"></CompanyForm>
          <!-- 单位电话 - 历史 -->
          <CompanyHis class="form-his" v-if="hisShow && phoneType=='02'"></CompanyHis>
          <!-- 家庭联系人 - 表单 -->
          <FamilyForm class="form-his" v-if="formShow && phoneType=='03'" :custName="custName" :phoneNum="phoneNum"></FamilyForm>
          <!-- 家庭联系人 - 历史 -->
          <FamilyHis class="form-his" v-if="hisShow && phoneType=='03'"></FamilyHis>
          <!-- 紧急联系人 - 表单 -->
          <HurryForm class="form-his" v-if="formShow && phoneType=='04'" :custName="custName" :phoneNum="phoneNum"></HurryForm>
          <!-- 紧急联系人 - 历史 -->
          <HurryHis class="form-his" v-if="hisShow && phoneType=='04'"></HurryHis>
          <!-- 工作证明人 - 表单 -->
          <WorkForm class="form-his" v-if="formShow && phoneType=='05'" :custName="custName" :phoneNum="phoneNum"></WorkForm>
          <!-- 工作证明人 - 历史 -->
          <WorkHis class="form-his" v-if="hisShow && phoneType=='05'"></WorkHis>
          

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
            <span class="add-label"><span class="require-icon">*</span>电话类型:</span>
            <el-select v-model="addTelType" placeholder="请选择">
              <el-option v-for="item in telTypes" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span class="add-label"><span class="require-icon">*</span>电话名称:</span>
            <el-input type="text" name="" v-model="addTelName" value="" placeholder=""></el-input>
          </li>
          <!--  v-show="telType='01'|| telType='02'" -->
          <li v-show="(addTelType!='01'|| addTelType!='02') && (addTelType=='03' || addTelType=='04' || addTelType=='05')">
            <span class="add-label"><span class="require-icon">*</span>关系:</span>
            <el-select v-model="addRelationShip" placeholder="请选择">
              <el-option v-for="item in relationShips" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span class="add-label"><span class="require-icon">*</span>电话号码:</span>
            <el-input type="text" name="" v-model="addTelNum" value="" placeholder=""></el-input>
          </li>
          <li>
            <el-button @click.native="append">确认</el-button>
          </li>
        </ul>
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
      // // 住址
      // addressFormShow: false,
      // addressHisShow: false,
      // // 单位
      // companyFormShow: false,
      // companyHisShow: false,
      // // 家庭
      // familyFormShow: false,
      // familyHisShow: false,
      // // 紧急联系人
      // hurryFormShow: false,
      // hurryHisShow: false,
      // // 工作证明人
      // workFormShow: false,
      // workHisShow: false,
      // 添加的电话类型
      telTypes: [
        { value: '01', label: '住址电话' },
        { value: '02', label: '单位电话' },
        { value: '03', label: '家庭联系人电话' },
        { value: '04', label: '紧急联系人电话' },
        { value: '05', label: '工作联系人电话' }
      ],
      // 添加的电话类型
      relationShips: [
        { value: '01', label: '夫妻' },
        { value: '02', label: '父母' },
        { value: '03', label: '子女' },
        { value: '04', label: '兄弟' },
        { value: '05', label: '姐妹' },
        { value: '06', label: '兄妹' },
        { value: '07', label: '姐弟' },
        { value: '08', label: '朋友' },
        { value: '09', label: '同事' },
        { value: '10', label: '房东' },
        { value: '11', label: '亲属' },
        { value: '12', label: '其他' }
      ],
      // 添加申请单 电话类型 
      addTelType: '',
      // 电话名称
      addTelName: '',
      // 关系
      addRelationShip: '',
      // 电话号码
      addTelNum: '',

      //  历史列表相关
      applyId: '', // 申请单id
      phoneNum: '', // 电话号码
      phoneType: '', // 电话类型
      pageNum: 1, // 当前页数
      pageSize: 5, // 每页条数
      // // 当前页码
      // currentPage: 1,
      // // 每页显示的条数
      // currentPageSize: 5,
      // 加载
      mobileLoading: true,
      // 传给表单的 数据
      // 客户姓名
      custName: '',
      // 电话号码
      telNum: '',
      // 请求历史日志
      hisId:'',
      hisPhoneType:'',
      // 改造 , 通过 电话类型 , formShwo/hisShow 来控制所有的 表单/历史显示
      formShow:false,
      hisShow:false
    }
  },
  mounted() {
    // 组件 创建 估计完成后获取数据
    // 此时 data 已经被 observed 了
    // 测试数据
    // 调用历史数据
    this.applyId = '2222';
    this.phoneNum = '11111';
    // this.phoneType = '00';
    // 电话树数据
    this.fetchData();
    
  },
  watch: {
    // 监听属性  电话类型
    // telType: function(val) {
    //   if (this.telType == '01' || this.telType == '02') {
    //     this.addRelationShip = '';
    //   }
    // },
    // 监听 添加电话 页面是否显示
    coverShow:function(){
      if(!this.coverShow){
        this.addTelType = '';
        this.addTelName = '';
        this.addRelationShip = '';
        this.addTelNum = '';
      }
    }
  },
  methods: {
    fetchData() {
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
      // 请求历史调查日志
      this.phoneType = data.telType;
      console.log(this.phoneType);
      this.queryTelLogByPage();

      console.log(data);
      // 客户姓名
      this.custName = data.telName;
      // 电话号码
      this.phoneNum = data.telNum;


      // 点击 电话树进来  默认编辑页面
      // 根据  tellType 判断
      // switch (data.telType) {
      //   case '01':
      //     // 住址电话
      //     this.addressFormShow = true;
      //     this.addressHisShow = false;
      //     this.formShow = true;
      //     break;
      //   case '02':
      //     // 单位电话
      //     this.companyFormShow = true;
      //     this.companyHisShow = false;
      //     break;
      //   case '03':
      //     // 家庭联系人
      //     this.familyFormShow = true;
      //     this.companyHisShow = false;
      //     break;
      //   case '04':
      //     // 紧急联系人
      //     this.hurryFormShow = true;
      //     this.hurryHisShow = false;
      //     break;
      //   case '05':
      //     // 工作证明人
      //     this.workFormShow = true;
      //     this.workHisShow = false;
      // }
      // 
      

      this.formShow = true;

    },
    queryTelLogByPage() {
      // 获取 历史调查日志 
      // /creTelResearchHis/queryByPage
      this.post('/creTelResearchHis/queryByPage', {
        creTelInvestDto: {
          applyId: this.applyId,
          phoneNum: this.phoneNum,
          // phoneType: this.phoneType,
          phoneType: '00',
        },
        pageParam: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        // 数据请求回来  加载圈 清空
        this.mobileLoading = false;
        console.log(res);
        //  历史table数据
        this.listData = res.data;
      })
    },
    queryHisLog(){
      // 获取历史数据
      // id 日志记录 id
      // phoneType 电话类型
      
    },
    queryHomeTelHis(){
      // 查询住址电话日志
      this.post('creTelResearchHis/queryHomeTel',{

      })
    },
    append(data) {
      // 点击添加方法,用过 key 来判断 添加的哪项.
      console.log('append');
      console.log(this.id);
      // 点击添加 提交数据 
      this.coverShow = false;
      this.post('/creTelInfo/addTel', {
        "applyId": this.applyId,
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
      console.log(this.phoneType);
      // 点击行显示
      // 通过 电话类型来判断 显示哪个表单
      // switch (this.phoneType) {
      //   case '01':
      //     // 点击 住址电话 显示
      //     this.addressHisShow = true;
      //     this.addressFormShow = false;
      //     break;
      //   case '02':
      //     // 单位电话
      //     this.companyFormShow = true;
      //     this.companyHisShow = false;
      //     break;
      //   case '03':
      //     // 家庭联系人
      //     this.familyFormShow = true;
      //     this.familyHisShow = false;
      //     break;
      //   case '04':
      //     // 紧急联系人
      //     this.hurryFormShow = true;
      //     this.hurryHisShow = false;
      //     break;
      //   case '05':
      //     // 工作证明人
      //     this.workFormShow = true;
      //     this.workHisShow = false;
      //     break;
      // }
      // 
      

      // 直接处理 显示  历史
      this.formShow = false;
      this.hisShow = true;
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

.phone-credit .el-aside {
  color: #333;
  height: 100%;
}








/* 树形  结构 */

.phone-credit .el-tree {
  padding-left: 10px;
}









/* element-ui tree icon 箭头*/

.phone-credit .el-tree-node__content>.el-tree-node__expand-icon {
  /*display: none;*/
  position: relative;
  left: 150px;
}









/* 三角 icon */

.phone-credit .el-tree-node__expand-icon {
  font-size: 20px;
  /*display: none;*/
}










/* label 字体 */

.phone-credit .el-tree-node__label {
  font-size: 20px;
}








/* 二级 目录 样式 */

.phone-credit .el-tree-node__content {
  padding-left: 0px !important;
}








/* 添加电话 按钮 */

.phone-credit .el-aside .el-button {
  width: 80px;
  margin: 20px;
  margin-left: 60px;
}








/* 点击添加出现的 页面 */

.phone-credit .cover-view {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}








/* 添加页面内容 */

.phone-credit .cover-content {
  z-index: 99;
  background: #fff;
  width: 200px;
  /*height: 200px;*/
  height: auto;
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

.phone-credit .cover-content .add-title {
  text-align: left;
}








/**/

.phone-credit .add-content li {
  border-bottom: 1px solid #ededed;
  padding: 5px;
  height: 40px;
}

.phone-credit .add-content li:last-child {
  border: none;
}

.phone-credit .add-content li span:first-child {
  width: 80px;
  text-align: center;
  padding-right: 5px;
}

.phone-credit .add-content li input {
  height: 30px;
  padding: 0;
  text-indent: 5px;
}








/* 确定按钮 */

.phone-credit .cover-content .el-button {
  display: block;
  float: right;
  /*margin-top: 10px;*/
  /*margin-right: 10px;*/
}








/* 弹窗页面 关闭按钮*/

.phone-credit .el-tag {
  width: 0;
  height: 0;
  color: none;
  border: none;
  position: absolute;
  right: 20px;
  top: 0;
}

.phone-credit .el-tag .el-icon-close {
  right: 0px;
}








/* 右侧 头 table*/

.phone-credit .el-header {
  width: 100%;
  height: auto !important;
  height: 350px !important;
}

.phone-credit .el-main {
  height: calc(100% - 300px);
  padding: 0;
  padding-bottom: 10px;
  overflow: hidden;
}

.phone-credit .el-header .head-title {
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

.phone-credit .el-pagination {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}








/* form-his */

.phone-credit .form-his {
  width: 100%;
  height: 100%;
}








/* 添加申请单电话信息 必填 * */

.phone-credit .require-icon {
  color: #ff0000;
}






/* 添加申请单电话 label*/

.phone-credit .add-label {
  display: inline-block;
  width: 70px;
}




/* 表单 */
.address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
}
/* label */
.el-form-item__label {
  width: 150px !important;
}
.el-form-item {
  margin-bottom: 5px !important;

}
/* 三列 */
.item-column3 {
  width: 33%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}
/* 两列 */
.item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}
.item-column1{
  width:80%;
  float: left;
  margin: 0;
}
/* 表单提交 */
.address-submit {
  margin: 0;
  padding: 0;
  float: left;
  margin: 20px;
  width:80%;
  text-align: right;
  margin-top: 50px;
}


/* input 不可编辑状态*/
.dis-input{

}

.el-select>.el-input{
  height: 30px;
}
.el-input__inner{
  height: 30px !important;
}

</style>
