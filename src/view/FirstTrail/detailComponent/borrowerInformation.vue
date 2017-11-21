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
				        <cross-rable class="house_property" v-for="(cro,index) in cross_rable_home" ytablemsg="house_property" v-bind:ynum="index" :key="index"  @mouseenter.native="enter($event)" @mouseleave.native="leave($event)" @click.native='buttonClick(index)'></cross-rable>
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
		  		<div class="xinyongka daikuanzongkuang">
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
				    	<li class="zongji"><label>负债合计[元]:</label><el-input v-model="input"></el-input></li>
				    </ol>
				    <ol class="num">
				    	<li><label>最近三个月信用卡/贷款申请次数:</label><el-input v-model="input"></el-input></li>
				    	<li><label>文字说明:</label><div><textarea></textarea></div></li>
				    </ol>
		  		</div> 
		  	</el-collapse-item>
		  	<el-collapse-item title="征询报告" name="8">
		  		<div class="fuzhaixinxi zhengxunbaogao">
		  			<ol>
				    	<li><label>报告来源:</label><el-input v-model="input"></el-input></li>
					    <li><label>有无征信报告查询记录:</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
						</li>
				    	<li><label>近6个月内信用报告查询次数:</label><el-input v-model="input"></el-input></li>
				    </ol>
				    <ol>
				    	<li><label>报告描述:</label><div><textarea></textarea></div></li>
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
		  	<el-collapse-item title="其他信息" name="10">
		  		<div class="qita">
				    <ol>
				    	<li><label>其他:</label><div><textarea></textarea></div></li>
				    </ol>
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
	      	value:'',
	      	options: [{
	          value: '1',
	          label: '是'
	        }, {
	          value: '2',
	          label: '否'
	        }],
	        activeNames: ['1','2','3','4','5','6','7','8','9','10'],
      		cross_rable_home: 0,
      		cross_rable_vehicle: 0,
      		cross_rable_card:0,
      		cross_rable_loanDetail:0,
      		cross_rable_turnover:0,
      		house_property: document.getElementsByClassName("house_property"),
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
				console.log(this.house_property);
				var items = this.house_property;
				for(var i=0,len=items.length;i<len;i++){
					if(items[i].style.background =='pink'){
						items[i].parentNode.removeChild(items[i]);
						this.cross_rable_home -= 1;
					}
				};
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
			enter: function(e){
				if(e.target.style.background !== 'pink'){
				    e.target.style.background = '#e6ebf5';
				}
			},
			leave: function(e){
				if(e.target.style.background !== 'pink'){
				    e.target.style.background = '';
				}
			},
			buttonClick(index){
				console.log(index);
				console.log(this.house_property[index]);

				var items = this.house_property;
				for(var i=0,len=items.length;i<len;i++){
					items[i].style.background = '';
				}
				items[index].style.background = 'pink';
			}
	    }
	}
</script>
<style type="text/css" scoped>
	
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
		width: 33.3%;
		margin-bottom: 20px;
		text-align: center;
	}
	.xinyongka ul li{
		margin-top: 20px;
	}
	.xinyongka ul li label{
		width: 110px;
		display: inline-block;
		text-align: right;
	}
	/* 贷款总况 */
	.daikuanzongkuang li p{
		width: 180px;
		height: 30px;
		display: inline-block;
	}
  table.mytable{
    /* border-width: 1px;
    border-color: #666666; */
    border: 1px solid #d8dce5;  
    border-collapse: collapse;
  }
  table.mytable th {  
        padding: 8px;
        border: 1px solid #d8dce5;  
        background-color: #e6ebf5;
  }
  /* table.mytable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
  } */
/* 负债信息 */
.fuzhaixinxi,.fuzhaixinxi ol{
	width: 100%;
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
	padding-right: 5px;
}
/* 负债信息：负债合计 */
.fuzhaixinxi ol li.zongji input{
	border: none;
}
/* 负债信息：文字说明 */
ol.num li:nth-of-type(1) input{
	position: absolute;
	left: 0;
	top: -29px;
}
ol.num li:nth-of-type(2){
	width: 66.6%;
	text-align: left;
	padding-left: calc( 16.6% - 167px );
	
}
ol.num li:nth-of-type(2) textarea{
	width: 640px;
	border: 1px solid #d8dce5; 
	height: 30px;
	border-radius: 4px;
	position: absolute;
	top: -18px;
	padding-top: 5px;
}
ol.num li:nth-of-type(2) div{
	position: relative;
	display: inline-block;
}
/* 征询报告 */
.zhengxunbaogao ol{
	width: 100%;
}
.zhengxunbaogao li label{
	width: 174px !important;
}
.zhengxunbaogao ol:nth-of-type(2) li{
	width: 100%;
	text-align: left;
	padding-left: calc( 16.6% - 178px );
	margin-bottom: 20px;
}
.zhengxunbaogao ol:nth-of-type(2) li div{
	display: inline-block;
	height: 50px;
	border: 1px solid #d8dce5; 
	width: 700px;
}
.zhengxunbaogao ol:nth-of-type(2) li div textarea{
	width: 700px;
	padding: 5px 5px 0 5px;
}
/* 其他信息 */
.qita{
	width: 100%;
}
.qita ol li{
	width: 100%;
	height: 240px;
	margin-top: 20px;
}
.qita ol div{
	display: inline-block;
	width: 70%;
}
.qita ol label{
	height: 240px;
	line-height: 240px;
}
.qita ol textarea{
	width: 70%;
	height: 200px;
	border: 1px solid #d8dce5;  
}
</style>