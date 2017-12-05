<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 上网查询信息 -->
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">上网查询信息</span>
        </template>
        <div class="CreditForm_InternetInf">
          <ul class="CreditForm_InternetInf_ul_left">
            <li>
              <label class="InternetInf_left_label">客户在法网是否有被执行信息：</label>
              <label class="detail_inf">{{this.FormData.wbeexEcutedtext}} </label>
            </li>
            <li>
              <label class="InternetInf_left_label">单位在法网是否有被执行信息：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomtext}} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">客户在失信网是否有失信记录：</label>
              <span class="detail_inf">{{this.FormData.wnetEcutedBreatext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">单位在失信网是否有失信记录：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomBreatext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网上搜索借款人手机是否有异常：</label>
              <span class="detail_inf">{{this.FormData.wnetPhonetext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位名称是否有异常：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomNametext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位电话是否有异常：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomPhonetext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网上搜索借款人现居住地址和房产地址是否有异常：</label>
              <span class="detail_inf">{{this.FormData.wnetAddrandEstatetext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位地址是否有异常：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomAddresstext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">当地工商网查询企业基本信息中是否有登记：</label>
              <span class="detail_inf">{{this.FormData.wnetCompanytext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">客户工作单位在全国组织代码查询中是否存在：</label>
              <span class="detail_inf">{{this.FormData.wnetAddrstatetext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li>
              <label class="InternetInf_right_label"> 执行信息说明： </label>
              <span class="detail_inf">{{this.FormData.beexEcutedtxt}} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomtxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 失信记录说明： </label>
              <span class="detail_inf">{{this.FormData.wnetEcutedBreatxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomBreatxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetPhonetxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomNametxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomPhonetxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetAddrandEstatetxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomAddresstxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetCompanytxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetAddrstatetxt }} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item  name="2">
         <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">核实身份</span>
        </template>
        <div class="CreditForm_CheckId">
          <ul class="CreditForm_CheckId_ul_left">
            <li>
              <label class="CheckId_left_label">接听者是否是借款人本人：</label>
              <span class="detail_inf">{{this.FormData.iisselftext }} </span>
            </li>
            <li>
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <span class="detail_inf">{{this.FormData.iloanBeforetext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li>
              <label class=" CheckId_right_label "> 接听说明： </label>
              <span class="detail_inf">{{this.FormData.iisselftxt }} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息 -->
      <el-collapse-item name="3">
         <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">工作信息</span>
        </template>
        <div class="CreditForm_WorkInfs">
          <ul class="CreditForm_WorkInfs_ul_left">
            <li>
              <label class="WorkInfs_left_label left_margin">工作单位：</label>
              <span class="detail_inf">{{this.FormData.hirecomName }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <span class="detail_inf">{{this.FormData.hirecomSigntext }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">所属行业：</label>
              <span class="detail_inf">{{this.FormData.hirecomKind}} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">职位级别：</label>
              <span class="detail_inf">{{this.FormData.workPost }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话：</label>
              <span class="detail_inf">{{this.FormData.workTel }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <span class="detail_inf">{{this.FormData.avgsalaryamt }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <span class="detail_inf">{{this.FormData.payDay }} </span>
            </li>
            <li class="company_address_select">
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <span class="detail_inf">{{this.FormData.addressMsg}} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <span class="detail_inf">{{this.FormData.hirelastComname }} </span>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 所在部门： </label>
              <span class="detail_inf">{{this.FormData.hiredepartment }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 入职时间： </label>
              <span class="detail_inf">{{this.FormData.entryDate }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 工资发放形式： </label>
              <span class="detail_inf">{{this.FormData.hirecomPaymentTypetext }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <span class="detail_inf">{{this.FormData.workZip }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <span class="detail_inf">{{this.FormData.privateOwnerFlagtext}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 私营企业信息 -->
      <el-collapse-item name="4">
         <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">私营企业信息</span>
        </template>
        <div class="CreditForm_CompanyInfs">
          <ul class="CreditForm_CompanyInfs_ul_left">
            <li>
              <label class="CompanyInfs_left_label left_margin">企业类型：</label>
              <span class="detail_inf">{{this.FormData.selfTypetext }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">注册资金[万元]：</label>
              <span class="detail_inf">{{this.FormData.regcapitalamt }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">占股比例：</label>
              <span class="detail_inf">{{this.FormData.selfhasProportion }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">月还款额/租金[万元]：</label>
              <span class="detail_inf">{{this.FormData.monthrentamt }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">营业面积：</label>
              <span class="detail_inf">{{this.FormData.selfpremisesArea }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin">企业经营项目：</label>
              <span class="detail_inf">{{this.FormData.projectManage }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">近一年利润[万元]：</label>
              <span class="detail_inf">{{this.FormData.oneYearProfitamt }} </span>
            </li>


            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">第一供销商：</label>
              <span class="detail_inf">{{this.FormData.firstSuppliers }} </span>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 公司注册时间： </label>
              <span class="detail_inf">{{this.FormData.compegDate }} </span>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 经营场所： </label>
              <span class="detail_inf">{{this.FormData.selfpremisestext }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <span class="detail_inf">{{this.FormData.selfempCount }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 每月净利润[万元]： </label>
              <span class="detail_inf">{{this.FormData.profitamountmamt }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 第一分销商： </label>
              <span class="detail_inf">{{this.FormData.firstDistributor }} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 家庭信息 -->
      <el-collapse-item name="5">
         <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">家庭信息</span>
        </template>
        <div class="CreditForm_FamilyInf">
          <ul class="CreditForm_FamilyInf_ul_left">
            <li>
              <label class="FamilyInf_left_label">婚姻状况：</label>
              <span class="detail_inf">{{this.FormData.fmarrflagtext }} </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有子女：</label>
              <span class="detail_inf">{{this.FormData.childFlagtext }} </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">父母是否在世：</label>
              <span class="detail_inf">{{this.FormData.parentIslivingtext }} </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有兄弟姐妹：</label>
              <span class="detail_inf">{{this.FormData.brothersIfhastext }} </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">个人/家庭月开销[元]：</label>
              <span class="detail_inf">{{this.FormData.fconsumption }} </span>
            </li>
          </ul>
          <ul class="CreditForm_FamilyInf_ul_right">
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 是否有兄弟姐妹备注： </label>
              <span class="detail_inf">{{this.FormData.brothersIfhastxt }} </span>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 可以承受的月还款[元]： </label>
              <span class="detail_inf">{{this.FormData.fbalance }} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 居住情况 -->
      <el-collapse-item  name="6">
         <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">居住情况</span>
        </template>
        <div class="CreditForm_live">
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_left_label">同住者关系：</label>
              <span class="detail_inf">{{this.FormData.livingHouseHoldstext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <span class="detail_inf">{{this.FormData.livingEstateBelongstext }} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核对现住址 -->
      <el-collapse-item name="7">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">核对现住址</span>
        </template>
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li>
              <label class="check_reside__left_label">现住址：</label>
              <span class="detail_inf oneline"> </span> {{this.FormData.aaddress}} </span>
            </li>
            <li>
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <span class="detail_inf">{{this.FormData.aisresidenttext}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item name="8">
         <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">初审结论</span>
        </template>
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">初审结果评价：</p>
          <span class="detail_inf">{{this.FormData.oother}} </span>
          <!-- <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="oother">
          </el-input> -->
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-button type="primary" class="btn" @click="CFsave">确认</el-button>
    <!-- <button @click="test">test</button> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        FormData: [],
      }
    },
    methods: {
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
      },
      CFsave() {
        console.log("提交信息")
      }
    },
    mounted() {
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

      // 信审表 查询
      this.post("/creauditInfo/queryCreauditInfoObj", {
        applyId: "00542",
        // applyId:"e0b51098-b24d-4211-8ae4-f08f657d7886",
      }).then(res => {
        console.log(res);
        // console.log(res.data)
        this.FormData = res.data;
      })
    }
  }

</script>

<style scoped>
  /* 公共 */

  .icon_hat {
    position: absolute;
    top: 15px;
    left: 18px;
  }

  .headFont {
    font-size: 16px;
  }

  .oneline {
    width: 100vw;
  }

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
  .CreditForm_live_ul_right
  /* .CreditForm_check_reside_ul_left */

  {
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
  /* .check_reside__left_label, */
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
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(8) {
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

  .detail_inf {
    display: inline-block;
    width: 49%;
    overflow: hidden;
    /* background: red; */
    vertical-align: middle;
  }

</style>
