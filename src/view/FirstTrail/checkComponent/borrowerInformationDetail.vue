<!-- 借款人资料详情 -->
<template>
	<div class="borrowerInformation">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="房产信息" name="1">
			    <el-table
			      :data="datas.borestateList"
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="estateType"
				        label="房产类型">
				      </el-table-column>
				      <el-table-column
				        prop="propertyType"
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
				      <!-- <el-table-column
				        prop=" "
				        label="房产地址">
				      </el-table-column> -->
				      <el-table-column
				        prop="estateZip"
				        label="邮政编码">
				      </el-table-column>
				      <el-table-column
				        prop="equityRatio"
				        label="产权比例">
				      </el-table-column>
				      <!-- <el-table-column
				        prop=" "
				        label="产权性质">
				      </el-table-column> -->
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]">
				      </el-table-column>
				      <el-table-column
				        prop="mortgageStatus"
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
		  	<el-collapse-item title="车辆信息" name="2">
			    <el-table
			      :data="datas.carInfoList"
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
				        prop="isYearCheck"
				        label="是否年检">
				      </el-table-column>
				      <el-table-column
				        prop="isOperate"
				        label="是否非运营">
				      </el-table-column>
				      <el-table-column
				        prop="carModel"
				        label="车辆型号">
				      </el-table-column>
				      <el-table-column
				        prop="carType"
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
				        prop="buyInsur"
				        label="车辆易购保险">
				      </el-table-column>
				      <el-table-column
				        prop="buyDate"
				        label="购买时间">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用明细" name="3">
			    <el-table
			      :data="datas.cardDetList"
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="bankName"
				        label="银行名称">
				      </el-table-column>
				      <el-table-column
				        prop="cardUseDate"
				        label="开卡日期">
				      </el-table-column>
				      <el-table-column
				        prop="cardAmt"
				        label="信用额度">
				      </el-table-column>
				      <el-table-column
				        prop="usedAmt"
				        label="已使用额度">
				      </el-table-column>
				      <el-table-column
				        prop="repayDay"
				        label="还款日">
				      </el-table-column>
				      <el-table-column
				        prop="realRepaymentAmt"
				        label="本期应还款金额">
				      </el-table-column>
				      <el-table-column
				        prop="actRepaymentAmt"
				        label="本期实际还款金额">
				      </el-table-column>
				      <el-table-column
				        prop="isOverdue"
				        label="是否逾期">
				      </el-table-column>
				      <el-table-column
				        prop="currOverdueTimes"
				        label="当前逾期期数">
				      </el-table-column>
				      <el-table-column
				        prop="maxOverdueTimes"
				        label="最高逾期期数">
				      </el-table-column>
				      <el-table-column
				        prop="overdueTimes"
				        label="近12个月累计逾期次数">
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用总况" name="4">
		  		<div class="xinyongka">
		  			<ul>
				    	<li><label>信用卡张数：</label><el-input v-model="datas.borCard.cardCount"></el-input></li>
				    	<li><label>正常使用张数：</label><el-input v-model="datas.borCard.normalCount"></el-input></li>
				    	<li><label>呆帐数量：</label><el-input v-model="datas.borCard.badDebtCount"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>未开卡张数：</label><el-input v-model="datas.borCard.nouseCount"></el-input></li>
				    	<li><label>冻结数量：</label><el-input v-model="datas.borCard.freezeCount"></el-input></li>
				    	<li><label>销户数量：</label><el-input v-model="datas.borCard.cancelCount"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>已使用张数：</label><el-input v-model="datas.borCard.userdCount"></el-input></li>
				    	<li><label>止付数量：</label><el-input v-model="datas.borCard.stopPaymentCount"></el-input></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款明细" name="5">
			    <el-table
			      :data="datas.loanDetailList"
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="loanType"
				        label="贷款种类">
				      </el-table-column>
				      <!-- <el-table-column
				        prop=" "
				        label="担保方式">
				      </el-table-column> -->
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态">
				      </el-table-column>
				      <el-table-column
				        prop="repayFrequency"
				        label="还款频率">
				      </el-table-column>
				      <el-table-column
				        prop="loanBeginDate"
				        label="贷款发放日期">
				      </el-table-column>
				      <el-table-column
				        prop="loanExpireDate"
				        label="贷款到期日期">
				      </el-table-column>
				      <el-table-column
				        prop="loanContValue"
				        label="贷款合同金额[元]">
				      </el-table-column>
				      <el-table-column
				        prop="loanRepayDate"
				        label="应还款日期">
				      </el-table-column>
				      <el-table-column
				        prop="loanBal"
				        label="贷款余额[元]">
				      </el-table-column>
				      <el-table-column
				        prop="remainMonth"
				        label="剩余还款月数">
				      </el-table-column>
				      <el-table-column
				        prop="presentRepayAmt"
				        label="本期应还款金额[元]">
				      </el-table-column>
				      <!-- <el-table-column
				        prop=" "
				        label="本期实际还款金额[元]">
				      </el-table-column> -->
				      <el-table-column
				        prop="lastRepayDate"
				        label="最后一次还款日期">
				      </el-table-column>
				      <el-table-column
				        prop="presentOverAmt"
				        label="当前逾期金额">
				      </el-table-column>
				      <el-table-column
				        prop="overTimes"
				        label="累计逾期次数">
				      </el-table-column>
				      <el-table-column
				        prop="maxOverTimes"
				        label="最高逾期期数">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款总况" name="6">
		  		<div class="xinyongka daikuanzongkuang">
		  			<ul>
				    	<li><label>车贷共有笔数:</label><p>{{datas.loanInfo.carLoanTotal}}</p></li>
				    	<li><label>信用贷总笔数:</label><p>{{datas.loanInfo.studentLoanTotal}}</p></li>
				    	<li><label>房贷总笔数:</label><p>{{datas.loanInfo.houseLoanTotal}}</p></li>
				    	<li><label>其他贷款总笔数:</label><p>{{datas.loanInfo.otherLoanTotal}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷现存笔数:</label><p>{{datas.loanInfo.carLoanNoPayoff}}</p></li>
				    	<li><label>信用贷现存笔数:</label><p>{{datas.loanInfo.studentLoanNoPayoff}}</p></li>
				    	<li><label>房贷现存笔数:</label><p>{{datas.loanInfo.houseLoanNoPayoff}}</p></li>
				    	<li><label>其他贷现存笔数:</label><p>{{datas.loanInfo.otherLoanNoPayoff}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷结清笔数:</label><p>{{datas.loanInfo.carLoanPayoff}}</p></li>
				    	<li><label>信用贷结清笔数:</label><p>{{datas.loanInfo.studentLoanPayoff}}</p></li>
				    	<li><label>房贷结清笔数:</label><p>{{datas.loanInfo.houseLoanPayoff}}</p></li>
				    	<li><label>其他贷款结清笔数:</label><p>{{datas.loanInfo.otherLoanPayoff}}</p></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="负债信息" name="7">
		  		<div class="fuzhaixinxi">
		  			<ol>
				    	<li><label>信用卡每月还款[元]:</label><el-input v-model="datas.borDebt.monthRepayAmt"></el-input></li>
				    	<li><label>信用贷每月还款额[元]:</label><el-input v-model="datas.borDebt.studentLoanAmt"></el-input></li>
				    	<li><label>房贷每月还款额[元]:</label><el-input v-model="datas.borDebt.houseLoanAmt"></el-input></li>
				    </ol>
				    <ol>
				    	<li><label>车贷每月还款额[元]:</label><el-input v-model="datas.borDebt.carLoanAmt"></el-input></li>
				    	<li><label>其他贷款每月还款额[元]:</label><el-input v-model="datas.borDebt.otherLoanAmt"></el-input></li>
				    	<li class="zongji"><label>负债合计[元]:</label><el-input v-model="datas.borDebt.totalLoan"></el-input></li>
				    </ol>
				    <ol class="num">
				    	<li><label>最近三个月信用卡/贷款申请次数:</label><el-input v-model="datas.borDebt.loanNumber"></el-input></li>
				    	<li><label>文字说明:</label><div><textarea>{{datas.borDebt.remark}}</textarea></div></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="征询报告" name="8">
		  		<div class="fuzhaixinxi zhengxunbaogao">
		  			<ol>
				    	<li><label>报告来源:</label><el-input v-model="datas.rptInfo.crSource"></el-input></li>
					    <li><label>有无征信报告查询记录:</label>
					    	<el-input v-model="datas.rptInfo.crHasRecord"></el-input>
						</li>
				    	<li><label>近6个月内信用报告查询次数:</label><el-input v-model="datas.rptInfo.crRecordTimes"></el-input></li>
				    </ol>
				    <ol>
				    	<li><label>报告描述:</label><div><textarea>{{datas.rptInfo.crContent}}</textarea></div></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="流水明细" name="9">
			    <el-table
			      :data="datas.incomeList"
			      style="width: 100%">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="incomeType"
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
		  		<div class="qita">
				    <ol>
				    	<li><label>其他:</label><div><textarea>{{datas.otherInfo.content}}</textarea></div></li>
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
	      };
	    },
	    created(){
			//一进入页面就发送请求
			this.request();
		},
	    methods:{
	    	handleChange(){

	    	},
	    	request(){
	    		this.post("/borrower/getBorrowerInfo", {
		        'applyId':'00542'
		      }).then(res => {
		        /*console.log(res);*/
		        this.datas=res.data;
		        /*console.log(this.datas);*/
		      });
		  },
	    }
	}
</script>
<style type="text/css" scoped>
	
	/* 字体图标 */
	.icon{
		color:#20a0ff;
		font-size: 20px;
	}
	.remarkIcon{
		width: 100%;
		height: 40px;
		line-height: 40px; 
	}
	.icon span{
		color:#475669;
	}
	/* 表格 */
	.tableDiv{
		width: 100%;
	}
	.tableDiv table{
		width: 100%;
		border-collapse:collapse;
	}
	.tableDiv table td{border:1px solid #ccc;color: #1f2d3d;}
	.tableDiv table th{border:1px solid #ccc;height: 40px;background: #f5f7fa;color: #1f2d3d;}
	/* 信用卡使用总况 */
	.xinyongka{
		width: 100%;
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
		width: 110px;
		display: inline-block;
		text-align: right;
	}
	/* 贷款总况 */
	.daikuanzongkuang li p{
		width: 180px;
		height: 30px;
		display: inline-block;
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
  /* table.mytable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
  } */
/* 负债信息 */
.fuzhaixinxi,.fuzhaixinxi ol{
	width: 100%;
}
.fuzhaixinxi ol li{
	width: 33.3%;
	float: left;
	margin-top:20px;
	text-align: center;
}
.fuzhaixinxi ol li label{
	display: inline-block;
	width: 150px;
	text-align: right;
	padding-right: 5px;
}
/* 负债信息：负债合计 */
.fuzhaixinxi ol li.zongji input{
	border: none;
}
/* 负债信息：文字说明 */
ol.num li:nth-of-type(1) input{
	position: absolute;
	left: 0;
	top: -29px;
}
ol.num li:nth-of-type(2){
	width: 66.6%;
	text-align: left;
	padding-left: calc( 16.6% - 167px );
	
}
ol.num li:nth-of-type(2) textarea{
	width: 640px;
	border: 1px solid #d8dce5; 
	height: 30px;
	border-radius: 4px;
	position: absolute;
	top: -18px;
	padding-top: 5px;
}
ol.num li:nth-of-type(2) div{
	position: relative;
	display: inline-block;
}
/* 征询报告 */
.zhengxunbaogao ol{
	width: 100%;
}
.zhengxunbaogao li label{
	width: 174px !important;
}
.zhengxunbaogao ol:nth-of-type(2) li{
	width: 100%;
	text-align: left;
	padding-left: calc( 16.6% - 178px );
	margin-bottom: 20px;
}
.zhengxunbaogao ol:nth-of-type(2) li div{
	display: inline-block;
	height: 50px;
	border: 1px solid #d8dce5; 
	width: 700px;
}
.zhengxunbaogao ol:nth-of-type(2) li div textarea{
	width: 700px;
	padding: 5px 5px 0 5px;
}
/* 其他信息 */
.qita{
	width: 100%;
}
.qita ol li{
	width: 100%;
	height: 240px;
	margin-top: 20px;
}
.qita ol div{
	display: inline-block;
	width: 70%;
}
.qita ol label{
	height: 240px;
	line-height: 240px;
}
.qita ol textarea{
	width: 70%;
	height: 200px;
	border: 1px solid #d8dce5;  
}
</style>