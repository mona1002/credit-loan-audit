<template>
  <!-- 复杂网络图谱 -->
  <div class="SocialSecurity">
    <!-- <div data-options="region:'center',border:false,width:90%,height:90%"  >
<img id="complexPic"  width="40%" onclick="changeSize();" ondblclick="resize();"
     style="cursor:url(${pageContext.request.contextPath}/style/images/blue_face/blueface.ico)"  title="单击放大 ，双击还原"/>
</div>  -->
    <iframe src='' id="iframe_pic" frameborder='0' style="width:100%;height:99%"></iframe>
    <!-- <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">大数据结论</span>
        </template>
        <div class="padding_left_5">
          <textarea id="bigDataConclusion" readonly="readonly" rows="20" cols="50" style="width:100%;height:200px;word-break:break-all;"></textarea>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">风控提示</span>
        </template>
        <div class="padding_left_5">
          <textarea id="riskGuide" readonly="readonly" rows="20" cols="50" style="width:100%;height:200px;word-break:break-all;"></textarea>
        </div>
      </el-collapse-item>
    </el-collapse> -->
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
        // activeNames: ['1', '2', ]
        a: '0',
        cc: '',
        material: true,
        ccd: '1',
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
        this.post(baseurl.DataUrl + '/thirdrisk/ocrMessageAction!notSession_getComplexPicUrl.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          //   console.log(res)
          if (res) {
            $('#iframe_pic').attr('src', res);
          }
        });
      },
      //   changeSize() {
      //     var width = parseFloat($('#complexPic').attr('width'));
      //     $('#complexPic').attr('width', parseFloat(width) * 2 + '%');
      //   },
      //   resize() {
      //     var width = parseFloat($('#complexPic').attr('width'));
      //     $('#complexPic').attr('width', '40%');
      //   }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
.SocialSecurity{
  width:100%;
  height: 100%;
}
</style>
