<!-- 申请信息详情 -->
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
						<label>获客渠道：</label><span>{{datas.dataSource}}</span><!-- 0线下、1线下转线上、2考拉、3H5、4诺优贷、5APP -->
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
				<ul v-if="accepApplyLoan.repaySource=='03'">
					<li>
						<label style="float:left;line-height:40px;">其他渠道还款说明：</label>
						<div class="channel">
							{{accepApplyLoan.repaySourceRemark}}<!-- <textarea></textarea> -->
						</div>
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
						<span>{{accepCusBasicInfo.proName}}</span>
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
						<label>户口所在地：</label>
						<span class="spans">{{accepCusBasicInfo.homeProvinceName}}</span>
						<span class="spans">{{accepCusBasicInfo.homeCityName}}</span>
						<span class="spans">{{accepCusBasicInfo.homeCountyName}}</span>
						<span>{{accepCusBasicInfo.homeAddress}}</span>
					</li>
					<li>
						<label>户口所在地邮编：</label>
						<span>{{accepCusBasicInfo.homeZip}}</span>
					</li>
				</ul>
				<ul>
					<li class="province" style="width:66.6%">
						<label>现住宅地址：</label>
						<span class="spans">{{accepCusBasicInfo.liveProvinceName}}</span>
						<span class="spans">{{accepCusBasicInfo.liveCityName}}</span>
						<span class="spans">{{accepCusBasicInfo.liveCountyName}}</span>
						<span class="spans">{{accepCusBasicInfo.liveAddress}}</span>
					</li>
					<li>
						<label>住宅地邮编：</label>
						<span>{{accepCusBasicInfo.liveZip}}</span>
					</li>
				</ul>
				<ul>
					<li style="width:66.6%">
						<label>收入来源：</label>
						<div class="channel2">
							{{accepCusBasicInfo.incomeSource}}<!-- </textarea><textarea> -->
						</div>
					</li>
					<li>
						<label>借款人职业情况：</label>
						<span>{{accepCusBasicInfo.professionTxt}}</span>
					</li>
				</ul>
				<ul>
					<li style="width:66.6%">
						<label>其他收入：</label>
						<div class="channel2">
							{{accepCusBasicInfo.otherIncome}}<!-- <textarea></textarea> -->
						</div>
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
						<label>投保地点：</label>
						<span>{{accepCusBasicInfo.insurProvinceName}}</span>
						<span>{{accepCusBasicInfo.insurCityName}}</span>
						<span>{{accepCusBasicInfo.insurCountyName}}</span>
						<span>{{accepCusBasicInfo.insurAddress}}</span>
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
							<label>被保人姓名[元]：</label>
							<span>{{accepCusBasicInfo.insurerName}}</span>
						</li>
						<li>
							<label>被保人联系电话：</label>
							<span>{{accepCusBasicInfo.insurerTel}}</span>			
						</li>
						<li>
							<label>生效日期[月]：</label>
							<span>{{accepCusBasicInfo.insurEffectDate}}</span>	
						</li>
					</ul>
				</div>
				<ul>
					<li>
						<label>是否是私营业主:</label>
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
						<span>{{accepCusPrivate.profitMargin}}</span>
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
				<ul>
					<li>
						<label>企业经营项目说明：</label>
						<div class="channel2">
							{{accepCusPrivate.projectManage}}<!-- <textarea></textarea> -->
						</div>
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
						<label>平季销售额：</label>
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
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="estateTypeTxt"
				        label="房产类型">
				      </el-table-column>
				      <el-table-column
				        prop="propertyTypeTxt"
				        label="产权性质">
				      </el-table-column>
				      <el-table-column
				        prop="coveredArea"
				        label="建筑面积[m^2]">
				      </el-table-column>
				      <el-table-column
				        prop="unitPrice"
				        label="建筑单价[元]">
				      </el-table-column>
				      <el-table-column
				        prop="estateAddress"
				        label="房产地址">
				      </el-table-column>
				      <el-table-column
				        prop="estateZip"
				        label="邮政编码">
				      </el-table-column>
				      <el-table-column
				        prop="equityRatio"
				        label="产权比例">
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]">
				      </el-table-column>
				      <el-table-column
				        prop="mortgageStatusTxt"
				        label="抵押状况">
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]">
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[元]">
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
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="carPrice"
				        label="车辆购置价[元]">
				      </el-table-column>
				      <el-table-column
				        prop="isYearCheckTxt"
				        label="是否年检">
				      </el-table-column>
				      <el-table-column
				        prop="isOperateTxt"
				        label="是否非运营">
				      </el-table-column>
				      <el-table-column
				        prop="carModel"
				        label="车辆型号">
				      </el-table-column>
				      <el-table-column
				        prop="carTypeTxt"
				        label="车辆类型">
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]">
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]">
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[月]">
				      </el-table-column>
				      <el-table-column
				        prop="carNo"
				        label="车牌号码">
				      </el-table-column>
				      <el-table-column
				        prop="buyInsurTxt"
				        label="车辆易购保险">
				      </el-table-column>
				      <el-table-column
				        prop="buyDate"
				        label="购买时间">
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
						<label style="float:left;">工作单位：</label>
					    <div class="textBox">{{accepCusWorkInfo.workName}}</div>
					</li>
					<li>
						<label>单位性质：</label>
					    <span>{{accepCusWorkInfo.workSignTxt}}</span>
					</li>
				</ul>
				<ul>
					<li style="width:66.6%;">
						<label>单位地址：</label>
						<span class="spans">{{accepCusWorkInfo.workProvinceName}}</span>
						<span class="spans">{{accepCusWorkInfo.workCityName}}</span>
						<span class="spans">{{accepCusWorkInfo.workCountyName}}</span>
						<span>{{accepCusWorkInfo.workAddress}}</span>
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
						<label style="float:left;">前单位名称：</label>
						<div class="textBox">{{accepCusWorkInfo.befWorkName}}</div>
					</li>
				</ul>
				<ul>
					<li>
						<label>前单位电话：</label>
						<span>{{accepCusWorkInfo.befworkTel}}</span>
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
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="contactName"
				        label="姓名">
				      </el-table-column>
				      <el-table-column
				        prop="contactTypeTxt"
				        label="类型">
				      </el-table-column>
				      <el-table-column
				        prop="relationshipTxt"
				        label="关系">
				      </el-table-column>
				      <el-table-column
				        prop="mobile"
				        label="手机号码">
				      </el-table-column>
				      <el-table-column
				        prop="homeTel"
				        label="住宅电话">
				      </el-table-column>
				      <el-table-column
				        prop="contactAge"
				        label="年龄">
				      </el-table-column>
				      <el-table-column
				        prop="certTypeTxt"
				        label="证件类型">
				      </el-table-column>
				      <el-table-column
				        prop="certCode"
				        label="证件号码">
				      </el-table-column>
				      <el-table-column
				        prop="workName"
				        label="单位名称">
				      </el-table-column>
				      <el-table-column
				        prop="workTel"
				        label="单位电话">
				      </el-table-column>
				      <el-table-column
				        prop="workAddr"
				        label="地址">
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
				
			};
		},
		created(){
			//一进入页面就发送请求
			this.request();
		},
		methods:{
			request(){
	    		this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
		        'id':'a8d02f0d-0718-4d91-b6bb-14f3b24036a7'
		      }).then(res => {
		      	this.datas=res.data;
		        /*console.log(res);*/
		        /*房产信息*/
		        this.accepCusEstates=res.data.accepCusEstates;

		        /*车辆信息*/
		        this.accepCusCarInfos=res.data.accepCusCarInfos;

		        /*您的借款需求*/
		        this.accepApplyLoan=res.data.accepApplyLoan;

		        /*您的个人信息*/
		        this.accepCusBasicInfo=res.data.accepCusBasicInfo;

		        /*私人业主信息*/
		        this.accepCusPrivate=res.data.accepCusPrivate;

		        /*您的工作信息*/
		        this.accepCusWorkInfo=res.data.accepCusWorkInfo;

		        /*联系人信息*/
		        this.accepCusRelations=res.data.accepCusRelations;

		        if(this.datas.dataSource=='0'){//00
		            this.datas.dataSource="线下";
		        }else if(this.datas.dataSource=='1'){
	            	this.datas.dataSource="线下转线上";
	            }else if(this.datas.dataSource=='2'){
		            this.datas.dataSource="考拉";
		        }else if(this.datas.dataSource=='3'){
		            this.datas.dataSource="H5";
		        }else if(this.datas.dataSource=='4'){
		            this.datas.dataSource="诺优贷";
		        }else if(this.datas.dataSource=='5'){
		            this.datas.dataSource="APP";
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
		        	adminIntroduce:this.datas.adminIntroduce
		        };
		        /*console.log(this.datas);*/
		        localStorage.setItem("applicationInformationDetail",JSON.stringify(query));
			    });
			},
		 	handleChange(){

		 	},
		},
	}
</script>
<style type="text/css" scoped>
	.applicationInformationDetail{
		width: 100%;
		min-width: 1366px;
		height: 100%;
		background-color: #fafbfc;
		font-size: 14px;
	}
	.applicationInformationDetail ul{
		width: 100%;
		height: 50px;
	}
	.applicationInformationDetail ul li{
		float: left;
		width: 33.3%;
		margin-top: 10px;
		position: relative;
		min-width: 336px;
	}
	.applicationInformationDetail ul li span{
		
	}
	ul li label{
		width: 178px;
		display: inline-block;
		text-align: right;
		position: relative;
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
	.textBox{
		width: 66.6%;
		height: 30px;
		display: inline-block;
	}
	.spans{
		padding-right: 20px;
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