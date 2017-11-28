<!-- 备注信息 -->
<template>
	<div class="remark">
		<div class="remarkHead">
			<p>备注信息</p>
		</div>
		<div class="remarkIcon">
			<i class="el-icon-circle-plus icon" @click="add"><span>添加</span></i>
			<i class="el-icon-edit icon" @click="change"><span>修改</span></i>
			<i class="el-icon-remove icon" @click="delet($index)"><span>删除</span></i>
		</div>
		<div class="taskWtable">
			<el-table :data="tableData" border style="width: 100%" 
				:default-sort = "{prop: 'date', order: 'descending'}" 	
				highlight-current-row
				@current-change="handleCurrentChange"
				><!-- order两个参数，顺序和倒序: ascending, descending -->
				<!-- @row-click="addHeight(backColor)" :class="{active: activeName == backColor}" -->
			    <el-table-column
			      type="index"
			      :index='1'
			      width="180"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="remarkType"
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
		<!-- 添加弹层 -->
		<div class="layer" v-show="ok"><!-- @touchmove.prevent  -->
			<div class="layerbox">
				<p><span>请输入您要添加的备注信息</span><i class="el-icon-close" @click="close"></i></p>
				<div><label>备注</label><textarea v-model="remark" maxlength="600" placeholder="最多600字"></textarea></div>
				<el-button type="primary" @click="sure">确定</el-button>
			</div>
		</div>
		<!-- 修改弹层 -->
		<div class="layer" v-show="changeLayer"><!-- @touchmove.prevent  -->
			<div class="layerbox">
				<p><span>请输入您要添加的备注信息</span><i class="el-icon-close" @click="changeClose"></i></p>
				<div><label>备注</label><textarea maxlength="600" placeholder="最多600字" v-model="remark">{{remark}}</textarea></div>
				<el-button type="primary" @click="changeSure">确定</el-button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				ok:false,
				tableData: [{remarkType: '11', 
								    remarker:'dd', 
								    remarkTime: 'gg',
								    remark:'bb',
								    id:1
								}],
		        remarkType:'',
		        remarker:'',
		        remarkTime:'',
		        remark:'',
		        changeLayer:false,
		        k:1,
			}
		},
		methods:{
			add(){
				this.ok=true;
				document.getElementsByTagName('body')[0].style.overflow='hidden';
			},
			change(){
				$(".taskWtable tbody tr").each(function(item){
					/*if($(".taskWtable tbody tr")[item].find('tr').attr('background-color','#ecf5ff')){
						console.log(this);
					}*/
				})
				this.changeLayer=true;
				document.getElementsByTagName('body')[0].style.overflow='hidden';
			},
			delet(){
				 this.tableData.splice(index,1);
			},
			close(){
				this.ok=false;
				document.getElementsByTagName('body')[0].style.overflow='';
			},
			changeClose(){
				this.changeLayer=false;
				document.getElementsByTagName('body')[0].style.overflow='';
			},
			sure(){
				this.ok=false;
				document.getElementsByTagName('body')[0].style.overflow='';
				this.post('/applyRemark/addApplyRemark',{
					applyId:'00542',
					remarkType:'01',
					remark:this.remark,
					remarker:'remark'
				})
				.then(res => {
		   			console.log(res);
		          });
				this.k+=1;
        		var type='初审';
	           	var people='admin';
	           	var date=new Date().toLocaleString().replace(/\//g, "-").replace(/上午|中午|下午/g, ""); 
        		this.tableData.push({remarkType: type, 
								    remarker:people, 
								    remarkTime: date,
								    remark:this.remark,
								    id:this.k
								}); 
			},
			changeSure(){
				this.changeLayer=false;
				document.getElementsByTagName('body')[0].style.overflow='';
				console.log(12345);
				this.post('/applyRemark/modifyApplyRemark',{
					id:'00542',
					remark:this.remark
				})
				.then(res => {
		   			console.log(res);
		   			this.tableData[1].remark=this.remark;
		          });
			},
			/*addHeight(row){
				console.log(row.id);
				$(".taskWtable tbody tr").each(function(index){
					var index=index+1;
					if(index == row.id){
						console.log($(".taskWtable tbody tr")[index-1]);
						$(".taskWtable tbody tr")[index-1].activeName = backColor;
					}
				})
			},*/
			handleCurrentChange(val) {
		       this.currentRow = val;
		       console.log(val);
		    },
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
.backColor{
	background-color: blue;
}
/* 表格头部 */
/*.tableHead{
	width: 100%;
}
.tableHead .headUl{
	width: 100%;
	height: 40px;
	border: 1px solid #ccc;
	line-height: 40px;
}
.tableHead ul{
	width: 100%;
	height: 40px;
	border: 1px solid #ccc;
	line-height: 40px;
}
.tableHead .headUl li{
	float: left;
	width: 150px;
	height: 40px;
	border-right: 1px solid #ccc;
	text-align: center;
}
.tableHead ul li{
	float: left;
	width: 150px;
	height: 40px;
	border-right: 1px solid #ccc;
	text-align: center;
}
.tableHead .headUl li:nth-of-type(5){
	width: calc( 100% - 600px );
	border-right:none;
}*/
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