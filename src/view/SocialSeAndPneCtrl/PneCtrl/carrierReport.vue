<template>
  <!-- 运营商报告 -->
  <div class="SocialSecurity carrierReport">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">用户申请表检测</span>
        </template>
        <table id="t_1" width='100%'>
          <tbody>
            <tr>
              <td class="text_align_right" style="width:130px;">姓名：</td>
              <td id="name"></td>
            </tr>
            <tr>
              <td class="text_align_right">身份证：</td>
              <td id="id_card"></td>
            </tr>
            <tr>
              <td class="text_align_right">手机号：</td>
              <td id="cell_phone"></td>
            </tr>
            <tr>
              <td class="text_align_right">居住地址：</td>
              <td id="home_addr"></td>
            </tr>
            <tr>
              <td class="text_align_right">家庭电话：</td>
              <td id="home_phone"></td>
            </tr>
            <tr>
              <td class="text_align_right">联系人：</td>
              <td></td>
            </tr>
            <tr>
              <td class="text_align_right">京东账号：</td>
              <td id="jingdong"></td>
            </tr>
            <tr>
              <td class="text_align_right">淘宝账号：</td>
              <td id="taobao"></td>
            </tr>
          </tbody>
        </table>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">用户信息表检测</span>
        </template>
        <h6 class="sort">联系人数据</h6>
        <table id="t_2_1" width='100%'>
          <tbody>
            <tr>
              <td class="text_align_center" style="width:130px;" rowspan="9">用户查询信息</td>
              <td style="width:220px">查询过该用户的相关企业数量</td>
              <td id="searched_org_cnt"></td>
            </tr>
            <tr>
              <td>查询过该用户的相关企业类型</td>
              <td id="searched_org_type"></td>
            </tr>
            <tr>
              <td>身份证组合过的其他姓名</td>
              <td id="idcard_with_other_names"></td>
            </tr>
            <tr>
              <td>身份证组合过的其他电话</td>
              <td id="idcard_with_other_phones"></td>
            </tr>
            <tr>
              <td>电话号码组合过的其他姓名</td>
              <td id="phone_with_other_names"></td>
            </tr>
            <tr>
              <td>电话号码组合过的其他身份证</td>
              <td id="phone_with_other_idcards"></td>
            </tr>
            <tr>
              <td>电话号码注册过的相关企业数量</td>
              <td id="register_org_cnt"></td>
            </tr>
            <tr>
              <td>电话号码注册过的相关企业类型</td>
              <td id="register_org_type"></td>
            </tr>
            <tr>
              <td>电话号码出现过的公开网站</td>
              <td id="arised_open_web"></td>
            </tr>
          </tbody>
        </table>
        <h6 class="sort">黑名单</h6>
        <table id="t_2_2" width='100%'>
          <tbody>
            <tr>
              <td class="text_align_center" style="width:130px" rowspan="9">黑名单信息</td>
              <td style="width:220px">用户号码联系黑中介分数</td>
              <td id="phone_gray_score"></td>
            </tr>
            <tr>
              <td>直接联系人中黑名单人数</td>
              <td id="contacts_class1_blacklist_cnt"></td>
            </tr>
            <tr>
              <td>间接联系人中黑名单人数</td>
              <td id="contacts_class2_blacklist_cnt"></td>
            </tr>
            <tr>
              <td>直接联系人人数</td>
              <td id="contacts_class1_cnt"></td>
            </tr>
            <tr>
              <td>引起间接黑名单人数</td>
              <td id="contacts_router_cnt"></td>
            </tr>
            <tr>
              <td>直接联系人中引起间接黑名单占比</td>
              <td id="contacts_router_ratio"></td>
            </tr>
          </tbody>
        </table>
      </el-collapse-item>
     <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">用户行为检测</span>
        </template>
        <div class="height_auto">
          <el-table :data="companys" style="width:100%;" highlight-current-row border>
            <el-table-column prop="name" label="检查项" width="160">
            </el-table-column>
            <el-table-column prop="type" label="结果" width="100">
            </el-table-column>
            <el-table-column prop="begin_date" label="依据" min-width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
     <!--  <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账户流水</span>
        </template>
        <div class="height_auto">
          <el-table :data="flows" style="width:100%;" highlight-current-row border>
            <el-table-column prop="company" label="公司名称" width="120">
            </el-table-column>
            <el-table-column prop="operation_date" label="操作日期" width="180">
            </el-table-column>
            <el-table-column prop="operation_type" label="操作类型" width="100">
            </el-table-column>
            <el-table-column prop="record_month" label="缴纳月份" width="130">
            </el-table-column>
            <el-table-column prop="amount" label="金额[元]" width="190">
            </el-table-column>
            <el-table-column prop="balance" label="余额[元]">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">贷款明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="loans" style="width:100%;" highlight-current-row border>
            <el-table-column prop="contract_no" label="合同号" width="120">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="id_card" label="身份证号" width="160">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="160">
            </el-table-column>
            <el-table-column prop="bank" label="贷款银行" width="160">
            </el-table-column>
            <el-table-column prop="status" label="贷款状态" width="160">
            </el-table-column>
            <el-table-column prop="limit" label="贷款额度[元]" width="160">
            </el-table-column>
            <el-table-column prop="balance" label="贷款余额[元]" width="160">
            </el-table-column>
            <el-table-column prop="period" label="贷款期限" width="160">
            </el-table-column>
            <el-table-column prop="begin_date" label="贷款开始时间" width="160">
            </el-table-column>
            <el-table-column prop="end_date" label="贷款结束时间" width="160">
            </el-table-column>
            <el-table-column prop="loan_rate" label="贷款利率(%)" width="160">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">贷款还款流水</span>
        </template>
        <div class="height_auto">
          <el-table :data="loanFlows" style="width:100%;" highlight-current-row border>
            <el-table-column prop="account_id" label="账户ID" width="180">
            </el-table-column>
            <el-table-column prop="contract_no" label="合同号" width="180">
            </el-table-column>
            <el-table-column prop="type" label="流水类型" width="100">
            </el-table-column>
            <el-table-column prop="record_date" label="记录日期" width="180">
            </el-table-column>
            <el-table-column prop="record_month" label="所属月份" width="100">
            </el-table-column>
            <el-table-column prop="repay_principle" label="还本金额[元]" width="100">
            </el-table-column>
            <el-table-column prop="repay_interest" label="还息金额[元]" width="130">
            </el-table-column>
            <el-table-column prop="repay_amount" label="还款总金额[元]" width="130">
            </el-table-column>
            <el-table-column prop="principle_balance" label="本金余额[元]" width="130">
            </el-table-column>
            <el-table-column prop="deduct_date" label="银行扣款日期" min-width="190">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item> -->
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        caReport: {},

      }
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
    methods: {
      getInf() {
        this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getCarrReport.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          if (!res.success) {
            $.messager.alert("提示", "查询数据失败！", "error");
            return;
          }
          if ('' != res.obj.rpt) {
            var report = $.parseJSON(res.obj.rpt);
            if (report && report.result && report.result['10069'] && report.result['10069'].bizInfo) {
              this.caReport = report.result['10069'].bizInfo.report_data;
            }
          }
          console.log(this.caReport)
          if (!this.caReport) return;
          //用户申请表检测
          if (this.caReport.application_check && this.caReport.application_check.length > 0) {
            var contactNum = 0; //联系人个数
            $.each(this.caReport.application_check, function (i, eh) {
              var cps = eh.check_points;
              var info = '';
              if (eh.app_point == 'user_name') {
                $(' #t_1 #name').html(cps.key_value);
              } else if (eh.app_point == 'id_card') {
                info += cps.key_value;
                if (cps.court_blacklist && cps.court_blacklist.arised == true) info += '	在法院黑名单';
                if (cps.financial_blacklist && cps.financial_blacklist.arised == true) info += '	在金融机构黑名单';
                info += '	' + cps.gender + ' | ' + cps.age + '	' + cps.province + cps.city + cps.region;
                $(' #t_1 #id_card').html(info);
              } else if (eh.app_point == 'cell_phone') {
                info += cps.website + ' | ' + cps.reliability + '：' + cps.reg_time + '    ' + cps.key_value;
                if (cps.court_blacklist && cps.court_blacklist.arised == true) info += '	在法院黑名单';
                if (cps.financial_blacklist && cps.financial_blacklist.arised == true) info += '	在金融机构黑名单';
                info += '<br><br>' + cps.check_name + '<br><br>' + cps.check_idcard + '<br><br>' + cps.check_ebusiness;
                $(' #t_1 #cell_phone').html(info);
              } else if (eh.app_point == 'home_addr') {
                info += cps.key_value;
                if (cps.check_addr) info += '<br><br>' + cps.check_addr;
                if (cps.check_ebusiness) info += '<br><br>' + cps.check_ebusiness;
                $(' #t_1 #home_addr').html(info);
              } else if (eh.app_point == 'home_phone') {
                info += cps.key_value + '	' + cps.check_mobile;
                $(' #t_1 #home_phone').html(info);
              } else if (eh.app_point == 'contact') {
                info += cps.relationship + ' | ' + cps.contact_name + ' | ' + cps.key_value + '	' + cps.check_xiaohao +
                  '<br><br>' + cps.check_mobile;
                if (contactNum == 0) $(' #t_1 toboday tr[id="ct_tr"]').remove();
                $(' #t_1 tobody tr').eq(-2).before('<tr><td>联系人：</td><td>' + info + '</td></tr>');
                contactNum = contactNum + 1;
              } else if (eh.app_point == 'jingdong') {
                info += cps.key_value + '	' + cps.reliability + '		' + cps.reg_time;
              }
            });
          }
          //用户信息检测
          if (this.caReport.user_info_check) {
            //联系人数据
            if (this.caReport.user_info_check.check_search_info) {
              var sinfo = this.caReport.user_info_check.check_search_info;
              $(' #t_2_1 #searched_org_cnt').text(sinfo.searched_org_cnt);
              $(' #t_2_1 #searched_org_type').text(sinfo.searched_org_type.toString());
              $(' #t_2_1 #idcard_with_other_names').text(sinfo.idcard_with_other_names.toString());
              $(' #t_2_1 #idcard_with_other_phones').text(sinfo.idcard_with_other_phones.toString());
              $(' #t_2_1 #phone_with_other_names').text(sinfo.phone_with_other_names.toString());
              $(' #t_2_1 #phone_with_other_idcards').text(sinfo.phone_with_other_idcards.toString());
              $(' #t_2_1 #register_org_cnt').text(sinfo.register_org_cnt);
              $(' #t_2_1 #register_org_type').text(sinfo.register_org_type.toString());
              $(' #t_2_1 #arised_open_web').text(sinfo.arised_open_web.toString());
            }
            //黑名单
            if (this.caReport.user_info_check.check_black_info) {
              var binfo = this.caReport.user_info_check.check_black_info;
              $(' #t_2_2 #phone_gray_score').text(binfo.phone_gray_score + '(分数范围0-100，参考分为10，分数越低关系越紧密)');
              $(' #t_2_2 #contacts_class1_blacklist_cnt').text(binfo.contacts_class1_blacklist_cnt +
                '(直接联系人：和被查询号码有通话记录)');
              $(' #t_2_2 #contacts_class2_blacklist_cnt').text(binfo.contacts_class2_blacklist_cnt +
                '(间接联系人：和被查询号码的直接联系人有通话记录)');
              $(' #t_2_2 #contacts_class1_cnt').text(binfo.contacts_class1_cnt + '(直接联系人：和被查询号码有通话记录)');
              $(' #t_2_2 #contacts_router_cnt').text(binfo.contacts_router_cnt + '(直接联系人有和黑名单用户的通讯记录的号码数量)');
              // $(' #t_2_2 #contacts_router_ratio').text(formatRatePercentage100(binfo.contacts_router_ratio)+'(直接联系人有和黑名单用户的通讯记录的号码数量在直接联系人数量中的百分比)');
            }
            	//用户行为检测
	if(this.caReport.behavior_check && this.caReport.behavior_check.length>0){
		$.each(this.caReport.behavior_check,function(i,eh){
			// addRow($('#div_carr #t_3 tbody'),['check_point_cn','result','evidence'],eh);
		});
	}
          }
        });
      },

    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
  #t_1 td,
  #t_2_1 td,
  #t_2_2 td {
    border: 1px solid #d8dce5;
    /* border: 1px solid red; */
    padding-left: 5px;
  }

</style>
