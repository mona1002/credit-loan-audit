<!-- 备注信息 -->
<template>
	<div class="remark">
		<div class="remarkHead">
			<p>备注信息</p>
		</div>
		<div class="remarkIcon">
			<i class="el-icon-circle-plus icon" @click="add"><span>添加</span></i>
			<i class="el-icon-edit icon" @click="change"><span>修改</span></i>
			<i class="el-icon-remove icon" @click="delet"><span>删除</span></i>
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
			      prop="name"
			      label="备注类型"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="备注人">
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="备注时间"
			      sortable>
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="备注"
			      min-width="290">
			    </el-table-column>
		    </el-table>
		</div>
		<!-- 弹层 -->
		<div class="layer" v-show="ok"><!-- @touchmove.prevent  -->
			<div class="layerbox">
				<p><span>请输入您要添加的备注信息</span><i class="el-icon-close" @click="close"></i></p>
				<div><label>备注</label><textarea maxlength="600" placeholder="最多600字"></textarea></div>
				<el-button type="primary" @click="sure">确定</el-button>
			</div>
		</div>
		<div style="width:100%;height:1000px;"></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				//sortable:true,
				ok:false,
				tableData: [{
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }],
			}
		},
		methods:{
			add(){
				console.log(111);
				this.ok=true;
				document.getElementsByTagName('body')[0].style.overflow='hidden';
			},
			change(){
				console.log(222);
			},
			delet(){
				console.log(333);
			},
			close(){
				this.ok=false;
				document.getElementsByTagName('body')[0].style.overflow='';
			},
			sure(){
				this.ok=false;
				document.getElementsByTagName('body')[0].style.overflow='';
			}
		},
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
/* 弹层 */
.layer{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
}
.layerbox{
	width: 638px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -319px;
	margin-top: -200px;
	border: 1px solid #ccc;
	background-color: #fff;
	z-index: 10000;
}
.layerbox p{
	font-size: 14px;
	width: 100%;
	height: 40px;
	padding-left: 10px;
	line-height: 40px;
}
.layerbox p span{
	float: left;
}
.layerbox p i{
	float: right;
	font-size: 20px;
	line-height: 40px;
	color: #20a0ff;
	padding-right: 10px;
}
.layerbox div{
	clear: both;
	width: 98%;
	height: 208px;
	margin: 0 auto;
	background-color: #eee;
}
.layerbox div label{
	display: inline-block;
	padding: 94px 10px 0 10px;
	float: left;
}
.layerbox div textarea{
	width: 90%;
	height: 200px;
	margin-top: 4px;
	float: left;
	padding: 5px 0 0 10px;
}
.layerbox button{
	float: right;
	margin: 10px 10px 10px 0;
}
</style>