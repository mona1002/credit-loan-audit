<template>
	<div class="taskWatting">
		<div class="taskWhead">
			<img src=""><p>高级查询</p>
		</div>
		<div class="taskWinput">
	  		<span>进件编号：</span><el-input v-model="datas.applySubNo"></el-input>
		    <span>客户名称：</span><el-input v-model="datas.custName_la"></el-input>
		    <span>证件号码：</span><el-input v-model="datas.certCode"></el-input>
	  	</div>
	  	 <div class="wattingButton">
	    	<el-button type="primary" @click="reset">重置</el-button>
	    	<el-button type="primary" @click="search">查询</el-button>
	    </div>
	    <div class="taskWhead">
			<img src=""><p>信审任务列表</p>
		</div>
		<div class="taskWtable">
			<el-table :data="datas" border style="width: 100%" @row-click='goDetail'>
			    <el-table-column
			      type="index" 
			      label="序号"
			      width="180"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="taskType"
			      label="任务类型"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="emerType"
			      label="紧急程度">
			    </el-table-column>
			    <el-table-column
			      prop="applySubNo"
			      label="进件编号">
			    </el-table-column>
			    <el-table-column
			      prop="appDate"
			      label="申请日期">
			    </el-table-column>
			    <el-table-column
			      prop="custName"
			      label="客户名称">
			    </el-table-column>
			    <el-table-column
			      prop="certCode"
			      label="证件号码">
			    </el-table-column>
			    <el-table-column
			      prop="appOrgCode"
			      label="进件机构">
			    </el-table-column>
			    <el-table-column
			      prop="proName"
			      label="产品名称">
			    </el-table-column>
			    <el-table-column
			      prop="activationTime"
			      label="进入本环节时间">
			    </el-table-column>
			    <el-table-column
			      prop="completeTime"
			      label="进入本环节时长（小时）" min-width="180">
			    </el-table-column>
			</el-table>
		</div>
		<!-- 分页 -->
		<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage4"
	      :page-sizes="[10, 30, 50, 100, 200]"
	      :page-size="10"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="datas.totalNum">
	      			<!-- :page-size="10" 每页几条 -->
	    </el-pagination>


	</div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeNames:['1'],
				currentPage4:1,
				//data:[],
				datas:[],
				pageNum:1,
		        pageSize:10,
		        //taskType:'',
			}
		},
		created(){
			//一进入页面就发送请求
			this.processTemplateId=this.$route.query.processTemplateId;
			this.taskNodeName=this.$route.query.taskNodeName;
			this.taskStatus=this.$route.query.taskStatus;
			this.userCode=this.$route.query.userCode;
			this.orgCode=this.$route.query.orgCode;
			console.log(this.processTemplateId+'...'+this.taskNodeName+'...'+this.taskStatus+'...'+this.userCode+'...'+this.orgCode);
			
			this.request();	
		},
		methods:{
			//跳转到详情页
			goDetail(row, event, column) {
				console.log(row);
		      //console.log(this.datas.applyId);
		      /*var applyId=this.datas.applyId;*/
		      this.$router.push({path:'/SplitScreen',query:row});
		    },
		    handleSizeChange(val) {
		      console.log('每页 ${val} 条');
		    },
		    handleCurrentChange(val) {
		      console.log('当前页: ${val}');
		    },
		    request(){
		    	this.post('/workFlowTaskQuery/getTaskToDoList', {
		            processTemplateId: this.processTemplateId,
		            taskNodeName: this.taskNodeName,
		            taskStatus:this.taskStatus,
		            userCode:this.userCode,
		            orgCode:this.orgCode,
		            pageNum:1,
		            pageSize:10,
		            applySubNo:'',
		            custName_la:'',
		            certCode:''
		          })
	          .then(res => {
	            // console.log(this.pageNum);   
	            if(res.statusCode==200 &&　res.data.taskDetailList!=null){
	            	this.datas=res.data.taskDetailList;
	            	// console.log(res.data.taskDetailList.taskType)
	            	// console.log(this.datas);
	            	// console.log(this.datas.taskType)
	            	console.log(this.datas.length)
	            	for(var i=0;i<this.datas.length;i++){
	            		if(this.datas[i].taskType=='1'){//00
		            		this.datas[i].taskType="新任务";
		            	}else if(this.datas[i].taskType=='01'){
		            		this.datas[i].taskType="回退任务";
		            	}else if(this.datas[i].taskType=='02'){
		            		this.datas[i].taskType="挂起任务";
		            	}else if(this.datas[i].taskType=='03'){
		            		this.datas[i].taskType="回退再审任务";
		            	};
		            	if(this.datas[i].emerType=='1'){//00
		            		this.datas[i].emerType="普通";
		            	}else if(this.datas[i].emerType=='01'){
		            		this.datas[i].emerType="免费加急";
		            	}else if(this.datas[i].emerType=='02'){
		            		this.datas[i].emerType="收费加急";
		            	};
	            	};
	            	
	            	
	            	// console.log(this.taskType);
	            	/*if(this.pageNum==1){
	            		this.datas.push(res.data);
	            		 console.log(this.datas);
	            	}else{
	            		this.datas=this.datas.concat(this.datas.push(res.data))
	            	}*/
	            }else{
	            	this.datas=[];
	            }
	           
	          })
		    },
		    /*重置*/
		    reset(){
		    	this.datas.applySubNo = '';
	            this.datas.custName_la = '';
	            this.datas.certCode = '';
			    this.request();
		    },
		    /*查询*/
		    search(){
		      this.post("/workFlowTaskQuery/getTaskToDoList", {
		        processTemplateId: this.processTemplateId,
	            taskNodeName: this.taskNodeName,
	            taskStatus:this.taskStatus,
	            userCode:this.userCode,
	            orgCode:this.orgCode,
	            pageNum:1,
	            pageSize:10,
	            applySubNo:this.datas.applySubNo,
	            custName_la:this.datas.custName_la,
	            certCode:this.datas.certCode
		      }).then(res => {
		        console.log(res);
		      });
		    },
		}
	}
</script>
<style type="text/css" scoped>
	.taskWatting{
		width: 100%;
	}
	/* 高级查询 */
	.taskWatting .taskWhead{
		width: 100%;
		height: 28px;
		line-height: 28px;
		padding-left: 10px;
		border-bottom: 1px solid #ccc;
	}
	/* 高级查询下的input */
	.taskWatting .taskWinput{
		height: 55px;
		margin: 15px 0;
		padding-left: 10px; 
		border-bottom: 1px solid #ccc;
	}
	.taskWinput .el-input{
		width: 180px;
	}
	/* 查询、重置按钮 */
	.wattingButton{
		width: 100%;
		height:51px;
		border-bottom: 1px solid #ccc;
	}
	.wattingButton .el-button{
		float: right;
		margin: 0px 10px 15px 0;
		height: 36px;
	}
	/* 信审任务列表 表格*/
	.taskWtable .el-table .cell{
		line-height: 40px;
	}
	.taskWtable .el-table td, .el-table th{
		padding:0;
	}
</style>