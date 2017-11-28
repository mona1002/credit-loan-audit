<template>
	<div class="taskWatting">
		<div class="taskWhead">
			<img src=""><p>高级查询</p>
		</div>
		<div class="taskWinput">
	  		<!-- <span>进件编号：</span><el-input v-model="datas.applySubNo"></el-input>
	  				    <span>客户名称：</span><el-input v-model="datas.custName_la"></el-input>
	  				    <span>证件号码：</span><el-input v-model="datas.certCode"></el-input> -->
	  	</div>
	  	 <div class="wattingButton">
	    	<el-button type="primary" @click="reset">重置</el-button>
	    	<el-button type="primary" @click="search">查询</el-button>
	    </div>
	    <div class="taskWhead">
			<img src=""><p>信审任务列表</p>
		</div>
		<div class="taskWtable">
			<!-- <el-table :data="datas" border style="width: 100%" @row-click='goDetail'>
			    <el-table-column
			      type="index"
			      :index='1'
			      label="序号"
			      width="180"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="datas.taskType"
			      label="任务类型"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="datas.emerType"
			      label="紧急程度">
			    </el-table-column>
			    <el-table-column
			      prop="datas.applySubNo"
			      label="进件编号">
			    </el-table-column>
			    <el-table-column
			      prop="datas.appDate"
			      label="申请日期">
			    </el-table-column>
			    <el-table-column
			      prop="datas.custName"
			      label="客户名称">
			    </el-table-column>
			    <el-table-column
			      prop="datas.certCode"
			      label="证件号码">
			    </el-table-column>
			    <el-table-column
			      prop="datas.appOrgCode"
			      label="进件机构">
			    </el-table-column>
			    <el-table-column
			      prop="datas.proName"
			      label="产品名称">
			    </el-table-column>
			    <el-table-column
			      prop="datas.activationTime"
			      label="进入本环节时间">
			    </el-table-column>
			    <el-table-column
			      prop="datas.completeTime"
			      label="进入本环节时长（小时）" min-width="180">
			    </el-table-column>
					    </el-table> -->
					    <el-table :data="tableData" border style="width: 100%" @row-click='goDetail'>
			    <el-table-column
			      type="index"
			      :index='1'
			      label="序号"
			      width="180"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="任务类型"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="紧急程度">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="进件编号">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="申请日期">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="客户名称">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="证件号码">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="进件机构">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="产品名称">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="进入本环节时间">
			    </el-table-column>
			    <el-table-column
			      prop="address"
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
	      :total="50"><!-- datas.totalNum -->
	    </el-pagination>


	</div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeNames:['1'],
				currentPage4:1,
				data:[],
				datas:'',
				tableData: [{
				  id:1,
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          id:2,
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          id:3,
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          id:4,
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }],
			}
		},
		created(){
			//一进入页面就发送请求
			this.request();
		},
		methods:{
			//跳转到详情页
			goDetail(row, event, column) {
		      /*console.log(this.datas.applyId);
		      var applyId=this.datas.applyId;*/
		      this.$router.push({path:'/SplitScreen',query:row})
		    },
		    handleSizeChange(val) {
		      console.log('每页 ${val} 条');
		    },
		    handleCurrentChange(val) {
		      console.log('当前页: ${val}');
		    },
		    request(){
		    	this.post('/workFlowTaskQuery/getTaskToDoList', {
		            processTemplateId: 'creditApp',
		            taskNodeName: '',
		            taskStatus:'101',
		            userCode:'admin',
		            orgCode:'101',
		            pageNum:1,
		            pageSize:10,
		            applySubNo:'',
		            custName_la:'',
		            certCode:''
		          })
	          .then(res => {
	            console.log(res);
	            this.datas=res.data;
	            console.log(this.datas);
	          })
		    },
		    reset(){
		    	alert('reset');
		    },
		    search(){
		    	alert('search');
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