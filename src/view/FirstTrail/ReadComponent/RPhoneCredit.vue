<!-- 电话征信  综合查询 -->
<template>
  <div class="phone-credit">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- 左侧 导航列表 -->
      <!-- width="200px" style="heightbackground-color: rgb(238, 241, 246)" -->
      <el-aside style="width:210px;">
        <!-- 手风琴效果 -->
        <!-- no-key 每个树节点用来作为唯一标识的属性,整棵树应是唯一的 -->
        <!-- renderContent 指定渲染函数,该函数返回需要的节点区内容即可 -->
        <!-- highlight-current 是否高亮当前选中项 -->
        <!-- <el-tree :data="treeData" :props="defaultProps" highlight-current expand-on-click-node default-expand-all no-key="id" :title="defaultProps" @node-click="handleNodeClick">
        </el-tree> -->
        <!-- 更改电话树 start-->
        <el-collapse class="phone-tree" v-model="activeTrees">
          <el-collapse-item :title="treeData[0].label" name="1">
            <div v-for="item in treeData[0].children">
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
            <div v-for="item in treeData[1].children">
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
            <div v-for="item in treeData[2].children">
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                  <br/>
                  <br/> {{item.children[0].relation}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="treeData[3].label" name="4">
            <div v-for="item in treeData[3].children">
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                  <br/>
                  <br/> {{item.children[0].relation}}
                </div>
                <div class="item-title" @click="handleNodeClick(item)">
                  {{item.label}}
                </div>
              </el-tooltip>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="treeData[4].label" name="5">
            <div v-for="item in treeData[4].children">
              <el-tooltip effect="dark" placement="right-end">
                <div slot="content">
                  {{item.children[0].label}}
                  <br/>
                  <br/> {{item.children[0].relation}}
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
        <el-button type="primary" @click.native="dialogFormVisible=true" v-show="addBtnShow">添加</el-button>
      </el-aside>
      <!-- 右侧 表单内容 -->
      <el-container>
        <el-main style="overflow-y: auto;overflow-x:hidden;font-size:14px;">
          <!-- 默认的背景 -->
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
                    <el-table :data="listData.recordList" height="250" border style="" @row-dblclick="rowDbClick" v-loading="mobileLoading" highlight-current-row>
                      <el-table-column type="index" label="序号" min-width="60">
                      </el-table-column>
                      <el-table-column prop="phoneTypeDes" label="电话类型" min-width="100">
                      </el-table-column>
                      <el-table-column prop="checkTime" label="调查时间" min-width="180">
                      </el-table-column>
                      <el-table-column prop="sourceDes" label="来源" min-width="150">
                      </el-table-column>
                      <el-table-column prop="phoneNum" label="电话号码" min-width="120">
                      </el-table-column>
                      <el-table-column prop="answerDes" label="接听情况" min-width="100">
                      </el-table-column>
                      <el-table-column prop="checkStageDes" label="调查阶段" min-width="80">
                      </el-table-column>
                      <el-table-column prop="conclusion" label="调查结果" min-width="100" show-overflow-tooltip>
                      </el-table-column>
                    </el-table>
                  </div>

                  <!-- 分页 -->
                  <div class="page_top_bottom_10">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 15, 20]"
                      :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listData.totalRecord"
                      v-show="listData.totalRecord>0">
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
            <AddressForm class="form-his" v-if="formShow && phoneType =='01'" :custName="custName" :phoneNum="phoneNum" :applyId="applyId"
              :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData" :isFull.sync="isFull"></AddressForm>
            <!-- 住址电话 - 历史 -->
            <AddressHis class="form-his" v-if="hisShow && phoneType == '01'" :mobileData="newList?newList:mobileData" :isFull.sync="isFull"></AddressHis>
            <!-- 单位电话 - 表单 -->
            <CompanyForm class="form-his" v-if="formShow && phoneType=='02'" :custName="custName" :phoneNum="phoneNum" :applyId="applyId"
              :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData" :isFull.sync="isFull"></CompanyForm>
            <!-- 单位电话 - 历史 -->
            <CompanyHis class="form-his" v-if="hisShow && phoneType=='02'" :comData="newList?newList:comData" :isFull.sync="isFull"></CompanyHis>
            <!-- 家庭联系人 - 表单 -->
            <FamilyForm class="form-his" v-if="formShow && phoneType=='03'" :custName="custName" :phoneNum="phoneNum" :applyId="applyId"
              :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData" :isFull.sync="isFull"></FamilyForm>
            <!-- 家庭联系人 - 历史 -->
            <FamilyHis class="form-his" v-if="hisShow && phoneType=='03'" :familyData="newList?newList:familyData" :isFull.sync="isFull"></FamilyHis>
            <!-- 紧急联系人 - 表单 -->
            <HurryForm class="form-his" v-if="formShow && phoneType=='04'" :custName="custName" :phoneNum="phoneNum" :applyId="applyId"
              :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData" :isFull.sync="isFull"></HurryForm>
            <!-- 紧急联系人 - 历史 -->
            <HurryHis class="form-his" v-if="hisShow && phoneType=='04'" :hurryData="newList?newList:hurryData" :isFull.sync="isFull"></HurryHis>
            <!-- 工作证明人 - 表单 -->
            <WorkForm class="form-his" v-if="formShow && phoneType=='05'" :custName="custName" :phoneNum="phoneNum" :applyId="applyId"
              :formId.sync="formId" @updateList="queryTelLogByPage" @updateTree="fetchData" :isFull.sync="isFull"></WorkForm>
            <!-- 工作证明人 - 历史 -->
            <WorkHis class="form-his" v-if="hisShow && phoneType=='05'" :workData="newList?newList:workData" :isFull.sync="isFull"></WorkHis>
            <!-- 子组件 -->
            <!-- <router-link to="/AddressForm/formTag='testtag'/id='123'/phoneType='01'">
            <el-button type="primary">住址电话</el-button>
          </router-link> -->
            <!-- <router-view></router-view> -->
          </div>
        </el-main>
      </el-container>
    </el-container>
    <!-- 更改的 添加电话选项 -->
    <el-dialog title="添加申请单电话信息" :visible.sync="dialogFormVisible" :modal="false" width="330px">
      <el-form>
        <span class="require-icon" style="left:20px;line-height:38px;">*</span>
        <el-form-item label="电话类型：" :label-width="addTellFormLabelWidth" prop="addTelType">
          <el-select v-model="addTelType" placeholder="请选择">
            <el-option v-for="item in telTypes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <span class="require-icon" style="left:20px;line-height:38px;">*</span>
        <el-form-item label="电话名称：" :label-width="addTellFormLabelWidth" prop="addTelName">
          <el-input v-model="addTelName" auto-complete="off"></el-input>
        </el-form-item>
        <span class="require-icon" style="left:50px;line-height:38px;" v-show="(addTelType!='01'|| addTelType!='02') && (addTelType=='03' || addTelType=='04' || addTelType=='05')">*</span>
        <el-form-item label="关系：" v-show="(addTelType!='01'|| addTelType!='02') && (addTelType=='03' || addTelType=='04' || addTelType=='05')"
          :label-width="addTellFormLabelWidth">
          <el-select v-model="addRelationShip" placeholder="请选择">
            <el-option v-for="item in relationShips" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <span class="require-icon" style="left:20px;line-height:38px;">*</span>
        <el-form-item label="电话号码：" :label-width="addTellFormLabelWidth" prop="addTelNum">
          <el-input auto-complete="off" v-model="addTelNum"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="append" type="primary" v-show="active" :loading="isLoading">{{loadingTitle}}</el-button>
        <el-button type="primary" disabled v-show="active==false">确认</el-button>
      </div>
    </el-dialog>
    <!-- 点击 添加出现的弹窗 -->
    <div class="cover-view" v-show="false">
      <div class="cover-content">
        <el-tag closable @close="coverShow=false"></el-tag>
        <div class="add-title">
          <span>添加申请单电话信息</span>
        </div>
        <ul class="add-content">
          <li>
            <span class="add-label">
              <span class="require-icon">*</span>电话类型：</span>
            <el-select v-model="addTelType" placeholder="请选择">
              <el-option v-for="item in telTypes" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span class="add-label">
              <span class="require-icon">*</span>电话名称：</span>
            <el-input type="text" name="" v-model="addTelName" value="" placeholder=""></el-input>
          </li>
          <!--  v-show="telType='01'|| telType='02'" -->
          <li v-show="(addTelType!='01'|| addTelType!='02') && (addTelType=='03' || addTelType=='04' || addTelType=='05')">
            <span class="add-label">
              <span class="require-icon">*</span>关系：</span>
            <el-select v-model="addRelationShip" placeholder="请选择">
              <el-option v-for="item in relationShips" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span class="add-label">
              <span class="require-icon">*</span>电话号码：</span>
            <el-input type="text" name="" v-model="addTelNum" value=""></el-input>
          </li>
          <li>
            <el-button @click.native="append" type="primary" v-show="active" :loading="isLoading">{{loadingTitle}}</el-button>
            <el-button type="primary" disabled v-show="active==false">确认</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  // 电话征信 - 住址电话 表单
  import AddressForm from '../detailComponent/AddressForm.vue'
  // 电话征信 - 住址电话 详情
  import AddressHis from '../detailComponent/AddressHis.vue'
  // 电话征信 - 单位电话 表单 CompanyForm
  import CompanyForm from '../detailComponent/CompanyForm'
  // 电话征信 - 单位电话  详情 CompanyHis
  import CompanyHis from '../detailComponent/CompanyHis'
  // 电话征信 - 家庭联系人 表单
  import FamilyForm from '../detailComponent/FamilyForm'
  // 电话征信 - 家庭联系人 详情
  import FamilyHis from '../detailComponent/FamilyHis'
  // 电话征信 紧急联系人 表单
  import HurryForm from '../detailComponent/HurryForm'
  // 电话征信 紧急联系人 历史
  import HurryHis from '../detailComponent/HurryHis'
  // 电话征信 工作证明人 表单
  import WorkForm from '../detailComponent/WorkForm'
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
        telTypes: [{
            value: '01',
            label: '住址电话'
          },
          {
            value: '02',
            label: '单位电话'
          },
          {
            value: '03',
            label: '家庭联系人电话'
          },
          {
            value: '04',
            label: '其他联系人电话'
          },
          {
            value: '05',
            label: '工作证明人电话'
          }
        ],
        // 添加的电话类型
        relationShips: [{
            value: '01',
            label: '夫妻'
          },
          {
            value: '02',
            label: '父母'
          },
          {
            value: '03',
            label: '子女'
          },
          {
            value: '04',
            label: '兄弟'
          },
          {
            value: '05',
            label: '姐妹'
          },
          {
            value: '06',
            label: '兄妹'
          },
          {
            value: '07',
            label: '姐弟'
          },
          {
            value: '08',
            label: '朋友'
          },
          {
            value: '09',
            label: '同事'
          },
          {
            value: '10',
            label: '房东'
          },
          {
            value: '11',
            label: '亲属'
          },
          {
            value: '12',
            label: '其他'
          }
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
        id: '', // 历史入参 
        pageNum: 1, // 当前页数
        pageSize: 10, // 每页条数
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
        hisId: '',
        hisPhoneType: '',
        // 改造 , 通过 电话类型 , formShwo/hisShow 来控制所有的 表单/历史显示
        formShow: false,
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
        formId: '', // 传给表单的  id
        dialogFormVisible: false, // 电话征信 点击添加
        addTellForm: {
          applyId: '',
          addTelNum: '',
          addTelName: '',
          addRelationShip: '',
          addTelType: '',
          creatorCode: ''
        }, // 添加电话征信 表单数据
        // addTellRules: {
        //   addTelType: [
        //     { require: true, trigger: 'blue' }
        //   ],
        //   addTelNum: [
        //     { require: true, trigger: 'blue' }
        //   ],
        //   addTelName: [
        //     { require: true, trigger: 'blue' },
        //     { mix:1, max:20, message:'长度在20个字符内', rigger:'blur'}
        //   ]
        // },
        addTellFormLabelWidth: '80px', // 添加电话 表单 label-width
        isInterFlag: false, // 是否是内匹跳转的查看详情
        activeTrees: ["1", "2", "3", "4", "5"],
        addBtnShow: false, // 标志 添加电话按钮是否显示
        isLoading: false, // 审批按钮 是否加载状态
        loadingTitle: '确认', // 默认btn title
        judgeFlag: '',
        taskInWaitting: ''
      }
    },
    props: ['isFull', 'SplitS'],
    mounted() {
      // 组件 创建 估计完成后获取数据
      // 此时 data 已经被 observed 了
      // 测试数据
      // 调用历史数据
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag")) //初审-匹配查看
      if (this.MatchFlag.MatchFlag == 'internal') {
        //  var  taskInWaitting = JSON.parse(localStorage.getItem('internalObj'));
        this.taskInWaitting = JSON.parse(localStorage.getItem('internalObj'));

      } else if (this.MatchFlag.MatchFlag == 'Query') {
        //  var taskInWaitting = JSON.parse(localStorage.getItem("Query")) //综合查询
        this.taskInWaitting = JSON.parse(localStorage.getItem("Query")) //综合查询
      }
      this.applyId = this.taskInWaitting.matchApplyId;
      this.applySubNo = this.taskInWaitting.applySubNo;
      // 电话树数据
      this.fetchData();

      // 取内匹存储的标志
      // var internalObj = JSON.parse(localStorage.getItem('internalObj'))
      // if (internalObj) {
      //   this.isInterFlag = internalObj.isInterFlag;

      // }

      // 页面挂载 判断 电话树添加按钮 显示/隐藏
      // 只处理隐藏的情况
      // 内匹查看的时候   左分屏
      // if ((this.isInterFlag && this.isInterFlag == true) || this.SplitS == 'left') {
      //   this.addBtnShow = false;

      // }
      // 复议不显示添加  05 专员   06 主管 03反欺诈专员 04反欺诈主管
      // if (this.judgeFlag == '05' || this.judgeFlag == '06' || this.judgeFlag == '03' || this.judgeFlag == '04') {
      //   this.addBtnShow = false;
      // }
    },
    watch: {
      // 监听属性  电话类型
      // telType: function(val) {
      //   if (this.telType == '01' || this.telType == '02') {
      //     this.addRelationShip = '';
      //   }
      // },
      // 监听 添加电话 页面是否显示
      dialogFormVisible: function () {
        if (!this.coverShow) {
          this.addTelType = '';
          this.addTelName = '';
          this.addRelationShip = '';
          this.addTelNum = '';
        }
      },
      // // 监听 子组件的点击重新请求
      // treeFlag: function() {
      //   this.fetchData();
      // },
      // listFlag: function() {

      // }

      // 添加电话  电话类型
      addTelType: function (value) {
        if (((this.addTelType == '01' || this.addTelType == '02') && this.addTelType.length > 0 && this.addTelName.length >
            0 && this.addTelRex) ||
          ((this.addTelType == '03' || this.addTelType == '04' || this.addTelType == '05') && this.addTelType.length >
            0 && this.addTelName.length > 0 && this.addRelationShip.length > 0 && this.addTelRex)
        ) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
      // 电话名称
      addTelName: function (value) {
        if (((this.addTelType == '01' || this.addTelType == '02') && this.addTelType.length > 0 && this.addTelName.length >
            0 && this.addTelRex) ||
          ((this.addTelType == '03' || this.addTelType == '04' || this.addTelType == '05') && this.addTelType.length >
            0 && this.addTelName.length > 0 && this.addRelationShip.length > 0 && this.addTelRex)
        ) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
      // 关系
      addRelationShip: function (value) {
        //  有关系 判断 
        //  无关系 判断
        if (((this.addTelType == '01' || this.addTelType == '02') && this.addTelType.length > 0 && this.addTelName.length >
            0 && this.addTelRex) ||
          ((this.addTelType == '03' || this.addTelType == '04' || this.addTelType == '05') && this.addTelType.length >
            0 && this.addTelName.length > 0 && this.addRelationShip.length > 0 && this.addTelRex)
        ) {
          this.active = true;
        } else {
          this.active = false;
        }

      },

      // 添加电话  电话校验
      addTelNum: function (value) {
        this.addTelRex = /^(1)\d{10}$/i.test(value) ||
          /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        // 判断 显示 电话格式
        if (((this.addTelType == '01' || this.addTelType == '02') && this.addTelType.length > 0 && this.addTelName.length >
            0 && this.addTelNum.length >= 11 && !this.addTelRex) ||
          ((this.addTelType == '03' || this.addTelType == '04' || this.addTelType == '05') && this.addTelType.length >
            0 && this.addTelName.length > 0 && this.addRelationShip.length > 0 && this.addTelNum.length >= 11 && !
            this.addTelRex)
        ) {
          this.active = false;
          this.$message({
            message: '格式不正确,请使用下面的格式:区号-电话号码或者11位手机号',
            type: 'warning'
          });
          return;
        }


        if (((this.addTelType == '01' || this.addTelType == '02') && this.addTelType.length > 0 && this.addTelName.length >
            0 && this.addTelRex) ||
          ((this.addTelType == '03' || this.addTelType == '04' || this.addTelType == '05') && this.addTelType.length >
            0 && this.addTelName.length > 0 && this.addRelationShip.length > 0 && this.addTelRex)
        ) {
          this.active = true;
        } else {
          this.active = false;
        }


      },
      formShow: function () {
        if (this.formShow) {
          $('.el-main').css("overflow-y", 'auto');

        }
      }
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
        if (this.isInterFlag == true || this.SplitS != 'right' || this.hisShow) {
          // 点击每条tree数据的事件
          this.treeId = data.id;
          if (data.id.length > 2) {
            // 点击数据展示历史记录  列表
            this.hisListShow = true;
            // 历史数据不显示
            this.hisShow = false;
            // 请求历史调查日志
            this.phoneType = data.telType;
            // 客户姓名
            this.custName = data.telName;
            // 电话号码
            this.phoneNum = data.telNum;
            this.queryTelLogByPage();
          }
        } else if (this.isInterFlag == false || this.SplitS == 'right') {
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
            this.formShow = true;
            this.hisShow = false;
            // 编辑的时候 历史调查日志不展开
            this.activeNames = [];
          }
        }

        // 点击的时候清空  
        this.formId = '';
      },
      queryTelLogByPage() {
        // 获取 历史调查日志 
        // /creTelResearchHis/queryByPage
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
            if (res.data.message && res.data.page.recordList && res.data.page.recordList.length > 0) {
              if (this.formShow == true) {
                this.hisShow = false;
              } else {
                this.hisShow = true;
              };
              this.newList = res.data.message;
            }
          }

        })
      },
      append(data) {
        this.isLoading = true;
        this.loadingTitle = '提交中';

        // 点击添加方法,用过 key 来判断 添加的哪项.
        // this.coverShow = false;

        // 点击添加 提交数据 

        // 判断必填

        this.post('/creTelInfo/addTel', {
          "creTelInfo": {

            "applyId": this.applyId,
            "telNum": this.addTelNum,
            "telName": this.addTelName,
            "telType": this.addTelType,
            // 登录人编号
            "creatorCode": this.userCode,
            "relationShip": this.addRelationShip // 关系
          },
          // "applySubNo": '201504130173041858'
          "applySubNo": this.applySubNo
        }).then(res => {
          // 关闭 弹窗
          this.dialogFormVisible = false;
          this.isLoading = false;
          this.loadingTitle = '确认';
          if (res.statusCode == '200') {
            this.$message({
              type: 'success',
              message: res.msg
            });
            // 点击提交之后 重新请求 电话树
            this.fetchData();
          } else
            this.$message({
              type: 'warning',
              message: res.msg
            });
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
        this.formShow = false;
        this.hisShow = false;
        // 历史列表  点击每一行
        this.id = row.id;
        // 请求历史数据
        // this.queryHomeTel();
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
          phoneType: this.phoneType
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
  .phone-credit {
    width: 100%;
    height: 100%;
  }

  .phone-credit .el-container {
    width: 100%;
    height: 100%;

    /*background: url(.../../../static/images/3C281C6A-532B-4A55-A9BF-F142E9F09063@3x.png) no-repeat;*/
  }

  .phone-credit el-header {
    background-color: #B3C0D1;
    /*color: #333;*/
    height: 40px !important;
    line-height: 40px;
  }

  .phone-credit .el-aside {
    /*color: #333;*/
    height: 100%;
    border: 1px solid #e6eaee;
    /*border-radius: 4px;*/
    width: 250px !important;
    /*height: 321px;*/
    background: #eef0f9;
  }






  /* 添加电话 按钮 */

  .phone-credit .el-aside .el-button {
    width: 80px;
    margin: 20px;
    margin-left: 60px;
    /*background: #409eff;*/
    color: white;
    float: right;
    /*  color: #fff;
  background-color: #0077FF;
  border-color: #0077FF;*/
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
    /*height: 200px;*/
    height: auto;
    vertical-align: middle;
    text-align: center;
    margin: 0 auto;
    position: relative;
    width: 338px;
    border-radius: 4px;
    top: calc( 50% - 100px);
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
    /*min-height: 350px !important;*/
    /*height: 40px !important;*/
    /*line-height: 40px;*/
    /*overflow: hidden;*/
  }

  .phone-credit .el-main {
    height: calc(100% - 300px);
    padding: 0;
    padding-bottom: 10px;
    /*overflow: auto;*/
    /*background:url(.../../../static/images/3C281C6A-532B-4A55-A9BF-F142E9F09063@1x.png) center no-repeat;"*/
    background: #ffffff;
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
    overflow-y: auto;
  }

  .phone-credit .el-header .head-title {
    /*  font-size: 18px;
  width: 100%;
  height: 40px;
  text-align: left;
  background: #ededed;
  vertical-align: middle;
  line-height: 40px;*/
    /*padding-left: 20px;*/
    /*background: #eef0f9;
  border: 1px solid #e6eaee;*/
    /*border-radius:23px;*/
    /*width: 1517px;*/
    /*height: 38px;
  width: 100%;*/
    /* font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #1f2d3d;
  letter-spacing: 0.11px;
  text-align: left;
  vertical-align: middle;
  line-height: 38px;*/
  }






  /* 表格分页 */

  /* .phone-credit .el-pagination {
  margin-top: 10px;
  width: 100%;
  text-align: center;
} */

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
    margin-bottom: 10px;
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
    margin-bottom: 5px !important;
  }






  /* 三列 */

  .phone-credit .item-column3 {
    width: 33%;
    min-width: 350px;
    float: left;
    margin: 0;
    margin-bottom: 10px;
  }






  /* 两列 */

  .phone-credit .item-column2 {
    width: 50%;
    min-width: 450px;
    float: left;
    margin: 0;
    min-height: 50px;
    margin-bottom: 10px;
  }

  .phone-credit .item-column1 {
    width: 100%;
    /*min-width: 1366px;*/
    float: left;
    margin: 0;
  }






  /*.phone-credit .item-column1 textarea {
  margin-left: 20px;
}*/

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

  .dis-input {}

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






  /* 历史调查日志 收缩 title */

  .phone-credit .el-collapse-item__header {
    background: #eef0f9 !important;
    /*font-family: PingFangSC-Regular;*/
    font-size: 16px;
    color: #1f2d3d;
    /*letter-spacing: 0.11px;*/
    text-align: left;
    /*padding-left: 10px;*/
    height: 40px;
    line-height: 40px;
  }






  /* 折叠 头 箭头样式*/

  .phone-credit .el-collapse-item__header .el-collapse-item__arrow {
    padding-right: 20px;
  }






  /*  表单样式 */

  .phone-credit .left-title {
    float: left;
    width: 140px;
    line-height: 30px;
    min-height: 30px;
    padding-right: 5px;
    text-align: right;
    /* 配合必选 */
    position: relative;
    font-size: 14px;
    /*letter-spacing: 1.49px;*/
  }

  .phone-credit .form-his {
    font-size: 16px;
  }

  /* .phone-credit .form-his ul {
  padding-left: 23px;
} */

  .phone-credit .form-his li {
    /*padding: 10px;*/
    /*min-height: 30px;*/
  }

  .phone-credit .form-his li .textarea-class {
    height: auto;
    float: left;
    /*width: 795px;*/
    min-width: 300px;
    /*min-width: 500px;*/
    padding-bottom: 10px;
  }

  .phone-credit .form-his li .textarea-class2 {
    height: auto;
    float: left;
    /*min-width: 300px;*/
    /*padding-bottom: 10px;*/
  }






  /* 提交按钮 */

  .phone-credit .submit-class {
    text-align: left;
    margin-left: 570px;
  }






  /* 折叠面板头部背景色和icon */

  .phone-credit .icon_hat {
    padding: 10px 10px 10px 13px;
    vertical-align: middle;
  }

  .phone-credit .headFont {
    font-size: 16px;
  }

  .phone-credit .el-select:hover .el-input__inner {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
    /*width: 258px;*/
    height: 33px;
  }






  /*.phone-credit .el-select .el-input.is-disabled:hover .el-input__inner {
  background: #f8f9fd;
  border: 1px solid #bfcbd9;
  border-radius: 6px;
  width: 258px;
  height: 33px;
}*/

  .phone-credit .el-input__inner:hover {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
    /*width: 258px;*/
    height: 33px;
  }

  .phone-credit .el-textarea__inner:hover {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
    /*width: 807px;
  height: 102px;*/
  }






  /*add-content*/

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






  /* el-input 输入框 */

  .phone-credit .el-dialog__wrapper .el-input {}






  /* 添加申请单电话信息 必填 * */

  .phone-credit .left-title2 {
    line-height: 20px;
  }






  /* 必填 * */

  .phone-credit .require-icon {
      width: 0px;
    float: left;
  }






  /* 电话树  选中的  字体样式*/

  .phone-credit .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content .el-tree-node__label {
    /*color:#1f2d3d;*/
    color: #0077ff;
    /*color:red;*/
  }

  .phone-credit .el-tree-node__content {
    height: 32px;
  }






  /* 表头 */

  .phone-credit .el-collapse,
  .phone-credit .el-collapse-item__header,
  .el-collapse-item__wrap {
    border: none;
    width: 100%;
  }

  .phone-credit .header-class .phone-credit .el-select:hover .el-input__inner {}

  .phone-credit .header-class .el-container .el-main .el-input {}






  /* 两行  数据*/

  .phone-credit .line2-class label {
    line-height: 20px;
  }






  /* 历史调查日志  右箭头  */

  .phone-credit .el-collapse-item__header .el-collapse-item__arrow {
    padding: 0;
  }

  /* .phone-credit .el-collapse-item__arrow {
  line-height: 40px
} */

  /* 添加 电话 title */

  .phone-credit .el-dialog__title {
    font-size: 16px;
  }


  .phone-credit .content-ul {
    width: 100%;
    /*height: 100%;*/
    height: auto;
    overflow: auto;
  }






  /* 后面是 textarea 样式*/

  .phone-credit .item-column3-2 {
    width: 66%;
    /*border: 1px solid;*/
  }






  /* textarea */

  .phone-credit .item-column3-2 .textarea-class2 {
    width: calc( 100% - 211px);
  }






  /* 气泡 */

  .el-tooltip__popper {
    max-width: 400px;
    height: auto;
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
    /*border: 1px solid #d8d9ec;*/
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






  /* 默认隐藏 三级  树*/

  .phone-credit .el-tree-node.is-expanded .el-tree-node__children .el-tree-node .el-tree-node__children .el-tree-node {
    /*display: none;*/
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
