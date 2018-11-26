<template>
  <!-- 聚信立 -->
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
          <el-table :data="behaviorCheck" style="width:100%;" highlight-current-row border>
            <el-table-column prop="check_point_cn" label="检查项" min-width="180">
            </el-table-column>
            <el-table-column prop="result" label="结果" min-width="160">
            </el-table-column>
            <el-table-column prop="evidence" label="依据" min-width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">运营商数据</span>
        </template>
        <div class="height_auto">
          <el-table :data="cellBehavior" style="width:100%;" highlight-current-row border>
            <el-table-column prop="cell_operator_zh" label="运营商" min-width="100">
            </el-table-column>
            <el-table-column prop="cell_phone_num" label="号码" width="160">
            </el-table-column>
            <el-table-column prop="cell_loc" label="归属地" min-width="100">
            </el-table-column>
            <el-table-column prop="cell_mth" label="月份" width="100">
            </el-table-column>
            <el-table-column prop="call_cnt" label="呼叫次数" width="100">
            </el-table-column>
            <el-table-column prop="call_out_cnt" label="主叫次数" width="100">
            </el-table-column>
            <el-table-column prop="call_out_time" label="主叫时间(分钟)" width="120">
            </el-table-column>
            <el-table-column prop="call_in_cnt" label="被叫次数" width="100">
            </el-table-column>
            <el-table-column prop="call_in_time" label="被叫时间(分钟)" width="120">
            </el-table-column>
            <el-table-column prop="sms_cnt" label="短信数量" width="80">
            </el-table-column>
            <el-table-column prop="net_flow" label="流量(MB)" width="120">
            </el-table-column>
            <el-table-column prop="total_amount" label="话费消费[元]" width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">联系人区域汇总</span>
        </template>
        <div class="height_auto">
          <el-table :data="contactRegion" style="width:100%;" highlight-current-row border>
            <el-table-column prop="region_loc" label="地区" width="120">
            </el-table-column>
            <el-table-column prop="region_uniq_num_cnt" label="号码数量" width="80">
            </el-table-column>
            <el-table-column prop="region_call_in_cnt" label="呼入次数" width="80">
            </el-table-column>
            <el-table-column prop="region_call_out_cnt" label="呼出次数" width="80">
            </el-table-column>
            <el-table-column label="呼入时间(分钟)" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.region_call_in_time | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="呼出时间(分钟)" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.region_call_out_time | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="平均电话呼入时间(分钟)" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.region_avg_call_in_time | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="平均电话呼出时间(分钟)" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.region_avg_call_out_time | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="呼入次数百分比" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.region_call_in_cnt_pct | NumRound(4)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="呼出次数百分比" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.region_call_out_cnt_pct | NumRound(4)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="呼入时间百分比" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.region_call_in_time_pct | NumRound(4)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="呼出时间百分比" min-width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.region_call_out_time_pct | NumRound(4)}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">运营商数据分析</span>
        </template>
        <h6 class="sort">联系人通话详情</h6>
        <div class="height_auto">
          <el-table :data="contactList" style="width:100%;" highlight-current-row border>
            <el-table-column prop="phone_num" label="号码" width="160">
            </el-table-column>
            <el-table-column prop="phone_num_loc" label="归属地" width="100">
            </el-table-column>
            <el-table-column prop="contact_name" label="互联网标识" width="100">
            </el-table-column>
            <el-table-column prop="needs_type" label="需求类型" min-width="140">
            </el-table-column>
            <el-table-column prop="call_out_cnt" label="主叫次数" width="80">
            </el-table-column>
            <el-table-column label="主叫时间(分)" width="110">
              <template slot-scope="scope">
                <span>{{ scope.row.call_out_len | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="call_in_cnt" label="被叫次数" width="80">
            </el-table-column>
            <el-table-column label="被叫时间(分)" width="110">
              <template slot-scope="scope">
                <span>{{ scope.row.call_in_len | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="call_cnt" label="联系次数" width="80">
            </el-table-column>
            <el-table-column label="联系时间(分)" width="110">
              <template slot-scope="scope">
                <span>{{ scope.row.call_len | NumRound(2)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="contact_1w" label="最近一周" width="80">
            </el-table-column>
            <el-table-column prop="contact_1m" label="最近一月" width="80">
            </el-table-column>
            <el-table-column prop="contact_3m" label="最近三月" width="80">
            </el-table-column>
            <el-table-column prop="contact_morning" label="上午联系" width="80">
            </el-table-column>
            <el-table-column prop="contact_noon" label="中午联系" width="80">
            </el-table-column>
            <el-table-column prop="contact_afternoon" label="下午联系" width="80">
            </el-table-column>
            <el-table-column prop="contact_night" label="晚上联系" width="80">
            </el-table-column>
            <el-table-column prop="contact_early_morning" label="凌晨联系" width="80">
            </el-table-column>
            <el-table-column label="全天联系" width="80">
              <template slot-scope="scope">
                <span>{{ scope.row.contact_all_day | YesOrNo}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="contact_weekday" label="周中联系" width="80">
            </el-table-column>
            <el-table-column prop="contact_weekend" label="周末联系" width="80">
            </el-table-column>
            <el-table-column prop="contact_holiday" label="节假日联系" width="100">
            </el-table-column>
          </el-table>
        </div>
        <h6 class="sort">常用服务</h6>
        <table id="t_6_2" width='100%'>
          <thead>
            <tr>
              <th>服务企业类型</th>
              <th>企业名称</th>
              <th>总互动次数</th>
              <th>--</th>
              <th>--</th>
              <th>--</th>
              <th>--</th>
              <th>--</th>
              <th>--</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电商地址分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="deliverAddress" style="width:100%;" highlight-current-row border>
            <el-table-column prop="address" label="地址" min-width="100">
            </el-table-column>
            <el-table-column prop="predict_addr_type" label="预测地址类型" width="160">
            </el-table-column>
            <el-table-column prop="begin_date" label="最早时间" width="140">
            </el-table-column>
            <el-table-column prop="end_date" label="最晚时间" width="140">
            </el-table-column>
            <el-table-column prop="total_count" label="总消费次数" width="100">
            </el-table-column>
            <el-table-column prop="total_amount" label="总消费金额" width="100">
            </el-table-column>
            <el-table-column prop="receiver.name" label="收货人姓名" width="120">
            </el-table-column>
            <el-table-column prop="phone_num_list" label="个人电话列表" width="100">
              <template slot-scope="scope">
                <span>{{scope.row.receiver&&scope.row.receiver.phone_num_list? scope.row.receiver.phone_num_list.toString():''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="receiver.count" label="个人消费次数" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.receiver? scope.row.receiver.count:'' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="receiver.amount" label="个人消费金额" width="120">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电商月消费分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="ebusinessExpense" style="width:100%;" highlight-current-row border>
            <el-table-column prop="trans_mth" label="月份" width="100">
            </el-table-column>
            <el-table-column prop="all_count" label="全部消费笔数" width="160">
            </el-table-column>
            <el-table-column prop="all_amount" label="全部消费金额" width="140">
            </el-table-column>
            <el-table-column label="消费商品品类" min-width="140">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category?scope.row.all_category.toString():'' }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">联系人名单</span>
        </template>
        <div class="height_auto">
          <el-table :data="collectionContact" style="width:100%;" highlight-current-row border>
            <el-table-column prop="contact_name" label="联系人姓名" width="90">
            </el-table-column>
            <el-table-column prop="begin_date" label="最早时间" width="160">
            </el-table-column>
            <el-table-column prop="end_date" label="最晚时间" width="140">
            </el-table-column>
            <el-table-column prop="total_count" label="总消费次数" width="90">
            </el-table-column>
            <el-table-column prop="total_amount" label="总消费金额[元]" width="140">
            </el-table-column>
            <el-table-column label="号码" width="130">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].phone_num:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="号码归属地" width="90">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].phone_num_loc:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="拨打给申请人次数" width="140">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].call_in_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="申请人拨打次数" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].call_out_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="总计电话通数" width="110">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].call_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="通话时长(分钟)" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].call_len:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="短信条数" width="80">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]? scope.row.all_category.contact_details[0].sms_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='10'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">出行分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="triInfo" style="width:100%;" highlight-current-row border>
            <el-table-column prop="trip_type" label="时间段" width="100">
            </el-table-column>
            <el-table-column prop="trip_start_time" label="出发时间" width="160">
            </el-table-column>
            <el-table-column prop="trip_end_time" label="回程时间" width="140">
            </el-table-column>
            <el-table-column prop="trip_leave" label="出发地" width="140">
            </el-table-column>
            <el-table-column prop="trip_dest" label="目的地" min-xwidth="140">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        caReport: {},
        behaviorCheck: [],
        contactRegion: [],
        contactList: [],
        cellBehavior: [],
        deliverAddress: [],
        ebusinessExpense: [],
        collectionContact: [],
        triInfo: [],
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
          if (res.obj&&res.obj.rpt) {
            var report = $.parseJSON(res.obj.rpt);
            if (report && report.result && report.result['10069'] && report.result['10069'].bizInfo) {
              this.caReport = report.result['10069'].bizInfo.report_data;
            }
          }
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
              $(' #t_2_2 #contacts_router_ratio').text(this.formatRatePercentage100(binfo.contacts_router_ratio) +
                '(直接联系人有和黑名单用户的通讯记录的号码数量在直接联系人数量中的百分比)');
            }
            //用户行为检测
            this.caReport.behavior_check && this.caReport.behavior_check.length > 0 ? this.behaviorCheck = this.caReport
              .behavior_check : '';
            if (this.caReport.behavior_check && this.caReport.behavior_check.length > 0) {
              $.each(this.caReport.behavior_check, function (i, eh) {
              });
            }
            //运营商数据
            var sel = this;
            if (this.caReport.cell_behavior && this.caReport.cell_behavior.length > 0) {
              let _cellBehavior = [];
              $.each(this.caReport.cell_behavior, (i, eh) => {
                for (var idx = 0;; idx++) {
                  if (eh.behavior[idx] == undefined) {
                    break;
                  }
                  $.each(eh.behavior[idx], (name, value) => {
                    if (name.indexOf('_time') != -1) eh.behavior[idx][name] = parseFloat(eh.behavior[idx][
                      name
                    ]).toFixed(2);
                  });
                  eh.behavior[idx].net_flow = parseFloat(eh.behavior[idx].net_flow).toFixed(2);
                  eh.behavior[idx].cell_phone_num = eh.phone_num;
                  _cellBehavior.push(eh.behavior[idx]);
                }
              });
              this.cellBehavior = _cellBehavior;
            }
            //联系人区域汇总
            this.caReport.contact_region && this.caReport.contact_region.length > 0 ? this.contactRegion = this.caReport
              .contact_region : '';
            //运营商数据分析——联系人通话详情
            this.caReport.contact_list && this.caReport.contact_list.length > 0 ? this.contactList = this.caReport.contact_list :
              '';
              console.log(1,this.caReport);
              console.log(2,this.caReport.main_service);
            //运营商数据分析——常用服务
            if (this.caReport.main_service && this.caReport.main_service.length > 0) {
              var fieldsArr = ['company_type', 'company_name', 'total_service_cnt'];
              var mthinfo = this.caReport.main_service[0];
              if (mthinfo.service_details && mthinfo.service_details.length > 0) {
                var n = 4;
                $.each(mthinfo.service_details, (i, eh) => {
                  fieldsArr.push(eh.interact_mth);
                  $(' #t_6_2 thead th').eq(n).text(eh.interact_mth);
                  n++;
                });
              }
              $.each(this.caReport.main_service, (i, eh) => {
                var serviceObj = this.name_val_jsonArr2Json(eh.service_details, 'interact_mth', 'interact_cnt');
                $.merge(eh, serviceObj);
                this.addRow($(' #t_6_2 tbody'), fieldsArr, eh);
              });
            }
            //电商地址分析
            this.caReport.deliver_address && this.caReport.deliver_address.length > 0 ? this.deliverAddress = this.caReport
              .deliver_address : '';
            if (this.caReport.deliver_address && this.caReport.deliver_address.length > 0) {
            }
            //电商月消费分析
            this.caReport.ebusiness_expense && this.caReport.ebusiness_expense.length > 0 ? this.ebusinessExpense =
              this.caReport.ebusiness_expense : '';
            if (this.caReport.ebusiness_expense && this.caReport.ebusiness_expense.length > 0) {
            }
            //联系人名单
            this.caReport.collection_contact && this.caReport.collection_contact.length > 0 ? this.collectionContact =
              this.caReport.collection_contact : '';
            //出行分析
            this.caReport.trip_info && this.caReport.trip_info.length > 0 ? this.triInfo = this.caReport.trip_info :
              '';
          }
        });
      },
      addRow($table, rfields, rdata) {
        var row = '<tr>';
        $.each(rfields, function (index, val) {
          if (rdata[val] != undefined) {
            row += '<td style="border: 1px solid #d8dce5;padding:0 10px;">' + rdata[val] + '</td>';
          } else {
            row += '<td style="border: 1px solid #d8dce5;padding:0 10px;">' + '' + '</td>';
          }
        });
        row += '</tr>';
        $table.append(row);
      },
      name_val_jsonArr2Json(arr, name, valName) {
        var jsonObj = {};
        $.each(arr, function (i, eh) {
          jsonObj['name'] = eh.valName
        });
        return jsonObj;
      },
      formatRatePercentage100(val, row) {
        if (!$.isNumeric(val)) {
          return val;
        }
        if (val == 0) {
          return "0.00%";
        }
        var n = 2;
        if (val != '' && val != undefined) {
          return parseFloat((val + "").replace(/[^\d\.-]/g, "") * 100).toFixed(n) + "%";
        }
      }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
  #t_1 td,
  #t_2_1 td,
  #t_2_2 td,
  #t_6_2 td,
  #t_6_2 th {
    border: 1px solid #d8dce5;
    padding-left: 5px;
  }

</style>
