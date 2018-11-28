<template>
  <div class="SSComp">
    <!-- 大数据风控-百融 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">百融特殊名单核查</span>
        </template>
        <div class="lists">
          <el-collapse v-model="activeNames" v-if="this.IDC">
            <el-collapse-item name="8">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">通过身份证查询
                </span>
              </template>
              <div ref='IDCheck'>
                <p v-if=" specialList.sl_id_abnormal">
                  <label>通过身份证查询疑似欺诈：</label>
                  <b>{{specialList.sl_id_abnormal}}</b>
                </p>
                <p v-if=" specialList.sl_id_phone_overdue">
                  <label>通过身份证查询电信欠费： </label>
                  <b>{{specialList.sl_id_phone_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_court_bad">
                  <label>通过身份证查询法院失信人： </label>
                  <b>{{specialList.sl_id_court_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_court_executed">
                  <label>通过身份证查询法院被执行人：</label>
                  <b>{{specialList.sl_id_court_executed}}</b>
                </p>
                <p v-if=" specialList.sl_id_bank_bad">
                  <label>通过身份证查询银行不良： </label>
                  <b>{{specialList.sl_id_bank_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_bank_overdue">
                  <label>通过身份证查询银行短时逾期： </label>
                  <b>{{specialList.sl_id_bank_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_bank_lost">
                  <label>通过身份证查询银行欺诈：</label>
                  <b>{{specialList.sl_id_bank_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_bank_bad">
                  <label>通过身份证查询银行失联： </label>
                  <b>{{specialList.sl_id_bank_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_bank_refuse">
                  <label>通过身份证查询银行拒绝： </label>
                  <b>{{specialList.sl_id_bank_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_p2p_bad">
                  <label>通过身份证查询非银不良：</label>
                  <b>{{specialList.sl_id_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_p2p_overdue">
                  <label>通过身份证查询非银短时逾期： </label>
                  <b>{{specialList.sl_id_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_p2p_fraud">
                  <label>通过身份证查询小贷或P2P欺诈： </label>
                  <b>{{specialList.sl_id_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_p2p_lost">
                  <label>通过身份证查询非银失联： </label>
                  <b>{{specialList.sl_id_p2p_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_p2p_refuse">
                  <label>通过身份证查询非银拒绝： </label>
                  <b>{{specialList.sl_id_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_p2p_bad">
                  <label>通过身份证查询P2P不良： </label>
                  <b>{{specialList.sl_id_nbank_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_p2p_overdue">
                  <label>通过身份证查询P2P短时逾期： </label>
                  <b>{{specialList.sl_id_nbank_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_p2p_fraud">
                  <label>通过身份证查询P2P欺诈： </label>
                  <b>{{specialList.sl_id_nbank_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_p2p_lost">
                  <label>通过身份证查询P2P失联： </label>
                  <b>{{specialList.sl_id_nbank_p2p_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_p2p_refuse">
                  <label>通过身份证查询P2P拒绝： </label>
                  <b>{{specialList.sl_id_nbank_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_mc_bad">
                  <label>通过身份证查询小贷不良： </label>
                  <b>{{specialList.sl_id_nbank_mc_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_mc_overdue">
                  <label>通过身份证查询小贷短时逾期： </label>
                  <b>{{specialList.sl_id_nbank_mc_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_mc_fraud">
                  <label>通过身份证查询小贷欺诈： </label>
                  <b>{{specialList.sl_id_nbank_mc_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_mc_lost">
                  <label>通过身份证查询小贷失联： </label>
                  <b>{{specialList.sl_id_nbank_mc_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_mc_refuse">
                  <label>通过身份证查询小贷拒绝： </label>
                  <b>{{specialList.sl_id_nbank_mc_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_ca_bad">
                  <label>通过身份证查询现金类分期不良： </label>
                  <b>{{specialList.sl_id_nbank_ca_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_ca_overdue">
                  <label>通过身份证查询现金类分期短时逾期： </label>
                  <b>{{specialList.sl_id_nbank_ca_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_ca_fraud">
                  <label>通过身份证查询现金类分期欺诈： </label>
                  <b>{{specialList.sl_id_nbank_ca_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_ca_lost">
                  <label>通过身份证查询现金类分期失联： </label>
                  <b>{{specialList.sl_id_nbank_ca_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_ca_refuse">
                  <label>通过身份证查询现金类分期拒绝： </label>
                  <b>{{specialList.sl_id_nbank_ca_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_com_bad">
                  <label>通过身份证查询代偿类分期不良： </label>
                  <b>{{specialList.sl_id_nbank_com_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_com_overdue">
                  <label>通过身份证查询代偿类分期短时逾期： </label>
                  <b>{{specialList.sl_id_nbank_com_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_com_fraud">
                  <label>通过身份证查询代偿类分期欺诈： </label>
                  <b>{{specialList.sl_id_nbank_com_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_com_lost">
                  <label>通过身份证查询代偿类分期失联： </label>
                  <b>{{specialList.sl_id_nbank_com_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_com_refuse">
                  <label>通过身份证查询代偿类分期拒绝： </label>
                  <b>{{specialList.sl_id_nbank_com_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_cf_bad">
                  <label>通过身份证查询消费类分期不良： </label>
                  <b>{{specialList.sl_id_nbank_cf_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_cf_overdue">
                  <label>通过身份证查询消费类分期短时逾期： </label>
                  <b>{{specialList.sl_id_nbank_cf_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_cf_fraud">
                  <label>通过身份证查询消费类分期欺诈： </label>
                  <b>{{specialList.sl_id_nbank_cf_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_cf_lost">
                  <label>通过身份证查询消费类分期失联： </label>
                  <b>{{specialList.sl_id_nbank_cf_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_cf_refuse">
                  <label>通过身份证查询消费类分期拒绝： </label>
                  <b>{{specialList.sl_id_nbank_cf_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_other_bad">
                  <label>通过身份证查询非银其他不良： </label>
                  <b>{{specialList.sl_id_nbank_other_bad}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_other_overdue">
                  <label>通过身份证查询非银其他短时逾期： </label>
                  <b>{{specialList.sl_id_nbank_other_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_other_fraud">
                  <label>通过身份证查询非银其他欺诈： </label>
                  <b>{{specialList.sl_id_nbank_other_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_other_lost">
                  <label>通过身份证查询非银其他失联： </label>
                  <b>{{specialList.sl_id_nbank_other_lost}}</b>
                </p>
                <p v-if=" specialList.sl_id_nbank_other_refuse">
                  <label>通过身份证查询非银其他拒绝： </label>
                  <b>{{specialList.sl_id_nbank_other_refuse}}</b>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeNames" v-if="this.PhoneC">
            <el-collapse-item name="9">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">通过手机号查询
                </span>
              </template>
              <div ref='PhoneCheck'>
                <p v-if=" specialList.sl_cell_abnormal">
                  <label>通过手机号查询疑似欺诈： </label>
                  <b>{{specialList.sl_cell_abnormal}}</b>
                </p>
                <p v-if=" specialList.sl_cell_phone_overdue">
                  <label>通过手机号查询电信欠费： </label>
                  <b>{{specialList.sl_cell_phone_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_bank_bad">
                  <label>通过手机号查询银行不良： </label>
                  <b>{{specialList.sl_cell_bank_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_bank_overdue">
                  <label>通过手机号查询银行短时逾期： </label>
                  <b>{{specialList.sl_cell_bank_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_bank_fraud">
                  <label>通过手机号查询银行欺诈： </label>
                  <b>{{specialList.sl_cell_bank_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_bank_lost">
                  <label>通过手机号查询银行失联： </label>
                  <b>{{specialList.sl_cell_bank_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_bank_refuse">
                  <label>通过手机号查询银行拒绝： </label>
                  <b>{{specialList.sl_cell_bank_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_cell_p2p_bad">
                  <label>通过手机号查询非银不良： </label>
                  <b>{{specialList.sl_cell_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_p2p_overdue">
                  <label>通过手机号查询非银短时逾期： </label>
                  <b>{{specialList.sl_cell_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_p2p_fraud">
                  <label>通过手机号查询非银欺诈： </label>
                  <b>{{specialList.sl_cell_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_p2p_refuse">
                  <label>通过手机号查询非银拒绝： </label>
                  <b>{{specialList.sl_cell_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_p2p_bad">
                  <label>通过手机号查询P2P不良： </label>
                  <b>{{specialList.sl_cell_nbank_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_p2p_overdue">
                  <label>通过手机号查询P2P短时逾期： </label>
                  <b>{{specialList.sl_cell_nbank_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_p2p_fraud">
                  <label>通过手机号查询P2P欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_p2p_lost">
                  <label>通过手机号查询P2P失联： </label>
                  <b>{{specialList.sl_cell_nbank_p2p_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_p2p_refuse">
                  <label>通过手机号查询P2P拒绝： </label>
                  <b>{{specialList.sl_cell_nbank_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_mc_bad">
                  <label>通过身份证查询小贷或P2P欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_mc_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_mc_overdue">
                  <label>通过手机号查询小贷短时逾期： </label>
                  <b>{{specialList.sl_cell_nbank_mc_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_mc_fraud">
                  <label>通过手机号查询小贷欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_mc_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_mc_lost">
                  <label>通过手机号查询小贷失联： </label>
                  <b>{{specialList.sl_cell_nbank_mc_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_mc_refuse">
                  <label>通过手机号查询小贷拒绝： </label>
                  <b>{{specialList.sl_cell_nbank_mc_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_ca_bad">
                  <label>通过手机号查询现金类分期不良： </label>
                  <b>{{specialList.sl_cell_nbank_ca_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_ca_overdue">
                  <label>通过手机号查询现金类分期短时逾期： </label>
                  <b>{{specialList.sl_cell_nbank_ca_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_ca_fraud">
                  <label>通过手机号查询现金类分期欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_ca_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_ca_lost">
                  <label>通过手机号查询现金类分期失联： </label>
                  <b>{{specialList.sl_cell_nbank_ca_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_ca_refuse">
                  <label>通过手机号查询现金类分期拒绝： </label>
                  <b>{{specialList.sl_cell_nbank_ca_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_com_bad">
                  <label>通过手机号查询代偿类分期不良： </label>
                  <b>{{specialList.sl_cell_nbank_com_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_com_overdue">
                  <label>通过手机号查询代偿类分期短时逾期： </label>
                  <b>{{specialList.sl_cell_nbank_com_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_com_fraud">
                  <label>通过手机号查询代偿类分期欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_com_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_com_lost">
                  <label>通过手机号查询代偿类分期失联： </label>
                  <b>{{specialList.sl_cell_nbank_com_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_com_refuse">
                  <label>通过手机号查询代偿类分期拒绝： </label>
                  <b>{{specialList.sl_cell_nbank_com_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_cf_bad">
                  <label>通过手机号查询消费类分期不良： </label>
                  <b>{{specialList.sl_cell_nbank_cf_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_cf_overdue">
                  <label>通过手机号查询消费类分期短时逾期： </label>
                  <b>{{specialList.sl_cell_nbank_cf_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_cf_fraud">
                  <label>通过手机号查询消费类分期欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_cf_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_cf_lost">
                  <label>通过手机号查询消费类分期失联： </label>
                  <b>{{specialList.sl_cell_nbank_cf_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_other_bad">
                  <label>通过手机号查询消费类分期拒绝： </label>
                  <b>{{specialList.sl_cell_nbank_other_bad}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_other_overdue">
                  <label>通过手机号查询非银其他短时逾期： </label>
                  <b>{{specialList.sl_cell_nbank_other_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_other_fraud">
                  <label>通过手机号查询非银其他欺诈： </label>
                  <b>{{specialList.sl_cell_nbank_other_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_other_lost">
                  <label>通过手机号查询非银其他失联： </label>
                  <b>{{specialList.sl_cell_nbank_other_lost}}</b>
                </p>
                <p v-if=" specialList.sl_cell_nbank_other_refuse">
                  <label>通过手机号查询非银其他拒绝： </label>
                  <b>{{specialList.sl_cell_nbank_other_refuse}}</b>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeNames" v-if="this.linkC">
            <el-collapse-item name="10">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">通过联系人手机号查询
                </span>
              </template>
              <div ref='linkCheck'>
                <p v-if=" specialList.sl_lm_cell_abnormal">
                  <label>通过联系人手机查询疑似欺诈： </label>
                  <b>{{specialList.sl_lm_cell_abnormal}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_phone_overdue">
                  <label>通过联系人手机查询电信欠费： </label>
                  <b>{{specialList.sl_lm_cell_phone_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_bank_bad">
                  <label>通过联系人手机查询银行不良： </label>
                  <b>{{specialList.sl_lm_cell_bank_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_bank_overdue">
                  <label>通过联系人手机查询银行短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_bank_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_bank_fraud">
                  <label>通过联系人手机查询银行欺诈： </label>
                  <b>{{specialList.sl_lm_cell_bank_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_bank_lost">
                  <label>通过联系人手机查询银行失联： </label>
                  <b>{{specialList.sl_lm_cell_bank_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_bank_refuse">
                  <label>通过联系人手机查询银行拒绝： </label>
                  <b>{{specialList.sl_lm_cell_bank_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_p2p_bad">
                  <label>通过联系人手机查询P2P不良： </label>
                  <b>{{specialList.sl_lm_cell_nbank_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_p2p_overdue">
                  <label>通过联系人手机查询P2P短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_nbank_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_p2p_fraud">
                  <label>通过联系人手机查询P2P欺诈： </label>
                  <b>{{specialList.sl_lm_cell_nbank_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_p2p_lost">
                  <label>通过联系人手机查询p2p失联： </label>
                  <b>{{specialList.sl_lm_cell_nbank_p2p_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_p2p_refuse">
                  <label>通过联系人手机查询P2P拒绝： </label>
                  <b>{{specialList.sl_lm_cell_nbank_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_mc_bad">
                  <label>通过联系人手机查询小贷不良： </label>
                  <b>{{specialList.sl_lm_cell_nbank_mc_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_mc_overdue">
                  <label>通过联系人手机查询小贷短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_nbank_mc_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_mc_fraud">
                  <label>通过联系人手机查询小贷欺诈： </label>
                  <b>{{specialList.sl_lm_cell_nbank_mc_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_mc_lost">
                  <label>通过联系人手机查询小贷失联： </label>
                  <b>{{specialList.sl_lm_cell_nbank_mc_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_mc_refuse">
                  <label>通过联系人手机查询小贷拒绝： </label>
                  <b>{{specialList.sl_lm_cell_nbank_mc_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_ca_bad">
                  <label>通过联系人手机查询现金类分期不良： </label>
                  <b>{{specialList.sl_lm_cell_nbank_ca_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_ca_overdue">
                  <label>通过联系人手机查询现金类分期短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_nbank_ca_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_ca_fraud">
                  <label>通过联系人手机查询现金类分期欺诈： </label>
                  <b>{{specialList.sl_lm_cell_nbank_ca_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_ca_lost">
                  <label>通过联系人手机查询现金类分期失联： </label>
                  <b>{{specialList.sl_lm_cell_nbank_ca_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_ca_refuse">
                  <label>通过联系人手机查询现金类分期拒绝： </label>
                  <b>{{specialList.sl_lm_cell_nbank_ca_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_com_bad">
                  <label>通过联系人手机查询代偿类分期不良： </label>
                  <b>{{specialList.sl_lm_cell_nbank_com_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_com_overdue">
                  <label>通过联系人手机查询代偿类分期短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_nbank_com_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_com_fraud">
                  <label>通过联系人手机查询代偿类分期欺诈： </label>
                  <b>{{specialList.sl_lm_cell_nbank_com_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_com_lost">
                  <label>通过联系人手机查询代偿类分期失联： </label>
                  <b>{{specialList.sl_lm_cell_nbank_com_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_com_refuse">
                  <label>通过联系人手机查询代偿类分期拒绝： </label>
                  <b>{{specialList.sl_lm_cell_nbank_com_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_cf_bad">
                  <label>通过联系人手机查询消费类分期不良： </label>
                  <b>{{specialList.sl_lm_cell_nbank_cf_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_cf_overdue">
                  <label>通过联系人手机查询消费类分期短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_nbank_cf_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_cf_fraud">
                  <label>通过联系人手机查询消费类分期欺诈： </label>
                  <b>{{specialList.sl_lm_cell_nbank_cf_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_cf_lost">
                  <label>通过联系人手机查询消费类分期失联： </label>
                  <b>{{specialList.sl_lm_cell_nbank_cf_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_cf_refuse">
                  <label>通过联系人手机查询消费类分期拒绝： </label>
                  <b>{{specialList.sl_lm_cell_nbank_cf_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_other_bad">
                  <label>通过联系人手机查询非银其他不良： </label>
                  <b>{{specialList.sl_lm_cell_nbank_other_bad}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_other_overdue">
                  <label>通过联系人手机查询非银其他短时逾期： </label>
                  <b>{{specialList.sl_lm_cell_nbank_other_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_other_fraud">
                  <label>通过联系人手机查询非银其他欺诈： </label>
                  <b>{{specialList.sl_lm_cell_nbank_other_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_other_lost">
                  <label>通过联系人手机查询非银其他失联： </label>
                  <b>{{specialList.sl_lm_cell_nbank_other_lost}}</b>
                </p>
                <p v-if=" specialList.sl_lm_cell_nbank_other_refuse">
                  <label>通过联系人手机查询非银其他拒绝： </label>
                  <b>{{specialList.sl_lm_cell_nbank_other_refuse}}</b>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeNames" v-if="this.GIDC">
            <el-collapse-item name="11">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">通过GID查询
                </span>
              </template>
              <div ref='GIDCheck'>
                <p v-if=" specialList.sl_gid_phone_overdue">
                  <label>通过百融标识查询电信欠费： </label>
                  <b>{{specialList.sl_gid_phone_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_bank_bad">
                  <label>通过百融标识查询银行不良： </label>
                  <b>{{specialList.sl_gid_bank_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_bank_overdue">
                  <label>通过百融标识查询银行短时逾期： </label>
                  <b>{{specialList.sl_gid_bank_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_bank_fraud">
                  <label>通过百融标识查询银行欺诈： </label>
                  <b>{{specialList.sl_gid_bank_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_bank_lost">
                  <label>通过百融标识查询银行失联： </label>
                  <b>{{specialList.sl_gid_bank_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_bank_refuse">
                  <label>通过百融标识查询银行拒绝： </label>
                  <b>{{specialList.sl_gid_bank_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_p2p_bad">
                  <label>通过百融标识查询非银不良： </label>
                  <b>{{specialList.sl_gid_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_p2p_overdue">
                  <label>通过百融标识查询非银短时逾期： </label>
                  <b>{{specialList.sl_gid_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_p2p_fraud">
                  <label>通过百融标识查询非银欺诈： </label>
                  <b>{{specialList.sl_gid_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_p2p_lost">
                  <label>通过百融标识查询非银失联： </label>
                  <b>{{specialList.sl_gid_p2p_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_p2p_refuse">
                  <label>通过百融标识查询非银拒绝： </label>
                  <b>{{specialList.sl_gid_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_p2p_bad">
                  <label>通过百融用户全局标识查询P2P不良： </label>
                  <b>{{specialList.sl_gid_nbank_p2p_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_p2p_overdue">
                  <label>通过百融用户全局标识查询P2P短时逾期： </label>
                  <b>{{specialList.sl_gid_nbank_p2p_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_p2p_fraud">
                  <label>通过百融用户全局标识查询P2P欺诈： </label>
                  <b>{{specialList.sl_gid_nbank_p2p_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_p2p_lost">
                  <label>通过百融用户全局标识查询p2p失联： </label>
                  <b>{{specialList.sl_gid_nbank_p2p_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_p2p_refuse">
                  <label>通过百融用户全局标识查询P2P拒绝： </label>
                  <b>{{specialList.sl_gid_nbank_p2p_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_mc_bad">
                  <label>通过百融用户全局标识查询小贷不良： </label>
                  <b>{{specialList.sl_gid_nbank_mc_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_mc_overdue">
                  <label>通过百融用户全局标识查询小贷短时逾期： </label>
                  <b>{{specialList.sl_gid_nbank_mc_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_mc_fraud">
                  <label>通过百融用户全局标识查询小贷欺诈： </label>
                  <b>{{specialList.sl_gid_nbank_mc_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_mc_lost">
                  <label>通过百融用户全局标识查询小贷失联： </label>
                  <b>{{specialList.sl_gid_nbank_mc_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_mc_refuse">
                  <label>通过百融用户全局标识查询小贷拒绝： </label>
                  <b>{{specialList.sl_gid_nbank_mc_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_ca_bad">
                  <label>通过百融用户全局标识查询现金类分期不良： </label>
                  <b>{{specialList.sl_gid_nbank_ca_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_ca_overdue">
                  <label>通过百融用户全局标识查询现金类分期短时逾期： </label>
                  <b>{{specialList.sl_gid_nbank_ca_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_ca_fraud">
                  <label>通过百融用户全局标识查询现金类分期欺诈： </label>
                  <b>{{specialList.sl_gid_nbank_ca_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_ca_lost">
                  <label>通过百融用户全局标识查询现金类分期失联： </label>
                  <b>{{specialList.sl_gid_nbank_ca_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_ca_refuse">
                  <label>通过百融用户全局标识查询现金类分期拒绝： </label>
                  <b>{{specialList.sl_gid_nbank_ca_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_com_bad">
                  <label>通过百融用户全局标识查询代偿类分期不良： </label>
                  <b>{{specialList.sl_gid_nbank_com_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_com_overdue">
                  <label>通过百融用户全局标识查询代偿类分期短时逾期： </label>
                  <b>{{specialList.sl_gid_nbank_com_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_com_fraud">
                  <label>通过百融用户全局标识查询代偿类分期欺诈： </label>
                  <b>{{specialList.sl_gid_nbank_com_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_com_lost">
                  <label>通过百融用户全局标识查询代偿类分期失联： </label>
                  <b>{{specialList.sl_gid_nbank_com_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_com_refuse">
                  <label>通过百融用户全局标识查询代偿类分期拒绝： </label>
                  <b>{{specialList.sl_gid_nbank_com_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_cf_bad">
                  <label>通过百融用户全局标识查询消费类分期不良： </label>
                  <b>{{specialList.sl_gid_nbank_cf_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_cf_overdue">
                  <label>通过百融用户全局标识查询消费类分期短时逾期： </label>
                  <b>{{specialList.sl_gid_nbank_cf_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_cf_fraud">
                  <label>通过百融用户全局标识查询消费类分期欺诈： </label>
                  <b>{{specialList.sl_gid_nbank_cf_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_cf_lost">
                  <label>通过百融用户全局标识查询消费类分期失联： </label>
                  <b>{{specialList.sl_gid_nbank_cf_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_cf_refuse">
                  <label>通过百融用户全局标识查询消费类分期拒绝： </label>
                  <b>{{specialList.sl_gid_nbank_cf_refuse}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_other_bad">
                  <label>通过百融用户全局标识查询非银其他不良： </label>
                  <b>{{specialList.sl_gid_nbank_other_bad}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_other_overdue">
                  <label>通过百融用户全局标识查询非银其他短时逾期： </label>
                  <b>{{specialList.sl_gid_nbank_other_overdue}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_other_fraud">
                  <label>通过百融用户全局标识查询非银其他欺诈： </label>
                  <b>{{specialList.sl_gid_nbank_other_fraud}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_other_lost">
                  <label>通过百融用户全局标识查询非银其他失联： </label>
                  <b>{{specialList.sl_gid_nbank_other_lost}}</b>
                </p>
                <p v-if=" specialList.sl_gid_nbank_other_refuse">
                  <label>通过百融用户全局标识查询非银其他拒绝： </label>
                  <b>{{specialList.sl_gid_nbank_other_refuse}}</b>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">百融多次申请核查</span>
        </template>
        <div class="lists TwoPart">
          <p v-if="  applyloan.al_m3_gid_bank_selfnum|| applyloan.al_m3_gid_bank_selfnum==0">
            <label>近3个月百融标识在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m3_gid_bank_selfnum}}</b>
          </p>
          <p v-if=" applyloan.al_m3_gid_bank_allnum|| applyloan.al_m3_gid_bank_allnum==0">
            <label>近3个月百融标识在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m3_gid_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_gid_bank_orgnum|| applyloan.al_m3_gid_bank_orgnum==0">
            <label>近3个月百融标识在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m3_gid_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_gid_notbank_selfnum|| applyloan.al_m3_gid_notbank_selfnum==0">
            <label>近3个月百融标识在本非银机构申请次数：</label>
            <b>{{applyloan.al_m3_gid_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_gid_notbank_allnum|| applyloan.al_m3_gid_notbank_allnum==0">
            <label>近3个月百融标识在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m3_gid_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_gid_notbank_orgnum|| applyloan.al_m3_gid_notbank_orgnum==0">
            <label>近3个月百融标识在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m3_gid_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_id_bank_selfnum|| applyloan.al_m3_id_bank_selfnum==0">
            <label>近3个月身份证在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m3_id_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_id_bank_allnum|| applyloan.al_m3_id_bank_allnum==0">
            <label>近3个月身份证在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m3_id_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_id_bank_orgnum|| applyloan.al_m3_id_bank_orgnum==0">
            <label>近3个月身份证在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m3_id_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_id_notbank_selfnum|| applyloan.al_m3_id_notbank_selfnum==0">
            <label>近3个月身份证在本非银机构申请次数：</label>
            <b>{{applyloan.al_m3_id_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_id_notbank_allnum|| applyloan.al_m3_id_notbank_allnum==0">
            <label>近3个月身份证在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m3_id_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_id_notbank_orgnum|| applyloan.al_m3_id_notbank_orgnum==0">
            <label>近3个月身份证在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m3_id_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_cell_bank_selfnum|| applyloan.al_m3_cell_bank_selfnum==0">
            <label>近3个月手机号在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m3_cell_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_cell_bank_allnum|| applyloan.al_m3_cell_bank_allnum==0">
            <label>近3个月手机号在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m3_cell_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_cell_bank_orgnum|| applyloan.al_m3_cell_bank_orgnum==0">
            <label>近3个月手机号在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m3_cell_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_cell_notbank_selfnum|| applyloan.al_m3_cell_notbank_selfnum==0">
            <label>近3个月手机号在本非银机构申请次数：</label>
            <b>{{applyloan.al_m3_cell_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_cell_notbank_allnum|| applyloan.al_m3_cell_notbank_allnum==0">
            <label>近3个月手机号在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m3_cell_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m3_cell_notbank_orgnum|| applyloan.al_m3_cell_notbank_orgnum==0">
            <label>近3个月手机号在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m3_cell_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_gid_bank_selfnum|| applyloan.al_m6_gid_bank_selfnum==0">
            <label>近6个月百融标识在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m6_gid_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_gid_bank_allnum|| applyloan.al_m6_gid_bank_allnum==0">
            <label>近6个月百融标识在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m6_gid_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_gid_bank_orgnum|| applyloan.al_m6_gid_bank_orgnum==0">
            <label>近6个月百融标识在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m6_gid_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_gid_notbank_selfnum|| applyloan.al_m6_gid_notbank_selfnum==0">
            <label>近6个月百融标识在本非银机构申请次数：</label>
            <b>{{applyloan.al_m6_gid_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_gid_notbank_allnum|| applyloan.al_m6_gid_notbank_allnum==0">
            <label>近6个月百融标识在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m6_gid_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_gid_notbank_orgnum|| applyloan.al_m6_gid_notbank_orgnum==0">
            <label>近6个月百融标识在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m6_gid_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_id_bank_selfnum|| applyloan.al_m6_id_bank_selfnum==0">
            <label>近6个月身份证在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m6_id_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_id_bank_allnum|| applyloan.al_m6_id_bank_allnum==0">
            <label>近6个月身份证在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m6_id_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_id_bank_orgnum|| applyloan.al_m6_id_bank_orgnum==0">
            <label>近6个月身份证在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m6_id_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_id_notbank_selfnum|| applyloan.al_m6_id_notbank_selfnum==0">
            <label>近6个月身份证在本非银机构申请次数：</label>
            <b>{{applyloan.al_m6_id_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_id_notbank_allnum|| applyloan.al_m6_id_notbank_allnum==0">
            <label>近6个月身份证在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m6_id_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_id_notbank_orgnum|| applyloan.al_m6_id_notbank_orgnum==0">
            <label>近6个月身份证在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m6_id_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_cell_bank_selfnum|| applyloan.al_m6_cell_bank_selfnum==0">
            <label>近6个月手机号在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m6_cell_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_cell_bank_allnum|| applyloan.al_m6_cell_bank_allnum==0">
            <label>近6个月手机号在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m6_cell_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_cell_bank_orgnum|| applyloan.al_m6_cell_bank_orgnum==0">
            <label>近6个月手机号在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m6_cell_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_cell_notbank_selfnum|| applyloan.al_m6_cell_notbank_selfnum==0">
            <label>近6个月手机号在本非银机构申请次数：</label>
            <b>{{applyloan.al_m6_cell_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_cell_notbank_allnum|| applyloan.al_m6_cell_notbank_allnum==0">
            <label>近6个月手机号在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m6_cell_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m6_cell_notbank_orgnum|| applyloan.al_m6_cell_notbank_orgnum==0">
            <label>近6个月手机号在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m6_cell_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_gid_bank_selfnum|| applyloan.al_m12_gid_bank_selfnum==0">
            <label>近12个月百融标识在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m12_gid_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_gid_bank_allnum|| applyloan.al_m12_gid_bank_allnum==0">
            <label>近12个月百融标识在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m12_gid_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_gid_bank_orgnum|| applyloan.al_m12_gid_bank_orgnum==0">
            <label>近12个月百融标识在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m12_gid_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_gid_notbank_selfnum|| applyloan.al_m12_gid_notbank_selfnum==0">
            <label>近12个月百融标识在本非银机构申请次数：</label>
            <b>{{applyloan.al_m12_gid_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_gid_notbank_allnum|| applyloan.al_m12_gid_notbank_allnum==0">
            <label>近12个月百融标识在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m12_gid_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_gid_notbank_orgnum|| applyloan.al_m12_gid_notbank_orgnum==0">
            <label>近12个月百融标识在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m12_gid_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_id_bank_selfnum|| applyloan.al_m12_id_bank_selfnum==0">
            <label>近12个月身份证在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m12_id_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_id_bank_allnum|| applyloan.al_m12_id_bank_allnum==0">
            <label>近12个月身份证在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m12_id_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_id_bank_orgnum|| applyloan.al_m12_id_bank_orgnum==0">
            <label>近12个月身份证在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m12_id_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_id_notbank_selfnum|| applyloan.al_m12_id_notbank_selfnum==0">
            <label>近12个月身份证在本非银机构申请次数：</label>
            <b>{{applyloan.al_m12_id_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_id_notbank_allnum|| applyloan.al_m12_id_notbank_allnum==0">
            <label>近12个月身份证在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m12_id_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_id_notbank_orgnum|| applyloan.al_m12_id_notbank_orgnum==0">
            <label>近12个月身份证在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m12_id_notbank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_cell_bank_selfnum|| applyloan.al_m12_cell_bank_selfnum==0">
            <label>近12个月手机号在本银行机构的申请次数：</label>
            <b>{{applyloan.al_m12_cell_bank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_cell_bank_allnum|| applyloan.al_m12_cell_bank_allnum==0">
            <label>近12个月手机号在百融银行合作机构申请次数：</label>
            <b>{{applyloan.al_m12_cell_bank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_cell_bank_orgnum|| applyloan.al_m12_cell_bank_orgnum==0">
            <label>近12个月手机号在百融银行合作机构申请机构数：</label>
            <b>{{applyloan.al_m12_cell_bank_orgnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_cell_notbank_selfnum|| applyloan.al_m12_cell_notbank_selfnum==0">
            <label>近12个月手机号在本非银机构申请次数：</label>
            <b>{{applyloan.al_m12_cell_notbank_selfnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_cell_notbank_allnum|| applyloan.al_m12_cell_notbank_allnum==0">
            <label>近12个月手机号在百融非银合作机构申请次数：</label>
            <b>{{applyloan.al_m12_cell_notbank_allnum }}</b>
          </p>
          <p v-if=" applyloan.al_m12_cell_notbank_orgnum|| applyloan.al_m12_cell_notbank_orgnum==0">
            <label>近12个月手机号在百融非银合作机构申请机构数：</label>
            <b>{{applyloan.al_m12_cell_notbank_orgnum }}</b>
          </p>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">百融法院执行人</span>
        </template>
        <div class="lists">
          <p v-if=" execution.ex_bad1_name">
            <label>姓名：</label>
            <b>{{execution.ex_bad1_name }}</b>
          </p>
          <p v-if=" execution.ex_bad1_cid">
            <label>身份证号_组织机构代码：</label>
            <b>{{execution.ex_bad1_cid }}</b>
          </p>
          <p v-if=" execution.ex_bad1_cidtype">
            <label>证件类型：</label>
            <b>{{execution.ex_bad1_cidtype }}</b>
          </p>
          <p v-if=" execution.ex_bad1_datatime">
            <label>数据时间：</label>
            <b>{{execution.ex_bad1_datatime }}</b>
          </p>
          <p v-if=" execution.ex_bad1_datatypeid">
            <label>数据类型编码：</label>
            <b>{{execution.ex_bad1_datatypeid }}</b>
          </p>
          <p v-if="execution.ex_bad1_datatype">
            <label>数据类型：</label>
            <b>{{execution.ex_bad1_datatype }}</b>
          </p>
          <p v-if="execution.ex_bad1_leader">
            <label>法定代表人_负责人：</label>
            <b>{{execution.ex_bad1_leader }}</b>
          </p>
          <p v-if="execution.ex_bad1_address">
            <label>住所地：</label>
            <b>{{execution.ex_bad1_address }}</b>
          </p>
          <p v-if="execution.ex_bad1_court">
            <label>执行法院：</label>
            <b>{{execution.ex_bad1_court }}</b>
          </p>
          <p v-if="execution.ex_bad1_time">
            <label>立案时间：</label>
            <b>{{execution.ex_bad1_time }}</b>
          </p>
          <p v-if="execution.ex_bad1_casenum">
            <label>执行案号：</label>
            <b>{{execution.ex_bad1_casenum }}</b>
          </p>
          <p v-if="execution.ex_bad1_money">
            <label>执行标的：</label>
            <b>{{execution.ex_bad1_money }}</b>
          </p>
          <p v-if="execution.ex_bad1_base">
            <label>执行依据文号：</label>
            <b>{{execution.ex_bad1_base }}</b>
          </p>
          <p v-if="execution.ex_bad1_basecompany">
            <label>做出执行依据单位：</label>
            <b>{{execution.ex_bad1_basecompany }}</b>
          </p>
          <p v-if="execution.ex_bad1_obligation">
            <label>生效法律文书确定的义务：</label>
            <b>{{execution.ex_bad1_obligation }}</b>
          </p>
          <p v-if="execution.ex_bad1_lasttime">
            <label>生效法律文书确定的最后履行义务截止时间：</label>
            <b>{{execution.ex_bad1_lasttime }}</b>
          </p>
          <p v-if="execution.ex_bad1_performance">
            <label>被执行人的履行情况：</label>
            <b>{{execution.ex_bad1_performance }}</b>
          </p>
          <p v-if="execution.ex_bad1_concretesituation">
            <label>失信被执行人行为具体情形：</label>
            <b>{{execution.ex_bad1_concretesituation }}</b>
          </p>
          <p v-if="execution.ex_bad1_breaktime">
            <label>认定失信时间：</label>
            <b>{{execution.ex_bad1_breaktime }}</b>
          </p>
          <p v-if="execution.ex_bad10_posttime">
            <label>发布时间：</label>
            <b>{{execution.ex_bad10_posttime }}</b>
          </p>
          <p v-if="execution.ex_bad10_performedpart">
            <label>已履行：</label>
            <b>{{execution.ex_bad10_performedpart }}</b>
          </p>
          <p v-if="execution.ex_bad10_unperformpart">
            <label>未履行：</label>
            <b>{{execution.ex_bad10_unperformpart }}</b>
          </p>
          <p v-if="execution.ex_execut10_name">
            <label>姓名：</label>
            <b>{{execution.ex_execut10_name }}</b>
          </p>
          <p v-if="execution.ex_execut10_cid">
            <label>身份证号_组织机构代码：</label>
            <b>{{execution.ex_execut10_cid }}</b>
          </p>
          <p v-if="execution.ex_execut10_cidtype">
            <label>证件类型：</label>
            <b>{{execution.ex_execut10_cidtype }}</b>
          </p>
          <p v-if="execution.ex_execut10_datatime">
            <label>数据时间：</label>
            <b>{{execution.ex_execut10_datatime }}</b>
          </p>
          <p v-if="execution.ex_execut10_datatypeid">
            <label>数据类型编码：</label>
            <b>{{execution.ex_execut10_datatypeid }}</b>
          </p>
          <p v-if="execution.ex_execut10_datatype">
            <label>数据类型：</label>
            <b>{{execution.ex_execut10_datatype }}</b>
          </p>
          <p v-if="execution.ex_execut10_court">
            <label>执行法院：</label>
            <b>{{execution.ex_execut10_court }}</b>
          </p>
          <p v-if="execution.ex_execut10_time">
            <label>立案时间：</label>
            <b>{{execution.ex_execut10_time }}</b>
          </p>
          <p v-if="execution.ex_execut10_casenum">
            <label>执行案号：</label>
            <b>{{execution.ex_execut10_casenum }}</b>
          </p>
          <p v-if="execution.ex_execut10_money">
            <label>执行标的：</label>
            <b>{{execution.ex_execut10_money }}</b>
          </p>
          <p v-if="execution.ex_execut10_statute">
            <label>案件状态：</label>
            <b>{{execution.ex_execut10_statute }}</b>
          </p>
          <p v-if="execution.ex_execut10_basic">
            <label>执行依据：</label>
            <b>{{execution.ex_execut10_basic }}</b>
          </p>
          <p v-if="execution.ex_execut10_basiccourt">
            <label>做出执行依据的机构：</label>
            <b>{{execution.ex_execut10_basiccourt }}</b>
          </p>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">百融个人不良信息</span>
        </template>
        <div class="lists">
          <el-collapse v-model="activeNames">
            <el-collapse-item name="5">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">产品输出标识
                </span>
              </template>
              <div>
                <ul>
                  <li>
                    <p style="width:100%;">
                      <label>个人不良信息查询高级版产品计费标识：</label>
                      <b style="width:800px;">{{outputAndParam.flagCrimeinfoProTxt}}</b>
                    </p>
                  </li>
                </ul>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeNames">
            <el-collapse-item name="6">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">返回参数
                </span>
              </template>
              <div>
                <ul>
                  <li>
                    <p>
                      <label>提交状态码说明：</label>
                      <b>{{outputAndParam.apiDesc}}</b>
                    </p>
                    <p>
                      <label>返回结果码说明： </label>
                      <b>{{outputAndParam.resultDesc}}</b>
                    </p>
                    <p>
                      <label>核验代码描述： </label>
                      <b>{{outputAndParam.checkMsg}}</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>前科案件数量： </label>
                      <b>{{outputAndParam.checkCount}}</b>
                    </p>
                  </li>
                </ul>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeNames">
            <el-collapse-item name="7">
              <template slot="title">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="second_icon_hat">
                <span class="Second_title">案件说明</span>
              </template>
              <div class="height_auto">
                <el-table :data="tableData" border height="100%" style="width: 100%">
                  <el-table-column prop="caseType" label="案件类别 " min-width="70">
                  </el-table-column>
                  <el-table-column prop="caseTime" label="案发时间 " min-width="70">
                  </el-table-column>
                  <el-table-column prop="caseSource" label="案件来源 " min-width="100">
                  </el-table-column>
                  <el-table-column prop="caseLevel" label="案件级别 " min-width="100">
                  </el-table-column>
                </el-table>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn'
  export default {
    data() {
      return {
        applyloan: {},
        specialList: {},
        execution: {},
        outputAndParam: {},
        tableData: [],
        IDC: true,
        PhoneC: true,
        linkC: true,
        GIDC: true,
        localInf: null,
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
      }
    },
    props: {
      applyId: {
        type: String,
        default: '',
        required: true
      }
    },
    mounted() {
      this.getInf();
    },
    methods: {
      getInf() {
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrTabInfo.action', {
          // applyId: '9e56e245-bd30-4a51-97e9-c255ea7171b6',
          applyId: this.applyId
        }).then(res => {
          if (res.success) {
            this.outputAndParam = res.obj.crimeInfo; //个人不良信息-产品输出标识、返回参数
            this.tableData = res.obj.crimeInfoDetails.rows; //个人不良信息-命中规则
            //特殊名单核查
            for (let key in res.obj.specialListc) {
              if (res.obj.specialListc[key]) {
                this.specialList[key] = res.obj.specialListc[key];
              }
            }
            // 多次申请核查
            for (let key in res.obj.applyloanc) {
              if (res.obj.applyloanc[key] || res.obj.applyloanc[key] == '0') {
                this.applyloan[key] = res.obj.applyloanc[key];
              }
            }
            // 法院执行人
            for (let key in res.obj.executionc) {
              if (res.obj.executionc[key]) {
                this.execution[key] = res.obj.executionc[key];
              }
            }
            this.$nextTick(() => {
              this.$refs.IDCheck.children.length == 0 ? this.IDC = false : this.IDC = true;
              this.$refs.PhoneCheck.children.length == 0 ? this.PhoneC = false : this.PhoneC = true;
              this.$refs.linkCheck.children.length == 0 ? this.linkC = false : this.linkC = true;
              this.$refs.GIDCheck.children.length == 0 ? this.GIDC = false : this.GIDC = true;
            })
          } 
        });
      }
    },
  }

</script>
<style scoped>
  .second_icon_hat {
    position: absolute;
    top: 12px;
    left: 35px;
    width: 16px
  }

  .SSComp p {
    margin-bottom: 4px;
    border-bottom: 1px solid #ebeef5;
  }

  .SSComp label {
    display: inline-block;
    text-align: right;
    width: 350px;
  }

  .SSComp b {
    display: inline-block;
    width: 300px;
  }

  .tab_wrap {
    margin: 10px;
    border-radius: 4px;
    overflow-x: hidden;
  }

  .Second_title {
    font-size: 14px;
    margin-left: 15px;
  }

</style>
