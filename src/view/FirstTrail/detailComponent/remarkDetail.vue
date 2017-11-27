<!-- 备注信息详情 -->
<template>
	<div class="remark">
		<div class="remarkHead">
			<p>备注信息</p>
		</div>
		<div class="taskWtable">
			<el-table :data="tableData" border style="width: 100%" 
			:default-sort = "{prop: 'date', order: 'descending'}"><!-- order两个参数，顺序和倒序: ascending, descending -->
			    <el-table-column
			      type="index"
			      :index='1'
			      width="180"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="remarkTypeTxt"
			      label="备注类型"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="remarker"
			      label="备注人">
			    </el-table-column>
			    <el-table-column
			      prop="remarkTime"
			      label="备注时间"
			      sortable>
			    </el-table-column>
			    <el-table-column
			      prop="remark"
			      label="备注"
			      min-width="290">
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
			}
		},
		created(){
			//一进入页面就发送请求
			this.request();
		},
		methods:{
	    	request(){
	    		this.post("/applyRemark/getApplyRemarkList", {
		        'applyId':'00542'
		      }).then(res => {
		        /*console.log(res);*/
		        this.tableData=res.data;
		        /*console.log(this.datas);*/
		      });
		  },
	    }
	}
</script>
<style type="text/css" scoped>
/* 备注信息 */
.remark .remarkHead{
	width: 100%;
	height: 28px;
	line-height: 28px;
	padding-left: 10px;
	border-bottom: 1px solid #ccc;
}
.remark .remarkIcon{
	width: 100%;
	height: 40px;
	line-height: 40px; 
}
.remark .icon span{
	color:#475669;
}
</style>