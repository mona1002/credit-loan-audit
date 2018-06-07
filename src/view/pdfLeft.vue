<template>
	<div>
       <pdf-showers 
            class="leftCav"
            v-for="(val,index) in newArrys"
            :key=Math.random()
           :pdfurl="imgBaseUrl+val.imagePath" 
           :scale="scale" 
           @onErr="onErr">  
       </pdf-showers>
       <!-- <p>{{newArrys[0].imagePath}}</p>
       <test :title="title"></test> -->
	</div>
</template>
<script>
import PdfShowers from 'vue-pdf-shower';	
import pdfUrl from '../util/ConstantSocialAndPn';

export default {
    name: 'pdfshowers',
    components: {
        'pdf-showers':PdfShowers
    },
    data() {
        return {
            pdfurls2:'',
            // 缩放 默认为1
            scale: 1.2,
            imgBaseUrl:pdfUrl.imgBaseUrl,
            newArrys:[],
            bbb:false,
            /*sss:'../static/C1-1.pdf',
            sss2:'../static/bbb.pdf',
            sss3:'../static/ccc.pdf',
            sss4:'../static/C2-1.pdf',
            sss5:'../static/C3-1.pdf',
            sss6:'../static/ddd.pdf',*/
        };
    },
    methods: {
        // 加载失败的callback
        onErr(err) {
            console.log('pdf加载失败，请重试');
            console.log('错误信息：', err);
        },
    },
    props: ['title'],
    watch:{
        title(value){
          console.log("我是左边");
          this.newArrys = value;
          this.bbb = true;
          /*var cvs = $('.leftCav #cvsWraper').getElementsByTagName("canvas");
          $('.leftCav #cvsWraper').append(cvs);
          console.log("****************l");
          console.log(cvs);*/
        }
    }
};

</script>

