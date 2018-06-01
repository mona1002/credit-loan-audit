<template>
	<div>
       <pdf-shower 
            v-for="(val,index) in title"
            :key=Math.random()
           :pdfurl="imgBaseUrl+val.imagePath" 
           :scale="scale" 
           @onErr="onErr">  
       </pdf-shower>
       <!-- <pdf-shower 
           :pdfurl="sss4" 
           :scale="scale" 
           @onErr="onErr">  
       </pdf-shower> -->
	</div>
</template>
<script>
import PdfShower from 'vue-pdf-shower';	
import pdfUrl from '../util/ConstantSocialAndPn'
export default {
    name: 'pdfshower',
    components: {
        'pdf-shower':PdfShower,
    },
    data() {
        return {
            pdfurls2:'',
            // 缩放 默认为1
            scale: 1.2,
            imgBaseUrl:pdfUrl.imgBaseUrl,
            sss:'../static/C1-1.pdf',
            sss2:'../static/bbb.pdf',
            sss3:'../static/ccc.pdf',
            sss4:'../static/C2-1.pdf',
            sss5:'../static/C3-1.pdf',
            sss6:'../static/ddd.pdf',
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
            /*//alert('ooooo');
            console.log("*************************");
            console.log(value);
            //this.pdfurls2=value[0].imagePath;
            console.log(this.pdfurls2);
            this.isshowpdf=true;*/
        }
    }
};

</script>

