<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 上网查询信息 -->
      <el-collapse-item title=" 上网查询信息" name="1">
        <div class="CreditForm_InternetInf">
          <ul class="CreditForm_InternetInf_ul_left">
            <li>
              <label class="InternetInf_left_label">客户在法网是否有被执行信息：</label>
              <span class="detail_inf">{{this.wbeexEcutedtext}} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">单位在法网是否有被执行信息：</label>
              <span class="detail_inf">{{this.wnetHirecomtext}} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">客户在失信网是否有失信记录：</label>
              <span class="detail_inf">{{this.wnetEcutedBreatext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">单位在失信网是否有失信记录：</label>
              <span class="detail_inf">{{this.wnetHirecomBreatext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网上搜索借款人手机是否有异常：</label>
              <span class="detail_inf">{{this.wnetPhonetext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位名称是否有异常：</label>
              <span class="detail_inf">{{this.wnetHirecomNametext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位电话是否有异常：</label>
              <span class="detail_inf">{{this.wnetHirecomPhonetext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网上搜索借款人现居住地址和房产地址是否有异常：</label>
              <span class="detail_inf">{{this.wnetAddrandEstatetext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">网搜单位地址是否有异常：</label>
              <span class="detail_inf">{{this.wnetHirecomAddresstext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">当地工商网查询企业基本信息中是否有登记：</label>
              <span class="detail_inf">{{this.wnetCompanytext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label">客户工作单位在全国组织代码查询中是否存在：</label>
              <span class="detail_inf">{{this.wnetAddrstatetext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li>
              <label class="InternetInf_right_label"> 执行信息说明： </label>
              <span class="detail_inf">{{this.beexEcutedtxt}} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
              <span class="detail_inf">{{this.wnetHirecomtxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 失信记录说明： </label>
              <span class="detail_inf">{{this.wnetEcutedBreatxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
              <span class="detail_inf">{{this.wnetHirecomBreatxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
              <span class="detail_inf">{{this.wnetPhonetxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
              <span class="detail_inf">{{this.wnetHirecomNametxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
              <span class="detail_inf">{{this.wnetHirecomPhonetxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
              <span class="detail_inf">{{this.wnetAddrandEstatetxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
              <span class="detail_inf">{{this.wnetHirecomAddresstxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
              <span class="detail_inf">{{this.wnetCompanytxt }} </span>
            </li>
            <li>
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
              <span class="detail_inf">{{this.wnetAddrstatetxt }} </span>
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
              <span class="detail_inf">{{this.iisselftext }} </span>
            </li>
            <li>
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <span class="detail_inf">{{this.iloanBeforetext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li>
              <label class=" CheckId_right_label "> 接听说明： </label>
              <span class="detail_inf">{{this.iisselftxt }} </span>
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
              <span class="detail_inf">{{this.hirecomName }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <span class="detail_inf">{{this.hirecomSigntext }} </span>
            </li>
            <li>
              <!--  =========================================  带修改   不确定字段  =============================  -->
              <label class="WorkInfs_left_label left_margin_half_two">所属行业：</label>
              <span class="detail_inf">{{this.hirecomKindVal }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">职位级别：</label>
              <span class="detail_inf">{{this.workPost }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话：</label>
              <span class="detail_inf">{{this.workTel }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <span class="detail_inf">{{this.avgsalaryamt }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <span class="detail_inf">{{this.payDay }} </span>
            </li>
            <li class="company_address_select">
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <span class="detail_inf">{{this.workProvinceName+"省"+this.workCityName+"市"+this.workCountyName+"县"+this.workAddress+"街道" }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <span class="detail_inf">{{this.hirelastComname }} </span>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 所在部门： </label>
              <span class="detail_inf">{{this.hiredepartment }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 入职时间： </label>
              <span class="detail_inf">{{this.entryDate }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 工资发放形式： </label>
              <span class="detail_inf">{{this.hirecomPaymentTypetext }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <span class="detail_inf">{{this.workZip }} </span>
            </li>
            <li>
              <!-- 不确定字段==================================待确认=================== -->
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <span class="detail_inf">{{this.hirecomType }} </span>
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
              <span class="detail_inf">{{this.selfTypetext }} </span>
            </li>
            <li>
                <!-- 不确定字段==================================待确认=================== -->
              <label class="CompanyInfs_left_label left_margin_half_one">注册资金[万元]：</label>
              <span class="detail_inf">{{this.selfregcapital }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">占股比例：</label>
              <span class="detail_inf">{{this.selfhasProportion }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">月还款额/租金[万元]：</label>
              <span class="detail_inf">{{this.monthrentamt }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">营业面积：</label>
              <span class="detail_inf">{{this.selfpremisesArea }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin">企业经营项目：</label>
              <span class="detail_inf">{{this.projectManage }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">近一年利润[万元]：</label>
              <span class="detail_inf">{{this.oneYearProfitamt }} </span>
            </li>


            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">第一供销商：</label>
              <span class="detail_inf">{{this.firstSuppliers }} </span>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 公司注册时间： </label>
              <span class="detail_inf">{{this.compegDate }} </span>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 经营场所： </label>
              <span class="detail_inf">{{this.selfpremisestext }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <span class="detail_inf">{{this.selfempCount }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 每月净利润[万元]： </label>
              <span class="detail_inf">{{this.profitamountmamt }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 第一分销商： </label>
              <span class="detail_inf">{{this.firstDistributor }} </span>
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
              <span class="detail_inf">{{this.fmarrflagtext }} </span>
            </li>
            <li>
              <!-- 待确认======================================================================================== -->
              <label class="FamilyInf_left_label">是否有子女：</label>
              <span class="detail_inf">{{this.childFlagVal }} </span>
            </li>
            <li>
              <!-- 待确认======================================================================================== -->
              
              <label class="FamilyInf_left_label">父母是否在世：</label>
              <span class="detail_inf">{{this.parentIslivingVal }} </span>
            </li>
            <li>
              <!-- 待确认======================================================================================== -->
              
              <label class="FamilyInf_left_label">是否有兄弟姐妹：</label>
              <span class="detail_inf">{{this.brothersIfhasVal }} </span>
            </li>
            <li>
              <label class="FamilyInf_left_label">个人/家庭月开销[元]：</label>
              <span class="detail_inf">{{this.fconsumption }} </span>
            </li>
          </ul>
          <ul class="CreditForm_FamilyInf_ul_right">
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 是否有兄弟姐妹备注： </label>
              <span class="detail_inf">{{this.brothersIfhastxt }} </span>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 可以承受的月还款[元]： </label>
              <span class="detail_inf">{{this.fbalance }} </span>
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
              <span class="detail_inf">{{this.livingHouseHoldstext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <span class="detail_inf">{{this.livingEstateBelongstext }} </span>
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
                <span class="detail_inf oneline"> </span> {{this.aaddress}} </span>
            </li>
            <li>
              <!-- 待确认======================================================================================== -->              
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <span class="detail_inf">{{this.aisresident}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item title="初审结论" name="8">
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">初审结果评价：</p>
              <span class="detail_inf">{{this.oother}} </span>
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
        FormData:[],
        // // 上网查询
        beexEcutedVal: "", // select-客户在法网是否有被执行信息
        netHirecomVal: '', // select-单位在法网是否有被执行信息：
        netEcutedBreaVal: '', // select-客户在失信网是否有失信记录：
        netHirecomBreaVal: '', // select-单位在失信网是否有失信记录
        netPhoneVal: '', // select-网上搜索借款人手机是否有异常：
        netHirecomNameVal: '', // select-网搜单位名称是否有异常
        netHirecomPhoneVal: '', // select-网搜单位电话是否有异常：
        netAddrandEstateVal: '', // select-网上搜索借款人现居住地址和房产地址是否有异常：
        netHirecomAddressVal: '', // select-网搜单位地址是否有异常：
        netCompanyVal: '', // select-当地工商网查询企业基本信息中是否有登记：
        netAddrstateVal: '', // select-客户工作单位在全国组织代码查询中是否存在：
        // textarea 文本输入域 字段
        beexEcutedtxt: '', // 执行信息说明
        netHirecomtxt: "", //单位执行信息说明
        netEcutedBreatxt: "", //失信记录说明
        netHirecomBreatxt: "", //单位失信记录说明        
        netPhonetxt: "", //手机异常信息说明        
        netHirecomNametxt: "", //单位名称异常信息说明
        netHirecomPhonetxt: "", //单位电话异常信息说明
        netAddrandEstatetxt: "", //地址异常信息说明
        netHirecomAddresstxt: "", //单位地址异常信息说明
        netCompanytxt: "", //工商登记信息说明
        netAddrstatetxt: "", //组织机构代码信息说明
        // 核实身份
        isselfVal: '', // 接听者是否是借款人本人：
        loanBeforeVal: '', //是否在我司申请借款：
                isselftxt: '', //接听说明
        // 工作信息
        hirecomSignVal: '', //单位性质
        hirecomKindVal: '', //所属行业：
        hirecomAddressVal: '', //单位地址------------三级联动---待续
        hirecomPaymentTypeVal: '', // 工资发放形式：
         hirecomName: '', // 工作单位
        hirecomPosition: '', //职位级别
        hirecomPhone: '', //单位电话
        hiremonthIncome: '', //月均工资[元]
        hirecomPayday: '', //每月发薪日
        hirelastComname: '', //前单位名称：
        hiredepartment: '', // 所在部门
        hirecomGetjob: '', // 入职时间-日期选择器
        hirecomPostcode: '', // 单位地址邮编
        hirecomType: '', // 是否为私营业主
        hirecomAddress: '', //单位地址 -----------------------------------------------------------------------------待确认
        //  私营企业信息
        selfTypeVal: '', //企业类型
        selfpremisesVal: '', // 经营场所
         selfregcapital: '', //注册资金[万元]
        selfhasProportion: '', //占股比例
        monthrentamt: '', // 月还款额/租金[万元]
        selfpremisesArea: '', //营业面积
        selfBusproject: '', //企业经营项目
        selfRecyearProfits: '', //近一年利润[万元]
        selfFirsupplier: '', //第一供销商
        selfCreateDate: '', //公司注册时间
        selfempCount: '', //员工人数
        profitamountmamtVal: '', //每月净利润[万元]：-----------------------------------------------------------------------------待确认
        selfFirdistri: '', //第一分销商
        // 家庭信息
        fmarrflagVal: '', //婚姻状况
        childFlagVal: '', //是否有子女
        parentIslivingVal: '', //父母是否在世
        brothersIfhasVal: '', //是否有兄弟姐妹
         fconsumption: '', // 个人/家庭月开销[元]
        brothersIfhastxt: '', //是否有兄弟姐妹备注
        fbalance: '', //可以承受的月还款[元]
        // 居住情况
        livingHouseHoldsVal: '', //同住者关系
        livingEstateBelongsVal: '', //居住房产所属情况
        // 核对现住址
        address:'',//现住址
        aisresident: '', //现住地址是否为常住地址
        // 初审结论
        firstConclusion: '', //初审结果评价----------------------待处理是否需要获取数据-------------------还是只可以填写
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
        // this.rightList = false;
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

      // 登录     cCreditForm
      // this.post("/smUser/login", {
      //   userCode: "02103C3003",
      //   loginPassword: "111111"
      // }).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   reject(err)
      // });

      // 信审表 查询
       this.post("/creauditInfo/queryCreauditInfoObj", {
        id:"14447cef-c7a6-438c-ac80-cbb92e8c4cf0", 
        // id:"",
      }).then(res => {
        console.log(res);
        // console.log(res.data)
// // 获取数据
// this.beexEcutedVal=res.data.wbeexEcuted; // select-客户在法网是否有被执行信息
// this.netHirecomVal=res.data.wnetHirecom; // select-单位在法网是否有被执行信息：
// this.netEcutedBreaVal=res.data.wnetEcutedBrea // select-客户在失信网是否有失信记录：
// this.netHirecomBreaVal=res.data.wnetHirecomBrea // select-单位在失信网是否有失信记录
// this.netPhoneVal=res.data.wnetPhone // select-网上搜索借款人手机是否有异常：
// this.netHirecomNameVal=res.data.wnetHirecomName // select-网搜单位名称是否有异常
// this.netHirecomPhoneVal=res.data.wnetHirecomPhone // select-网搜单位电话是否有异常：
// this.netAddrandEstateVal=res.data.wnetAddrandEstate // select-网上搜索借款人现居住地址和房产地址是否有异常：
// this.netHirecomAddressVal=res.data.wnetHirecomAddress // select-网搜单位地址是否有异常：
// this.netCompanyVal=res.data.wnetCompany // select-当地工商网查询企业基本信息中是否有登记：
// this.netAddrstateVal=res.data.wnetAddrstate // select-客户工作单位在全国组织代码查询中是否存在：
// // 核实身份
// this.isselfVal=res.data.iisself // 接听者是否是借款人本人：
// this.loanBeforeVal=res.data.iloanBefore //是否在我司申请借款：
// // 工作信息
// this.hirecomSignVal=res.data.hirecomSign //单位性质
// this.hirecomKindVal=res.data.hirecomKind //所属行业：
// this.hirecomAddressVal=res.data.hirecomAddress //单位地址------------三级联动-----------------------待续
// this.hirecomPaymentTypeVal=res.data.hirecomPaymentType // 工资发放形式：
// //  私营企业信息
// this.selfTypeVal=res.data.selfType //企业类型
// this.selfpremisesVal=res.data.selfpremises // 经营场所
// // 家庭信息
// this.fmarrflagVal=res.data.ddd //婚姻状况
// this.childFlagVal=res.data.ddd //是否有子女
// this.parentIslivingVal=res.data.ddd //父母是否在世
// this.brothersIfhasVal=res.data.ddd //是否有兄弟姐妹
// // 居住情况
// this.livingHouseHoldsVal=res.data.ddd //同住者关系
// this.livingEstateBelongsVal=res.data.ddd //居住房产所属情况
// // 核对现住址
//         this.address=res.data.aaddress,//现住址
// this.aisresident=res.data.aisresident //现住地址是否为常住地址
// // textarea 文本输入域 字段
// this.beexEcutedtxt=res.data.wbeexEcutedtxt; // 执行信息说明
// this.netHirecomtxt=res.data.ddd //单位执行信息说明
// this.netEcutedBreatxt=res.data.ddd //失信记录说明
// this.netHirecomBreatxt=res.data.ddd //单位失信记录说明
// this.netPhonetxt=res.data.ddd //手机异常信息说明
// this.netHirecomNametxt=res.data.ddd //单位名称异常信息说明
// this.netHirecomPhonetxt=res.data.ddd //单位电话异常信息说明
// this.netAddrandEstatetxt=res.data.ddd //地址异常信息说明
// this.netHirecomAddresstxt=res.data.ddd //单位地址异常信息说明
// this.netCompanytxt=res.data.ddd //工商登记信息说明
// this.netAddrstatetxt=res.data.ddd //组织机构代码信息说明
// //核实身份
// this.isselftxt=res.data.ddd //接听说明
// // 初审结论
// this.firstConclusion=res.data.ddd //初审结果评价----------------------待处理是否需要获取数据--------还是只可以填写
// // input 字段
// // 工作信息
// this.hirecomName=res.data.ddd // 工作单位
// this.hirecomPosition=res.data.ddd //职位级别
// this.hirecomPhone=res.data.ddd //单位电话
// this.hiremonthIncome=res.data.ddd //月均工资[元]
// this.hirecomPayday=res.data.ddd //每月发薪日
// this.hirelastComname=res.data.ddd //前单位名称：
// this.hiredepartment=res.data.ddd // 所在部门
// this.hirecomGetjob=res.data.ddd // 入职时间-日期选择器
// this.hirecomPostcode=res.data.ddd // 单位地址邮编
// this.hirecomType=res.data.ddd // 是否为私营业主
// this.hirecomAddress=res.data.ddd //单位地址 -----------------------------------------------------------------------------待确认
// // 私营企业信息
// this.selfregcapital=res.data.ddd //注册资金[万元]
// this.selfhasProportion=res.data.ddd //占股比例
// this.monthrentamt=res.data.ddd // 月还款额/租金[万元]
// this.selfpremisesArea=res.data.ddd //营业面积
// this.selfBusproject=res.data.ddd //企业经营项目
// this.selfRecyearProfits=res.data.ddd //近一年利润[万元]
// this.selfFirsupplier=res.data.ddd //第一供销商
// this.selfCreateDate=res.data.ddd //公司注册时间
// this.selfempCount=res.data.ddd //员工人数
// this.profitamountmamtVal=res.data.ddd //每月净利润[万元]：-----------------------------------------------------------------------------待确认
// this.selfFirdistri=res.data.ddd //第一分销商
// // 家庭信息
// this.fconsumption=res.data.ddd // 个人/家庭月开销[元]
// this.brothersIfhastxt=res.data.ddd //是否有兄弟姐妹备注
// this.fbalance=res.data.ddd //可以承受的月还款[元]
// // console.log(res.data.oother)
      })
      // .catch(err=>{
      //this. reject(err)
      //       }) ;
// 添加
      //  this.post("/creauditInfo/addOrUpdate", {
      //   // id:"bb30607c-b5aa-4915-9474-460e099a33e8", 
      // }).then(res => {
      //   console.log(res);
      // }).catch(err=>{
      //         reject(err)
      //       }) ;

// /creauditInfo/addOrUpdate
    // 获取影像名称的节点树列表
      //    this.post("/productArchive/getProductArchiveParentList", {
      //   applyId:"7364",
      // }).then(res => {
      //   console.log(res);
      // }).catch(err=>{
      //         reject(err)
      //       }) ;


    }
  }

</script>

<style scope>
  /* 公共 */

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
    /* border: 1px solid orange;
  background: yellowgreen; */
  }

</style>
