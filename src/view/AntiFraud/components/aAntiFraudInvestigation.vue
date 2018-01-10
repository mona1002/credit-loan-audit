<template>
	<div class="aAntiFraudInvestigation">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item name="1">
				<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">基本信息</span>
				</template>
				<table class="table">
					<thead>
						<tr>
							<th>进件编号</th>
							<th>案件编号</th>
							<th>客户姓名</th>
							<th>身份证号</th>
							<th>申请产品</th>
							<th>进件机构</th>
							<th>销售人员</th>
							<th>提报人</th>
							<th>提报组别</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{{fraudApplyInfo.applySubno}}</td>
							<td>{{fraudApplyInfo.caseNum}}</td>
							<td>{{fraudApplyInfo.applyCustName}}</td>
							<td>{{fraudApplyInfo.certCode}}</td>
							<td>{{fraudApplyInfo.proName}}</td>
							<td>{{fraudApplyInfo.appOrgName}}</td>
							<td>{{fraudApplyInfo.salePersonName}}</td>
							<td>{{fraudApplyInfo.applyPersonName}}</td>
							<td>{{fraudApplyInfo.appOrgName}}</td>
					</tr>
					</tbody>
				</table>
			    <!-- <el-table
			      :data="fraudApplyInfo"
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
			    				        prop="applySubno"
			    				        label="进件编号"
			    				        min-width="110">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="caseNum"
			    				        label="案件编号"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="applyCustName"
			    				        label="客户姓名"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="certCode"
			    				        label="身份证号"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="proName"
			    				        label="申请产品"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="appOrgName"
			    				        label="进件机构"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="salePersonName"
			    				        label="销售人员"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="applyPersonName"
			    				        label="提报人"
			    				        min-width="100">
			    				      </el-table-column>
			    				      <el-table-column
			    				        prop="appOrgName"
			    				        label="提报组别"
			    				        min-width="100">
			    				      </el-table-column>
			    </el-table> -->
		  	</el-collapse-item>
		  	<el-collapse-item name="2">
				<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">提报来源</span>
				</template>
			    <div class="tibao">
			    	<ul>
			    		<li><label>提报人工号：</label><p>33333333{{fraudApplyInfo.applyCode}}</p></li>
			    		<li><label>提报人姓名：</label><p>粉红丝带{{fraudApplyInfo.applyPersonName}}</p></li>
			    		<li><label>提报渠道：</label><p>{{fraudApplyInfo.channelTxt}}</p></li>
			    	</ul>
			    	<div>
			    		<label>理由：</label>
			    		<el-input
						  type="textarea"
						  :rows="3"
						  placeholder="请输入内容"
						  v-model="reason"
						  disabled>
						</el-input>
			    	</div>
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item name="3">
				<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">命中规则</span>
				</template>
				<div class="tableDiv">
				    <el-table
				      :data="hitRuleList"
				      style="width: 100%"
				      height="242"
				      @cell-click="inquiry"
				      border>
					      <el-table-column
					        type="index"
					      	:index='1'
					      	label="序号"
					      	min-width="50">
					      </el-table-column>
					      <el-table-column
					        prop="ruleContent"
					        label="命中规则名称"
					        min-width="110">
					      </el-table-column>
					      <el-table-column
					        prop="custCount"
					        label="命中客户数"
					        min-width="80"
					        >
					      </el-table-column>
				    </el-table>
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item name="4">
				<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">调查记录</span>
				</template>
			    <div class="record">
			    	<ul>
			    		<li><label>网查：</label>
			    			<el-input
							  type="textarea"
							  :rows="3"
							  placeholder="请输入内容"
							  v-model="fraudAuditInfo.netCheck">
							</el-input>
							<!-- <textarea>{{fraudAuditInfo.netCheck}}</textarea> -->
						</li>
			    		<li>
			    			<label>114：</label>
			    			<el-input
							  type="textarea"
							  :rows="3"
							  placeholder="请输入内容"
							  v-model="fraudAuditInfo.oof">
							</el-input>
							<!-- <textarea>{{fraudAuditInfo.oof}}</textarea> -->
						</li>
			    		<li>
			    			<label>其他：</label>
			    			<el-input
							  type="textarea"
							  :rows="3"
							  placeholder="请输入内容"
							  v-model="fraudAuditInfo.other">
							</el-input>
							<!-- <textarea>{{fraudAuditInfo.other}}</textarea> -->
						</li>
			    	</ul>
			    </div>
		  	</el-collapse-item>
		  	<el-collapse-item name="5">
				<template slot="title">
			      	<div class="left">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">电核区</span>
				    </div>
			      	<div class="remarkIcon right">
			      		<span @click="add" class="rightSpan">
			      			<img src="../../../../static/images/add.png" class="icon"><span>添加</span>
			      		</span>
						<span @click="delet" class="rightSpan">
							<img src="../../../../static/images/delete.png" class="icon"><span>删除</span>
						</span>
					</div>
				</template>
				<div class="ElectroNuclear">
					<el-table
				      :data="fraudTelCheckList"
				      style="width: 100%"
				      highlight-current-row
				      border
				      @current-change="handleCurrentChanges">
				      <el-table-column
				        type="index"
				      	:index='1'
				      	label="序号"
				      	min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="phoneNum"
				        label="手机号码"
				        min-width="110">
				        <template slot-scope="scope">
				        	<el-input v-model="scope.row.phoneNum" placeholder="请输入内容" @blur="regPhone(scope.row)"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="relation"
				        label="关系"
				        min-width="100">
				        <template slot-scope="scope">
				        	<el-input v-model="scope.row.relation" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
				      <el-table-column
				        prop="record"
				        label="记录录入"
				        min-width="100">
				        <template slot-scope="scope">
				        	<el-input v-model="scope.row.record" placeholder="请输入内容"></el-input>
				        </template>
				      </el-table-column>
			    	</el-table>
				</div>
		  	</el-collapse-item>
		</el-collapse>
		<div class="button">
			<el-button type="primary" @click="bigSure">确认</el-button>
		</div>
		<!-- 弹框 -->
		<div class="numLog">
			<el-dialog
			  :title=aa
			  :visible.sync="dialogVisible"
			  width="860px"
			  top="20vh">
			  <div class="numBody">
				<div class="markIcon">
		      		<span @click="relieve">
		      			<img src="../../../../static/images/add.png" class="icon"><span>解除</span>
		      		</span>
					<span @click="recovery">
						<img src="../../../../static/images/delete.png" class="icon"><span>恢复</span>
					</span>
				</div>
				<div>
					<el-table
					    ref="multipleTable"
					    :data="recordList"
					    tooltip-effect="dark"
					    style="width: 100%"
					    height="259"
					    border
					    @selection-change="handleSelectionChange">
					    <el-table-column
					        type="index"
					      	:index='1'
					      	label="序号"
					      	min-width="50">
				      	</el-table-column>
				      	<el-table-column
					      	type="selection"
					      	min-width="50">
					    </el-table-column>
					    <el-table-column
					      	label="进件编号"
					      	prop="applySubNo"
					      	min-width="120">
					    </el-table-column>
					    <el-table-column
					      	prop="ruleContent"
					      	label="命中客户名称"
					      	min-width="120">
					    </el-table-column>
					    <el-table-column
					      	prop="statusTxt"
					      	label="状态"
					      	min-width="80">
					    </el-table-column>
					    <el-table-column
					      	label="操作"
					      	min-width="50">
					      <template slot-scope="scope">
					        <el-button
					          size="mini"
					          @click="handlDetail(scope.$index, scope.row)">详情
					      	</el-button>
					      </template>
					    </el-table-column>
					</el-table>
					<!-- 分页 -->
					<div class="page">
						<el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :current-page="currentPage"
					      :page-sizes="[10, 50, 80, 100]"
					      :page-size=setPageSize
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="totals.totalRecord">
					    </el-pagination>
				    </div>
				</div>	
			  </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="sure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
		<!-- 解除弹框 -->
		<div class="delLog">
			<el-dialog
			  title="提示"
			  :visible.sync="deldialogVisible"
			  width="420px"
			  top="35vh">
			  <span>只能针对未解除状态数据进行操作，请重新选择！</span>
			  <span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="delSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
		<!-- 恢复弹框 -->
		<div class="backLog">
			<el-dialog
			  title="提示"
			  :visible.sync="backdialogVisible"
			  width="420px"
			  top="35vh">
			  <span>只能针对已解除状态数据进行操作，请重新选择</span>
			  <span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="backSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				aa: '命中规则名称：',
				activeNames: ['1','2','3','4','5','6','7','8','9','10'],
				fraudApplyInfo:'',
				hitRuleList:[
					/*{
		                ruleId:"xxx", // 规则ID
		                ruleContent:"方式开发健康", // 命中规则名称
		                custCount:0 // 命中客户数
		            },
		            {
		                ruleId:"xxx", // 规则ID
		                ruleContent:"方式开发健康", // 命中规则名称
		                custCount:20 // 命中客户数
		            },
		            {
		                ruleId:"xxx", // 规则ID
		                ruleContent:"方式开发健康", // 命中规则名称
		                custCount:20 // 命中客户数
		            },
		            {
		                ruleId:"xxx", // 规则ID
		                ruleContent:"方式开发健康", // 命中规则名称
		                custCount:20 // 命中客户数
		            },
		            {
		                ruleId:"xxx", // 规则ID
		                ruleContent:"方式开发健康", // 命中规则名称
		                custCount:20 // 命中客户数
		            },
		            {
		                ruleId:"xxx", // 规则ID
		                ruleContent:"方式开发健康", // 命中规则名称
		                custCount:20 // 命中客户数
		            },*/
				],
				fraudTelCheckList:[],
				fraudAuditInfo:{
					"appinfoId":"", // 反欺诈申请id
		            "netCheck":"", // 网查
		            "oof":"", // 114
		            "other":"", // 其他
		            "auditCode":"", // 当前审核人编号
		            "auditName":"" // 当前审核人姓名
				},
				dialogVisible: false,
				/*命中规则 列表*/
				//recordList:[],
				totals:{},
				currentPage:1,// 默认显示的当前页
				setPageSize:10,
				recordList:[
		          /*{
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股1" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股2" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股2" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股3" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股3" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股1" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股1" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股2" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股3" // 状态文本
		         },
		         {
		            ruleId:"xxxx", // 规则Id
		            ruleContent:"功夫功夫", // 命中规则的名称
		            applySubNo:"13424675787", // 进件编号
		            custName:"和规范化风格哈", // 命中客户名称
		            status:"而非给", // 状态
		            statusTxt:"法人股3" // 状态文本
		         },*/
		      ],
		      /*反欺诈申请ID*/
		      appinfoId:'',
		      /*命中规则列表参数*/
		      ruleId:'',
		      pageParam:{
			       pageSize:10,
			       pageNum:1
			   },
			   /*存放多选时选中的数据*/
			   multipleSelection:[],
			   /*解除弹框*/
			   deldialogVisible:false,
			   /*恢复弹框*/
			   backdialogVisible:false,
			   //根据judgeFlag判断取 反欺诈专员 还是 反欺诈主管的申请ID
			   judgeFlag:'',
			   //理由：主原因+子原因+描述
			   reason:'',
			}
		},
		mounted(){
			/*获取 反欺诈申请ID*/
			this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
			if(this.judgeFlag.flag == '03'){
				this.appinfoId=JSON.parse(localStorage.getItem('AntitaskInWaitting')).applyId;//反欺诈专员
			}else if (this.judgeFlag.flag == '04') {
		        this.appinfoId = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")).applyId; //反欺诈主管
		    }
			this.request(this.appinfoId);	
		},
		methods:{
			/*先查询列表*/
			request(val){
				this.post('antiFraud/getAntiFraudSurveyInfo',{
		        'appinfoId':val
		      }
	          ).then(res => {
	          	if(res.statusCode==200 &&　res.data!=null){
	          		//基本信息
	          		if(res.data.fraudApplyInfo == null){
	          			this.fraudApplyInfo = this.fraudApplyInfo;
	          		}else{
	          			this.fraudApplyInfo = res.data.fraudApplyInfo;
	          			this.reason = this.fraudApplyInfo.mainreaName+this.fraudApplyInfo.subreaName+this.fraudApplyInfo.applyDesc;
	          		};

	          		//命中规则
	          		if(res.data.hitRuleList == null){
	          			this.hitRuleList = this.hitRuleList;
	          		}else{
	          			this.hitRuleList = res.data.hitRuleList;
	          		};
	          		
	          		if(res.data.fraudAuditInfo == null){
	          			this.fraudAuditInfo = this.fraudAuditInfo;
	          		}else{
	          			this.fraudAuditInfo = res.data.fraudAuditInfo;
	          		};
	          		
	          		if(res.data.fraudTelCheckList == null){
	          			this.fraudTelCheckList = this.fraudTelCheckList;
	          		}else{
	          			this.fraudTelCheckList = res.data.fraudTelCheckList;
	          		};
	          	}
	          })
			},
			/*保存*/
			bigSure(){
				this.fraudAuditInfo.appinfoId=this.appinfoId;
				this.fraudAuditInfo.auditCode=this.auditCode;
				this.fraudAuditInfo.appinfoId=this.appinfoId;//当前审核人编号 登陆人
				this.fraudTelCheckList.auditName=this.auditName;//当前审核人姓名 登陆人

				this.post('antiFraud/saveAntiFraudSurveyInfo',{
					"fraudAuditInfo":this.fraudAuditInfo,
					"fraudTelCheckList":this.fraudTelCheckList
				}).then(res=>{
					if(res.statusCode==200){
			        	this.request(this.appinfoId);
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
				})
			},
			handleChange(){

		 	},
		 	handleCurrentChanges(val){
		 		if(val == null){
					this.currentRow = '';
				}else{
					this.currentRow = val;
				};  
				console.log(val);
		 	},
		 	add:function(event){
		 		event.stopPropagation();
		 		this.fraudTelCheckList.push({
					                "appinfoId":"", // 反欺诈申请id
					                "phoneNum":"",// 号码
					                "relation":"", // 关系
					                "record":"" // 记录录入
								}); 
		 	},
		 	delet:function(event){
		 		event.stopPropagation();
		 		console.log(this.currentRow);
				for(var i=0;i<this.fraudTelCheckList.length;i++){
					if(this.fraudTelCheckList[i]==this.currentRow){
						this.fraudTelCheckList.splice(i,1);
					}
				}
		 	},
		 	regPhone(phone){
		 		console.log(phone.phoneNum);
		 		var isValidPhone=/^1[34578]\d{9}$/;
	    		if(!isValidPhone.test(phone.phoneNum)){
	    			phone.phoneNum='';
	    		}
		 	},
		 	sure(){
		 		this.dialogVisible=false;
		 	},
		 	handlDetail(index, row) {
	        	console.log(index, row);
	      	},
		    /*命中客户数 查询*/
		    inquiry(row){
		    	if(row.custCount==0){
		    		return
		    	}
		    	this.dialogVisible = true;
		    	/*console.log(index);
		    	for(var i=0;i<this.hitRuleList.length-1;i++){
		    		if(index==i){
		    			this.ruleId = this.hitRuleList[i].ruleId;
		    		}
		    	}*/
		    	console.log(row.ruleId);
		    	this.post("antiFraud/getHitRuleCustList",{
		    		pageParam:{
				        pageSize:this.pageParam.pageSize,
				        pageNum:this.pageParam.pageNum
				    },
				    ruleId:row.ruleId, // 规则Id
		    	}).then(res=>{
		    		if(res.statusCode==200){
		    			this.totals = res.data;
		    			//this.recordList = res.data.recordList;
		    		}
		    	})
		    },
		    /*分页*/
		   	handleSizeChange(val) {
		      console.log('每页 ${val} 条');
		      this.pageParam.pageSize = val;
		      this.pageParam.pageNum = 1;
		      if (this.currentPage !== 1 || this.setPageSize !== 10) {
		        this.currentPage = 1;
		        this.setPageSize = 10;
		      } else {
		        this.inquiry();
		      };
		    },
		     handleCurrentChange(val) {
		      console.log('当前页: ${val}');
		      this.pageParam.pageNum = val;
      		  this.inquiry();
		    },
		    /*多选框*/
		    handleSelectionChange(val) {
		        this.multipleSelection = val;
		        //console.log(this.multipleSelection);
		    },
		    /*解除*/
		 	relieve(){
		 		// for(var i=0;i<this.multipleSelection.length;i++){
		   //      	if(this.multipleSelection[i].statusTxt == '已解除' || this.multipleSelection[i].statusTxt == '解除中'){
		   //      		this.deldialogVisible = true;
		   //      		return;
		   //      	}else{
		   //      		this.post("antiFraud/batchUpdateHitRule",{

		   //      		}).then(res=>{

		   //      		})
		   //      	}
		   //      }
		   		/*var fg = this.multipleSelection.every(function(item){
		   			return (item.statusTxt == '法人股3'|| item.statusTxt == '法人股2')
		   		});*/
		   		var fg = this.multipleSelection.every(function(item){
		   			return (item.statusTxt == '法人股1')
		   		});
		   		if(!fg){
		   			this.deldialogVisible = true;
		   			//return;
		   		}
		   		if(fg){
		   			this.post("antiFraud/batchUpdateHitRule",{

		         		}).then(res=>{

		        	})
		        	//console.log(this.multipleSelection);
		   		}
		 	},
		 	/*解除 弹框按钮*/
		 	delSure(){
		 		this.deldialogVisible = false;
		 	},
		 	/*恢复*/
		 	recovery(){
		 		var fg = this.multipleSelection.every(function(item){
		   			return (item.statusTxt == '法人股2')
		   		});
		   		if(!fg){
		   			this.backdialogVisible = true;
		   			//return;
		   		}
		   		if(fg){
		   			/*this.post("antiFraud/batchUpdateHitRule",{

		         		}).then(res=>{

		        	})*/
		        	console.log(this.multipleSelection);
		   		}
		 	},
		 	/*恢复 弹框按钮*/
		 	backSure(){
		 		this.backdialogVisible = false;
		 	},
		}
	}
</script>
<style type="text/css" scoped>
	.aAntiFraudInvestigation{
		min-width: 1327px;
		font-size: 14px;
		color: #475669;
	}
	/* 折叠面板头部背景色和icon */
	.icon_hat{
		padding: 9px 10px 10px 13px;
		vertical-align: middle;
	}
	.headFont{
		font-size: 16px;
	}
	.table{
		font-weight: 400;
	    font-size: 14px;
	    border:1px solid #e6ebf5;
		border-collapse: collapse;
		width: 100%;
	}
	.table thead {
		width: 100%;
	}
	.table th {
		color: #1f2d3d;
		height: 48px;
		line-height: 48px;
		border:1px solid #e6ebf5;
		width: 11.1%;
		min-width: 147px;
	}
	.table td {
		color: #666;
		height: 47px;
		line-height: 47px;
		border:1px solid #e6ebf5;
		width: 11.1%;
		min-width: 147px;
		text-align: center;
	}
	/* 提报来源 */
	.tibao{
		width: 100%;
	}
	.tibao ul{
		width: 100%;
		text-align: center;
		margin-top: 20px;
		height: 28px;
	}
	.tibao ul li{
		float: left;
		width: 33.3%;
		line-height: 28px;
	}
	.tibao ul li label{
		float: left;
		width: 150px;
		display: inline-block;
		text-align: right;
	}
	.tibao ul li p{
		float: left;
		width: 200px;
		display: inline-block;
		text-align: left;
	}
	.tibao div{
		width: 100%;
		padding-right: calc(66.6% - 350px);
		height: 75px;
		margin:20px 0;
	}
	.tibao div label{
		width: 150px;
		text-align: right;
		display: inline-block;
		float: left;
		line-height: 75px;
	}
	.tibao div div{
		width: calc(100% - 150px);
		display: inline-block;
		padding-left: 0;
		padding-right: 0;
		margin:0 0;
	}
	/* 命中规则 */
	.tableDiv{
		width: calc( 33.3% + 350px );
	}
	/* 调查记录 */
	.record ul li{
		width: 100%;
		padding-right: calc( 66.6% - 350px );
	}
	.record ul li label{
		width: 150px;
		display: inline-block;
		float: left;
		line-height: 75px;
		text-align: right;
		padding-top: 20px;
	}
	.record ul li div{
		width: calc( 100% - 150px );
		display: inline-block;
		margin-top: 20px;
	}
	/* 电核*/
	.ElectroNuclear{
		width: 100%;
		padding-right: calc( 66.6% - 350px );
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.right .rightSpan{
		margin-left: 10px;
	}
	.right .rightSpan img{
		padding-top: 5px;
    	float: left;
	}
	.right .rightSpan span{
		margin-left: 10px;
    	float: left;
	}
	.right .rightSpan .icon{
		color: #20a0ff;
    	font-size: 20px;
	}
	.right .rightSpan:nth-of-type(2) img, .right .rightSpan:nth-of-type(3) img{
		padding-left:24px;
	}
	/* 确定按钮 */
	.button{
		width: 100%;
	}
	.button button{
		margin-right: calc( 66.6% - 350px );
		float: right;
		margin-top: 20px;
		margin-bottom: 20px;
		background-color: #409eff;
		border-color: #409eff;
	}
	/* 弹层 */
	.numBody .markIcon span{
		height: 30px;
		display: inline-block;
	}
	.numBody .markIcon span img{
		float: left;
	}
	.numBody .markIcon span span{
		height: 30px;
		line-height: 30px;
		float: left;
		padding: 0 5px;
		font-size: 14px;
	}
</style>


