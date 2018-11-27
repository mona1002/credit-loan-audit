<template>
  <div>
    <pdf-shower class="rightCav" v-for="item in newArry" :key='Math.random()' :pdfurl="imgBaseUrl+item.imagePath"
      :scale="scale" :canvasId='id' :canvasWidth='pdfWidth' :canvasHeight='pdfHeight' :SmallClass="SmallClass" @onErr="onErr">
    </pdf-shower>
  </div>
</template>
<script>
  import PdfShower from 'vue-pdf-shower';
  import pdfUrl from '../util/ConstantSocialAndPn';
  export default {
    name: 'pdfshower',
    components: {
      'pdf-shower': PdfShower
    },
    data() {
      return {
        pdfurls2: '',
        // 缩放 默认为1
        scale: 1.2,
        imgBaseUrl: pdfUrl.imgBaseUrl,
        newArry: [],
        id: this.ID,
        pdfWidth: this.cvsWidth ? this.cvsWidth : '',
        pdfHeight: this.cvsHeight ? this.cvsHeight : '',
      };
    },
    methods: {
      // 加载失败的callback
      onErr(err) {
        console.log('错误信息：', err);
      },
    },
    props: ['title', 'ID', 'cvsClass', 'cvsWidth', 'cvsHeight', 'SmallClass'],
    watch: {
      title(value) {
        this.newArry = value;
      }
    }
  };
</script>
