<template>
	<div class="remarkDetial">
		<div class="remarkHead">
			<img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			<p titleText>备注信息</p>
		</div>
		<div class="taskWtable">
			<el-table :data="datas" height="743" style="width: 100%" 
			:default-sort = "{prop: 'date', order: 'descending'}" border><!-- order两个参数，顺序和倒序: ascending, descending -->
			    <el-table-column
			      type="index"
			      :index='1'
			      label="序号"
			      min-width="50"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="remarkTypeTxt"
			      label="备注类型"
			      min-width="70"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="remarker"
			      label="备注人"
			      min-width="120">
			    </el-table-column>
			    <el-table-column
			      prop="remarkTime"
			      label="备注时间"
			      sortable
			      min-width="120">
			    </el-table-column>
			    <el-table-column
			      prop="remark"
			      label="备注"
			      min-width="600"
			      show-overflow-tooltip>
			    </el-table-column>
		    </el-table>
		</div>		
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				tableData:'',
				//data:[],
				datas:[],
				taskInWaitting:'',
				judgeFlag:'',
			}
		},
		mounted(){
			//一进入页面就发送请求
			this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
		    if (this.judgeFlag.flag == '01') {
		        this.taskInWaitting = JSON.parse(localStorage.getItem("taskInWaitting")); // 初审
		    } else if (this.judgeFlag.flag == '02') {
		        this.taskInWaitting = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
		    }
			//this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
			this.request(this.taskInWaitting.applyId);
		},
		methods:{
	    	request(param){
	    		this.post("/applyRemark/getApplyRemarkList", {
		        'applyId':param
		      }).then(res => {
		        /*console.log(res);*/
		        this.datas=res.data;
		        this.datas.forEach(function(item){
		        	item.remarkTime = new Date(item.remarkTime).toLocaleString().replace(/\//g, "-").replace(/上午|中午|下午/g, "");
		        	console.log(item.remarkTime);
		        });
		      });
		  },
	    }
	}
</script>
<style type="text/css" scoped>
/* 备注信息 */
	.remarkDetial{
			/* padding: 15px 30px; */
			width: 100%;
			height: 100%;
			background-color: #fafbfc;
			min-width: 1258px;
		}
	.remarkDetial .remarkHead{
		opacity:0.75;
		background:#ebedf8;
		border-radius:6px;
		width:100%;
		height:40px;
		line-height: 40px;
	}
	.remarkDetial .remarkHead p{
		font-size: 16px;
		color: #1f2d3d;
		/* text-align: left;
		margin: 15px 25px 13px; */
		display: inline-block;
		/* height: 22px; */
		/*width: 130px;
		 line-height: 22px; */
		font-weight: 400;
	}
	.remarkDetial .remarkHead .iconContainer{
	    float: right;
	    line-height: 50px;
	    margin-right: 29px;
	}
	.remarkDetial .remarkHead .icon-item{
	   cursor: pointer;
	   margin-right: 14px;
	   float: left;
	}
	.remarkDetial .remarkHead .icon {
	   font-size: 24px;
	   color: #0077ff;
	   margin-right: 6px;
	   vertical-align: sub;
	}
	.remarkDetial .remarkHead .el-icon-text {
	   font-size: 14px;
	   color: #1f2d3d;
	}
.remarkDetial .remarkIcon{
	width: 100%;
	height: 40px;
	line-height: 40px; 
}
.remarkDetial .icon span{
	color:#475669;
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