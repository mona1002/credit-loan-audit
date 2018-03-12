<template>
  <div class="mheader">
    <!-- 导航图片 -->
    <div class="logoDiv">
      <!-- <img class="logo" src="/static/images/logo.png"> -->
      风控管理系统
    </div>
      <div class="icon" style="left:150px;" @click="le">aaa</div>
    <div class="icon" style="right:200px;" @click="ri">bbb</div>
    <!-- 导航内容 -->
    <div class="navContain"  ref="kkkkk" style="left:200px" >
      <div class="contain">
        <nobr>
          <el-menu router unique-opened mode="horizontal" ref="navbar" active-text-color="#ffd04b" :default-active="onRoutes" @select="selectMenu">
            <nav-item v-for="(item, n) in datas" :item="item" :navIndex="String(n)" :key="n">
            </nav-item>
          </el-menu>
        </nobr>
      </div>
    </div>
    <div class="backIcon">
      <img @click="backLoin" src="/static/images/backLoin.png">
    </div>
  </div>
</template>

<script>
  import NavItem from '@/view/navItem'
  import UserURL from "../util/constantUser";
  export default {
    data() {
      return {
        datas: [],
      };
    },
    created() {
      //一进入页面就发送请求  
      this.request();
    },
    methods: {
      request() {
        this.post('/smUser/getResTree').then(res => {
          this.datas = res.data;
          //console.log(this.datas);
          /*for(var i=0;i<this.datas.length;i++){
            if(this.datas[i]);
          } */
          //var arr = [];
          //arr.push($(".el-menu--horizontal")[0].children)
          //console.log(arr.push($(".el-menu--horizontal")[0].children));
          /*for(var i=0;i<$(".el-menu--horizontal").length;i++){
           console.log($(".el-menu--horizontal")[i]);
          }*/
          //var sum;
          /*for(var i=0;i<$(".el-menu--horizontal").length;i++){
             if(){
               sum+=$(".el-menu--horizontal")[i];
             }
          }*/
        })
      },
      selectMenu(index, indexPath) {
        //console.log(indexPath);
        /**
         * 在选择父级菜单时自动关闭其下所有子菜单
         * 选择时获取点击菜单的父级index，并计算得到该index在已打开菜单中的索引值，
         * 关闭位于当前打开菜单中该索引值之后的全部菜单
         */
        // 获取当前打开的所有菜单
        let openMenu = this.$refs.navbar.openedMenus.concat([])
        //console.log(openMenu);
        // 获取点击菜单的父级index，如果当前点击的是根节点，则直接关闭所有打开菜单
        let nowMenuPath = indexPath.length > 1 ? indexPath[indexPath.length - 2] : ""
        //console.log(nowMenuPath);
        if (nowMenuPath) {
          // 获取父级index在数组中索引，关闭其后所有的菜单
          let menuIndex = openMenu.indexOf(nowMenuPath)
          openMenu = openMenu.slice(menuIndex + 1)
        }
        openMenu = openMenu.reverse()
        openMenu.forEach((ele) => {
          this.$refs.navbar.closeMenu(ele)
        })
      },
      backLoin() {
        window.location.href = UserURL + "#/workbench";
      },
 le(){
   this.$refs.kkkkk.style.left = parseFloat(this.$refs.kkkkk.style.left) - 100 + "px";

      },
ri(){
   this.$refs.kkkkk.style.left = parseFloat(this.$refs.kkkkk.style.left) + 100 + "px";
},
    },
    computed: {
      onRoutes() {
        //console.log(this.$route.resUrl);
        return this.$route.resUrl
      },
    },
    components: {
      NavItem,
    },
  };

</script>


<style scoped>
  .mheader {
    width: 100%;
    min-width: 1366px;
    height: 70px;
    line-height: 70px;
    background-image: url(/static/images/daoLogo.png);
    background-size: 100% 100%;
    background-repeat: repeat-y;
    /* background-image:linear-gradient(-62deg, #3196e4 0%, #1f64b4 36%, #0f3889 100%); */
    height: 70px;
    line-height: 70px;
    font-size: 30px;
    color: white;
  }

  .mheader .logoDiv {
    float: left;
    height: 70px;
    border-right: 1px solid #bfcbd9;
    background: rgba(69, 115, 227, .2);
    font-size: 20px;
    color: #fff;
    padding: 0 33px;
    line-height: 70px;
    letter-spacing: 2px;
    background: red;
    position: absolute;
    z-index: 200;
  }

  /* 导航内容 */

  .mheader .navContain {
    width: calc( 100% - 305px);
    height: 70px;
    position: absolute;
    background: pink;
    /* position: relative;
    overflow: hidden; */
  }

  /* .mheader .navContain:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
    width: 100%;
  } */

  .mheader .backIcon {
    width: 60px;
    padding: 0 16px;
    line-height: 70px;
    /* float: right; */
    background: green;
    position: absolute;
    right: 0px;
    width: 100px;
    z-index: 200;
  }
  .icon {
    width: 50px;
    height: 50px;
    background: purple;
    position: absolute;
    z-index: 210;
  }
  .mheader .navContain .el-menu div {
    width: auto;
    display: inline-block;
    height: 70px;
  }

</style>
