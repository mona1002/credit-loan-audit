<template>
  <div class="mheader">
    <!-- 导航图片 -->
    <div class="logoDiv">
      风控管理系统
    </div>
    <!-- 左按钮 -->
    <div class="icon" style="left:187px;background:#2ea8e0;display:none;" @click="le" id="iconl">
      <img src="/static/images/leftjt.png">
    </div>
    <!-- 导航内容 -->
    <div class="wrap" ref="wrapRef" style="position:relative;left:198px;">
      <!-- 具体菜单内容 -->
      <div class="navContain" ref="contains" style="left:0px;">
        <nobr>
          <el-menu router unique-opened mode="horizontal" ref="navbar" active-text-color="#ffd04b" :default-active="onRoutes"
            @select="selectMenu">
            <el-menu-item is="nav-item" v-for="(item, n) in datas" :item="item" :navIndex="String(n)" :key="n">
            </el-menu-item>
          </el-menu>
        </nobr>
      </div>
    </div>
    <!-- 右按钮 -->
    <div class="icon" style="right:124px;background:#4fc9ed;display:none;" @click="ri" id="iconr">
      <img src="/static/images/rightjt.png">
    </div>
    <!-- 返回按钮 -->
    <div class="backIcon" @click="backLoin">
      <img src="/static/images/backLoin.png">
      <span>返回首页</span>
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
    mounted() {
      //一进入页面就发送请求  
      this.request();
    },
    methods: {
      request() {
        this.post('/smUser/getResTree').then(res => {
          if (res.statusCode == 200) {
            this.datas = res.data;
            if (res.data) {
              this.bbb();
            }
          }

        })
      },
      bbb() {
        setTimeout(function () {
          if ($('.navContain').width() > $('.wrap').width()) {
            $('.icon').css('display', 'block');
            $('.wrap').width($('.wrap').width() - 60);
            $('.wrap').css('left', '229px');
          } else {
            this.aaa = false;
          }
        }, 100);

      },
      selectMenu(index, indexPath) {
        /**
         * 在选择父级菜单时自动关闭其下所有子菜单
         * 选择时获取点击菜单的父级index，并计算得到该index在已打开菜单中的索引值，
         * 关闭位于当前打开菜单中该索引值之后的全部菜单
         */
        // 获取当前打开的所有菜单
        let openMenu = this.$refs.navbar.openedMenus.concat([])
        // 获取点击菜单的父级index，如果当前点击的是根节点，则直接关闭所有打开菜单
        let nowMenuPath = indexPath.length > 1 ? indexPath[indexPath.length - 2] : ""
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
        localStorage.clear();
      },
      le() {
        if ($('.navContain').width() <= $('.wrap').width()) {
          $('#iconl').attr("disabled", true);
        } else {
          if (parseInt(this.$refs.contains.style.left) == ($('.wrap').width() - $('.navContain').width()) || parseInt(
              this.$refs.contains.style.left) < ($('.wrap').width() - $('.navContain').width())) {
            $('#iconl').attr("disabled", true);
          } else {
            this.$refs.contains.style.left = parseFloat(this.$refs.contains.style.left) - 150 + "px";
          }
        }
      },
      ri() {
        if ($('.navContain').width() <= $('.wrap').width()) {
          $('#iconr').attr("disabled", true);
        } else if ($('.navContain').width() > $('.wrap').width()) {
          if (this.$refs.contains.style.left == '0px' || this.$refs.contains.style.left > '0px') {
            $('#iconr').attr("disabled", true);
          } else {
            this.$refs.contains.style.left = parseFloat(this.$refs.contains.style.left) + 150 + "px";
          }
        }
      },
    },
    computed: {
      onRoutes() {
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
    height: 50px;
    line-height: 50px;
    background-image: url(/static/images/daoLogo.png);
    background-size: 100% 100%;
    background-repeat: repeat-y;
    font-size: 30px;
    color: white;
    position: relative;
  }

  .mheader .logoDiv {
    float: left;
    height: 50px;
    border-right: 1px solid #bfcbd9;
    background: rgb(51, 158, 225);
    font-size: 18px;
    color: #fff;
    padding: 0 33px;
    line-height: 50px;
    letter-spacing: 2px;
    position: absolute;
    z-index: 2000;
  }

  /* 导航内容 */

  .wrap {
    width: calc(100% - 324px);
    height: 100%;
    float: left;
  }

  .mheader .navContain {
    height: 50px;
    position: absolute;
  }

  .mheader .backIcon {
    width: 60px;
    padding: 0 16px;
    height: 50px;
    line-height: 40px;
    background: #4fc9ed;
    position: absolute;
    right: 0px;
    width: 124px;
    z-index: 200;
    cursor: pointer;
  }

  .mheader .backIcon img {
    float: left;
    padding: 14px 5px 0 0;
  }

  .mheader .backIcon span {
    font-size: 14px;
  }

  .icon {
    width: 30px;
    height: 50px;
    position: absolute;
    color: blue;
    z-index: 210;
    line-height: 40px;
    text-align: center;
  }

  .mheader .navContain .el-menu div {
    width: auto;
    display: inline-block;
    height: 50px;
  }

</style>
