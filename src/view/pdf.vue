<template>
	<div>
        <div v-if="pdfUrlArr" v-for="(val,index) in pdfUrlArr" :key="index">
            <pdf-shower 
            :pdfurl="imgBaseUrl+val.imagePath" 
            :scale="scale" 
            @onErr="onErr">  
            </pdf-shower>
            <p>{{imgBaseUrl+val.imagePath}}</p>
        </div>
        <!-- <pdf-shower 
            v-if="pdfurls2"
            :pdfurl="imgBaseUrl+pdfurls2" 
            :scale="scale" 
            @onErr="onErr">  
        </pdf-shower>
        <p>{{imgBaseUrl+pdfurls2}}</p> -->
	</div>
</template>
<script>
import PdfShower from 'vue-pdf-shower';	
import pdfUrl from '../util/ConstantSocialAndPn'
export default {
    name: 'pdfshower',
    components: {
        'pdf-shower':PdfShower
    },
    created(){
        console.log("created-------------------");
        console.log(this.pdfArry);
    },
    mounted(){
        // alert('pppjjjj');
        console.log('测试');
        // console.log(this.imgBaseUrl + this.pdfArry[0]);
        //this.testurl = 'http://10.1.26.6:8080/ptopCredit/download/downloadAction!download.action?filepath=/creditFile&filename=upload\\2015-11-19\\201511190111013967\\C2-1.pdf'
    },
    data() {
        return {
            pdfurls2:'',
            // 缩放 默认为1
            scale: 1.2,
            pdfUrlArr:[],
            url:'',
            imgBaseUrl:pdfUrl.imgBaseUrl,
            //val:''
            //testurl:''
        };
    },
    methods: {
        // 加载失败的callback
        onErr(err) {
            console.log('pdf加载失败，请重试');
            console.log('错误信息：', err);
        }
    },
    props: ['pdfArry'],
    /*props: ['val'],*/
    watch:{
        pdfArry(value){
            this.pdfUrlArr = value;
            console.log(this.pdfUrlArr);
            /*console.log(newValue,oldValue);
            if(newValue&&oldValue){

                this.pdfUrlArr = value;
                console.log(this.pdfUrlArr);
                // 最终的pdf url
                this.url = pdfUrl.imgBaseUrl+this.pdfUrlArr[0];
                console.log(this.url)
            }*/
        },
        /*pdfUrlArr(newval){
            for(var i=0;i<newval.length;i++){
                this.val=newval[i]
            };
            console.log(this.val);
        },*/
        /*val(value){
            //alert('ooooo');
            console.log("*************************");
            console.log(value);
            this.pdfurls2=value.imagePath;
            console.log(this.pdfurls2);
        }*/
    }
};

</script>

