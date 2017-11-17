<template>
	<div class="borrowerInformation">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="房产信息" name="1">
			    <div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_home"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_home"><span>删除</span></i>
				</div>
				<div class="tableDiv">
					<table class="mytable">
				      <thead>
				        <tr>
				          <th></th>
				          <th>房产类型</th>
				          <th>产权性质</th>
				          <th>建筑面积[m^2]</th>
				          <th>建筑单价[元]</th>
				          <th>房产地址</th>
				          <th>邮政编码</th>
				          <th>产权比例</th>
				          <th>贷款期限[月]</th>
				          <th>抵押状况</th>
				          <th>月供[元]</th>
				          <th>贷款余额[元]</th>
				        </tr>
				      </thead>
				      <tbody>
				        <!-- <tr>
				          <td>0</td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				        </tr> -->
				        <cross-rable v-for="cro in cross_rable_home" ytablemsg="house_property" v-bind:ynum="cro" :key="cro"></cross-rable>
				      </tbody>
				    </table>
				</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="车辆信息" name="2">
			    <div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_vehicle"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_vehicle"><span>删除</span></i>
				</div>
				<div class="tableDiv">
					<table class="mytable">
				      <thead>
				        <tr>
				          <th></th>
				          <th>车辆购置价[元]</th>
				          <th>是否年检</th>
				          <th>是否非运营</th>
				          <th>车辆型号</th>
				          <th>车辆类型</th>
				          <th>贷款期限[月]</th>
				          <th>月供[元]</th>
				          <th>贷款余额[月]</th>
				          <th>车牌号码</th>
				          <th>车辆易购保险</th>
				          <th>购买时间</th>
				        </tr>
				      </thead>
				      <tbody>
				        <!-- <tr>
				          <td>0</td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				        </tr> -->
				        <cross-rable v-for="cro in cross_rable_vehicle" ytablemsg="vehicle" v-bind:ynum="cro" :key="cro"></cross-rable>
				      </tbody>
				    </table>
				</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用明细" name="3">
			    <div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_card"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_card"><span>删除</span></i>
				</div>
				<div class="tableDiv">
					<table class="mytable">
				      <thead>
				        <tr>
				          <th></th>
				          <th>银行名称</th>
				          <th>开卡日期</th>
				          <th>信用额度</th>
				          <th>已使用额度</th>
				          <th>还款日</th>
				          <th>本期应还款金额</th>
				          <th>本期实际还款金额</th>
				          <th>是否逾期</th>
				          <th>当前逾期期数</th>
				          <th>最高逾期期数</th>
				          <th>近12个月累计逾期次数</th>
				          <th>账户状态</th>
				        </tr>
				      </thead>
				      <tbody>
				        <!-- <tr>
				          <td>0</td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				        </tr> -->
				        <cross-rable v-for="cro in cross_rable_card" ytablemsg="card" v-bind:ynum="cro" :key="cro"></cross-rable>
				      </tbody>
				    </table>
				</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="信用卡使用情况" name="4">
		  		<div class="xinyongka">
		  			<ul>
				    	<li><label>信用卡张数：</label><el-input v-model="input"></el-input></li>
				    	<li><label>正常使用张数：</label><el-input v-model="input"></el-input></li>
				    	<li><label>呆帐数量：</label><el-input v-model="input"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>未开卡张数：</label><el-input v-model="input"></el-input></li>
				    	<li><label>冻结数量：</label><el-input v-model="input"></el-input></li>
				    	<li><label>销户数量：</label><el-input v-model="input"></el-input></li>
				    </ul>
				    <ul>
				    	<li><label>已使用张数：</label><el-input v-model="input"></el-input></li>
				    	<li><label>止付数量：</label><el-input v-model="input"></el-input></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款明细" name="5">
			    <div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_loanDetail"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_loanDetail"><span>删除</span></i>
				</div>
				<div class="tableDiv">
					<table class="mytable">
				      <thead>
				        <tr>
				          <th></th>
				          <th>贷款种类</th>
				          <th>担保方式</th>
				          <th>账户状态</th>
				          <th>还款频率</th>
				          <th>贷款发放日期</th>
				          <th>贷款到期日期</th>
				          <th>贷款合同金额[元]</th>
				          <th>应还款日期</th>
				          <th>贷款余额[元]</th>
				          <th>本期应还款金额[元]</th>
				          <th>本期实际还款金额[元]</th>
				          <th>最后一次还款日期</th>
				          <th>当前逾期金额</th>
				          <th>累计逾期次数</th>
				          <th>最高逾期期数</th>
				        </tr>
				      </thead>
				      <tbody>
				        <!-- <tr>
				          <td>0</td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				        </tr> -->
				        <cross-rable v-for="cro in cross_rable_loanDetail" ytablemsg="loanDetail" v-bind:ynum="cro" :key="cro"></cross-rable>
				      </tbody>
				    </table>
				</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="贷款总况" name="6">
		  		<div class="xinyongka">
		  			<ul>
				    	<li><label>车贷共有笔数:</label><p>{{input}}</p></li>
				    	<li><label>信用贷总笔数:</label><p>{{input}}</p></li>
				    	<li><label>房贷总笔数:</label><p>{{input}}</p></li>
				    	<li><label>其他贷款总笔数:</label><p>{{input}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷现存笔数:</label><p>{{input}}</p></li>
				    	<li><label>信用贷现存笔数:</label><p>{{input}}</p></li>
				    	<li><label>房贷现存笔数:</label><p>{{input}}</p></li>
				    	<li><label>其他贷现存笔数:</label><p>{{input}}</p></li>
				    </ul>
				    <ul>
				    	<li><label>车贷结清笔数:</label><p>{{input}}</p></li>
				    	<li><label>信用贷结清笔数:</label><p>{{input}}</p></li>
				    	<li><label>房贷结清笔数:</label><p>{{input}}</p></li>
				    	<li><label>其他贷款结清笔数:</label><p>{{input}}</p></li>
				    </ul>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="负债信息" name="7">
		  		<div class="fuzhaixinxi">
		  			<ol>
				    	<li><label>信用卡每月还款[元]:</label><el-input v-model="input"></el-input></li>
				    	<li><label>信用贷每月还款额[元]:</label><el-input v-model="input"></el-input></li>
				    	<li><label>房贷每月还款额[元]:</label><el-input v-model="input"></el-input></li>
				    </ol>
				    <ol>
				    	<li><label>车贷每月还款额[元]:</label><el-input v-model="input"></el-input></li>
				    	<li><label>其他贷款每月还款额[元]:</label><el-input v-model="input"></el-input></li>
				    	<li><label>负债合计[元]:</label><p>{{input}}</p></li>
				    </ol>
				    <ol>
				    	<li><label>最近三个月信用
卡/贷款申请次数:</label><el-input v-model="input"></el-input></li>
				    	<li><label>文字说明:</label><el-input v-model="input"></el-input></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="流水明细" name="9">
			    <div class="remarkIcon">
					<i class="el-icon-circle-plus icon" @click="add_turnover"><span>添加</span></i>
					<i class="el-icon-remove icon" @click="delet_turnover"><span>删除</span></i>
				</div>
				<div class="tableDiv">
					<table class="mytable">
				      <thead>
				        <tr>
				          <th></th>
				          <th>流水类型</th>
				          <th>N</th>
				          <th>N-1</th>
				          <th>N-2</th>
				          <th>N-3</th>
				          <th>N-4</th>
				          <th>N-5</th>
				          <th>计算</th>
				          <th>平均收入[元]</th>
				        </tr>
				      </thead>
				      <tbody>
				        <!-- <tr>
				          <td>0</td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				        </tr> -->
				        <cross-rable v-for="cro in cross_rable_turnover" ytablemsg="turnover" v-bind:ynum="cro" :key="cro"></cross-rable>
				      </tbody>
				    </table>
				</div>
		  	</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script type="text/javascript">
import CrossRable from '@/view/FirstTrail/detailComponent/CrossRable'
	export default {
		name: 'borrowerInformation',
	    data() {
	      return {
	      	input:'',
	        activeNames: ['1','2','3','4','5','6','7','8','9','10'],
      		cross_rable_home: 0,
      		cross_rable_vehicle: 0,
      		cross_rable_card:0,
      		cross_rable_loanDetail:0,
      		cross_rable_turnover:0,
	      };
	    },
	    components: {
		    CrossRable
		},
	    methods:{
	    	handleChange(){

	    	},
	    	add_home: function(str) {
		      this.cross_rable_home += 1;
		    },
		    add_vehicle: function(str) {
		      this.cross_rable_vehicle += 1;
		    },
		    add_card: function(str) {
		      this.cross_rable_card += 1;
		    },
		    add_loanDetail: function(str) {
		      this.cross_rable_loanDetail += 1;
		    },
		    /*流水明细*/
		    add_turnover: function(str) {
		      this.cross_rable_turnover += 1;
		    }, 
		    
			delet_home(){
				console.log(333);
			},
			delet_vehicle(){
				console.log(333);
			},
			delet_card(){
				console.log(333);
			},
			delet_loanDetail(){
				console.log(333);
			},
			/*流水明细*/
			delet_turnover(){
				console.log(333);
			},
	    }
	}
</script>
<style type="text/css">
	/* 折叠面板头部背景色 */
	.el-collapse-item__header{
		background-color: #ccc;
		font-size: 14px;
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
	}
	.el-collapse-item__header .el-collapse-item__arrow{
		line-height: 40px;
	}
	/* 字体图标 */
	.icon{
		color:#20a0ff;
		font-size: 20px;
	}
	.remarkIcon{
		width: 100%;
		height: 40px;
		line-height: 40px; 
	}
	.icon span{
		color:#475669;
	}
	/* 表格 */
	.tableDiv{
		width: 100%;
	}
	.tableDiv table{
		width: 100%;
		border-collapse:collapse;
	}
	.tableDiv table td{border:1px solid #ccc;color: #1f2d3d;}
	.tableDiv table th{border:1px solid #ccc;height: 40px;background: #f5f7fa;color: #1f2d3d;}
	/* 信用卡使用总况 */
	.xinyongka{
		width: 100%;
	}
	.xinyongka ul{
		float: left;
		margin-right: 300px;
		margin-bottom: 20px;
	}
	.xinyongka ul:nth-of-type(1){
		margin-left: 150px;
	}
	.xinyongka ul li{
		margin-top: 20px;
	}
	.xinyongka ul li label{
		width: 100px;
		display: inline-block;
		text-align: right;
	}
  table.mytable{
    font-family: verdana,arial,sans-serif;
    font-size:14px;
    color:#333333;
    border-width: 1px;
    border-color: #666666;
    border-collapse: collapse;
  }
  table.mytable th {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
        background-color: #dedede;
  }
  table.mytable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
        background-color: #ffffff;
  }
/* 负债信息 */
.fuzhaixinxi{
	width: 100%;
}
.fuzhaixinxi ol{
	width: 100%;
	/* margin-top:20px;  */
}
.fuzhaixinxi ol li{
	width: 33.3%;
	float: left;
	margin-top:20px;
	text-align: center;
}
.fuzhaixinxi ol li label{
	display: inline-block;
	width: 150px;
	text-align: right;
	background-color: pink;
}
.fuzhaixinxi ol li p{
	width: 180px;
	height: 30px;
	background-color: yellow;
	float: left;
}
</style>