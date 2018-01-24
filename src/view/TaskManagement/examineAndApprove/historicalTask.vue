<!-- 历史任务 -->
<!-- 已办任务 -->
<template>
	<div class="taskWatting">
		<myHead class="top"></myHead>
		<div class="taskWattingContain">
			
		  	<div class="taskWinput">
		      <el-row class="row row1"  type="flex">
		        <el-col :span="8" :offset="0">
		          <span class="keywordText">进件编号</span><el-input class="" v-model="applySubNo" placeholder="请输入进件编号"></el-input>
		        </el-col>
		        <el-col :span="8">
		          <span class="keywordText">客户名称</span><el-input class="" v-model="custName_la" placeholder="请输入客户名称"></el-input>
		        </el-col>
		        <el-col :span="8">
		          <span class="keywordText">证件号码</span><el-input class="" v-model="certCode" placeholder="请输入证件号码"></el-input>
		        </el-col>
		      </el-row>
		      <el-row class="row row1"  type="flex">
			       <el-col :span="22">  
			         <el-button class="btn query" type="primary" @click="search">查询</el-button>
			         <el-button class="btn reset" @click="reset">重置</el-button>
			       </el-col>
		      </el-row>
		    </div>
		    <div class="taskWhead">
				<p>信审任务列表</p>
			</div>
			<div class="taskWtable">
				<el-table :data="datas" style="width: 100%" height="500" @row-click='goDetail' border>
				    <el-table-column
				      type="index" 
				     :index="1"
				     label="序号"
				      width="50"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="taskType"
				      label="任务类型"
				      min-width="110"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="emerType"
				      label="紧急程度"
				      min-width="80">
				      <template slot-scope="scope">
				      	<span style="color:#0077ff" v-if="scope.row.timeColor">{{scope.row.emerType}}</span>
				      	<span v-if="!scope.row.timeColor">{{scope.row.emerType}}</span>
				      </template>
				    </el-table-column>
				    <el-table-column
				      prop="applySubNo"
				      label="进件编号"
				      min-width="170">
				    </el-table-column>
				    <el-table-column
				      prop="appDate"
				      label="申请日期"
				      min-width="100">
				    </el-table-column>
				    <el-table-column
				      prop="custName"
				      label="客户名称"
				      min-width="130">
				    </el-table-column>
				    <el-table-column
				      prop="certCode"
				      label="证件号码"
				      min-width="170">
				    </el-table-column>
				    <el-table-column
				      prop="appOrgCode"
				      label="进件机构"
				      min-width="100">
				    </el-table-column>
				    <el-table-column
				      prop="proName"
				      label="产品名称"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="activationTime"
				      label="进入本环节时间"
				      min-width="170">
				    </el-table-column>
				    <el-table-column
				      prop="approveTimeLong"
				      label="进入本环节时长（小时）" 
				      min-width="180">
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
				      :total="totals.totalNum">
				    </el-pagination>
			    </div>
			</div>
		</div>
	</div>	
</template>
<script type="text/javascript">
	import myHead from "../../header.vue"
	export default{
		data(){
			return{
				activeNames:['1'],
				totals:{},
				currentPage:1,// 默认显示的当前页
				//data:[],
				datas:[],
				applySubNo : '',
		        custName_la : '',
		        certCode : '',
				//pageNum:1,
		        //pageSize:20,
		        setPageSize:10,
			    queryParam: {
			        processTemplateId :'',
		            taskNodeName : '',
		            taskStatus : '',
		            userCode : '',
		            orgCode : '',
		            pageNum : 1,
		            pageSize : 10,
		            applySubNo : '',
		            custName_la : '',
		            certCode : ''
			      },
		        //taskType:'',
		        // timeColor:false,
			}
		},
		components: {
	      myHead
	    },
		mounted(){
			//一进入页面就发送请求
			//this.queryParam = JSON.parse(localStorage.getItem('workbenchPass'));
			console.log(JSON.parse(localStorage.getItem('workbenchPass')))
			this.queryParam.processTemplateId=JSON.parse(localStorage.getItem('workbenchPass')).processTemplateId;
			this.queryParam.taskNodeName=JSON.parse(localStorage.getItem('workbenchPass')).taskNodeName;
			this.queryParam.taskStatus=JSON.parse(localStorage.getItem('workbenchPass')).taskStatus;
			//this.queryParam.userCode=JSON.parse(localStorage.getItem('userInf')).userCode;
			//this.queryParam.orgCode=JSON.parse(localStorage.getItem('userInf')).orgCode;
			// 登录 单独存  userCode  orgCode 
			 this.queryParam.userCode=JSON.parse(localStorage.getItem('userCode'));
			 this.queryParam.orgCode=JSON.parse(localStorage.getItem('orgCode'));
			console.log(this.processTemplateId+'...'+this.taskNodeName+'...'+this.taskStatus+'...'+this.userCode+'...'+this.orgCode);
			
			this.request(this.queryParam);	
		},
		methods:{
		    request(param){
		    	console.log(this.queryParam);
		    	this.post('/workFlowTaskQuery/getTaskToDoList',
		    		param
	          ).then(res => {
	            if(res.statusCode==200 &&　res.data.taskDetailList!=null){
	            	this.totals=res.data;
	            	this.datas=res.data.taskDetailList;
	            	console.log(this.datas.length)
	            	for(var i=0;i<this.datas.length;i++){
	            		if(this.datas[i].taskType=='00'){//00
		            		this.datas[i].taskType="新任务";
		            	}else if(this.datas[i].taskType=='01'){
		            		this.datas[i].taskType="回退任务";
		            	}else if(this.datas[i].taskType=='02'){
		            		this.datas[i].taskType="挂起任务";
		            	}else if(this.datas[i].taskType=='03'){
		            		this.datas[i].taskType="回退再审任务";
		            	};
		            	if(this.datas[i].emerType=='00'){//00
		            		this.datas[i].emerType="普通";
		            	}else if(this.datas[i].emerType=='01'){
		            		this.datas[i].emerType="免费加急";
		            	}else if(this.datas[i].emerType=='02'){
		            		this.datas[i].emerType="收费加急";
		            	};
		            	if(this.datas[i].approveTimeLong*1>=48){
		            		this.datas[i].timeColor=true;
		            	}else if(this.datas[i].approveTimeLong*1<48){
		            		this.datas[i].timeColor=false;
		            	};
	            	};
	            }else{
	            	this.datas=[];
	            }
	           
	          })
		    },
		    /*重置*/
		    reset(){
		    	this.applySubNo = '';
	            this.custName_la = '';
	            this.certCode = '';
	            this.queryParam.applySubNo = '';
			    this.queryParam.custName_la = '';
			    this.queryParam.certCode = '';
			    this.request(this.queryParam);
		    },
		    /*查询*/
		    search(){
		    	this.queryParam.applySubNo = this.applySubNo;
			    this.queryParam.custName_la = this.custName_la;
			    this.queryParam.certCode = this.certCode;
			    this.request(this.queryParam);
			    console.log(this.queryParam);
		    },
		    //跳转到详情页
			goDetail(row, event, column) {
				console.log(row);
					// this.$router.push({path:'/SplitScreen',query:row});
		      this.$router.push({path:'/SplitScreen'});
		      localStorage.setItem("taskInWaitting",JSON.stringify(row));
		    },
		    handleSizeChange(val) {
		      console.log('每页 ${val} 条');
		      this.queryParam.pageSize = val;
		      this.queryParam.pageNum = 1;
		      if (this.currentPage !== 1 || this.setPageSize !== 10) {
		        this.currentPage = 1;
		        this.setPageSize = 10;
		      } else {
		        this.request(this.queryParam);
		      };
		    },
		    handleCurrentChange(val) {
		      console.log('当前页: ${val}');
		      this.queryParam.pageNum = val;
      		  this.request(this.queryParam);
		    },
		}
	}
</script>
<style type="text/css" scoped>
	.taskWatting{
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.taskWattingContain{
		padding: 30px 30px;
		width: 100%;
		height: calc( 100% - 70px );
	}
	/* 高级查询下的input */
	.taskWatting .row {
	  margin-bottom: 20px;
	}
	.taskWatting .row1 {
	  margin-top: 21px;
	}
	.taskWatting .taskWinput {
	  background-color: #ffffff;
	  border: 1px solid #e6eaee;
	  margin-bottom: 20px;
	}
	.taskWatting .keywordText {
	  font-size: 14px;
	  color: #475669;
	  text-align: right;
	  display: inline-block;
	  width: 126px;
	  height: 20px;
	  margin-right: 10px;
	}
	.taskWatting .taskWinput .el-input__inner {
	  border-radius: 6px;
	  height: 35px;
	  width: 258px;
	}
	/* 查询、重置按钮 */
	.taskWinput .btn {
	  height: 33px;
	  border-radius: 8px;
	  width: 79px;
	  font-size: 14px;
	  line-height: 33px;
	  padding: 0;
	  float: right;
	}
	.taskWinput .query {
	  margin-left: 20px;
	}
	.taskWinput .reset {
	  margin-left: 214px;
	}
	/* 信审任务列表*/
	.taskWatting .taskWhead{
		opacity:0.75;
		background:#ebedf8;
		border-radius:6px;
		width:100%;
		height:50px;
	}
	.taskWatting .taskWhead p{
		font-size:16px;
		color:#1f2d3d;
		padding-left:37px;
		text-align:left;
		line-height: 50px;
	}
	
	
	/* 信审任务列表 表格*/
	.taskWatting .taskWtable{
		background-color: #ffffff;
		border: 1px solid #e6eaee;
		margin-bottom: 40px;
		padding: 25px;
		width: 100%;
		/* height:calc( 100% - 232px ); */
	}
	.taskWtable .el-table .cell {
	  line-height: 23px;
	}
	.taskWtable .el-table {
	  font-size: 13px;
	}
	.taskWtable .el-table__header-wrapper tr {
	  height: 40px;
	}
	.taskWtable .el-table__body-wrapper tr {
	  height: 35px;
	}
	/* 分页 */
	.page{
		text-align: center;
  		margin-top: 20px;
	}
</style>