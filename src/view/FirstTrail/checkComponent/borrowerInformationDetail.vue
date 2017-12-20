<!-- 借款人资料详情 -->
<template>
	<div class="borrowerInformationSetail">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="房产信息" name="1">
				<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">房产信息</span>
				    </div>
			    </template>
			    <el-table
			      :data="borestateList"
			      style="width: 100%"
			      class="house"
			      border>
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号"
				      	min-width="50" >
				      </el-table-column>
				      <el-table-column
				        prop="estateType"
				        label="房产类型"
				        min-width="130">
				      </el-table-column>
				      <el-table-column
				        prop="propertyType"
				        label="产权性质"
				        min-width="130">
				      </el-table-column>
				      <el-table-column
				        prop="coveredArea"
				        label="建筑面积[m^2]"
				        min-width="130">
				      </el-table-column>
				      <el-table-column
				        prop="unitPrice"
				        label="建筑单价[元]"
				        min-width="130">
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
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="equityRatio"
				        label="产权比例"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]"
				        min-width="130"
				        >
				      </el-table-column>
				      <el-table-column
				        prop="mortgageStatus"
				        label="抵押状况"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[元]"
				        min-width="130">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="车辆信息" name="2">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">车辆信息</span>
				    </div>
			    </template>
			    <el-table
			      :data="carInfoList"
			      style="width: 100%"
			      class="car"
			      border>
				      <el-table-column
				        type="index"
				      	:index='1' 
				      	label="序号"
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="carPrice"
				        label="车辆购置价[元]"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="isYearCheck"
				        label="是否年检"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="isOperate"
				        label="是否非运营"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="carModel"
				        label="车辆型号"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="carType"
				        label="车辆类型"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[月]"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="carNo"
				        label="车牌号码"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="buyInsur"
				        label="车辆易购保险"
				        min-width="110">
				      </el-table-column>
				      <el-table-column
				        prop="buyDate"
				        label="购买时间"
				        min-width="120">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用明细" name="3">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">信用卡使用明细</span>
				    </div>
			    </template>
			    <el-table
			      :data="cardDetList"
			      style="width: 100%"
			      class="card"
			      border>
				      <el-table-column
				        type="index"
				      	:index='1' 
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="bankName"
				        label="银行名称"
				        min-width="150">
				      </el-table-column>
				      <el-table-column
				        prop="cardUseDate"
				        label="开卡日期"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="cardAmt"
				        label="信用额度"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="usedAmt"
				        label="已使用额度"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="repayDay"
				        label="还款日"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="actRepaymentAmt"
				        label="本期应还款金额"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="realRepaymentAmt"
				        label="本期实际还款金额"
				        min-width="150">
				      </el-table-column>
				      <el-table-column
				        prop="isOverdue"
				        label="是否逾期"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="currOverdueTimes"
				        label="当前逾期期数"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="maxOverdueTimes"
				        label="最高逾期期数"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="overdueTimes"
				        label="近12个月累计逾期次数"
				        min-width="170">
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态"
				        min-width="100">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用总况" name="4">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">信用卡使用总况</span>
				    </div>
			    </template>
		  		<div class="xinyongka">
		  			<ul>
				    	<li><label>信用卡张数：</label><span>{{borCard.cardCount}}</span></li>
				    	<li><label>正常使用张数：</label><span>{{borCard.normalCount}}</span></li>
				    	<li><label>呆帐数量：</label><span>{{borCard.badDebtCount}}</span></li>
				    </ul>
				    <ul>
				    	<li><label>未开卡张数：</label><span>{{borCard.nouseCount}}</span></li>
				    	<li><label>冻结数量：</label><span>{{borCard.freezeCount}}</span></li>
				    	<li><label>销户数量：</label><span>{{borCard.cancelCount}}</span></li>
				    </ul>
				    <ul>
				    	<li><label>已使用张数：</label><span>{{borCard.userdCount}}</span></li>
				    	<li><label>止付数量：</label><span>{{borCard.stopPaymentCount}}</span></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款明细" name="5">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">贷款明细</span>
				    </div>
			    </template>
			    <el-table
			      :data="loanDetailList"
			      style="width: 100%"
			      class="loan"
			      border>
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号"	 
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="loanType"
				        label="贷款种类"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="guaranteeType"
				        label="担保方式"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="repayFrequency"
				        label="还款频率"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="loanBeginDate"
				        label="贷款发放日期"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="loanExpireDate"
				        label="贷款到期日期"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="loanContValue"
				        label="贷款合同金额[元]"
				        min-width="140">
				      </el-table-column>
				      <el-table-column
				        prop="loanRepayDate"
				        label="应还款日期"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="loanBal"
				        label="贷款余额[元]"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="remainMonth"
				        label="剩余还款月数"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="presentRepayAmt"
				        label="本期应还款金额[元]"
				        min-width="150">
				      </el-table-column>
				      <el-table-column
				        prop="curMonthRepayAmt"
				        label="本期实际还款金额[元]"
				        min-width="170">
				      </el-table-column>
				      <el-table-column
				        prop="lastRepayDate"
				        label="最后一次还款日期"
				        min-width="150">
				      </el-table-column>
				      <el-table-column
				        prop="presentOverAmt"
				        label="当前逾期金额"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="overTimes"
				        label="累计逾期次数"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="maxOverTimes"
				        label="最高逾期期数"
				        min-width="120">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款总况" name="6">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">贷款总况</span>
				    </div>
			    </template>
		  		<div class="xinyongka daikuanzongkuang">
		  			<ul>
				    	<li><label>车贷共有笔数:</label><span>{{loanInfo.carLoanTotal}}</span></li>
				    	<li><label>信用贷总笔数:</label><span>{{loanInfo.studentLoanTotal}}</span></li>
				    	<li><label>房贷总笔数:</label><span>{{loanInfo.houseLoanTotal}}</span></li>
				    	<li><label>其他贷款总笔数:</label><span>{{loanInfo.otherLoanTotal}}</span></li>
				    </ul>
				    <ul>
				    	<li><label>车贷现存笔数:</label><span>{{loanInfo.carLoanNoPayoff}}</span></li>
				    	<li><label>信用贷现存笔数:</label><span>{{loanInfo.studentLoanNoPayoff}}</span></li>
				    	<li><label>房贷现存笔数:</label><span>{{loanInfo.houseLoanNoPayoff}}</span></li>
				    	<li><label>其他贷现存笔数:</label><span>{{loanInfo.otherLoanNoPayoff}}</span></li>
				    </ul>
				    <ul>
				    	<li><label>车贷结清笔数:</label><span>{{loanInfo.carLoanPayoff}}</span></li>
				    	<li><label>信用贷结清笔数:</label><span>{{loanInfo.studentLoanPayoff}}</span></li>
				    	<li><label>房贷结清笔数:</label><span>{{loanInfo.houseLoanPayoff}}</span></li>
				    	<li><label>其他贷款结清笔数:</label><span>{{loanInfo.otherLoanPayoff}}</span></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="负债信息" name="7">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">负债信息</span>
				    </div>
			    </template>
		  		<div class="fuzhaixinxi">
		  			<ol>
				    	<li>
				    		<label>信用卡每月还款[元]:</label>
				    		<span>{{borDebt.monthRepayAmt}}</span>
				    		<!-- <el-input v-model="borDebt.monthRepayAmt"></el-input> -->
				    	</li>
				    	<li>
				    		<label>信用贷每月还款额[元]:</label>
				    		<span>{{borDebt.studentLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.studentLoanAmt"></el-input> -->
				    	</li>
				    	<li>
				    		<label>房贷每月还款额[元]:</label>
				    		<span>{{borDebt.houseLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.houseLoanAmt"></el-input> -->
				    	</li>
				    </ol>
				    <ol>
				    	<li>
				    		<label>车贷每月还款额[元]:</label>
				    		<span>{{borDebt.carLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.carLoanAmt"></el-input></li> -->
				    	<li>
				    		<label>其他贷款每月还款额[元]:</label>
				    		<span>{{borDebt.otherLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.otherLoanAmt"></el-input></li> -->
				    	<li class="zongji">
				    		<label>负债合计[元]:</label>
				    		<span>{{borDebt.totalLoan}}</span>
				    		<!-- <el-input v-model="borDebt.totalLoan"></el-input> -->
				    	</li>
				    </ol>
				    <ol class="num">
				    	<li>
				    		<label>最近三个月信用卡/贷款申请次数:</label>
				    		<span>{{borDebt.loanNumber}}</span>
				    		<!-- <el-input v-model="borDebt.loanNumber"></el-input> -->
				    	</li>
				    	<li>
				    		<label>文字说明:</label>
				    		<el-tooltip class="item" effect="dark" :content="borDebt.remark" placement="top">
						      <div>{{borDebt.remark}}</div>
						    </el-tooltip>
				    	</li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="征询报告" name="8">
				<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">征询报告</span>
				    </div>
			    </template>
		  		<div class="fuzhaixinxi zhengxunbaogao">
		  			<ol>
				    	<li>
				    		<label>报告来源:</label>
				    		<el-tooltip class="item" effect="dark" :content="rptInfo.crSource" placement="top">
						      <span>{{rptInfo.crSource}}</span>
						    </el-tooltip>
				    		
				    		<!-- <el-input v-model="rptInfo.crSource"></el-input> -->
				    	</li>
					    <li>
					    	<label>有无征信报告查询记录:</label>
					    	<span>{{rptInfo.crHasRecord}}</span>
					    	<!-- <el-input v-model="rptInfo.crHasRecord"></el-input> -->
						</li>
				    	<li>
				    		<label>近6个月内信用报告查询次数:</label>
				    		<span>{{rptInfo.crRecordTimes}}</span>
				    		<!-- <el-input v-model="rptInfo.crRecordTimes"></el-input> -->
				    	</li>
				    </ol>
				    <ol>
				    	<li>
				    		<label>报告描述:</label>
				    		<el-tooltip class="item" effect="dark" :content="rptInfo.crContent" placement="top">
						      <div v-bind:title="rptInfo.crContent">{{rptInfo.crContent}}</div>
						    </el-tooltip>
				    	</li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="流水明细" name="9">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">流水明细</span>
				    </div>
			    </template>
			    <el-table
			      :data="incomeList"
			      style="width: 100%"
			      class="income"
			      border>
				      <el-table-column
				        type="index"
				      	:index='1' 
				      	label="序号"
				      	min-width='50'>
				      </el-table-column>
				      <el-table-column
				        prop="incomeTypeTxt"
				        label="流水类型">
				      </el-table-column>
				      <el-table-column
				        prop="n"
				        label="N">
				      </el-table-column>
				      <el-table-column
				        prop="n1"
				        label="N-1">
				      </el-table-column>
				      <el-table-column
				        prop="n2"
				        label="N-2">
				      </el-table-column>
				      <el-table-column
				        prop="n3"
				        label="N-3">
				      </el-table-column>
				      <el-table-column
				        prop="n4"
				        label="N-4">
				      </el-table-column>
				      <el-table-column
				        prop="n5"
				        label="N-5">
				      </el-table-column>
				      <!-- <el-table-column
				        prop="address"
				        label="计算">
				      </el-table-column> -->
				      <el-table-column
				        prop="avgIncome"
				        label="平均收入[元]">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="其他信息" name="10">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">其他信息</span>
				    </div>
			    </template>
		  		<div class="qita">
				    <ol>
				    	<li>
				    		<label>其他:</label>
				    		<el-tooltip class="item" effect="dark" :content="otherInfo.content" placement="top">
						      <div v-bind:title="otherInfo.content">{{otherInfo.content}}</div>
						    </el-tooltip>
				    	</li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        activeNames: ['1','2','3','4','5','6','7','8','9','10'],
	        datas:[],
	        /*房产信息*/
	        borestateList:[],
	        /*车辆信息*/
	        carInfoList:[],
	        /*信用卡使用明细*/
	        cardDetList:[],
	        /*信用卡使用总况*/
	        borCard:'',
	        /*贷款明细*/
	        loanDetailList:[],
	        /*贷款总况*/
	        loanInfo:'',
	        /*负债信息*/
	        borDebt:'',
	        /*征询报告*/
	        rptInfo:'',
	        /*流水明细*/
	        incomeList:[],
	        /*其他信息*/
	        otherInfo:'',

	        taskInWaitting:'',
	      };
	    },
	    created(){
			//一进入页面就发送请求
			this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
			this.request(this.taskInWaitting.applyId);
		},
	    methods:{
	    	handleChange(){

	    	},
	    	request(param){
	    		this.post("/borrower/getBorrowerInfo", {
		        'applyId':param
		      }).then(res => {
		        /*console.log(res);*/
		        /*房产信息*/
		        this.borestateList=res.data.borestateList;
		        for(var i=0;i<this.borestateList.length;i++){
		        	if(this.borestateList[i].estateType=='01'){
		        		this.borestateList[i].estateType = '租用'
		        	}else if(this.borestateList[i].estateType=='02'){
		        		this.borestateList[i].estateType = '商业按揭购房'
		        	}else if(this.borestateList[i].estateType=='03'){
		        		this.borestateList[i].estateType = '公积金按揭购房'
		        	}else if(this.borestateList[i].estateType=='04'){
		        		this.borestateList[i].estateType = '无按揭购房'
		        	}else if(this.borestateList[i].estateType=='05'){
		        		this.borestateList[i].estateType = '自建房'
		        	}else if(this.borestateList[i].estateType=='06'){
		        		this.borestateList[i].estateType = '亲属住房'
		        	}else if(this.borestateList[i].estateType=='07'){
		        		this.borestateList[i].estateType = '单位宿舍'
		        	};
		        	if(this.borestateList[i].propertyType =='01'){
		        		this.borestateList[i].propertyType = '宅基地'
		        	}else if(this.borestateList[i].propertyType	=='02'){
		        		this.borestateList[i].propertyType = '自建房'
		        	}else if(this.borestateList[i].propertyType	=='03'){
		        		this.borestateList[i].propertyType = '小产权'
		        	}else if(this.borestateList[i].propertyType	=='04'){
		        		this.borestateList[i].propertyType = '期房'
		        	}else if(this.borestateList[i].propertyType	=='05'){
		        		this.borestateList[i].propertyType = '公租房'
		        	}else if(this.borestateList[i].propertyType	=='06'){
		        		this.borestateList[i].propertyType = '经济适用房'
		        	}else if(this.borestateList[i].propertyType	=='07'){
		        		this.borestateList[i].propertyType = '土地证'
		        	}else if(this.borestateList[i].propertyType	=='08'){
		        		this.borestateList[i].propertyType = '大产权'
		        	};
		        	if(this.borestateList[i].mortgageStatus =='0'){
		        		this.borestateList[i].mortgageStatus = '已抵押'
		        	}else if(this.borestateList[i].mortgageStatus	=='1'){
		        		this.borestateList[i].mortgageStatus = '未抵押'
		        	};

		        }
		        /*车辆信息*/
		        this.carInfoList=res.data.carInfoList;
		        for(var i=0;i<this.carInfoList.length;i++){
		        	if(this.carInfoList[i].isYearCheck=='0'){
		        		this.carInfoList[i].isYearCheck = '否'
		        	}else if(this.carInfoList[i].isYearCheck=='1'){
		        		this.carInfoList[i].isYearCheck = '是'
		        	};
		        	if(this.carInfoList[i].isOperate =='0'){
		        		this.carInfoList[i].isOperate = '否'
		        	}else if(this.carInfoList[i].isOperate	=='1'){
		        		this.carInfoList[i].isOperate = '是'
		        	};
		        	if(this.carInfoList[i].carType =='00'){
		        		this.carInfoList[i].carType = '按揭购车'
		        	}else if(this.carInfoList[i].carType =='01'){
		        		this.carInfoList[i].carType = '无按揭购车'
		        	};
		        	if(this.carInfoList[i].buyInsur =='00'){
		        		this.carInfoList[i].buyInsur = '交强险'
		        	}else if(this.carInfoList[i].buyInsur =='01'){
		        		this.carInfoList[i].buyInsur = '商业险'
		        	}else if(this.carInfoList[i].buyInsur =='02'){
		        		this.carInfoList[i].buyInsur = '车损险'
		        	};

		        }
		        /*信用卡使用明细*/
		        this.cardDetList=res.data.cardDetList;
		        for(var i=0;i<this.cardDetList.length;i++){
		        	if(this.cardDetList[i].isOverdue=='0'){
		        		this.cardDetList[i].isOverdue = '否'
		        	}else if(this.cardDetList[i].isOverdue=='1'){
		        		this.cardDetList[i].isOverdue = '是'
		        	};
		        	
		        	if(this.cardDetList[i].accountStatus =='01'){
		        		this.cardDetList[i].accountStatus = '正常'
		        	}else if(this.cardDetList[i].accountStatus	=='02'){
		        		this.cardDetList[i].accountStatus = '冻结'
		        	}else if(this.cardDetList[i].accountStatus	=='03'){
		        		this.cardDetList[i].accountStatus = '止付'
		        	}else if(this.cardDetList[i].accountStatus	=='04'){
		        		this.cardDetList[i].accountStatus = '销户'
		        	}else if(this.cardDetList[i].accountStatus	=='05'){
		        		this.cardDetList[i].accountStatus = '呆帐'
		        	}else if(this.cardDetList[i].accountStatus	=='06'){
		        		this.cardDetList[i].accountStatus = '未激活'
		        	}else if(this.cardDetList[i].accountStatus	=='07'){
		        		this.cardDetList[i].accountStatus = '转出'
		        	}else if(this.cardDetList[i].accountStatus	=='08'){
		        		this.cardDetList[i].accountStatus = '核销'
		        	};
		        }
		        /*信用卡使用总况*/
		        this.borCard=res.data.borCard;
		        /*贷款明细*/
		        this.loanDetailList=res.data.loanDetailList;
		        for(var i=0;i<this.loanDetailList.length;i++){
		        	if(this.loanDetailList[i].loanType=='01'){
		        		this.loanDetailList[i].loanType = '车贷'
		        	}else if(this.loanDetailList[i].loanType=='02'){
		        		this.loanDetailList[i].loanType = '房贷'
		        	}
		        	else if(this.loanDetailList[i].loanType=='03'){
		        		this.loanDetailList[i].loanType = '信用贷'
		        	}
		        	else if(this.loanDetailList[i].loanType=='04'){
		        		this.loanDetailList[i].loanType = '其他贷款'
		        	};

		        	if(this.loanDetailList[i].guaranteeType=='01'){
		        		this.loanDetailList[i].guaranteeType = '信用'
		        	}else if(this.loanDetailList[i].guaranteeType=='02'){
		        		this.loanDetailList[i].guaranteeType = '信用+抵押'
		        	}else if(this.loanDetailList[i].guaranteeType=='03'){
		        		this.loanDetailList[i].guaranteeType = '抵押'
		        	}
		        	else if(this.loanDetailList[i].guaranteeType=='04'){
		        		this.loanDetailList[i].guaranteeType = '质押'
		        	}
		        	else if(this.loanDetailList[i].guaranteeType=='05'){
		        		this.loanDetailList[i].guaranteeType = '抵押+质押'
		        	};
		        	if(this.loanDetailList[i].accountStatus=='00'){
		        		this.loanDetailList[i].accountStatus = '正常'
		        	}else if(this.loanDetailList[i].accountStatus=='01'){
		        		this.loanDetailList[i].accountStatus = '逾期'
		        	}else if(this.loanDetailList[i].accountStatus=='02'){
		        		this.loanDetailList[i].accountStatus = '结清'
		        	};

		        	if(this.loanDetailList[i].repayFrequency=='01'){
		        		this.loanDetailList[i].repayFrequency = '1个月'
		        	}else if(this.loanDetailList[i].repayFrequency=='02'){
		        		this.loanDetailList[i].repayFrequency = '3个月'
		        	}else if(this.loanDetailList[i].repayFrequency=='03'){
		        		this.loanDetailList[i].repayFrequency = '一次性还清'
		        	};

		        }
		        /*贷款总况*/
		        this.loanInfo=res.data.loanInfo;
		        /*负债信息*/
		        this.borDebt=res.data.borDebt;
		        /*征询报告*/
		        this.rptInfo=res.data.rptInfo;
		        /*流水明细*/
		        this.incomeList=res.data.incomeList;
		        /*其他信息*/
		        this.otherInfo=res.data.otherInfo;
		        /*console.log(this.datas);*/
		      });
		  },
	    }
	}
</script>
<style type="text/css" scoped>
	.borrowerInformationSetail{
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		font-size: 14px;
		min-width: 926px;
	}
	/* 折叠面板头部背景色 */
	.icon_hat{
		padding: 9px 10px 10px 13px;
		vertical-align: middle;
	}
	.headFont{
		font-size: 16px;
	}
	/* 信用卡使用总况 */
	.xinyongka{
		width: 926px;
	}
	.xinyongka ul{
		float: left;
		width: 33.3%;
		margin-bottom: 20px;
		/* text-align: center; */
	}
	.xinyongka ul li{
		margin-top: 20px;
	}
	.xinyongka ul li label{
		width: 120px;
		display: inline-block;
		text-align: right;
	}
	.daikuanzongkuang{
		width: 926px;
	}
	/* 贷款总况 */
	.xinyongka.daikuanzongkuang ul li label{
		padding-right: 10px;
		width: 128px;
	}
  table.mytable{
    /* border-width: 1px;
    border-color: #666666; */
    border: 1px solid #d8dce5;  
    border-collapse: collapse;
  }
  table.mytable th {  
        padding: 8px;
        border: 1px solid #d8dce5;  
        background-color: #e6ebf5;
  }
/* 负债信息 */
.fuzhaixinxi{
	width: 926px;
}
.fuzhaixinxi ol{
	width: 100%;
}
.fuzhaixinxi ol li{
	width: 33.3%;
	float: left;
	margin-top:20px;
	/* text-align: center; */
}
.fuzhaixinxi ol li label{
	display: inline-block;
	width: 160px;
	text-align: right;
	padding-right: 5px;
}
/* 负债信息：负债合计 */
.fuzhaixinxi ol li.zongji input{
	border: none;
}
/* 负债信息：文字说明 */
ol.num li{
	margin-bottom: 10px;
}
ol.num li:nth-of-type(1) label{
	float: left;
}
ol.num li:nth-of-type(1) span{
	height: 54px;
	line-height: 54px;
}
ol.num li:nth-of-type(2){
	width: 66.6%;
	text-align: left;
	padding: 0 calc( 16.6% - 155px );
}
ol.num li:nth-of-type(2) label{
	height: 54px;
	line-height: 54px;
}
ol.num li:nth-of-type(2) div{
	width: calc( 100% - 160px );
	height: 54px;
	float: right;
	padding-left: 10px;
	overflow: auto;
	/* border: 1px solid #d8dce5; 
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: box;
	line-clamp: 2;
	box-orient: vertical; */
}
/* 征询报告 */
.zhengxunbaogao ol{
	width: 100%;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(1) label{
	float: left;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(1) span{
	width: 142px;
	height: 35px;
	display: inline-block;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(3) label{
	width: 186px;
}
.zhengxunbaogao ol:nth-of-type(2) li{
	width: 100%;
	text-align: left;
	padding-left: calc( 16.6% - 178px );
	margin-bottom: 20px;
	margin-top: 0;
}
.zhengxunbaogao ol:nth-of-type(2) li label{
	line-height: 75px;
	float: left;
}
.zhengxunbaogao ol:nth-of-type(2) li div{
	float: left;
	height: 75px;
	width: calc( 66.6% - 170px );
	padding-left: 10px;
	overflow: auto;
	/* overflow: hidden;
	border: 1px solid #d8dce5;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	display: box;
	line-clamp: 3;
	box-orient: vertical; */
}
.reportLabel{
	float: left;
	height: 50px;
	line-height: 50px;
}
/* 其他信息 */
.qita{
	width: 100%;
}
.qita ol li{
	width: 100%;
	margin-top: 20px;
}
.qita ol div{
	display: inline-block;
	width: calc( 66.6% - 170px );
	height: 117px;
	overflow: auto;
	padding-left: 10px;
	/* overflow: hidden;
	border: 1px solid #d8dce5;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	display: box;
	line-clamp: 5;
	box-orient: vertical; */
}
.qita ol label{
	height: 117px;
	width: 160px;
	text-align: right;
	line-height: 117px;
	display: inline-block;
	float: left;
	padding-right: 10px;
}
</style>