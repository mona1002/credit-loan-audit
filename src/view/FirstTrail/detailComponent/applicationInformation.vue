<!-- 申请信息 -->
<template>
  <div class="applicationInformation">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工作人员填写</span>
        </template>
        <ul class="firstUl">
          <li>
            <label>申请类型：</label>
            <el-select v-model="value1" disabled>
            </el-select>
          </li>
          <li>
            <label>借款人类型：</label>
            <el-select v-model="value" disabled>
            </el-select>
          </li>
          <li></li>
        </ul>
        <ul>
          <li>
            <label>进件渠道：</label>
            <el-select v-model="value">
              <el-option v-for="item in incomingChannel" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>获客渠道：</label>
            <el-select v-model="value">
              <el-option v-for="item in acquisitionChannel" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li></li>
        </ul>
        <ul>
          <li>
            <label>团队经理：</label>
            <el-select v-model="value" disabled>
            </el-select>
          </li>
          <li>
            <label>直销人员：</label>
            <el-select v-model="value" disabled>
            </el-select>
          </li>
          <li>
            <label style="float:left">直销人员联系方式：</label>
            <p class="firstP"></p>
          </li>
        </ul>
        <ul>
          <li>
            <label>家人是否知晓本借款：</label>
            <el-select v-model="value2" @change="changeValue(value2)">
              <el-option v-for="item in yorNo" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li v-if="value2=='是'">
            <label>
              <i>*</i>知晓人姓名：</label>
            <el-input v-model="inputname" v-on:focus="aa=true" v-on:blur="aa=false"></el-input>
            <span v-show="aa">知晓人姓名不能为空</span>
          </li>
          <li v-if="value2=='是'">
            <label class="selLabel">
              <i>*</i>与本人关系：</label>
            <el-select v-model="value" v-on:focus="bb=true" v-on:blur="bb=false">
              <el-option v-for="item in relation" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <span v-show="bb">与本人关系不能为空</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>客户符合何种产品：</label>
            <el-select v-model="value">
              <el-option v-for="item in product" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>紧急程度：</label>
            <el-select v-model="value3" @change="changeValue2(value3)">
              <el-option v-for="item in urgency" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li v-if="value3=='收费加急'">
            <label>
              <i>*</i>加急费用[元]：</label>
            <el-input v-model="inputname" v-on:focus="cc=true" v-on:blur="cc=false"></el-input>
            <span v-show="cc">加急费用不能为空</span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="您的借款需求" name="2">
        <ul class="firstUl">
          <li>
            <label>借款用途：</label>
            <el-select v-model="value">
              <el-option v-for="item in usageOfLoan" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li>
            <label>
              <i>*</i>申请借款额度[元]：</label>
            <el-input v-model="inputname" v-on:focus="dd=true" v-on:blur="dd=false"></el-input>
            <span v-show="dd">申请借款额度不能为空</span>
          </li>
          <li>
            <label>借款期限[月]：</label>
            <el-select v-model="value">
              <el-option v-for="item in lifeOfLoan" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>可接受最高月还款额[元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>借款类型：</label>
            <el-select v-model="value">
              <el-option v-for="item in typeOfLoan" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>担保方式：</label>
            <el-select v-model="value">
              <el-option v-for="item in warrantWay" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>还款资金来源：</label>
            <el-select v-model="value4" @change="changeValue3(value4)">
              <el-option v-for="item in sourcesOfFunds" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul v-if="value4=='其他渠道还款'">
          <li>
            <label style="float:left;line-height:40px;">其他渠道还款说明：</label>
            <div class="channel">
              <textarea></textarea>
            </div>
          </li>

        </ul>
      </el-collapse-item>
      <el-collapse-item title="您的个人信息" name="3">
        <ul class="firstUl">
          <li>
            <label>
              <i>*</i>客户名称：</label>
            <el-input v-model="inputname" v-on:focus="ee=true" v-on:blur="ee=false"></el-input>
            <span v-show="ee">客户名称不能为空</span>
          </li>
          <li>
            <label>性别：</label>
            <el-select v-model="sex" disabled>
            </el-select>
          </li>
          <li>
            <label>
              <i>*</i>移动电话：</label>
            <el-input v-model="phone" v-on:focus="ff=true" v-on:blur="ff=false"></el-input>
            <span v-show="ff">移动电话不能为空</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>证件类型：</label>
            <el-select v-model="value">
              <el-option v-for="item in cardType" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>
              <i>*</i>证件号码：</label>
            <el-input v-model="cardPhone" v-on:focus="jj=true" v-on:blur="jj=false"></el-input>
            <span v-show="jj">证件号码不能为空</span>
          </li>
          <li>
            <label style="float:left">年龄：</label>
            <p class="firstP"></p>
          </li>
        </ul>
        <ul>
          <li>
            <label>婚姻状况：</label>
            <el-select v-model="value">
              <el-option v-for="item in marriages" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>有无子女：</label>
            <el-select v-model="value">
              <el-option v-for="item in childs" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>最高学历：</label>
            <el-select v-model="value">
              <el-option v-for="item in educationals" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul>
          <li>
            <label>电子邮箱：</label>
            <el-input v-model="email" v-on:focus="emailPrompt=false" v-on:blur="regEmails(email)"></el-input>
            <span v-show="emailPrompt">请填写正确的电子邮箱</span>
          </li>
          <li>
            <label>住宅类型：</label>
            <el-select v-model="houseType" @change="changeValue4(houseType)">
              <el-option v-for="item in houseTypes" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li v-if="houseType=='租用' || houseType=='商业按揭购房' || houseType=='公积金按揭购房'">
            <label>每月租金/还款额[元]：</label>
            <el-input v-model="input"></el-input>
          </li>
        </ul>
        <ul>
          <li class="province" style="width:66.6%">
            <label>户口所在地：</label>
            <el-select v-model="value">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>户口所在地邮编：</label>
            <el-input v-model="input"></el-input>
          </li>
        </ul>
        <ul>
          <li class="province" style="width:66.6%">
            <label>现住宅地址：</label>
            <el-select v-model="value">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>住宅地邮编：</label>
            <el-input v-model="input"></el-input>
          </li>
        </ul>
        <ul>
          <li style="width:66.6%">
            <label>收入来源：</label>
            <div class="channel2">
              <textarea></textarea>
            </div>
          </li>
          <li>
            <label>借款人职业情况：</label>
            <el-select v-model="value">
              <el-option v-for="item in occupations" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul>
          <li style="width:66.6%">
            <label>其他收入：</label>
            <div class="channel2">
              <textarea></textarea>
            </div>
          </li>
          <li></li>
        </ul>
        <ul>
          <li>
            <label>供养人数：</label>
            <el-input v-model="input"></el-input>
          </li>
          <li>
            <label>起始居住时间：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
          </li>
          <li>
            <label>住宅电话：</label>
            <el-input v-model="housePhone" v-on:focus="phonePrompt=false" v-on:blur="regPhone(housePhone)"></el-input>
            <span v-show="phonePrompt">请填写正确的住宅电话</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>每月家庭支出[元]：</label>
            <el-input v-model="input"></el-input>
          </li>
          <li>
            <label>单张信用卡最高额度[元]：</label>
            <el-input v-model="input"></el-input>
          </li>
          <li>
            <label>您来本市年份：</label>
            <el-input v-model="input"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>是否缴纳商业保险：</label>
            <el-select v-model="insurance" @change="changeValue5(insurance)">
              <el-option v-for="item in yorNo" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
          </li>
          <li>
          </li>
        </ul>
        <div v-if="insurance=='是'">
          <ul>
            <li>
              <label>
                <i>*</i>保险公司名称：</label>
              <el-input v-model="inputname" v-on:focus="hh=true" v-on:blur="hh=false"></el-input>
              <span v-show="hh">保险公司名称不能为空</span>
            </li>
            <li>
              <label class="selLabel">
                <i>*</i>险种类型：</label>
              <el-select v-model="insuranceType" v-on:focus="ii=true" v-on:blur="ii=false">
                <el-option v-for="item in insuranceTypes" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <span v-show="ii">险种类型不能为空</span>
            </li>
            <li>
            </li>
          </ul>
          <ul>
            <li class="province" style="width:66.6%">
              <label>投保地点：</label>
              <el-select v-model="value">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
            </li>
          </ul>
          <ul>
            <li>
              <label>缴费方式：</label>
              <el-select v-model="value" v-on:focus="gg=true" v-on:blur="gg=false">
                <el-option v-for="item in paymentWays" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <span v-show="gg">缴费方式不能为空</span>
            </li>
            <li>
              <label>缴费类别：</label>
              <el-select v-model="value" v-on:focus="kk=true" v-on:blur="kk=false">
                <el-option v-for="item in paymentTypes" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <span v-show="kk">缴费类别不能为空</span>
            </li>
            <li></li>
          </ul>
          <ul>
            <li>
              <label>
                <i>*</i>期缴保费[元]：</label>
              <el-input v-model="inputname" v-on:focus="ll=true" v-on:blur="ll=false"></el-input>
              <span v-show="ll">期缴保费不能为空</span>
            </li>
            <li>
              <label>
                <i>*</i>总保额：</label>
              <el-input v-model="inputname" v-on:focus="mm=true" v-on:blur="mm=false"></el-input>
              <span v-show="mm">总保额不能为空</span>
            </li>
            <li>
              <label>
                <i>*</i>需缴费年数[月]：</label>
              <el-input v-model="inputname" v-on:focus="nn=true" v-on:blur="nn=false"></el-input>
              <span v-show="nn">需缴费年数不能为空</span>
            </li>
          </ul>
          <ul>
            <li>
              <label>
                <i>*</i>被保人姓名：</label>
              <el-input v-model="inputname" v-on:focus="oo=true" v-on:blur="oo=false"></el-input>
              <span v-show="oo">被保人姓名不能为空</span>
            </li>
            <li>
              <label>
                <i>*</i>被保人联系电话：</label>
              <el-input v-model="inputname" v-on:focus="pp=true" v-on:blur="pp=false"></el-input>
              <span v-show="pp">被保人联系电话不能为空</span>
            </li>
            <li>
              <label>
                <i>*</i>生效日期[月]：</label>
              <el-date-picker v-model="value1" type="date" placeholder="选择日期" v-on:focus="qq=true" v-on:blur="qq=false">
              </el-date-picker>
              <span v-show="qq">生效日期不能为空</span>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <label>是否是私营业主:</label>
            <el-select v-model="privateOwner " @change="changeValue6(privateOwner)">
              <el-option v-for="item in yorNo" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li></li>
          <li></li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="私人业主信息" name="4" v-if="privateOwner=='是'">
        <ul class="firstUl">
          <li>
            <label>企业类型：</label>
            <el-select v-model="value">
              <el-option v-for="item in companyTypes" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>员工人数：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>公司注册时间：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
          </li>
        </ul>
        <ul>
          <li>
            <label>占股比例：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>经营场所：</label>
            <el-select v-model="value">
              <el-option v-for="item in placeOfBusiness" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>注册资金[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>企业净利润率：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>每月净利润额[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>营业执照编号：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>是否缴纳五险一金：</label>
            <el-select v-model="value">
              <el-option v-for="item in yorNo" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>月还款额/月租金[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>营业面积：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>企业经营项目说明：</label>
            <div class="channel2">
              <textarea></textarea>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <label>淡季月份：</label>
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option v-for="item in month" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>旺季月份：</label>
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option v-for="item in month" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>平季月份：</label>
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option v-for="item in month" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul>
          <li>
            <label>淡季销售额[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>旺季销售额[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>平季销售额：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>企业近一年利润[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>企业近两年利润[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>企业近三年利润[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>企业近一年纳税额[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>企业近两年纳税额[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>企业近三年纳税额[万元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>第一供销商：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>第二供销商：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>第三供销商：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>第一分销商：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>第二分销商：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>第三分销商：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="房产信息" name="5">
        <div class="remarkIcon">
          <i class="el-icon-circle-plus icon" @click="add_home">
            <span>添加</span>
          </i>
          <i class="el-icon-remove icon" @click="delet_home">
            <span>删除</span>
          </i>
        </div>
        <div class="tableDiv">
          <table class="mytable">
            <thead>
              <tr>
                <th></th>
                <th>房产类型</th>
                <th>产权性质</th>
                <th>建筑面积[m^2]</th>
                <th>建筑单价[元]</th>
                <th>房产地址</th>
                <th>邮政编码</th>
                <th>产权比例</th>
                <th>贷款期限[月]</th>
                <th>抵押状况</th>
                <th>月供[元]</th>
                <th>贷款余额[元]</th>
              </tr>
            </thead>
            <tbody>
              <cross-rable v-for="cro in cross_rable_home" ytablemsg="house_property" v-bind:ynum="cro" :key="cro"></cross-rable>
            </tbody>
          </table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="车辆信息" name="6">
        <div class="remarkIcon">
          <i class="el-icon-circle-plus icon" @click="add_vehicle">
            <span>添加</span>
          </i>
          <i class="el-icon-remove icon" @click="delet_vehicle">
            <span>删除</span>
          </i>
        </div>
        <div class="tableDiv">
          <table class="mytable">
            <thead>
              <tr>
                <th></th>
                <th>车辆购置价[元]</th>
                <th>是否年检</th>
                <th>是否非运营</th>
                <th>车辆型号</th>
                <th>车辆类型</th>
                <th>贷款期限[月]</th>
                <th>月供[元]</th>
                <th>贷款余额[月]</th>
                <th>车牌号码</th>
                <th>车辆已购保险</th>
                <th>购买时间</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr>
				          <td>0</td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				          <td></td>
				        </tr> -->
              <cross-rable v-for="cro in cross_rable_vehicle" ytablemsg="vehicle" v-bind:ynum="cro" :key="cro"></cross-rable>
            </tbody>
          </table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="您的工作信息" name="7">
        <ul class="firstUl">
          <li style="width:66.6%;">
            <label style="float:left;">工作单位：</label>
            <div class="textBox"></div>
          </li>
          <li>
            <label>单位性质：</label>
            <el-select v-model="value">
              <el-option v-for="item in unitProperties" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul>
          <li style="width:66.6%;">
            <label>单位地址：</label>

          </li>
          <li>
            <label>单位地址邮编：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <label>所属行业：</label>
            <el-select v-model="value">
              <el-option v-for="item in industrys" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>
              <i>*</i>所在部门：</label>
            <el-input v-model="inputname" v-on:focus="rr=true" v-on:blur="rr=false"></el-input>
            <span v-show="rr">所在部门不能为空</span>
          </li>
          <li>
            <label>
              <i>*</i>职位级别：</label>
            <el-input v-model="inputname" v-on:focus="ss=true" v-on:blur="ss=false"></el-input>
            <span v-show="ss">职位级别不能为空</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>是否缴纳社保：</label>
            <el-select v-model="value">
              <el-option v-for="item in yorNo" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>
              <i>*</i>社保缴纳基数[元]：</label>
            <el-input v-model="inputname" v-on:focus="tt=true" v-on:blur="tt=false"></el-input>
            <span v-show="tt">社保缴纳基数[元]不能为空</span>
          </li>
          <li>
            <label>
              <i>*</i>单位电话：</label>
            <el-input v-model="inputname" v-on:focus="uu=true" v-on:blur="uu=false"></el-input>
            <span v-show="uu">单位电话不能为空</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>是否缴纳公积金：</label>
            <el-select v-model="value">
              <el-option v-for="item in yorNo" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <label>
              <i>*</i>公积金缴纳基数[元]：</label>
            <el-input v-model="inputname" v-on:focus="tt=true" v-on:blur="tt=false"></el-input>
            <span v-show="tt">公积金缴纳基数不能为空</span>
          </li>
          <li>
            <label>
              <i>*</i>入职时间：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" v-on:focus="vv=true" v-on:blur="vv=false">
            </el-date-picker>
            <span v-show="vv">公积金缴纳基数不能为空</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>
              <i>*</i>月均工资[元]：</label>
            <el-input v-model="inputname" v-on:focus="ww=true" v-on:blur="ww=false"></el-input>
            <span v-show="ww">月均工资不能为空</span>
          </li>
          <li>
            <label>其他收入[元]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>
              <i>*</i>每月发薪日：</label>
            <el-input v-model="inputname" v-on:focus="xx=true" v-on:blur="xx=false"></el-input>
            <span v-show="xx">月均工资不能为空</span>
          </li>
        </ul>
        <ul>
          <li>
            <label>工资发放形式：</label>
            <el-select v-model="value">
              <el-option v-for="item in payrollType" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li style="width:66.6%;">
            <label style="float:left;">前单位名称：</label>
            <div class="textBox"></div>
          </li>
        </ul>
        <ul>
          <li>
            <label>前单位电话：</label>
            <el-input v-model="inputname"></el-input>
          </li>
          <li>
            <label>前单位工作年限[月]：</label>
            <el-input v-model="inputname"></el-input>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="联系人信息" name="8">
        <div class="remarkIcon">
          <i class="el-icon-circle-plus icon" @click="add_people">
            <span>添加</span>
          </i>
          <i class="el-icon-remove icon" @click="delet_people">
            <span>删除</span>
          </i>
        </div>
        <div class="tableDiv">
          <table class="mytable">
            <thead>
              <tr>
                <th></th>
                <th>姓名</th>
                <th>类型</th>
                <th>关系</th>
                <th>手机号码</th>
                <th>住宅电话</th>
                <th>年龄</th>
                <th>证件类型</th>
                <th>证件号码</th>
                <th>单位名称</th>
                <th>单位电话</th>
                <th>地址</th>
              </tr>
            </thead>
            <tbody>
              <cross-rable v-for="cro in cross_rable_people" ytablemsg="people" v-bind:ynum="cro" :key="cro"></cross-rable>
            </tbody>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="button">
      <el-button type="primary" @click="maintenanceLog">维护日志</el-button>
      <el-button type="primary" @click="sure">确认</el-button>
    </div>
    <!-- 弹层 -->
    <div class="layer" v-show="layerShow">
      <div class="maintenanceLog">
        <p class="logP">
          <span>维护日志</span>
          <i class="el-icon-close" @click="close"></i>
        </p>
        <div class="layerBox">
          <p>
            <i class="el-icon-refresh"></i>
            <span @click="renovate">刷新</span>
          </p>
          <div class="layerTable">
            <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column prop="number" label="修改个数">
              </el-table-column>
              <el-table-column prop="date" label="操作时间" width="180" sortable>
              </el-table-column>
              <el-table-column prop="address" label="操作人员" :formatter="formatter">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <i style="display:inline-block;width:20px;height:20px;background-color:red;" @click='goDetail(scope.$index)'></i>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40, 50]"
              :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="50">
            </el-pagination>
            <div style="width:100%;height:40px;">
              <el-button type="primary" @click="layerSure">确定</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情弹层 -->
    <div class="detialLayer" v-show="detialLayerShow">
      <div class="detialLog">
        <p class="logP">
          <span>浏览日志明细信息</span>
          <i class="el-icon-close" @click="detialClose"></i>
        </p>
        <div class="detialLayerBox">
          <div class="detialLayerTable">
            <el-table :data="tableData2" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column type="index" :index='1'>
              </el-table-column>
              <el-table-column prop="name" label="字段名">
              </el-table-column>
              <el-table-column prop="before" label="变更前">
              </el-table-column>
              <el-table-column prop="after" label="变更后" sortable>
              </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40, 50]"
              :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="50">
            </el-pagination>
            <div style="width:100%;height:40px;">
              <el-button type="primary" @click="detialLayerSure">确定</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        cross_rable_home: 0,
        cross_rable_vehicle: 0,
        cross_rable_people: 0,
        value: '',
        value1: 'ddd',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        sex: '男',
        input: '',
        inputname: '',
        aa: false,
        bb: false,
        cc: false,
        dd: false,
        ee: false,
        ff: false,
        jj: false,
        hh: false,
        ii: false,
        gg: false,
        kk: false,
        ll: false,
        mm: false,
        nn: false,
        oo: false,
        pp: false,
        qq: false,
        rr: false,
        ss: false,
        tt: false,
        uu: false,
        vv: false,
        ww: false,
        xx: false,
        cardPhone: '',
        phone: '',
        email: '',
        emailPrompt: false,
        phonePrompt: false,
        houseType: '',
        housePhone: '',
        insurance: '',
        insuranceType: '',
        privateOwner: '',
        layerShow: false,
        detialLayerShow: false,
        currentPage4: 1,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        tableData: [{
            date: '2016-05-02 13:42:13',
            number: '王小虎',
            address: '江路 1518 弄',
            doit: 'do'
          }, {
            date: '2016-05-04 13:42:13',
            number: '王小虎',
            address: '江路 1517 弄',
            doit: 'do'
          }, {
            date: '2016-05-03 13:42:13',
            number: '王小虎',
            address: '江路 1519 弄',
            doit: 'do'
          },
          {
            date: '2016-05-03 13:42:13',
            number: '王小虎',
            address: '江路 1519 弄',
            doit: 'do'
          },
          {
            date: '2016-05-03 13:42:13',
            number: '王小虎',
            address: '江路 1519 弄',
            doit: 'do'
          },
          {
            date: '2016-05-03 13:42:13',
            number: '王小虎',
            address: '江路 1519 弄',
            doit: 'do'
          },
          {
            date: '2016-05-03 13:42:13',
            number: '王小虎',
            address: '江路 1519 弄',
            doit: 'do'
          },
          {
            date: '2016-05-03 13:42:14',
            number: '王小虎',
            address: '江路 1516 弄',
            doit: 'do'
          }
        ],
        tableData2: [{
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          },
          {
            name: '2016-05-02 13:42:13',
            after: '王小虎',
            before: '江路 1518 弄'
          }
        ],
        incomingChannel: [{
          value: '1',
          label: '线下'
        }, {
          value: '2',
          label: '渠道'
        }, {
          value: '3',
          label: '电销'
        }, {
          value: '4',
          label: 'H5'
        }, {
          value: '5',
          label: 'APP'
        }],
        acquisitionChannel: [{
            value: '1',
            label: '报纸'
          }, {
            value: '2',
            label: '电销'
          }, {
            value: '3',
            label: '网络'
          }, {
            value: '4',
            label: '促销活动'
          }, {
            value: '5',
            label: '朋友介绍'
          },
          {
            value: '6',
            label: '销售开发'
          },
          {
            value: '7',
            label: '其他'
          }
        ],
        yorNo: [{
            value: '1',
            label: '是'
          },
          {
            value: '2',
            label: '否'
          }
        ],
        relation: [{
            value: '1',
            label: '夫妻'
          },
          {
            value: '2',
            label: '父母'
          },
          {
            value: '3',
            label: '子女'
          },
          {
            value: '4',
            label: '兄弟'
          },
          {
            value: '5',
            label: '姐妹'
          },
          {
            value: '6',
            label: '兄妹'
          },
          {
            value: '7',
            label: '姐弟'
          },
          {
            value: '8',
            label: '朋友'
          },
          {
            value: '9',
            label: '同事'
          },
          {
            value: '10',
            label: '房东'
          },
          {
            value: '11',
            label: '亲属'
          },
          {
            value: '12',
            label: '其他'
          }
        ],
        product: [{
          value: '1',
          label: '诺福贷'
        }],
        urgency: [{
            value: '1',
            label: '普通'
          },
          {
            value: '2',
            label: '免费加急'
          },
          {
            value: '3',
            label: '收费加急'
          }
        ],
        lifeOfLoan: [{
            value: '1',
            label: '2'
          },
          {
            value: '2',
            label: '3'
          },
          {
            value: '3',
            label: '6'
          },
          {
            value: '4',
            label: '9'
          },
          {
            value: '5',
            label: '12'
          },
          {
            value: '6',
            label: '18'
          },
          {
            value: '7',
            label: '24'
          },
          {
            value: '8',
            label: '36'
          },
          {
            value: '9',
            label: '48'
          }
        ],
        usageOfLoan: [{
            value: '1',
            label: '日常生活消费'
          },
          {
            value: '2',
            label: '教育支出'
          },
          {
            value: '3',
            label: '医疗支出'
          },
          {
            value: '4',
            label: '提高生活质量'
          },
          {
            value: '5',
            label: '其他消费'
          },
          {
            value: '6',
            label: '货物采买'
          },
          {
            value: '7',
            label: '商铺运营'
          },
          {
            value: '8',
            label: '家庭消费'
          },
          {
            value: '9',
            label: '个人消费'
          },
          {
            value: '10',
            label: '资金周转'
          },
          {
            value: '11',
            label: '扩大经营'
          },
          {
            value: '12',
            label: '购物（生活用品；原材料；设备）'
          },
          {
            value: '13',
            label: '装修家居'
          },
          {
            value: '14',
            label: '旅游'
          }
        ],
        typeOfLoan: [{
          value: '1',
          label: '信用借款'
        }],
        warrantWay: [{
          value: '1',
          label: '信用'
        }],
        sourcesOfFunds: [{
            value: '1',
            label: '独立还款'
          },
          {
            value: '2',
            label: '家人协助还款'
          },
          {
            value: '3',
            label: '其他渠道还款'
          }
        ],
        sexs: [{
            value: '1',
            label: '男'
          },
          {
            value: '2',
            label: '女'
          }
        ],
        cardType: [{
          value: '1',
          label: '身份证'
        }],
        marriages: [{
            value: '1',
            label: '未婚'
          },
          {
            value: '2',
            label: '已婚'
          },
          {
            value: '3',
            label: '离异'
          },
          {
            value: '4',
            label: '丧偶'
          }
        ],
        childs: [{
            value: '1',
            label: '有'
          },
          {
            value: '2',
            label: '无'
          }
        ],
        educationals: [{
            value: '1',
            label: '硕士及以上'
          },
          {
            value: '2',
            label: '本科'
          },
          {
            value: '3',
            label: '专科'
          },
          {
            value: '4',
            label: '高中'
          },
          {
            value: '5',
            label: '初中及以下'
          }
        ],
        houseTypes: [{
            value: '1',
            label: '租用'
          },
          {
            value: '2',
            label: '商业按揭购房'
          },
          {
            value: '3',
            label: '公积金按揭购房'
          },
          {
            value: '4',
            label: '无按揭购房'
          },
          {
            value: '5',
            label: '自建房'
          },
          {
            value: '6',
            label: '亲属住房'
          },
          {
            value: '7',
            label: '单位宿舍'
          }
        ],
        occupations: [{
            value: '1',
            label: '白领'
          },
          {
            value: '2',
            label: '工薪'
          },
          {
            value: '3',
            label: '私人业主'
          },
          {
            value: '4',
            label: '中小企业主'
          },
          {
            value: '5',
            label: '学生'
          }
        ],
        insuranceTypes: [{
            value: '1',
            label: '传统型'
          },
          {
            value: '2',
            label: '分红型'
          },
          {
            value: '3',
            label: '万能型'
          },
          {
            value: '4',
            label: '投连型'
          }
        ],
        paymentWays: [{
            value: '1',
            label: '泵缴'
          },
          {
            value: '2',
            label: '期缴'
          }
        ],
        paymentTypes: [{
            value: '1',
            label: '月缴'
          },
          {
            value: '2',
            label: '年缴'
          },
          {
            value: '3',
            label: '其他'
          }
        ],
        companyTypes: [{
            value: '1',
            label: '独资'
          },
          {
            value: '2',
            label: '合伙'
          },
          {
            value: '3',
            label: '有限责任'
          },
          {
            value: '4',
            label: '股份有限'
          },
          {
            value: '5',
            label: '个体工商户'
          }
        ],
        placeOfBusiness: [{
            value: '1',
            label: '租用'
          },
          {
            value: '2',
            label: '自有'
          },
          {
            value: '3',
            label: '按揭'
          }
        ],
        month: [{
            value: '1',
            label: '1月'
          },
          {
            value: '2',
            label: '2月'
          },
          {
            value: '3',
            label: '3月'
          },
          {
            value: '4',
            label: '4月'
          },
          {
            value: '5',
            label: '5月'
          },
          {
            value: '6',
            label: '6月'
          },
          {
            value: '7',
            label: '7月'
          },
          {
            value: '8',
            label: '8月'
          },
          {
            value: '9',
            label: '9月'
          },
          {
            value: '10',
            label: '10月'
          },
          {
            value: '11',
            label: '11月'
          },
          {
            value: '12',
            label: '12月'
          }
        ],
        unitProperties: [{
            value: '1',
            label: '机关事业'
          },
          {
            value: '2',
            label: '国有'
          },
          {
            value: '3',
            label: '民营'
          },
          {
            value: '4',
            label: '外资'
          },
          {
            value: '5',
            label: '合资'
          },
          {
            value: '6',
            label: '私营'
          },
          {
            value: '7',
            label: '个体'
          },
          {
            value: '8',
            label: '上市公司'
          },
          {
            value: '9',
            label: '股份制'
          },
          {
            value: '10',
            label: '非盈利机构'
          },
          {
            value: '11',
            label: '其他'
          }
        ],
        industrys: [{

        }],
        payrollType: [{
            value: '1',
            label: '网银'
          },
          {
            value: '2',
            label: '现金'
          },
          {
            value: '3',
            label: '网银+现金'
          }
        ],
        options: [{}]
      };
    },
    methods: {
      handleChange() {

      },
      sure() {
        if (this.value2 == "是" && this.inputname == '') {
          alert('不能为空');
        }
      },
      require() {

      },
      changeValue(rowItem) {
        if (rowItem == 1) {
          this.value2 = "是";
        } else {
          this.value2 = "否";
        };
      },
      changeValue2(rowItem) {
        if (rowItem == 3) {
          this.value3 = "收费加急";
        }
      },
      changeValue3(rowItem) {
        if (rowItem == 3) {
          this.value4 = "其他渠道还款";
        }
      },
      changeValue4(rowItem) {
        if (rowItem == 1) {
          this.houseType = '租用';
        } else if (rowItem == 2) {
          this.houseType = '商业按揭购房';
        } else if (rowItem == 3) {
          this.houseType = '公积金按揭购房';
        }
      },
      changeValue5(rowItem) {
        if (rowItem == 1) {
          this.insurance = "是";
        } else {
          this.insurance = "否";
        };
      },
      changeValue6(rowItem) {
        if (rowItem == 1) {
          this.privateOwner = "是";
        } else {
          this.privateOwner = "否";
        };
      },
      /*邮箱验证*/
      regEmails(email) {
        var isValidEmail =
          /^[a-z0-9]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
        if (!isValidEmail.test(email)) {
          return this.emailPrompt = true;
        } else {
          return this.emailPrompt = false;
        }
      },
      regPhone(phone) {
        var isValidPhone = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
        if (!isValidPhone.test(phone)) {
          return this.phonePrompt = true;
        } else {
          return this.phonePrompt = false;
        }
      },
      /*房产信息 添加*/
      add_home: function (str) {
        this.cross_rable_home += 1;
      },
      delet_home() {
        console.log(333);
      },
      /*车辆信息 添加*/
      add_vehicle: function (str) {
        this.cross_rable_vehicle += 1;
      },
      delet_vehicle() {
        console.log(333);
      },
      /*维护日志*/
      maintenanceLog() {
        this.layerShow = true;
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      },
      /*联系人信息 添加*/
      add_people: function (str) {
        this.cross_rable_people += 1;
      },
      delet_people() {
        console.log(333);
      },
      /*维护日志 刷新按钮*/
      renovate() {

      },
      /*维护日志 表格方法*/
      formatter(row, column) {
        return row.address;
      },
      /*维护日志 关闭按钮*/
      close() {
        this.layerShow = false;
        document.getElementsByTagName('body')[0].style.overflow = '';
      },
      /*弹层确定按钮*/
      layerSure() {
        this.layerShow = false;
        document.getElementsByTagName('body')[0].style.overflow = '';
      },
      /*弹层列表页点击进入另一个弹层*/
      goDetail(row) {
        console.log(row);
        this.detialLayerShow = true;
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        //this.$router.push({path:'/examine',row:row})
      },
      /*弹层表格*/
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      /*详情弹层关闭按钮*/
      detialClose() {
        this.detialLayerShow = false;
        /*document.getElementsByTagName('body')[0].style.overflow='';*/
      },
      detialLayerSure() {
        this.detialLayerShow = false;
        /*document.getElementsByTagName('body')[0].style.overflow='';*/
      },
    },
    /*components: {
        CrossRable
    },*/
  }

</script>
<style type="text/css" scoped>
  .applicationInformation {
    width: 100%;
    height: 100%;
    background-color: #fafbfc;
    font-size: 14px;
    min-width: 1366px;
  }

  .applicationInformation ul {
    width: 100%;
    height: 50px;
  }

  .applicationInformation ul li {
    float: left;
    width: 33.3%;
    margin-top: 10px;
    position: relative;
    min-width: 336px;
  }

  .applicationInformation ul li span {
    position: absolute;
    left: 340px;
    top: 2px;
    color: blue;
  }

  ul li label {
    width: 156px;
    display: inline-block;
    text-align: right;
    position: relative;
  }

  ul li label i {
    position: absolute;
    top: -2px;
    left: 315px;
    font-size: 20px;
    color: red;
    z-index: 100;
  }

  ul li label.selLabel i {
    left: 294px;
  }

  ul li .firstP {
    display: inline-block;
    width: 180px;
    height: 30px;
  }

  /* 按钮 */

  .button {
    width: 100%;
  }

  .button button {
    float: right;
    margin: 20px 15px 20px 0;
  }

  .channel {
    width: 336px;
    height: 40px;
    display: inline-block;
  }

  .channel textarea {
    width: 336px;
    height: 40px;
    border: 1px solid #d8dce5;
  }

  .channel2 {
    width: 336px;
    height: 30px;
    display: inline-block;
  }

  .channel2 textarea {
    width: 336px;
    height: 30px;
    border: 1px solid #d8dce5;
  }

  .textBox {
    width: 66.6%;
    height: 30px;
    border: 1px solid #d8dce5;
    display: inline-block;
  }

  /* 字体图标 */

  .icon {
    color: #20a0ff;
    font-size: 20px;
  }

  .remarkIcon {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .icon span {
    color: #475669;
  }

  /* 表格 */

  .tableDiv {
    width: 100%;
  }

  .tableDiv table {
    width: 100%;
    border: 1px solid #d8dce5;
    border-collapse: collapse;
  }

  table.mytable th {
    padding: 8px;
    border: 1px solid #d8dce5;
    background-color: #e6ebf5;
  }

  table.mytable tbody td {
    padding: 8px;
    border: 1px solid #d8dce5;
    width: 100px;
  }

  /* 弹层 */

  .layer,
  .detialLayer {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  .maintenanceLog {
    width: 848px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -424px;
    margin-top: -200px;
    border: 1px solid #eee;
    background-color: #fff;
    z-index: 10000;
  }

  p.logP {
    font-size: 14px;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
  }

  p.logP span {
    float: left;
  }

  p.logP i {
    float: right;
    font-size: 20px;
    line-height: 40px;
    color: #20a0ff;
    padding-right: 10px;
  }

  .maintenanceLog .layerBox,
  .detialLayerBox {
    clear: both;
    width: 98%;
    margin: 0 auto;
    background-color: #eee;
    border: 1px solid #ccc;
    margin-bottom: 5px;
  }

  .layerBox p {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }

  .layerBox p i {
    padding-left: 10px;
    font-size: 18px;
    color: #20a0ff;
  }

  .maintenanceLog .layerBox table {
    background-color: #fff;
  }

  .maintenanceLog table {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
  }

  .layerBox button,
  .detialLayerBox button {
    float: right;
    margin: 5px 5px 5px 0;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
  }

  /* 详情弹层 */

  .detialLog {
    width: 688px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -344px;
    margin-top: -233px;
    border: 1px solid #eee;
    background-color: #fff;
    z-index: 10000;
  }

</style>
