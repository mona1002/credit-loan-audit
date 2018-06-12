<template>
	<div>
       <pdf-shower 
            class="rightCav"
            v-for="(item,index) in newArry"
            :key=Math.random()
           :pdfurl="imgBaseUrl+item.imagePath" 
           :scale="scale" 
           @onErr="onErr">  
       </pdf-shower>
       <!-- <p>{{newArry[0].imagePath}}</p> 
       <test :title="title"></test>-->
	</div>
</template>
<script>
import PdfShower from 'vue-pdf-shower';	
import pdfUrl from '../util/ConstantSocialAndPn';
export default {
    name: 'pdfshower',
    components: {
        'pdf-shower':PdfShower
    },
    data() {
        return {
            pdfurls2:'',
            // 缩放 默认为1
            scale: 1.2,
            imgBaseUrl:pdfUrl.imgBaseUrl,
            newArry:[],
            aaa:false,
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
            console.log('我是右边');
            this.newArry = value;
            this.aaa = true;
            /*var rightCav = document.getElementsByClassName('rightCav');
            var cvsWraper = document.getElementById('cvsWraper');
            console.log(cvsWraper);*/
            // var cvs = cvsWraper.getElementsByTagName("canvas");
            // $('.rightCav #cvsWraper').append(cvs);
            console.log("+++++++++++++++++++r");
            //console.log(cvs);
        }
    }
};

</script>

