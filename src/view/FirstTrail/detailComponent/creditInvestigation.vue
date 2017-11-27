<!-- <template>
	实地征信
	<div class="creditInvestigation">
		<div class="creditHead">
			<ul class="headul">
				<li><label>日期：</label><span>{{datas.isCheckDocTxt}}</span></li>
				<li><label>是否可对借款人有效证件：</label><span>是</span></li>
				<li><label>实地场所：</label><span>{{datas.isCheckDocTxt}}</span></li>
			</ul>
			<ul class="headul">
				<li><label>实地人员1：</label><span>{{datas.isCheckDocTxt}}</span></li>
				<li><label>不核对借款人有效证件原因：</label><span>{{datas.isCheckDocTxt}}</span></li>
				<li><label>实地发起源：</label><span>{{datas.isCheckDocTxt}}</span></li>
			</ul>
		</div>
		<div>
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="实地调查记录" name="1">
				    <ul class="headul">
						<li><label>日期：</label><span>{{datas.creditDate}}</span></li>
						<li><label>是否核对借款人有效证件：</label><span>{{datas.isCheckDocTxt}}</span></li>
						<li><label>实地场所：</label><span>{{datas.}}</span></li>
					</ul>
					<ul class="headul">
						<li><label>实地人员1：</label><span>{{datas.}}</span></li>
						<li><label>不核对借款人有效证件原因：</label><span>{{datas.isCheckDocRemark}}</span></li>
						<li><label>实地发起源：</label><span>{{datas.}}</span></li>
					</ul>
			  </el-collapse-item>
			  <el-collapse-item title="家庭实地征信内容" name="2">
			    <ul class="headul">
					<li><label>地址：</label><span>{{datas.homeAddr}}</span></li>
					<li><label>标志性建筑：</label><span>{{datas.homeLandMark}}</span></li>
					<li><label>路线：</label><span>{{datas.homeRoute}}</span></li>
					<li><label>是否核对借款人房产证件：</label><span>{{datas.homeNoverReason}}</span></li>
					<li><label>在场人员：</label><span>{{datas.homePresenter}}</span></li>
					<li><label>社区周边环境：</label><span>{{datas.homeSurrounding}}</span></li>
					<li><label>房屋建筑年代：</label><span>{{datas.homeBuildingAge}}</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label>与借款人关系：</label><span>{{datas.homeRelBorrower}}</span></li>
					<li><label>房屋户型</label><span>{{datas.homeHouseSize}}</span></li>
					<li><label></label><span></span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="日常生活迹象" name="3">
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
			  <el-collapse-item title="其他" name="4">
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
			  <el-collapse-item title="企业实地征信内容" name="5">
			    <ul class="headul">
					<li><label>企业征信地址：</label><span>{{datas.comAddr}}</span></li>
					<li><label>是否查验企业有效证件：</label><span>{{datas.comisEffDoc}}</span></li>
					<li><label>各项材料原件是否收齐比对：</label><span>{{datas.comisMaterialComp}}</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label>企业是否存在：</label><span>{{datas.}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="办公环境" name="6">
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
			  <el-collapse-item title="库房/车间" name="7">
			    <ul class="headul">
					<li><label>机器设备：</label><span>{{datas.comEquipment}}</span></li>
					<li><label>现代化程度：</label><span>{{datas.comModenLevel}}</span></li>
					<li><label>库存：</label><span>{{datas.comStock}}</span></li>
				</ul>
				<ul class="headul">
					<li><label>厂房面积：</label><span>{{datas.comArea}}</span></li>
					<li><label>办公区工位数情况</label><span>{{datas.}}</span></li>
					<li><label>工位上是否有电话：</label><span>{{datas.}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="员工" name="8">
			    <ul class="headul">
					<li><label>是否开工中：</label><span>{{datas.comIsStartTxt}}</span></li>
					<li><label>是否统一着装：</label><span>{{datas.comIsDressUni}}</span></li>
					<li><label>办公区工位数情况：</label><span>{{datas.}}</span></li>
				</ul>
				<ul class="headul">
					<li><label>见到办公人数：</label><span>{{datas.comWorkerNum}}</span></li>
					<li><label></label><span></span></li>
					<li><label>工位上是否有电话：</label><span>{{datas.}}</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="口述企业状况" name="9">
			    <ul class="headul">
					<li><label>规模：</label><span>{{datas.comScale}}</span></li>
					<li><label>经营年限：</label><span>{{datas.comOperaYears}}</span></li>
					<li><label>毛利[万元]：</label><span>{{datas.comGroosMargin}}</span></li>
					<li><label>上下游供货方式：</label><span>{{datas.comSupplyMode}}</span></li>
					<li><label>上下游结算周期：</label><span>{{datas.comBillCycle}}</span></li>
					<li><label>应收账款[万元]：</label><span>{{datas.comCollection}}</span></li>
					<li><label>贷款及抵押情况[万元]：</label><span>{{datas.comLoan}}</span></li>
					<li><label>其他说明：</label><span>{{datas.comOtherInfo}}</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label>年收支[万元]：</label><span>{{datas.comPay}}</span></li>
					<li><label>纯利[万元]：</label><span>{{data.comNetProfit}}</span></li>
					<li><label>上下游结算方式：</label><span>{{datas.comCaculation}}</span></li>
					<li><label></label><span></span></li>
					<li><label>应付账款[万元]：</label><span>{{datas.comPayables}}</span></li>
					<li><label></label><span></span></li>
					<li><label>异常说明：</label><span>{{datas.comExceptionInfo}}</span></li>
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
	      };
	    },
	    created(){
			//一进入页面就发送请求
			this.request();
		},
	    methods:{
	    	handleChange(){

	    	},
	    	request(){
	    		this.post("/credit/fieldReference", {
		        'applyId':'00542'
		      }).then(res => {
		        /*console.log(res);*/
		        this.datas=res.data;
		        /*console.log(this.datas);*/
		      });
		  },
	    }
	}
</script>
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	ul,ol,li{
		list-style: none;
	}
	/* 头部 */
	.creditHead{
		width: 100%;
		
	}
	ul.headul{
		float: left;
		width: 50%;
	}
	ul.headul li{
		margin-top: 10px;
	} 
	ul.headul li label{
		width: 210px;
		display: inline-block;
		text-align: right;
	}
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
</style> -->