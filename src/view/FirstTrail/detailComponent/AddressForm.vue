<!-- 电话征信 - 住址电话 -->
<template>
  <div>
    <div class="address-title">
      <i class="collapse_title_icon"></i>
      <span class="collapse_title_text">新增调查日志</span>
    </div>
    <ul class="content-ul" style="margin-left:15px;">
      <li class="item-column3">
        <div class="left-title">电话名称：</div>
        <div class="dis-input">
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型：</div>
        <div>
          <el-select v-model="phoneType" :disabled="true">
            <el-option label="住址电话" value="01"></el-option>
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
          <span class="require-icon" style="left:80px;">* </span> 来源：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="Addsource" @change="changes('Addsource')">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column3">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span> 接听情况：
        </div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="Addanswer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column3 Phone_credit_Form_search_bottom">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span>调查阶段：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="AddcheckStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column1" v-show="Addsource=='02'">
        <div class="left-title">其他来源说明：</div>
        <div class="textarea-class">
          <el-input v-model="AddsourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <i class="collapse_title_icon"></i>
      <span class="collapse_title_text">录入住址电话调查信息</span>
    </div>
    <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm"> -->
    <el-form>
      <ul style="margin-left:15px;">
        <div class="content-ul">
          <li class="item-column1">
            <div class="left-title">第三方查询结果：</div>
            <div class="textarea-class">
              <el-input v-model="AddthirdResult" type="textarea" :rows="3" resize=none :maxlength="500"></el-input>
            </div>
          </li>
        </div>
        <li class="clearFix">
          <!-- <el-form-item label="三方查询是否异常：" class="width_40Per" prop="AddthreeQueries"> -->
          <el-form-item class="width_40Per">
            <label class=" label_140"><span class="required_Red"> * </span>三方查询是否异常：</label>
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-select v-model="AddthreeQueries" @change="changes('AddthreeQueries')">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <!-- <el-form-item v-if="AddthreeQueries=='1'" class="width_60Per height_60" label="说明：" prop="AddexceptionState" :label-width="label_100"> -->
          <el-form-item v-if="AddthreeQueries=='1'" class="width_60Per height_60 require_red" label="说明：" :label-width="label_100">
            <!-- <label class=" label_140">说明：</label> -->
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-input v-model="AddexceptionState" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </el-tooltip>
          </el-form-item>
        </li>
        <li class="clearFix ">
          <el-form-item class="width_40Per height_60 ">
            <label class=" label_140 vertical_top">是否与家庭联系人为同一人接听：</label>
            <el-select v-model="AddissameFam" @change="changes('AddissameFam')">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddissameFam=='0'" class="width_60Per" label="说明：" :label-width="label_100">
            <!-- <label class=" label_140">说明：</label> -->
            <el-input v-model="AddissameFamtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">与借款人关系：</label>
            <el-select v-model="AddrelBorrower" @change="changes('AddrelBorrower')">
              <el-option label="父母" value="00"></el-option>
              <el-option label="爱人" value="01"></el-option>
              <el-option label="子女" value="02"></el-option>
              <el-option label="其他" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddrelBorrower=='03'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <!-- <label class=" label_140">说明：</label> -->
            <el-input v-model="AddrelBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">核对工作情况：</label>
            <el-select v-model="AddcheckWork" @change="changes('AddcheckWork')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddcheckWork=='01'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <!-- <label class=" label_140">说明：</label> -->
            <el-input v-model="AddcheckWorktxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">核对婚姻情况：</label>
            <el-select v-model="AddmaritalStatus">
              <el-option label="未婚" value="00"></el-option>
              <el-option label="已婚" value="01"></el-option>
              <el-option label="离异" value="02"></el-option>
              <el-option label="丧偶" value="03"></el-option>
              <el-option label="准备结婚" value="04"></el-option>
              <el-option label="被调查人不清楚" value="05"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="width_60Per height_60" label="核对子女情况：" :label-width="label_100">
            <el-select v-model="AddmaritalStatustxt">
              <el-option label="有子女" value="00"></el-option>
              <el-option label="无子女" value="01"></el-option>
            </el-select>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">核对地址：</label>
            <el-select v-model="AddcheckAddr" @change="changes('AddcheckAddr')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddcheckAddr=='01'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="AddcheckAddrtxt" type="textarea" resize=none :rows="2" :maxlength="500"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">核对房产：</label>
            <el-select v-model="AddcheckEstate" @change="changes('AddcheckEstate')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="租房" value="02"></el-option>
              <el-option label="与父母同住" value="03"></el-option>
              <el-option label="被调查人不清楚" value="04"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddcheckEstate=='00'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="AddcheckEstatetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">其他收入：</label>
            <el-select v-model="AddotherIncome" @change="changes('AddotherIncome')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddotherIncome=='00'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="AddotherIncometxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">近期大项开销：</label>
            <el-select v-model="AddrecentLargespend">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddrecentLargespend=='00'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="AddrecentlArgespendInfo" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">父母：</label>
            <el-select v-model="Addparents" @change="changes('Addparents')">
              <el-option label="退休" value="00"></el-option>
              <el-option label="在职" value="01"></el-option>
              <el-option label="务农" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="Addparents=='01'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="AddparentsInfo" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">是否有兄弟姐妹：</label>
            <el-select v-model="Addbrother" @change="changes('Addbrother')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="Addbrother=='00'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="Addbrothertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">支付家庭生活费用：</label>
            <el-select v-model="Addexpenses" @change="changes('Addexpenses')">
              <el-option label="需要" value="00"></el-option>
              <el-option label="不需要" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="Addexpenses=='00'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="Addexpensestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item class="width_40Per">
            <label class=" label_140">核对家庭固话：</label>
            <el-select v-model="AddcheckHometel" @change="changes('AddcheckHometel')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="AddcheckHometel=='01'" class="width_60Per height_60" label="说明：" :label-width="label_100">
            <el-input v-model="AddcheckHometeltxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item  label="借款人爱好和品行："  class="height_80 width_66Per" label-width="140px">
            <!-- <label class=" label_140">借款人爱好和品行：</label> -->
            <el-input v-model="AddhobbyandBehave" type="textarea" :rows="3" resize=none :maxlength="500"></el-input>
          </el-form-item>
        </li>
        <li class="clearFix">
          <el-form-item label="调查结果：" class="height_120 require_red width_66Per"   label-width="140px">
            <!-- <label class=" label_140"><span class="required_Red"> * </span>调查结果：</label> -->
            <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
              <el-input v-model="Addconclusion" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
            </el-tooltip>
          </el-form-item>
        </li>
        <li class="item-column1 submit-class">
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
          <!-- <el-button type="primary" @click="submitForm('ruleForm')">确定2</el-button> -->
        </li>
      </ul>
    </el-form>
    <!-- <ul style="margin-left:15px;">
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">第三方查询结果：</div>
          <div class="textarea-class">
            <el-input v-model="AddthirdResult" type="textarea" :rows="3" resize=none :maxlength="500"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">
            <span class="require-icon" style="left:0px;">* </span>三方查询是否异常：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="AddthreeQueries" @change="changes('AddthreeQueries')">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-tooltip>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddthreeQueries=='1'">
            <span class="require-icon" style="left:80px;">* </span>说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="AddthreeQueries=='1'">
              <el-input v-model="AddexceptionState" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2">是否与家庭联系人为同一人接听：</div>
          <div>
            <el-select v-model="AddissameFam" @change="changes('AddissameFam')">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddissameFam=='0'">说明：</div>
          <div class="textarea-class2" v-show="AddissameFam=='0'">
            <el-input v-model="AddissameFamtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">与借款人关系：</div>
          <div>
            <el-select v-model="AddrelBorrower" @change="changes('AddrelBorrower')">
              <el-option label="父母" value="00"></el-option>
              <el-option label="爱人" value="01"></el-option>
              <el-option label="子女" value="02"></el-option>
              <el-option label="其他" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddrelBorrower=='03'">说明：</div>
          <div class="textarea-class2" v-show="AddrelBorrower=='03'">
            <el-input v-model="AddrelBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对工作情况：</div>
          <div>
            <el-select v-model="AddcheckWork" @change="changes('AddcheckWork')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddcheckWork=='01'">说明：</div>
          <div class="textarea-class2" v-show="AddcheckWork=='01'">
            <el-input v-model="AddcheckWorktxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对婚姻情况：</div>
          <div>
            <el-select v-model="AddmaritalStatus">
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
            <el-select v-model="AddmaritalStatustxt">
              <el-option label="有子女" value="00"></el-option>
              <el-option label="无子女" value="01"></el-option>
            </el-select>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对地址：</div>
          <div>
            <el-select v-model="AddcheckAddr" @change="changes('AddcheckAddr')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddcheckAddr=='01'">说明：</div>
          <div class="textarea-class2" v-show="AddcheckAddr=='01'">
            <el-input v-model="AddcheckAddrtxt" type="textarea" resize=none :rows="2" :maxlength="500"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对房产：</div>
          <div>
            <el-select v-model="AddcheckEstate" @change="changes('AddcheckEstate')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="租房" value="02"></el-option>
              <el-option label="与父母同住" value="03"></el-option>
              <el-option label="被调查人不清楚" value="04"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddcheckEstate=='00'">说明：</div>
          <div class="textarea-class2" v-show="AddcheckEstate=='00'">
            <el-input v-model="AddcheckEstatetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">其他收入：</div>
          <div>
            <el-select v-model="AddotherIncome" @change="changes('AddotherIncome')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddotherIncome=='00'">说明：</div>
          <div class="textarea-class2" v-show="AddotherIncome=='00'">
            <el-input v-model="AddotherIncometxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">近期大项开销：</div>
          <div>
            <el-select v-model="AddrecentLargespend">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddrecentLargespend=='00'">说明：</div>
          <div class="textarea-class2" v-show="AddrecentLargespend=='00'">
            <el-input v-model="AddrecentlArgespendInfo" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">父母：</div>
          <div>
            <el-select v-model="Addparents" @change="changes('Addparents')">
              <el-option label="退休" value="00"></el-option>
              <el-option label="在职" value="01"></el-option>
              <el-option label="务农" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="Addparents=='01'">说明：</div>
          <div class="textarea-class2" v-show="Addparents=='01'">
            <el-input v-model="AddparentsInfo" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">是否有兄弟姐妹：</div>
          <div>
            <el-select v-model="Addbrother" @change="changes('Addbrother')">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="Addbrother=='00'">说明：</div>
          <div class="textarea-class2" v-show="Addbrother=='00'">
            <el-input v-model="Addbrothertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">支付家庭生活费用：</div>
          <div>
            <el-select v-model="Addexpenses" @change="changes('Addexpenses')">
              <el-option label="需要" value="00"></el-option>
              <el-option label="不需要" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="Addexpenses=='00'">说明：</div>
          <div class="textarea-class2" v-show="Addexpenses=='00'">
            <el-input v-model="Addexpensestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对家庭固话：</div>
          <div>
            <el-select v-model="AddcheckHometel" @change="changes('AddcheckHometel')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="AddcheckHometel=='01'">说明：</div>
          <div class="textarea-class2" v-show="AddcheckHometel=='01'">
            <el-input v-model="AddcheckHometeltxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <li class="item-column1">
        <div class="left-title">借款人爱好和品行：</div>
        <div class="textarea-class">
          <el-input v-model="AddhobbyandBehave" type="textarea" :rows="3" resize=none :maxlength="500"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span>调查结果：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class">
            <el-input v-model="Addconclusion" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column1 submit-class">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </li>
    </ul> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phoneType: '01',
        label_100: '100px',
        Addsource: this.Addlist.source,
        Addanswer: this.Addlist.answer,
        AddcheckStage: this.Addlist.checkStage,
        AddsourceDesc: this.Addlist.sourceDesc,
        AddthirdResult: this.Addlist.thirdResult,
        AddissameFam: this.Addlist.issameFam,
        AddrelBorrower: this.Addlist.relBorrower,
        AddcheckWork: this.Addlist.checkWork,
        AddmaritalStatustxt: this.Addlist.maritalStatustxt,
        AddmaritalStatus: this.Addlist.maritalStatus,
        AddcheckAddr: this.Addlist.checkAddr,
        AddcheckEstate: this.Addlist.checkEstate,
        AddotherIncome: this.Addlist.otherIncome,
        AddrecentLargespend: this.Addlist.recentLargespend,
        Addparents: this.Addlist.parents,
        Addbrother: this.Addlist.brother,
        AddthreeQueries: this.Addlist.threeQueries,
        AddexceptionState: this.Addlist.exceptionState,
        Addexpenses: this.Addlist.expenses,
        AddcheckHometel: this.Addlist.checkHometel,
        AddhobbyandBehave: this.Addlist.hobbyandBehave,
        Addconclusion: this.Addlist.conclusion,
        AddissameFamtxt: this.Addlist.issameFamtxt,
        AddrelBorrowertxt: this.Addlist.relBorrowertxt,
        AddcheckWorktxt: this.Addlist.checkWorktxt,
        AddcheckAddrtxt: this.Addlist.checkAddrtxt,
        AddcheckEstatetxt: this.Addlist.checkEstatetxt,
        AddotherIncometxt: this.Addlist.otherIncometxt,
        AddrecentlArgespendInfo: this.Addlist.recentlArgespendInfo,
        AddparentsInfo: this.Addlist.parentsInfo,
        Addbrothertxt: this.Addlist.brothertxt,
        Addexpensestxt: this.Addlist.expensestxt,
        AddcheckHometeltxt: this.Addlist.checkHometeltxt,
        phoneId: '', // 用来区分是添加 还是 修改 
      }
    },
    props: ['custName', 'phoneNum', 'applyId', 'formId', "Addlist"], //'isFull',
    mounted() {
      this.phoneType = '01'; // 住址电话
      // if (this.isFull == true) { // 全屏
      //   $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      //   $('.item-column1 textarea').css("width", "100%")
      //   $('.item-column1 textarea').css("width", "100%")
      //   // 提交按钮
      //   $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      //   $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
      //   $('.item-column2 textarea').css("width", "100%");
      // } else if (this.isFull == false) { // 分屏
      //   // 提交按钮
      //   $('.submit-class').css("margin-left", "370px")
      //   $('.item-column3').css({
      //     "min-height": "0px",
      //     "margin-bottom": "10px"
      //   })
      //   $('.item-column1 textarea').css("width", "300px")
      //   $('.item-column2 textarea').css("width", "300px")
      // }
    },
    methods: {
      submitForm() {
        // 接听情况   三方查询是否异常/是  异常说明
        if (!this.Addsource || !this.Addanswer || !this.AddcheckStage || !this.AddthreeQueries || (this.AddthreeQueries ==
            '1' && !this.AddexceptionState) || !this.Addconclusion) {
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
        this.post('/creTelResearchHis/addHomeTelLog', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.Addsource,
            answer: this.Addanswer,
            checkStage: this.AddcheckStage,
            sourceDesc: this.AddsourceDesc, // 其他来源说明
            applyId: this.applyId,
            id: this.phoneId
          },
          cretelhometel: {
            applyId: this.applyId,
            id: this.phoneId,
            thirdResult: this.AddthirdResult,
            issameFam: this.AddissameFam,
            relBorrower: this.AddrelBorrower,
            checkWork: this.AddcheckWork,
            maritalStatustxt: this.AddmaritalStatustxt, // 核对子女情况说明
            maritalStatus: this.AddmaritalStatus,
            checkAddr: this.AddcheckAddr,
            checkEstate: this.AddcheckEstate, // 核对房产
            otherIncome: this.AddotherIncome,
            recentLargespend: this.AddrecentLargespend,
            parents: this.Addparents,
            brother: this.Addbrother,
            threeQueries: this.AddthreeQueries,
            exceptionState: this.AddexceptionState, // 异常项说明
            expenses: this.Addexpenses, // 支付家庭费用
            checkStage: this.AddcheckStage,
            checkHometel: this.AddcheckHometel, // 核对家庭固话
            hobbyandBehave: this.AddhobbyandBehave, // 借款人爱好和品行
            conclusion: this.Addconclusion, // 调查结果
            issameFamtxt: this.AddissameFamtxt, // 是否与家庭联系人为同一人接听说明
            relBorrowertxt: this.AddrelBorrowertxt, // 与借款人关系说明
            checkWorktxt: this.AddcheckWorktxt, // 工作情况说明
            checkAddrtxt: this.AddcheckAddrtxt, // 核对地址说明
            checkEstatetxt: this.AddcheckEstatetxt, // 核对房产说明
            otherIncometxt: this.AddotherIncometxt, // 其他收入说明
            recentlArgespendInfo: this.AddrecentlArgespendInfo, // 近期大项开销说明
            parentsInfo: this.AddparentsInfo, // 父母情况说明
            brothertxt: this.Addbrothertxt, // 兄弟姐妹情况说明
            expensestxt: this.Addexpensestxt, // 支付家庭费用说明
            checkHometeltxt: this.AddcheckHometeltxt, // 核对家庭固话说明
          }
        }).then(res => {
          if (res.statusCode == '200') {
            this.phoneId = '';
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');
            this.$message({
              type: 'success',
              message: '提交成功'
            });
          } else {
            this.$message.error(res.msg)
          }
        });
      },
      changes(flage) {
        switch (flage) {
          case 'Addsource':
            if (this.Addsource != '02') {
              this.AddsourceDesc = '';
            }
            break;
            // 三方查询异常
          case 'AddthreeQueries':
            if (this.AddthreeQueries == '0') {
              this.AddexceptionState = '';
            }
            break;
            // 是否为同一接听人
          case 'AddissameFam':
            if (this.AddissameFam == '0') {
              this.AddissameFamtxt = '';
            }
            break;
            // 与借款人关系
          case 'AddrelBorrower':
            if (this.AddrelBorrower != '03') {
              this.AddrelBorrowertxt = '';
            }
            break;
            // 核对工作情况
          case 'AddcheckWork':
            if (this.AddcheckWork != '01') {
              this.AddcheckWorktxt = '';
            }
            break;
            // 核对地址
          case 'AddcheckAddr':
            if (this.AddcheckAddr != '01') {
              this.AddcheckAddrtxt = '';
            }
            break;
            // 核对房产
          case 'AddcheckEstate':
            if (this.AddcheckEstate != '00') {
              this.AddcheckEstatetxt = '';
            }
            break;
            // 其他收入
          case 'AddotherIncome':
            if (this.AddotherIncome != '00') {
              this.AddotherIncometxt = '';
            }
            break;
            // 父母
          case 'Addparents':
            if (this.Addparents != '01') {
              this.AddparentsInfo = '';
            }
            break;
            // 兄弟姐妹
          case 'Addbrother':
            if (this.Addbrother != '00') {
              this.Addbrothertxt = '';
            }
            break;
            // 支付家庭生活费用
          case 'Addexpenses':
            if (this.Addexpenses != '00') {
              this.Addexpensestxt = '';
            }
            break;
            // 核对家庭固话
          case 'AddcheckHometel':
            if (this.AddcheckHometel != '01') {
              this.AddcheckHometeltxt = '';
            }
            break;
        }
      }
    },
    watch: {
      // 监听  
      // 来源
      Addlist(val) {
        this.Addsource = val.source;
        this.Addanswer = val.answer;
        this.AddcheckStage = val.checkStage;
        this.AddsourceDesc = val.sourceDesc;
        this.AddthirdResult = val.thirdResult;
        this.AddissameFam = val.issameFam;
        this.AddrelBorrower = val.relBorrower;
        this.AddcheckWork = val.checkWork;
        this.AddmaritalStatustxt = val.maritalStatustxt;
        this.AddmaritalStatus = val.maritalStatus;
        this.AddcheckAddr = val.checkAddr;
        this.AddcheckEstate = val.checkEstate;
        this.AddotherIncome = val.otherIncome;
        this.AddrecentLargespend = val.recentLargespend;
        this.Addparents = val.parents;
        this.Addbrother = val.brother;
        this.AddthreeQueries = val.threeQueries;
        this.AddexceptionState = val.exceptionState;
        this.Addexpenses = val.expenses;
        this.AddcheckHometel = val.checkHometel;
        this.AddhobbyandBehave = val.hobbyandBehave;
        this.Addconclusion = val.conclusion;
        this.AddissameFamtxt = val.issameFamtxt;
        this.AddrelBorrowertxt = val.relBorrowertxt;
        this.AddcheckWorktxt = val.checkWorktxt;
        this.AddcheckAddrtxt = val.checkAddrtxt;
        this.AddcheckEstatetxt = val.checkEstatetxt;
        this.AddotherIncometxt = val.otherIncometxt;
        this.AddrecentlArgespendInfo = val.recentlArgespendInfo;
        this.AddparentsInfo = val.parentsInfo;
        this.Addbrothertxt = val.brothertxt;
        this.Addexpensestxt = val.expensestxt;
        this.AddcheckHometeltxt = val.checkHometeltxt;
      },
      // 其他来源说明
      AddsourceDesc: function () {
        if (this.AddsourceDesc && this.AddsourceDesc.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 第三方查询结果
      AddthirdResult: function () {
        if (this.AddthirdResult && this.AddthirdResult.length == 500)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 三方查询异常说明
      AddexceptionState: function () {
        if (this.AddexceptionState && this.AddexceptionState.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 是否为同一接听人异常说明
      AddissameFamtxt: function () {
        if (this.AddissameFamtxt && this.AddissameFamtxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 与借款人关系其他说明
      AddrelBorrowertxt: function () {
        if (this.AddrelBorrowertxt && this.AddrelBorrowertxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 核对工作情况 其他说明
      AddcheckWorktxt: function () {
        if (this.AddcheckWorktxt && this.AddcheckWorktxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 核对地址说明
      AddcheckAddrtxt: function () {
        if (this.AddcheckAddrtxt && this.AddcheckAddrtxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 房产说明
      AddcheckEstatetxt: function () {
        if (this.AddcheckEstatetxt && this.AddcheckEstatetxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 其他收入说明
      AddotherIncometxt: function () {
        if (this.AddotherIncometxt && this.AddotherIncometxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 父母说明
      AddparentsInfo: function () {
        if (this.AddparentsInfo && this.AddparentsInfo.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 兄弟姐妹说明
      Addbrothertxt: function () {
        if (this.Addbrothertxt && this.Addbrothertxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 支付家庭生活费用说明
      Addexpensestxt: function () {
        if (this.Addexpensestxt && this.Addexpensestxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 核对家庭固话说明
      AddcheckHometeltxt: function () {
        if (this.AddcheckHometeltxt && this.AddcheckHometeltxt.length == 100)
          this.$message({
            message: '输入长度不能超出100',
            type: 'warning'
          });
        return;
      },
      // 借款人爱好和品行
      AddhobbyandBehave: function () {
        if (this.AddhobbyandBehave && this.AddhobbyandBehave.length == 500) {
          this.$message({
            message: '输入长度不能超出500',
            type: 'warning'
          });
          return;
        }
      },
      // 调查结果
      Addconclusion: function () {
        if (this.Addconclusion && this.Addconclusion.length == 500) {
          this.$message({
            message: '输入长度不能超出500',
            type: 'warning'
          });
          return;
        }
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
    }
  }

</script>
