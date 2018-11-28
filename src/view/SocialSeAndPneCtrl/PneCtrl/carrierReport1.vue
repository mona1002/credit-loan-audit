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
              <td>{{Inf.user_name}}</td>
            </tr>
            <tr>
              <td class="text_align_right">身份证：</td>
              <td>{{Inf.id_card}}</td>
            </tr>
            <tr>
              <td class="text_align_right">手机号：</td>
              <td>
                <div>{{Inf.cell_phone1}}</div>
                <div>{{Inf.cell_phone2}}</div>
                <div>{{Inf.cell_phone3}}</div>
                <div>{{Inf.cell_phone4}}</div>
              </td>
            </tr>
            <tr>
              <td class="text_align_right">居住地址：</td>
              <td>
                <div>{{Inf.home_addr1}} </div>
                <div>{{Inf.home_addr2}} </div>
                <div>{{Inf.home_addr3}} </div>
              </td>
            </tr>
            <tr>
              <td class="text_align_right">家庭电话：</td>
              <td>{{Inf.home_phone}}</td>
            </tr>
            <tr>
              <td class="text_align_right">联系人：</td>
              <td>
                <div>{{Inf.contact1}} </div>
                <div>{{Inf.contact2}} </div>
              </td>
            </tr>
            <tr>
              <td class="text_align_right">京东账号：</td>
              <td>{{Inf.jingdong}}</td>
            </tr>
            <tr>
              <td class="text_align_right">淘宝账号：</td>
              <td>{{Inf.taobao}}</td>
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
              <td>{{Inf.searched_org_cnt}}</td>
            </tr>
            <tr>
              <td>查询过该用户的相关企业类型</td>
              <td>{{Inf.searched_org_type}}</td>
            </tr>
            <tr>
              <td>身份证组合过的其他姓名</td>
              <td>{{Inf.idcard_with_other_names}}</td>
            </tr>
            <tr>
              <td>身份证组合过的其他电话</td>
              <td>{{Inf.idcard_with_other_phones}}</td>
            </tr>
            <tr>
              <td>电话号码组合过的其他姓名</td>
              <td>{{Inf.phone_with_other_names}}</td>
            </tr>
            <tr>
              <td>电话号码组合过的其他身份证</td>
              <td>{{Inf.phone_with_other_idcards}}</td>
            </tr>
            <tr>
              <td>电话号码注册过的相关企业数量</td>
              <td>{{Inf.register_org_cnt}}</td>
            </tr>
            <tr>
              <td>电话号码注册过的相关企业类型</td>
              <td>{{Inf.register_org_type}}</td>
            </tr>
            <tr>
              <td>电话号码出现过的公开网站</td>
              <td>{{Inf.arised_open_web}}</td>
            </tr>
          </tbody>
        </table>
        <h6 class="sort">黑名单</h6>
        <table id="t_2_2" width='100%'>
          <tbody>
            <tr>
              <td class="text_align_center" style="width:130px" rowspan="9">黑名单信息</td>
              <td style="width:220px">用户号码联系黑中介分数</td>
              <td> {{Inf.phone_gray_score}}<span> (分数范围0-100，参考分为10，分数越低关系越紧密)</span></td>
            </tr>
            <tr>
              <td>直接联系人中黑名单人数</td>
              <td> {{Inf.contacts_class1_blacklist_cnt}}<span> (直接联系人：和被查询号码有通话记录)</span></td>
            </tr>
            <tr>
              <td>间接联系人中黑名单人数</td>
              <td> {{Inf.contacts_class2_blacklist_cnt}}<span> (间接联系人：和被查询号码的直接联系人有通话记录)</span></td>
            </tr>
            <tr>
              <td>直接联系人人数</td>
              <td> {{Inf.contacts_class1_cnt}}<span> (直接联系人：和被查询号码有通话记录)</span></td>
            </tr>
            <tr>
              <td>引起间接黑名单人数</td>
              <td> {{Inf.contacts_router_cnt}}<span> (直接联系人有和黑名单用户的通讯记录的号码数量)</span></td>
            </tr>
            <tr>
              <td>直接联系人中引起间接黑名单占比</td>
              <td> {{Inf.contacts_router_ratio|percent100}}<span> (直接联系人有和黑名单用户的通讯记录的号码数量在直接联系人数量中的百分比)</span></td>
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
          <el-table :data="Inf.behavior_check" style="width:100%;" highlight-current-row border>
            <el-table-column prop="check_point_cn" label="检查项">
            </el-table-column>
            <el-table-column prop="result" label="结果">
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
          <el-table :data="Inf.cell_behavior" style="width:100%;" highlight-current-row border>
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
            <el-table-column label="主叫时间(分钟)" width="120">
              <template slot-scope="scope">
                {{ scope.row.call_out_time.toFixed(2) }}
              </template>
            </el-table-column>
            <el-table-column prop="call_in_cnt" label="被叫次数" width="100">
            </el-table-column>
            <el-table-column prop="" label="被叫时间(分钟)" width="120">
              <template slot-scope="scope">
                {{ scope.row.call_in_time.toFixed(2) }}
              </template>
            </el-table-column>
            <el-table-column prop="sms_cnt" label="短信数量" width="80">
            </el-table-column>
            <el-table-column prop="" label="流量(MB)" width="120">
              <template slot-scope="scope">
                {{ scope.row.net_flow.toFixed(2) }}
              </template>
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
          <el-table :data="Inf.contact_region" style="width:100%;" highlight-current-row border>
            <el-table-column prop="region_loc" label="地区" width="120">
            </el-table-column>
            <el-table-column prop="region_uniq_num_cnt" label="号码数量" width="75">
            </el-table-column>
            <el-table-column prop="region_call_in_cnt" label="呼入次数" width="70">
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
          <el-table :data="Inf.contact_list" style="width:100%;" highlight-current-row border>
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
         <div class="height_auto" v-if="Inf.main_service&&Inf.main_service.length>0">
        <el-table :data="Inf.main_service" style="width:100%;" highlight-current-row border>
          <el-table-column v-for='(item,ind) in Inf.main_service' :key="ind" :prop="item.value" :label="item.label">
          </el-table-column>
        </el-table>
         </div>
        <!-- <table id="t_6_2" width='100%'>
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
        </table> -->
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电商地址分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.deliver_address" style="width:100%;" highlight-current-row border>
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
                <span>{{scope.row.receiver&&scope.row.receiver.phone_num_list?
                  scope.row.receiver.phone_num_list.toString():''
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
          <el-table :data="Inf.ebusiness_expense" style="width:100%;" highlight-current-row border>
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
          <el-table :data="Inf.collection_contact" style="width:100%;" highlight-current-row border>
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
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].phone_num:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="号码归属地" width="90">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].phone_num_loc:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="拨打给申请人次数" width="140">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].call_in_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="申请人拨打次数" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].call_out_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="总计电话通数" width="110">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].call_cnt:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="通话时长(分钟)" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].call_len:''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="短信条数" width="80">
              <template slot-scope="scope">
                <span>{{ scope.row.all_category&& scope.row.all_category.contact_details[0]?
                  scope.row.all_category.contact_details[0].sms_cnt:''
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
          <el-table :data="Inf.trip_info" style="width:100%;" highlight-current-row border>
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
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        // activeNames: ['6'],
        // caReport: {},
        // behaviorCheck: [],
        // contactRegion: [],
        // contactList: [],
        // cellBehavior: [],
        // deliverAddress: [],
        // ebusinessExpense: [],
        // collectionContact: [],
        // triInfo: [],
      }
    },
    props: {
      Inf: {
        default: function () {
          return {}
        },
        type: Object,
        required: true
      }
    },
    // methods: {
    //   addRow($table, rfields, rdata) {
    //     var row = '<tr>';
    //     $.each(rfields, function (index, val) {
    //       if (rdata[val] != undefined) {
    //         row += '<td style="border: 1px solid #d8dce5;padding:0 10px;">' + rdata[val] + '</td>'; //rdata：main_service。val：serviceObj中汉字
    //       } else {
    //         row += '<td style="border: 1px solid #d8dce5;padding:0 10px;">' + '' + '</td>';
    //       }
    //     });
    //     row += '</tr>';
    //     $table.append(row);
    //   },
    //   name_val_jsonArr2Json(arr, name, valName) {
    //     var jsonObj = {};
    //     $.each(arr, function (i, eh) {
    //       jsonObj['name'] = eh.valName
    //     });
    //     return jsonObj;
    //   },
    // },
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
