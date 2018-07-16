<template>
  <!-- 实地征信 -->
  <div class="creditInvestigation">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">实地调查记录</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li>
                <label class="label_width_200">日期：</label>
                <span>{{datas.creditDate}} </span>
              </li>
              <li>
                <label class="label_width_200">实地人员1：</label>
                <span>{{bb}} </span>
              </li>
              <li>
                <label class="label_width_200">是否核对借款人有效证件：</label>
                <span>{{datas.isCheckDocTxt}} </span>
              </li>
              <li>
                <p v-show="datas.isCheckDocTxt=='否'">
                  <label class="label_width_200">不核对借款人有效证件原因：</label>
                  <el-tooltip class="item" effect="dark" :content="datas.isCheckDocRemark" :disabled="datas.isCheckDocRemark==null" placement="top">
                    <span>{{datas.isCheckDocRemark}}</span>
                  </el-tooltip>
                </p>
              </li>
              <li>
                <label class="label_width_200">实地场所：</label>
                <span>{{aa}} </span>
              </li>
              <li>
                <label class="label_width_200">实地发起源：</label>
                <span>{{cc}} </span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">家庭实地征信内容</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li style="width:100%;">
                <label class="label_width_200">地址：</label>
                <span>{{datas.homeAddr}}</span>
              </li>
              <li>
                <label class="label_width_200">标志性建筑：</label>
                <span>{{datas.homeLandMark}}</span>
              </li>
              <li>
                <label class="label_width_200">路线：</label>
                <span>{{datas.homeRoute}}</span>
              </li>
              <li>
                <label class="label_width_200">是否核对借款人房产证件：</label>
                <span>{{datas.homeNoverReasonTxt}}</span>
              </li>
              <li>
                <p v-show="datas.homeNoverReasonTxt == '否'">
                  <label class="label_width_200">不核对借款人房产证件原因：</label>
                  <el-tooltip class="item" effect="dark" :content="datas.homeHouseInfo" :disabled="datas.homeHouseInfo==null" placement="top">
                    <span>{{datas.homeHouseInfo}}</span>
                  </el-tooltip>
                </p>
              </li>
              <li>
                <label class="label_width_200">在场人员：</label>
                <span>{{datas.homePresenter}}</span>
              </li>
              <li>
                <label class="label_width_200">与借款人关系：</label>
                <span>{{datas.homeRelBorrower}}</span>
              </li>
              <li>
                <label class="label_width_200">社区周边环境：</label>
                <span>{{datas.homeSurrounding}}</span>
              </li>
              <li>
                <label class="label_width_200">房屋户型：</label>
                <span>{{datas.homeHouseSizeTxt}}</span>
              </li>
              <li>
                <label class="label_width_200">房屋建筑年代：</label>
                <span>{{datas.homeBuildingAge}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">日常生活迹象</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li>
                <label class="label_width_200">起居室：</label>
                <span>{{datas.homeLivingRoom}}</span>
              </li>
              <li>
                <label class="label_width_200">卫生间：</label>
                <span>{{datas.homeToilet}}</span>
              </li>
              <li>
                <label class="label_width_200">厨房：</label>
                <span>{{datas.homeKichen}}</span>
              </li>
              <li>
                <label class="label_width_200">卫生清洁：</label>
                <span>{{datas.homeHygiene}}</span>
              </li>
              <li>
                <label class="label_width_200">其他：</label>
                <span>{{datas.homeOtherDailyLife}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">其他</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li>
                <label class="label_width_200">植物：</label>
                <span>{{datas.homeBotany}}</span>
              </li>
              <li>
                <label class="label_width_200">宠物：</label>
                <span>{{datas.homePet}}</span>
              </li>
              <li>
                <label class="label_width_200">货物：</label>
                <span>{{datas.homeGoods}}</span>
              </li>
              <li>
                <label class="label_width_200">异常说明：</label>
                <span>{{datas.homeOtherExpRemark}}</span>
              </li>
              <li>
                <label class="label_width_200">其他生活情况：</label>
                <span>{{datas.homeOtherRemark}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">企业实地征信内容</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li style="width:100%;">
                <label class="label_width_200">企业征信地址：</label>
                <span>{{datas.comAddr}}</span>
              </li>
              <li>
                <label class="label_width_200">是否查验企业有效证件：</label>
                <span>{{datas.comisEffDocTxt}}</span>
              </li>
              <li>
                <label class="label_width_200">各项材料原件是否收齐比对：</label>
                <span>{{datas.creditDate}}</span>
              </li>
              <li>
                <label class="label_width_200">企业是否存在：</label>
                <span>{{datas.creditDate}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">办公环境</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li>
                <label class="label_width_200">企业水牌位置及新旧程度：</label>
                <span>{{datas.comSignPlace}}</span>
              </li>
              <li>
                <label class="label_width_200">办公场所装修情况：</label>
                <span>{{datas.comOffDecora}}</span>
              </li>
              <li>
                <label class="label_width_200">办公场所面积：</label>
                <span>{{datas.comOffArea}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="7">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">库房/车间</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li>
                <label class="label_width_200">机器设备：</label>
                <span>{{datas.comEquipment}}</span>
              </li>
              <li>
                <label class="label_width_200">厂房面积：</label>
                <span>{{datas.comArea}}</span>
              </li>
              <li>
                <label class="label_width_200">现代化程度：</label>
                <span>{{datas.comModenLevel}}</span>
              </li>
              <li>
                <label class="label_width_200">办公区工位数情况：</label>
                <span>{{ee}}</span>
              </li>
              <li>
                <label class="label_width_200">库存：</label>
                <span>{{datas.comStock}}</span>
              </li>
              <li>
                <label class="label_width_200">工位上是否有电话：</label>
                <span>{{ff}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="8">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">员工</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li>
                <label class="label_width_200">是否开工中：</label>
                <span>{{datas.comIsStartTxt}}</span>
              </li>
              <li>
                <label class="label_width_200">见到办公人数：</label>
                <span>{{datas.comWorkerNum}}</span>
              </li>
              <li>
                <label class="label_width_200">是否统一着装：</label>
                <span>{{datas.comIsDressUniTxt}}</span>
              </li>
              <li>
                <label class="label_width_200">工位上是否有电话：</label>
                <span>{{hh}}</span>
              </li>
              <li>
                <label class="label_width_200">办公区工位数情况：</label>
                <span>{{gg}}</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="9">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">口述企业状况</span>
          </template>
          <div class="checkedInf checkedInf_li_width_half clearFix">
            <ul>
              <li style="width:100%;">
                <label class="label_width_200">规模：</label>
                <span>{{datas.comScale}}</span>
              </li>
              <li>
                <label class="label_width_200">经营年限：</label>
                <span>{{datas.comOperaYears}}</span>
              </li>
              <li>
                <label class="label_width_200">年收支[万元]：</label>
                <span>{{datas.comPay}}</span>
              </li>
              <li>
                <label class="label_width_200">毛利[万元]：</label>
                <span>{{datas.comOperaYears}}</span>
              </li>
              <li>
                <label class="label_width_200">纯利[万元]：</label>
                <span>{{datas.comNetProfit}}</span>
              </li>
              <li>
                <label class="label_width_200">上下游供货方式：</label>
                <span>{{datas.comSupplyMode}}</span>
              </li>
              <li>
                <label class="label_width_200">上下游结算方式：</label>
                <span>{{datas.comCaculation}}</span>
              </li>
              <li style="width:100%;">
                <label class="label_width_200">上下游结算周期：</label>
                <span>{{datas.comBillCycle}}</span>
              </li>
              <li>
                <label class="label_width_200">应收账款[万元]：</label>
                <span>{{datas.comCollection}}</span>
              </li>
              <li>
                <label class="label_width_200">应付账款[万元]：</label>
                <span>{{datas.comPayables}}</span>
              </li>
              <li style="width:100%;">
                <label class="label_width_200">贷款及抵押情况：</label>
                <span>{{datas.comLoan}}</span>
              </li>
              <li class="text_area_li">
                <label class="label_width_200">其他说明：</label>
                <el-tooltip class="item" effect="dark" :content="datas.comOtherInfo" :disabled="datas.comOtherInfo==null"
                  placement="top">
                  <span  class="text_area_span text_area_span_minus220">{{datas.comOtherInfo}}</span>
                </el-tooltip>
              </li>
              <li class="text_area_li">
                <label class="label_width_200">异常说明：</label>
                <el-tooltip class="item" effect="dark" :content="datas.comExceptionInfo" :disabled="datas.comExceptionInfo==null"
                  placement="top">
                  <span class="text_area_span text_area_span_minus220">{{datas.comExceptionInfo}}</span>
                </el-tooltip>
              </li>
            </ul>
          </div>
          <!-- <ul class="headul">
            <li>
              <label>规模：</label>
              <span>{{datas.comScale}}</span>
            </li>
            <li>
              <label>经营年限：</label>
              <span>{{datas.comOperaYears}}</span>
            </li>
            <li>
              <label>毛利[万元]：</label>
              <span>{{datas.comGroosMargin}}</span>
            </li>
            <li>
              <label>上下游供货方式：</label>
              <span>{{datas.comSupplyMode}}</span>
            </li>
            <li>
              <label>上下游结算周期：</label>
              <span>{{datas.comBillCycle}}</span>
            </li>
            <li>
              <label>应收账款[万元]：</label>
              <span>{{datas.comCollection}}</span>
            </li>
            <li>
              <label>贷款及抵押情况：</label>
              <span>{{datas.comLoan}}</span>
            </li>
            <li class="reason">
              <label>其他说明：</label>
              <el-tooltip class="item" effect="dark" :content="datas.comOtherInfo" :disabled="datas.comOtherInfo==null" placement="top">
                <div>{{datas.comOtherInfo}}</div>
              </el-tooltip>
            </li>
          </ul>
          <ul class="headul">
            <li>
              <label></label>
              <span></span>
            </li>
            <li>
              <label>年收支[万元]：</label>
              <span>{{datas.comPay}}</span>
            </li>
            <li>
              <label>纯利[万元]：</label>
              <span>{{datas.comNetProfit}}</span>
            </li>
            <li>
              <label>上下游结算方式：</label>
              <span>{{datas.comCaculation}}</span>
            </li>
            <li>
              <label></label>
              <span></span>
            </li>
            <li>
              <label>应付账款[万元]：</label>
              <span>{{datas.comPayables}}</span>
            </li>
            <li>
              <label></label>
              <span></span>
            </li>
            <li class="reason">
              <label>异常说明：</label>
              <el-tooltip class="item" effect="dark" :content="datas.comExceptionInfo" :disabled="datas.comExceptionInfo==null" placement="top">
                <div>{{datas.comExceptionInfo}}</div>
              </el-tooltip>
            </li>
          </ul> -->
        </el-collapse-item>
      </el-collapse>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datas: '',
        aa: '',
        bb: '',
        cc: '',
        dd: '',
        ee: '',
        ff: '',
        gg: '',
        hh: '',
        taskInWaitting: '',
      };
    },
    mounted() {
      //一进入页面就发送请求
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag")) //初审-匹配查看
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.taskInWaitting = JSON.parse(localStorage.getItem('internalObj'));
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.taskInWaitting = JSON.parse(localStorage.getItem("Query")) //初审-匹配查看
      } else if (this.MatchFlag.MatchFlag == 'QT') {
        this.taskInWaitting = JSON.parse(localStorage.getItem("QT")) //综合查询
      }
      this.request(this.taskInWaitting.matchApplyId);
    },
    methods: {
      handleChange() {

      },
      request(query) {
        this.get("/credit/fieldReference", {
          applyId: query
        }).then(res => {
          this.datas = res.data;
        });
      },
    }
  }

</script>
<style type="text/css" scoped>
  .creditInvestigation {
    width: 100%;
    height: 100%;
    background-color: #fafbfc;
    font-size: 14px;
    min-width: 930px;
    color: #475669;
  }

  /* 头部 */

  .creditHead {
    width: 100%;

  }

  /* icon_hat */

  ul.headul {
    float: left;
    width: 50%;
  }

  ul.headul li {
    margin-top: 10px;
  }

  ul.headul li:last-child {
    margin-bottom: 10px;
  }

  ul.headul li label {
    width: 210px;
    display: inline-block;
    text-align: right;
  }


</style>
