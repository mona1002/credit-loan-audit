<!-- 复议结论(经理06) -->
<template>
	<div  class="ReconsiderationConclusion">
		<div class="header">
	      <img src="/static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
	      <span class="headFont">概要信息</span>
	    </div>
	    <div class="main">
	    	<ul class="mainUl">
	    		<li><label>客户名称：</label><span>{{datas.custName}}</span></li>
	    		<li><label>证件类型：</label><span>{{datas.certTypeTxt}}</span></li>
	    		<li><label>产品名称：</label><span>{{datas.proName}}</span></li>
	    		<li><label>申请金额：</label><span>{{datas.loanAmt}}</span></li>
	    		<li><label>借款用途：</label><span>{{datas.loanPurposeTxt}}</span></li>
	    		<li><label>客户来源渠道：</label><span>{{datas.sourcesChanTxt}}</span></li>
	    		<li><label>进件机构：</label><span>{{datas.appOrgName}}</span></li>
	    	</ul>
	    	<ul class="mainUl secondUl">
	    		<li><label>申请类型：</label><span>{{datas.appTypeTxt}}</span></li>
	    		<li><label>证件号码：</label><span>{{datas.certCode}}</span></li>
	    		<li><label>最高月还款额：</label><span>{{datas.eachTermAmt}}</span></li>
	    		<li><label>申请期限：</label><span>{{datas.loanTerm}}</span></li>
	    		<li><label>借款用途说明：</label><span>{{datas.loanPurposeNote}}</span></li>
	    		<li><label>客户来源渠道说明：</label><span>{{datas.sourcesChanRemark}}</span></li>
	    		<li><label>直销人员：</label><span>{{datas.salPerName}}</span></li>
	    	</ul>
	    </div>
	    <div class="buttons">
	    	<el-button @click="coverFn('back')">
	    		<img src="/static/images/back.png">
	    		<label class="labelTxt">回退</label>
	    	</el-button>
	    	<el-button @click="coverFn('refuse')">
	    		<img src="/static/images/jujue.png">
	    		<label class="labelTxt">拒绝</label>
	    	</el-button>
	    	<el-button @click="shenpi">
	    		<img src="/static/images/back.png">
	    		<label class="labelTxt">审批</label>
	    	</el-button>
	    	<el-button @click="AntiFraudApplication">
	    		<img src="/static/images/faqi.png">
	    		<label class="labelTxt">反欺诈申请</label>
	    	</el-button>
	    	<el-button @click="getSpjlList">
	    		<img src="/static/images/jielun.png">
	    		<label class="labelTxt">审批流程轨迹</label>
	    	</el-button>
	    	<el-button @click="getLcgjList">
	    		<img src="/static/images/liucheng.png">
	    		<label class="labelTxt">流程轨迹</label>
	    	</el-button>
	    	<el-button @click="tobigData">
	    		<img src="/static/images/liucheng.png">
	    		<label class="labelTxt">大数据风控</label>
	    	</el-button>
	    	<el-button @click="roSocialSecurity">
	    		<img src="/static/images/liucheng.png">
	    		<label class="labelTxt">社保/公积金{{social}}</label>
	    	</el-button>
	    </div>
	    <!-- 回退 -->
	    <div class="huitui">
	    	<el-dialog
			  title='回退信息'
			  :visible.sync="dialogVisible"
			  width="860px"
			  top="20vh">
			  <div class="huituiBody">
			  	<p class="bodyP">
			  		<label><span>*</span>回退节点：</label>
			  		<el-select v-model="values" placeholder="请选择" @change="backNode">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				  	</el-select>
			  	</p>
			  	<p class="bodyP">
			  		<ul>
			  			<li>
			  				<label><span>*</span>主原因：</label>
					  		<el-select ref="mainReasonName" v-model="mainReasonName" placeholder="请选择" @change="mainReason($event,'mainback')">
							    <el-option
							      v-for="item in mainResions"
							      :key="item.id"
							      :label="item.reasonName"
							      :value="item.id">
							    </el-option>
						  	</el-select>
						  </li>
			  			<li>
			  				<label>子原因：</label>
					  		<el-select ref="subReasonName" v-model="subReasonName" placeholder="请选择">
							    <el-option
							      v-for="item in childReasons"
							      :key="item.id"
							      :label="item.reasonName"
							      :value="item.id">
							    </el-option>
						  	</el-select>
			  			</li>
			  		</ul>
			  		
			  	</p>
			  	<p class="bodyP bodyP2">
			  		<label><span>*</span>原因说明：</label>
			  		<el-input
					  type="textarea"
					  :rows="3"
					  resize='none'
					  placeholder="请输入内容"
					  v-model="reasonRemark">
					</el-input>
			  	</p>
			  	<p class="bodyP">
				  	<ul>
				  		<li><label>经办人：</label><span>{{dealroperCode}}</span></li>
				  		<li><label>经办时间：</label><span>{{dealroperDate | dateFilter}}</span></li>
				  	</ul>
				</p>
			  </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" :loading=huituiLoading @click="hsure">{{huituiFont}}</el-button>
			    <el-button type="primary" @click="dialogVisible = false">返回</el-button>
			  </span>
			</el-dialog>
	    </div>
	    <div class="huitui jujue">
	    	<el-dialog
			  title='拒绝原因'
			  :visible.sync="jdialogVisible"
			  width="860px"
			  top="20vh">
			  <div class="huituiBody">
			  	<p class="bodyP">
			  		<ul>
			  			<li>
			  				<label><span>*</span>主原因：</label>
					  		<el-select ref="rmainReasonName" v-model="rmainReasonName" placeholder="请选择" @change="mainReason($event,'mainrefuse')">
							    <el-option
							      v-for="item in rmainResions"
							      :key="item.id"
							      :label="item.reasonName"
							      :value="item.id">
							    </el-option>
						  	</el-select>
						  </li>
			  			<li>
			  				<label>子原因：</label>
					  		<el-select ref="rsubReasonName" v-model="rsubReasonName" placeholder="请选择">
							    <el-option
							      v-for="item in rchildReasons"
							      :key="item.id"
							      :label="item.reasonName"
							      :value="item.id">
							    </el-option>
						  	</el-select>
			  			</li>
			  		</ul>
			  		
			  	</p>
			  	<p class="bodyP bodyP2">
			  		<label><span>*</span>原因说明：</label>
			  		<el-input
					  type="textarea"
					  :rows="3"
					  resize='none'
					  placeholder="请输入内容"
					  v-model="rreasonRemark">
					</el-input>
			  	</p>
			  	<p class="bodyP">
				  	<ul>
				  		<li><label>经办人：</label><span>{{dealroperCode}}</span></li>
				  		<li><label>经办时间：</label><span>{{jdealroperDate | dateFilter}}</span></li>
				  	</ul>
				</p>
			  </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" :loading=jujueLoading @click="jSure">{{jujueFont}}</el-button>
			    <el-button type="primary" @click="jdialogVisible = false">返回</el-button>
			  </span>
			</el-dialog>
	    </div>
	    <div class="shenpi">
	    	<el-dialog
			  title='审批信息'
			  :visible.sync="sdialogVisible"
			  width="860px"
			  height="860px"
			  top="16vh">
			  <div class="shenpiBody">
			  	<el-collapse v-model="activeNames" @change="handleChange">
			  		<el-collapse-item title="申请信息" name="1">
			  			<div class="first">
			  				<ul>
			  					<li><label>申请金额[元]：</label><span>{{datas.loanAmt}}</span></li>
			  					<li><label>申请产品：</label><span>{{datas.proName}}</span></li>
			  					<li><label>信用评分：</label><span>{{creditScore}}</span></li>
			  				</ul>
			  				<ul>
			  					<li><label>申请期限[月]：</label><span> {{datas.loanTerm}}</span></li>
			  					<li><label>可接受最高每期还款额[元]：</label><span>{{datas.eachTermAmt}}</span></li>
			  					<li><label>申请类型：</label><span>{{datas.appTypeTxt}}</span></li>
			  				</ul>
			  			</div>
			  		</el-collapse-item>
			  		<el-collapse-item title="审批信息" name="2">
			  			<p class="sbodyP">
			  				<label>结论：</label>
			  				<el-radio v-model="applyConclusion" label="00">同意</el-radio>
			  			</p>
			  			<div class="sfirst">
			  				<ul>
			  					<li>
			  						<label><span>*</span>月核实收入[元]：</label>
			  						<el-input v-model="verIncome" @blur="moneyBlur(verIncome,'verIncome')">
			  							
			  						</el-input>
			  					</li>
			  					<li>
			  						<label><span>*</span>批准金额[元]：</label>
			  						<el-input v-model="ploanAmt" @blur="moneyBlur(ploanAmt,'ploanAmt')">
			  							
			  						</el-input>
			  					</li>
			  					<li>
			  						<label>审批倍数：</label>
			  						<span>{{caculData.appmult}}</span>
			  					</li>
			  					<li>
			  						<label>内部负债率：</label>
			  						<span>{{caculData.inteDebitrate}}</span>
			  					</li>
			  				</ul>
			  				<ul>
			  					<li>
			  						<label><span>*</span>批准产品：</label>
			  						<el-select v-model="proName" @change="proSlelecChange">
				  						<el-option
									      v-for="item in products"
									      :key="item.id"
									      :label="item.proName"
									      :value="item.id">
									    </el-option>
									</el-select>
								</li>
			  					<li>
			  						<label><span>*</span>批准期限[月]：</label>
			  						<el-select v-model="ploanTerm" @change="ploanTermChange">
				  						<el-option
									      v-for="item in ploanTerms"
									      :key="item.appDuration"
									      :label="item.appDuration"
									      :value="item">
									    </el-option>
									</el-select>
			  					</li>
			  					<li>
			  						<label>月还款额[元]：</label>
			  						<span>{{caculData.eachTermamt}}</span>
			  					</li>
			  					<li>
			  						<label>总负债率：</label>
			  						<span>{{caculData.totalRate}}</span>
			  					</li>
			  				</ul>
			  			</div>
			  			<p class="bodyP bodyP2">
			  				<label>意见说明：</label>
			  				<el-input
			  				  type="textarea"
							  :rows="3"
							  resize="none"
							  v-model="appConclusion">							  	
							</el-input>
					  	</p>
			  		</el-collapse-item>
			  		<el-collapse-item title="循环贷信息" name="3">
			  		</el-collapse-item>
			  	</el-collapse>
			  </div>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" :loading=shenpiLoading @click="spsure">{{shenpiFont}}</el-button>
			    <el-button type="primary" @click="sdialogVisible = false">返回</el-button>
			  </span>
			</el-dialog>
	    </div>
	    <!-- 审批流程轨迹 -->
	    <div class="shenpiliucheng">
	    	<el-dialog
			  title='复议审批轨迹'
			  :visible.sync="sldialogVisible"
			  width="860px"
			  top="20vh">
			  <div class="splcBody">
			  	<el-table
			      :data="tableData.recordList"
			      style="width: 100%"
			      height="296"
			      border>
			      <el-table-column
			        type="index"
			        label="序号"
			        min-width="50">
			      </el-table-column>
			      <el-table-column
			        prop="verIncome"
			        label="核实收入[元]"
			        min-width="120">
			      </el-table-column>
			      <el-table-column
			        prop="proName"
			        label="批准产品"
			        min-width="100">
			      </el-table-column>
			      <el-table-column
			        prop="ploanAmt"
			        label="批准金额[元]"
			        min-width="120">
			      </el-table-column>
			      <el-table-column
			        prop="ploanTerm"
			        label="批准期限[月]"
			        min-width="120">
			      </el-table-column>
			      <el-table-column
			        prop="appmult"
			        label="审批倍数"
			        min-width="100">
			      </el-table-column>
			      <el-table-column
			        prop="eachTermamt"
			        label="每期还款额[元]"
			        min-width="120">
			      </el-table-column>
			      <el-table-column
			        prop="inteDebitrate"
			        label="内部负债率"
			        min-width="120">
			      </el-table-column>
			      <el-table-column
			        prop="creditDebitRate"
			        label="总信用负债率"
			        min-width="120">
			      </el-table-column>
			      <el-table-column
			        prop="totalRate"
			        label="总负债率"
			        min-width="100">
			      </el-table-column>
			      <el-table-column
			        prop="appConclusion"
			        label="审批结论"
			        min-width="200">
			      </el-table-column>
			      <el-table-column
			        prop="auditDate"
			        label="审批时间"
			        min-width="180">
			      </el-table-column>
			    </el-table>
			    <div class="page">
					<el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage"
				      :page-sizes="[5, 10, 20, 30]"
				      :page-size=setPageSize
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="tableData.totalRecord">
				    </el-pagination>
			    </div>
			  </div>
			</el-dialog>
	    </div>
	    <!-- 流程轨迹 -->
	    <div class="liuchenggj">
	    	<el-dialog
			  title='流程轨迹'
			  :visible.sync="lcdialogVisible"
			  width="860px"
			  top="20vh">
			  <div class="splcBody">
			  	<!-- <el-collapse v-model="activeNames2" @change="handleChange">
			  		<el-collapse-item title="信审流程轨迹" name="1"> -->
	  			<div class="first">
	  				<el-table
				      :data="lcgjData"
				      style="width: 100%"
				      height="296"
				      border>
				      <el-table-column
				        type="index"
				        label="序号"
				        min-width="50">
				      </el-table-column>
				      <el-table-column
				        prop="taskNameTxt"
				        label="任务节点"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="taskTypeTxt"
				        label="任务类型"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="activationTime"
				        label="进入本环节时间"
				        min-width="180">
				      </el-table-column>
				      <el-table-column
				        prop="taskStatusTxt"
				        label="任务状态"
				        min-width="100">
				      </el-table-column>
				      <el-table-column
				        prop="operatorCode"
				        label="处理人"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="completeTime"
				        label="处理时间"
				        min-width="180">
				      </el-table-column>
				      <el-table-column
				        prop="approvalOpinionTxt"
				        label="处理结论"
				        min-width="120">
				      </el-table-column>
				      <el-table-column
				        prop="opinionExplain"
				        label="意见说明"
				        min-width="200"
				        show-overflow-tooltip>
				      </el-table-column>
				    </el-table>
	  			</div>
			  		<!-- </el-collapse-item>
			  					  	</el-collapse> -->
			  </div>
			   <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="lcdialogVisible = false">返回</el-button>
			  </span>
			</el-dialog>
	    </div>
	    <!-- 大数据风控 -->
	    <div class="bigDataLog">
			<el-dialog
			  title="提示"
			  :visible.sync="bigDataLogVisible"
			  width="420px"
			  top="35vh">
			  <span>此进件不存在大数据风控明细！</span>
			  <span slot="footer" class="dialog-footer">
			  	<el-button type="primary" @click="infoSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
		<!-- 社保公积金 -->
	    <div class="bigDataLog">
			<el-dialog
			  title="提示"
			  :visible.sync="socialLogVisible"
			  width="420px"
			  top="35vh">
			  <span>客户社保公积金未授权！</span>
			  <span slot="footer" class="dialog-footer">
			  	<el-button type="primary" @click="socialSure">确定</el-button>
			  </span>
			</el-dialog>
		</div>
	</div>
</template>
<script type="text/javascript">
  import baseurl from '../../../util/ConstantSocialAndPn';
  //import baseU from'../../../util/constant';
  export default {
    data() {
      return {
        creditDebitRate:null,//信用负债率
        //申请单ID
        id: '',
        //初始化的页面数据
        datas: '',
        dialogVisible: false,
        jdialogVisible: false,
        sdialogVisible: false,
        sldialogVisible: false,
        lcdialogVisible: false,
        //回退节点
        values: '',
        //主原因
        mainReasonName: '',
        mainResions: [],
        //子原因
        subReasonName: '',
        childReasons: [],
        //拒绝主原因
        rmainReasonName: '',
        rmainResions: [],
        //拒绝子原因
        rsubReasonName: '',
        rchildReasons: [],
        options: [{
          value: 'reconsiderApp_commissioner',
          label: '复议专员审批'
        }],
        //经办时间
        dealroperDate: '',
        jdealroperDate: '',
        //原因说明
        reasonRemark: '',
        rreasonRemark: '',
        //经办人
        dealroperCode: '',
        activeNames: ['1', '2'],
        applyConclusion: '00',
        caculData: {}, // 审批结论数据
        applicationInformationDetail: '', // 申请详情传过来的数据
        applyId: '',
        sproId: '', // 审批 proId
        appOrgId: '', //进件ID

        //审批
        creditScore: '', // 单独处理的评分
        verIncome: '', // 核实收入
        ploanAmt: '', // 批准金额
        ploanTerm: '', // 批准期限
        products: [],
        proName: '', //批准产品
        appConclusion: '', //意见说明
        proId: '', // 产品id(通过 批准产品 获取 批准期限[月])
        ploanTerms: [], //批准期限[月]
        maxAmounnt: 0, // 产品最大金额
        minAmount: 0, // 产品最小金额
        synthesisRateM: '', // 审批 - 计算审批结论数据 - 综合费率
        loanRateYr: '', // 审批 - 计算审批结论数据 - 借款利率
        repayWay: '', // 审批  计算审批结论数据  还款方式

        //审批流程轨迹
        tableData: {},
        currentPage: 1, // 默认显示的当前页
        setPageSize: 10,

        //流程轨迹
        activeNames2: ['1'],
        lcgjData: [],
        processTemplateId: '',

        taskId: '', //任务id
        custNo: '', // 客户code 空
        emerType: '', // 紧急程度 空
        appOrgCode: '', // 门店代码 空
        proCode: '',
        applyCustId: '',
        processInstanceId: '', //流程实例id
        bigDataLogVisible: false, //大数据风控弹框
        socialLogVisible: false, //社保公积金
        social: '', //社保公积金 已绑定 未绑定
        orgId: '',
        huituiFont: '提交',
        huituiLoading: false,
        jujueLoading: false,
        jujueFont: '提交',
        shenpiLoading: false,
        shenpiFont: '提交',
         nodeName: '',
        routeParams: '',
      }
    },
    mounted() {
      //申请单ID
      this.id = JSON.parse(localStorage.getItem('RtaskInWaitting')).applyId;
      this.request();

      //经办人
      this.dealroperCode = JSON.parse(localStorage.getItem('userInf')).userCode;
      this.applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));

      //登陆人id
      this.orgId = JSON.parse(localStorage.getItem('userInf')).orgId;

      this.applyId = this.applicationInformationDetail.applyId;
      //console.log(this.applyId);
      this.appOrgId = this.applicationInformationDetail.appOrgId;
      //console.log(this.appOrgId);
      // 客户编号
      this.custNo = this.applicationInformationDetail.custNo;
      //产品id
      this.sproId = this.applicationInformationDetail.proId;
      //流程模版ID
      this.processTemplateId = JSON.parse(localStorage.getItem('ReWorkbenchPass')).processTemplateId;
      //流程实例id
      this.processInstanceId = JSON.parse(localStorage.getItem('RtaskInWaitting')).processInstanceId;
      //任务id
      this.taskId = JSON.parse(localStorage.getItem('RtaskInWaitting')).taskId;
      this.proCode = this.applicationInformationDetail.proCode;
      this.appOrgCode = this.applicationInformationDetail.appOrgCode;
      this.applyCustId = this.applicationInformationDetail.applyCustId;
      this.certType = this.applicationInformationDetail.certType;
    },
    methods: {
      request() {
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailMsg", {
          'id': this.id
        }).then(res => {
          if (res.statusCode == '200') {
            this.datas = res.data;
            this.datas.eachTermAmt = this.formatNumber(this.datas.eachTermAmt, 2, 0);
            this.datas.loanAmt = this.formatNumber(this.datas.loanAmt, 2, 0);
            this.Social();
          }
        })
      },
       GoPath(){
        this.$router.push( '/reconsiderList?taskNodeName=reconsiderApp_manager');
        //  this.$store.dispatch('addVisitedViews', {
        //   name: '复议经理审批',
        //   path: '/reconsiderList',
        //   flag: '06',
        //   params: '?taskNodeName=reconsiderApp_manager',    
        //   StatefullPath: '/reconsiderList?taskNodeName=reconsiderApp_manager'
        // })
       },
      //保留两位小数 整数千分位
      formatNumber(num, cent, isThousand) {
        num = num.toString().replace(/\$|\,/g, '');

        // 检查传入数值为数值类型
        if (isNaN(num))
          num = "0";

        // 获取符号(正/负数)
        let sign = (num == (num = Math.abs(num)));

        num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
        let cents = num % Math.pow(10, cent); // 求出小数位数值
        num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
        cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度

        // 补足小数位到指定的位数
        while (cents.length < cent)
          cents = "0" + cents;

        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));

        if (cent > 0) {
          //console.log(cent);
          //console.log(((sign)?'':'-') + num + '.' + cents);
          if (sign == true) {
            return (((sign) ? '' : '-') + num + '.' + cents);
          } else if (sign == false) {
            return '0.00'
          }
        } else {
          //console.log(((sign)?'':'-') + num);
          return (((sign) ? '' : '-') + num);
        }
      },
      //回退:back、拒绝:refuse
      coverFn(flag) {
        switch (flag) {
          case 'back':
            //this.huituiLoading = false;
            this.huituiFont = '提交';
            this.dialogVisible = true;
            this.get('system/getSystemDate').then(res => {
              //console.log('回退', res)
              // 请求系统时间
              this.dealroperDate = res.data;
              //console.log('this.', this.dealroperDate);
            })
            break;
          case 'refuse':
            this.jujueLoading = false;
            this.jujueFont = '提交';
            this.jdialogVisible = true;
            this.get('system/getSystemDate').then(res => {
              //console.log('回退', res)
              // 请求系统时间
              this.jdealroperDate = res.data;
              //console.log('this.', this.jdealroperDate);
            });
            this.get('/credit/firstNodeReason?reasonType=03').then(res => {
              console.log(res);
              if (res.statusCode == '200') {
                this.rmainResions = res.data;
              }
            });
            break;
        }
      },
      //审批
      shenpi() {
        this.shenpiLoading = false;
        this.shenpiFont = '提交';
        this.sdialogVisible = true;
        //请求评分
        this.post('/credit/quotaScoring', {
          applyId: this.applyId,
          proId: this.sproId,
          appOrgId: this.appOrgId
        }).then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.quotaData = res.data;
            // 单独处理 评分   =>  "评分:51.6"
            //console.log(res.data.creditScore);
            this.creditScore = res.data.creditScore.split(',')[0].substr(3, 4);
            //console.log(this.creditScore);
            //this.sdialogVisible = true;
          } else if (res.statusCode == '700') {
            this.$message({
              message: res.msg,
              type: 'error'
            });
            //this.sdialogVisible = false; 
          }
        });
        //请求产品
        /*this.post(baseU.path+'/remote/product/getProductForUser',{

		           data:{
		              orgId:this.orgId,
		              validFlag:'1'
		           }
		          }).then(res => {
		          	if(res.statusCode == 200){
						this.products = res.data;
					}else {
			            this.$message.error(res.msg);
			          }
	            });*/
	            this.post("/credit/product").then(res => {
					if(res.statusCode == 200){
						this.products = res.data;
						//请求复议专员带过来的审批信息
			        this.post('/creauditOpinion/queryCreauditOpinionObj',{
			        	applyId: this.applyId
				        }).then(res => {
				        	console.log(res.data);
				        	if(res.statusCode == 200){
				        		//批准期限[月]
				        		if(res.data.ploanTerm){
				        			this.ploanTerm = res.data.ploanTerm;
				        		}else{
				        			this.ploanTerm = this.ploanTerm;
				        		};
				        		// 批准产品
				        		if(res.data.proId){
				        			//alert('lll');
				        			this.proId = res.data.proId;
					        		for(var i=0;i<this.products.length;i++){
					        			if(res.data.proId == this.products[i].id){
					        			this.proName = this.products[i].proName;
					        				this.maxAmounnt = this.products[i].maxAmounnt;
					        				this.minAmount = this.products[i].minAmount;
					        			}
					        		};
					        		//批准期限[月]的列表
					        		/*this.post('/credit/ploanTermByPro',{proId : res.data.proId}).then(res => {*/
				        			this.post('/credit/ploanTermByPro?proId='+res.data.proId).then(res => {
								        console.log(res.data);
								        if (res.statusCode == '200')
								          this.ploanTerms = res.data;
								    });
				        		}else{
				        			this.proName = this.proName;
				        		};

				        		// 核实收入
				        		if(res.data.verIncome){
				        			this.verIncome = this.formatNumber(res.data.verIncome,2,0);
				        		}else{
				        			this.verIncome = this.verIncome;
				        		};
				        		// 批准金额
				        		if(res.data.ploanAmt){
				        			this.ploanAmt = this.formatNumber(res.data.ploanAmt,2,0);
				        		}else{
				        			this.ploanAmt = this.ploanAmt;
				        		};

						        //审批结论数据
						        //审批倍数
						        if(res.data.appmult){
						        	this.caculData.appmult = this.formatNumber(res.data.appmult,2,0);
						        };
						        //内部负债率
						        if(res.data.inteDebitrate){
						        	this.caculData.inteDebitrate = (res.data.inteDebitrate*100).toFixed(2)+"%";
						        };
						        //总负债率
						        if(res.data.totalRate){
						        	this.caculData.totalRate = (res.data.totalRate*100).toFixed(2)+"%";
						        };
						        //月还款额
						        if(res.data.eachTermamt){
						        	this.caculData.eachTermamt = this.formatNumber(res.data.eachTermamt,2,0);
						        };
						        //意见说明
						        this.appConclusion = res.data.appConclusion;
				        	}
				        })
					};
				});
			},
			//审批提交按钮
		    spsure(){
		      // 月核实收入
	          if (!this.verIncome) {
	            this.$message({
	              message: "提示：请填写月核实收入!",
	              type: 'warning'
	            });
	            return;
	          }
	          // 批准产品 id
	          if (!this.proId) {
	            this.$message({
	              message: "提示：请选择批准产品!",
	              type: 'warning'
	            });
	            return;
	          }
	          // 批准期限
	          if (!this.ploanTerm) {
	            this.$message({
	              message: "提示：请选择批准期限!",
	              type: 'warning'
	            });
	            return;
	          }
	          // 批准金额 ploanAmt
	          if (!this.ploanAmt) {
	            this.$message({
	              message: "提示：请填写批准金额!",
	              type: 'warning'
	            })
	            return;
	          }
	          // 意见说明 appConclusion
	          if (!this.appConclusion) {
	            this.$message({
	              message: "提示：请填写意见说明!",
	              type: 'warning'
	            })
	            return;
	          };
	        	//按钮加“加载中”
	            this.shenpiLoading = true;
				this.shenpiFont = '提交中';
				//this.sdialogVisible = false; 

	           var reg = /,/;

	           this.post('/creauditOpinion/add', {
		        applyId: this.applyId,
		        auditType: '02',
		        proCode: this.proCode,//产品编号
		        verIncome: this.verIncome.replace(reg,'')*1,//核实收入[元]
		        ploanAmt: this.ploanAmt.replace(reg,'')*1,//批准金额[元]
		        ploanTerm: this.caculData.ploanTerm, //批准期限
		        appmult: this.caculData.appmult*1, // 审批倍数
		        eachTermamt: this.caculData.eachTermamt.replace(reg,'')*1, //每期还款额[元]
		        inteDebitrate: (this.caculData.inteDebitrate == 0 || this.caculData.inteDebitrate == '') ? 0 : this.caculData.inteDebitrate.replace("%","")/100, //内部负债率
		        totalRate: (this.caculData.totalRate == 0 || this.caculData.totalRate == '') ? 0 : this.caculData.totalRate.replace("%","")/100, // 总负债率
		        appConclusion: this.appConclusion,//审批结论内容（文本框）
		        newOldMainnos: '', //借新还旧进件编号集合
		        applyMainNo: '', //主进件编号
		        applySubNo: this.datas.applySubNo, //从进件编号
		        appOrgId: this.appOrgId, //进件机构ID
		        appOrgCode: this.appOrgCode, //进件机构代码
		        applyType: '', //申请类型[“00”:”非循环贷”,”01”:”循环贷(借新还旧)”,”02”:”循环贷(非借新还旧)”]
		        custId: '', //客户ID
		        custNo: this.custNo, //客户编号
		        applyCustId: this.applyCustId, //申请客户ID（申请登记-个人信息）
		        applyConclusion: this.applyConclusion,//申请结论（00-通过）
		        ploanOperId: '', // 批准人员
		        creditDebitRate: (this.caculData.creditDebitRate == 0 || this.caculData.creditDebitRate == '') ? 0 : this.caculData.creditDebitRate.replace("%","")/100, // 信用负债率
		        approvalFlag: '0', // 终审通过标志  0 未
		        ploanDate: '', // 批准日期
		        auditDate: '', // 批准时间
		        auditFlag: '1', // 终审结束标识 0 初审 1终审 , 只有 终审 点审批的时候 才变为1 , 同 approvalFlag 字段
		        proId: this.proId, //产品id
		        taskId: this.taskId, // 任务id
		        opinionFlag:'00', // 任务类型  初审 00 
		        busiState:'21'//复议审批
		      }).then(res => {
		      	this.sdialogVisible = false; 
		        if (res.statusCode != '200') {
		          	this.$message({
			            message: res.msg,
			            type: 'warning'
			          })
		          	return;
		        };
		        if (res.statusCode == '200') {
			          this.$message({
			            message: res.msg,
			            type: 'success'
			          })
			          this.$router.push('/reconsiderList');
			    };
		      })
	          
		    },
		    // 月核实收入[元]
		    moneyBlur: function(val, flag) {
		    	switch (flag) {
		            case 'verIncome':
		            	if(!this.verIncome){
		            		 this.verIncome = this.formatNumber('0',2,0);
		            		 console.log(this.verIncome);
		            		}else if( this.verIncome){
		            			this.verIncome =this.formatNumber(this.verIncome,2,0);
		            			if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.repayWay && this.synthesisRateM && this.loanRateYr) {
					            this.calculateByAuditInfo();
					          };
		            		}
		                break;
		            case 'ploanAmt':
		            	if(!this.ploanAmt){
		            		this.ploanAmt = this.formatNumber('0',2,0);
		            	}else if(this.ploanAmt){
		            		//console.log(this.ploanAmt*1);
		            		//console.log(typeof(this.ploanAmt*1));
		            		//console.log("$$$$$"+this.maxAmounnt);
		            		//console.log(typeof(this.maxAmounnt));
		            		 // 大于最大
					        if (this.ploanAmt*1 > this.maxAmounnt) {
					          // this.ploanAmtError = true;
					          this.$message({
					            /*showClose: true,*/
					            message: '批准金额不能大于产品最高上限' + this.maxAmounnt + '元',
					            type: 'warning'
					          });
					          this.ploanAmt = '';
					          return;
					        };
					        // 小于最小
					        if (this.ploanAmt*1 < this.minAmount) {
					          // this.ploanAmtError = true;
					          this.$message({
					            /*showClose: true,*/
					            message: '批准金额不能小于产品最低下限' + this.minAmount + '元',
					            type: 'warning'
					          });
					          this.ploanAmt = '';
					          return;
					        };
					        // 大于申请金额
					        if (this.ploanAmt*1 > this.datas.loanAmt) {
					          // this.ploanAmtError = true;
					          this.$message({
					            /*showClose: true,*/
					            message: '此金额不能大于申请金额,请重新输入!',
					            type: 'warning'
					          });
					          this.ploanAmt = '';
					          return;
					        };
					        this.ploanAmt =this.formatNumber(this.ploanAmt,2,0);
					        if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.repayWay && this.synthesisRateM && this.loanRateYr) {
					            this.calculateByAuditInfo();
					          };
				        }
				        break;
				}

		          // return Number(val).toLocaleString() + '.00';
		          // 检测 数据 并 请求计算接口
		          //console.log("计算审批结论数据计算审批结论数据计算审批结论数据计算审批结论数据")
		          //console.log(this.proId, this.ploanTerm, this.ploanAmt, this.verIncome, this.eachTermamt);
		          //console.log(this.proId.length, this.ploanTerm.length, this.ploanAmt.length, this.verIncome.length, this.eachTermamt.length);
		    },
			//根据产品 请求 月份数
			proSlelecChange(val){
				//批准金额、批准期限清空
				this.ploanAmt = '';
				this.ploanTerm = '';
				//审批倍数、月还款额、内部负债率、总负债率 清空
				this.caculData.appmult = '';
				this.caculData.inteDebitrate = '';
				this.caculData.totalRate = '';
				this.caculData.eachTermamt = '';

				console.log(val);
				this.proId = val;
				//console.log(this.products);
				//console.log(this.products.length);
				for(var i=0;i<this.products.length;i++){
					if(this.products[i].id==val){
						// 最大金额
				      	this.maxAmounnt = this.products[i].maxAmounnt;
				      	// 最小金额
				      	this.minAmount = this.products[i].minAmount;
					}
				}
				// 最大金额
		      	//this.maxAmounnt = val.maxAmounnt;
		      	// 最小金额
		      	//this.minAmount = val.minAmount;
		      	console.log(this.maxAmounnt+"#########"+this.minAmount);
				/*this.post('/credit/ploanTermByPro',{proId : this.proId}).then(res => {*/
				this.post('/credit/ploanTermByPro?proId='+this.proId).then(res => {
			        //console.log(res.data);
			        if (res.statusCode == '200')
			          this.ploanTerms = res.data;
			      });
			},
			// 批准期限更改
		    ploanTermChange: function(val) {
		      console.log('批准期限更改!');
		      console.log(val);
		      // 批准期限
		      this.ploanTerm = val.appDuration;
		      // 综合费率
		      this.synthesisRateM = val.synthesisRateM;
		      // 借款利率
		      this.loanRateYr = val.loanRateYr;
		      // 还款方式  
		      this.repayWay = val.repayWay;
		    },
			// 计算审批结论数据
		    calculateByAuditInfo() {
		      var reg = /,/;
		      this.post('/creauditOpinion/calculateByAuditInfo', {
		        applyId: this.applyId,//申请单ID
		        proId: this.proId,//产品ID
		        ploanTerm: this.ploanTerm,//批准期限
		        ploanAmt: this.ploanAmt.replace(reg,'')*1,//批准金额[元]
		        verIncome: this.verIncome.replace(reg,'')*1,//核实收入[元]
		        eachTermamt: this.datas.eachTermAmt.replace(reg,'')*1,//每期还款额[元]
		        repayWay: this.repayWay, // 还款方式
		        synthesisRateM: this.synthesisRateM, // 综合费率 
		        loanRateYr: this.loanRateYr, // 借款利率
		      }).then(res => {
		        // 审批结论数据
		        if (res.statusCode == '200')
		          	this.caculData = res.data;
		      		this.caculData.appmult = this.formatNumber(this.caculData.appmult,2,0);//审批倍数
		      		this.caculData.eachTermamt = this.formatNumber(this.caculData.eachTermamt,2,0);//月还款额
		      		this.caculData.inteDebitrate = (this.caculData.inteDebitrate*100).toFixed(2)+"%";//内部负债率
		      		this.caculData.totalRate = (this.caculData.totalRate*100).toFixed(2)+"%";//总负债率
		      	  //console.log(this.caculData.inteDebitrate*100);
		      	  //console.log(this.caculData.totalRate*100);
		      })
		    },
		    //拒绝提交按钮
			jSure(){
				//console.log(this.rmainReasonName);
				//console.log(this.$refs.rmainReasonName);
				//console.log(this.$refs.rmainReasonName.selectedLabel);
				//console.log(this.$refs.rmainReasonName.selectedLabel);
				this.jujueLoading = true;
				this.jujueFont = '提交中';
				//this.jdialogVisible = false;
				this.post("/creauditOpinion/approval", {
		        // 挂起 taskId 任务id
		        taskId: this.taskId,
		        processInstanceId:this.processInstanceId,//流程实例ID
		        custName: this.datas.custName, // 客户名称
		        custNo: this.custNo, // 客户code
		        certType: this.certType, // 证件类型
		        certCode: this.datas.certCode, // 证件号码
		        emerType: this.emerType, // 紧急程度
		        appOrgCode: this.appOrgCode, // 门店代码
		        proName: this.datas.proName, // 产品名称
		        proCode: this.proCode, //  产品代码
		        proId: this.sproId, // 产品id     //"d7fa0628-791d-4cc5-b854-aa8bef9340a6"
		        opinionFlag: '01', // 标志任务类型(复议经理 拒绝)
		        mainReasonName: this.$refs.rmainReasonName.selectedLabel, // 拒绝主原因
		        subReasonName: this.$refs.rsubReasonName.selectedLabel, // 拒绝次原因
		        reasonRemark: this.rreasonRemark, // 意见描述/原因说明
		        appOrgId: this.appOrgId, // 进件机构id
		        applyId: this.applyId, // 申请单id
		        rollbackNodeName: '', // 回退节点名称(没有回退节点) 
		        dealroperDate: this.jdealroperDate, // 经办时间
		        creauditAppOperate: '01', // 复议经理 拒绝creauditAppOperate: 'check_Refuse'
		        busiState:'22',//复议审批中（回退）
		        dealroperCode:this.dealroperCode,//经办人
		        applySubNo:this.datas.applySubNo,//复议申请单ID
		      }).then(res => {
		      	this.jdialogVisible = false;
		        console.log(res);
		        if (res.statusCode != '200') {
		          this.$message({
		            message: res.msg,
		            type: 'warning'
		          })
		          return;
		        }
		        if (res.statusCode == '200') {
		          // this.taskId = '';
		          this.datas.custName = ''; // 客户名称
		          this.custNo = ''; // 客户code
		          this.datas.certTypeTxt = ''; // 证件类型
			      this.datas.certCode = ''; // 证件号码
		          this.emerType = ''; // 紧急程度
		          this.appOrgCode, // 门店代码
		          this.datas.proName, // 产品名称
		          this.proId = ''; // 产品id
		          this.opinionFlag = ''; // 标志任务类型
		          this.mainReason = ''; // 回退主原因
		          this.secondaryReason = ''; // 回退子原因
		          this.rreasonRemark = ''; // 意见描述/原因说明
		          this.appOrgId = ''; // 进件机构id
		          this.rollbackNodeName = ''; // 回退节点名称
		          this.dealroperDate = ''; // 经办时间
		          this.dealroperCode = '';//经办人
		          this.creauditAppOperate = ''; // 操作类型

		          this.$message({
		            message: res.msg,
		            type: 'success'
		          })

		          this.$router.push('/reconsiderList');
		        }
		      });
			},
			//回退提交按钮
			hsure(){
				//console.log(this.mainReasonName);
				//console.log(this.$refs.mainReasonName);
				//console.log(this.$refs.mainReasonName.selectedLabel);
				//console.log(this.values);
				this.huituiLoading = true;
				this.huituiFont = '提交中';
				//this.dialogVisible = false;
				this.post("/creauditOpinion/approval", {
			        // 挂起 taskId 任务id
			        taskId: this.taskId,
			        processInstanceId:this.processInstanceId,//流程实例ID
			        custName: this.datas.custName, // 客户名称
			        custNo: this.custNo, // 客户code
			        certType: this.certType, // 证件类型
			        certCode: this.datas.certCode, // 证件号码
			        emerType: this.emerType, // 紧急程度
			        appOrgCode: this.appOrgCode, // 门店代码
			        proName: this.datas.proName, // 产品名称
			        proCode: this.proCode, //  产品代码
			        proId: this.sproId, // 产品id     //"d7fa0628-791d-4cc5-b854-aa8bef9340a6"
			        opinionFlag: '02', // 标志任务类型(复议经理 回退)
			        mainReasonName: this.$refs.mainReasonName.selectedLabel, // 回退主原因
			        subReasonName: this.$refs.subReasonName.selectedLabel, // 回退子原因
			        reasonRemark: this.reasonRemark, // 意见描述/原因说明
			        appOrgId: this.appOrgId, // 进件机构id
			        applyId: this.applyId, // 申请单id
			        rollbackNodeName: 'reconsiderApp_commissioner', // 回退节点名称 this.values
			        dealroperDate: this.dealroperDate, // 经办时间
			        creauditAppOperate: '02',//check_Back
			        busiState:'20',//复议审批中（回退） // 复议经理 回退
			        applySubNo:this.datas.applySubNo,//复议申请单ID
		        	dealroperCode:this.dealroperCode,//经办人
			      }).then(res => {
			      	this.dialogVisible = false;
			        console.log(res);
			        if (res.statusCode != '200') {
			          this.$message({
			            message: res.msg,
			            type: 'warning'
			          })
			          return;
			        }
			        if (res.statusCode == '200') {
			          // this.taskId = '';
			          this.datas.custName = ''; // 客户名称
			          this.custNo = ''; // 客户code
			          this.datas.certTypeTxt = ''; // 证件类型
			          this.datas.certCode = ''; // 证件号码
			          this.emerType = ''; // 紧急程度
			          this.appOrgCode = ''; // 门店代码
			          this.proCode = ''; //  产品代码
			          this.proId = ''; // 产品id
			          this.opinionFlag = ''; // 标志任务类型
			          this.mainReason = ''; // 回退主原因
			          this.secondaryReason = ''; // 回退子原因
			          this.reasonRemark = ''; // 意见描述/原因说明
			          this.appOrgId = ''; // 进件机构id
			          this.rollbackNodeName = ''; // 回退节点名称
			          this.dealroperDate = ''; // 经办时间
			          this.dealroperCode = '';//经办人
			          this.creauditAppOperate = ''; // 操作类型

			          this.$message({
			            message: res.msg,
			            type: 'success'
			          })

			          this.$router.push('/reconsiderList');
			        }
			      });
			},
			//回退节点
			backNode(){
				this.get('/credit/firstNodeReason?reasonType=01').then(res => {
		          console.log(res);
		          if (res.statusCode == '200') {
		            this.mainResions = res.data;
		          }
    			})
			},
			//主原因
			mainReason($event,flag){
				//"mainback":回退
				//"mainrefuse":拒绝
				if(flag == 'mainback'){
					//console.log('回退555'+$event);
					this.get('/credit/findNodeFirstChildren?id=' + $event).then(res => {
			          //console.log('回退'+res);
			          if (res.statusCode == '200') {
			            this.childReasons = res.data;
			          }
	    			})
				}else if(flag == 'mainrefuse'){
					console.log('拒绝'+$event);
					this.get('/credit/findNodeFirstChildren?id=' + $event).then(res => {
			          console.log(res);
			          if (res.statusCode == '200') {
			            this.rchildReasons = res.data;
			          }
	    			})
				}
			},
			//子原因
			childReason(){

			},
			handleChange(){

			},
			//分页
			handleSizeChange(val) {
		      console.log('每页 ${val} 条');
		      /*this.queryParam.pageSize = val;
		      this.queryParam.pageNum = 1;
		      if (this.currentPage !== 1 || this.setPageSize !== 10) {
		        this.currentPage = 1;
		        this.setPageSize = 10;
		      } else {
		        this.request(this.queryParam);
		      };*/
		    },
		    handleCurrentChange(val) {
		      console.log('当前页: ${val}');
		      /*this.queryParam.pageNum = val;
      		  this.request(this.queryParam);*/
		    },
		    //反欺诈申请
		    AntiFraudApplication(){
		    	this.$router.push({
		            name: 'AntiApplyEditf',
		            params: {
		              id: this.applyId,
		              flag: 'fuyi',
		              busiState:'20'
		            }
		          });
		    },
		    // 审批结论轨迹
		    getSpjlList() {
		      this.sldialogVisible = true;
		      this.post('/creauditOpinion/queryByPage', {
		        applyId: this.applyId,
		        pageNum: this.pageNum, // 页码
		        pageSize: this.pageSize // 每页条数
		      }).then(res => {
		        console.log('审批结论轨迹');
		        console.log(res);
		        if (res.statusCode == '200') {
		          this.loading = false;
		          this.tableData = res.data;
		        } else {
		          this.$message(res.msg);
		        }

		      })
		    },
		    // 流程轨迹
		    getLcgjList() {
  			  this.lcdialogVisible = true;
		      this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processInstanceId)
		        .then(res => {
		          console.log(res);
		          if (res.statusCode == '200') {
		            this.lcgjData = res.data;
		          } else {
		            this.$message(res.msg);
		          }
		        })
		    },
		    //大数据风控
		    tobigData(){
		    	this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
		        	applyId: this.applyId
			    }).then(res => {
			      	//console.log(res.data);
			      	if(res.obj == null){
			      		this.bigDataLogVisible = true;
			      	}else if(res.obj){
			      		this.$router.push({path:'/PneCtrl'});
			      	}
			    });
		    },
		    //大数据风控 提示弹框关闭
			infoSure(){
				this.bigDataLogVisible = false;
			},
		    //社保/公积金
		    Social(){
		    	this.post(baseurl.BaseUrl + '/rmMxSecFundQryAction!notSession_getLatestSuccRisQuery.action',{
					certCode:this.datas.certCode,
					custName:this.datas.custName
				}).then(res =>{
					if(res.obj == null || res.obj == ''){
			      		this.social = "(未授权)";
			      	}else if(res.obj){
			      		this.social = "(已授权)";
			      	}
				});
		    },
			roSocialSecurity(){
				if(this.social == "(未授权)"){
					this.socialLogVisible = true;
				}else if(this.social == "(已授权)"){
					this.$router.push({path:'/SocialSe'});
				}
			},
			//社保公积金 弹窗关闭
			socialSure(){
				this.socialLogVisible = false;
			},
		    
		},
		watch:{
			//审批 计算 审批倍数 等
			ploanTerm: function() {
		      console.log('批准期限');
		      //console.log(this.verIncome+'###'+this.proId.length+'###'+this.ploanTerm+"###"+this.ploanAmt);
		      // 计算 审批记录数据
		      if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.repayWay && this.synthesisRateM && this.loanRateYr){
		      	console.log(1111);
		      	this.calculateByAuditInfo();
		      }
		    },
		    // 产品 id
		    proId: function() {
		      console.log('产品id');
		      console.log(this.proId.length);
		      console.log(this.verIncome+'###'+this.proId.length+'###'+this.ploanTerm+"###"+this.ploanAmt);
		      //月核实收入+产品id+批准期限+批准金额[元]
		      if (this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.verIncome.length > 0 && this.repayWay && this.synthesisRateM && this.loanRateYr)
		        this.calculateByAuditInfo();
		    },
		}
	}
</script>
<style scoped>
	.ReconsiderationConclusion{
		width: 100%;
		min-width: 1327px;
		height: 100%;
		font-size: 14px;
	}
	.ReconsiderationConclusion .header{
		width: 100%;
	    height: 40px;
	    font-size: 16px;
	    background: #eef0f9;
	    line-height: 40px;
	    padding-left: 10px;
	    display: block;
	    margin-bottom: 10px;
	    overflow: hidden;
	}
	.ReconsiderationConclusion .header .icon_hat{
		padding: 9px 10px 10px 13px;
    	vertical-align: middle;
	}
	.main{
		width: 100%;
		height: 290px;
	}
	.main ul.mainUl{
		width: 40%;
		float: left;
	}
	.main ul.secondUl{
		width: 60%;
		text-align: left;
	}
	.main ul.mainUl li{
		width: 100%;
		height: 36px;
		line-height: 36px;
		padding-left: 150px;
	}
	.main ul.mainUl li label{
		display: inline-block;
		width: 130px;
		text-align: right;
	}
	.main ul.mainUl li span{
		text-align: left;
		display: inline-block;
	}
	.buttons{
		width: 80%;
		text-align: center;
	}
	.buttons button{
		border:none;
	}
	.buttons button span{
		display: inline-block;
    	height: 30px;
	}
	.buttons .labelTxt{
		font-size: 14px;
		color: #475669;
		position: relative;
		top: -10px;
	}
	.buttons img{
		width: 30px;
		height: 30px;
	}
	.bodyP{
		margin-bottom: 15px;
		height: 35px;
	}
	.bodyP label{
		display: inline-block;
		width: 100px;
		text-align: right;
	}
	.bodyP label span{
		color: #ff7676;
		font-size: 16px;
		position: relative;
		top: 4px;
		padding-right: 2px;
	}
	.bodyP li{
		float: left;
		width: 50%;
	}
	.huituiBody  .bodyP2{
		padding-right: calc( 50% - 305px );
		height: 75px;
	}
	.shenpi  .bodyP2{
		padding-right: calc( 50% - 305px );
		height: 75px;
	}
	.bodyP2 label{
		height: 75px;
		line-height: 75px;
		float: left;
		margin-right: 5px;
	}
	.bodyP2 div{
		width: calc( 100% - 105px );
		display: inline-block;
	}
	.shenpiBody{
		width: 100%;
		border:1px solid #e6eaee;
	}
	.shenpiBody .first{
		width: 100%;
	}
	.shenpiBody .first ul{
		width: 50%;
		float: left;
	}
	.shenpiBody .first ul li{
		width: 100%;
		height: 35px;
		line-height: 35px;
	}
	.shenpiBody .first ul li label{
		display: inline-block;
		width: 170px;
		text-align: right;
	}
	.shenpiBody .first ul li span{
		display: inline-block;
		text-align: left;
	}
	.sbodyP{
		height: 35px;
		line-height: 35px;
	}
	.sbodyP label:nth-of-type(1){
		display: inline-block;
		width: 170px;
		text-align: right;
	}
	.sfirst{
		width: 100%;
		height: 185px;
	}
	.sfirst ul{
		width: 50%;
		float: left;
	}
	.sfirst li{
		height: 35px;
		line-height: 35px;
		margin-bottom:15px;
	}
	.sfirst ul:nth-of-type(1) li:nth-of-type(3){
		margin-bottom:0px;
	}
	.sfirst ul:nth-of-type(2) li:nth-of-type(3){
		margin-bottom:0px;
	}
	.sfirst li label{
		display: inline-block;
		width: 170px;
		text-align: right;
	}
	.sfirst li label span{
		color: #ff7676;
	    font-size: 16px;
	    position: relative;
	    top: 4px;
	    padding-right: 2px;
	}
	.sfirst li div{
		display: inline-block;
		width: 200px;
		text-align: left;
	}
	/* 审批流程轨迹 分页 */
	.page{
		text-align: center;
    	margin-top: 20px;
	}
</style>