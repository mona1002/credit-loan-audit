<!-- 内匹申请信息详情 -->
<template>
	<div class="applicationInformationDetail">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item name="1">
				<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">工作人员填写</span>
				</template>
				<ul class="firstUl">
					<li>
						<label>申请类型：</label><span>{{datas.appTypeTxt}}</span>
					</li>
					<li>
						<label>借款人类型：</label><span>{{datas.borrTypeTxt}}</span>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>进件渠道：</label><span>{{datas.sourcesChanTxt}}</span>
					</li>
					<li>
						<label>获客渠道：</label><span>{{datas.sourcesChan}}</span><!-- 0线下、1线下转线上、2考拉、3H5、4诺优贷、5APP -->
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>团队经理：</label><span>{{datas.teamLeaderName}}</span>
					</li>
					<li>
						<label>直销人员：</label><span>{{datas.salPerName}}</span>
					</li>
					<li>
						<label style="float:left">直销人员联系方式：</label>
						<span>{{datas.salPerTel}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>家人是否知晓本借款：</label>
						<span>{{datas.famKnowFlagTxt}}</span>
					</li>
					<li v-if="datas.famKnowFlag=='1'">
						<label>知晓人姓名：</label>
						<span>{{datas.knowerName}}</span>
					</li>
					<li v-if="datas.famKnowFlag=='1'">
						<label>与本人关系：</label>
						<span>{{datas.knowerRelationTxt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>客户符合何种产品：</label>
						<span>{{datas.proName}}</span>
					</li>
					<li>
						<label>紧急程度：</label>
						<span>{{datas.emerTypeTxt}}</span>
					</li>
					<li v-if="datas.emerType=='02'">
						<label>加急费用[元]：</label>
						<span>{{datas.emerAmt}}</span>
					</li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item name="2">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">您的借款需求</span>
				</template>
				<ul class="firstUl">
					<li>
						<label>借款用途：</label>
						<span>{{accepApplyLoan.loanPurposeTxt}}</span>
					</li>
					<li></li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>申请借款额度[元]：</label>
						<span>{{accepApplyLoan.loanAmt}}</span>
					</li>
					<li>
						<label>借款期限[月]：</label>
						<span>{{accepApplyLoan.loanTerm}}</span>
					</li>
					<li>
						<label>可接受最高月还款额[元]：</label>
						<span>{{accepApplyLoan.eachTermAmt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>借款类型：</label>
						<span>{{accepApplyLoan.loanTypeTxt}}</span>
					</li>
					<li>
						<label>担保方式：</label>
						<span>{{accepApplyLoan.guarnTypeTxt}}</span>
					</li>
					<li>
						<label>还款资金来源：</label>
						<span>{{accepApplyLoan.repaySourceTxt}}</span>
					</li>
				</ul>
				<ul class="illustration" v-if="accepApplyLoan.repaySource=='03'">
					<li>
						<label>其他渠道还款说明：</label>
						<el-tooltip class="item" effect="dark" :content="accepApplyLoan.repaySourceRemark" :disabled="accepApplyLoan.repaySourceRemark==null" placement="top-start">
					      <div>{{accepApplyLoan.repaySourceRemark}}</div>
					    </el-tooltip>
					</li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item name="3">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">您的个人信息</span>
				</template>
				<ul class="firstUl">
					<li>
						<label>客户名称：</label>
						<span>{{accepCusBasicInfo.custName}}</span>
					</li>
					<li>
						<label>性别：</label>
						<span>{{accepCusBasicInfo.sexTxt}}</span>
					</li>
					<li>
						<label>移动电话：</label>
						<span>{{accepCusBasicInfo.mobile}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>证件类型：</label>
						<span>{{accepCusBasicInfo.certTypeTxt}}</span>
					</li>
					<li>
						<label>证件号码：</label>
						<span>{{accepCusBasicInfo.certCode}}</span>
					</li>
					<li>
						<label style="float:left">年龄：</label>
						<span>{{accepCusBasicInfo.age}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>婚姻状况：</label>
						    <span>{{accepCusBasicInfo.marrFlagTxt}}</span>
					</li>
					<li>
						<label>有无子女：</label>
						<span>{{accepCusBasicInfo.childFlagTxt}}</span>
					</li>
					<li>
						<label>最高学历：</label>
						<span>{{accepCusBasicInfo.diplomaFlagTxt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>电子邮箱：</label>
						<span>{{accepCusBasicInfo.email}}</span>
					</li>
					<li>
						<label>住宅类型：</label>
						<span>{{accepCusBasicInfo.residentialTypeTxt}}</span>
					</li>
					<li v-if="accepCusBasicInfo.residentialType=='01' || accepCusBasicInfo.residentialType=='02' || accepCusBasicInfo.residentialType=='03'">
						<label>每月租金/还款额[元]：</label>
						<span>{{accepCusBasicInfo.monthRentAmt}}</span>
					</li>
				</ul>
				<ul>
					<li class="province" style="width:66.6%">
						<label class="ellipsis">户口所在地：</label>
						<el-tooltip class="item" effect="dark" :content="accepCusBasicInfo.homeDetailAddr" :disabled="accepCusBasicInfo.homeDetailAddr==null" placement="top-start">
					      <div class="textBox">{{accepCusBasicInfo.homeDetailAddr}}</div>
					    </el-tooltip>
						
						<!-- <span class="spans">{{accepCusBasicInfo.homeProvinceName}}</span>
						<span class="spans">南平市{{accepCusBasicInfo.homeCityName}}</span>
						<span class="spans">察布查尔锡伯自治县{{accepCusBasicInfo.homeCountyName}}</span>
						<span>{{accepCusBasicInfo.homeAddress}}</span> -->
					</li>
					<li>
						<label>户口所在地邮编：</label>
						<span>{{accepCusBasicInfo.homeZip}}</span>
					</li>
				</ul>
				<ul>
					<li class="province" style="width:66.6%">
						<label class="ellipsis">现住宅地址：</label>
						<!-- <span class="spans">{{accepCusBasicInfo.liveProvinceName}}</span>
						<span class="spans">{{accepCusBasicInfo.liveCityName}}</span>
						<span class="spans">察布查尔锡伯自治县{{accepCusBasicInfo.liveCountyName}}</span>
						<span>{{accepCusBasicInfo.liveAddress}}</span> -->
						<el-tooltip class="item" effect="dark" :content="accepCusBasicInfo.liveAddr" :disabled="accepCusBasicInfo.liveAddr==null" placement="top-start">
					      <div class="textBox">{{accepCusBasicInfo.liveAddr}}</div>
					    </el-tooltip>
						
					</li>
					<li>
						<label>住宅地邮编：</label>
						<span>{{accepCusBasicInfo.liveZip}}</span>
					</li>
				</ul>
				<ul>
					<li class="province" style="width:66.6%">
						<label class="ellipsis">收入来源：</label>
						<el-tooltip class="item" effect="dark" :content="accepCusBasicInfo.incomeSource" :disabled="accepCusBasicInfo.incomeSource==null" placement="top-start">
					      <div class="textBox">{{accepCusBasicInfo.incomeSource}}</div>
					    </el-tooltip>
					</li>
					<li>
						<label>借款人职业情况：</label>
						<span>{{accepCusBasicInfo.professionTxt}}</span>
					</li>
				</ul>
				<ul>
					<li class="province" style="width:66.6%">
						<label class="ellipsis">其他收入：</label>
						<el-tooltip class="item" effect="dark" :content="accepCusBasicInfo.otherIncome" :disabled="accepCusBasicInfo.otherIncome==null" placement="top-start">
					      <div class="textBox">{{accepCusBasicInfo.otherIncome}}</div>
					    </el-tooltip>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>供养人数：</label>
						<span>{{accepCusBasicInfo.keepNum}}</span>
					</li>
					<li>
						<label>起始居住时间：</label>
						<span>{{accepCusBasicInfo.liveBeginDate}}</span>
					</li>
					<li>
						<label>住宅电话：</label>
						<span>{{accepCusBasicInfo.homeTel}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>每月家庭支出[元]：</label>
						<span>{{accepCusBasicInfo.payAmt}}</span>
					</li>
					<li>
						<label>单张信用卡最高额度[元]：</label>
						<span>{{accepCusBasicInfo.cardMaxAmt}}</span>
					</li>
					<li>
						<label>您来本市年份：</label>
						<span>{{accepCusBasicInfo.comeYear}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>是否缴纳商业保险：</label>
						<span>{{accepCusBasicInfo.isPayInsuranceTxt}}</span>
					</li>
					<li>						
					</li>
					<li>
					</li>
				</ul>
				<div v-if="accepCusBasicInfo.isPayInsurance=='1'">
					<ul>
						<li>
							<label>保险公司名称：</label>
							<span>{{accepCusBasicInfo.insurCompanyName}}</span>
						</li>
						<li>
							<label class="selLabel">险种类型：</label>
							<span>{{accepCusBasicInfo.insurTypeTxt}}</span>				
						</li>
						<li>
						</li>
					</ul>
					<ul>
						<li class="province" style="width:66.6%">
						<label class="ellipsis">投保地点：</label>
						<el-tooltip class="item" effect="dark" :content="insurAddr" :disabled="insurAddr==null" placement="top-start">
					      <div class="textBox">{{insurAddr}}</div>
					    </el-tooltip>
						<!-- <span>{{accepCusBasicInfo.insurProvinceName}}</span>
						<span>{{accepCusBasicInfo.insurCityName}}</span>
						<span>{{accepCusBasicInfo.insurCountyName}}</span>
						<span>{{accepCusBasicInfo.insurAddress}}</span> -->
						</li>
						<li>	
						</li>
					</ul>
					<ul>
						<li>
							<label>缴费方式：</label>
							<span>{{accepCusBasicInfo.insurPayWayTxt}}</span>
						</li>
						<li>		
							<label>缴费类别：</label>
							<span>{{accepCusBasicInfo.insurPayCateTxt}}</span>	
						</li>
						<li></li>
					</ul>
					<ul>
						<li>
							<label>期缴保费[元]：</label>
							<span>{{accepCusBasicInfo.eachPayAmt}}</span>
						</li>
						<li>
							<label>总保额：</label>
							<span>{{accepCusBasicInfo.totalPayAmt}}</span>				
						</li>
						<li>
							<label>需缴费年数[月]：</label>
							<span>{{accepCusBasicInfo.payPeriod}}</span>
						</li>
					</ul>
					<ul>
						<li>
							<label>被保人姓名：</label>
							<span>{{accepCusBasicInfo.insurerName}}</span>
						</li>
						<li>
							<label>被保人联系电话：</label>
							<span>{{accepCusBasicInfo.insurerTel}}</span>			
						</li>
						<li>
							<label>生效日期：</label>
							<span>{{accepCusBasicInfo.insurEffectDate}}</span>	
						</li>
					</ul>
				</div>
				<ul>
					<li>
						<label>是否是私营业主：</label>
						<span>{{accepCusBasicInfo.privateOwnerFlagTxt}}</span>
					</li>
					<li></li>
					<li></li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item name="4" v-if="accepCusBasicInfo.privateOwnerFlag=='1'">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">私人业主信息</span>
				</template>
				<ul class="firstUl">
					<li>
						<label>企业类型：</label>
						<span>{{accepCusPrivate.compTypeTxt}}</span>
					</li>
					<li>
						<label>员工人数：</label>
						<span>{{accepCusPrivate.empNumber}}</span>
					</li>
					<li>
						<label>公司注册时间：</label>
						<span>{{accepCusPrivate.comPegDate}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>占股比例：</label>
						<span>{{accepCusPrivate.proShare}}</span>
					</li>
					<li>
						<label>经营场所：</label>
						<span>{{accepCusPrivate.busiPlaceTxt}}</span>
					</li>
					<li>
						<label>注册资金[万元]：</label>
						<span>{{accepCusPrivate.regCapitalAmt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>企业净利润率：</label>
						<span>{{accepCusPrivate.profitMargin}}</span>
					</li>
					<li>
						<label>每月净利润额[万元]：</label>
						<span>{{accepCusPrivate.profitAmountMAmt}}</span>
					</li>
					<li>
						<label>营业执照编号：</label>
						<span>{{accepCusPrivate.busiLicenceCode}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>是否缴纳五险一金：</label>
						<span>{{accepCusPrivate.isPayWealTxt}}</span>
					</li>
					<li>
						<label>月还款额/月租金[万元]：</label>
						<span>{{accepCusPrivate.monthRentAmt}}</span>
					</li>
					<li>
						<label>营业面积：</label>
						<span>{{accepCusPrivate.busiArea}}</span>
					</li>
				</ul>
				<ul class="illustration">
					<li>
						<label>企业经营项目说明：</label>
						<el-tooltip class="item" effect="dark" :content="accepCusPrivate.projectManage" :disabled="accepCusPrivate.projectManage==null" placement="top-start">
					      <div>{{accepCusPrivate.projectManage}}</div>
					    </el-tooltip>
					</li>
				</ul>
				<ul>
					<li>
						<label>淡季月份：</label>
						<span>{{accepCusPrivate.slowMonth}}</span>
					</li>
					<li>
						<label>旺季月份：</label>
						<span>{{accepCusPrivate.peakMonth}}</span>
					</li>
					<li>
						<label>平季月份：</label>
						<span>{{accepCusPrivate.avgMonth}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>淡季销售额[万元]：</label>
						<span>{{accepCusPrivate.slowMonthSaleAmt}}</span>
					</li>
					<li>
						<label>旺季销售额[万元]：</label>
						<span>{{accepCusPrivate.peakMonthSaleAmt}}</span>
					</li>
					<li>
						<label>平季销售额[万元]：</label>
						<span>{{accepCusPrivate.avgMonthSaleAmt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>企业近一年利润[万元]：</label>
						<span>{{accepCusPrivate.oneYearProfitAmt}}</span>
					</li>
					<li>
						<label>企业近两年利润[万元]：</label>
						<span>{{accepCusPrivate.twoYearProfitAmt}}</span>
					</li>
					<li>
						<label>企业近三年利润[万元]：</label>
						<span>{{accepCusPrivate.threeYearProfitAmt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>企业近一年纳税额[万元]：</label>
						<span>{{accepCusPrivate.oneYearTaxAmt}}</span>
					</li>
					<li>
						<label>企业近两年纳税额[万元]：</label>
						<span>{{accepCusPrivate.twoYearTaxAmt}}</span>
					</li>
					<li>
						<label>企业近三年纳税额[万元]：</label>
						<span>{{accepCusPrivate.threeYearTaxAmt}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>第一供销商：</label>
						<span>{{accepCusPrivate.firstSuppliers}}</span>
					</li>
					<li>
						<label>第二供销商：</label>
						<span>{{accepCusPrivate.secondSuppliers}}</span>
					</li>
					<li>
						<label>第三供销商：</label>
						<span>{{accepCusPrivate.thirdSuppliers}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>第一分销商：</label>
						<span>{{accepCusPrivate.firstDistributor}}</span>
					</li>
					<li>
						<label>第二分销商：</label>
						<span>{{accepCusPrivate.secondDistributor}}</span>
					</li>
					<li>
						<label>第三分销商：</label>
						<span>{{accepCusPrivate.thirdDistributor}}</span>
					</li>
				</ul>
			</el-collapse-item>
			<el-collapse-item name="5">
				<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">房产信息</span>
				</template>
			    <el-table
			      :data="accepCusEstates"
			      style="width: 100%"
			      border
			      class="house">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号"
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="estateTypeTxt"
				        label="房产类型"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="propertyTypeTxt"
				        label="产权性质"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="coveredArea"
				        label="建筑面积[m²]"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="unitPrice"
				        label="建筑单价[元]"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="estateAddress"
				        label="房产地址"
				        show-overflow-tooltip
				        min-width="200">
				      </el-table-column>
				      <el-table-column
				        prop="estateZip"
				        label="邮政编码"
				        min-width="80">
				      </el-table-column>
				      <el-table-column
				        prop="equityRatio"
				        label="产权比例"
				        min-width="80">
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="mortgageStatusTxt"
				        label="抵押状况"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]"
				        min-width="80">
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[元]"
				        min-width="120">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item name="6">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">车辆信息</span>
				</template>
			    <el-table
			      :data="accepCusCarInfos"
			      style="width: 100%"
			      border
			      class="car">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号"
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="carPrice"
				        label="车辆购置价[元]"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="isYearCheckTxt"
				        label="是否年检"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="isOperateTxt"
				        label="是否非运营"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="carModel"
				        label="车辆型号"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="carTypeTxt"
				        label="车辆类型"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[月]"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="carNo"
				        label="车牌号码"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="buyInsurTxt"
				        label="车辆已购保险"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="buyDate"
				        label="购买时间"
				        min-width="120">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item name="7">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">您的工作信息</span>
				</template>
				<ul class="firstUl">
					<li style="width:66.6%;">
						<label class="ellipsis">工作单位：</label>
					    <el-tooltip class="item" effect="dark" :content="accepCusWorkInfo.workName" :disabled="accepCusWorkInfo.workName==null" placement="top-start">
					      <div class="textBox">{{accepCusWorkInfo.workName}}</div>
					    </el-tooltip>
					</li>
					<li>
						<label>单位性质：</label>
					    <span>{{accepCusWorkInfo.workSignTxt}}</span>
					</li>
				</ul>
				<ul>
					<li style="width:66.6%;">
						<label class="ellipsis">单位地址：</label>
						<!-- <span class="spans">{{accepCusWorkInfo.workProvinceName}}</span>
						<span class="spans">{{accepCusWorkInfo.workCityName}}</span>
						<span class="spans">{{accepCusWorkInfo.workCountyName}}</span>
						<span>{{accepCusWorkInfo.workAddress}}</span> -->
						<el-tooltip class="item" effect="dark" :content="accepCusWorkInfo.workAddr" :disabled="accepCusWorkInfo.workAddr==null" placement="top-start">
					      <div class="textBox">{{accepCusWorkInfo.workAddr}}</div>
					    </el-tooltip>
					</li>
					<li>
						<label>单位地址邮编：</label>
						<span>{{accepCusWorkInfo.workZip}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>所属行业：</label>
						<span>{{accepCusWorkInfo.workKindName}}</span>
					</li>
					<li>
						<label>所在部门：</label>
						<span>{{accepCusWorkInfo.workDep}}</span>
					</li>
					<li>
						<label>职位级别：</label>
						<span>{{accepCusWorkInfo.workPost}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>是否缴纳社保：</label>
						<span>{{accepCusWorkInfo.insureFlagTxt}}</span>
					</li>
					<li>
						<label>社保缴纳基数[元]：</label>
						<span>{{accepCusWorkInfo.insureBase}}</span>
					</li>
					<li>
						<label>单位电话：</label>
						<span>{{accepCusWorkInfo.workTel}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>是否缴纳公积金：</label>
						<span>{{accepCusWorkInfo.fundFlagTxt}}</span>
					</li>
					<li>
						<label>公积金缴纳基数[元]：</label>
						<span>{{accepCusWorkInfo.fundBase}}</span>
					</li>
					<li>
						<label>入职时间：</label>
						<span>{{accepCusWorkInfo.entryDate}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>月均工资[元]：</label>
						<span>{{accepCusWorkInfo.avgSalaryAmt}}</span>
					</li>
					<li>
						<label>其他收入[元]：</label>
						<span>{{accepCusWorkInfo.otherIncome}}</span>
					</li>
					<li>
						<label>每月发薪日：</label>
						<span>{{accepCusWorkInfo.payDay}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>工资发放形式：</label>
						<span>{{accepCusWorkInfo.payFormTxt}}</span>
					</li>
					<li style="width:66.6%;">
						<label class="ellipsis">前单位名称：</label>
						<el-tooltip class="item" effect="dark" :content="accepCusWorkInfo.befWorkName" :disabled="accepCusWorkInfo.befWorkName==null" placement="top-start">
					      <div class="textBox">{{accepCusWorkInfo.befWorkName}}</div>
					    </el-tooltip>
					</li>
				</ul>
				<ul>
					<li>
						<label>前单位电话：</label>
						<span>{{accepCusWorkInfo.befworkTel}}</span>
					</li>
					<li>
						<!-- <label>前单位工作年限[月]：</label>
						<span>{{accepCusWorkInfo.befWorkMonth}}</span> -->
					</li>
					<li>
						<label>前单位工作年限[月]：</label>
						<span>{{accepCusWorkInfo.befWorkMonth}}</span>
					</li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item name="8">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">联系人信息</span>
				</template>
			    <el-table
			      :data="accepCusRelations"
			      style="width: 100%"
			      highlight-current-row
			      border
			      class="people">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号"
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="contactName"
				        label="姓名"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="contactTypeTxt"
				        label="类型"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="relationshipTxt"
				        label="关系"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="mobile"
				        label="手机号码"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="homeTel"
				        label="住宅电话"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="contactAge"
				        label="年龄"
				        min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="certTypeTxt"
				        label="证件类型"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="certCode"
				        label="证件号码"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="workName"
				        label="单位名称"
				        show-overflow-tooltip
				        min-width="180">
				      </el-table-column>
				      <el-table-column
				        prop="workTel"
				        label="单位电话"
				        min-width="100"
				        >
				      </el-table-column>
				      <el-table-column
				        prop="homeAddr"
				        label="地址"
				        min-width="200"
				        show-overflow-tooltip>
				      </el-table-column>
				      <!-- 单位地址没有 -->
			    </el-table>
		  	</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeNames: ['1','2','3','4','5','6','7','8','9','10'],
				datas:'',
				/*房产信息*/
				accepCusEstates:[],

				/*车辆信息*/
				accepCusCarInfos:[],

				/*您的借款需求*/
				accepApplyLoan:'',

				/*您的个人信息*/
				accepCusBasicInfo:'',

				/*私人业主信息*/
				accepCusPrivate:'',

				/*您的工作信息*/
				accepCusWorkInfo:'',

				/*联系人信息*/
				accepCusRelations:[],
				
				taskInWaitting:'',

				applyId:'',
				judgeFlag:'',
				//您的个人信息 投保地点
				insurAddr:'',
			};
		},
		mounted(){
			//一进入页面就发送请求
			this.taskInWaitting = JSON.parse(localStorage.getItem('internalObj'));
			this.applyId=this.taskInWaitting.matchApplyId;
			this.request();
		},
		methods:{
			request(){
	    		this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
		        'id':this.applyId
		      }).then(res => {
		      	this.datas=res.data;
		        /*console.log(res);*/
		        /*房产信息*/
		        this.accepCusEstates=res.data.accepCusEstates;
		        for(var i=0;i<this.accepCusEstates.length;i++){
		        	//console.log(this.accepCusEstates[i].monthlyPay);
		        	//建筑单价 保留两位小数点
		        	if(this.accepCusEstates[i].unitPrice != null){
		        		this.accepCusEstates[i].unitPrice = this.formatNumber(this.accepCusEstates[i].unitPrice,2,0);
		       		 };
		        	
		        	//贷款余额 保留两位小数点
		        	if(this.accepCusEstates[i].restLoans != null){
		        		this.accepCusEstates[i].restLoans = this.formatNumber(this.accepCusEstates[i].restLoans,2,0);
		       		 };
		        	//月供 保留两位小数点
		        	if(this.accepCusEstates[i].monthlyPay != null){
			        	this.accepCusEstates[i].monthlyPay = this.formatNumber(this.accepCusEstates[i].monthlyPay,2,0);
			        };
			        //产权比例 保留两位小数点+%
			        if(this.accepCusEstates[i].equityRatio != null){
			        	this.accepCusEstates[i].equityRatio = this.formatNumber(this.accepCusEstates[i].equityRatio,2,0).replace(/,/g,'')+'%';
			        };
			        //建筑面积
		        	if(this.accepCusEstates[i].coveredArea != null){
		        		this.accepCusEstates[i].coveredArea = this.formatNumber(this.accepCusEstates[i].coveredArea,2,0).replace(/,/g,'')+'㎡';
		        	};
		        	//console.log(this.accepCusEstates[i].monthlyPay);
		        };

		        /*车辆信息*/
		        this.accepCusCarInfos=res.data.accepCusCarInfos;
		        for(var i=0;i<this.accepCusCarInfos.length;i++){
		        	//车辆购置价 保留两位小数点
		        	if(this.accepCusCarInfos[i].carPrice != null){
			        	this.accepCusCarInfos[i].carPrice = this.formatNumber(this.accepCusCarInfos[i].carPrice,2,0);
			        };
			        //月供 保留两位小数点
		        	if(this.accepCusCarInfos[i].monthlyPay != null){
			        	this.accepCusCarInfos[i].monthlyPay = this.formatNumber(this.accepCusCarInfos[i].monthlyPay,2,0);
			        };
			        //贷款余额 保留两位小数点
		        	if(this.accepCusCarInfos[i].restLoans != null){
			        	this.accepCusCarInfos[i].restLoans = this.formatNumber(this.accepCusCarInfos[i].restLoans,2,0);
			        };
		        }

		        /*工作人员填写  加急费用*/
		        if(res.data != null){
		        	this.datas.emerAmt = this.formatNumber(this.datas.emerAmt,2,0);
		        };

		        /*您的借款需求*/
		        if(res.data.accepApplyLoan==null){
		        	this.accepApplyLoan=this.accepApplyLoan
		        }else{
		        	this.accepApplyLoan=res.data.accepApplyLoan;
		        	this.accepApplyLoan.loanAmt = this.formatNumber(this.accepApplyLoan.loanAmt,2,0);
		        	this.accepApplyLoan.eachTermAmt = this.formatNumber(this.accepApplyLoan.eachTermAmt,2,0);		        	
		        }

		        /*您的个人信息*/
		        if(res.data.accepCusBasicInfo==null){
		        	this.accepCusBasicInfo=this.accepCusBasicInfo
		        }else{
		        	this.accepCusBasicInfo=res.data.accepCusBasicInfo;
		        	var reg = /null/g;
		        	//投保地点
		        	if(this.accepCusBasicInfo.insurProvinceName == null && this.accepCusBasicInfo.insurCityName == null && this.accepCusBasicInfo.insurCountyName == null && this.accepCusBasicInfo.insurAddress == null){
		        		this.insurAddr = '';
		        	}else{
		        		this.insurAddr = this.accepCusBasicInfo.insurProvinceName + this.accepCusBasicInfo.insurCityName + this.accepCusBasicInfo.insurCountyName + this.accepCusBasicInfo.insurAddress;
		        		this.insurAddr = this.insurAddr.replace(reg,'');
		        	}
		        	
		        	//每月家庭支出
		        	if(this.accepCusBasicInfo.payAmt != null){
			        	this.accepCusBasicInfo.payAmt = this.formatNumber(this.accepCusBasicInfo.payAmt,2,0);
			        };
		        	//单张信用卡最高额度
		        	if(this.accepCusBasicInfo.cardMaxAmt != null){
			        	this.accepCusBasicInfo.cardMaxAmt = this.formatNumber(this.accepCusBasicInfo.cardMaxAmt,2,0);
			        };
		        	//期缴保费
		        	if(this.accepCusBasicInfo.eachPayAmt != null){
			        	this.accepCusBasicInfo.eachPayAmt = this.formatNumber(this.accepCusBasicInfo.eachPayAmt,2,0);
			        };
		        	//总保额
		        	if(this.accepCusBasicInfo.totalPayAmt != null){
		        		this.accepCusBasicInfo.totalPayAmt = this.formatNumber(this.accepCusBasicInfo.totalPayAmt,2,0);	
		        	};
		        	//户口所在地
		        	this.accepCusBasicInfo.homeDetailAddr = this.accepCusBasicInfo.homeDetailAddr.replace(reg,'');
		        	//现住宅地址
		        	this.accepCusBasicInfo.liveAddr = this.accepCusBasicInfo.liveAddr.replace(reg,'');   
		        }

		        /*私人业主信息*/
		        if(res.data.accepCusPrivate == null){
		        	this.accepCusPrivate =this.accepCusPrivate;
		        }else{
			        this.accepCusPrivate=res.data.accepCusPrivate;
			        //注册资金
			        if(this.accepCusPrivate.regCapitalAmt != null){
			        	this.accepCusPrivate.regCapitalAmt = this.formatNumber(this.accepCusPrivate.regCapitalAmt,2,0);
			    	};
			        //每月净利润额
			        if(this.accepCusPrivate.profitAmountMAmt != null){
			        	this.accepCusPrivate.profitAmountMAmt = this.formatNumber(this.accepCusPrivate.profitAmountMAmt,2,0);
			    	};
			        //月还款额/月租金
			        if(this.accepCusPrivate.monthRentAmt != null){
			        	this.accepCusPrivate.monthRentAmt = this.formatNumber(this.accepCusPrivate.monthRentAmt,2,0);
			    	};
			        //淡季销售额
			        if(this.accepCusPrivate.slowMonthSaleAmt != null){
			        	this.accepCusPrivate.slowMonthSaleAmt = this.formatNumber(this.accepCusPrivate.slowMonthSaleAmt,2,0);
			    	};
			        //旺季销售额
			        if(this.accepCusPrivate.peakMonthSaleAmt != null){
			        	this.accepCusPrivate.peakMonthSaleAmt = this.formatNumber(this.accepCusPrivate.peakMonthSaleAmt,2,0);
			    	};
			        //平季销售额
			        if(this.accepCusPrivate.avgMonthSaleAmt != null){
			        	this.accepCusPrivate.avgMonthSaleAmt = this.formatNumber(this.accepCusPrivate.avgMonthSaleAmt,2,0);
			    	};
			        //企业近一年利润
			        if(this.accepCusPrivate.oneYearProfitAmt != null){
			        	this.accepCusPrivate.oneYearProfitAmt = this.formatNumber(this.accepCusPrivate.oneYearProfitAmt,2,0);
			    	};
			        //企业近两年利润
			        if(this.accepCusPrivate.twoYearProfitAmt != null){
			        	this.accepCusPrivate.twoYearProfitAmt = this.formatNumber(this.accepCusPrivate.twoYearProfitAmt,2,0);
			    	};
			        //企业近三年利润
			        if(this.accepCusPrivate.threeYearProfitAmt != null){
			        	this.accepCusPrivate.threeYearProfitAmt = this.formatNumber(this.accepCusPrivate.threeYearProfitAmt,2,0);
			        };
			        //企业近一年纳税额
			        if(this.accepCusPrivate.oneYearTaxAmt != null){
			        	this.accepCusPrivate.oneYearTaxAmt = this.formatNumber(this.accepCusPrivate.oneYearTaxAmt,2,0);
			    	};
			        //企业近两年纳税额
			        if(this.accepCusPrivate.twoYearTaxAmt != null){
			        	this.accepCusPrivate.twoYearTaxAmt = this.formatNumber(this.accepCusPrivate.twoYearTaxAmt,2,0);
			    	};
			        //企业近三年纳税额
			        if(this.accepCusPrivate.threeYearTaxAmt != null){
			        	this.accepCusPrivate.threeYearTaxAmt = this.formatNumber(this.accepCusPrivate.threeYearTaxAmt,2,0);	
			    	};
			    	//占股比例
			    	if(this.accepCusPrivate.proShare != null){
			        	this.accepCusPrivate.proShare = this.formatNumber(this.accepCusPrivate.proShare,2,0)+"%";	
			    	};
			    	//企业净利润率
			    	if(this.accepCusPrivate.profitMargin != null){
			        	this.accepCusPrivate.profitMargin = this.formatNumber(this.accepCusPrivate.profitMargin,2,0)+"%";	
			    	};
			    	//营业面积
			    	if(this.accepCusPrivate.busiArea != null){
			        	this.accepCusPrivate.busiArea = this.formatNumber(this.accepCusPrivate.busiArea,2,0)+"㎡";	
			    	};
		    	};
		        /*您的工作信息*/
		        if(res.data.accepCusWorkInfo==null){
		        	this.accepCusWorkInfo=this.accepCusWorkInfo
		        }else{
		        	this.accepCusWorkInfo=res.data.accepCusWorkInfo;
		        	//社保缴纳基数
		        	if(this.accepCusWorkInfo.insureBase != null){
		        		this.accepCusWorkInfo.insureBase = this.formatNumber(this.accepCusWorkInfo.insureBase,2,0);
		        	};
		        	//公积金缴纳基数
		        	if(this.accepCusWorkInfo.fundBase != null){
		        		this.accepCusWorkInfo.fundBase = this.formatNumber(this.accepCusWorkInfo.fundBase,2,0);
		        	};
		        	//月均工资
		        	if(this.accepCusWorkInfo.avgSalaryAmt != null){
		        		this.accepCusWorkInfo.avgSalaryAmt = this.formatNumber(this.accepCusWorkInfo.avgSalaryAmt,2,0);
		        	};
		        	//其他收入
		        	if(this.accepCusWorkInfo.otherIncome != null){
			        	this.accepCusWorkInfo.otherIncome = this.formatNumber(this.accepCusWorkInfo.otherIncome,2,0);
			        };
			        //单位地址
			        var reg = /null/g;
			        this.accepCusWorkInfo.workAddr = this.accepCusWorkInfo.workAddr.replace(reg,'');
		        }

		        /*联系人信息*/
		        this.accepCusRelations=res.data.accepCusRelations;

		        if(this.datas.sourcesChan=='00'){//00
		            this.datas.sourcesChan="电销";
		        }else if(this.datas.sourcesChan=='01'){
	            	this.datas.sourcesChan="报纸";
	            }else if(this.datas.sourcesChan=='02'){
		            this.datas.sourcesChan="网络";
		        }else if(this.datas.sourcesChan=='03'){
		            this.datas.sourcesChan="促销活动";
		        }else if(this.datas.sourcesChan=='04'){
		            this.datas.sourcesChan="朋友介绍";
		        }else if(this.datas.sourcesChan=='05'){
		            this.datas.sourcesChan="销售开发";
		        }else if(this.datas.sourcesChan=='06'){
		            this.datas.sourcesChan="其他";
		        };
		        var query={
		        	appType:this.datas.appType,
		        	appTypeTxt:this.datas.appTypeTxt,
		        	certType:this.accepCusBasicInfo.certType,
		        	certTypeTxt:this.accepCusBasicInfo.certTypeTxt,
		        	certCode:this.accepCusBasicInfo.certCode,
		        	proName:this.datas.proName,
		        	loanTerm:this.accepApplyLoan.loanTerm,
		        	applyMainNo:this.datas.applyMainNo,
		        	applySubNo:this.datas.applySubNo,
		        	salPerEmployDate:this.datas.salPerEmployDate,
		        	appOrgRegisterDate:this.datas.appOrgRegisterDate,
		        	adminIntroduce:this.datas.adminIntroduce,
		        	applyId:this.datas.id,
		        	workName:this.datas.accepCusWorkInfo.workName,
		        	proId:this.datas.proId,
		        	proCode:this.datas.proCode,
		        	loanAmt:this.datas.accepApplyLoan.loanAmt,
		        	eachTermAmt:this.datas.accepApplyLoan.eachTermAmt,
		        	mainCustName:this.datas.mainCustName,   
		        	appOrgName:this.datas.appOrgName,
		        	loanType:this.datas.accepApplyLoan.loanType,
		        	loanTypeTxt:this.datas.accepApplyLoan.loanTypeTxt,  
		        	appOrgId:this.datas.appOrgId,
		        	appOrgCode:this.datas.appOrgCode,
		        	applyCustId:this.datas.accepCusBasicInfo.id,
		        	custNo:this.datas.accepCusBasicInfo.custNo,
		        	//客户名称
		        	custName:this.datas.accepCusBasicInfo.custName

		        };
		        /*console.log(this.datas);*/
		        localStorage.setItem("applicationInformationDetail",JSON.stringify(query));
		        /*将房产信息保存到本地*/
				if(res.data.accepCusEstates != ''){
					localStorage.setItem("house",JSON.stringify(res.data.accepCusEstates));
				};
				/*将车辆信息保存到本地*/
				if(res.data.accepCusCarInfos != ''){
					localStorage.setItem("car",JSON.stringify(res.data.accepCusCarInfos));
				};
			  });
				
			},
		 	handleChange(){

		 	},
		 	//保留两位小数 整数千分位
			formatNumber(num,cent,isThousand) {
				//console.log(num);
				/*if(num == null){
					console.log(num);
				};*/
				//if(num != null || num != ''){
				    num = num.toString().replace(/\$|\,/g,'');
				 
				  	// 检查传入数值为数值类型
				  	if(isNaN(num))
				    	num = "0";
				 
				  	// 获取符号(正/负数)
				  	let sign = (num == (num = Math.abs(num)));

				  	num = Math.floor(num*Math.pow(10,cent)+0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
				  	let cents = num%Math.pow(10,cent);       // 求出小数位数值
				  	num = Math.floor(num/Math.pow(10,cent)).toString();  // 求出整数位数值
				  	cents = cents.toString();        // 把小数位转换成字符串,以便求小数位长度
				 
				  	// 补足小数位到指定的位数
				  	while(cents.length<cent)
				    	cents = "0" + cents;
				 
			    	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			      		num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
				  
				  	if (cent > 0){
				  		//console.log(cent);
				  		//console.log(((sign)?'':'-') + num + '.' + cents);
				  		if(sign == true){
				  			return (((sign)?'':'-') + num + '.' + cents);
				  		}else if(sign == false){
				  			return '0.00'
				  		}
				  	}else{
				  		//console.log(((sign)?'':'-') + num);
				    	return (((sign)?'':'-') + num);
				    }
				//};
			},
		},
	}
</script>
<style type="text/css" scoped>
	.applicationInformationDetail{
		width: 100%;
		min-width: 1327px;
		height: 100%;
		/* background-color: #fafbfc; */
		font-size: 14px;
	}
	.applicationInformationDetail ul{
		width: 100%;
		height: 36px;
	}
	.applicationInformationDetail ul.firstUl{
		margin-top: 10px;
	}
	.applicationInformationDetail ul li{
		float: left;
		width: 33.3%;
		height: 24px;
		min-width: 330px;
	}
	ul li label{
		width: 166px;
		display: inline-block;
		text-align: right;
		/* position: relative; */
	}
	ul li .firstP{
		display: inline-block;
		width: 180px;
		height: 30px;
	}
	.channel{
		width: 336px;
		height: 40px;
		display: inline-block;
	}
	.channel textarea{
		width: 336px;
		height: 40px;
		border: 1px solid #d8dce5; 
	}
	.channel2{
		width: 336px;
		height: 30px;
		display: inline-block;
	}
	.channel2 textarea{
		width: 336px;
		height: 30px;
		border: 1px solid #d8dce5; 
	}
	.ellipsis{
		float: left;
		line-height: 30px;
	}
	.textBox{
		width: calc( 100% - 166px );
		height: 30px;
		line-height: 30px;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		float: left;
	}
	.spans{
		padding-right: 20px;
		display: inline-block;
		width: 150px;
		height: 100%;
	}
	/* 折叠面板头部背景色和icon */
	.icon_hat{
		padding: 9px 10px 10px 13px;
		vertical-align: middle;
	}
	.headFont{
		font-size: 16px;
	}
</style>