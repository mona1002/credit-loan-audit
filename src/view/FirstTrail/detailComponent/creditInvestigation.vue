<template>
	<!-- 实地征信 -->
	<div class="creditInvestigation">
		<div>
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item name="1">
					<template slot="title">
				      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
				      <span class="headFont">实地调查记录</span>
				    </template>
				    <ul class="headul">
						<li><label>日期：</label><span>{{datas.creditDate}}</span></li>
						<li class="reason" v-show="datas.isCheckDocTxt=='否'"><label>是否核对借款人有效证件：</label><span>{{datas.isCheckDocTxt}}</span></li>
						<li v-show="datas.isCheckDocTxt=='是'"><label>是否核对借款人有效证件：</label><span>{{datas.isCheckDocTxt}}</span></li>
						<li v-show="datas.isCheckDocTxt==''"><label>是否核对借款人有效证件：</label><span>{{datas.isCheckDocTxt}}</span></li>
						<li><label>实地场所：</label><span>{{aa}}</span></li>
					</ul>
					<ul class="headul">
						<li><label>实地人员1：</label><span>{{bb}}</span></li>
						<!-- <li v-show="datas.isCheckDocTxt=='否'"><label>不核对借款人有效证件原因：</label><span>{{datas.isCheckDocRemark}}</span></li>-->
						<li v-show="datas.isCheckDocTxt==''"></li> 
						<li v-show="datas.isCheckDocTxt=='是'"></li> 
						<li class="reason" v-show="datas.isCheckDocTxt=='否'">
							<label>不核对借款人有效证件原因：</label>
							<el-tooltip class="item" effect="dark" :content="datas.isCheckDocRemark" :disabled="datas.isCheckDocRemark==null" placement="top">
						      <div>{{datas.isCheckDocRemark}}</div>
						    </el-tooltip>
						</li>
						<li><label>实地发起源：</label><span>{{cc}}</span></li>
					</ul>
			  </el-collapse-item>
			  <el-collapse-item name="2">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">家庭实地征信内容</span>
			    </template>
			    <ul class="headul">
					<li><label>地址：</label><span>{{datas.homeAddr}}</span></li>
					<li><label>标志性建筑：</label><span>{{datas.homeLandMark}}</span></li>
					<li><label>路线：</label><span>{{datas.homeRoute}}</span></li>


					<li v-show="datas.homeNoverReasonTxt == ''"><label>是否核对借款人房产证件：</label><span>{{datas.homeNoverReasonTxt}}</span></li>
					<li v-show="datas.homeNoverReasonTxt == '是'"><label>是否核对借款人房产证件：</label><span>{{datas.homeNoverReasonTxt}}</span></li>
					<li class='reason' v-show="datas.homeNoverReasonTxt == '否'"><label>是否核对借款人房产证件：</label><span>{{datas.homeNoverReasonTxt}}</span></li>



					<li><label>在场人员：</label><span>{{datas.homePresenter}}</span></li>
					<li><label>社区周边环境：</label><span>{{datas.homeSurrounding}}</span></li>
					<li><label>房屋建筑年代：</label><span>{{datas.homeBuildingAge}}</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li v-show="datas.homeNoverReasonTxt == ''"></li>
					<li v-show="datas.homeNoverReasonTxt == '是'"></li>
					<li class='reason' v-show="datas.homeNoverReasonTxt == '否'">
						<label>不核对借款人房产证件原因：</label>
						<el-tooltip class="item" effect="dark" :content="datas.homeHouseInfo" :disabled="datas.homeHouseInfo==null" placement="top">
						      <div>{{datas.homeHouseInfo}}</div>
						</el-tooltip>
					</li>
					<li><label>与借款人关系：</label><span>{{datas.homeRelBorrower}}</span></li>
					<li><label>房屋户型：</label><span>{{datas.homeHouseSizeTxt}}</span></li>
					<li><label></label><span></span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="3">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">日常生活迹象</span>
			    </template>
			    <ul class="headul">
					<li><label>起居室：</label><span>{{datas.homeLivingRoom}}</span></li>
					<li><label>厨房：</label><span>{{datas.homeKichen}}</span></li>
					<li><label>其他：</label><span>{{datas.homeOtherDailyLife}}</span></li>
				</ul>
				<ul class="headul">
					<li><label>卫生间：</label><span>{{datas.homeToilet}}</span></li>
					<li><label>卫生清洁：</label><span>{{datas.homeHygiene}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="4">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">其他</span>
			    </template>
			    <ul class="headul">
					<li><label>植物：</label><span>{{datas.homeBotany}}</span></li>
					<li><label>货物：</label><span>{{datas.homeGoods}}</span></li>
					<li><label>其他生活情况：</label><span>{{datas.homeOtherRemark}}</span></li>
				</ul>
				<ul class="headul">
					<li><label>宠物：</label><span>{{datas.homePet}}</span></li>
					<li><label></label><span></span></li>
					<li><label>异常说明：</label><span>{{datas.homeOtherExpRemark}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="5">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">企业实地征信内容</span>
			    </template>
			    <ul class="headul">
					<li><label>企业征信地址：</label><span>{{datas.comAddr}}</span></li>
					<li><label>是否查验企业有效证件：</label><span>{{datas.comisEffDocTxt}}</span></li>
					<li><label>各项材料原件是否收齐比对：</label><span>{{datas.comisMaterialCompTxt}}</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label>企业是否存在：</label><span>{{dd}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="6">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">办公环境</span>
			    </template>
			    <ul class="headul">
					<li><label>企业水牌位置及新旧程度：</label><span>{{datas.comSignPlace}}</span></li>
					<li><label>办公场所装修情况：</label><span>{{datas.comOffDecora}}</span></li>
					<li><label>办公场所面积：</label><span>{{datas.comOffArea}}</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="7">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">库房/车间</span>
			    </template>
			    <ul class="headul">
					<li><label>机器设备：</label><span>{{datas.comEquipment}}</span></li>
					<li><label>现代化程度：</label><span>{{datas.comModenLevel}}</span></li>
					<li><label>库存：</label><span>{{datas.comStock}}</span></li>
				</ul>
				<ul class="headul">
					<li><label>厂房面积：</label><span>{{datas.comArea}}</span></li>
					<li><label>办公区工位数情况：</label><span>{{ee}}</span></li>
					<li><label>工位上是否有电话：</label><span>{{ff}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="8">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">员工</span>
			    </template>
			    <ul class="headul">
					<li><label>是否开工中：</label><span>{{datas.comIsStartTxt}}</span></li>
					<li><label>是否统一着装：</label><span>{{datas.comIsDressUniTxt}}</span></li>
					<li><label>办公区工位数情况：</label><span>{{gg}}</span></li>
				</ul>
				<ul class="headul">
					<li><label>见到办公人数：</label><span>{{datas.comWorkerNum}}</span></li>
					<li><label></label><span></span></li>
					<li><label>工位上是否有电话：</label><span>{{hh}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item name="9">
			  	<template slot="title">
			      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
			      <span class="headFont">口述企业状况</span>
			    </template>
			    <ul class="headul">
					<li><label>规模：</label><span>{{datas.comScale}}</span></li>
					<li><label>经营年限：</label><span>{{datas.comOperaYears}}</span></li>
					<li><label>毛利[万元]：</label><span>{{datas.comGroosMargin}}</span></li>
					<li><label>上下游供货方式：</label><span>{{datas.comSupplyMode}}</span></li>
					<li><label>上下游结算周期：</label><span>{{datas.comBillCycle}}</span></li>
					<li><label>应收账款[万元]：</label><span>{{datas.comCollection}}</span></li>
					<li><label>贷款及抵押情况：</label><span>{{datas.comLoan}}</span></li>
					<!-- <li><label>其他说明：</label><span>{{datas.comOtherInfo}}</span></li> -->
					<li class="reason">
						<label>其他说明：</label>
						<el-tooltip class="item" effect="dark" :content="datas.comOtherInfo" :disabled="datas.comOtherInfo==null" placement="top">
					      <div>{{datas.comOtherInfo}}</div>
					    </el-tooltip>
					</li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label>年收支[万元]：</label><span>{{datas.comPay}}</span></li>
					<li><label>纯利[万元]：</label><span>{{datas.comNetProfit}}</span></li>
					<li><label>上下游结算方式：</label><span>{{datas.comCaculation}}</span></li>
					<li><label></label><span></span></li>
					<li><label>应付账款[万元]：</label><span>{{datas.comPayables}}</span></li>
					<li><label></label><span></span></li>
					<!-- <li><label>异常说明：</label><span>{{datas.comExceptionInfo}}</span></li> -->
					<li class="reason">
						<label>异常说明：</label>
						<el-tooltip class="item" effect="dark" :content="datas.comExceptionInfo" :disabled="datas.comExceptionInfo==null" placement="top">
					      <div>{{datas.comExceptionInfo}}</div>
					    </el-tooltip>
					</li>
				</ul>
			  </el-collapse-item>
			</el-collapse>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        activeNames: ['1','2','3','4','5','6','7','8','9'],
	        datas:'',
	        aa:'',
	        bb:'',
	        cc:'',
	        dd:'',
	        ee:'',
	        ff:'',
	        gg:'',
	        hh:'',
	        taskInWaitting:'',
	        judgeFlag:'',
	      };
	    },
	    mounted(){
			//一进入页面就发送请求
			this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
		    if (this.judgeFlag.flag == '01') {
		        this.taskInWaitting = JSON.parse(localStorage.getItem("taskInWaitting")); // 初审
		    } else if (this.judgeFlag.flag == '02') {
		        this.taskInWaitting = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
		    }else if (this.judgeFlag.flag == '03') {
		        this.taskInWaitting = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
		    }else if (this.judgeFlag.flag == '04') {
		        this.taskInWaitting = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
		    }

			//this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
			this.request(this.taskInWaitting.applyId);
		},
	    methods:{
	    	handleChange(){

	    	},
	    	request(query){
	    		this.get("/credit/fieldReference",{applyId:query}).then(res => {
		        if(res.statusCode == 200){
		        	this.datas=res.data;
		        	//(企业)收支[万元]
		        	if(this.datas.comPay !=null){
		        		this.datas.comPay = this.formatNumber(this.datas.comPay,2,0);
		        	};
		        	//(企业)毛利[万元]
		        	if(this.datas.comGroosMargin !=null){
		        		this.datas.comGroosMargin = this.formatNumber(this.datas.comGroosMargin,2,0);
		        	};
		        	//(企业)纯利[万元]
		        	if(this.datas.comNetProfit !=null){
		        		this.datas.comNetProfit = this.formatNumber(this.datas.comNetProfit,2,0);
		        	};
		        	//(企业)应收账款[万元]
		        	if(this.datas.comCollection !=null){
		        		this.datas.comCollection = this.formatNumber(this.datas.comCollection,2,0);
		        	};
		        	//(企业)应付账款
		        	if(this.datas.comPayables !=null){
		        		this.datas.comPayables = this.formatNumber(this.datas.comPayables,2,0);
		        	};
		        	//办公环境 办公场所面积
		        	if(this.datas.comOffArea !=null){
		        		this.datas.comOffArea = this.formatNumber(this.datas.comOffArea,2,0).replace(/,/g,'')+'㎡';
		        	};
		        	//库房/车间 厂房面积
		        	if(this.datas.comArea !=null){
		        		this.datas.comArea = this.formatNumber(this.datas.comArea,2,0).replace(/,/g,'')+'㎡';
		        	};
		        	
		        };
		      });
		  },
		  //保留两位小数 整数千分位
			formatNumber(num,cent,isThousand) {
			    num = num.toString().replace(/\$|\,/g,'');
			 
			  	// 检查传入数值为数值类型
			  	if(isNaN(num))
			    	num = "0";
			 
			  	// 获取符号(正/负数)
			  	let sign = (num == (num = Math.abs(num)));

			  	num = Math.floor(num*Math.pow(10,cent)+0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
			  	let cents = num%Math.pow(10,cent);       // 求出小数位数值
			  	num = Math.floor(num/Math.pow(10,cent)).toString();  // 求出整数位数值
			  	cents = cents.toString();        // 把小数位转换成字符串,以便求小数位长度
			 
			  	// 补足小数位到指定的位数
			  	while(cents.length<cent)
			    	cents = "0" + cents;
			 
		    	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		      		num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
			  
			  	if (cent > 0){
			  		//console.log(cent);
			  		//console.log(((sign)?'':'-') + num + '.' + cents);
			  		if(sign == true){
			  			return (((sign)?'':'-') + num + '.' + cents);
			  		}else if(sign == false){
			  			return '0.00'
			  		}
			  	}else{
			  		//console.log(((sign)?'':'-') + num);
			    	return (((sign)?'':'-') + num);
			    }
			},
	    }
	}
</script>
<style type="text/css" scoped>
	.creditInvestigation{
		width: 100%;
		height: 100%;
		background-color: #fafbfc;
		font-size: 14px;
		min-width: 930px;
		color: #475669;
	}
	/* 头部 */
	.creditHead{
		width: 100%;
		
	}
	/* icon_hat */
	ul.headul{
		float: left;
		width: 50%;
	}
	ul.headul li{
		margin-top: 10px;
		height: 24px;
	} 
	ul.headul li:last-child{
		margin-bottom: 10px;
	} 
	ul.headul li label{
		width: 210px;
		display: inline-block;
		text-align: right;
	}
	/* 折叠面板头部背景色 */
	.icon_hat{
		padding: 9px 10px 10px 13px;
		vertical-align: middle;
	}
	.headFont{
		font-size: 16px;
	}
	ul.headul li.reason{
		height: 75px;
	}
	.reason span{
		height: 75px;
		line-height: 75px;
	}
	.reason label{
		height: 75px;
		line-height: 75px;
		float: left;
	}
	.reason div{
		width: calc( 100% - 220px );
		display: inline-block;
	    height: 75px;
	    overflow: auto;
	    padding-left: 10px;
	    border: 1px solid #d8dce5;
	}
</style> 