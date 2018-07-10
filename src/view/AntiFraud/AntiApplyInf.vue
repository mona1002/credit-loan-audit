<!-- 反欺诈申请 - - 详情查看页面 -->
<template>
  <div date="AntiApplyInf">
    <!-- 反欺诈申请信息 -->
    <el-collapse v-model="activeName">
      <el-collapse-item name='1'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">进件编号：</label>
              <span>{{applySubno}}</span>
            </li>
            <li>
              <label class="label_width_166">客户名称：</label>
              <span>{{custName}}</span>
            </li>
            <li>
              <label class="label_width_166">证件类型：</label>
              <span>{{certTypeTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">证件号码：</label>
              <span>{{certCode}}</span>
            </li>
            <li>
              <label class="label_width_166">移动电话：</label>
              <span>{{mobile}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot='title'>
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">反欺诈申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">反欺诈申请类型主原因：</label>
              <span>{{mainreaName}}</span>
            </li>
            <li>
              <label class="label_width_166">反欺诈申请类型子原因：</label>
              <span>{{subreaName}}</span>
            </li>
            <li class="text_area_li_5rows triplet_textarea_width">
              <label class="label_width_166">欺诈上报描述：</label>
              <span>
                <el-input v-model="applyDesc" style='width:calc( 100% - 170px)' type="textarea" :rows="5" resize=none :maxlength="500"
                  :disabled="true">
                </el-input>
              </span>
            </li>
            <li class='clearFloat'>
              <label class="label_width_166">反欺诈申请人：</label>
              <span>{{applyPersonName}}</span>
            </li>
            <li>
              <label class="label_width_166">反欺诈申请日期：</label>
              <span>{{appDate}}</span>
            </li>
            <li>
              <label class="label_width_166">反欺诈申请机构：</label>
              <span>{{appOrgName}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        activeName: ['1', '2'],
        applyId: '', // 申请单ID
        antiFlag: '', // 标志
        applySubno: '',
        custName: '',
        certTypeTxt: '',
        certCode: '',
        mobile: '',
        mainreaName: '',
        subreaName: '',
        applyDesc: '',
        applyPersonName: '',
        appDate: '',
        appOrgName: '',
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/AntiApplyInf' && this.$route.params.newOne) {
          this.mountedInf();
        }
      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        // 先判断是 初审 终审  /  专员  主管
        /*var judgeFlag = JSON.parse(localStorage.getItem('judge'));
        this.antiFlag = judgeFlag.flag;
        if (this.isAntiDetail == true) {
          // 初审 终审 取 applyId
          if (this.antiFlag == '01' || this.antiFlag == '02') {
            // 先取到 id , 请求 反欺诈 页面信息
            // var taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
            this.id = JSON.parse(localStorage.getItem('taskInWaitting')).applyId;
          } else if (this.antiFlag == '02') {
            // FtaskInWaitting
            // var FtaskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));
            this.id = JSON.parse(localStorage.getItem('FtaskInWaitting')).applyId;
          } else
          if (this.antiFlag == '03') { // 其他取 列表id 取本地
            console.log(' 专员 ');
            this.applyId = JSON.parse(localStorage.getItem('AntitaskInWaitting')).applyId;
          } else if (this.antiFlag == '04') {
            console.log(' 主管 ');
            this.applyId = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).applyId;
          }
        } else {
          // 获取到 id
          this.applyId = this.$route.params.id;
        }*/
        this.applyId = this.$route.params.applyId;
        // 经办人 登录用户名
        var userInfo = JSON.parse(localStorage.getItem('userInf'));
        this.userCode = userInfo.userCode;
        this.orgCode = userInfo.orgCode;
        // 查询反欺诈信息
        this.getFraudApplyInfo();
      },
      // 查询 反欺诈信息
      getFraudApplyInfo() {
        this.post('/fraudApplyInfoController/getFraudApplyInfo', {
            applyId: this.applyId
          })
          .then(res => {
            if (res.statusCode == 200) {
              this.applySubno = res.data.applyInfoPool.applySubno;
              this.custName = res.data.applyInfoPool.custName;
              this.certTypeTxt = res.data.applyInfoPool.certTypeTxt;
              this.certCode = res.data.applyInfoPool.certCode;
              this.mobile = res.data.applyInfoPool.mobile;
              this.mainreaName = res.data.fraudApplyInfo.mainreaName;
              this.subreaName = res.data.fraudApplyInfo.subreaName;
              this.applyDesc = res.data.fraudApplyInfo.applyDesc;
              this.applyPersonName = res.data.fraudApplyInfo.applyPersonName;
              this.appDate = res.data.fraudApplyInfo.appDate;
              this.appOrgName = res.data.fraudApplyInfo.appOrgName;

            }
          })
      }
    }
  }

</script>
