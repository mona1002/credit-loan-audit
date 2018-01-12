<!-- 借款人资料 -->
<template>
	<div class="borrowerInformation">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="房产信息" name="1">
				<template slot="title">
						<div class="left">
					      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
					      <span class="headFont">房产信息</span>
					    </div>
				      	<div class="remarkIcon right">
				      		<span @click="add_home" class="rightSpan">
				      			<img src="../../../../static/images/add.png" class="icon"><span>添加</span>
				      		</span>
							<span @click="delet_home" class="rightSpan">
								<img src="../../../../static/images/delete.png" class="icon"><span>删除</span>
							</span>
						</div>
				    </template>
				
				<div class="containDiv">
				    <el-table
				      :data="borestateList"
				      style="width: 100%"
				      class="house"
				      highlight-current-row
				      border
				      @current-change="handleCurrentChange">
					      <el-table-column
					        type="index"
					      	:index="1"
					      	label="序号"
					      	min-width="50"
					      	>
					      </el-table-column>
					      <el-table-column
					        label="房产类型" 
					        prop="estateType"
					        min-width="150">
					        <template slot-scope="scope">
					        	<span class="must">*</span>
					        	<el-tooltip class="item" effect="dark" :disabled="scope.row.estateType!=''" content="该项为必填项" placement="right">
							        <el-select v-model="scope.row.estateType" placeholder="请选择">
									    <el-option
									     v-for="item in estateTypes"
									     :key="item.value"
									     :label="item.label"
									     :value="item.value">
									   </el-option>
									</el-select>
								</el-tooltip>							
							</template>
					      </el-table-column>
					      <el-table-column
					        prop="propertyType"
					        label="产权性质"
					        min-width="110">
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
					        label="建筑面积[m²]"
					        min-width="110">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.coveredArea" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="unitPrice"
					        label="建筑单价[元]"
					        min-width="100">
					         <template slot-scope="scope">
						        <el-input v-model="scope.row.unitPrice" @blur="moneyBlur(scope.row,'unitPrice')" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="estateAddress"
					        label="房产地址"
					        min-width="200"
					        show-overflow-tooltip>
					        <template slot-scope="scope">
					        	<!-- <el-tooltip el-tooltip class="item" effect="dark" content="scope.row.estateAddress" placement="top"> -->
							        <el-input v-model="scope.row.estateAddress" placeholder="请输入内容">
							        </el-input>
						    <!-- </el-tooltip> -->
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="estateZip"
					        label="邮政编码"
					        min-width="80">
					        <template slot-scope="scope">
					        	<!-- <el-tooltip class="item" effect="dark" content="邮政编码格式不正确" :disabled="postcodes==false" placement="top">
					        	 						      		<el-input v-model="scope.row.estateZip" placeholder="请输入内容" v-on:blur="postcode(scope.row)" v-on:focus = "postcodes=false"></el-input>
					        	 						    	</el-tooltip> --> 
					        	<el-input v-model="scope.row.estateZip" placeholder="请输入内容" v-on:blur="postcode(scope.row)"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="equityRatio"
					        label="产权比例"
					        min-width="100">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.equityRatio" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="loanPeriod"
					        label="贷款期限[月]"
					        min-width="110">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.loanPeriod" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="mortgageStatus"
					        label="抵押状况"
					        min-width="110">
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
					        label="月供[元]"
					        min-width="80">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.monthlyPay" @blur="moneyBlur(scope.row,'monthlyPay')" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
					      <el-table-column
					        prop="restLoans"
					        label="贷款余额[元]"
					        min-width="102">
					        <template slot-scope="scope">
						        <el-input v-model="scope.row.restLoans" @blur="moneyBlur(scope.row,'restLoans')" placeholder="请输入内容"></el-input>
					        </template>
					      </el-table-column>
				    </el-table>
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item title="车辆信息" name="2">
		  		<template slot="title">
						<div class="left">
					      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
					      <span class="headFont">车辆信息</span>
					    </div>
				      	<div class="remarkIcon right">
				      		<span @click="add_vehicle" class="rightSpan">
				      			<img src="../../../../static/images/add.png" class="icon"></i><span>添加</span>
				      		</span>
							<span @click="delet_vehicle" class="rightSpan">
								<img src="../../../../static/images/delete.png" class="icon"><span>删除</span>
							</span>
						</div>
				    </template>
				<div class="carContain">
					<el-table
			      :data="carInfoList"
			      style="width: 100%"
			      class="car"
			      highlight-current-row
			      border
			      @current-change="carCurrentChange">
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
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.carPrice" @blur="moneyBlur(scope.row,'carPrice')" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="isYearCheck"
				        label="是否年检"
				        min-width="100">
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
				        label="是否非运营"
				        min-width="100">
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
				        label="车辆型号"
				        min-width="100">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.carModel" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="carType"
				        label="车辆类型"
				        min-width="120">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
				        	<el-tooltip class="item" effect="dark" :disabled="scope.row.carType!=''" content="该项为必填项" placement="right">
						        <el-select v-model="scope.row.carType" placeholder="请选择">
								    <el-option
								     v-for="item in carTypes"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</el-tooltip>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="loanPeriod"
				        label="贷款期限[月]"
				        min-width="100">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.loanPeriod" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="monthlyPay"
				        label="月供[元]"
				        min-width="100">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.monthlyPay" @blur="moneyBlurs(scope.row,'monthlyPay')" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="restLoans"
				        label="贷款余额[元]"
				        min-width="100">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.restLoans" @blur="moneyBlurs(scope.row,'restLoans')" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="carNo"
				        label="车牌号码"
				        min-width="100">
				        <template slot-scope="scope">
					        <el-input v-model="scope.row.carNo" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="buyInsur"
				        label="车辆已购保险"
				        min-width="100">
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
				        label="购买时间"
				        min-width="140">
				        <template slot-scope="scope">
  							<el-date-picker
						      v-model="scope.row.buyDate"
						      type="date"
						      >
						    </el-date-picker>
						</template> 
				      </el-table-column>
			    </el-table>
				</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用明细" name="3">
		  		<template slot="title">
						<div class="left">
					      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
					      <span class="headFont">信用卡使用明细</span>
					    </div>
				      	<div class="remarkIcon right">
				      		<span @click="add_card" class="rightSpan">
				      			<img src="../../../../static/images/add.png" class="icon"></i><span>添加</span>
				      		</span>
							<span @click="delet_card" class="rightSpan">
								<img src="../../../../static/images/delete.png" class="icon"><span>删除</span>
							</span>
						</div>
				    </template>
				<div class="cardContain">
					<el-table
				      :data="cardDetList"
				      style="width: 100%"
				      class="card"
				      highlight-current-row
				      border
				      @current-change="cardCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" 
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="bankName"
				        label="银行名称"
				        min-width="160">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
				        	<el-tooltip class="item" effect="dark" :disabled="scope.row.bankName!=''" content="该项为必填项" placement="right">
						  		<el-input v-bind:title="scope.row.bankName" v-model="scope.row.bankName" placeholder="请输入内容"></el-input>
							</el-tooltip>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="cardUseDate"
				        label="开卡日期"
				        min-width="140">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.cardUseDate"
			                  type="date">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="cardAmt"
				        label="信用额度"
				        min-width="100">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.cardAmt" @blur="moneyBlur(scope.row,'cardAmt')"placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="usedAmt"
				        label="已使用额度"
				        min-width="100">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.usedAmt" @blur="moneyBlur(scope.row,'usedAmt')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="repayDay"
				        label="还款日"
				        min-width="140">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.repayDay"
			                  type="date">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="realRepaymentAmt"
				        label="本期应还款金额"
				        min-width="120">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.realRepaymentAmt" @blur="moneyBlur(scope.row,'realRepaymentAmt')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="actRepaymentAmt"
				        label="本期实际还款金额"
				        min-width="140">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.actRepaymentAmt" @blur="moneyBlur(scope.row,'actRepaymentAmt')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="isOverdue"
				        label="是否逾期"
				        min-width="100">
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
				        label="当前逾期期数"
				        min-width="110">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.currOverdueTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="maxOverdueTimes"
				        label="最高逾期期数"
				        min-width="110">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.maxOverdueTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="overdueTimes"
				        label="近12个月累计逾期次数"
				        min-width="170">
				        <template slot-scope="scope">
  							<el-input v-model="scope.row.overdueTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态"
				        min-width="120">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
							<el-tooltip class="item" effect="dark" :disabled="scope.row.accountStatus!=''" content="该项为必填项" placement="right">
								<el-select v-model="scope.row.accountStatus" placeholder="请选择">
								    <el-option
								     v-for="item in caraccountStatuss"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</el-tooltip>
						</template>
				      </el-table-column>
			    </el-table>
				</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用总况" name="4" ref="xinyongka">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">信用卡使用总况</span>
			    </template>
		  		<div class="xinyongka">
		  			<ul>
				    	<li><label>信用卡张数：</label><el-input v-on:blur="carNum(borCard.cardCount,'cardCount')" v-model="borCard.cardCount"></el-input></li>
				    	<li><label>正常使用张数：</label><el-input v-on:blur="carNum(borCard.normalCount,'normalCount')" v-model="borCard.normalCount"></el-input></li>
				    	<li><label>呆帐数量：</label><el-input v-on:blur="carNum(borCard.badDebtCount,'badDebtCount')" v-model="borCard.badDebtCount"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>未开卡张数：</label><el-input v-on:blur="carNum(borCard.nouseCount,'nouseCount')" v-model="borCard.nouseCount"></el-input></li>
				    	<li><label>冻结数量：</label><el-input v-on:blur="carNum(borCard.freezeCount,'freezeCount')" v-model="borCard.freezeCount"></el-input></li>
				    	<li><label>销户数量：</label><el-input v-on:blur="carNum(borCard.cancelCount,'cancelCount')" v-model="borCard.cancelCount"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>已使用张数：</label><el-input v-on:blur="carNum(borCard.userdCount,'userdCount')" v-model="borCard.userdCount"></el-input></li>
				    	<li><label>止付数量：</label><el-input v-on:blur="carNum(borCard.stopPaymentCount,'stopPaymentCount')" v-model="borCard.stopPaymentCount"></el-input></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款明细" name="5">
		  		<template slot="title">
					<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">贷款明细</span>
				    </div>
			      	<div class="remarkIcon right">
			      		<span @click="add_loanDetail" class="rightSpan">
			      			<img src="../../../../static/images/add.png" class="icon"></i><span>添加</span>
			      		</span>
						<span @click="delet_loanDetail" class="rightSpan">
							<img src="../../../../static/images/delete.png" class="icon"><span>删除</span>
						</span>
						<span @click="countNum" class="rightSpan">
							<img src="../../../../static/images/jielun.png" class="icon"><span>统计</span>
						</span>
					</div>
			    </template>
			    <div class="loanContain">
			    	<el-table
				      :data="loanDetailList"
				      style="width: 100%"
				      highlight-current-row
				      border
				      @current-change="loanCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" 
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="loanType"
				        label="贷款种类"
				        min-width="120">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
				        	<el-tooltip class="item" effect="dark" :disabled="scope.row.loanType!=''" content="该项为必填项" placement="right">
								<el-select v-model="scope.row.loanType" placeholder="请选择">
								    <el-option
								     v-for="item in loanTypes"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</el-tooltip>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="guaranteeType"
				        label="担保方式"
				        min-width="120">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
				        	<el-tooltip class="item" effect="dark" :disabled="scope.row.guaranteeType!=''" content="该项为必填项" placement="right">
								<el-select v-model="scope.row.guaranteeType" placeholder="请选择">
								    <el-option
								     v-for="item in guaranteeTypes"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</el-tooltip>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="accountStatus"
				        label="账户状态"
				        min-width="120">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
				        	<el-tooltip class="item" effect="dark" :disabled="scope.row.accountStatus!=''" content="该项为必填项" placement="right">
								<el-select v-model="scope.row.accountStatus" placeholder="请选择">
								    <el-option
								     v-for="item in accountStatuss"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</el-tooltip>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="repayFrequency"
				        label="还款频率"
				        min-width="110">
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
				        label="贷款发放日期"
				        min-width="140">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.loanBeginDate"
			                  type="date">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="loanExpireDate"
				        label="贷款到期日期"
				        min-width="140">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.loanExpireDate"
			                  type="date">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="loanContValue"
				        label="贷款合同金额[元]"
				        min-width="140">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.loanContValue" @blur="moneyBlur(scope.row,'loanContValue')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="loanRepayDate"
				        label="应还款日期"
				        min-width="140">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.loanRepayDate"
			                  type="date">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="loanBal"
				        label="贷款余额[元]"
				        min-width="110">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.loanBal" @blur="moneyBlur(scope.row,'loanBal')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="remainMonth"
				        label="剩余还款月数"
				        min-width="110">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.remainMonth" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="presentRepayAmt"
				        label="本期应还款金额[元]"
				        min-width="150">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.presentRepayAmt" @blur="moneyBlur(scope.row,'presentRepayAmt')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="curMonthRepayAmt"
				        label="本期实际还款金额[元]"
				        min-width="160">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.curMonthRepayAmt" @blur="moneyBlur(scope.row,'curMonthRepayAmt')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="lastRepayDate"
				        label="最后一次还款日期"
				        min-width="140">
				        <template slot-scope="scope">
			                <el-date-picker
			                  v-model="scope.row.lastRepayDate"
			                  type="date">
			                </el-date-picker>
			            </template>
				      </el-table-column>
				      <el-table-column
				        prop="presentOverAmt"
				        label="当前逾期金额"
				        min-width="110">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.presentOverAmt" @blur="moneyBlur(scope.row,'presentOverAmt')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="overTimes"
				        label="累计逾期次数"
				        min-width="110">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.overTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="maxOverTimes"
				        label="最高逾期期数"
				        min-width="110">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.maxOverTimes" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
			    </el-table>
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款总况" name="6">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">贷款总况</span>
			    </template>
		  		<div class="xinyongka daikuanzongkuang">
		  			<ul>
				    	<li><label>车贷共有笔数：</label><p>{{loanInfo.carLoanTotal}}</p></li>
				    	<li><label>信用贷总笔数：</label><p>{{loanInfo.studentLoanTotal}}</p></li>
				    	<li><label>房贷总笔数：</label><p>{{loanInfo.houseLoanTotal}}</p></li>
				    	<li><label>其他贷款总笔数：</label><p>{{loanInfo.otherLoanTotal}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷现存笔数：</label><p>{{loanInfo.carLoanNoPayoff}}</p></li>
				    	<li><label>信用贷现存笔数：</label><p>{{loanInfo.studentLoanNoPayoff}}</p></li>
				    	<li><label>房贷现存笔数：</label><p>{{loanInfo.houseLoanNoPayoff}}</p></li>
				    	<li><label>其他贷现存笔数：</label><p>{{loanInfo.otherLoanNoPayoff}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷结清笔数：</label><p>{{loanInfo.carLoanPayoff}}</p></li>
				    	<li><label>信用贷结清笔数：</label><p>{{loanInfo.studentLoanPayoff}}</p></li>
				    	<li><label>房贷结清笔数：</label><p>{{loanInfo.houseLoanPayoff}}</p></li>
				    	<li><label>其他贷款结清笔数：</label><p>{{loanInfo.otherLoanPayoff}}</p></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="负债信息" name="7">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">负债信息</span>
			    </template>
		  		<div class="fuzhaixinxi">
		  			<ol>
				    	<li class="liDiv">
				    		<label>信用卡每月还款[元]：</label>
				    		<!-- <div>
				    			<input type="text" name="" v-numbers v-model="borDebt.monthRepayAmt">
				    		</div> -->
				    		<el-input v-on:blur="debtTotal(borDebt.monthRepayAmt,'monthRepayAmt')" v-model="borDebt.monthRepayAmt">	
				    		</el-input>
				    	</li>
				    	<li class="liDiv">
				    		<label>信用贷每月还款额[元]：</label>
				    		<el-input v-model="borDebt.studentLoanAmt" v-on:blur="debtTotal(borDebt.studentLoanAmt,'studentLoanAmt')">
				    		</el-input>
				    	</li>
				    	<li class="liDiv">
				    		<label>房贷每月还款额[元]：</label>
				    		<el-input v-on:blur="debtTotal(borDebt.houseLoanAmt,'houseLoanAmt')" v-model="borDebt.houseLoanAmt">	
				    		</el-input>
				    	</li>
				    </ol>
				    <ol>
				    	<li class="liDiv">
				    		<label>车贷每月还款额[元]：</label>
				    		<el-input v-on:blur="debtTotal(borDebt.carLoanAmt,'carLoanAmt')" v-model="borDebt.carLoanAmt">
				    		</el-input>
				    	</li>
				    	<li class="liDiv">
				    		<label>其他贷款每月还款额[元]：</label>
				    		<el-input v-on:blur="debtTotal(borDebt.otherLoanAmt,'otherLoanAmt')" v-model="borDebt.otherLoanAmt">	
				    		</el-input>
				    	</li>
				    	<li class="zongji liDiv">
				    		<label>负债合计[元]：</label>
				    		<el-input v-model="borDebt.totalLoan" :disabled="true">
				    		</el-input>
				    	</li>
				    </ol>
				    <ol class="num">
				    	<li class="liDiv">
				    		<label>最近三个月信用卡/贷款申请次数：</label>
				    		<el-input v-model="borDebt.loanNumber" v-on:blur="loanNumber(borDebt.loanNumber)"></el-input>
				    	</li>
				    	<li>

				    		<label>文字说明：</label>
				    		<div  class="require">
				    			<span v-show="borDebt.remark.length==200">
				    				<i>*</i>输入长度不能超过200
				    			</span>
				    			<el-input
								  type="textarea"
								  :rows="2"
								  placeholder="请输入内容"
								  v-model="borDebt.remark"
								  :maxlength="200"
								  resize="none"
								  >
								</el-input>
				    		</div>
						</li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="征询报告" name="8">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">征询报告</span>
			    </template>
		  		<div class="fuzhaixinxi zhengxunbaogao">
		  			<ol>
				    	<li class="liDiv">
				    		<label>报告来源：</label>
				    		<div  class="require" style="display:inline-block">
				    			<span v-if="rptInfo.crSource.length==50"><i>*</i>输入长度不能超过50</span>
				    			<el-input
								  :rows="1"
								  placeholder="请输入内容"
								  v-model="rptInfo.crSource"
								  :maxlength="50"
								  >
								</el-input>
							</div>
				    	</li>
					    <li>
					    	<label>有无征信报告查询记录：</label>
					    	<!-- <el-select v-model="rptInfo.crHasRecord">
					    								    <el-option
					    								      v-for="item in crHasRecords"
					    								      :key="item.value"
					    								      :label="item.label"
					    								      :value="item.value">
					    								    </el-option>
					    								</el-select> -->
							<el-select v-model="rptInfo.crHasRecord" placeholder="请选择" class="unique">
							    <el-option
							       v-for="item in crHasRecords"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
					    	<!-- <el-input v-model="rptInfo.crHasRecord"></el-input> -->
						</li>
				    	<li class="liDiv"><label>近6个月内信用报告查询次数：</label><el-input v-model="rptInfo.crRecordTimes" v-on:blur="carNum(rptInfo.crRecordTimes,'crRecordTimes')"></el-input></li>
				    </ol>
				    <ol>
				    	<li>
				    		<label class="reportLabel">报告描述：</label>
				    		<div  class="require">
				    			<span v-show="rptInfo.crContent.length==500"><i>*</i>输入长度不能超过500</span>
				    			<el-input
								  type="textarea"
								  :rows="3"
								  placeholder="请输入内容"
								  v-model="rptInfo.crContent"
								  :maxlength="500"
								  resize="none"
								  >
								</el-input>
				    		</div>
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
			      	<div class="remarkIcon right">
			      		<span @click="add_turnover" class="rightSpan">
			      			<img src="../../../../static/images/add.png" class="icon"></i><span>添加</span>
			      		</span>
						<span @click="delet_turnover" class="rightSpan">
							<img src="../../../../static/images/delete.png" class="icon"><span>删除</span>
						</span>
					</div>
			    </template>
			    <el-table
			      :data="incomeList"
			      style="width: 100%"
			      class="income"
			      highlight-current-row
			      border
			      @current-change="incomeCurrentChange">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号" 
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="incomeType"
				        label="流水类型"
				        min-width="110">
				        <template slot-scope="scope">
				        	<span class="must">*</span>
				        	<el-tooltip class="item" effect="dark" :disabled="scope.row.incomeType!=''" content="该项为必填项" placement="right">
								<el-select v-model="scope.row.incomeType" placeholder="请选择">
								    <el-option
								     v-for="item in incomeTypes"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								</el-select>
							</el-tooltip>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n"
				        label="N"
				        min-width="130">
				        <template slot-scope="scope">
				        	<!-- <input type="text" name="" v-model="scope.row.n" placeholder="请输入内容">--><!-- @blur="numns(scope.row.n)"  -->
				          <el-input v-model="scope.row.n" @blur="moneyBlur(scope.row,'n')" placeholder="请输入内容"></el-input> <!--  v-number-only -->
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n1"
				        label="N-1"
				        min-width="130">
				        <template slot-scope="scope">
				        	<!-- <input type="text" name="" v-model="scope.row.n1" @blur="moneyBlur(scope.row,'n1')" placeholder="请输入内容"> --><!--v-number-only -->
						  <el-input v-model="scope.row.n1" @blur="moneyBlur(scope.row,'n1')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n2"
				        label="N-2"
				        min-width="130">
				        <template slot-scope="scope">
				        	<!-- <input type="text" name="" v-model="scope.row.n2" @blur="moneyBlur(scope.row,'n2')" placeholder="请输入内容"> --><!--v-numbers ='scope.row.n2' -->
						  <el-input v-model="scope.row.n2" @blur="moneyBlur(scope.row,'n2')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n3"
				        label="N-3"
				        min-width="130">
				        <template slot-scope="scope">
				        	<!-- <input type="text" name="" v-model="scope.row.n3" @blur="moneyBlur(scope.row,'n3')" placeholder="请输入内容"> --><!-- ='scope.row.n3' -->
						  <el-input v-model="scope.row.n3" @blur="moneyBlur(scope.row,'n3')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n4"
				        label="N-4"
				        min-width="130">
				        <template slot-scope="scope">
				        	<!-- <input type="text" name="" v-model="scope.row.n4" @blur="moneyBlur(scope.row,'n4')" placeholder="请输入内容"> --><!-- ='scope.row.n4' -->
						  <el-input v-model="scope.row.n4" @blur="moneyBlur(scope.row,'n4')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="n5"
				        label="N-5"
				        min-width="130">
				        <template slot-scope="scope">
				        	<!-- <input type="text" name="" v-model="scope.row.n5" @blur="moneyBlur(scope.row,'n5')" placeholder="请输入内容"> --><!-- ='scope.row.n5' -->
						  <el-input v-model="scope.row.n5" @blur="moneyBlur(scope.row,'n5')" placeholder="请输入内容"></el-input>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="count"
				        label="计算"
				        min-width="130">
				        <template slot-scope="scope">
				        	<img src="../../../../static/images/count.png" class="icon" @click="counted(scope.row)">
						   <!-- <el-button @click="counted(scope.row)" type="text" size="small"><img src="../../../../static/images/jielun.png" class="icon"></el-button> -->
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="avgIncome"
				        label="平均收入[元]"
				        min-width="130">
				        <template slot-scope="scope">
						  <el-input v-model="scope.row.avgIncome" @blur="moneyBlur(scope.row,'avgIncome')" placeholder="请输入内容" :disabled="true"></el-input>
						  <!-- <input type="text" name="" v-model="scope.row.avgIncome" @blur="moneyBlur(scope.row,'avgIncome')" placeholder="请输入内容"> --><!--='scope.row.avgIncome' -->
						</template>
				      </el-table-column>
			    </el-table>
		  	</el-collapse-item>
		  	<el-collapse-item title="其他信息" name="10">
		  		<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">其他信息</span>
			    </template>
		  		<div class="qita">
				    <ol>
				    	<li>
				    		<label>其他：</label>
				    		<div  class="require">
				    			<span v-if="otherInfo.content.length==500"><i>*</i>输入长度不能超过500</span>
				    			<el-input
								  type="textarea"
								  :rows="5"
								  placeholder="请输入内容"
								  v-model="otherInfo.content"
								  :maxlength="500"
								  resize="none"
								  >
								</el-input>
				    		</div>
				    	</li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		</el-collapse>
		<div class="wattingButton">
	    	<el-button type="primary" @click="sure">确定</el-button>
	    </div>
		<!-- 点击确认时提示弹框 -->
		<!-- <div class="layer" v-show="layer">@touchmove.prevent
			<div class="layerbox">
				<p><span>询问</span><i class="el-icon-close" @click="close"></i></p>
				<div>
					<p class="choces">您确定已填写好各项内容并提交？</p>
					<div class=buttonDiv>
						<el-button type="primary" @click="Cancle">取消</el-button>
						<el-button type="primary" @click="trueSure">确定</el-button>
					</div>
				</div>		
			</div>
		</div> -->

		<div class="sureLog">
			<el-dialog
			  title="询问"
			  :visible.sync="dialogVisible"
			  width="420px"
			  top="35vh">
			  <span>您确定已填写好各项内容并提交？</span>
			  <span slot="footer" class="dialog-footer">
			  	<el-button type="primary" @click="Cancle">取消</el-button>
				<el-button type="primary" @click="trueSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>

		<!-- 点击确认时提示错误弹框 -->
		<!-- <div class="layer" v-show="tidialogVisible">
			<div class="layerbox">
				<p><span>提示</span><i class="el-icon-close" @click="infoClose"></i></p>
				<div>
					<p class="choces">{{info}}</p>
					<div class=infoButton>
						<el-button type="primary" @click="infoSure">确定</el-button>
					</div>
				</div>		
			</div>
		</div> -->
		
		<div class="sureLog">
			<el-dialog
			  title="提示"
			  :visible.sync="tidialogVisible"
			  width="420px"
			  top="35vh">
			  <span>{{info}}</span>
			  <span slot="footer" class="dialog-footer">
			  	<el-button type="primary" @click="infoSure">确定</el-button>
			  </span>
			</el-dialog>
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
	        numn:'',
	        numn1:'',
	        aaaa:'',
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

            taskInWaitting:'',

            applyId:'',

            //邮政编码
            postcodes:false,

            //确定按钮弹框
            dialogVisible:false,
            //确定按钮弹框
            tidialogVisible:false,
            
            //信用卡使用总况
            borCard:{
            	"id":'',
		        "applyId":this.applyId, // 申请单Id    
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
            	"id":'',
		        "applyId":this.applyId, // 申请单Id
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
            	"id":'',
		        "applyId":this.applyId, // 申请单Id
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
            	"id":'',
		        "applyId":this.applyId, // 申请单Id    
		        "crSource":"", // 报告来源
		        "crHasRecord":"", // 有无征信报告查询记录
		        "crRecordTimes":"", // 近6个月内信用报告查询次数
		        "crContent":"" // 报告描述
		    },

            // 流水明细
            incomeList:[],

            // 其他信息
            otherInfo:{
            	"id":'',
		        "applyId":this.applyId, // 申请单Id    
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
      		caraccountStatuss:[
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
				{'value': '1' ,'label': '无'}
      		],
      		//弹框
      		layer:false,
      		info:'',
      		tidialogVisible:false,
      		ifFull:'', // 标志是否全屏
      		//负债信息 负债合计
      		arr:[],
	      };
	    },
		props:['isFull'],
	    mounted(){
	    	//this.coming();
			//一进入页面就发送请求
			this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
			this.applyId=this.taskInWaitting.applyId;
			this.request(this.taskInWaitting.applyId);

	  		if(this.isFull == false){// 分屏
	  			//信用卡使用总况
	  			$(".xinyongka").width('930px');
	  			$(".xinyongka ul li div").width('150px');
	  			$(".xinyongka ul li div input").css({'width':'100%','maxWidth':'150px'});
	  			//负债信息
	  			$(".fuzhaixinxi").width('930px');
	  			$(".fuzhaixinxi ol li.liDiv div").width('150px');
	  			$(".fuzhaixinxi ol li div.require").width('calc( 100% - 155px )');
	  			$(".fuzhaixinxi ol li div.require div").width('100%');
	  			$(".fuzhaixinxi ol li div input").css({'width':'100%','maxWidth':'150px'});
	  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 16.6% - 150px )'});
	  			//征询报告
	  			$(".zhengxunbaogao ol li div.require").width('150px');
	  			$(".zhengxunbaogao ol li div.require div").width('150px');
	  			$(".zhengxunbaogao ol li div.require input").css({'width':'100%','maxWidth':'150px'});
	  			$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) .unique").css({'maxWidth':'150px','minWidth':'150px'});
	  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 49.9% - 150px )'});
	  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require").width('calc( 100% - 150px )');
	  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require div").width('100%');
	  			//其他信息
	  			$(".qita").width('930px');
	  			$(".qita ol li").css({'padding-right': 'calc( 49.9% - 155px )','padding-left': 'calc( 16.6% - 155px )'});
	  			//确定按钮
	  			$(".wattingButton").css({'width':'930'});
	  			$(".wattingButton button").css({'margin-right':'calc( 49.9% - 155px )'});
	  			
	  			
	  		}else if(this.isFull == true){// 全屏
	  			$(".xinyongka").width('100%');
	  			$(".xinyongka ul li div").width('200px');
	  			$(".xinyongka ul li div input").css({'width':'100%','maxWidth':'200px'});
	  			//负债信息
	  			$(".fuzhaixinxi").width('100%');
	  			$(".fuzhaixinxi ol li.liDiv div").width('200px');
	  			$(".fuzhaixinxi ol li div.require").width('calc( 100% - 155px )');
	  			$(".fuzhaixinxi ol li div.require div").width('100%');
	  			$(".fuzhaixinxi ol li div input").css({'width':'100%','maxWidth':'200px'});
	  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 175px )',"padding-right":'calc( 16.6% - 184px )'});
	  			//征询报告
	  			$(".zhengxunbaogao ol li div.require").width('200px');
	  			$(".zhengxunbaogao ol li div.require div").width('200px');
	  			$(".zhengxunbaogao ol li div.require input").css({'width':'100%','maxWidth':'200px'});
	  			//$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) div").width('200px');
	  			$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) .unique").css({'maxWidth':'200px','minWidth':'200px'});
	  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
	  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require").width('calc( 100% - 150px )');
	  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require div").width('100%');
	  			//其他信息
	  			$(".qita").width('100%');
	  			$(".qita ol li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
	  			//确定按钮
	  			$(".wattingButton").css({'width':'100%'});
	  			$(".wattingButton button").css({'margin-right':'calc( 49.9% - 174px )'});
	  		}
		},
	    methods:{
	    	request(param){
	    		this.post("/borrower/getBorrowerInfo", {
		        'applyId':param
		      }).then(res => {
		        /*console.log(res);*/
		        this.datas=res.data;
		        /*房产信息*/
		        this.borestateList=res.data.borestateList;
		        for(var i=0;i<this.borestateList.length;i++){
		        	console.log(this.borestateList[i].monthlyPay);
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
		        	console.log(this.borestateList[i].monthlyPay);
		        }
		        /*车辆信息*/
		        this.carInfoList=res.data.carInfoList;
		        for(var i=0;i<this.carInfoList.length;i++){
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
		        if(res.data.borCard==null){
		        	this.borCard=this.borCard
		        }else{
		        	this.borCard=res.data.borCard;
		        	this.borCard.id=res.data.borCard.id;
		        }
		        
		        /*贷款明细*/
		        this.loanDetailList=res.data.loanDetailList;
		        for(var i=0;i<this.loanDetailList.length;i++){
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
		        if(res.data.loanInfo==null){
		        	this.loanInfo=this.loanInfo
		        }else{
		        	this.loanInfo=res.data.loanInfo;
		        	this.loanInfo.id=res.data.loanInfo.id;
		        }
		        
		        /*负债信息*/
		        if(res.data.borDebt==null){
		        	this.borDebt=this.borDebt
		        }else{
		        	this.borDebt=res.data.borDebt;
		        	this.borDebt.id=this.borDebt.id;
		        	//console.log(this.borDebt.houseLoanAmt);
		        	//console.log(typeof(this.borDebt.houseLoanAmt));
		        	//负债信息 信用卡每月还款 保留两位小数点
		        	if(this.borDebt.monthRepayAmt != null){
		        		this.borDebt.monthRepayAmt = this.formatNumber(this.borDebt.monthRepayAmt,2,0);
		        	};

		        	this.arr.push(this.borDebt.monthRepayAmt);
		        	
		        	//负债信息 助学贷每月还款额 保留两位小数点
		        	if(this.borDebt.studentLoanAmt != null){
		        		this.borDebt.studentLoanAmt = this.formatNumber(this.borDebt.studentLoanAmt,2,0);
		        	};

		        	//负债信息 房贷每月还款额 保留两位小数点
		        	if(this.borDebt.houseLoanAmt != null){
		        		this.borDebt.houseLoanAmt = this.formatNumber(this.borDebt.houseLoanAmt,2,0);
		        	};

		        	this.arr.push(this.borDebt.houseLoanAmt);
		        	
		        	//负债信息 车贷每月还款额 保留两位小数点
		        	if(this.borDebt.carLoanAmt != null){
		        		this.borDebt.carLoanAmt = this.formatNumber(this.borDebt.carLoanAmt,2,0);
		        	};

		        	this.arr.push(this.borDebt.carLoanAmt);
		        	
		        	//负债信息 其他贷款每月还款额 保留两位小数点
		        	if(this.borDebt.otherLoanAmt != null){
		        		this.borDebt.otherLoanAmt = this.formatNumber(this.borDebt.otherLoanAmt,2,0);
		        	};

		        	this.arr.push(this.borDebt.otherLoanAmt);
		        	//console.log(this.aaa);
		        	//负债信息 负债合计 保留两位小数点
		        	if(this.borDebt.totalLoan != null){
		        		this.borDebt.totalLoan = this.formatNumber(this.borDebt.totalLoan,2,0);
		        	};
		        	//console.log(this.arr);
		        }
		        /*征询报告*/
		        if(res.data.rptInfo==null){
		        	this.rptInfo=this.rptInfo
		        }else{
		        	this.rptInfo=res.data.rptInfo;
		        	this.rptInfo.id=res.data.rptInfo.id;
		        }
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
		        if(res.data.otherInfo==null){
		        	this.otherInfo=this.otherInfo
		        }else{
		        	this.otherInfo=res.data.otherInfo;
		        	this.otherInfo.id=res.data.otherInfo.id;
		        }
		        //console.log(this.borCard);
		      });
		  },
	    	handleChange(){

	    	},
	    	add_home: function(event) {
	    		 event.stopPropagation();
	    		if(this.borestateList.length==0){
	    			this.borestateList.push({
	    							"applyId":this.applyId, // 申请单Id
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
	    							"applyId":this.applyId, // 申请单Id
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
		    add_vehicle: function(event) {
		    	event.stopPropagation();
		    	if(this.carInfoList.length==0){
		    		this.carInfoList.push({
						            "applyId":this.applyId, // 申请单Id
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
	    							"applyId":this.applyId, // 申请单Id
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
		    add_card: function(event) {
		    	event.stopPropagation();
		    	if(this.cardDetList.length==0){
		    		this.cardDetList.push({
						            "applyId":this.applyId, // 申请单Id
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
	    							"applyId":this.applyId, // 申请单Id
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
		    add_loanDetail: function(event) {
		    	event.stopPropagation();
		    	if(this.loanDetailList.length==0){
		    		this.loanDetailList.push({
						            "applyId":this.applyId, // 申请单Id
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
	    							"applyId":this.applyId, // 申请单Id
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
		    add_turnover: function(event) {
		    	event.stopPropagation();
		    	if(this.incomeList.length==0){
		    		this.incomeList.push({
						            "applyId":this.applyId, // 申请单Id    
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
	    							"applyId":this.applyId, // 申请单Id    
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
		    	//alert('qqq');
				if(val == null){
					this.currentRow = '';
				}else{
					this.currentRow = val;
				};  
				console.log(val);
			},
			carCurrentChange(val){
				//alert('车车');
				if(val == null){
					this.currentRowCar = '';
				}else{
					this.currentRowCar = val;
				};  
				console.log(val);
			},
			cardCurrentChange(val){
				//alert('信用卡使用明细');
				if(val == null){
					this.currentRowCard = '';
				}else{
					this.currentRowCard = val;
				};  
				console.log(val);
			},
			loanCurrentChange(val){
				//alert('贷款明细');
				if(val == null){
					this.currentRowLoan = '';
				}else{
					this.currentRowLoan = val;
				};  
				console.log(val);
			},
			incomeCurrentChange(val){
				//alert('流水明细');
				if(val == null){
					this.currentRowIncome = '';
				}else{
					this.currentRowIncome = val;
				};  
				console.log(val);
			},
			delet_home(event){
				event.stopPropagation();
				console.log(this.currentRow);
				for(var i=0;i<this.borestateList.length;i++){
					if(this.borestateList[i]==this.currentRow){
						this.borestateList.splice(i,1);
					}
				}
			},
			delet_vehicle(event){
				event.stopPropagation();
				console.log(this.currentRowCar);
				for(var i=0;i<this.carInfoList.length;i++){
					if(this.carInfoList[i]==this.currentRowCar){
						this.carInfoList.splice(i,1);
					}
				}
			},
			delet_card(event){
				event.stopPropagation();
				console.log(this.currentRowCard);
				for(var i=0;i<this.cardDetList.length;i++){
					if(this.cardDetList[i]==this.currentRowCard){
						this.cardDetList.splice(i,1);
					}
				}
			},
			delet_loanDetail(event){
				event.stopPropagation();
				console.log(this.currentRowLoan);
				for(var i=0;i<this.loanDetailList.length;i++){
					if(this.loanDetailList[i]==this.currentRowLoan){
						this.loanDetailList.splice(i,1);
					}
				}
			},
			/*流水明细*/
			delet_turnover(event){
				event.stopPropagation();
				console.log(this.currentRowIncome);
				for(var i=0;i<this.incomeList.length;i++){
					if(this.incomeList[i]==this.currentRowIncome){
						this.incomeList.splice(i,1);
					}
				}
			},
			/*统计按钮*/
			countNum(event){
				event.stopPropagation();
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
				//alert('222');
				if(row.incomeType==''){
					return
				}else{
					console.log(row);
					//console.log(typeof(row.n+row.n1+row.n2+row.n3+row.n4+row.n5));
					var totalNum=row.n.split(',').join("")*1+row.n1.split(',').join("")*1+row.n2.split(',').join("")*1+row.n3.split(',').join("")*1+row.n4.split(',').join("")*1+row.n5.split(',').join("")*1;
					console.log(totalNum);
					row.avgIncome=totalNum/6;
					row.avgIncome = this.formatNumber(row.avgIncome,2,0);
					console.log(row.avgIncome);
				}
				
				
			},
			//确定按钮
			sure(){
				for(var i=0;i<this.borestateList.length;i++){
					if(this.borestateList[i].estateType==''){
						this.tidialogVisible=true;
						this.info="房产信息不能为空！"
						return
					}
				};
				for(var i=0;i<this.carInfoList.length;i++){
					if(this.carInfoList[i].carType==''){
						this.tidialogVisible=true;
						this.info="车辆信息不能为空！"
						return
					}
				};
				for(var i=0;i<this.cardDetList.length;i++){
					if(this.cardDetList[i].bankName=='' || this.cardDetList[i].accountStatus==''){
						this.tidialogVisible=true;
						this.info="信用卡使用明细不能为空！"
						return　
					}
				};
				for(var i=0;i<this.loanDetailList.length;i++){
					if(this.loanDetailList[i].loanType=='' || this.loanDetailList[i].guaranteeType=='' || this.loanDetailList[i].accountStatus==''){
						this.tidialogVisible=true;
						this.info="贷款明细不能为空！"　
						return
					}
				};
				for(var i=0;i<this.incomeList.length;i++){
					if(this.incomeList[i].incomeType==''){
						this.tidialogVisible=true;
						this.info="流水明细不能为空！"　
						return
					}
				};
				
				//this.layer=true;
				//document.getElementsByTagName('body')[0].style.overflow='hidden';
				this.dialogVisible = true;
			},
			//弹框取消
			Cancle(){
				//this.layer=false;
				//document.getElementsByTagName('body')[0].style.overflow='';
				this.dialogVisible = false;					
			},
			//弹框确认
			trueSure(){
				if(this.loanInfo.carLoanTotal!='' || this.loanInfo.studentLoanTotal!='' || this.loanInfo.houseLoanTotal!=='' || this.loanInfo.otherLoanTotal!=''){
					this.countNum(event);
				};
				
				//this.layer=false;
				//document.getElementsByTagName('body')[0].style.overflow='';	
				this.dialogVisible = false;
				this.loanInfo.applyId=this.applyId;
				this.borCard.applyId=this.applyId;
				this.borDebt.applyId=this.applyId;
				this.rptInfo.applyId=this.applyId;
				this.otherInfo.applyId=this.applyId;
				
				this.post("/borrower/saveBorrowerInfo", {
			        "applyId":this.applyId,
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
			        if(res.statusCode==200){
			        	this.request(this.applyId);
			        	this.$message({
							message:"保存成功！",
							type:'success'
						})
			        }else{
			        	this.$message({
			              message:"保存失败！",
			              type: 'error'
			            })
			        }
			    });				
			},
			//提示弹框关闭
			infoSure(){
				this.tidialogVisible=false;
				//document.getElementsByTagName('body')[0].style.overflow='';
				//this.layer=false;
			},
			/*银行卡使用总况 去焦点时判断只能显示数字并且最大为999*/
			carNum(num,flag){
				if (num!=""){
			    	switch (flag) {
			            case 'cardCount':
			                if(isNaN(num)){
								this.borCard.cardCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.cardCount=0
							}else if(num>0 && num<999){
								//alert('oo1');
								this.borCard.cardCount=Math.round(num);
							}else if(num>=999){
								//alert('oo');
								this.borCard.cardCount=999;
								//console.log(this.borCard.cardCount);
							};
			                break;
			            case 'normalCount':
			                if(isNaN(num)){
								this.borCard.normalCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.normalCount=0
							}else if(num>0 && num<999){
								this.borCard.normalCount=Math.round(num);
							}else if(num>=999){
								this.borCard.normalCount=999;
							};
			                break;
			            case 'badDebtCount':
			                if(isNaN(num)){
								this.borCard.badDebtCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.badDebtCount=0
							}else if(num>0 && num<999){
								this.borCard.badDebtCount=Math.round(num);
							}else if(num>=999){
								this.borCard.badDebtCount=999;
							};
			                break;
			            case 'nouseCount':
			                if(isNaN(num)){
								this.borCard.nouseCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.nouseCount=0
							}else if(num>0 && num<999){
								this.borCard.nouseCount=Math.round(num);
							}else if(num>=999){
								this.borCard.nouseCount=999;
							};
			                break;
			            case 'freezeCount':
			                if(isNaN(num)){
								this.borCard.freezeCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.freezeCount=0
							}else if(num>0 && num<999){
								this.borCard.freezeCount=Math.round(num);
							}else if(num>=999){
								this.borCard.freezeCount=999;
							};
			                break;
			            case 'cancelCount':
			                if(isNaN(num)){
								this.borCard.cancelCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.cancelCount=0
							}else if(num>0 && num<999){
								this.borCard.cancelCount=Math.round(num);
							}else if(num>=999){
								this.borCard.cancelCount=999;
							};
			                break;
			            case 'userdCount':
			                if(isNaN(num)){
								this.borCard.userdCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.userdCount=0
							}else if(num>0 && num<999){
								this.borCard.userdCount=Math.round(num);
							}else if(num>=999){
								this.borCard.userdCount=999;
							};
			                break;
			            case 'stopPaymentCount':
			                if(isNaN(num)){
								this.borCard.stopPaymentCount='';
								//alert(num);
							}else if(num<=0){
								this.borCard.stopPaymentCount=0
							}else if(num>0 && num<999){
								this.borCard.stopPaymentCount=Math.round(num);
							}else if(num>=999){
								this.borCard.stopPaymentCount=999;
							};
			                break;
			            //征询报告 近6个月内信用卡报告查询次数
			            case 'crRecordTimes':
			                if(isNaN(num)){
								this.rptInfo.crRecordTimes='';
								//alert(num);
							}else if(num<=0){
								this.rptInfo.crRecordTimes=0
							}else if(num>0 && num<99999){
								this.rptInfo.crRecordTimes=Math.round(num);
							}else if(num>=99999){
								this.rptInfo.crRecordTimes=99999;
							};
			                break;  
			                 
			        }
			    }
			},
			//负债信息 最近3个月信用卡/贷款申请次数
			loanNumber(num){
				if(num!=null && num!=""){
					if(isNaN(num)){
						this.borDebt.loanNumber='';
					}else if(num<=0){
						this.borDebt.loanNumber=0
					}else if(num>0 && num<999){
						this.borDebt.loanNumber=Math.round(num); 
					}else if(num>=999){
						this.borDebt.loanNumber=999;
					}
				}
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
			debtTotal(val,flag){	
	        	switch (flag) {
		            case 'monthRepayAmt':
		            	if(!this.borDebt.monthRepayAmt){
		            		 this.borDebt.monthRepayAmt = this.formatNumber('0',2,0);
		            		 console.log(this.borDebt.monthRepayAmt);
		            		}else if( this.borDebt.monthRepayAmt){
		            			this.borDebt.monthRepayAmt =this.formatNumber(this.borDebt.monthRepayAmt,2,0);
		            		}
					    
					    this.arr[0]=this.borDebt.monthRepayAmt.split(',').join("")*1;
					    this.totalNum();
		                break;
		            case 'studentLoanAmt':
		            	if(!this.borDebt.studentLoanAmt){
		            		this.borDebt.studentLoanAmt = this.formatNumber('0',2,0);
		            	}else if(this.borDebt.studentLoanAmt){
		            		this.borDebt.studentLoanAmt =this.formatNumber(this.borDebt.studentLoanAmt,2,0);
		            	}
		                break;
		            case 'houseLoanAmt':
		            		if(!this.borDebt.houseLoanAmt){
		            			this.borDebt.houseLoanAmt = this.formatNumber('0',2,0);
		            		}else if(this.borDebt.houseLoanAmt){
		            			this.borDebt.houseLoanAmt =this.formatNumber(this.borDebt.houseLoanAmt,2,0);
		            		};
		            	this.arr[1]=this.borDebt.houseLoanAmt.split(',').join("")*1;
		            	this.totalNum();
		                break;
		            case 'carLoanAmt':
		            		if(!this.borDebt.carLoanAmt){
		            			this.borDebt.carLoanAmt = this.formatNumber('0',2,0);
		            		}else if(this.borDebt.carLoanAmt){
		            			this.borDebt.carLoanAmt =this.formatNumber(this.borDebt.carLoanAmt,2,0);
		            		};
		            	this.arr[2]=this.borDebt.carLoanAmt.split(',').join("")*1;
		            	this.totalNum();
		                break;
		            case 'otherLoanAmt':
		            		if(!this.borDebt.otherLoanAmt){
		            			this.borDebt.otherLoanAmt = this.formatNumber('0',2,0);
		            		}else if(this.borDebt.otherLoanAmt){
		            			this.borDebt.otherLoanAmt =this.formatNumber(this.borDebt.otherLoanAmt,2,0);
		            		};
		            	this.arr[3]=this.borDebt.otherLoanAmt.split(',').join("")*1;
		            	this.totalNum();
		                break;  
		        }
			},
			totalNum(){
				console.log(this.arr)
				this.borDebt.totalLoan=0;
	        	for(var i=0;i<this.arr.length;i++){
	        		console.log(this.arr[i]);
		            if(this.arr[i] == null){
		                this.arr[i]=0;
		            }else if(this.arr[i] != null){
		                //console.log(this.borDebt.totalLoan);
		                this.borDebt.totalLoan+= this.arr[i];
		                //console.log(this.borDebt.totalLoan);
		            }
		        }
			    this.borDebt.totalLoan=this.formatNumber(this.borDebt.totalLoan,2,0);
	        },
			moneyBlur(value, flag) {
				console.log(value);
				console.log(value.n);

			    // 无数据
			    if(!value.n){
			    	value.n = '';
			    	console.log(value.n);
			    };
			    if(!value.n1){
			    	value.n1 = '';
			    };
			    if(!value.n2){
			    	value.n2 = '';
			    };
			    if(!value.n3){
			    	value.n3 = '';
			    };
			    if(!value.n4){
			    	value.n4 = '';
			    };
			    if(!value.n5){
			    	value.n5 = '';
			    };
			    if(!value.avgIncome){
			    	value.avgIncome = '';
			    };
			    if(!value.unitPrice){
			    	value.unitPrice = '';
			    };
			    if(!value.monthlyPay){
			    	value.monthlyPay = '';
			    };
			    if(!value.restLoans){
			    	value.restLoans = '';
			    };
			    if(!value.carPrice){
			    	value.carPrice = '';
			    };
			    if(!value.realRepaymentAmt){
			    	value.realRepaymentAmt = '';
			    };
			    if(!value.actRepaymentAmt){
			    	value.actRepaymentAmt = '';
			    };
			    //贷款合同金额
			    if(!value.loanContValue){
			    	value.loanContValue = '';
			    };
			    //贷款余额
			    if(!value.loanBal){
			    	value.loanBal = '';
			    };
			    //本期应还款金额
			    if(!value.presentRepayAmt){
			    	value.presentRepayAmt = '';
			    };
			    //本期实际还款金额
			    if(!value.curMonthRepayAmt){
			    	value.curMonthRepayAmt = '';
			    };
			    //当前逾期金额
			    if(!value.presentOverAmt){
			    	value.presentOverAmt = '';
			    };
			    //信用卡使用额度 信用额度
			    if(!value.cardAmt){
			    	value.cardAmt = '';
			    };
			    //信用卡使用额度 已使用额度
			    if(!value.usedAmt){
			    	value.usedAmt = '';
			    };
			    // 有数据
			    if (value) {
		        	switch (flag) {
			            case 'n':
						    value.n =this.formatNumber(value.n,2,0);
			                break;
			            case 'n1':
			            	value.n1 =this.formatNumber(value.n1,2,0);
			                break;
			            case 'n2':
			            	value.n2 =this.formatNumber(value.n2,2,0);
			                break;
			            case 'n3':
			            	value.n3 =this.formatNumber(value.n3,2,0);
			                break;
			            case 'n4':
			            	value.n4 =this.formatNumber(value.n4,2,0);
			                break;
			            case 'n5':
			            	value.n5 =this.formatNumber(value.n5,2,0);
			                break;  
			            case 'unitPrice':
			            	value.unitPrice =this.formatNumber(value.unitPrice,2,0);
			                break;
			            case 'monthlyPay':
			            	value.monthlyPay =this.formatNumber(value.monthlyPay,2,0);
			                break;
			            case 'restLoans':
			            	value.restLoans =this.formatNumber(value.restLoans,2,0);
			                break; 
			            case 'carPrice':
			            	value.carPrice =this.formatNumber(value.carPrice,2,0);
			                break; 
			            case 'realRepaymentAmt':
			            	value.realRepaymentAmt =this.formatNumber(value.realRepaymentAmt,2,0);
			                break;
			            case 'actRepaymentAmt':
			            	value.actRepaymentAmt =this.formatNumber(value.actRepaymentAmt,2,0);
			                break;
			            case 'loanContValue':
			            	value.loanContValue =this.formatNumber(value.loanContValue,2,0);
			                break;
			            //贷款余额
			            case 'loanBal':
			            	value.loanBal =this.formatNumber(value.loanBal,2,0);
			                break;
			            //本期应还款金额  
			            case 'presentRepayAmt':
			            	value.presentRepayAmt =this.formatNumber(value.presentRepayAmt,2,0);
			                break;
			            //本期实际还款金额
			            case 'curMonthRepayAmt':
			            	value.curMonthRepayAmt =this.formatNumber(value.curMonthRepayAmt,2,0);
			                break;
			            //当前逾期金额
			            case 'presentOverAmt':
			            	value.presentOverAmt =this.formatNumber(value.presentOverAmt,2,0);
			                break;
			            //信用卡使用额度 信用额度
			            case 'cardAmt':
			            	value.cardAmt =this.formatNumber(value.cardAmt,2,0);
			                break;
			            //信用卡使用额度 已使用额度
			            case 'usedAmt':
			            	value.usedAmt =this.formatNumber(value.usedAmt,2,0);
			                break;
			        } 
			    }
			},
			moneyBlurs(value, flag){
				if(!value.monthlyPay){
			    	value.monthlyPay = '';
			    };
			    if(!value.restLoans){
			    	value.restLoans = '';
			    };
			    if (value) {
		        	switch (flag) {
			            case 'monthlyPay':
			            	value.monthlyPay =this.formatNumber(value.monthlyPay,2,0);
			                break;
			            case 'restLoans':
			            	value.restLoans =this.formatNumber(value.restLoans,2,0);
			                break; 
			        } 
			    }
			},
			//邮政编码验证
			postcode(row){
				console.log(row);
				if(row.estateZip == ''){
					row.estateZip = '';
					//this.postcodes=false;
				}else{
					if(!/^[0-9][0-9]{5}$/.test(row.estateZip)){
						//this.postcodes=true;
						row.estateZip = '';
					}
				}
			},
	    },
	    directives: {
	    // 指令的定义
	    	 numbers:{
                twoWay: true,
                bind:function (el) {
                    console.log(el);
                    el.handler = function(){
                    	let value;
                        function formatNumber(num,cent,isThousand) {
                            var num = num.toString().replace(/\$|\,/g,'');

                            // 检查传入数值为数值类型
                            if(isNaN(num))
                                num = "0";

                            // 获取符号(正/负数)
                            let sign = (num == (num = Math.abs(num)));

                            num = Math.floor(num*Math.pow(10,cent)+0.50000000001);  // 把指定的小数位先转换成整数.多余的小数位四舍五入
                            let cents = num%Math.pow(10,cent);              // 求出小数位数值
                            num = Math.floor(num/Math.pow(10,cent)).toString();   // 求出整数位数值
                            cents = cents.toString();               // 把小数位转换成字符串,以便求小数位长度

                            // 补足小数位到指定的位数
                            while(cents.length<cent)
                                cents = "0" + cents;

                            if(isThousand) {
                                // 对整数部分进行千分位格式化.
                                for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
                                    num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
                            }

                            if (cent > 0)
                                return (((sign)?'':'-') + num + '.' + cents);
                            else
                                return (((sign)?'':'-') + num);
                            };
                        console.log(formatNumber(el.value,2,0));
                        (function(){
                            value = formatNumber(el.value,2,0)
                            console.log(value);
                            return value
                        })()
                        el.value =value
                         console.log(el.value);
                    };
                    el.addEventListener('blur', el.handler);
                    
                },
                update:function (el,binding,vnode) {
                    if(el.value !== ''){
                        el.value = el.value.replace(/[^0-9.]+/g, '');
                        console.log(el.value);
                    }
                },
            },
			/*numberOnly: {
	            bind: function(el) {
	            	//console.log(el);
	                el.handler = function() {
	                	el.value = el.value.replace(/\D+/, '');
	                	if(!isNaN(el.value)){
	                		
	                		el.value=Math.round(parseFloat(el.value)*100)/100;
	                		console.log(el.value);
							var xsd=el.value.toString().split(".");
							
							if(xsd.length==1){
								el.value=el.value.toString()+".00";
								console.log(el.value);
								//return el.value;
							}else if(xsd.length>1){
								if(xsd[1].length<2){
								el.value=el.value.toString()+"0";
								}
							//return el.value;
							} 
							 //return el.value;
							console.log(el.value);
	                	}    
	                }
	                el.addEventListener('input', el.handler)
	            },
	            unbind: function(el) {
	                el.removeEventListener('input', el.handler)
	            }
	        },*/

		},
		watch:{
		  	isFull:function(val){
		  		console.log(this.isFull);
		  		if(val == false){// 分屏
		  			//信用卡使用总况
		  			$(".xinyongka").width('930px');
		  			$(".xinyongka ul li div").width('150px');
		  			$(".xinyongka ul li div input").css({'width':'100%','maxWidth':'150px'});
		  			//负债信息
		  			$(".fuzhaixinxi").width('930px');
		  			$(".fuzhaixinxi ol li.liDiv div").width('150px');
		  			$(".fuzhaixinxi ol li div.require").width('calc( 100% - 155px )');
		  			$(".fuzhaixinxi ol li div.require div").width('100%');
		  			$(".fuzhaixinxi ol li div input").css({'width':'100%','maxWidth':'150px'});
		  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 16.6% - 150px )'});
		  			//征询报告
		  			//$(".zhengxunbaogao ol li div").width('150px');
		  			$(".zhengxunbaogao ol li div.require div").width('150px');
		  			$(".zhengxunbaogao ol li div.require input").css({'width':'100%','maxWidth':'150px'});
		  			//$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) div").width('150px');
		  			$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) .unique").css({'maxWidth':'150px','minWidth':'150px'});
		  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 150px )',"padding-right":'calc( 49.9% - 150px )'});
		  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require").width('calc( 100% - 150px )');
		  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require div").width('100%');
		  			//其他信息
		  			$(".qita").width('930px');
		  			$(".qita ol li").css({'padding-right': 'calc( 49.9% - 155px )','padding-left': 'calc( 16.6% - 155px )'});
		  			//确定按钮
		  			$(".wattingButton").css({'width':'930'});
		  			$(".wattingButton button").css({'margin-right':'calc( 49.9% - 155px )'});
		  			
		  		}else if(val == true){// 全屏
		  			$(".xinyongka").width('100%');
		  			$(".xinyongka ul li div").width('200px');
		  			$(".xinyongka ul li div input").css({'width':'100%','maxWidth':'200px'});
		  			//负债信息
		  			$(".fuzhaixinxi").width('100%');
		  			$(".fuzhaixinxi ol li.liDiv div").width('200px');
		  			$(".fuzhaixinxi ol li div.require").width('calc( 100% - 155px )');
		  			$(".fuzhaixinxi ol li div.require div").width('100%');
		  			$(".fuzhaixinxi ol li div input").css({'width':'100%','maxWidth':'200px'});
		  			$(".fuzhaixinxi ol.num li:nth-of-type(2)").css({"padding-left":'calc( 16.6% - 175px )',"padding-right":'calc( 16.6% - 184px )'});
		  			//征询报告
		  			$(".zhengxunbaogao ol li div.require").width('200px');
		  			$(".zhengxunbaogao ol li div.require div").width('200px');
		  			$(".zhengxunbaogao ol li div.require input").css({'width':'100%','maxWidth':'200px'});
		  			//$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) div").width('200px');
		  			$(".zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) .unique").css({'maxWidth':'200px','minWidth':'200px'});
		  			$(".zhengxunbaogao ol:nth-of-type(2) li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
		  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require").width('calc( 100% - 150px )');
		  			$(".zhengxunbaogao ol:nth-of-type(2) li div.require div").width('100%');
		  			//其他信息
		  			$(".qita").width('100%');
		  			$(".qita ol li").css({"padding-left":'calc( 16.6% - 174px )',"padding-right":'calc( 49.9% - 174px )'});
		  			//确定按钮
		  			$(".wattingButton").css({'width':'100%'});
		  			$(".wattingButton button").css({'margin-right':'calc( 49.9% - 174px )'});
			  	}
		  	}

		},
	}
</script>
<style type="text/css" scoped>
	.borrowerInformation{
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		font-size: 14px;
		min-width: 1327px;
		 /*min-width: 990px; */
	}
	.left{
		float: left;
	}
	.right{
		float: right;
		margin-right: 15px;
		font-size: 15px;
	}
	.right .rightSpan{
		margin-left: 10px;
	}
	.right .rightSpan img{
		padding-top: 5px;
		float: left;
	}
	.right .rightSpan:nth-of-type(2) img{
		padding-left: 24px;
	}
	.right .rightSpan:nth-of-type(3) img{
		padding-left: 24px;
	}
	.right .rightSpan span{
		margin-left: 10px;
		float: left;
	}
	.containDiv{
		clear: both;
	}
	/* 折叠面板头部背景色 */
	.icon_hat{
		padding: 9px 10px 10px 13px;
		vertical-align: middle;
	}
	.headFont{
		font-size: 16px;
	}
	/* 字体图标 */
	.icon{
		color:#20a0ff;
		font-size: 20px;
	}
	.icon span{
		color:#475669;
	}
	/* 信用卡使用总况 */
	.xinyongka{
		width: 930px;
	}
	.xinyongka ul{
		float: left;
		width: 33.3%;
		margin-bottom: 20px;
		text-align: center;
	}
	.xinyongka ul li{
		margin-top: 20px;
		min-width: 270px;
	}
	.xinyongka ul li label{
		width: 120px;
		display: inline-block;
		text-align: right;
		color: #475669;
	}
	.xinyongka ul li div{
		width: 150px;
	}
	.xinyongka ul li div input{
		width: 100%;
		max-width: 150px
	}
	/* 贷款总况 */
	.daikuanzongkuang li p{
		width: 180px;
		height: 30px;
		display: inline-block;
		text-align: left;
		padding-left: 13px;
	}
	.daikuanzongkuang ul:nth-of-type(3) li:nth-of-type(4) label{
		width: 128px;
		margin-left: -8px;
	}
	/* 负债信息 */
	.fuzhaixinxi{
		width: 930px;
	}
	.fuzhaixinxi ol{
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
		width: 155px;
		text-align: right;
		padding-right: 5px;
		color: #475669;
	}
	.fuzhaixinxi ol li.liDiv div{
		width: 150px;
	}
	.fuzhaixinxi ol li div input{
		width: 100%;
		padding-left:10px;
	}
	.fuzhaixinxi ol:nth-of-type(1) li:nth-of-type(2) label{
		padding-right: 4px;
	}
	.fuzhaixinxi ol:nth-of-type(2) li:nth-of-type(2){
		height: 35px;
	}
	.fuzhaixinxi ol:nth-of-type(2) li:nth-of-type(2) label{
		line-height: 1;
	}
	.fuzhaixinxi ol:nth-of-type(2) li:nth-of-type(2) div{
		top: -5px;
	}
	.fuzhaixinxi ol:nth-of-type(2) li:nth-of-type(3) input{
		color: #5a5e66;
	}
	.fuzhaixinxi ol:nth-of-type(3) li:nth-of-type(1){
		height: 35px;
	}
	.fuzhaixinxi ol:nth-of-type(3) li:nth-of-type(1) label{
		line-height: 1;
	}
	.fuzhaixinxi ol:nth-of-type(3) li:nth-of-type(1) div{
		top: -5px;
	}
	/* 负债信息：负债合计 */
	.fuzhaixinxi ol li.zongji input{
		border: none;
	}
	/* 负债信息：文字说明 */
	ol.num li{
		margin-bottom: 10px;
	}
	ol.num li:nth-of-type(2){
		width: 66.6%;
		text-align: left;
		padding-right: calc( 16.6% - 150px );
		padding-left:calc( 16.6% - 150px );
	}
	ol.num li:nth-of-type(2) label{
		height: 54px; 
		line-height: 54px;
		float: left;
	}
	ol.num li:nth-of-type(2) textarea{
		width: 100%;
		border: 1px solid #d8dce5; 
		border-radius: 4px;
		padding:5px 10px;
	}
	ol.num li:nth-of-type(2) div{
		/* width: 640px; */
		width: calc( 100% - 160px );
		display: inline-block;
	}
	ol.num li:nth-of-type(2) div div{
		width: 100%;
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
	.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(1) div .el-input__inner{
		padding-right: 10px;
	}
	.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(3) div{
		top: -5px;
	}
	.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(3) label{
		line-height: 1;
	}
	.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) label{
		line-height: 1;
	}
	.zhengxunbaogao ol:nth-of-type(1) li:nth-of-type(2) .unique{
		max-width: 150px;
		top: -5px;
	}
	.zhengxunbaogao ol:nth-of-type(2) li{
		width: 100%;
		text-align: left;
		padding-right: calc( 49.9% - 155px );
		padding-left: calc( 16.6% - 155px );
		margin-bottom: 10px;
	}
	.zhengxunbaogao ol:nth-of-type(2) li label{
		height: 75px;
		line-height: 75px;
	}
	.zhengxunbaogao ol:nth-of-type(2) li div{
		display: inline-block;
		/* width: 640px; */
		width: calc( 100% - 160px );
	}
	.zhengxunbaogao ol:nth-of-type(2) li div div{
		width: 100%;
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
		height: 117px;
		margin-top: 20px;
		padding-right: calc( 49.9% - 155px );
		padding-left: calc( 16.6% - 155px );
	    text-align: right;
	}
	.qita ol div.require{
		width: calc(100% - 150px);
		display: inline-block;
	}
	.qita ol div.require div{
		width: 100%;
	}
	.qita ol label{
		height: 117px;
		line-height: 117px;
		display: inline-block;
		float: left;
		color: #475669;
		width: 150px;
    	padding-right: 5px;
	}
	.qita ol textarea{
		width: 70%;
		height: 200px;
		border: 1px solid #d8dce5;  
		padding:10px 0 0 10px;
		color: #475669;
	}
	/* 必填 */
	.must{
		color:#ff7676;
		font-size: 14px;
	}
	/* 确定按钮 */
	.wattingButton{
		width: 930px;
		/* padding-left:calc( 16.6% - 174px );
		padding-right:calc( 49.9% - 184px ); */
	}
	.wattingButton button{
		float: right;
		margin:10px;
		margin-right: calc( 49.9% - 174px );
	}

	/* 提示弹层 */
	.layer{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1000;
	}
	.layer .layerbox{
		width: 338px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -169px;
		margin-top: -80px;
		border: 1px solid #ccc;
		background-color: #eee;
		z-index: 10000;
	}
	.layer .layerbox p{
		width: 100%;
		height:30px;
		font-size: 14px;
		line-height: 30px;
		padding-left: 10px;
		color: #475669;
	}
	.layer .layerbox p.choces{
		text-align: center;
	}
	.layer p i{
		float: right;
		font-size: 20px;
		color: #0077ff;
		padding:5px 10px 0 0;
	}
	.layer .layerbox div{
		background-color: #fff;
		height: 100px;
		padding: 10px 10px;
		width: 96%;
		margin:auto;
		margin-bottom: 8px;
	}
	.layer .layerbox .buttonDiv{
		/* float: left; */
		width: 100%;
		height: 50px;
		margin-top:10px;
	}
	.layer .layerbox .buttonDiv button{
		float: left;
		margin:0 0 0 50px;
	}
	.layer .layerbox .infoButton{
		height: auto;
	}
	.layer .layerbox .infoButton button{
		float: right;
	}
	.require{
		position: relative;
	}
	.require span{
		position: absolute;
		left: 10px;
		top: -17px;
		font-size: 12px;
		color: #ff7676;
		display: inline-block;
		height: 17px;
		line-height: 17px;
	}
	.require span i{
		padding-right: 2px;
		font-style: normal;
	}
</style>