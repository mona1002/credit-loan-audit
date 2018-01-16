<!-- 内匹 借款人资料详情 -->
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
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="propertyType"
				        label="产权性质"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="coveredArea"
				        label="建筑面积[m²]"
				        min-width="120">
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
				        min-width="110"
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
				        min-width="110">
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
				      	label="序号" 
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
				    	<li><label>车贷共有笔数：</label><span>{{loanInfo.carLoanTotal}}</span></li>
				    	<li><label>信用贷总笔数：</label><span>{{loanInfo.studentLoanTotal}}</span></li>
				    	<li><label>房贷总笔数：</label><span>{{loanInfo.houseLoanTotal}}</span></li>
				    	<li><label>其他贷款总笔数：</label><span>{{loanInfo.otherLoanTotal}}</span></li>
				    </ul>
				    <ul>
				    	<li><label>车贷现存笔数：</label><span>{{loanInfo.carLoanNoPayoff}}</span></li>
				    	<li><label>信用贷现存笔数：</label><span>{{loanInfo.studentLoanNoPayoff}}</span></li>
				    	<li><label>房贷现存笔数：</label><span>{{loanInfo.houseLoanNoPayoff}}</span></li>
				    	<li><label>其他贷现存笔数：</label><span>{{loanInfo.otherLoanNoPayoff}}</span></li>
				    </ul>
				    <ul>
				    	<li><label>车贷结清笔数：</label><span>{{loanInfo.carLoanPayoff}}</span></li>
				    	<li><label>信用贷结清笔数：</label><span>{{loanInfo.studentLoanPayoff}}</span></li>
				    	<li><label>房贷结清笔数：</label><span>{{loanInfo.houseLoanPayoff}}</span></li>
				    	<li><label>其他贷款结清笔数：</label><span>{{loanInfo.otherLoanPayoff}}</span></li>
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
				    		<label>信用卡每月还款[元]：</label>
				    		<span>{{borDebt.monthRepayAmt}}</span>
				    		<!-- <el-input v-model="borDebt.monthRepayAmt"></el-input> -->
				    	</li>
				    	<li>
				    		<label>信用贷每月还款额[元]：</label>
				    		<span>{{borDebt.studentLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.studentLoanAmt"></el-input> -->
				    	</li>
				    	<li>
				    		<label>房贷每月还款额[元]：</label>
				    		<span>{{borDebt.houseLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.houseLoanAmt"></el-input> -->
				    	</li>
				    </ol>
				    <ol>
				    	<li>
				    		<label>车贷每月还款额[元]：</label>
				    		<span>{{borDebt.carLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.carLoanAmt"></el-input></li> -->
				    	<li>
				    		<label>其他贷款每月还款额[元]：</label>
				    		<span>{{borDebt.otherLoanAmt}}</span>
				    		<!-- <el-input v-model="borDebt.otherLoanAmt"></el-input></li> -->
				    	<li class="zongji">
				    		<label>负债合计[元]：</label>
				    		<span>{{borDebt.totalLoan}}</span>
				    		<!-- <el-input v-model="borDebt.totalLoan"></el-input> -->
				    	</li>
				    </ol>
				    <ol class="num">
				    	<li>
				    		<label>最近三个月信用卡/贷款申请次数：</label>
				    		<span>{{borDebt.loanNumber}}</span>
				    		<!-- <el-input v-model="borDebt.loanNumber"></el-input> -->
				    	</li>
				    	<li>
				    		<label>文字说明：</label>
				    		<el-tooltip class="item" effect="dark" :content="borDebt.remark" :disabled="borDebt.remark==''" placement="top">
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
				    		<label>报告来源：</label>
				    		<el-tooltip class="item" effect="dark" :content="rptInfo.crSource" :disabled="rptInfo.crSource==''" placement="top">
				    			<div class="tipDiv">
				    				<span>{{rptInfo.crSource}}</span>
				    			</div>
						    </el-tooltip>
				    		
				    		<!-- <el-input v-model="rptInfo.crSource"></el-input> -->
				    	</li>
					    <li>
					    	<label>有无征信报告查询记录：</label>
					    	<span>{{rptInfo.crHasRecord}}</span>
					    	<!-- <el-input v-model="rptInfo.crHasRecord"></el-input> -->
						</li>
				    	<li>
				    		<label>近6个月内信用报告查询次数：</label>
				    		<span>{{rptInfo.crRecordTimes}}</span>
				    		<!-- <el-input v-model="rptInfo.crRecordTimes"></el-input> -->
				    	</li>
				    </ol>
				    <ol>
				    	<li>
				    		<label>报告描述：</label>
				    		<el-tooltip class="item" effect="dark" :content="rptInfo.crContent" :disabled="rptInfo.crContent==''" placement="top">
						      <div>{{rptInfo.crContent}}</div>
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
				    		<el-tooltip class="item" effect="dark" :content="otherInfo.content" :disabled="otherInfo.content==''" placement="top">
						      <div>{{otherInfo.content}}</div>
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
	        //rptInfo:'',
	        rptInfo:{  
		        "crSource":"", // 报告来源
		        "crHasRecord":"", // 有无征信报告查询记录
		        "crRecordTimes":"", // 近6个月内信用报告查询次数
		        "crContent":"" // 报告描述
		    },
	        /*流水明细*/
	        incomeList:[],
	        /*其他信息*/
	        otherInfo:'',

	        taskInWaitting:'',
	      };
	    },
	    props:['isFull'],
	    judgeFlag:'',
	    mounted(){
		    //一进入页面就发送请求
			this.taskInWaitting = JSON.parse(localStorage.getItem('internalObj'));
			this.request(this.taskInWaitting.matchApplyId);
			console.log(this.isFull);
	  		if(this.isFull == false){// 分屏
	  			//信用卡使用总况
	  			$(".xinyongka").width('930px');
	  			$(".xinyongka ul li span").width('150px');
	  			//负债信息
	  			$(".fuzhaixinxi").width('930px');
	  			$(".fuzhaixinxi ol li span").width('150px');
	  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 16.6% - 150px )'});
	  			//征询报告
	  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 49.9% - 150px )'});
	  			$(".zhengxunbaogao ol li .tipDiv").width('150px');
	  			//其他信息
	  			$(".qita").width('930px');
	  			$(".qita ol li").css({'padding-right': 'calc( 49.9% - 155px )','padding-left': 'calc( 16.6% - 155px )'});			
	  			
	  		}else if(this.isFull == true){// 全屏
	  			$(".xinyongka").width('100%');
	  			$(".xinyongka ul li span").width('200px');
	  			//负债信息
	  			$(".fuzhaixinxi").width('100%');
	  			$(".fuzhaixinxi ol li span").width('200px');
	  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 180px )',"padding-right":'calc( 16.6% - 180px )'});
	  			//征询报告
	  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
	  			$(".zhengxunbaogao ol li .tipDiv").width('200px');
	  			//其他信息
	  			$(".qita").width('100%');
	  			$(".qita ol li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
	  		}
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
		        	//建筑单价 保留两位小数点
		        	if(this.borestateList[i].unitPrice != null){
		        		this.borestateList[i].unitPrice = this.formatNumber(this.borestateList[i].unitPrice,2,0);
		       		 };
		        	
		        	//贷款余额 保留两位小数点
		        	if(this.borestateList[i].restLoans != null){
		        		this.borestateList[i].restLoans = this.formatNumber(this.borestateList[i].restLoans,2,0);
		       		 };
		        	//月供 保留两位小数点
		        	if(this.borestateList[i].monthlyPay != null){
			        	this.borestateList[i].monthlyPay = this.formatNumber(this.borestateList[i].monthlyPay,2,0);
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
		        	//车辆购置价 保留两位小数点
		        	if(this.carInfoList[i].carPrice != null){
			        	this.carInfoList[i].carPrice = this.formatNumber(this.carInfoList[i].carPrice,2,0);
			        };
			        //月供 保留两位小数点
		        	if(this.carInfoList[i].monthlyPay != null){
			        	this.carInfoList[i].monthlyPay = this.formatNumber(this.carInfoList[i].monthlyPay,2,0);
			        };
			        //贷款余额 保留两位小数点
		        	if(this.carInfoList[i].restLoans != null){
			        	this.carInfoList[i].restLoans = this.formatNumber(this.carInfoList[i].restLoans,2,0);
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
		        	//信用卡使用明细 信用额度 保留两位小数点
		        	if(this.cardDetList[i].cardAmt != null){
			        	this.cardDetList[i].cardAmt = this.formatNumber(this.cardDetList[i].cardAmt,2,0);
			        };
			        //信用卡使用明细 已使用额度 保留两位小数点
		        	if(this.cardDetList[i].usedAmt != null){
			        	this.cardDetList[i].usedAmt = this.formatNumber(this.cardDetList[i].usedAmt,2,0);
			        };
			        //信用卡使用明细 本期应还款金额 保留两位小数点
		        	if(this.cardDetList[i].actRepaymentAmt != null){
			        	this.cardDetList[i].actRepaymentAmt = this.formatNumber(this.cardDetList[i].actRepaymentAmt,2,0);
			        };
			        //信用卡使用明细 本期实际还款金额 保留两位小数点
		        	if(this.cardDetList[i].realRepaymentAmt != null){
			        	this.cardDetList[i].realRepaymentAmt = this.formatNumber(this.cardDetList[i].realRepaymentAmt,2,0);
			        };
		        }
		        /*信用卡使用总况*/
		        if(res.data.borCard == null){
		        	this.borCard = this.borCard;
		        }else{
		        	this.borCard=res.data.borCard;
		        };
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
		        	//贷款明细 贷款合同金额 保留两位小数点
		        	if(this.loanDetailList[i].loanContValue != null){
			        	this.loanDetailList[i].loanContValue = this.formatNumber(this.loanDetailList[i].loanContValue,2,0);
			        };
			        //贷款明细 贷款余额 保留两位小数点
		        	if(this.loanDetailList[i].loanBal != null){
			        	this.loanDetailList[i].loanBal = this.formatNumber(this.loanDetailList[i].loanBal,2,0);
			        };
			        //贷款明细 本期应还款金额 保留两位小数点
		        	if(this.loanDetailList[i].presentRepayAmt != null){
			        	this.loanDetailList[i].presentRepayAmt = this.formatNumber(this.loanDetailList[i].presentRepayAmt,2,0);
			        };
			        //贷款明细 本期实际还款金额 保留两位小数点
		        	if(this.loanDetailList[i].curMonthRepayAmt != null){
			        	this.loanDetailList[i].curMonthRepayAmt = this.formatNumber(this.loanDetailList[i].curMonthRepayAmt,2,0);
			        };
			        //贷款明细 当前逾期金额 保留两位小数点
		        	if(this.loanDetailList[i].presentOverAmt != null){
			        	this.loanDetailList[i].presentOverAmt = this.formatNumber(this.loanDetailList[i].presentOverAmt,2,0);
			        };

		        }
		        /*贷款总况*/
		        if(res.data.loanInfo == null){
		        	this.loanInfo = this.loanInfo;
		        }else{
		        	this.loanInfo=res.data.loanInfo;
		        };
		        /*负债信息*/
		        if(res.data.borDebt==null){
		        	this.borDebt=this.borDebt
		        }else{
		        	this.borDebt=res.data.borDebt;
		        	//负债信息 信用卡每月还款 保留两位小数点
		        	if(this.borDebt.monthRepayAmt != null){
		        		this.borDebt.monthRepayAmt = this.formatNumber(this.borDebt.monthRepayAmt,2,0);
		        	};
		        	//负债信息 助学贷每月还款额 保留两位小数点
		        	if(this.borDebt.studentLoanAmt != null){
			        	this.borDebt.studentLoanAmt = this.formatNumber(this.borDebt.studentLoanAmt,2,0);
			        };
		        	//负债信息 房贷每月还款额 保留两位小数点
		        	if(this.borDebt.houseLoanAmt != null){
			        	this.borDebt.houseLoanAmt = this.formatNumber(this.borDebt.houseLoanAmt,2,0);
			        };
		        	//负债信息 车贷每月还款额 保留两位小数点
		        	if(this.borDebt.carLoanAmt != null){
			        	this.borDebt.carLoanAmt = this.formatNumber(this.borDebt.carLoanAmt,2,0);
			        };
		        	//负债信息 其他贷款每月还款额 保留两位小数点
		        	if(this.borDebt.otherLoanAmt != null){
			        	this.borDebt.otherLoanAmt = this.formatNumber(this.borDebt.otherLoanAmt,2,0);
			        };
		        	//负债信息 负债合计 保留两位小数点
		        	if(this.borDebt.totalLoan != null){
			        	this.borDebt.totalLoan = this.formatNumber(this.borDebt.totalLoan,2,0);
			        };
		        }
		        /*征询报告*/
		        if(res.data.rptInfo == null){
		        	this.rptInfo == this.rptInfo;
		        }else{
		        	this.rptInfo=res.data.rptInfo; 
		        };
		        /*流水明细*/
		        this.incomeList=res.data.incomeList;
		        for(var i=0;i<this.incomeList.length;i++){
		        	//流水明细 n 保留两位小数点
		        	if(this.incomeList[i].n != null){
			        	this.incomeList[i].n = this.formatNumber(this.incomeList[i].n,2,0);
			        };
			        //流水明细 n1 保留两位小数点
		        	if(this.incomeList[i].n1 != null){
			        	this.incomeList[i].n1 = this.formatNumber(this.incomeList[i].n1,2,0);
			        };
			        //流水明细 n2 保留两位小数点
		        	if(this.incomeList[i].n2 != null){
			        	this.incomeList[i].n2 = this.formatNumber(this.incomeList[i].n2,2,0);
			        };
			        //流水明细 n3 保留两位小数点
		        	if(this.incomeList[i].n3 != null){
			        	this.incomeList[i].n3 = this.formatNumber(this.incomeList[i].n3,2,0);
			        };
			        //流水明细 n4 保留两位小数点
		        	if(this.incomeList[i].n4 != null){
			        	this.incomeList[i].n4 = this.formatNumber(this.incomeList[i].n4,2,0);
			        };
			        //流水明细 n5 保留两位小数点
		        	if(this.incomeList[i].n5 != null){
			        	this.incomeList[i].n5 = this.formatNumber(this.incomeList[i].n5,2,0);
			        };
			        //流水明细 avgIncome 保留两位小数点
		        	if(this.incomeList[i].avgIncome != null){
			        	this.incomeList[i].avgIncome = this.formatNumber(this.incomeList[i].avgIncome,2,0);
			        };
		        }
		        /*其他信息*/
		        if(res.data.otherInfo == null){
		        	this.otherInfo = this.otherInfo;
		        }else{
		        	this.otherInfo=res.data.otherInfo;
		        };
		        /*console.log(this.datas);*/
		      });
		  	},
		  	//保留两位小数 整数千分位
			formatNumber(num,cent,isThousand) {
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
			},
	    },
	    watch:{
		  	isFull:function(val){
		  		console.log(this.isFull);
		  		if(this.isFull == false){// 分屏
	  			//信用卡使用总况
	  			$(".xinyongka").width('930px');
	  			$(".xinyongka ul li span").width('150px');
	  			//负债信息
	  			$(".fuzhaixinxi").width('930px');
	  			$(".fuzhaixinxi ol li span").width('150px');
	  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 16.6% - 150px )'});
	  			//征询报告
	  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 49.9% - 150px )'});
	  			$(".zhengxunbaogao ol li .tipDiv").width('150px');
	  			//其他信息
	  			$(".qita").width('930px');
	  			$(".qita ol li").css({'padding-right': 'calc( 49.9% - 155px )','padding-left': 'calc( 16.6% - 155px )'});			
	  			
	  		}else if(this.isFull == true){// 全屏
	  			$(".xinyongka").width('100%');
	  			$(".xinyongka ul li span").width('200px');
	  			//负债信息
	  			$(".fuzhaixinxi").width('100%');
	  			$(".fuzhaixinxi ol li span").width('200px');
	  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 180px )',"padding-right":'calc( 16.6% - 180px )'});
	  			//征询报告
	  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
	  			$(".zhengxunbaogao ol li .tipDiv").width('200px');
	  			//其他信息
	  			$(".qita").width('100%');
	  			$(".qita ol li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
	  		}
		  	}

		},
	}
</script>
<style type="text/css" scoped>
	.borrowerInformationSetail{
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		font-size: 14px;
		min-width: 1327px;
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
		text-align: center;
	}
	.xinyongka ul li{
		margin-top: 20px;
	}
	.xinyongka ul li label{
		width: 120px;
		display: inline-block;
		text-align: right;
	}
	.xinyongka ul li span{
		width: 150px;
		display: inline-block;
		text-align: left;
	}
	.daikuanzongkuang{
		width: 926px;
	}
	/* 贷款总况 */
	.xinyongka.daikuanzongkuang ul li label{
		padding-right: 10px;
		width: 128px;
	}
	.daikuanzongkuang ul:nth-of-type(3) li:nth-of-type(4) label{
		width: 136px;
		margin-left: -8px;
	}
  table.mytable{
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
	height: 28px;
	text-align: center;
}
.fuzhaixinxi ol li label{
	display: inline-block;
	width: 155px;
	text-align: right;
	padding-right: 5px;
}
.fuzhaixinxi ol li span{
	display: inline-block;
	width: 150px;
	text-align: left;
}
/* 负债信息：负债合计 */
.fuzhaixinxi ol li.zongji input{
	border: none;
}
.fuzhaixinxi ol:nth-of-type(2) li:nth-of-type(2) label{
	line-height: 1;
}
.fuzhaixinxi ol:nth-of-type(2) li:nth-of-type(2) span{
	position: relative;
	top: -3px;
}
.fuzhaixinxi ol:nth-of-type(3) li:nth-of-type(1) label{
	line-height: 1;
}
.fuzhaixinxi ol:nth-of-type(3) li:nth-of-type(1) span{
	position: relative;
	top: -3px;
}

/* 负债信息：文字说明 */
ol.num li{
	margin-bottom: 10px;
}
ol.num li:nth-of-type(2){
	width: 66.6%;
	text-align: left;
	height: 54px;
	padding-left:calc( 16.6% - 150px );
	padding-right:calc( 16.6% - 150px );
}
ol.num li:nth-of-type(2) label{
	height: 54px;
	line-height: 54px;
}
ol.num li:nth-of-type(2) div{
	width: calc( 100% - 155px );
	height: 54px;
	float: right;
	padding-left: 10px;
	overflow: auto;
	border: 1px solid #d8dce5; 
}
/* 征询报告 */
.zhengxunbaogao ol{
	width: 100%;
}
.zhengxunbaogao ol li label{
	display: inline-block;
	width: 150px;
	text-align: right;
	padding-right: 5px;
	color: #475669;
}
.zhengxunbaogao ol li span{
	display: inline-block;
	width: 150px;
	text-align: left;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) label{
	line-height: 1;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) span{
	position: relative;
	top: -3px;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(3) label{
	line-height: 1;
	float: left;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(3) span{
	float: left;
	margin-top: 3px;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(1) label{
	height: 28px;
    line-height: 28px;
    position: relative;
    top: -9px;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(1) .tipDiv{
	width: 150px;
	height: 28px;
	line-height: 28px;
	display: inline-block;
}
.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(1) span{
	width: 100%;
	display: inline-block;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.zhengxunbaogao ol:nth-of-type(2) li{
	width: 100%;
	height: 75px;
	text-align: left;
	margin: 20px 0;
	padding-left: calc(16.6% - 150px);
    padding-right: calc(49.9% - 150px);
}
.zhengxunbaogao ol:nth-of-type(2) li label{
	line-height: 75px;
	float: left;
}
.zhengxunbaogao ol:nth-of-type(2) li div{
	float: left;
	height: 75px;
	width: calc( 100% - 150px );
	padding-left: 10px;
	overflow: auto;
	border: 1px solid #d8dce5;
}
.reportLabel{
	float: left;
	height: 50px;
	line-height: 50px;
}
/* 其他信息 */
.qita{
	width: 930px;
}
.qita ol li{
	width: 100%;
	margin-top: 20px;
	padding-left: calc(16.6% - 155px);
    padding-right: calc(49.9% - 155px);
}
.qita ol div{
	display: inline-block;
	width: calc( 100% - 170px );
	height: 117px;
	overflow: auto;
	padding-left: 10px;
	border: 1px solid #d8dce5;
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