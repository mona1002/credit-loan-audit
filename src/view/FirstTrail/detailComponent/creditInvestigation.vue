<template>
	<!-- 实地征信 -->
	<div class="creditInvestigation">
		<!-- <div class="creditHead">
			<ul class="headul">
				<li><label>日期：</label><span>2017年11月15日</span></li>
				<li><label>是否可对借款人有效证件：</label><span>是</span></li>
				<li><label>实地场所：</label><span>给大家回家</span></li>
			</ul>
			<ul class="headul">
				<li><label>实地人员1：</label><span>张三</span></li>
				<li><label>不核对借款人有效证件原因：</label><span>饭国防观</span></li>
				<li><label>实地发起源：</label><span>飞得更高</span></li>
			</ul>
		</div> -->
		<div>
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="实地调查记录" name="1">
				    <ul class="headul">
						<li><label>日期：</label><span>2017年11月15日</span></li>
						<li><label>是否核对借款人有效证件：</label><span>是</span></li>
						<li><label>实地场所：</label><span>给大家回家</span></li>
					</ul>
					<ul class="headul">
						<li><label>实地人员1：</label><span>张三</span></li>
						<li><label>不核对借款人有效证件原因：</label><span>饭国防观</span></li>
						<li><label>实地发起源：</label><span>飞得更高</span></li>
					</ul>
			  </el-collapse-item>
			  <el-collapse-item title="家庭实地征信内容" name="2">
			    <ul class="headul">
					<li><label>地址：</label><span>2017年11月15日</span></li>
					<li><label>标志性建筑：</label><span>是</span></li>
					<li><label>路线：</label><span>给大家回家</span></li>
					<li><label>是否核对借款人房产证件：</label><span>给大家回家</span></li>
					<li><label>在场人员：</label><span>给大家回家</span></li>
					<li><label>社区周边环境：</label><span>给大家回家</span></li>
					<li><label>房屋建筑年代：</label><span>2017年11月15日</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label>与借款人关系：</label><span>张三</span></li>
					<li><label>房屋户型</label><span>飞得更高</span></li>
					<li><label></label><span></span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="日常生活迹象" name="3">
			    <ul class="headul">
					<li><label>起居室：</label><span>2017年11月15日</span></li>
					<li><label>厨房：</label><span>是</span></li>
					<li><label>其他：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label>卫生间：</label><span>张三</span></li>
					<li><label>卫生清洁：</label><span>饭国防观</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="其他" name="4">
			    <ul class="headul">
					<li><label>植物：</label><span>2017年11月15日</span></li>
					<li><label>货物：</label><span>是</span></li>
					<li><label>其他生活情况：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label>宠物：</label><span>张三</span></li>
					<li><label></label><span></span></li>
					<li><label>异常说明：</label><span>饭国防观</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="企业实地征信内容" name="5">
			    <ul class="headul">
					<li><label>企业征信地址：</label><span>2017年11月15日</span></li>
					<li><label>是否查验企业有效证件：</label><span>是</span></li>
					<li><label>各项材料原件是否收齐比对：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label>企业是否存在：</label><span>饭国防观</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="办公环境" name="6">
			    <ul class="headul">
					<li><label>企业水牌位置及新旧程度：</label><span>2017年11月15日</span></li>
					<li><label>办公场所装修情况：</label><span>是</span></li>
					<li><label>办公场所面积：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
					<li><label></label><span></span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="库房/车间" name="7">
			    <ul class="headul">
					<li><label>机器设备：</label><span>2017年11月15日</span></li>
					<li><label>现代化程度：</label><span>是</span></li>
					<li><label>库存：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label>厂房面积：</label><span></span></li>
					<li><label>办公区工位数情况</label><span></span></li>
					<li><label>工位上是否有电话：</label><span>饭国防观</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="员工" name="8">
			    <ul class="headul">
					<li><label>是否开工中：</label><span>2017年11月15日</span></li>
					<li><label>是否统一着装：</label><span>是</span></li>
					<li><label>办公区工位数情况：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label>见到办公人数：</label><span></span></li>
					<li><label></label><span></span></li>
					<li><label>工位上是否有电话：</label><span>饭国防观</span></li>
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="口述企业状况" name="9">
			    <ul class="headul">
					<li><label>规模：</label><span>2017年11月15日</span></li>
					<li><label>经营年限：</label><span>是</span></li>
					<li><label>毛利[万元]：</label><span>给大家回家</span></li>
					<li><label>上下游供货方式：</label><span>给大家回家</span></li>
					<li><label>上下游结算周期：</label><span>给大家回家</span></li>
					<li><label>应收账款[万元]：</label><span>给大家回家</span></li>
					<li><label>贷款及抵押情况[万元]：</label><span>给大家回家</span></li>
					<li><label>其他说明：</label><span>给大家回家</span></li>
				</ul>
				<ul class="headul">
					<li><label></label><span></span></li>
					<li><label>年收支[万元]：</label><span></span></li>
					<li><label>纯利[万元]：</label><span></span></li>
					<li><label>上下游结算方式：</label><span>饭国防观</span></li>
					<li><label></label><span></span></li>
					<li><label>应付账款[万元]：</label><span>饭国防观</span></li>
					<li><label></label><span></span></li>
					<li><label>异常说明：</label><span></span></li>
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
	        activeNames: ['1','2','3','4','5','6','7','8','9']
	      };
	    },
	    methods:{
	    	handleChange(){

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
</style>