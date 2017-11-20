<!-- 电话征信 -->
<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- 左侧 导航列表 -->
      <el-aside width="200px" style="heightbackground-color: rgb(238, 241, 246)">
        <!-- 手风琴效果 -->
        <!-- no-key 每个树节点用来作为唯一标识的属性,整棵树应是唯一的 -->
        <!-- renderContent 指定渲染函数,该函数返回需要的节点区内容即可 -->
        <el-tree :data="data" :props="defaultProps" accordion no-key="id" @node-click="handleNodeClick">
        </el-tree>
        <el-button @click.native="coverShow=true">添加</el-button>
        <!-- <el-button type="text" @click="open">添加</el-button> -->
      </el-aside>
      <!-- 右侧 表单内容 -->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="head-title">
            历史调查日志
          </div>
          <!-- 列表 -->
          <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="date" label="序号">
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
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
          </el-pagination>
        </el-header>
        <!-- 表单部分 -->
        <el-main>
          <!-- 子组件 -->
          <router-link to="/AddressForm/formTag='testtag'/id='123'/phoneType='01'">  <el-button type="primary">住址电话</el-button></router-link>
          <router-view></router-view>
          <!-- 表单详情 -->
          <!-- <AddressForm formTag="testTag" id="515313" phoneType="01"></AddressForm> -->
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
            <span>电话类型:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span>电话名称:</span>
            <el-input type="text" name="" value="" placeholder=""></el-input>
          </li>
          <li>
            <span>电话号码:</span>
            <el-input type="text" name="" value="" placeholder=""></el-input>
          </li>
        </ul>
        <el-button @click.native="append">确认</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import AddressForm from "@view/PhoneCredit/Form/AddressFrom"
export default {
  data() {
    return {
      data: [{
          id: 1,
          label: '住址电话',
          children: [{
            id: 4,
            label: '010-2345687',
          }]
        },
        {
          id: 2,
          label: '单位电话',
          children: [{
            id: 5,
            label: '010-4564646',
          }, {
            id: 6,
            label: '010-5461615',
          }]
        },
        {
          id: 3,
          label: '家庭联系人',
          children: [{
            id: 7,
            label: '010-464646',
          }, {
            id: 8,
            label: '010-4646165',
          }]
        },
        {
          id: '',
          label: '紧急联系人',
          children: [{
            id: '',
            label: '010-46464'
          }]
        },
        {
          id: '',
          label: '工作证明人',
          children: [{
            id: '',
            label: '584165654'
          }]
        }
      ],
      options: [{
          value: '住址电话',
          label: '住址电话'
        },
        {
          value: '单位电话',
          label: '单位电话'
        },
        {
          value: '家庭联系人电话',
          label: '家庭联系人电话'
        },
        {
          value: '紧急联系人电话',
          label: '紧急联系人电话'
        },
        {
          value: '工作联系人电话',
          label: '工作联系人电话'
        }
      ],
      tableData: [{
          date: '20107-11-20',
          phoneType: '手机',
          checkTime: '2017-11-20',
          source: '来源',
          phoneNum: '13103588888',
          answer: '未接听',
          checkStage: '第一阶段',
          conclusion: '调查结论1'
        },
        {
          date: '20107-11-20',
          phoneType: '手机',
          checkTime: '2017-11-20',
          source: '来源',
          phoneNum: '13103588888',
          answer: '未接听',
          checkStage: '第一阶段',
          conclusion: '调查结论1'
        },
        {
          date: '20107-11-20',
          phoneType: '手机',
          checkTime: '2017-11-20',
          source: '来源',
          phoneNum: '13103588888',
          answer: '未接听',
          checkStage: '第一阶段',
          conclusion: '调查结论1'
        },
        {
          date: '20107-11-20',
          phoneType: '手机',
          checkTime: '2017-11-20',
          source: '来源',
          phoneNum: '13103588888',
          answer: '未接听',
          checkStage: '第一阶段',
          conclusion: '调查结论1'
        },
        {
          date: '20107-11-20',
          phoneType: '手机',
          checkTime: '2017-11-20',
          source: '来源',
          phoneNum: '13103588888',
          answer: '未接听',
          checkStage: '第一阶段',
          conclusion: '调查结论1'
        },
        {
          date: '20107-11-20',
          phoneType: '手机',
          checkTime: '2017-11-20',
          source: '来源',
          phoneNum: '13103588888',
          answer: '未接听',
          checkStage: '第一阶段',
          conclusion: '调查结论1'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      id: '',
      value: '',
      currentPage: 1,
      coverShow: false
    };
  },
  methods: {
    handleNodeClick(data) {
      // 点击每条数据的事件
      console.log(data);
      console.log('id:' + data.id + '\nlabel:' + data.label);
      this.id = data.id;
    },
    open() {
      // 提交 添加的电话数据
      console.log(this.id);
    },
    append(data) {
      // 点击添加方法,用过 key 来判断 添加的哪项.
      console.log(this.id);
      alert(this.id);
      this.coverShow = false;
      // const newChild = { id: id++, label: 'texttext', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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






/* element-ui tree icon 箭头*/

.el-tree-node__content>.el-tree-node__expand-icon {
  /*display: none;*/
}






/* 三角 icon */

.el-tree-node__expand-icon {
  font-size: 20px;
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
.el-aside .el-button{
  width:80px;
  margin:20px;
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

</style>
