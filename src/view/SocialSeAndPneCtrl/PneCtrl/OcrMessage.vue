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
          <img id="image1" alt="人脸图片信息" :src="baseinfo.faceUrl" border="false" style="display:none" />
          <!-- 视频媒体标签 -->
          <video id="video1" alt="人脸视频信息" :src="baseinfo.faceUrl" width="25%" controls preload style="display:none"></video>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">身份证信息</span>
        </template>
        <div class="padding_left_5">
          <img id="image2" alt="身份证正面照" :src="baseinfo.idFrontUrl" align="left" width="50%" border="false" />
          <img id="image3" alt="身份证背面照" :src="baseinfo.idBackUrl" align="left" width="50%" border="false" />
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
                <span>{{baseinfo.ocrName}}</span>
              </li>
              <li>
                <label class="label_width_145">性别：</label>
                <span>{{baseinfo.ocrGender}}</span>
              </li>
              <li>
                <label class="label_width_145">民族：</label>
                <span>{{baseinfo.ocrNation}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_145">生日：</label>
                <span>{{baseinfo.ocrBirthday}}</span>
              </li>
              <li>
                <label class="label_width_145">住址：</label>
                <span>{{baseinfo.ocrAddress}}</span>
              </li>
              <li>
                <label class="label_width_145">身份证号：</label>
                <span>{{baseinfo.ocrNumber}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_145">签证机关：</label>
                <span>{{baseinfo.ocrAuthority}}</span>
              </li>
              <li>
                <label class="label_width_145">有效期：</label>
                <span>{{baseinfo.ocrTimelimit}}</span>
              </li>
            </div>
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
        activeNames: ['1', '2', '3'],
        baseinfo: {},
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
        // this.post(baseurl.DataUrl + '/thirdrisk/ocrMessageAction!notSession_getOcrMessage.action', {
        // this.get('tripartiteData/201801080512013502/getOcrInfo' //测试账号
        this.get('/tripartiteData' + this.applySubNo + '/getOcrInfo').then(res => {
          if (res.statusCode == 200) {
            this.baseinfo = res.data[0];
            // 判断人脸信息格式
            let face_url = this.baseinfo.faceUrl;
            let ind = face_url.lastIndexOf('.');
            let ImgOrTv = face_url.substring(ind + 1);
            if (ImgOrTv == "mp4" || ImgOrTv == "Mp4" || ImgOrTv == "MP4" || ImgOrTv == "rmvb" || ImgOrTv == "avi" ||
              ImgOrTv == "AVI" || ImgOrTv == "wmv" || ImgOrTv == "mkv" || ImgOrTv == "MOV" || ImgOrTv == "mov" ||
              ImgOrTv == "rm") { //根据后缀，判断是否符合视频格式
              $('#video1').show();
            } else {
              $('#image1').show(); //按照图片格式处理
            }
            //  if (!res || !res.appInfo) return;
            // var data = $.parseJSON(res.appInfo);
            // if ('PHDX' == this.applySubNo.substr(0, 4) && data) { //旧电销数据
            //   $('#image1').show();
            //   this.baseinfo = data;
            //   if (data['b14']) $('#image2').attr('src', data['b14']);
            //   if (data['b15']) $('#image3').attr('src', data['b15']);
            //   if (data['k1']) $('#image1').attr('src', data['k1']);
            //   return;
            // }
            // if (!data || !data.auth) return;
            //直销、新电销数据
            // this.baseinfo = data.auth;
            // if (data.auth.id_front_url) $('#image2').attr('src', data.auth.id_front_url);
            // if (data.auth.id_back_url) $('#image3').attr('src', data.auth.id_back_url);
            // var ImgOrTv = '';
            // if (data.auth.face_url) {
            //   var face_url = data.auth.face_url; //获取face_url
            //   var index = face_url.lastIndexOf("."); //根据"."获取face_url中最后一个"."的角标
            //   ImgOrTv = face_url.substring(index + 1); //根据角标截断最后一个"."之后的，得到后缀
            //   if (ImgOrTv == "mp4" || ImgOrTv == "Mp4" || ImgOrTv == "MP4" || ImgOrTv == "rmvb" || ImgOrTv == "avi" ||
            //     ImgOrTv == "AVI" || ImgOrTv == "wmv" || ImgOrTv == "mkv" || ImgOrTv == "MOV" || ImgOrTv == "mov" ||
            //     ImgOrTv == "rm") { //根据后缀，判断是否符合视频格式
            //     $('#video1').show();
            //     $('#video1').attr('src', data.auth.face_url);
            //     //测试视频格式
            //     // if(data.auth.face_url) $('#video1').attr('src','http://prefile.nuoyuan.com.cn/group1/M00/00/45/cjf4JFtZt4yAQE_5AD_4CTHqMxI875.mp4');
            //     // if(data.auth.face_url) $('#video1').attr('src','http://prefile.nuoyuan.com.cn/group1/M00/00/54/cjf4JFtqUMqAYhK_AA9EQin5w8M193.MOV');
            //     // $('#image1').hide();
            //   } else { //按照图片格式处理
            //     $('#image1').show()
            //     $('#image1').attr('src', data.auth.face_url);
            //   }
            // }
          } else {
            this._error(res.msg)
          }
        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
