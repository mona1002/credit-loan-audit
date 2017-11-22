<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 上网查询信息 -->
      <el-collapse-item title=" 上网查询信息" name="1">
        <div class="CreditForm_InternetInf">
          <ul class="CreditForm_InternetInf_ul_left">
            <li>
              <label class="InternetInf_left_label">客户在法网是否有被执行信息：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">单位在法网是否有被执行信息：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">客户在失信网是否有失信记录：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">单位在失信网是否有失信记录：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网上搜索借款人手机是否有异常：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位名称是否有异常：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位电话是否有异常：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网上搜索借款人现居住地址和房产地址是否有异常：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位地址是否有异常：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">当地工商网查询企业基本信息中是否有登记：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_left_label">客户工作单位在全国组织代码查询中是否存在：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li>
              <label class="InternetInf_right_label"> 执行信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 失信记录说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
             <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item title=" 核实身份" name="2">
        <div class="CreditForm_CheckId">
          <ul class="CreditForm_CheckId_ul_left">
            <li>
              <label class="CheckId_left_label">接听者是否是借款人本人：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li>
              <label class=" CheckId_right_label "> 接听说明： </label>
             <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息 -->
      <el-collapse-item title=" 工作信息" name="3">
        <div class="CreditForm_WorkInfs">
          <ul class="CreditForm_WorkInfs_ul_left">
            <li>
              <label class="WorkInfs_left_label left_margin">工作单位：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">所属行业：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">职位级别：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li class="company_address_select">
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 所在部门： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 入职时间： </label>
           <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 工资发放形式： </label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
             <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 私营企业信息 -->
      <el-collapse-item title="私营企业信息" name="4">
        <div class="CreditForm_CompanyInfs">
          <ul class="CreditForm_CompanyInfs_ul_left">
            <li>
              <label class="CompanyInfs_left_label left_margin">企业类型：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">注册资金[万元]：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">占股比例：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">月还款额/租金[万元]：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">营业面积：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin">企业经营项目：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">近一年利润[万元]：</label>
              <span class="detail_inf"  > </span>
            </li>
           
      
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">第一供销商：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 公司注册时间： </label>
          <span class="detail_inf"  > </span>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 经营场所： </label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 员工人数： </label>
            <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 每月净利润[万元]： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 第一分销商： </label>
             <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 家庭信息 -->
      <el-collapse-item title="家庭信息" name="5">
        <div class="CreditForm_FamilyInf">
          <ul class="CreditForm_FamilyInf_ul_left">
            <li>
              <label class="FamilyInf_left_label">婚姻状况：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有子女：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">父母是否在世：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有兄弟姐妹：</label>
              <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">个人/家庭月开销[元]：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
          <ul class="CreditForm_FamilyInf_ul_right">
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 是否有兄弟姐妹备注： </label>
             <span class="detail_inf"  > </span>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 可以承受的月还款[元]： </label>
             <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 居住情况 -->
      <el-collapse-item title="居住情况" name="6">
        <div class="CreditForm_live">
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_left_label">同住者关系：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核对现住址 -->
      <el-collapse-item title="核对现住址" name="7">
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li>
              <label class="check_reside__left_label">现住址：</label>
              <span><span class="detail_inf"  > </span> 北京市北京市延庆县宫本武藏 </span>
            </li>
            <li>
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <span class="detail_inf"  > </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item title="初审结论" name="8">
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">初审结果评价：</p>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
          </el-input>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-button type="primary" class="btn" @click="CFsave">确认</el-button>
    <button @click="test">test</button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        options: [{
            value: 'yes',
            label: '是'
          }, {
            value: 'no',
            label: '否'
          },
          // {
          //   value: '选项3',
          //   label: '蚵仔煎'
          // },
        ],
        value: '',
        value1: '', // 入职时间-日期选择器
        form: {
          desc: '', //上网查询信息 右侧textarea框绑定值
        },
        textarea: '', //textarea绑定的值
      }
    },
    methods: {
      test(){
      console.log("post");
        
          this.post("/loginCookie", {
        // id:"bb30607c-b5aa-4915-9474-460e099a33e8",
         username: '2',
            password: '1'
      }).then(res => {
        console.log(res);
      })
      //   post('/loginCookie', {
      //       username: '2',
      //       password: '1'
      //     })
      //     .then(res => {
      //       console.log(res)
      //     });
      // .catch(err=>{
      //         reject(err)
      //       })
      },
      handleChange(tab, event) {
        console.log(tab, event);
      },
      NewPage(ind) { // tab1-------------------右键菜单栏 li[0] 点击事件
        console.log(ind);
        switch (ind) {
          case 0:
            window.open("http://zhixing.court.gov.cn/search/");
            break;
          case 1:
            window.open("http://shixin.court.gov.cn/");
            break;
          case 2:
            window.open("https://www.baidu.com");
            break;
          case 3:
            window.open("http://www.nacao.org.cn/portal/publish/index.html");
            break;
          case 4:
            window.open("https://www.tianyancha.com/");
            break;
        }
        // this.rightList = false;
      },
      CFsave() {
        console.log("提交信息")
      }
    },
    mounted(){
      // post
      //  this.post("/loginCookie", {
      //   // id:"bb30607c-b5aa-4915-9474-460e099a33e8",
      //    username: '2',
      //       password: '1'
      // }).then(res => {
      //   console.log(res);
      // })
      // get
      // this.get("/admin/admins").then(response => {
      //   // axios 请求
      //   console.info(response.data);
      // });



      //  this.post("/creauditInfo/queryCreauditInfoObj", {
      //   id:"bb30607c-b5aa-4915-9474-460e099a33e8",
      // }).then(res => {
      //   console.log(res);
      // }).catch(err=>{
      //         reject(err)
      //       })
      // ;
//  this.post("/creauditInfo/queryCreauditInfoObj", {
//         id:"bb30607c-b5aa-4915-9474-460e099a33e8",
//       }).then(res => {
//         console.log(res);
//       });


    }
  }

</script>

<style scope>
  /* 公共 */

  .one_input {
    width: 70%;
  }
  /* 工作信息部分-公共 */

  .left_margin {
    /* 一行一条 */
    width: 25%;
  }

  .left_margin_half_one {
    /* 一行两条 */
    width: 50%;
  }

  .left_margin_half_two {
    width: 50%;
  }
  /* 各自部分 */

  .CreditForm {
    min-width: 1366px;
  }
  /* 上网查询信息 */

  .CreditForm_InternetInf_ul_left,
  .CreditForm_InternetInf_ul_right,
  .CreditForm_CheckId_ul_left,
  .CreditForm_CheckId_ul_right,
  .CreditForm_FamilyInf_ul_left,
  .CreditForm_FamilyInf_ul_right,
  .CreditForm_live_ul_left,
  .CreditForm_live_ul_right,
  .CreditForm_check_reside_ul_left {
    /* border: 1px solid green; */
    float: left;
    width: 33%;
  }

  .InternetInf_left_label,
  .InternetInf_right_label,
  .CheckId_left_label,
  .CheckId_right_label,
  .FamilyInf_left_label,
  .FamilyInf_right_label,
  .live_left_label,
  .live_right_label,
  .check_reside__left_label,
  .CreditForm_result_p_label {
    display: inline-block;
    width: 50%;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid yellow; */
    text-align: right;
  }

  /* 单独设置-家庭信息-右侧li上面的margin空行 */

  .CreditForm_FamilyInf_ul_right {
    margin-top: 135px;
  }

  .InternetInf_left_label:hover {
    color: red;
  }
  /* 初审结论-上边距 */

  .CreditForm_result {
    margin-top: 50px;
  }
  /*  初审结论-单独设置 p 宽度 */

  .CreditForm_result_p_label {
    width: 16.5%;
    height: 100px;
  }
  /* 工作信息，私营企业 部分（三行） */

  .CreditForm_WorkInfs_ul_left,
  .CreditForm_CompanyInfs_ul_left {
    /* border: 1px solid green; */
    width: 66%;
    float: left;
  }

  .CreditForm_WorkInfs_ul_left li:nth-of-type(1),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(8),
  .CreditForm_WorkInfs_ul_left li:last-child,
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(1),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(6) {
    width: 100%;
  }

  .CreditForm_WorkInfs_ul_left li:nth-of-type(2),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(3),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(4),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(5),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(6),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(7), 
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(2),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(3),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(4),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(5),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(7),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(8)
   {
    width: 50%;
  }

  .CreditForm_WorkInfs_ul_right,
  .CreditForm_CompanyInfs_ul_right {
    /* border: 1px solid green; */
    width: 33%;
    float: left;
  }

  .CreditForm_WorkInfs .CreditForm_WorkInfs_ul_left li,
  .CreditForm_CompanyInfs_ul_left,
  .CreditForm_CompanyInfs_ul_left li {
    float: left;
  }
  /* 工作信息-左侧-两行-第二行 */

  .WorkInfs_left_label,
  .CompanyInfs_left_label {
    display: inline-block;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid red; */
    text-align: right;
  }
  /* 家庭信息-右侧label宽度单独设置 */

  .family_left_margin_half_two {
    width: 50%;
    /* border: 1px solid red;     */
  }
  /* 确认按钮 */

  .btn {
    margin-left: 1200px;
    margin-top: 100px;
  }
/* 信息展示样式 */
.detail_inf{
  display: inline-block;
  width:49%;
  overflow: hidden;
  /* border: 1px solid orange;
  background: yellowgreen; */
}
</style>
