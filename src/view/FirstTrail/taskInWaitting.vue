<template>
	<div class="taskWatting">
		<div class="taskWhead">
			<img src=""><p>高级查询</p>
		</div>
		<div class="taskWinput">
	  		<span>进件编号：</span><el-input v-model="input1"></el-input>
		    <span>客户名称：</span><el-input v-model="input2"></el-input>
		    <span>证件号码：</span><el-input v-model="input3"></el-input>
	  	</div>
	  	 <div class="wattingButton">
	    	<el-button type="primary" @click="reset">重置</el-button>
	    	<el-button type="primary" @click="search">查询</el-button>
	    </div>
	    <div class="taskWhead">
			<img src=""><p>信审任务列表</p>
		</div>
		<div class="taskWtable">
			<el-table :data="tableData" border style="width: 100%" @row-click='goDetail'>
			    <el-table-column
			      type="index"
			      :index='1'
			      label="序号"
			      width="180"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="任务类型"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="紧急程度">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="进件编号">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="申请日期">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="客户名称">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="证件号码">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="进件机构">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="产品名称">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="进入本环节时间">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="进入本环节时长（小时）" min-width="180">
			    </el-table-column>
		    </el-table>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				input1:'',
				input2:'',
				input3:'',
				activeNames:['1'],
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
		      console.log(row.id);
		      this.$router.push({path:'/SplitScreen',query:row})
		    },
		    request(){
		    	/*alert(1111111);
		    	this.post('/loginCookie', {
		            username: '2',
		            password: '1'
		          })
	          .then(res => {
	            console.log(res)
	          }),*/
		    },
		    reset(){
		    	alert('reset')
		    },
		    search(){
		    	alert('search')
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