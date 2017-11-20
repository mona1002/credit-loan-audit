<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 上网查询信息 -->
      <el-collapse-item title=" 上网查询信息" name="1">
        <div class="CreditForm_InternetInf">
          <ul class="CreditForm_InternetInf_ul_left">
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">客户在失信网是否有失信记录：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人手机是否有异常：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位名称是否有异常：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位电话是否有异常：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位地址是否有异常：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(3)">当地工商网查询企业基本信息中是否有登记：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li>
              <label class="InternetInf_right_label"> 执行信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 失信记录说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item title=" 核实身份" name="2">
        <div class="CreditForm_CheckId">
          <ul class="CreditForm_CheckId_ul_left">
            <li>
              <label class="CheckId_left_label">接听者是否是借款人本人：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li>
              <label class=" CheckId_right_label "> 接听说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息 -->
      <el-collapse-item title=" 工作信息" name="3">
        <div class="CreditForm_WorkInfs">
          <ul class="CreditForm_WorkInfs_ul_left">
            <li>
              <label class="WorkInfs_left_label left_margin">工作单位：</label>
              <el-input class="one_input" type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">所属行业:</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">职位级别:</label>
              <el-input type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话:</label>
              <el-input type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <el-input type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <el-input type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <!-- 三级联动 -->
            <li>
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <!-- 一级 -->
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 二级 -->
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 三级 -->
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 具体地址input  text框 -->
              <el-input type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <el-input type="text" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 所在部门： </label>
              <el-input type="text" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 入职时间： </label>
              <el-input type="text" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class=" CheckId_right_label "> 工资发放形式： </label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <el-input type="text" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <el-input type="text" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 私营企业信息 -->
      <el-collapse-item title="私营企业信息" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
      <!-- 家庭信息 -->
      <el-collapse-item title="家庭信息" name="5">
        <div class="CreditForm_FamilyInf">
          <ul class="CreditForm_FamilyInf_ul_left">
            <li>
              <label class="FamilyInf_left_label">婚姻状况：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有子女：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">父母是否在世</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有兄弟姐妹：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">个人/家庭月开销[元]：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_FamilyInf_ul_right">
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 是否有兄弟姐妹备注： </label>
              <el-input type="text" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 可以承受的月还款[元]： </label>
              <el-input type="text" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 居住情况 -->
      <el-collapse-item title="居住情况" name="6">
        <div class="CreditForm_live">
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_left_label">同住者关系：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核对现住址 -->
      <el-collapse-item title="核对现住址" name="7">
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li>
              <label class="check_reside__left_label">现住址：</label>
              <span> 北京市北京市延庆县宫本武藏 </span>
            </li>
            <li>
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item title="初审结论" name="8">
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">初审结果评价：</p>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
          </el-input>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-button type="primary" class="btn" @click="CFsave">确认</el-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        options: [{
            value: 'yes',
            label: '是'
          }, {
            value: 'no',
            label: '否'
          },
          // {
          //   value: '选项3',
          //   label: '蚵仔煎'
          // },
        ],
        value: '',
        form: {
          desc: '', //上网查询信息 右侧textarea框绑定值
        },
        textarea: '', //textarea绑定的值
      }
    },
    methods: {
      handleChange(tab, event) {
        console.log(tab, event);

      },
      NewPage(ind) { // tab1-------------------右键菜单栏 li[0] 点击事件
        console.log(ind);
        switch (ind) {
          case 0:
            window.open("http://zhixing.court.gov.cn/search/");
            break;
          case 1:
            window.open("http://shixin.court.gov.cn/");
            break;
          case 2:
            window.open("https://www.baidu.com");
            break;
          case 3:
            window.open("http://www.nacao.org.cn/portal/publish/index.html");
            break;
          case 4:
            window.open("https://www.tianyancha.com/");
            break;
        }
        // this.rightList = false;
      },
      CFsave(){
        console.log("提交信息")
      }
    }
  }

</script>

<style scope>
  /* 公共 */

  .one_input {
    width: 74%;
  }
  /* 工作信息部分-公共 */

  .left_margin {
    /* 一行一条 */
    display: inline-block;
    width: 25%;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid yellow; */
    text-align: right;
  }

  .left_margin_half_one {
    /* 一行两条 */
    display: inline-block;
    width: 49%;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid yellow; */
    text-align: right;
  }

  .left_margin_half_two {
    display: inline-block;
    width: 62%;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid yellow; */
    text-align: right;
  }
  /* 各自部分 */
  .CreditForm{
    min-width: 1366px;
  }
  /* 上网查询信息 */
  .CreditForm_InternetInf_ul_left,
  .CreditForm_InternetInf_ul_right,
  .CreditForm_CheckId_ul_left,
  .CreditForm_CheckId_ul_right,
  .CreditForm_FamilyInf_ul_left,
  .CreditForm_FamilyInf_ul_right,
  .CreditForm_live_ul_left,
  .CreditForm_live_ul_right,
  .CreditForm_check_reside_ul_left {
    /* border: 1px solid green; */
    float: left;
    width: 33%;
  }

  .InternetInf_left_label,
  .InternetInf_right_label,
  .CheckId_left_label,
  .CheckId_right_label,
  .FamilyInf_left_label,
  .FamilyInf_right_label,
  .live_left_label,
  .live_right_label,
  .check_reside__left_label,
  .CreditForm_result_p_label {
    display: inline-block;
    width: 50%;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid yellow; */
    text-align: right;
  }
  /* 单独设置家庭信息右侧li上面的margin空行 */

  .CreditForm_FamilyInf_ul_right {
    margin-top: 135px;
  }

  .InternetInf_left_label:hover {
    color: red;
  }
  /* 初审结论-上边距 */

  .CreditForm_result {
    margin-top: 50px;
  }
  /*  初审结论-单独设置 p 宽度 */

  .CreditForm_result_p_label {
    width: 16.5%;
    height: 100px;
  }
  /* 工作信息，私营企业 部分（三行） */

  .CreditForm_WorkInfs_ul_left {
    /* border: 1px solid green; */
    width: 66%;
    float: left;
    /* margin-left:  */
  }

  .CreditForm_WorkInfs_ul_left li:nth-of-type(1),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(8),
  .CreditForm_WorkInfs_ul_left li:last-child {
    width: 100%;
  }

  .CreditForm_WorkInfs_ul_left li:nth-of-type(2),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(3),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(4),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(5),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(6),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(7) {
    width: 50%;
  }

  .CreditForm_WorkInfs_ul_right {
    /* border: 1px solid green; */
    width: 33%;
    float: left;
  }

  .CreditForm_WorkInfs .CreditForm_WorkInfs_ul_left li {
    float: left;
  }
  /* 家庭信息-右侧label宽度单独设置 */

  .family_left_margin_half_two {
    width: 62%;
  }
  /* 确认按钮 */

  .btn {
    margin-left: 1200px;
    margin-top: 100px;
  }

</style>
