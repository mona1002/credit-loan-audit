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
				      style="width: 100%"
				      highlight-current-row
				      @current-change="handleCurrentChange">
					      <el-table-column
					        type="index"
					      	:index="1"
					      	label="序号" 
					      	width="100"
					      	>
					      	<!-- <template slot-scope="scope">
					      		<p @click='handleRow(scope.row.$index)'></p>
					      	</template> -->
					      </el-table-column>
					      <el-table-column
					        label="房产类型" 
					        prop="estateType">
					        <template slot-scope="scope">
					        	<span class="must">*</span>
						        <el-select v-model="scope.row.estateType" placeholder="请选择">
								    <el-option
								     v-for="item in estateTypes"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</template>
					      </el-table-column>
					      <el-table-column
					        prop="propertyType"
					        label="产权性质">
					        <template slot-scope="scope">
						        <el-select v-model="scope.row.propertyType" placeholder="请选择">
								    <el-option
								     v-for="item in propertyTypes"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</template>
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
					         <template slot-scope="scope">
						        <el-input v-model="scope.row.unitPrice" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="estateAddress"
					        label="房产地址">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.estateAddress" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="estateZip"
					        label="邮政编码">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.estateZip" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="equityRatio"
					        label="产权比例">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.equityRatio" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="loanPeriod"
					        label="贷款期限[月]">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.loanPeriod" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="mortgageStatus"
					        label="抵押状况">
					        <template slot-scope="scope">
						        <el-select v-model="scope.row.mortgageStatus" placeholder="请选择">
								    <el-option
								     v-for="item in mortgageStatuss"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</template>
					      </el-table-column>
					      <el-table-column
					        prop="monthlyPay"
					        label="月供[元]">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.monthlyPay" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="restLoans"
					        label="贷款余额[元]">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.restLoans" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
				    </el-table>
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item title="车辆信息" name="2">
		  		<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_vehicle"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_vehicle"><span>删除</span></i>
				</div>
			    <el-table
			      :data="carInfoList"
			      style="width: 100%"
			      highlight-current-row
			      @current-change="carCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="carPrice"
				        label="车辆购置价[元]">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.carPrice" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="isYearCheck"
				        label="是否年检">
				        <template slot-scope="scope">
					        <el-select v-model="scope.row.isYearCheck" placeholder="请选择">
							    <el-option
							     v-for="item in isYearChecks"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="isOperate"
				        label="是否非运营">
				        <template slot-scope="scope">
					        <el-select v-model="scope.row.isOperate" placeholder="请选择">
							    <el-option
							     v-for="item in isOperates"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="carModel"
				        label="车辆型号">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.carModel" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="carType"
				        label="车辆类型">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
					        <el-select v-model="scope.row.carType" placeholder="请选择">
							    <el-option
							     v-for="item in carTypes"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.loanPeriod" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.monthlyPay" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[月]">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.restLoans" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="carNo"
				        label="车牌号码">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.carNo" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="buyInsur"
				        label="车辆易购保险">
				        <template slot-scope="scope">
					        <el-select v-model="scope.row.buyInsur" placeholder="请选择">
							    <el-option
							     v-for="item in buyInsurs"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="buyDate"
				        label="购买时间">
				        <template slot-scope="scope">
  							<el-date-picker
						      v-model="scope.row.buyDate"
						      type="date"
						      placeholder="选择日期">
						    </el-date-picker>
						</template> 
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用明细" name="3">
		  		<div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_card"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_card"><span>删除</span></i>
				</div>
			    <el-table
			      :data="cardDetList"
			      style="width: 100%"
			      highlight-current-row
			      @current-change="cardCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="bankName"
				        label="银行名称">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
						  <el-input v-model="scope.row.bankName" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="cardUseDate"
				        label="开卡日期">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.cardUseDate"
			                  type="date"
			                  placeholder="选择日期">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="cardAmt"
				        label="信用额度">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.cardAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="usedAmt"
				        label="已使用额度">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.usedAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="repayDay"
				        label="还款日">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.repayDay"
			                  type="date"
			                  placeholder="选择日期">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="realRepaymentAmt"
				        label="本期应还款金额">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.realRepaymentAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="actRepaymentAmt"
				        label="本期实际还款金额">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.actRepaymentAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="isOverdue"
				        label="是否逾期">
				        <template slot-scope="scope">
						<el-select v-model="scope.row.isOverdue" placeholder="请选择">
						    <el-option
						     v-for="item in isOverdues"
						     :key="item.value"
						     :label="item.label"
						     :value="item.value">
						   </el-option>
						</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="currOverdueTimes"
				        label="当前逾期期数">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.currOverdueTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="maxOverdueTimes"
				        label="最高逾期期数">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.maxOverdueTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="overdueTimes"
				        label="近12个月累计逾期次数">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.overdueTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
							<el-select v-model="scope.row.accountStatus" placeholder="请选择">
							    <el-option
							     v-for="item in accountStatuss"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
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
					<i class="el-icon-circle-plus icon" @click="add_loanDetail"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_loanDetail"><span>删除</span></i>
					<i class="el-icon-remove icon" @click="countNum"><span>统计</span></i>
				</div>
			    <el-table
			      :data="loanDetailList"
			      style="width: 100%"
			      highlight-current-row
			      @current-change="loanCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="loanType"
				        label="贷款种类">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
							<el-select v-model="scope.row.loanType" placeholder="请选择">
							    <el-option
							     v-for="item in loanTypes"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="guaranteeType"
				        label="担保方式">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
							<el-select v-model="scope.row.guaranteeType" placeholder="请选择">
							    <el-option
							     v-for="item in guaranteeTypes"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
							<el-select v-model="scope.row.accountStatus" placeholder="请选择">
							    <el-option
							     v-for="item in accountStatuss"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="repayFrequency"
				        label="还款频率">
				        <template slot-scope="scope">
							<el-select v-model="scope.row.repayFrequency" placeholder="请选择">
							    <el-option
							     v-for="item in repayFrequencys"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="loanBeginDate"
				        label="贷款发放日期">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.loanBeginDate"
			                  type="date"
			                  placeholder="选择日期">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="loanExpireDate"
				        label="贷款到期日期">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.loanExpireDate"
			                  type="date"
			                  placeholder="选择日期">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="loanContValue"
				        label="贷款合同金额[元]">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.loanContValue" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="loanRepayDate"
				        label="应还款日期">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.loanRepayDate"
			                  type="date"
			                  placeholder="选择日期">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="loanBal"
				        label="贷款余额[元]">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.loanBal" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="remainMonth"
				        label="剩余还款月数">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.remainMonth" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="presentRepayAmt"
				        label="本期应还款金额[元]">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.presentRepayAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="curMonthRepayAmt"
				        label="本期实际还款金额[元]">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.curMonthRepayAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="lastRepayDate"
				        label="最后一次还款日期">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.lastRepayDate"
			                  type="date"
			                  placeholder="选择日期">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="presentOverAmt"
				        label="当前逾期金额">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.presentOverAmt" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="overTimes"
				        label="累计逾期次数">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.overTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="maxOverTimes"
				        label="最高逾期期数">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.maxOverTimes" placeholder="请输入内容"></el-input>
						</template>
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
					    	<el-select v-model="rptInfo.crHasRecord">
							    <el-option
							      v-for="item in crHasRecords"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
					    	<!-- <el-input v-model="rptInfo.crHasRecord"></el-input> -->
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
					<i class="el-icon-circle-plus icon" @click="add_turnover"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_turnover"><span>删除</span></i>
				</div>
			    <el-table
			      :data="incomeList"
			      style="width: 100%"
			      highlight-current-row
			      @current-change="incomeCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" >
				      </el-table-column>
				      <el-table-column
				        prop="incomeType"
				        label="流水类型">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
							<el-select v-model="scope.row.incomeType" placeholder="请选择">
							    <el-option
							     v-for="item in incomeTypes"
							     :key="item.value"
							     :label="item.label"
							     :value="item.value">
							   </el-option>
							</el-select>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n"
				        label="N">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.n" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n1"
				        label="N-1">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.n1" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n2"
				        label="N-2">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.n2" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n3"
				        label="N-3">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.n3" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n4"
				        label="N-4">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.n4" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n5"
				        label="N-5">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.n5" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="count"
				        label="计算">
				        <template slot-scope="scope">
						   <el-button @click="counted(scope.row)" type="text" size="small">结果</el-button>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="avgIncome"
				        label="平均收入[元]">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.avgIncome" placeholder="请输入内容"></el-input>
						</template>
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
	        activeNames: ['1','2','3','4','5','6','7','8','9','10'],
	        datas:'',
	        //车贷总笔数
	        k:0,

	        //车贷现存笔数
	        l:0,

	        //车贷结清笔数
	        m:0,

	        //信用贷总笔数
	        n:0,

	        //信用贷现存笔数
	        o:0,

	        //信用贷结清笔数
	        p:0,

	        //房贷总笔数
	        q:0,

	        //房贷现存笔数
	        r:0,

	        //房贷结清笔数
	        s:0,

	        //其他总笔数
	        u:0,

	        //其他现存笔数
	        v:0,

	        //其他结清笔数
	        w:0,

	        //房产信息
      		borestateList:[],

      		// 车辆信息
            carInfoList:[],

            // 信用卡使用明细
            cardDetList:[],

            //信用卡使用总况
            borCard:{
		        "applyId":"111", // 申请单Id    
		        "cardCount":'', // 信用卡张数
		        "nouseCount":'', // 未开卡张数
		        "userdCount":'', // 已使用张数
		        "normalCount":'', // 正常使用张数
		        "freezeCount":'', // 冻结数量
		        "stopPaymentCount":'', // 止付数量
		        "badDebtCount":'', // 呆账数量
		        "cancelCount":'', // 销户数量
		    },

            // 贷款明细
            loanDetailList:[],

            // 贷款总况
            loanInfo:{
		        "applyId":"111", // 申请单Id
		        "carLoanTotal":'', // 车贷共有笔数
		        "carLoanNoPayoff":'', // 车贷现存笔数
		        "carLoanPayoff":'', // 车贷结清笔数
		        "houseLoanTotal":'', // 房贷总笔数
		        "houseLoanNoPayoff":'', // 房贷现存笔数
		        "houseLoanPayoff":'', // 房贷结清笔数
		        "otherLoanTotal":'', // 其他贷款总笔数
		        "otherLoanNoPayoff":'', // 其他贷款现存笔数
		        "otherLoanPayoff":'', // 其他贷款结清笔数
		        "studentLoanTotal":'', // 信用贷总笔数
		        "studentLoanNoPayoff":'', //信用贷现存笔数
		        "studentLoanPayoff":'', //信用贷结清笔数
		    },

            // 负债信息
            borDebt:{
		        "applyId":"111", // 申请单Id
		        "monthRepayAmt":'', // 信用卡每月还款[元]
		        "studentLoanAmt":'', // 助学贷每月还款额[元]
		        "houseLoanAmt":'', // 房贷每月还款额[元]
		        "carLoanAmt":'', // 车贷每月还款额[元]
		        "otherLoanAmt":'', // 其他贷款每月还款额[元]
		        "totalLoan":'', // 负债合计[元]
		        "loanNumber":'', // 最近三个月信用卡/贷款申请次数
		        "remark":'' // 文字说明
		    },

            // 征询报告
            rptInfo:{
		        "applyId":"111", // 申请单Id    
		        "crSource":"", // 报告来源
		        "crHasRecord":"", // 有无征信报告查询记录
		        "crRecordTimes":"", // 近6个月内信用报告查询次数
		        "crContent":"" // 报告描述
		    },

            // 流水明细
            incomeList:[],

            // 其他信息
            otherInfo:{
		        "applyId":"111", // 申请单Id    
		        "content":"", // 其他内容
		    },
            //房产类型
            estateTypes:[
				{'value': '01' ,'label': '租用'},
				{'value': '02' ,'label': '商业按揭购房'},
				{'value': '03' ,'label': '公积金按揭购房'},
				{'value': '04' ,'label': '无按揭购房'},
				{'value': '05' ,'label': '自建房'},
				{'value': '06' ,'label': '亲属住房'},
				{'value': '07' ,'label': '单位宿舍'}
      		],
      		//产权性质
      		propertyTypes:[
				{'value': '01' ,'label': '宅基地'},
				{'value': '02' ,'label': '自建房'},
				{'value': '03' ,'label': '小产权'},
				{'value': '04' ,'label': '期房'},
				{'value': '05' ,'label': '公租房'},
				{'value': '06' ,'label': '经济适用房'},
				{'value': '07' ,'label': '土地证'},
				{'value': '08' ,'label': '大产权'}
      		],
      		//抵押情况
      		mortgageStatuss:[
				{'value': '0' ,'label': '已抵押'},
				{'value': '1' ,'label': '未抵押'}
      		],
      		//是否年检
      		isYearChecks:[
				{'value': '0' ,'label': '否'},
				{'value': '1' ,'label': '是'}
      		],
      		//是否非运营
      		isOperates:[
				{'value': '0' ,'label': '否'},
				{'value': '1' ,'label': '是'}
      		],
      		//车辆类型
      		carTypes:[
				{'value': '00' ,'label': '按揭购车'},
				{'value': '01' ,'label': '无按揭购车'}
      		],
      		//车辆已购保险
      		buyInsurs:[
				{'value': '00' ,'label': '交强险'},
				{'value': '01' ,'label': '商业险'},
				{'value': '02' ,'label': '车损险'},
      		],
      		//是否逾期
      		isOverdues:[
				{'value': '0' ,'label': '否'},
				{'value': '1' ,'label': '是'}
      		],
      		//信用卡账户状态
      		accountStatuss:[
				{'value': '01' ,'label': '正常'},
				{'value': '02' ,'label': '冻结'},
				{'value': '03' ,'label': '止付'},
				{'value': '04' ,'label': '销户'},
				{'value': '05' ,'label': '呆帐'},
				{'value': '06' ,'label': '未激活'},
				{'value': '07' ,'label': '转出'},
				{'value': '08' ,'label': '核销'}
      		],
      		//流水类型
      		incomeTypes:[
				{'value': '01' ,'label': '工资流水'},
				{'value': '02' ,'label': '常用流水'},
				{'value': '03' ,'label': '对公流水'}
      		],
      		//贷款种类
      		loanTypes:[
				{'value': '01' ,'label': '车贷'},
				{'value': '02' ,'label': '房贷'},
				{'value': '03' ,'label': '信用贷'},
				{'value': '04' ,'label': '其他贷款'}
      		],
      		//担保方式
      		guaranteeTypes:[
				{'value': '01' ,'label': '信用'},
				{'value': '02' ,'label': '信用+抵押'},
				{'value': '03' ,'label': '抵押'},
				{'value': '04' ,'label': '质押'},
				{'value': '05' ,'label': '抵押+质押'}
      		],
      		//账户状态
      		accountStatuss:[
				{'value': '00' ,'label': '正常'},
				{'value': '01' ,'label': '逾期'},
				{'value': '02' ,'label': '结清'}
      		],
      		//还款频率
      		repayFrequencys:[
				{'value': '01' ,'label': '1个月'},
				{'value': '02' ,'label': '3个月'},
				{'value': '03' ,'label': '一次性还清'}
      		],
      		//有无征信报告查询记录
      		crHasRecords:[
				{'value': '0' ,'label': '有'},
				{'value': '1' ,'label': '否'}
      		],
      		//房产id
      		//车辆
      		//信用卡使用明细
      		//贷款明细
      		//流水明细
	      };
	    },
	    created(){
			//一进入页面就发送请求
			this.request();
		},
	    methods:{
	    	request(){
	    		this.post("/borrower/getBorrowerInfo", {
		        'applyId':'111'
		      }).then(res => {
		        /*console.log(res);*/
		        /*房产信息*/
		        this.borestateList=res.data.borestateList;
		        /*车辆信息*/
		        this.carInfoList=res.data.carInfoList;
		        /*信用卡使用明细*/
		        this.cardDetList=res.data.cardDetList;
		        /*信用卡使用总况*/
		        this.borCard=res.data.borCard;
		        /*贷款明细*/
		        this.loanDetailList=res.data.loanDetailList;
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
		        console.log(this.borCard);
		      });
		  },
	    	handleChange(){

	    	},
	    	add_home: function() {
	    		if(this.borestateList.length==0){
	    			this.borestateList.push({
	    							"applyId":"111", // 申请单Id
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
	    		}else{
	    			if(this.borestateList[this.borestateList.length-1].estateType==''){
	    				return
	    			}else{
	    				this.borestateList.push({
	    							"applyId":"111", // 申请单Id
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
	    			}
	    		};
	    		  
		    },
		    add_vehicle: function(str) {
		    	if(this.carInfoList.length==0){
		    		this.carInfoList.push({
						            "applyId":"111", // 申请单Id
						            "carPrice":"", // 车辆购置价
						            "isYearCheck":"", // 是否年检
						            "isOperate":"", // 是否非运营
						            "carModel":"", // 车辆型号
						            "carType":"", // 车辆类型
						            "loanPeriod":"", // 贷款期限
						            "monthlyPay":"", // 月供
						            "restLoans":"",// 贷款余额
						            "carNo":"",// 车牌号码
						            "buyInsur":"",// 车辆已购保险
						            "buyDate":"" // 购买时间
						        });
		    	}else{
		    		if(this.carInfoList[this.carInfoList.length-1].carType==''){
	    				return
	    			}else{
	    				this.carInfoList.push({
	    							"applyId":"111", // 申请单Id
						            "carPrice":"", // 车辆购置价
						            "isYearCheck":"", // 是否年检
						            "isOperate":"", // 是否非运营
						            "carModel":"", // 车辆型号
						            "carType":"", // 车辆类型
						            "loanPeriod":"", // 贷款期限
						            "monthlyPay":"", // 月供
						            "restLoans":"",// 贷款余额
						            "carNo":"",// 车牌号码
						            "buyInsur":"",// 车辆已购保险
						            "buyDate":"" // 购买时间
								});
	    			}
		    	};
				
		    },
		    add_card: function(str) {
		    	if(this.cardDetList.length==0){
		    		this.cardDetList.push({
						            "applyId":"111", // 申请单Id
						            "bankName":"", // 银行名称
						            "cardUseDate":"", // 开卡日期
						            "cardAmt":"" ,// 信用额度
						            "usedAmt":"", // 已使用额度
						            "repayDay":"", // 还款日
						            "actRepaymentAmt":"", // 本期应还款金额
						            "realRepaymentAmt":"", // 本期实际还款金额
						            "isOverdue":"", // 是否逾期
						            "currOverdueTimes":"",// 当前逾期期数
						            "maxOverdueTimes":"",// 最高逾期期数
						            "overdueTimes":"", // 近12个月累计逾期次数
						            "accountStatus":"" // 账户状态
						        });
		    	}else{
		    		if(this.cardDetList[this.cardDetList.length-1].bankName=='' || this.cardDetList[this.cardDetList.length-1].accountStatus==''){
	    				return
	    			}else{
	    				this.cardDetList.push({
	    							"applyId":"111", // 申请单Id
						            "bankName":"", // 银行名称
						            "cardUseDate":"", // 开卡日期
						            "cardAmt":"" ,// 信用额度
						            "usedAmt":"", // 已使用额度
						            "repayDay":"", // 还款日
						            "actRepaymentAmt":"", // 本期应还款金额
						            "realRepaymentAmt":"", // 本期实际还款金额
						            "isOverdue":"", // 是否逾期
						            "currOverdueTimes":"",// 当前逾期期数
						            "maxOverdueTimes":"",// 最高逾期期数
						            "overdueTimes":"", // 近12个月累计逾期次数
						            "accountStatus":"" // 账户状态
								});
	    			}
		    	};
		    },
		    add_loanDetail: function(str) {
		    	if(this.loanDetailList.length==0){
		    		this.loanDetailList.push({
						            "applyId":"111", // 申请单Id
						            "loanType":"", // 贷款种类
						            "guaranteeType":"",// 担保方式
						            "accountStatus":"", // 账户状态
						            "repayFrequency":"", // 还款频率
						            "loanBeginDate":"", // 贷款发放日期
						            "loanExpireDate":"", // 贷款到期日
						            "loanContValue":"", // 贷款合同金额[元]
						            "loanRepayDate":"", // 应还款日期
						            "loanBal":"", // 贷款余额
						            "remainMonth":"", // 剩余还款月数
						            "presentRepayAmt":"", // 本期应还款金额[元]
						            "curMonthRepayAmt":"", // 本期实际还款金额[元]
						            "lastRepayDate":"", // 最后一次还款日期
						            "presentOverAmt":"", // 当前逾期金额[元]
						            "overTimes":"", // 累计逾期次数
						            "maxOverTimes":"", // 最高逾期期数
						        });
		    	}else{
		    		if(this.loanDetailList[this.loanDetailList.length-1].loanType=='' || this.loanDetailList[this.loanDetailList.length-1].guaranteeType=='' || this.loanDetailList[this.loanDetailList.length-1].accountStatus==''){
	    				return
	    			}else{
	    				this.loanDetailList.push({
	    							"applyId":"111", // 申请单Id
						            "loanType":"", // 贷款种类
						            "guaranteeType":"",// 担保方式
						            "accountStatus":"", // 账户状态
						            "repayFrequency":"", // 还款频率
						            "loanBeginDate":"", // 贷款发放日期
						            "loanExpireDate":"", // 贷款到期日
						            "loanContValue":"", // 贷款合同金额[元]
						            "loanRepayDate":"", // 应还款日期
						            "loanBal":"", // 贷款余额
						            "remainMonth":"", // 剩余还款月数
						            "presentRepayAmt":"", // 本期应还款金额[元]
						            "curMonthRepayAmt":"", // 本期实际还款金额[元]
						            "lastRepayDate":"", // 最后一次还款日期
						            "presentOverAmt":"", // 当前逾期金额[元]
						            "overTimes":"", // 累计逾期次数
						            "maxOverTimes":"", // 最高逾期期数
								});
	    			}
		    	};
		    },
		    /*流水明细*/
		    add_turnover: function(str) {
		    	if(this.incomeList.length==0){
		    		this.incomeList.push({
						            "applyId":"111", // 申请单Id    
							        "incomeType":"", // 流水类型
							        "n":"",
							        "n1":"",
							        "n2":"",
							        "n3":"",
							        "n4":"",
							        "n5":"",
							        "avgIncome":"" // 平均收入
						        });
		    	}else{
		    		if(this.incomeList[this.incomeList.length-1].incomeType==''){
	    				return
	    			}else{
	    				this.incomeList.push({
	    							"applyId":"111", // 申请单Id    
							        "incomeType":"", // 流水类型
							        "n":"",
							        "n1":"",
							        "n2":"",
							        "n3":"",
							        "n4":"",
							        "n5":"",
							        "avgIncome":"" // 平均收入
								});
	    			}
		    	};
		    }, 
		    handleCurrentChange(val){
		    	alert('qqq');
				if(val == null){
					this.currentRow = '';
				}else{
					this.currentRow = val;
				};  
				console.log(val);
			},
			carCurrentChange(val){
				alert('车车');
				if(val == null){
					this.currentRowCar = '';
				}else{
					this.currentRowCar = val;
				};  
				console.log(val);
			},
			cardCurrentChange(val){
				alert('信用卡使用明细');
				if(val == null){
					this.currentRowCard = '';
				}else{
					this.currentRowCard = val;
				};  
				console.log(val);
			},
			loanCurrentChange(val){
				alert('贷款明细');
				if(val == null){
					this.currentRowLoan = '';
				}else{
					this.currentRowLoan = val;
				};  
				console.log(val);
			},
			incomeCurrentChange(val){
				alert('流水明细');
				if(val == null){
					this.currentRowIncome = '';
				}else{
					this.currentRowIncome = val;
				};  
				console.log(val);
			},
			delet_home(){
				console.log(this.currentRow);
				for(var i=0;i<this.borestateList.length;i++){
					if(this.borestateList[i]==this.currentRow){
						this.borestateList.splice(i,1);
					}
				}
			},
			delet_vehicle(){
				console.log(this.currentRowCar);
				for(var i=0;i<this.carInfoList.length;i++){
					if(this.carInfoList[i]==this.currentRowCar){
						this.carInfoList.splice(i,1);
					}
				}
			},
			delet_card(){
				console.log(this.currentRowCard);
				for(var i=0;i<this.cardDetList.length;i++){
					if(this.cardDetList[i]==this.currentRowCard){
						this.cardDetList.splice(i,1);
					}
				}
			},
			delet_loanDetail(){
				console.log(this.currentRowLoan);
				for(var i=0;i<this.loanDetailList.length;i++){
					if(this.loanDetailList[i]==this.currentRowLoan){
						this.loanDetailList.splice(i,1);
					}
				}
			},
			/*流水明细*/
			delet_turnover(){
				console.log(this.currentRowIncome);
				for(var i=0;i<this.incomeList.length;i++){
					if(this.incomeList[i]==this.currentRowIncome){
						this.incomeList.splice(i,1);
					}
				}
			},
			/*统计按钮*/
			countNum(){
				//车贷共有笔数
				this.k=0;
				this.l=0;
				this.m=0;
				//信用贷共有笔数
				this.n=0;
				this.o=0;
				this.p=0;
				//房贷共有笔数
				this.q=0;
				this.r=0;
				this.s=0;
				//其他贷共有笔数
				this.u=0;
				this.v=0;
				this.w=0;
				for(var i=0;i<this.loanDetailList.length;i++){
					console.log(this.loanDetailList[i].loanType);
					if(this.loanDetailList[i].loanType=='01'){
						this.k+=1;
						console.log(this.k);
					}
					if(this.loanDetailList[i].loanType=='01' && this.loanDetailList[i].accountStatus=='00'){
						this.l+=1;
						console.log(this.l);
					}
					if(this.loanDetailList[i].loanType=='01' && this.loanDetailList[i].accountStatus=='02'){
						this.m+=1;
						console.log(this.m);
					}
					//信用贷
					if(this.loanDetailList[i].loanType=='03'){
						this.n+=1;
						console.log(this.n);
					}
					if(this.loanDetailList[i].loanType=='03' && this.loanDetailList[i].accountStatus=='00'){
						this.o+=1;
						console.log(this.o);
					}
					if(this.loanDetailList[i].loanType=='03' && this.loanDetailList[i].accountStatus=='02'){
						this.p+=1;
						console.log(this.p);
					}
					//房贷
					if(this.loanDetailList[i].loanType=='02'){
						this.q+=1;
						console.log(this.q);
					}
					if(this.loanDetailList[i].loanType=='02' && this.loanDetailList[i].accountStatus=='00'){
						this.r+=1;
						console.log(this.r);
					}
					if(this.loanDetailList[i].loanType=='02' && this.loanDetailList[i].accountStatus=='02'){
						this.s+=1;
						console.log(this.s);
					}
					//其他贷
					if(this.loanDetailList[i].loanType=='04'){
						this.u+=1;
						console.log(this.u);
					}
					if(this.loanDetailList[i].loanType=='04' && this.loanDetailList[i].accountStatus=='00'){
						this.v+=1;
						console.log(this.v);
					}
					if(this.loanDetailList[i].loanType=='04' && this.loanDetailList[i].accountStatus=='02'){
						this.w+=1;
						console.log(this.w);
					}
				};
				//车贷
				this.loanInfo.carLoanTotal=this.k;
				this.loanInfo.carLoanNoPayoff=this.l;
				this.loanInfo.carLoanPayoff=this.m;
				//信用贷
				this.loanInfo.studentLoanTotal=this.n;
				this.loanInfo.studentLoanNoPayoff=this.o;
				this.loanInfo.studentLoanPayoff=this.p;
				//房贷
				this.loanInfo.houseLoanTotal=this.q;
				this.loanInfo.houseLoanNoPayoff=this.r;
				this.loanInfo.houseLoanPayoff=this.s;
				//其他贷
				this.loanInfo.otherLoanTotal=this.u;
				this.loanInfo.otherLoanNoPayoff=this.v;
				this.loanInfo.otherLoanPayoff=this.w;
			},
			counted(row){
				console.log(row);
				row.avgIncome=(row.n+row.n1+row.n2+row.n3+row.n4+row.n5)/6;
				console.log(row.avgIncome);
			},
			//确定按钮
			sure(){
				this.post("/borrower/saveBorrowerInfo", {
			        "applyId":"111",
			        "borestateList":this.borestateList,
			        "carInfoList":this.carInfoList,
			        "cardDetList":this.cardDetList,
			        "borCard":this.borCard,
			        "loanDetailList":this.loanDetailList,
			        "loanInfo":this.loanInfo,
			        "borDebt":this.borDebt,
			        "rptInfo":this.rptInfo,
			        "incomeList":this.incomeList,
			        "otherInfo":this.otherInfo
			      }).then(res => {
			        console.log(res);
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
	/* 必填 */
	.must{
		color:#ff7676;
		font-size: 12px;
	}
</style>