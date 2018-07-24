<template>
  <!-- OCR信息 -->
  <div class="SocialSecurity">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">人脸信息</span>
        </template>
        <div class="padding_left_5">
          <img id="image1" alt="人脸信息" src="" border="false" />
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">身份证信息</span>
        </template>
        <div class="padding_left_5">
          <img id="image2" alt="身份证正面照" src="" align="left" width="50%" border="false" />
          <img id="image3" alt="身份证背面照" src="" align="left" width="50%" border="false" />
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">银行卡号：</label>
                <span>{{applyInf.name}}</span>
              </li>
              <li>
                <label class="label_width_195">设备id：</label>
                <span>{{applyInf.idcard}}</span>
              </li>
              <li>
                <label class="label_width_195">进件编号：</label>
                <span>{{applyInf.user_name}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">姓名：</label>
                <span>{{applyInf.user_phone}}</span>
              </li>
              <li>
                <label class="label_width_195">电话：</label>
                <span>{{applyInf.name_match}}</span>
              </li>
              <li>
                <label class="label_width_195">申请时间：</label>
                <span>{{applyInf.idcard_match}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_195">身份证号：</label>
                <span>{{applyInf.customer_id}}</span>
              </li>
              <li>
                <label class="label_width_195">类型编号：</label>
                <span>{{applyInf.organization_type}}</span>
              </li>
            </div>
          </ul>
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
        activeNames: ['1', '2', '3']
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
        this.post(baseurl.DataUrl + '/thirdrisk/ocrMessageAction!getOcrMessage.action', {
          applySubNo: this.applySubNo
          //    applySubNo:'test999999'
        }).then(res => {
          console.log(res)
          if (!res || !res.appInfo) return;
          var data = $.parseJSON(res.appInfo);
          if (res.channel == '29') { //电销
            $('#ocrPersonInfo').form('loadData', data);
            if (data['b14']) $('#image2').attr('src', data['b14']);
            if (data['b15']) $('#image3').attr('src', data['b15']);
            if (data['k1']) $('#image1').attr('src', data['k1']);
          } else if (res.channel == '01') { //直销
            $('#ocrPersonInfo').form('loadData', data.auth);
            if (data.auth.id_front_url) $('#image2').attr('src', data.auth.id_front_url);
            if (data.auth.id_back_url) $('#image3').attr('src', data.auth.id_back_url);
            if (data.auth.face_url) $('#image1').attr('src', data.auth.face_url);
          }

        });
      },
      checkInf(getdata, showinfo) {
        for (let key in getdata) {
          getdata[k] ? showinfo[key] = getdata[k] : '';
        }
        return showinfo
      }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
