<!-- 信审流程轨迹 -->
<template>
	<div class="processTrajectory">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="信审流程轨迹" name="1">
				<template slot="title">
						<div class="left">
					      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
					      <span class="headFont">信审流程轨迹</span>
					    </div>
				    </template>
				
				<div class="containDiv">
				    <el-table
				      :data="taskDetailList"
				      style="width: 100%"
				      height="744"
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
					        label="任务节点" 
					        prop="taskNameTxt"
					        min-width="170">
					      </el-table-column>
					      <el-table-column
					        prop="taskTypeTxt"
					        label="任务类型"
					        min-width="120">
					      </el-table-column>
					      <el-table-column
					        prop="activationTime" 
					        label="进入本环节时间"
					        min-width="160">
					      </el-table-column>
					      <el-table-column
					        prop="taskStatusTxt"
					        label="任务状态"
					        min-width="80">
					      </el-table-column>
					      <el-table-column
					        prop="operatorCode"
					        label="处理人"
					        min-width="120">
					      </el-table-column>
					      <el-table-column
					        prop="completeTime"
					        label="处理时间"
					        min-width="160">
					      </el-table-column>
					      <el-table-column
					        prop="approvalOpinionTxt"
					        label="处理结论"
					        min-width="100">
					      </el-table-column>
					      <el-table-column
					        prop="opinionExplain"
					        label="意见说明"
					        show-overflow-tooltip
					        min-width="170">
					      </el-table-column>
					      <el-table-column
					        prop=""
					        label="审批时间"
					        min-width="160">
					      </el-table-column>
				    </el-table>
			    </div>
		  	</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeNames: ['1'],
				//processTemplateId:'',
				//taskStatus:'',
				applyId:'',
				taskDetailList:[],
				judgeFlag:'',
			}
		},
		mounted(){
			this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
		    if (this.judgeFlag.flag == '01') {
		        this.applyId = JSON.parse(localStorage.getItem("taskInWaitting")).applyId; // 初审
		    } else if (this.judgeFlag.flag == '02') {
		        this.applyId = JSON.parse(localStorage.getItem("FtaskInWaitting")).applyId //终审
		    } else if (this.judgeFlag.flag == '07') {
		        this.applyId = JSON.parse(localStorage.getItem("TtaskInWaitting")).applyId //终审
		    } else if (this.judgeFlag.flag == '08') {
		        this.applyId = JSON.parse(localStorage.getItem("TtaskInWaitting")).applyId //终审
		    }

			//this.applyId=JSON.parse(localStorage.getItem('taskInWaitting')).applyId;
			this.request()
		},
		methods:{
			handleChange(){

			},
			request(){
				// this.get('/creauditInfo/getProcessTraceList', {
			  //       applyId: this.applyId
			  //     }).then(res => {
			  //       console.log(res);
			  //       if (res.statusCode == '200') {
			  //         this.taskDetailList = res.data;
			  //       }
			  //     })
 this.get("/creauditInfo/getProcessTraceListByApplyId", {
          applyId: this.applyId,
        }).then(res => {
          console.log(res);
          this.taskDetailList = res.data;
        })
			},
			handleCurrentChange(){

			},
		},
	}
</script>
<style type="text/css" scoped>
	.processTrajectory{
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		font-size: 14px;
		min-width: 1327px;
		/* overflow: hidden; */
	}
	/* 折叠面板头部背景色 */
	.icon_hat{
		padding: 9px 10px 10px 13px;
		vertical-align: middle;
	}
	.headFont{
		font-size: 16px;
	}
</style>