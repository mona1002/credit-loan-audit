<!-- 电话征信  综合查询  -->
<template>
  <div class="phone-credit min_width_1200">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- 左侧 导航列表 -->
      <el-aside style="width:210px;">
        <!-- 手风琴效果 -->
        <!-- no-key 每个树节点用来作为唯一标识的属性,整棵树应是唯一的 -->
        <!-- renderContent 指定渲染函数,该函数返回需要的节点区内容即可 -->
        <!-- highlight-current 是否高亮当前选中项 -->
        <!-- 更改电话树 start-->
        <el-collapse class="phone-tree" v-model="activeTrees">
          <el-collapse-item :title="treeData[0].label" name="1">
            <div v-for="item in treeData[0].children" :key='item.id'>
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="treeData[1].label" name="2">
            <div v-for="item in treeData[1].children" :key='item.id'>
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="treeData[2].label" name="3">
            <div v-for="item in treeData[2].children" :key='item.id'>
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                  <br />
                  <br /> {{item.children[0].relation}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="treeData[3].label" name="4">
            <div v-for="item in treeData[3].children" :key='item.id'>
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                  <br />
                  <br /> {{item.children[0].relation}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="treeData[4].label" name="5">
            <div v-for="item in treeData[4].children" :key='item.id'>
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                  <br />
                  <br /> {{item.children[0].relation}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!-- 更改电话树 end -->
        <!-- 备选  折叠面板- 手风琴效果 -->
      </el-aside>
      <!-- 右侧 表单内容 -->
      <el-container>
        <el-main style="overflow-y: auto;overflow-x:hidden;font-size:14px;">
          <div class="form-his" v-show="!hisListShow" style="background:url(.../../../static/images/3C281C6A-532B-4A55-A9BF-F142E9F09063@1x.png) center no-repeat;">
          </div>
          <div v-if="hisListShow" class="header-class">
            <el-collapse v-model="activeNames">
              <el-collapse-item style="text-align:left;" v-show="true" name="1">
                <template slot="title">
                  <i class="collapse_title_icon"></i>
                  <span class="collapse_title_text">历史调查日志</span>
                </template>
                <!-- 历史记录 -->
                <div>
                  <div class="height_auto">
                    <el-table :data="listData.recordList" height="250" border style="" @row-dblclick="rowDbClick"
                      v-loading="mobileLoading" highlight-current-row>
                      <el-table-column type="index" label="序号" min-width="60">
                      </el-table-column>
                      <el-table-column prop="phoneTypeDes" label="电话类型" min-width="100">
                      </el-table-column>
                      <el-table-column prop="checkTime" label="调查时间" min-width="180">
                      </el-table-column>
                      <el-table-column prop="sourceDes" label="来源" min-width="150">
                      </el-table-column>
                      <el-table-column prop="phoneNum" label="电话号码" width="105">
                      </el-table-column>
                      <el-table-column prop="answerDes" label="接听情况" min-width="100">
                      </el-table-column>
                      <el-table-column prop="checkStageDes" label="调查阶段" min-width="80">
                      </el-table-column>
                      <el-table-column prop="conclusion" label="调查结果" min-width="100" show-overflow-tooltip>
                      </el-table-column>
                    </el-table>
                  </div>
                  <div class="page_top_bottom_10">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
                      :page-sizes="[10, 20,50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                      :total="listData.totalRecord" v-show="listData.totalRecord>0">
                    </el-pagination>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <!-- 列表 -->
          <!-- 表单部分 -->
          <div class="form-class" style="width:100%;height:auto;">
            <!-- 默认的新增表单 -->
            <!-- 住址电话 - 表单 -->
            <!-- <AddressForm class="form-his" v-if="formShow && phoneType =='01'" :custName="custName" :phoneNum="phoneNum"
              :applyId="applyId" :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData"
              :isFull.sync="isFull"></AddressForm> -->
            <!-- 住址电话 - 历史 -->
            <AddressHis class="form-his" v-if="hisShow && phoneType == '01'" :mobileData="newList?newList:mobileData"></AddressHis>
            <!-- 单位电话 - 表单 -->
            <!-- <CompanyForm class="form-his" v-if="formShow && phoneType=='02'" :custName="custName" :phoneNum="phoneNum"
              :applyId="applyId" :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData"
              :isFull.sync="isFull"></CompanyForm> -->
            <!-- 单位电话 - 历史 -->
            <CompanyHis class="form-his" v-if="hisShow && phoneType=='02'" :comData="newList?newList:comData"></CompanyHis>
            <!-- 家庭联系人 - 表单 -->
            <!-- <FamilyForm class="form-his" v-if="formShow && phoneType=='03'" :custName="custName" :phoneNum="phoneNum"
              :applyId="applyId" :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData"
              :isFull.sync="isFull"></FamilyForm> -->
            <!-- 家庭联系人 - 历史 -->
            <FamilyHis class="form-his" v-if="hisShow && phoneType=='03'" :familyData="newList?newList:familyData"></FamilyHis>
            <!-- 紧急联系人 - 表单 -->
            <!-- <HurryForm class="form-his" v-if="formShow && phoneType=='04'" :custName="custName" :phoneNum="phoneNum"
              :applyId="applyId" :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData"
              :isFull.sync="isFull"></HurryForm> -->
            <!-- 紧急联系人 - 历史 -->
            <HurryHis class="form-his" v-if="hisShow && phoneType=='04'" :hurryData="newList?newList:hurryData"></HurryHis>
            <!-- 工作证明人 - 表单 -->
            <!-- <WorkForm class="form-his" v-if="formShow && phoneType=='05'" :custName="custName" :phoneNum="phoneNum"
              :applyId="applyId" :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData"
              :isFull.sync="isFull"></WorkForm> -->
            <!-- 工作证明人 - 历史 -->
            <WorkHis class="form-his" v-if="hisShow && phoneType=='05'" :workData="newList?newList:workData"></WorkHis>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  // 电话征信 - 住址电话 表单
  // import AddressForm from '../detailComponent/AddressForm.vue'
  // 电话征信 - 住址电话 详情
  import AddressHis from '../detailComponent/AddressHis.vue'
  // 电话征信 - 单位电话 表单 CompanyForm
  // import CompanyForm from '../detailComponent/CompanyForm'
  // 电话征信 - 单位电话  详情 CompanyHis
  import CompanyHis from '../detailComponent/CompanyHis'
  // 电话征信 - 家庭联系人 表单
  // import FamilyForm from '../detailComponent/FamilyForm'
  // 电话征信 - 家庭联系人 详情
  import FamilyHis from '../detailComponent/FamilyHis'
  // 电话征信 紧急联系人 表单
  // import HurryForm from '../detailComponent/HurryForm'
  // 电话征信 紧急联系人 历史
  import HurryHis from '../detailComponent/HurryHis'
  // 电话征信 工作证明人 表单
  // import WorkForm from '../detailComponent/WorkForm'
  // 电话征信 工作证明人 历史 
  import WorkHis from '../detailComponent/WorkHis'
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
            "label": "其他联系人"
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
        //子组件获取最新一条数据
        newList: '',
        // 添加界面
        coverShow: false,
        // 头部列表
        hisListShow: false,
        // 添加申请单 电话类型 
        addTelType: '',
        // 电话名称
        addTelName: '',
        // 关系
        addRelationShip: '',
        // 电话号码
        addTelNum: '',
        //  历史列表相关
        phoneNum: '', // 电话号码
        phoneType: '', // 电话类型
        id: '', // 历史入参 
        pageNum: 1, // 当前页数
        pageSize: 10, // 每页条数
        // 加载
        mobileLoading: true,
        // 传给表单的 数据
        // 客户姓名
        custName: '',
        // 电话号码
        telNum: '',
        // 请求历史日志
        hisId: '',
        hisPhoneType: '',
        // 改造 , 通过 电话类型 , formShwo/hisShow 来控制所有的 表单/历史显示
        // formShow: false,
        hisShow: false,
        activeNames: ["1"], // 折叠默认展开的选项
        treeFlag: '', // 用来标志  电话树是否需要更新
        listFlag: '', // 用来标志  历史调查日志, 
        //是否需要更新  在子组件操作的时候, $emit 
        applySubNo: '', // 进件编号
        // 历史数据
        mobileData: [],
        comData: [],
        familyData: [],
        hurryData: [],
        workData: [],
        active: false, // 添加电话 提示语
        addTelRex: false, // 添加电话 校验
        dialogFormVisible: false, // 电话征信 点击添加
        addTellForm: {
          applyId: '',
          addTelNum: '',
          addTelName: '',
          addRelationShip: '',
          addTelType: '',
          creatorCode: ''
        },
        addTellFormLabelWidth: '80px', // 添加电话 表单 label-width
        isInterFlag: false, // 是否是内匹跳转的查看详情
        activeTrees: ["1", "2", "3", "4", "5"],
        addBtnShow: false, // 标志 添加电话按钮是否显示
        isLoading: false, // 审批按钮 是否加载状态
        loadingTitle: '确定', // 默认btn title
        judgeFlag: '',
        taskInWaitting: ''
      }
    },
    props: {
      applyId: {
        required: true,
        default: '',
        type: String
      },
    },
    mounted() {
      // 组件 创建 估计完成后获取数据
      // 此时 data 已经被 observed 了
      this.applySubNo = this.taskInWaitting.applySubNo;
      // 电话树数据
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.post("/creTelInfo/queryTels", {
          applyId: this.applyId
        }).then(res => {
          if (res.statusCode == '200')
            this.treeData = res.data;
        });
      },
      handleNodeClick(data) {
        // 点击每条tree数据的事件
        this.treeId = data.id;
        if (data.id.length > 2) {
          // 点击数据展示历史记录  列表
          this.hisListShow = true;
          // 请求历史调查日志
          this.phoneType = data.telType;
          // 客户姓名
          this.custName = data.telName;
          // 电话号码
          this.phoneNum = data.telNum;
          this.queryTelLogByPage();
          this.hisShow = true;
          // 编辑的时候 历史调查日志不展开
          // this.activeNames = [];
        }
      },
      queryTelLogByPage() {
        // 获取 历史调查日志 
        this.post('/creTelResearchHis/queryByPage', {
          creTelInvestDto: {
            applyId: this.applyId,
            phoneNum: this.phoneNum,
            phoneType: this.phoneType,
          },
          pageParam: {
            pageNum: this.pageNum,
            pageSize: this.pageSize
          }
        }).then(res => {
          // 数据请求回来  加载圈 清空
          this.mobileLoading = false;
          if (res.statusCode == 200) {
            this.listData = res.data.page;
            if (res.data.message) {
              this.hisShow = true;
              this.newList = res.data.message;
            } else {
              this.hisShow = false;
            }
          } else {
            this.hisShow = false;
            this.listData.recordList = [];
            this.$message.error(res.msg)
          }
        })
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.pageNum = 1;
        this.queryTelLogByPage();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.queryTelLogByPage();
      },
      rowDbClick(row) {
        // 先让表单消失
        this.hisShow = false;
        // 历史列表  点击每一行
        this.id = row.id;
        // 点击行显示
        // 通过 电话类型来判断 显示哪个表单
        switch (this.phoneType) {
          case '01':
            // 点击 住址电话 显示
            this.queryHomeTel();
            break;
          case '02':
            // 单位电话
            this.queryComTelLog();
            break;
          case '03':
            // 家庭联系人
            this.queryTelfContract();
            break;
          case '04':
            // 紧急联系人
            this.queryTeleContract();
            break;
          case '05':
            // 工作证明人
            this.queryTelJobRef();
            break;
        }
      },
      queryHomeTel() {
        // 请求历史数据 , 直接传给  his 组件
        this.post('creTelResearchHis/queryHomeTel', {
          id: this.id,
          phoneType: this.phoneType,
          applyId: this.applyId
        }).then(res => {
          this.newList = '';
          this.mobileData = res.data;
          if (res.statusCode == '200')
            // 直接处理 显示  历史
            this.hisShow = true;
        })
      },
      queryComTelLog() {
        // 单位联系人历史
        this.post('/creTelResearchHis/queryComTelLog', {
          applyId: this.applyId,
          id: this.id,
          phoneType: this.phoneType
        }).then(res => {
          this.newList = '';
          this.comData = res.data;
          if (res.statusCode == '200')
            // 直接处理 显示  历史
            this.hisShow = true;
        })
      },
      queryTelfContract() {
        // 家庭联系人类似
        this.post('/creTelResearchHis/queryTelfContract', {
          applyId: this.applyId,
          id: this.id,
          phoneType: this.phoneType
        }).then(res => {
          this.newList = '';
          this.familyData = res.data;
          if (res.statusCode == '200')
            // 直接处理 显示  历史
            this.hisShow = true;
        })
      },
      queryTeleContract() {
        // 紧急联系人历史
        this.post('/creTelResearchHis/queryTeleContract', {
          applyId: this.applyId,
          id: this.id,
          phoneType: this.phoneType
        }).then(res => {
          this.newList = '';
          this.hurryData = res.data;
          if (res.statusCode == '200')
            // 直接处理 显示  历史
            this.hisShow = true;
        })
      },
      queryTelJobRef() {
        // 工作联系人历史
        this.post('/creTelResearchHis/queryTelJobRef', {
          applyId: this.applyId,
          id: this.id,
          phoneType: this.phoneType
        }).then(res => {
          this.newList = '';
          this.workData = res.data;
          if (res.statusCode == '200')
            // 直接处理 显示  历史
            this.hisShow = true;
        })
      },
      // 添加 电话 弹窗, 点击关闭的事件   无效?
    },
    components: {
      // AddressForm,
      AddressHis,
      // CompanyForm,
      CompanyHis,
      // FamilyForm,
      FamilyHis,
      // HurryForm,
      HurryHis,
      // WorkForm,
      WorkHis
    }
  }

</script>
<style>
  .phone-credit {
    width: 100%;
    height: 100%;
  }

  .phone-credit .el-container {
    width: 100%;
    height: 100%;
  }

  .phone-credit el-header {
    background-color: #B3C0D1;
    height: 40px !important;
    line-height: 40px;
  }

  .phone-credit .el-aside {
    height: 100%;
    border: 1px solid #e6eaee;
    width: 250px !important;
    background: #eef0f9;
  }

  /* 添加电话 按钮 */

  .phone-credit .el-aside .el-button {
    width: 80px;
    margin: 20px;
    margin-left: 60px;
    color: white;
    float: right;
  }

  /* 点击添加出现的 页面 */

  .phone-credit .cover-view {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    vertical-align: middle;
    text-align: center;
    overflow: auto;
    z-index: 101;
  }

  /* 添加页面内容 */

  .phone-credit .cover-content {
    z-index: 99;
    background: #fff;
    width: 200px;
    height: auto;
    vertical-align: middle;
    text-align: center;
    margin: 0 auto;
    position: relative;
    width: 338px;
    border-radius: 4px;
    top: calc(50% - 100px);
    padding: 5px;
  }

  /* title */

  .phone-credit .cover-content .add-title {
    text-align: left;
  }

  /* 添加表单内容 */

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

  /* 添加电话  input 样式*/

  .phone-credit .add-content .el-input {
    width: inherit;
  }

  /* 确定按钮 */

  .phone-credit .cover-content .el-button {
    display: block;
    float: right;
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
  }

  .phone-credit .el-main {
    height: calc(100% - 300px);
    padding: 0;
    padding-bottom: 10px;
    background: #ffffff;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  /* form-his */

  .phone-credit .form-his {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  /* 添加申请单电话 label*/

  .phone-credit .add-label {
    display: inline-block;
    width: 70px;
  }

  /* 表单 */

  .phone-credit .el-main .form-his .address-title {
    width: 100%;
    font-size: 18px;
    background: #ededed;
    line-height: 40px;
    display: block;
    overflow: hidden;
    background: #eef0f9;
    border: 1px solid #e6eaee;
    height: 30px;
    width: 100%;
    width: 100%;
    font-size: 16px;
    color: #1f2d3d;
    text-align: left;
    vertical-align: middle;
    line-height: 30px;
  }

  /* label */

  .phone-credit .el-form-item__label {
    width: 150px;
  }

  .phone-credit .el-form-item {
    margin-top: 5px !important;
  }

  /* 三列 */

  .phone-credit .item-column3 {
    width: 33%;
    min-width: 350px;
    float: left;
    margin-top: 13px;
  }

  /* 两列 */

  .phone-credit .item-column2 {
    width: 50%;
    min-width: 450px;
    float: left;
    margin-top: 13px;
    margin-top: 13px;
  }

  .phone-credit .item-column1 {
    width: 100%;
    float: left;
    margin-top: 13px;
  }

  /* 表单提交 */

  .phone-credit .address-submit {
    margin: 0;
    padding: 0;
    float: left;
    margin: 20px;
    width: 80%;
    text-align: right;
    margin-top: 50px;
  }

  /* input 不可编辑状态*/

  .phone-credit .el-select>.el-input {
    height: 30px;
  }

  .phone-credit .el-input__inner {
    height: 30px !important;
  }

  /* el-input width*/

  .phone-credit .el-container .el-main .form-class .el-input {
    /* 分屏 */
    min-width: 150px;
    /* 全屏 */
    max-width: 200px;
  }

  /* 表格头 */

  .phone-credit .el-header {
    padding: 0;
  }

  .phone-credit .form-his {
    font-size: 16px;
  }

  .phone-credit .form-his li .textarea-class {
    height: auto;
    float: left;
    min-width: 300px;
    padding-bottom: 10px;
  }

  .phone-credit .form-his li .textarea-class2 {
    height: auto;
    float: left;
  }

  /* 提交按钮 */

  .phone-credit .submit-class {
    text-align: left;
    margin-left: 570px;
  }


  .phone-credit .el-select:hover .el-input__inner {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
    height: 33px;
  }

  .phone-credit .el-input__inner:hover {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
    height: 33px;
  }

  .phone-credit .el-textarea__inner:hover {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
  }

  /* 更改电话征信 弹窗*/

  .phone-credit .el-dialog {
    width: 300px;
    margin-top: 15vh !important;
  }

  /* 关闭按钮 */

  .phone-credit .el-dialog__headerbtn {
    font-size: 20px;
  }

  /* 弹窗 内容 */

  .phone-credit .el-dialog__body {
    padding: 20px;
    padding-right: 30px;
  }

  /* 更改 电话征信 -- 添加电话 */

  .phone-credit .el-dialog__wrapper .el-form-item__label {
    width: 100px;
  }

  /* 添加申请单电话信息 必填 * */

  .phone-credit .left-title2 {
    line-height: 20px;
  }

  /* 电话树  选中的  字体样式*/

  .phone-credit .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content .el-tree-node__label {
    color: #0077ff;
  }

  .phone-credit .el-tree-node__content {
    height: 32px;
  }

  /* 表头 */

  .phone-credit .el-collapse,
  .el-collapse-item__wrap {
    border: none;
    width: 100%;
  }

  /* 两行  数据*/

  .phone-credit .line2-class label {
    line-height: 20px;
  }

  /* 添加 电话 title */

  .phone-credit .el-dialog__title {
    font-size: 16px;
  }


  .phone-credit .content-ul {
    width: 100%;
    height: auto;
    overflow: auto;
  }

  /* 后面是 textarea 样式*/

  .phone-credit .item-column3-2 {
    width: 66%;
  }

  .phone-credit .item-column3-2 .textarea-class2 {
    width: calc(100% - 211px);
  }

  /*  历史  */

  .phone-credit .item-column1 .el-form-item__content {
    width: calc(66% - 290px);
    border: 1px solid #d8d9ec;
    padding: 5px 10px;
    line-height: 1.5;
    font-size: 14px;
    height: 75px;
    overflow-y: auto;
    border-radius: 4px;
  }

  .phone-credit .item-column3-2 .el-form-item__content {
    width: calc(100% - 150px);
    border: 1px solid #d8d9ec;
    padding: 5px 10px;
    line-height: 1.5;
    font-size: 14px;
    height: 75px;
    overflow-y: auto;
    border-radius: 4px;
  }

  /* 两行  空  */

  .phone-credit .item-column3-2-normal .el-form-item__content {
    width: calc(100% - 150px);
    padding: 5px 10px;
    line-height: 1.5;
    font-size: 14px;
    height: 75px;
    overflow-y: auto;
    border-radius: 4px;
  }

  /* 3列 空位 */

  .item-column3-null {
    min-height: 50px;
  }

  /* 二级 hover*/

  .phone-credit .el-tree--highlight-current .el-tree-node>.el-tree-node__children :hover {
    color: green;
  }

  .phone-credit .el-tree--highlight-current .el-tree-node>.el-tree-node__content {
    color: red;
  }

  /* 二级 icon*/

  .phone-credit .el-tree-node__children .el-tree-node__content .el-tree-node__expand-icon {
    display: none;
  }

  /*二级hover改三级*/

  .phone-credit .el-tree--highlight-current .el-tree-node>.el-tree-node__children:hover .phone-credit .el-tree--highlight-current .el-tree-node>.el-tree-node__children .el-tree-node__children .el-tree-node__content {
    color: red;
  }

  /* 电话树更改  */

  .phone-credit .phone-tree {
    width: 98%;
    height: auto;
    background: #eef0f9;
    padding-left: 3px;
  }

  .phone-credit .phone-tree .el-collapse-item__header {
    padding-left: 10px;
    border-bottom: 1px solid #e6eaee;
  }

  .phone-credit .phone-tree .item-title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
    border-bottom: 1px solid #d8dce5;
  }

  .phone-credit .phone-tree .item-title:hover {
    cursor: pointer;
    color: #0077FF;
  }

  .phone-credit .phone-tree .el-collapse-item__content {
    padding-bottom: 0px;
  }

  .phone-credit .phone-tree .el-collapse-item__content:hover {
    color: #666666;
  }

</style>
