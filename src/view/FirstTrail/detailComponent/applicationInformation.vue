<template>
	<div class="applicationInformation">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="工作人员填写" name="1">
				<ul class="firstUl">
					<li>
						<label>申请类型：</label><el-select v-model="value1" disabled>    
						</el-select>
					</li>
					<li>
						<label>借款人类型：</label><el-select v-model="value" disabled>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>进件渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in incomingChannel"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>获客渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in acquisitionChannel"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>团队经理：</label><el-select v-model="value" disabled>
						</el-select>
					</li>
					<li>
						<label>直销人员：</label><el-select v-model="value" disabled>
						</el-select>
					</li>
					<li>
						<label style="float:left">直销人员联系方式：</label><p class="firstP"></p>
					</li>
				</ul>
				<ul>
					<li>
						<label>家人是否知晓本借款：</label>
						<el-select v-model="value2" @change="changeValue(value2)">
						    <el-option
						      v-for="item in yorNo"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li v-if="value2=='是'">
						<label><i>*</i>知晓人姓名：</label>
						<el-input v-model="inputname" v-on:focus = "aa=true" v-on:blur="aa=false"></el-input>
						<span v-show="aa">知晓人姓名不能为空</span>
					</li>
					<li v-if="value2=='是'">
						<label class="selLabel"><i>*</i>与本人关系：</label>
						<el-select v-model="value" v-on:focus = "bb=true" v-on:blur="bb=false">
						    <el-option
						      v-for="item in relation"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
						<span v-show="bb">与本人关系不能为空</span>
					</li>
				</ul>
				<ul>
					<li>
						<label>客户符合何种产品：</label><el-select v-model="value">
						    <el-option
						      v-for="item in product"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>紧急程度：</label><el-select v-model="value3" @change="changeValue2(value3)">
						    <el-option
						      v-for="item in urgency"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li v-if="value3=='收费加急'">
						<label><i>*</i>加急费用[元]：</label>
						<el-input v-model="inputname" v-on:focus = "cc=true" v-on:blur="cc=false"></el-input>
						<span v-show="cc">加急费用不能为空</span>
					</li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item title="您的借款需求" name="2">
				<ul class="firstUl">
					<li>
						<label>借款用途：</label><el-select v-model="value">
						    <el-option
						      v-for="item in usageOfLoan"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label><i>*</i>申请借款额度[元]：</label>
						<el-input v-model="inputname" v-on:focus = "dd=true" v-on:blur="dd=false"></el-input>
						<span v-show="dd">申请借款额度不能为空</span>
					</li>
					<li>
						<label>借款期限[月]：</label><el-select v-model="value">
						    <el-option
						      v-for="item in lifeOfLoan"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>可接受最高月还款额[元]：</label><el-input v-model="inputname"></el-input>
					</li>
				</ul>
				<ul>
					<li>
						<label>借款类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in typeOfLoan"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>担保方式：</label>
						<el-select v-model="value">
						    <el-option
						      v-for="item in warrantWay"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>还款资金来源：</label>
						<el-select v-model="value4" @change="changeValue3(value4)">
						    <el-option
						      v-for="item in sourcesOfFunds"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
				</ul>
				<ul v-if="value4=='其他渠道还款'">
					<li>
						<label style="float:left;line-height:40px;">其他渠道还款说明：</label>
						<div class="channel">
							<textarea></textarea>
						</div>
					</li>
					
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item title="您的个人信息" name="3">
				<ul class="firstUl">
					<li>
						<label>申请类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>借款人类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>进件渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>获客渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>团队经理：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>直销人员：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>直销人员联系方式：</label><p></p>
					</li>
				</ul>
				<ul>
					<li>
						<label>家人是否知晓本借款：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>知晓人姓名：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li><label>与本人关系：</label></li>
				</ul>
				<ul>
					<li>
						<label>客户符合何种产品：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>紧急程度：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li><label>加急费用[元]：</label></li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item title="工作人员填写" name="1">
				<ul class="firstUl">
					<li>
						<label>申请类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>借款人类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>进件渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>获客渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>团队经理：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>直销人员：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>直销人员联系方式：</label><p></p>
					</li>
				</ul>
				<ul>
					<li>
						<label>家人是否知晓本借款：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>知晓人姓名：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li><label>与本人关系：</label></li>
				</ul>
				<ul>
					<li>
						<label>客户符合何种产品：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>紧急程度：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li><label>加急费用[元]：</label></li>
				</ul>
		  	</el-collapse-item>
		  	<el-collapse-item title="工作人员填写" name="1">
				<ul class="firstUl">
					<li>
						<label>申请类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>借款人类型：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>进件渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>获客渠道：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li></li>
				</ul>
				<ul>
					<li>
						<label>团队经理：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>直销人员：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>直销人员联系方式：</label><p></p>
					</li>
				</ul>
				<ul>
					<li>
						<label>家人是否知晓本借款：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>知晓人姓名：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li><label>与本人关系：</label></li>
				</ul>
				<ul>
					<li>
						<label>客户符合何种产品：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li>
						<label>紧急程度：</label><el-select v-model="value">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</li>
					<li><label>加急费用[元]：</label></li>
				</ul>
		  	</el-collapse-item>
		</el-collapse>
		<div class="button">
			<el-button type="primary" @click="maintenanceLog">维护日志</el-button>
	    	<el-button type="primary" @click="sure">确认</el-button>
	    	
	    </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeNames: ['1','2','3','4','5','6','7','8','9','10'],
				value:'',
				value1:'ddd',
				value2:'',
				value3:'',
				value4:'',
				input:'',
				inputname:'',
				aa:false,
				bb:false,
				cc:false,
				dd:false,
				incomingChannel: [{
		          value: '1',
		          label: '线下'
		        }, {
		          value: '2',
		          label: '渠道'
		        }, {
		          value: '3',
		          label: '电销'
		        }, {
		          value: '4',
		          label: 'H5'
		        }, {
		          value: '5',
		          label: 'APP'
		        }],
		        acquisitionChannel:[{
		          value: '1',
		          label: '报纸'
		        }, {
		          value: '2',
		          label: '电销'
		        }, {
		          value: '3',
		          label: '网络'
		        }, {
		          value: '4',
		          label: '促销活动'
		        }, {
		          value: '5',
		          label: '朋友介绍'
		        },
		        {
		          value: '6',
		          label: '销售开发'
		        },
		        {
		      	  value: '7',
		          label: '其他'
		      }],
		      yorNo:[{
		      	  value: '1',
		          label: '是'
		        },
		        {
		      	  value: '2',
		          label: '否'
		      }],
		      relation:[{
		      	  value: '1',
		          label: '夫妻'
		        },
		        {
		      	  value: '2',
		          label: '父母'
		      },
		      {
		      	  value: '3',
		          label: '子女'
		      },
		      {
		      	  value: '4',
		          label: '兄弟'
		      },
		      {
		      	  value: '5',
		          label: '姐妹'
		      },
		      {
		      	  value: '6',
		          label: '兄妹'
		      },
		      {
		      	  value: '7',
		          label: '姐弟'
		      },
		      {
		      	  value: '8',
		          label: '朋友'
		      },
		      {
		      	  value: '9',
		          label: '同事'
		      },
		      {
		      	  value: '10',
		          label: '房东'
		      },
		      {
		      	  value: '11',
		          label: '亲属'
		      },
		      {
		      	  value: '12',
		          label: '其他'
		      }],
		      product:[{
		      	value:'1',
		      	label:'诺福贷'
		      }],
		      urgency:[{
		      	value:'1',
		      	label:'普通'
		      },
		      {
		      	value:'2',
		      	label:'免费加急'
		      },
		      {
		      	value:'3',
		      	label:'收费加急'
		      }],
		      lifeOfLoan:[{
		      	value:'1',
		      	label:'2'
		      },
		      {
		      	value:'2',
		      	label:'3'
		      },
		      {
		      	value:'3',
		      	label:'6'
		      },
		      {
		      	value:'4',
		      	label:'9'
		      },
		      {
		      	value:'5',
		      	label:'12'
		      },
		      {
		      	value:'6',
		      	label:'18'
		      },
		      {
		      	value:'7',
		      	label:'24'
		      },
		      {
		      	value:'8',
		      	label:'36'
		      },
		      {
		      	value:'9',
		      	label:'48'
		      }],
		      usageOfLoan:[{
		      	value:'1',
		      	label:'日常生活消费'
		      },
		      {
		      	value:'2',
		      	label:'教育支出'
		      },
		      {
		      	value:'3',
		      	label:'医疗支出'
		      },
		      {
		      	value:'4',
		      	label:'提高生活质量'
		      },
		      {
		      	value:'5',
		      	label:'其他消费'
		      },
		      {
		      	value:'6',
		      	label:'货物采买'
		      },
		      {
		      	value:'7',
		      	label:'商铺运营'
		      },
		      {
		      	value:'8',
		      	label:'家庭消费'
		      },
		      {
		      	value:'9',
		      	label:'个人消费'
		      }],
		      typeOfLoan:[{
		      	value:'1',
		      	label:'信用借款'
		      }],
		      warrantWay:[{
		      	value:'1',
		      	label:'信用'
		      }],
		      sourcesOfFunds:[{
		      	value:'1',
		      	label:'独立还款'
		      },
		      {
		      	value:'2',
		      	label:'家人协助还款'
		      },
		      {
		      	value:'3',
		      	label:'其他渠道还款'
		      }],
		        options:[{}]
			};
		},
		methods:{
			handleChange(){

	    	},
	    	maintenanceLog(){

	    	},
	    	sure(){
	    		if(this.value2=="是" && this.inputname==''){
	    			alert('不能为空');
	    		}
	    	},
	    	require(){

	    	},
	    	changeValue(rowItem){
	    		if(rowItem==1){
	    			this.value2="是";
	    		}else{
	    			this.value2="否";
	    		};
	    	},
	    	changeValue2(rowItem){
	    		if(rowItem==3){
	    			this.value3="收费加急";
	    		}
	    	},
	    	changeValue3(rowItem){
	    		if(rowItem==3){
	    			this.value4="其他渠道还款";
	    		}
	    	},
		}
	}
</script>
<style type="text/css" scoped>
	.applicationInformation{
		width: 100%;
	}
	.applicationInformation ul{
		width: 100%;
		height: 50px;
	}
	.applicationInformation ul li{
		float: left;
		width: 33.3%;
		margin-top: 10px;
		position: relative;
		min-width: 336px;
	}
	.applicationInformation ul li span{
		position: absolute;
		left: 340px;
		top: 2px;
		color: blue;
	}
	ul li label{
		width: 156px;
		display: inline-block;
		text-align: right;
		position: relative;
	}
	ul li label i{
		position: absolute;
		top: -2px;
		left: 315px;
		font-size: 20px;
		color: red;
		z-index: 100;
	}
	ul li label.selLabel i{
		left: 294px;
	}
	ul li .firstP{
		display: inline-block;
		width: 180px;
		height: 30px;
	}
	/* 按钮 */
	.button{
		width: 100%;
	}
	.button button{
		float: right;
		margin: 20px 15px 20px 0;
	}
	.channel{
		width: 336px;
		height: 40px;
		display: inline-block;
	}
	.channel textarea{
		width: 336px;
		height: 40px;
		border: 1px solid #d8dce5; 
	}
</style>