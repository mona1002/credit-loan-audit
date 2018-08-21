<template>
  <!-- 复杂网络图谱 -->
  <div class="SocialSecurity">
    <iframe src='' id="iframe_pic" frameborder='0' style="width:100%;height:99%"></iframe>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
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
          if (res) {
            $('#iframe_pic').attr('src', res);
          }
        });
      },
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
