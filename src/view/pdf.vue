<template>
	<div>
        <div v-for="(val,index) in pdfArry" >
            <pdf-shower 
            :pdfurl="imgBaseUrl+val.imagePath" 
            :scale="scale" 
            @onErr="onErr">  
            </pdf-shower>
        </div>
        <!-- <pdf-shower 
            :pdfurl="pdfurls2" 
            :scale="scale" 
            @onErr="onErr">  
        </pdf-shower> -->
	</div>
</template>

<script>
import PdfShower from 'vue-pdf-shower';	

export default {
    name: 'pdfshower',
    components: {
        'pdf-shower':PdfShower
    },
    mounted(){
        console.log(this.pdfArry[0].imagePath);
        console.log(this.imgBaseUrl);
    },
    data() {
        return {
            pdfurls2:'/static/aaa.pdf',
            // 缩放 默认为1
            scale: 1.2
        };
    },
    methods: {
        // 加载失败的callback
        onErr(err) {
            console.log('pdf加载失败，请重试');
            console.log('错误信息：', err);
        }
    },
    props: ['pdfArry','imgBaseUrl'],
};

</script>