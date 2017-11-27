<template>
  <div class="mheader">
    <div class="logoDiv"><img class="logo" src="/static/images/logo.png"></div> 
    <div class="firstDiv">
       <ul class="first">
           <li class="firstLi" v-for="(item1,index) in datas" @click="showSpan">
               <a class="firstA" @click="clickFirst(index)">{{item1.text}}</a>
               <span v-show="bottomLine"></span>
               <ul class="second" v-if="item1.children!=null">
                   <li class="secondLi" v-for="(item2,index2) in item1.children">
                       <a class="secondA">{{item2.text}}</a>
                       <!-- <router-link to="url"></router-link> -->
                       <ul class="three" v-if="item2.children!=null">
                         <li class="threeLi" v-for="(item3,index3) in item2.children">
                           <a class="threeA">{{item3.text}}</a>
                         </li>
                       </ul>
                   </li>
               </ul>
           </li>
       </ul>
       </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aa:false,
        bottomLine:false,
        /*url:this.item2.attributes.url,*/
        datas:[
          {
              "attributes":{},
              "checked":false,
              "children":Array[5],
              "iconCls":"",
              "id":"76d307df-9651-4be0-83b7-9fecb425f469",
              "state":"closed",
              "text":"销售例子"
          },
          {
              "attributes":{},
              "checked":false,
              "children":[
                  {
                      "attributes":
                          {
                          "url":"/invest/investOrderAction!mainPage.action?reqSource=invest&resId=77f96eac-942d-49da-823b-3377f0c5d751"
                          },
                      "checked":false,
                      "children":Array[0],
                      "iconCls":"",
                      "id":"77f96eac-942d-49da-823b-3377f0c5d751",
                      "state":"open",
                      "text":"投资申请预约"
                  },
                  {
                      "attributes":{
                          "url":"/invest/investApplyInfoAction!mainPage.action?resId=12d2985d-feb8-48c8-a39d-b57e3d87d797"
                      },
                      "checked":false,
                      "children":Array[0],
                      "iconCls":"book_open",
                      "id":"12d2985d-feb8-48c8-a39d-b57e3d87d797",
                      "state":"open",
                      "text":"投资申请登记"
                  },
                  {
                      "attributes":{
                          "url":"/invest/investApplyAction!taskToDoPage.action?taskNodeName=financeApp_invest_apply&resId=395934c9-01a4-4dbd-901d-998b639e0b6e"
                      },
                      "checked":false,
                      "children":Array[0],
                      "iconCls":"",
                      "id":"395934c9-01a4-4dbd-901d-998b639e0b6e",
                      "state":"open",
                      "text":"投资申请回退"
                  },
                  {
                      "attributes":{
                          "url":"/invest/investApplyProAction!qcCheckListPage.action?taskNodeName=financeApp_invest_check&resId=2f9eb657-f3f4-4687-9968-f7d875a2eb5a"
                      },
                      "checked":false,
                      "children":Array[0],
                      "iconCls":"",
                      "id":"2f9eb657-f3f4-4687-9968-f7d875a2eb5a",
                      "state":"open",
                      "text":"投资申请质检"
                  },
                  {
                      "attributes":{
                          "url":"/invest/investApplyAction!approvePage.action?taskNodeName=financeApp_invest_approve&resId=769c55fb-cc01-42ca-a784-5dde6a4a6628"
                      },
                      "checked":false,
                      "children":Array[0],
                      "iconCls":"arrow_green",
                      "id":"769c55fb-cc01-42ca-a784-5dde6a4a6628",
                      "state":"open",
                      "text":"投资申请审核"
                  },
                  {
                      "attributes":{
                          "url":"/continuedinvest/continueInvestPackAction!mainPage.action?resId=851ecfa4-4e5e-4160-925b-e9bcb9d8379e"
                      },
                      "checked":false,
                      "children":[
                        {
                          "attributes":{
                            "url":"/invest/investMatchInfoAction!mainPage.action?resId=cbb08b46-4925-431c-a17c-09cbab42c80b"},
                        "checked":false,
                        "children":[],
                        "iconCls":"anchor",
                        "id":"cbb08b46-4925-431c-a17c-09cbab42c80b",
                        "state":"open",
                        "text":"理财VIP客户"
                        },
                        {
                          "attributes":{
                            "url":"/invest/investMatchInfoAction!mainPage.action?resId=cbb08b46-4925-431c-a17c-09cbab42c80b"},
                        "checked":false,
                        "children":[],
                        "iconCls":"anchor",
                        "id":"cbb08b46-4925-431c-a17c-09cbab42c80b",
                        "state":"open",
                        "text":"理财VIP客户2"
                        },
                      ],
                      "iconCls":"",
                      "id":"851ecfa4-4e5e-4160-925b-e9bcb9d8379e",
                      "state":"open",
                      "text":"续投投资合并"
                  }
              ],
              "iconCls":"status_online",
              "id":"87d7a401-4e36-4e79-a19c-b87973990381",
              "state":"closed",
              "text":"投资管理"
          }],
        
      };
    },
    methods: {
      clickFirst(index) {
        console.log(index);
        
        this.bottomLine=true;
      },
      handleNodeClick(data) {
        console.log(data);
      },
      showSpan(){
        $("firstA").on('click',function(){

        })
      },
    },
  };
</script>


<style scoped>
  .mheader{
    width: 100%;
    min-width: 1366px;
    height: 70px;
    line-height: 70px;
    /* background: #20a0ff; */
    background-image:linear-gradient(-62deg, #3196e4 0%, #1f64b4 36%, #0f3889 100%);
  }
  .mheader .logoDiv{
    float: left;
    height: 70px;
    width: 116px;
    border-right: 1px solid #12346b;
  }
  .mheader .logoDiv .logo{
    width: 58px;
    height: 34px;
    margin:15px 0 21px 28px;
  }
  .firstDiv{
    float:left;
  }
  .first .firstLi{
    float: left;
    margin: 0 39px;
    position: relative;
    position: relative;
  }
  .first li .firstA{
    font-size: 15px;
    color:#bfcbd9;
    text-decoration:none;
  }
  .first .firstLi span{
    width: 61px;
    height: 2px;
    background-color: #fff;
    display: inline-block;
    position: absolute;
    bottom: 10px;
  }
  .second{
    width: 150px;
    /* height: 200px; */
    background-color: #ccc;
    position: absolute;
  }
  .second .secondLi{
    /* padding: 10px 10px; */
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: relative;
  }
  .second .secondA{
    font-size: 18px;
  }
  .three{
    width: 150px;
    font-size: 18px;
    background-color: pink;
    position: absolute;
    left: 150px;
    top: 0;
  }
  .three .threeLi{
    width: 100%;
    height: 30px;
    /* padding: 10px 10px; */
    line-height: 30px;
  }
</style>
