<!-- 电话征信 - 家庭联系人 -->
<template>
  <div>
    <el-form>
      <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">新增调查日志</span>
      </div>
      <ul class=" margin_10_5_0_5 el_form_item_height_35">
        <li class="clearFix">
          <el-form-item class="width_33Per" label='电话名称：' :label-width="label_160">
            <el-input v-model="custName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item class="width_33Per" label='电话类型：' :label-width="label_160">
            <el-select v-model="phoneType" :disabled="true">
              <el-option label="家庭联系人" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="width_33Per" label='电话号码：' :label-width="label_160">
            <el-input v-model="phoneNum" :disabled="true"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_33Per require_red" label='来源：' :label-width="label_160">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-select v-model="Fsource" @change="changes('Fsource')">
                <el-option label="申请表" value="00"></el-option>
                <el-option label="第三方查询" value="01"></el-option>
                <el-option label="其他" value="02"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item class="width_33Per require_red" label='接听情况：' :label-width="label_160">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-select v-model="Fanswer">
                <el-option label="无人接" value="00"></el-option>
                <el-option label="拒接" value="01"></el-option>
                <el-option label="停机" value="02"></el-option>
                <el-option label="空号" value="03"></el-option>
                <el-option label="接通" value="04"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item class="width_33Per require_red" label='调查阶段：' :label-width="label_160">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-select v-model="FcheckStage">
                <el-option label="正在调查" value="00"></el-option>
                <el-option label="完成调查" value="01"></el-option>
                <el-option label="调查失败" value="02"></el-option>
                <el-option label="未调查" value="03"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item v-if="Fsource=='02'" class="width_40Per height_80 " label="其他来源说明：" :label-width="label_160">
            <el-input v-model="FsourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title">电话名称：</div>
          <div>
            <el-input v-model="custName" :disabled="true"></el-input>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">电话类型：</div>
          <div>
            <el-select v-model="phoneType" :disabled="true">
              <el-option label="家庭联系人" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">电话号码：</div>
          <div>
            <el-input v-model="phoneNum" :disabled="true"></el-input>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            <span class="require-icon" style="left:80px;">* </span>来源：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="Fsource">
              <el-option label="申请表" value="00"></el-option>
              <el-option label="第三方查询" value="01"></el-option>
              <el-option label="其他" value="02"></el-option>
            </el-select>
          </el-tooltip>
        </li>
        <li class="item-column3">
          <div class="left-title">
            <span class="require-icon" style="left:50px;">* </span>接听情况：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="Fanswer">
              <el-option label="无人接" value="00"></el-option>
              <el-option label="拒接" value="01"></el-option>
              <el-option label="停机" value="02"></el-option>
              <el-option label="空号" value="03"></el-option>
              <el-option label="接通" value="04"></el-option>
            </el-select>
          </el-tooltip>
        </li> -->
        <!-- <li class="item-column3 Phone_credit_Form_search_bottom">
          <div class="left-title">
            <span class="require-icon" style="left:50px;">* </span>调查阶段：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="FcheckStage">
              <el-option label="正在调查" value="00"></el-option>
              <el-option label="完成调查" value="01"></el-option>
              <el-option label="调查失败" value="02"></el-option>
              <el-option label="未调查" value="03"></el-option>
            </el-select>
          </el-tooltip>
        </li>
        <li class="item-column1" v-show="Fsource=='02'">
          <div class="left-title">其他来源说明：</div>
          <div class="textarea-class">
            <el-input v-model="FsourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
          </div>
        </li> -->
      </ul>
      <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">录入家庭联系人电话调查信息</span>
      </div>
      <ul class="margin_left_5 margin_right_5">
        <li class="clearFix">
          <el-form-item class="height_80 width_66Per margin_top_5" label='第三方查询信息：' :label-width="label_160">
            <el-input type="textarea" v-model="FthirdResult" :rows="3" resize=none :maxlength="500"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per require_red" label='三方查询是否异常：' :label-width="label_160">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-select v-model="FthreeQueries" @change="changes('FthreeQueries')">
                <el-option label="否" value="0"></el-option>
                <el-option label="是" value="1"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item v-if="FthreeQueries=='1'" class="width_60Per height_60 require_red " label="说明：" :label-width="label_145">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-input v-model="FthreeQueriestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </el-tooltip>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per require_red" label='微信/支付宝是否异常：' :label-width="label_160">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-select v-model="Fmobilepayment" @change="changes('Fmobilepayment')">
                <el-option label="否" value="0"></el-option>
                <el-option label="是" value="1"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item v-if="Fmobilepayment=='1'" class="width_60Per height_60 require_red" label="说明：" :label-width="label_145">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-input v-model="Fmobilepaymenttxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </el-tooltip>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per line_H_16_label" label='是否与家庭联系人为同一接听人：' :label-width="label_160">
            <el-select v-model="FissameFam" @change="changes('FissameFam')">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="FissameFam==0" class="width_60Per height_60 " label="说明：" :label-width="label_145">
            <el-input v-model="FissameFamtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per" label='与借款人关系：' :label-width="label_160">
            <el-select v-model="FrelBorrower" @change="changes('FrelBorrower')">
              <el-option label="父母" value="00"></el-option>
              <el-option label="爱人" value="01"></el-option>
              <el-option label="子女" value="02"></el-option>
              <el-option label="其他" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="FrelBorrower=='03'" class="width_60Per height_60 " label="说明：" :label-width="label_145">
            <el-input v-model="FrelBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per" label='核对工作情况：' :label-width="label_160">
            <el-select v-model="FcheckWork" @change="changes('FcheckWork')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="FcheckWork=='01'" class="width_60Per height_60 " label="说明：" :label-width="label_145">
            <el-input v-model="FcheckWorktxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per" label='核对婚姻情况：' :label-width="label_160">
            <el-select v-model="FmaritalStatus">
              <el-option label="未婚" value="00"></el-option>
              <el-option label="已婚" value="01"></el-option>
              <el-option label="离异" value="02"></el-option>
              <el-option label="丧偶" value="03"></el-option>
              <el-option label="准备结婚" value="04"></el-option>
              <el-option label="被调查人不清楚" value="05"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="width_60Per" label="核对子女情况：" :label-width="label_145">
            <el-select v-model="FmaritalStatustxt">
              <el-option label="有子女" value="00"></el-option>
              <el-option label="无子女" value="01"></el-option>
            </el-select>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per" label='核实居住地址：' :label-width="label_160">
            <el-select v-model="FcheckAddr" @change="changes('FcheckAddr')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="FcheckAddr=='01'" class="width_60Per height_60 " label="说明：" :label-width="label_145">
            <el-input v-model="FcheckAddrtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per" label='核对房产：' :label-width="label_160">
            <el-select v-model="FcheckEstate" @change="changes('FcheckEstate')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="租房" value="02"></el-option>
              <el-option label="与父母同住" value="03"></el-option>
              <el-option label="被调查人不清楚" value="04"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="FcheckEstate=='00'" class="width_60Per height_60 " label="说明：" :label-width="label_145">
            <el-input v-model="FcheckEstatetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per" label='其他收入：' :label-width="label_160">
            <el-select v-model="FotherIncome" @change="changes('FotherIncome')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="FotherIncome=='00'" class="width_60Per height_60 " label="说明：" :label-width="label_145">
            <el-input v-model="FotherIncometxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item label="调查结果：" class="height_120 require_red width_66Per" :label-width="label_160">
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-input type="textarea" v-model="Fconclusion" :rows="5" resize=none :maxlength="500"></el-input>
            </el-tooltip>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-button type="primary margin_left_600" @click="submitForm('form')">确定</el-button>
        </li>
      </ul>
    </el-form>
    <!-- <ul style="margin-left:15px;"> -->
    <!-- <div class="content-ul">
              <li class="item-column1">
                <div class="left-title">第三方查询信息：</div>
                <div class="textarea-class">
                  <el-input type="textarea" v-model="FthirdResult" :rows="3" resize=none :maxlength="500"></el-input>
                </div>
              </li>
            </div>
            <div class="content-ul">
              <li class="item-column3">
                <div class="left-title">
                  <span class="require-icon" style="left:0px;">* </span>三方查询是否异常：</div>
                <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
                  <el-select v-model="FthreeQueries" @change="changes('FthreeQueries')">
                    <el-option label="否" value="0"></el-option>
                    <el-option label="是" value="1"></el-option>
                  </el-select>
                </el-tooltip>
              </li>
              <li class="item-column2 item-column3-2">
                <div class="left-title" v-show="FthreeQueries=='1'">
                  <span class="require-icon" style="left:80px;">* </span>说明：</div>
                <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
                  <div class="textarea-class2" v-show="FthreeQueries=='1'">
                    <el-input v-model="FthreeQueriestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
                  </div>
                </el-tooltip>
              </li>
            </div>
            <div class="content-ul">
              <li class="item-column3">
                <div class="left-title left-title2">
                  <span class="require-icon" style="left:0px; top:-8px;">* </span>微信/支付宝是否异常：</div>
                <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
                  <el-select v-model="Fmobilepayment" @change="changes('Fmobilepayment')">
                    <el-option label="否" value="0"></el-option>
                    <el-option label="是" value="1"></el-option>
                  </el-select>
                </el-tooltip>
              </li>
              <li class="item-column2 item-column3-2">
                <div class="left-title" v-show="Fmobilepayment=='1'">
                  <span class="require-icon" style="left:80px;">* </span>说明：</div>
                <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
                  <div class="textarea-class2" v-show="Fmobilepayment=='1'">
                    <el-input v-model="Fmobilepaymenttxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
                  </div>
                </el-tooltip>
              </li>
            </div>
            <div class="content-ul">
              <li class="item-column3">
                <div class="left-title left-title2">是否与家庭联系人为同一接听人：</div>
                <div class="textarea-class2">
                  <el-select v-model="FissameFam" @change="changes(FissameFam)">
                    <el-option label="否" value="0"></el-option>
                    <el-option label="是" value="1"></el-option>
                  </el-select>
                </div>
              </li>
              <li class="item-column2 item-column3-2">
                <div class="left-title" v-show="FissameFam=='0'">说明：</div>
                <div class="textarea-class2" v-show="FissameFam=='0'">
                  <el-input v-model="FissameFamtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
                </div>
              </li>
            </div>
            <div class="content-ul">
              <li class="item-column3">
                <div class="left-title">与借款人关系：</div>
                <div>
                  <el-select v-model="FrelBorrower" @change="changes('FrelBorrower')">
                    <el-option label="父母" value="00"></el-option>
                    <el-option label="爱人" value="01"></el-option>
                    <el-option label="子女" value="02"></el-option>
                    <el-option label="其他" value="03"></el-option>
                  </el-select>
                </div>
              </li>
              <li class="item-column2 item-column3-2">
                <div class="left-title" v-show="FrelBorrower=='03'">说明：</div>
                <div class="textarea-class2" v-show="FrelBorrower=='03'">
                  <el-input v-model="FrelBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
                </div>
              </li>
            </div>
            <div class="content-ul">
              <li class="item-column3">
                <div class="left-title">核对工作情况：</div>
                <div>
                  <el-select v-model="FcheckWork" @change="changes('FcheckWork')">
                    <el-option label="一致" value="00"></el-option>
                    <el-option label="基本一致" value="01"></el-option>
                    <el-option label="不一致" value="02"></el-option>
                    <el-option label="被调查人不清楚" value="03"></el-option>
                  </el-select>
                </div>
              </li>
              <li class="item-column2 item-column3-2">
                <div class="left-title" v-show="FcheckWork=='01'">说明：</div>
                <div class="textarea-class2" v-show="FcheckWork=='01'">
                  <el-input v-model="FcheckWorktxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
                </div>
              </li>
            </div>
            <div class="content-ul">
              <li class="item-column3">
                <div class="left-title">核对婚姻情况：</div>
                <div>
                  <el-select v-model="FmaritalStatus">
                    <el-option label="未婚" value="00"></el-option>
                    <el-option label="已婚" value="01"></el-option>
                    <el-option label="离异" value="02"></el-option>
                    <el-option label="丧偶" value="03"></el-option>
                    <el-option label="准备结婚" value="04"></el-option>
                    <el-option label="被调查人不清楚" value="05"></el-option>
                  </el-select>
                </div>
              </li>
              <li class="item-column3">
                <div class="left-title">核对子女情况：</div>
                <div>
                  <el-select v-model="FmaritalStatustxt">
                    <el-option label="有子女" value="00"></el-option>
                    <el-option label="无子女" value="01"></el-option>
                  </el-select>
                </div>
              </li>
            </div> -->
    <!-- <div class="content-ul">
              <li class="item-column3">
                <div class="left-title">核实居住地址：</div>
                <div>
                  <el-select v-model="FcheckAddr" @change="changes('FcheckAddr')">
                    <el-option label="一致" value="00"></el-option>
                    <el-option label="基本一致" value="01"></el-option>
                    <el-option label="不一致" value="02"></el-option>
                    <el-option label="被调查人不清楚" value="03"></el-option>
                  </el-select>
                </div>
              </li>
              <li class="item-column2 item-column3-2">
                <div class="left-title" v-show="FcheckAddr=='01'">说明：</div>
                <div class="textarea-class2" v-show="FcheckAddr=='01'">
                  <el-input v-model="FcheckAddrtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
                </div>
              </li>
            </div> -->
    <!-- <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对房产：</div>
          <div>
            <el-select v-model="FcheckEstate" @change="changes('FcheckEstate')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="租房" value="02"></el-option>
              <el-option label="与父母同住" value="03"></el-option>
              <el-option label="被调查人不清楚" value="04"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="FcheckEstate=='00'">说明：</div>
          <div class="textarea-class2" v-show="FcheckEstate=='00'">
            <el-input v-model="FcheckEstatetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">其他收入：</div>
          <div>
            <el-select v-model="FotherIncome" @change="changes('FotherIncome')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="FotherIncome=='00'">说明：</div>
          <div class="textarea-class2" v-show="FotherIncome=='00'">
            <el-input v-model="FotherIncometxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">
            <span class="require-icon" style="left:50px;">* </span>调查结果：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class">
              <el-input type="textarea" v-model="Fconclusion" :rows="5" resize=none :maxlength="500"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column1 submit-class">
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
        </li>
      </div>
    </ul> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phoneType: '03',
        label_145: '145px',
        label_160: '160px',
        Fsource: this.familyList.source,
        Fanswer: this.familyList.answer,
        FsourceDesc: this.familyList.sourceDesc,
        FcheckStage: this.familyList.checkStage,
        FthirdResult: this.familyList.thirdResult,
        FthreeQueries: this.familyList.threeQueries,
        FthreeQueriestxt: this.familyList.threeQueriestxt,
        FissameFam: this.familyList.issameFam,
        FissameFamtxt: this.familyList.issameFamtxt,
        wetherThirdAbnormal: '',
        wetherThirdAbnormaltxt: '',
        Fmobilepayment: this.familyList.mobilepayment,
        Fmobilepaymenttxt: this.familyList.mobilepaymenttxt,
        FrelBorrower: this.familyList.relBorrower,
        FrelBorrowertxt: this.familyList.relBorrowertxt,
        FcheckWork: this.familyList.checkWork,
        FcheckWorktxt: this.familyList.checkWorktxt,
        FmaritalStatus: this.familyList.maritalStatus,
        FmaritalStatustxt: this.familyList.maritalStatustxt,
        FcheckAddr: this.familyList.checkAddr,
        FcheckAddrtxt: this.familyList.checkAddrtxt,
        FcheckEstate: this.familyList.checkEstate,
        FcheckEstatetxt: this.familyList.checkEstatetxt,
        FotherIncome: this.familyList.otherIncome,
        FotherIncometxt: this.familyList.otherIncometxt,
        Fconclusion: this.familyList.conclusion,
        phoneId: '',
        resMsg: '',
        newLists: '',
      }
    },
    props: ['custName', 'phoneNum', 'applyId', 'formId', 'familyList'], // 'isFull',
    mounted() {
      this.phoneType = '03'; // 住址电话
    },
    methods: {
      submitForm() {
        if (!this.Fsource || !this.Fanswer || !this.FcheckStage || !this.FthreeQueries || (this.FthreeQueries == '1' &&
            !this.FthreeQueriestxt) || !this.Fmobilepayment || (this.Fmobilepayment == '1' && !this.Fmobilepaymenttxt) ||
          !this.Fconclusion) {
          this.$message({
            message: '请输入必填项!',
            type: 'warning'
          });
          return;
        }
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.open();
        }).catch(() => {});
      },
      // 提交
      open() {
        this.post('/creTelResearchHis/addTelfContract', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.Fsource,
            answer: this.Fanswer,
            sourceDesc: this.FsourceDesc,
            checkStage: this.FcheckStage,
            applyId: this.applyId,
            id: this.phoneId
          },
          cretelfcontact: {
            applyId: this.applyId,
            id: this.phoneId,
            thirdResult: this.FthirdResult, // 第三方查询信息
            threeQueries: this.FthreeQueries, // 三方异常
            threeQueriestxt: this.FthreeQueriestxt, // 三方异常说明
            issameFam: this.FissameFam,
            issameFamtxt: this.FissameFamtxt,
            wetherThirdAbnormal: this.FwetherThirdAbnormal,
            wetherThirdAbnormaltxt: this.FwetherThirdAbnormaltxt,
            mobilepayment: this.Fmobilepayment,
            mobilepaymenttxt: this.Fmobilepaymenttxt, // 微信/支付宝异常说明
            relBorrower: this.FrelBorrower,
            relBorrowertxt: this.FrelBorrowertxt,
            checkWork: this.FcheckWork,
            checkWorktxt: this.FcheckWorktxt,
            maritalStatus: this.FmaritalStatus,
            maritalStatustxt: this.FmaritalStatustxt,
            checkAddr: this.FcheckAddr,
            checkAddrtxt: this.FcheckAddrtxt,
            checkEstate: this.FcheckEstate,
            checkEstatetxt: this.FcheckEstatetxt,
            otherIncome: this.FotherIncome,
            otherIncometxt: this.FotherIncometxt,
            conclusion: this.Fconclusion
          }
        }).then(res => {
          if (res.statusCode == '200') {
            this.phoneId = '';
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');
            this.$message({
              type: 'success',
              message: '提交成功!'
            });
          } else {
            this.$message.error(res.msg)
          }
        });
      },
      changes(flage) {
        switch (flage) {
          case 'Fsource':
            if (this.Fsource != '02') {
              this.FsourceDesc = '';
            }
            break;
          case 'FthreeQueries':
            if (this.FthreeQueries == '0') {
              this.FthreeQueriestxt = '';
            }
            break;
          case 'Fmobilepayment':
            if (this.Fmobilepayment == '0') {
              this.Fmobilepaymenttxt = '';
            }
            break;
          case 'FissameFam':
            if (this.FissameFam == '0') {
              this.FissameFamtxt = '';
            }
            break;
          case 'FrelBorrower':
            if (this.FrelBorrower != '03') {
              this.FrelBorrowertxt = '';
            }
            break;
          case 'FcheckWork':
            if (this.FcheckWork != '01') {
              this.FcheckWorktxt = '';
            }
            break;
          case 'FcheckAddr':
            if (this.FcheckAddr != '01') {
              this.FcheckAddrtxt = '';
            }
            break;
          case 'FcheckEstate':
            if (this.FcheckEstate != '00') {
              this.FcheckEstatetxt = '';
            }
            break;
          case 'FotherIncome':
            if (this.FotherIncome != '00') {
              this.FotherIncometxt = '';
            }
            break;
        }
      }
    },
    watch: {
      familyList(val) {
        this.Fsource = val.source;
        this.Fanswer = val.answer;
        this.FsourceDesc = val.sourceDesc;
        this.FcheckStage = val.checkStage;
        this.FthirdResult = val.thirdResult;
        this.FthreeQueries = val.threeQueries;
        this.FthreeQueriestxt = val.threeQueriestxt;
        this.FissameFam = val.issameFam;
        this.FissameFamtxt = val.issameFamtxt;
        this.Fmobilepayment = val.mobilepayment;
        this.Fmobilepaymenttxt = val.mobilepaymenttxt;
        this.FrelBorrower = val.relBorrower;
        this.FrelBorrowertxt = val.relBorrowertxt;
        this.FcheckWork = val.checkWork;
        this.FcheckWorktxt = val.checkWorktxt;
        this.FmaritalStatus = val.maritalStatus;
        this.FmaritalStatustxt = val.maritalStatustxt;
        this.FcheckAddr = val.checkAddr;
        this.FcheckAddrtxt = val.checkAddrtxt;
        this.FcheckEstate = val.checkEstate;
        this.FcheckEstatetxt = val.checkEstatetxt;
        this.FotherIncome = val.otherIncome;
        this.FotherIncometxt = val.otherIncometxt;
        this.Fconclusion = val.conclusion;
      },
      // 判断全屏 , 更改样式
      // isFull: function (val) {
      //   if (val == true) { // 全屏
      //     $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      //     $('.item-column1 textarea').css("width", "100%")
      //     // 提交按钮
      //     $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      //     // 显示 column2
      //     $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
      //     $('.item-column2 textarea').css("width", "100%");
      //   } else if (val == false) { // 分屏
      //     // 提交按钮
      //     $('.submit-class').css("margin-left", "370px")

      //     $('.item-column3').css({
      //       "min-height": "0px",
      //       "margin-bottom": "10px"
      //     })
      //     $('.item-column1 textarea').css("width", "300px")
      //     $('.item-column2 textarea').css("width", "300px")
      //   }
      // }
    },
  }

</script>
