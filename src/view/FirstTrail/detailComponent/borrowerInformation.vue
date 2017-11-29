<!-- 借款人资料 -->
<template>
	<div class="borrowerInformation">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="房产信息" name="1">
				<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_home"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_home"><span>删除</span></i>
				</div>
				<div>
				    <el-table
				      :data="borestateList"
				      style="width: 100%">
					      <el-table-column
					        type="index"
					      	:index='1'
					      	label="序号" >
					      </el-table-column>
					      <el-table-column
					        label="房产类型" prop="estateType">
					        <!-- <el-select placeholder="请选择">
							    <el-option
							     v-for="item in estateType"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							   							</el-select> -->
					      </el-table-column>
					      <el-table-column
					        prop="propertyType"
					        label="产权性质">
					      </el-table-column>
					      <el-table-column
					        prop="coveredArea" 
					        label="建筑面积[m^2]">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.coveredArea" placeholder="请输入内容"></el-input>
					        </template>
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
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item title="车辆信息" name="2">
		  		<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_home"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_home"><span>删除</span></i>
				</div>
			    <el-table
			      :data="carInfoList"
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
		  		<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_home"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_home"><span>删除</span></i>
				</div>
			    <el-table
			      :data="cardDetList"
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
				    	<li><label>信用卡张数：</label><el-input v-model="borCard.cardCount"></el-input></li>
				    	<li><label>正常使用张数：</label><el-input v-model="borCard.normalCount"></el-input></li>
				    	<li><label>呆帐数量：</label><el-input v-model="borCard.badDebtCount"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>未开卡张数：</label><el-input v-model="borCard.nouseCount"></el-input></li>
				    	<li><label>冻结数量：</label><el-input v-model="borCard.freezeCount"></el-input></li>
				    	<li><label>销户数量：</label><el-input v-model="borCard.cancelCount"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>已使用张数：</label><el-input v-model="borCard.userdCount"></el-input></li>
				    	<li><label>止付数量：</label><el-input v-model="borCard.stopPaymentCount"></el-input></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款明细" name="5">
		  		<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_home"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_home"><span>删除</span></i>
				</div>
			    <el-table
			      :data="loanDetailList"
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
				      <el-table-column
				        prop="guaranteeType"
				        label="担保方式">
				      </el-table-column>
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
				      <el-table-column
				        prop="curMonthRepayAmt"
				        label="本期实际还款金额[元]">
				      </el-table-column>
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
				    	<li><label>车贷共有笔数:</label><p>{{loanInfo.carLoanTotal}}</p></li>
				    	<li><label>信用贷总笔数:</label><p>{{loanInfo.studentLoanTotal}}</p></li>
				    	<li><label>房贷总笔数:</label><p>{{loanInfo.houseLoanTotal}}</p></li>
				    	<li><label>其他贷款总笔数:</label><p>{{loanInfo.otherLoanTotal}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷现存笔数:</label><p>{{loanInfo.carLoanNoPayoff}}</p></li>
				    	<li><label>信用贷现存笔数:</label><p>{{loanInfo.studentLoanNoPayoff}}</p></li>
				    	<li><label>房贷现存笔数:</label><p>{{loanInfo.houseLoanNoPayoff}}</p></li>
				    	<li><label>其他贷现存笔数:</label><p>{{loanInfo.otherLoanNoPayoff}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷结清笔数:</label><p>{{loanInfo.carLoanPayoff}}</p></li>
				    	<li><label>信用贷结清笔数:</label><p>{{loanInfo.studentLoanPayoff}}</p></li>
				    	<li><label>房贷结清笔数:</label><p>{{loanInfo.houseLoanPayoff}}</p></li>
				    	<li><label>其他贷款结清笔数:</label><p>{{loanInfo.otherLoanPayoff}}</p></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="负债信息" name="7">
		  		<div class="fuzhaixinxi">
		  			<ol>
				    	<li><label>信用卡每月还款[元]:</label><el-input v-model="borDebt.monthRepayAmt"></el-input></li>
				    	<li><label>信用贷每月还款额[元]:</label><el-input v-model="borDebt.studentLoanAmt"></el-input></li>
				    	<li><label>房贷每月还款额[元]:</label><el-input v-model="borDebt.houseLoanAmt"></el-input></li>
				    </ol>
				    <ol>
				    	<li><label>车贷每月还款额[元]:</label><el-input v-model="borDebt.carLoanAmt"></el-input></li>
				    	<li><label>其他贷款每月还款额[元]:</label><el-input v-model="borDebt.otherLoanAmt"></el-input></li>
				    	<li class="zongji"><label>负债合计[元]:</label><el-input v-model="borDebt.totalLoan"></el-input></li>
				    </ol>
				    <ol class="num">
				    	<li><label>最近三个月信用卡/贷款申请次数:</label><el-input v-model="borDebt.loanNumber"></el-input></li>
				    	<li><label>文字说明:</label><div><textarea>{{borDebt.remark}}</textarea></div></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="征询报告" name="8">
		  		<div class="fuzhaixinxi zhengxunbaogao">
		  			<ol>
				    	<li><label>报告来源:</label><el-input v-model="rptInfo.crSource"></el-input></li>
					    <li><label>有无征信报告查询记录:</label>
					    	<el-input v-model="rptInfo.crHasRecord"></el-input>
						</li>
				    	<li><label>近6个月内信用报告查询次数:</label><el-input v-model="rptInfo.crRecordTimes"></el-input></li>
				    </ol>
				    <ol>
				    	<li><label>报告描述:</label><div><textarea>{{rptInfo.crContent}}</textarea></div></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="流水明细" name="9">
		  		<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_home"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_home"><span>删除</span></i>
				</div>
			    <el-table
			      :data="incomeList"
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
				      <el-table-column
				        prop="count"
				        label="计算">
				      </el-table-column>
				      <el-table-column
				        prop="avgIncome"
				        label="平均收入[元]">
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="其他信息" name="10">
		  		<div class="qita">
				    <ol>
				    	<li><label>其他:</label><div><textarea>{{otherInfo.content}}</textarea></div></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		</el-collapse>
		<div class="wattingButton">
	    	<el-button type="primary" @click="sure">确定</el-button>
	    </div>



	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'borrowerInformation',
	    data() {
	      return {
	      	input:'',
	        activeNames: ['1','2','3','4','5','6','7','8','9','10'],
	        datas:'',
	        value:'',
	        //房产信息
      		borestateList:[],

      		// 车辆信息
            carInfoList:[],

            // 信用卡使用明细
            cardDetList:[],

            //信用卡使用总况
            borCard:'',

            // 贷款明细
            loanDetailList:[],

            // 贷款总况
            loanInfo:'',

            // 负债信息
            borDebt:'',

            // 征询报告
            rptInfo:'',

            // 流水明细
            incomeList:[],

            // 其他信息
            otherInfo:'',
            estateTypes:[
				{'value': '01' ,'label': '租用'},
				{'value': '02' ,'label': '商业按揭购房'},
				{'value': '03' ,'label': '公积金按揭购房'},
				{'value': '04' ,'label': '无按揭购房'},
				{'value': '05' ,'label': '自建房'},
				{'value': '06' ,'label': '亲属住房'},
				{'value': '07' ,'label': '单位宿舍'},
      		],
	      };
	    },
	    methods:{
	    	handleChange(){

	    	},
	    	add_home: function() {
	    		this.borestateList.push({
	    							"applyId":"11", // 申请单Id
						            "estateType":"", // 房产类型
						            "propertyType":"", // 产权性质
						            "coveredArea":"", // 建筑面积
						            "unitPrice":"", // 建筑单价
						            "estateAddress":"",// 房产地址
						            "estateZip":"", // 邮政编码
						            "equityRatio":"", // 产权比例
						            "loanPeriod":"", // 贷款期限
						            "mortgageStatus":"", // 抵押状况
						            "monthlyPay":"", // 月供
						            "restLoans":"", // 贷款余额
						            "creatorCode":"", // 当前登录人编码
						            "creatorOrgCode":"" // 当前登录人所属机构
								});     
		    },
		    add_vehicle: function(str) {
		      this.cross_rable_vehicle += 1;
		    },
		    add_card: function(str) {
		      this.cross_rable_card += 1;
		    },
		    add_loanDetail: function(str) {
		      this.cross_rable_loanDetail += 1;
		    },
		    /*流水明细*/
		    add_turnover: function(str) {
		      this.cross_rable_turnover += 1;
		    }, 
		    
			delet_home(){	
			},
			delet_vehicle(){
				console.log(333);
			},
			delet_card(){
				console.log(333);
			},
			delet_loanDetail(){
				console.log(333);
			},
			/*流水明细*/
			delet_turnover(){
				console.log(333);
			},
			//确定按钮
			sure(){

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