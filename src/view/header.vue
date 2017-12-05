<template>
  <div class="mheader">
    <!-- 导航图片 -->
    <div class="logoDiv">
      <img class="logo" src="/static/images/logo.png">
    </div> 
    <!-- 导航内容 -->
    <div class="navContain">
      <el-menu 
        router 
        unique-opened 
        ref="navbar"
        active-text-color="#ffd04b"
        :default-active="onRoutes"
        @select="selectMenu">
        <nav-item 
            v-for="(item, n) in datas" 
            :item="item" 
            :navIndex="String(n)" 
            :key="n">
        </nav-item>
      </el-menu>
    </div>









  </div>
</template>

<script>
import NavItem from '@/view/navItem'
  export default {
    data() {
      return {
        datas:[], 
        activeIndex:'1',//当前激活菜单的 index
      };
    },
    created(){
      //一进入页面就发送请求  
      this.request();  
    },
    methods: {
      request(){
          this.post('/smUser/getResTree').then(res => {
              this.datas = res.data;
              console.log(this.datas);  
          })
        },
      selectMenu(index, indexPath){
            /**
             * 在选择父级菜单时自动关闭其下所有子菜单
             * 选择时获取点击菜单的父级index，并计算得到该index在已打开菜单中的索引值，
             * 关闭位于当前打开菜单中该索引值之后的全部菜单
             */
            // 获取当前打开的所有菜单
            let openMenu = this.$refs.navbar.openedMenus.concat([])
            // 获取点击菜单的父级index，如果当前点击的是根节点，则直接关闭所有打开菜单
            let nowMenuPath = indexPath.length > 1 ? indexPath[indexPath.length-2] : ""
            if(nowMenuPath){
                // 获取父级index在数组中索引，关闭其后所有的菜单
                let menuIndex = openMenu.indexOf(nowMenuPath)
                openMenu = openMenu.slice(menuIndex+1)
            }
            openMenu = openMenu.reverse()
            openMenu.forEach((ele) => {
                this.$refs.navbar.closeMenu(ele)
            })
        },


    },
    computed: {
        onRoutes(){
            return this.$route.resUrl
        },
    },
    components: {
        NavItem,
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
    height: 70px;
    line-height: 70px;
    /* background: #20a0ff; */
    font-size: 30px;
    color: white;
    padding-left:20px;
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
  /* 导航内容 */
  .mheader .navContain{
    width: calc( 100% - 116px );
    float: left;
    height: 70px;
  }
  .mheader .navContain .el-menu div{
    width: auto;
    float: left;
    height: 70px;
  }
  .mheader .navContain .el-menu div:nth-of-type(1){
    margin-left: 128px;
  }
</style>
