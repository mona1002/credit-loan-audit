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
          <!-- 图片标签 -->
          <img id="image1" alt="人脸图片信息" src="" border="false" />
          <!-- 视频媒体标签 -->
          <video id="video1" alt="人脸视频信息" src="" width="25%" controls preload></video>
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
                <label class="label_width_145">姓名：</label>
                <span>{{baseinfo.ocr_name}}</span>
              </li>
              <li>
                <label class="label_width_145">性别：</label>
                <span>{{baseinfo.ocr_gender}}</span>
              </li>
              <li>
                <label class="label_width_145">民族：</label>
                <span>{{baseinfo.ocr_nation}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_145">生日：</label>
                <span>{{baseinfo.ocr_birthday}}</span>
              </li>
              <li>
                <label class="label_width_145">住址：</label>
                <span>{{baseinfo.ocr_address}}</span>
              </li>
              <li>
                <label class="label_width_145">身份证号：</label>
                <span>{{baseinfo.ocr_number}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_145">签证机关：</label>
                <span>{{baseinfo.ocr_authority}}</span>
              </li>
              <li>
                <label class="label_width_145">有效期：</label>
                <span>{{baseinfo.ocr_timeLimit}}</span>
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
        activeNames: ['1', '2', '3'],
        baseinfo: {}
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
        this.post(baseurl.DataUrl + '/thirdrisk/ocrMessageAction!notSession_getOcrMessage.action', {
          applySubNo: this.applySubNo
          //   applySubNo: 'test999999'
        }).then(res => {
          if (!res || !res.appInfo) return;
          var data = $.parseJSON(res.appInfo);
          if (res.channel == '29') { //电销
            this.baseinfo = data;
            if (data['b14']) $('#image2').attr('src', data['b14']);
            if (data['b15']) $('#image3').attr('src', data['b15']);
            if (data['k1']) $('#image1').attr('src', data['k1']);
          } else if (res.channel == '01') { //直销
            this.baseinfo = data.auth;
            if (data.auth.id_front_url) $('#image2').attr('src', data.auth.id_front_url);
            if (data.auth.id_back_url) $('#image3').attr('src', data.auth.id_back_url);
            // if (data.auth.face_url) $('#image1').attr('src', data.auth.face_url);
          var ImgOrTv='';
            if (data.auth.face_url) {
              var face_url = data.auth.face_url; //获取face_url
              var index = face_url.lastIndexOf("."); //根据"."获取face_url中最后一个"."的角标
              ImgOrTv = face_url.substring(index + 1); //根据角标截断最后一个"."之后的，得到后缀
            }
            if (ImgOrTv == "mp4" || ImgOrTv == "Mp4" || ImgOrTv == "MP4" || ImgOrTv == "rmvb" || ImgOrTv == "avi" ||
              ImgOrTv == "AVI" || ImgOrTv == "wmv" || ImgOrTv == "mkv" || ImgOrTv == "MOV" || ImgOrTv == "mov" ||
              ImgOrTv == "rm") { //根据后缀，判断是否符合视频格式
              $('#image1').hide();
              if (data.auth.face_url) $('#video1').attr('src', data.auth.face_url);
              //测试视频格式
              // if(data.auth.face_url) $('#video1').attr('src','http://prefile.nuoyuan.com.cn/group1/M00/00/45/cjf4JFtZt4yAQE_5AD_4CTHqMxI875.mp4');
              // if(data.auth.face_url) $('#video1').attr('src','http://prefile.nuoyuan.com.cn/group1/M00/00/54/cjf4JFtqUMqAYhK_AA9EQin5w8M193.MOV');
              // $('#image1').hide();
            } else { //按照图片格式处理
              $('#video1').hide();
              if (data.auth.face_url) $('#image1').attr('src', data.auth.face_url);
            }
          }

        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
