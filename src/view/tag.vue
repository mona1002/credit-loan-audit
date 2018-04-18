<template>
  <div class="tag" ref='tag_ref'>
    <div :class="[isActive(tag)?'active':'','pai']" :key="ind" v-for="(tag,ind) in visitedViews" @click="changeFlag(tag)">
      <router-link :to='tag.path+tag.params'>
        <!-- <el-tag closable :disable-transitions="false" @close.prevent="handleClose(tag)" class="tag_bottom" :key="tag" > {{tag.name}} </el-tag> -->
        <!-- <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
        {{tag.name}} -->
        <!-- </el-tag> -->
        <button closable :disable-transitions="false" @close.prevent="handleClose(tag)" class="button_bottom"><span v-show="tag.name!='工作台'" @click="handleClose(tag)" class="el-icon-close close_tag" > </span> {{tag.name}}</button>
      </router-link>
    </div>
    <el-button class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    <el-button class="bottom_sy" @click="adk"> 影像资料 </el-button>
    <button class="button_bottom">列表</button>
    <button class="button_bottom">列表2</button>
  </div>
</template>

<style>
  .tag {
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.11px;
  }

  .button_bottom {
    margin-right: 2px;
    padding: 9px 22px 9px 9px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    color: #ffffff;
    background: rgba(0, 119, 255, 0.5);
    box-shadow: 0 10px 20px 0 #b7d8ff;
    position: relative;
  }

  .button_bottom:hover {
    background: white;
    color: rgb(0, 119, 255)
  }

  .tag_bottom {
    margin-right: 2px;
    padding: 9px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    color: #ffffff;
    background: rgba(0, 119, 255, 0.5);
    box-shadow: 0 10px 20px 0 #b7d8ff;
  }

  .tag_bottom:hover {
    background: white;
    color: rgb(0, 119, 255)
  }

  .bottom_sy {
    border-radius: 3px;
    color: #ffffff;
    background: rgba(0, 119, 255, 0.5);
    box-shadow: 0 10px 20px 0 #b7d8ff;


  }

  .el-tag+.el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .pai {
    display: inline-block
  }

  .active {
    opacity: .6;
  }
.close_tag{
  position: absolute;
  right: 5px;
  font-size: 12px;
  top:5px;
}
</style>

<script>
  export default {
    data() {
      return {
        judge: {
          flag: ''
        },
        dynamicTags: ['/', '/SplitScreen', '/RApprovalConclusion'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      adk() {
        //   console.log( this.$store)
        this.$store.commit("ADD_VISITED_VIEWS", {
          name: "第二条",
          path: '/',
          flag: '03'
        })
      },
      handleClose(tag) {
        // this.$store.commit('HANDLE_CLOSE',tag)
        this.$store.dispatch('handleClose', tag)
      },
      handleClosed(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        // this.$store.commit("ADD_VISITED_VIEWS", {
        //   name: "kdl",
        //   path: '/SplitScreen',
        //   // flag: '01'
        // })
        this.$store.dispatch('addVisitedViews', {
          name: "迪恩",
          path: '/SplitScreen',
          // flag: '01'
        })
        // this.inputVisible = true;
        // this.$nextTick(_ => {
        //   this.$refs.saveTagInput.$refs.input.focus();
        // });
      },
      changeFlag(tg) {
        // console.log(fg)
        if (tg.flag != '' || tg.flag != undefined || tg.flag != 'undefined') {
          this.judge.flag = tg.flag;
          // console.log(tg.params)
          localStorage.setItem("judge", JSON.stringify(this.judge));
          // localStorage.setItem("antiApplyFlag", JSON.stringify(tg.params));
          
        }
      },
      isActive(route) {
        // console.log(  route.StatefullPath == this.$route.fullPath)
        // console.log(route.StatefullPath + '==============')
        // console.log(this.$route.fullPath + '----------------')
        // console.log(route)
        // console.log(this.$store.state)
        // return route.path === this.$route.path || route.name === this.$route.name
        // return route.StatefullPath == this.$route.fullPath ||route.path === this.$route.path;
        return route.StatefullPath == this.$route.fullPath;

      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      Width(){
  console.log( this.$refs.tag_ref)
      }
    },
    mounted() {
      console.log(this.$store.state.visitedViews)
      console.log( this.$refs.tag_ref)
    },
    computed: {
      visitedViews() {
        return this.$store.state.visitedViews
      }
    }
  }

</script>
