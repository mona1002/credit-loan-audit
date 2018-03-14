<!-- 备注信息 -->
<template>
	<div class="remark">
		<div class="remarkHead">
			<img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			<span class="titleText">备注信息</span>
			<span class="iconContainer">
		        <span class="icon-item" @click="add">
		          <img src="../../../../static/images/add.png" class="icon"><span class="span-text">添加</span>
		        </span>
		        <span class="icon-item" @click="change">
		         <img src="../../../../static/images/change.png" class="icon"><span class="span-text">修改</span>
		        </span>
		        <span class="icon-item" @click="delet">
		         <img src="../../../../static/images/delete.png" class="icon"><span class="span-text">删除</span>
		        </span>
		    </span>
		</div>
		<div class="taskWtable">
			<el-table :data="tableData" height="710" style="width: 100%" 
				:default-sort = "{prop: 'date', order: 'descending'}" 
				show-header	
				highlight-current-row
				@current-change="handleCurrentChange" border
				><!-- order两个参数，顺序和倒序: ascending, descending -->
				<!-- @row-click="addHeight(backColor)" :class="{active: activeName == backColor}" -->
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
			      min-width="90"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="remarker"
			      label="备注人"
			      min-width="130">
			    </el-table-column>
			    <el-table-column
			      prop="remarkTime"
			      label="备注时间"
			      min-width="150"
			      sortable>
			    </el-table-column>
			    <el-table-column
			      prop="remark"
			      label="备注"
			      show-overflow-tooltip
			      min-width="580">
			    </el-table-column>
			</el-table>
		</div>
		<!-- 添加弹层 -->

		<!-- <div class="layer" v-show="ok">@touchmove.prevent
			<div class="layerbox">
				<p><span>请输入您要添加的备注信息</span><i class="el-icon-close" @click="close"></i></p>
				<div><label>备注</label><textarea v-model="remark" maxlength="600" placeholder="最多600字"></textarea></div>
				<el-button type="primary" @click="sure">确定</el-button>
			</div>
		</div> -->
		
		<div class="addLog">
			<el-dialog
			  title="请输入您要添加的备注信息"
			  :visible.sync="dialogVisible"
			  width="638px"
			  top="35vh">
			  <div class="addBody">
			  	<label>备注</label>
			  	<span v-show="remark.length==600">
    				<i>*</i>输入长度不能超过600
    			</span>
    			<el-input
				  type="textarea"
				  :rows="7"
				  placeholder="最多600字"
				  v-model="remark"
				  :maxlength="600"
				  resize="none"
				  >
				</el-input>
			  </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" :loading=addLodaing @click="sure">{{addSure}}</el-button>
			  </span>
			</el-dialog>
		</div>
		
		<div class="changeLog">
			<el-dialog
			  title="请输入您要修改的备注信息"
			  :visible.sync="chdialogVisible"
			  width="638px"
			  top="35vh">
			  <div class="changeBody">
			  	<label>备注</label>
			  	<span v-show="changeRemarks.length==600">
    				<i>*</i>输入长度不能超过600
    			</span>
    			<el-input
				  type="textarea"
				  :rows="7"
				  placeholder="最多600字"
				  v-model="changeRemarks"
				  :maxlength="600"
				  resize="none"
				  >
				</el-input>
			  </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" :loading=changeLoading @click="changeSure">{{chSure}}</el-button>
			  </span>
			</el-dialog>
		</div>
		<div class="isLog">
			<el-dialog
			  title="提示"
			  :visible.sync="isdialogVisible"
			  width="420px"
			  top="35vh">
			  <span>请选择一条记录！</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="promptSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
		<div class="deletLog">
			<el-dialog
			  title="提示"
			  :visible.sync="dedialogVisible"
			  width="420px"
			  top="35vh">
			  <span>您要删除该备注吗？</span>
			  <span slot="footer" class="dialog-footer">
			  	<el-button type="primary" @click="deletCancle">取消</el-button>
				<el-button type="primary" @click="deletSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				ok:false,
				tableData: [/*{remarkType: '11', 
								    remarker:'dd', 
								    remarkTime: 'gg',
								    remark:'bb',
								    id:1
								}*/],
		        remarkType:'',
		        remarker:'',
		        remarkTime:'',
		        remark:'',
		        changeLayer:false,
		        promptLayer:false,
		        k:0,
		        isChecked:'',
		        changeRemark:'',
		        changeRemarks:'',
		        deletLayer:false,
		        taskInWaitting:'',
		        applyId:'',
		        userInf:'',
		        remarker:'',
		        //添加的弹层
		        dialogVisible: false,
		        //是否有数据的弹层
		        isdialogVisible: false,
		        //修改弹层
		        chdialogVisible: false,
		        //删除弹层
		        dedialogVisible: false,
		        //根据judgeFlag判断是初审还是终审
		        judgeFlag:'',
		        addLodaing:false,
		        addSure:'确定',
		        changeLoading:false,
		        chSurechSure:'确定',
			}
		},
		mounted(){
			//一进入页面就发送请求
			this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
			if (this.judgeFlag.flag == '01') {
			    this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));// 初审
				this.applyId=this.taskInWaitting.applyId; 
			} else if (this.judgeFlag.flag == '02') {
				this.taskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));// 终审
				this.applyId=this.taskInWaitting.applyId;
			  }
			//获取当前登陆人的用户名
			this.userInf=JSON.parse(localStorage.getItem('userInf'));
			this.remarker=this.userInf.userCode;
			console.log(this.remarker);
			this.request(this.taskInWaitting.applyId);
			//console.log(this.taskInWaitting.applyId);
		},
		methods:{
			request(param){
	    		this.post("/applyRemark/getApplyRemarkList", {
		        'applyId':param
		      }).then(res => {
		        this.tableData=res.data;
		      });
		  },
			add(){
				this.dialogVisible=true;
				this.remark='';
				this.addSure ='确定';
		   		this.addLodaing = false;
			},
			change(){
				this.changeLoading = false;
				this.chSure = '确定';
				if(this.isChecked==''){
					this.isdialogVisible = true;
				}else{
					console.log(this.isChecked);
					this.changeRemarks='';
					this.chdialogVisible = true;
					for(var i=0;i<this.tableData.length;i++){
						//console.log(this.tableData[i].id);
						if(this.tableData[i].id==this.isChecked){
							this.changeRemarks=this.tableData[i].remark;
						}
					}
					console.log(this.changeRemarks);
				}
			},
			delet(){
				if(this.isChecked==''){
					this.isdialogVisible = true;
				}else{
					this.dedialogVisible = true;
				}
			},
			deletCancle(){
				this.dedialogVisible = false;
			},
			sure(){
				//this.ok=false;
				//document.getElementsByTagName('body')[0].style.overflow='';
				this.addLodaing = true;
				this.addSure = "添加中";
				//debug;
				this.dialogVisible = false;
				this.post('/applyRemark/addApplyRemark',{
					applyId:this.applyId,
					remarkType:'03',
					remark:this.remark,
					remarker:this.remarker
				})
				.then(res => {
		   			this.addSure = "确定";
		   			 if(res.statusCode==200){
						this.request(this.applyId);
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
		          });
			},
			changeSure(){
				this.changeLoading = true;
				this.chSure = '修改中';
				this.chdialogVisible = false;
				//console.log(12345);
				this.post('/applyRemark/modifyApplyRemark',{
					id:this.isChecked,
					remark:this.changeRemarks
				})
				.then(res => {
					if(res.statusCode==200){
						this.request(this.applyId);
						this.$message({
							message:"修改成功！",
							type:'success'
						})
					}else{
						this.$message({
			              message:"修改失败！",
			              type: 'error'
			            })
					}
		          });
			},
			promptSure(){
				this.isdialogVisible = false;
			},
			deletSure(){
				this.dedialogVisible = false;
				this.post("/applyRemark/deleteApplyRemark", {
				        id:this.isChecked
				      }).then(res => {
				        if(res.statusCode==200){
							this.request(this.applyId);
							 this.$message({
				              message:"删除成功",
				              type: 'success'
				            })
						}else{
							this.$message({
				              message:"删除失败",
				              type: 'error'
				            })
						}
				      });
			},
			handleCurrentChange(val) {
				if(val == null){
					this.isChecked = '';
				}else{
					//this.currentRow = val;
		        	this.isChecked=val.id;
				}  
		    },
		},
	}
</script>
<style type="text/css" scoped>
	.remark{
		/* padding: 15px 30px; */
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		min-width: 1258px;
	}
/* 备注信息 */
	.remark .remarkHead{
		opacity:0.75;
		background:#ebedf8;
		border-radius:6px;
		width:100%;
		height:40px;
		line-height: 40px;
	}
	.remark .remarkHead .titleText{
		font-size: 16px;
		color: #1f2d3d;
		display: inline-block;
		font-weight: 400;
	}
	.remark .remarkHead .iconContainer{
	    float: right;
	    display: inline-block;
	    height: 40px;
	    line-height: 40px;
	    margin-right: 29px;
	}
	.remark .remarkHead .icon-item{
	   cursor: pointer;
	   display: inline-block;
	   height: 40px;
	   margin-right: 14px;
	   float: left;
	}
	.remark .remarkHead .icon {
	   font-size: 30px;
	   padding-top: 5px;
	   float: left;
	}
	.remark .remarkHead .span-text {
	   font-size: 15px;
	   color: #1f2d3d;
	   float: left;
	   padding-left: 10px;
	}
/* 表格头部 */
.taskWtable .el-table__header-wrapper{
	width: 100%;
}
/* 添加的弹层 */
 .addLog .addBody{
 	height: 100%;
    width: 100%;
    position: relative;
 }
 .addLog .addBody label{
 	height: 208px;
 	line-height: 208px;
 	padding: 0 10px;
 	font-size: 14px;
 	float: left;
 }
 .addLog .addBody div{
 	width: 90%;
    height: 200px;
    margin-top: 26px;
    float: left;
 }
 .addLog .addBody textarea{
 	width: 100%;
    height: 100%;
 }
 .addLog .addBody span{
 	position: absolute;
    left: 66px;
    top: 5px;
    font-size: 12px;
    color: #ff7676;
    display: inline-block;
    height: 17px;
    line-height: 17px;
 }
 .addLog .addBody span i{
 	padding-right: 2px;
    font-style: normal;
 }
 .changeLog .changeBody{
 	height: 100%;
    width: 100%;
    position: relative;
 }
 .changeLog .changeBody label{
 	height: 208px;
 	line-height: 208px;
 	padding: 0 10px;
 	font-size: 14px;
 	float: left;
 }
 .changeLog .changeBody div{
 	width: 90%;
    height: 200px;
    margin-top: 26px;
    float: left;
    /* padding: 5px 0 0 10px; */
 }
 .changeLog .changeBody textarea{
 	width: 100%;
 	height: 100%;
 }
 .changeLog .changeBody span{
 	position: absolute;
 	left: 66px;
 	top: 5px;
 	font-size: 12px;
 	color: #ff7676;
 	display: inline-block;
 	height: 17px;
 	line-height: 17px;
 }
 .changeLog .changeBody span i{
  padding-right: 2px;
  font-style: normal;
 }
/* 弹层 */
/* .layer{
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
	color: #0077ff;
	padding-right: 10px;
}
.layerbox div{
	clear: both;
	width: 98%;
	height: 208px;
	margin: 0 auto;
	background-color: #eee;
	text-align: center;
	font-size: 14px;
	padding-top: 15px;
}
.layerbox div label{
	display: inline-block;
	padding: 94px 10px 0 10px;
	float: left;
	font-size: 14px;
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
	height: 33px;
	border-radius: 8px;
	width: 79px;
	font-size: 14px;
	line-height: 33px;
	padding: 0;
}
提示弹层
.promptLayer{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
}
.promptLayer .layerbox{
	width: 338px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -169px;
	margin-top: -80px;
	border: 1px solid #ccc;
	background-color: #eee;
	z-index: 10000;
}
.promptLayer .layerbox div{
	background-color: #fff;
	height: 100px;
	padding: 10px 10px;
}
.promptLayer .layerbox div button{
	margin:40px 0 10px 0;
}
删除提示弹层
. {
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
}
.deletLayer .layerbox{
	width: 338px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -169px;
	margin-top: -80px;
	border: 1px solid #ccc;
	background-color: #eee;
	z-index: 10000;
}
.deletLayer .layerbox div{
	background-color: #fff;
	height: 100px;
	padding: 10px 10px;
	margin-bottom: 5px;
	width: 97%;
}
.deletLayer .layerbox .buttonDiv{
	float: left;
	width: 100%;
	height: 50px;
	margin-top:10px;
}
.deletLayer .layerbox .buttonDiv button{
	float: left;
	margin:0 0 0 50px;
} */
/* 折叠面板头部背景色 */
.icon_hat{
	padding: 9px 10px 10px 13px;
	vertical-align: middle;
}
.headFont{
	font-size: 16px;
}
</style>