<template>
  <div class="mheader">
    <!-- <div class="firstDiv">
       <ul class="first">
           <li v-for="item1 in datas">
               <a @click="clickFirst(item1.id)">{{item1.text}}</a>
               <ul class="second">
                   <li v-for="item2 in seconds">
                       <a href="">{{item2.text}}</a>
                   </li>
                   <li>{{seconds}}</li>
               </ul>
           </li>
       </ul>
       </div> -->
   <!--  <el-tree
          :data="data"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick">
        </el-tree>  --> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datas:[
            {
                "attributes":{},
                "checked":false,
                "children":[],
                "iconCls":"folder_wrench",
                "id":"676c0816-78da-4040-92f0-b0acc20987de",
                "state":"closed",
                "text":"业务受理"
            },
            {
                "attributes":{},
                "checked":false,
                "children":[],
                "iconCls":"rainbow",
                "id":"9118623b-c7d3-470b-810b-34877c4d51a3",
                "state":"closed",
                "text":"信审管理"
            },
            {
                "attributes":{},
                "checked":false,
                "children":[],
                "iconCls":"",
                "id":"045891cb-3223-4af6-b59d-36a02d72b88b",
                "state":"closed",
                "text":"风险管理"
            },
            {
                "attributes":{ },
                "checked":false,
                "children":[],
                "iconCls":"icon-search",
                "id":"53829405-6f86-4287-bd90-87c506441d64",
                "state":"closed",
                "text":"综合查询"
            }
        ],
        seconds:[],
        /*data: [
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, 
        {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, 
          {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, 
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, 
          {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },*/
      };
    },
    methods: {
      clickFirst(id) {
       this.seconds= 
       [
            {
                "attributes":
                    {
                        "url":"/cre/creTelInfoForAppAction!mainPage.action?resId=26ba7ab6-316d-452e-bdc7-3f0be5d9226a"
                    },
                "checked":false,
                "children":[],
                "iconCls":"",
                "id":"26ba7ab6-316d-452e-bdc7-3f0be5d9226a",
                "state":"open",
                "text":"申请单电核信息变更"
            }
        ]
      },
      handleNodeClick(data) {
        console.log(data);
      },
    },
  };
</script>


<style>
  .mheader{
    width: 100%;
    min-width: 1366px;
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    font-size: 30px;
    color: white;
    padding-left:20px;
  }
  .first li{
    float: left;
    margin-left: 20px;
  }
  /* .mheader .el-tree-node{
    float: left;
  } */
</style>
