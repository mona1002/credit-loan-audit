<template>
  <div class="tag">
    <div ref='tag_wrap' class="tagWrap">
      <div ref='tag_ref' class="tag_Ref" :style="{left:activeLeft+'px'}">
        <nobr>
          <div :class="[isActive(tag)?'active':'','pai']" :key="ind" v-for="(tag,ind) in visitedViews" @click="changeFlag(tag)" >
            <!-- <router-link :to='tag.path+tag.params' @contextmenu.prevent.native="openMenu(tag,$event)"> -->
            <router-link :to='tag.StatefullPath' @contextmenu.prevent.native="openMenu(tag,$event)" ref="tag_self">
              <!-- <el-tag closable :disable-transitions="false" @close.prevent="handleClose(tag)" class="tag_bottom" :key="tag" > {{tag.name}} </el-tag> -->
              <!-- <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
        {{tag.name}} -->
              <!-- </el-tag> -->
              <button closable :disable-transitions="false" class="button_bottom">
                <span v-show="tag.name!='工作台'" @click.prevent.stop="handleClose(tag,$event)" class="el-icon-close close_tag"> </span> {{tag.name}}</button>
            </router-link>
          </div>
        </nobr>
      </div>
    </div>
    <div class="rightBtn Btn" @click="rightMove">
      <i class="el-icon-arrow-right "></i>
    </div>
    <div class="leftBtn Btn" @click="leftMove">
      <i class="el-icon-arrow-left "></i>
    </div>
    <ul class='contextmenu' v-show="visible" :style="{left:styleLeft+'px',top:'-30px'}">
      <!-- <li @click="closeSelectedTag(selectedTag)">Close</li> -->
      <li @click="handleClose(selectedTag)">Close</li>

      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags">Close All</li>
    </ul>
    <el-button class="button_bottom" @click='moveToCurrentTag' style="top:-200px;"> 影像资料 </el-button>
    
    <!-- <el-button class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    <button class="button_bottom">列表</button> -->
    <!-- <button class="button_bottom" @click="OneLine" style="top:-200px;">列表2</button> -->
  </div>
</template>

<style>
  .tag {
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.11px;
    width: 100%;
  }

  .tagWrap {
    /* width:calc(  100% - 30px); */
    width:100%;
    height: 39px;
    /* left:30px; */
    position: absolute;
    overflow: hidden;
  }

  .tag_Ref {
    position: absolute;
    left: 30px;
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

  .close_tag {
    position: absolute;
    right: 5px;
    font-size: 12px;
    top: 5px;
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 30;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
  }

  .contextmenu li {
    cursor: pointer;
    border:2px solid green;
    margin-top:4px;
  }

  .Btn {
    color: #409EFF;
    position: absolute;
    top: 0;
    bottom: 0;
    line-height: 40px;
    width: 25px;
    text-align: center;
    background: #e0eeff;
    /* display: none; */
  }

  .rightBtn {
    right: 0;
  }

  .leftBtn {
    left: 0
  }

</style>

<script>
const padding = 0 // tag's padding
  export default {
    data() {
      return {
        nodeFlag: "",
        RoutePath: '',
        nodeName: '',
        routeParams: '',
        taskNodeName: '',
        processMoniParams: '',
        right: null,
        left: null,
        tagWidth: null,
        tagWrapWidth: null,
        antiNode: '',
        visible: false,
        views: null,
        styleLeft: 0,
        activeLeft:30,
        // styleTop: 0,
        judge: {
          flag: ''
        },
        dynamicTags: ['/', '/SplitScreen', '/RApprovalConclusion'],
        inputVisible: false,
        inputValue: ''
      };
    },
    computed: {
      visitedViews() {
        return this.$store.state.visitedViews
      }
    },
    watch: {
      $route() {
        this.addViewTags()
        this.moveToCurrentTag()
        // this.move();
      },
      visible(value) {
        if (value) {
          window.addEventListener('click', this.closeMenu)
        } else {
          window.removeEventListener('click', this.closeMenu)
        }
      }
    },
    mounted() {
      this.addViewTags()
      // this.move();
    },
    methods: {
      addViewTags() {
        // const route = this.generateRoute();
        const route = this.$route;
        route.fullPath.indexOf('?') != -1 ? this.taskNodeName = route.fullPath.split('?')[1].split('&')[0].split('=')[1] :
          this.taskNodeName;
           this.routeParams = '';
        if (!route) {
          return false
        }
        if (route.path == '/') {
          return
        }
        if (route.path == '/taskInWaitting') { // 初审 审批
          this.nodeFlag = "01";
          this.nodeName = "初审审批";
          this.routeParams = '?taskNodeName=creditApp_firstTrial&flag=01';
        } else if (route.path == '/SplitScreen') { // 初审详情
          this.nodeFlag = "01";
          this.nodeName = "初审详情";
          // this.routeParams = '';
        } else if (route.path == '/FtaskInWaitting') { // 终审 审批
          // this.taskNodeName = route.fullPath.split('?')[1].split('&')[0].split('=')[1];
          if (this.taskNodeName == "creditApp_finalTrial_one") {
            this.nodeName = '终审一级审批';
          } else if (this.taskNodeName == "creditApp_finalTrial_two") {
            this.nodeName = '终审二级审批'
          } else if (this.taskNodeName == "creditApp_finalTrial_three") {
            this.nodeName = '信审经理审批';
          } else if (this.taskNodeName == "creditApp_finalTrial_four") {
            this.nodeName = '信审高级经理审批'
          } else if (this.taskNodeName == "creditApp_finalTrial_five") {
            this.nodeName = '信审总监审批审批'
          }
          this.nodeFlag = "02";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=02";
        } else if (route.path == '/FSplitScreen') { //终审详情
          this.nodeFlag = "02";
          this.nodeName = "终审详情";
          // this.routeParams = '';
        } else if (route.path == '/AntiFraud34') { // 反欺诈审批
          if (this.taskNodeName == "antiFraudApp_commissioner") { //反欺诈专员审批
            this.nodeName = "反欺诈专员审批";
            this.nodeFlag = "03";
            this.routeParams = '?taskNodeName=antiFraudApp_commissioner&flag=03';
          } else if (this.taskNodeName == "antiFraudApp_manager") { //反欺诈主管审批
            this.nodeName = "反欺诈主管审批";
            this.nodeFlag = "04";
            this.routeParams = '?taskNodeName=antiFraudApp_manager&flag=04';
          }
        } else if (route.path == '/AntiFraud') { //反欺诈申请
          this.nodeName = "反欺诈申请";
          // this.nodeFlag = "03";
          this.routeParams = '?taskNodeName=antiFraudApp_apply';
        } else if (route.path == '/AntiApplyInf') { //反欺诈申请-查看
          this.nodeName = "反欺诈申请-查看";
        } else if (route.path == '/AntiApplyAdd') { //反欺诈申请-添加
          this.nodeName = "反欺诈申请-添加";
        } else if (route.path == '/AntiApplyEditf') { //反欺诈申请-编辑
          this.nodeName = "反欺诈申请-编辑";
        } else if (route.path == '/reconsiderList') { //复议审批
          if (this.taskNodeName == "reconsiderApp_commissioner") {
            this.nodeName = '复议专员审批';
            this.nodeFlag = "05";
            this.routeParams = '?taskNodeName=reconsiderApp_commissioner&flag=05';
          } else if (this.taskNodeName == "reconsiderApp_manager") {
            this.nodeName = '复议经理审批';
            this.nodeFlag = "06";
            this.routeParams = '?taskNodeName=reconsiderApp_manager&flag=06';
          }
        } else if (route.path == '/ReconsiderSplit') { //复议详情
          this.nodeName = "复议详情";
          this.nodeFlag = "";
          // this.routeParams = '';
        } else if (route.path == '/historicalTask') { // 任务管理-信审历史任务
          this.nodeName = "信审历史任务";
          // this.routeParams = '';
        } else if (route.path == '/doTheTask') { // 任务管理- 信审已办任务
          this.nodeName = "信审已办任务";
          // this.routeParams = '';
        } else if (route.path == '/aDoneTask') { // 任务管理- 反欺诈已办任务
          this.nodeName = "反欺诈已办任务";
          // this.routeParams = '';
        } else if (route.path == '/aHistoryTask') { // 任务管理- 反欺诈历史任务
          this.nodeName = "反欺诈历史任务";
          // this.routeParams = '';
        } else if (route.path == '/HistoryTask') { // 任务管理- 复议历史任务
          this.nodeName = "复议历史任务";
          // this.routeParams = '';
        } else if (route.path == '/DoneTask') { // 任务管理- 复议已办任务
          this.nodeName = "复议已办任务";
          // this.routeParams = '';
        } else if (route.path == '/AntiCaseNum') { // 案件编号维护
          this.nodeName = "案件编号维护";
          // this.routeParams = '';
        } else if (route.path == '/AntiRules') { // 反欺诈规则设定
          this.nodeName = "反欺诈规则设定";
          // this.routeParams = '';
        } else if (route.path == '/MatchingInf') { // 匹配信息-查看
          this.nodeName = "匹配信息-查看";
          // this.routeParams = '';
          // this.nodeFlag = "";1          
          // this.routeParams = '';
        } else if (route.path == '/processMoni') { //  流程监控 - 
          //           route.fullPath.indexOf('?') != -1 ? this.processMoniParams= route.fullPath.split('?')[1]: this.processMoniParams;
          if (route.fullPath == '/processMoni?creditApp00') {
            this.nodeName = "信审未分配流程";
            this.routeParams = '?creditApp00';
          } else if (route.fullPath == '/processMoni?creditApp01') {
            // this.nodeName = "信审已分配流程";
            this.nodeName = "信审已分配流程信审已分配流程信审已分配流程信审已分配流程信审已分配流程信审已分配流程信审已分配流程信审已分配流程信审已分配流程";

            this.routeParams = '?creditApp01';
          } else if (route.fullPath == '/processMoni?creditApp03') {
            this.nodeName = "信审已完成流程";
            this.routeParams = '?creditApp03';
          } else if (route.fullPath == '/processMoni?reconsiderApp03') {
            this.nodeName = "复议已完成流程";
            this.routeParams = '?reconsiderApp03';
          } else if (route.fullPath == '/processMoni?reconsiderApp01') {
            this.nodeName = "复议已分配流程";
            this.routeParams = '?reconsiderApp01';
          } else if (route.fullPath == '/processMoni?reconsiderApp00') {
            this.nodeName = "复议未分配流程";
            this.routeParams = '?reconsiderApp00';
          } else if (route.fullPath == '/processMoni?antiFraudApp01') {
            this.nodeName = "反欺诈已分配流程";
            this.routeParams = '?antiFraudApp01';
          } else if (route.fullPath == '/processMoni?antiFraudApp00') {
            this.nodeName = "反欺诈未分配流程";
            this.routeParams = '?antiFraudApp00';
          } else if (route.fullPath == '/processMoni?antiFraudApp03') {
            this.nodeName = "反欺诈已完成流程";
            this.routeParams = '?antiFraudApp03';
          }
        } else if (route.path == '/IntegratedQuery') {
          this.nodeName = "综合查询-查看";
        }
        // ===========================================
        this.RoutePath = route.path;
        this.$store.dispatch('addVisitedViews', {
          name: this.nodeName,
          path: this.RoutePath,
          flag: this.nodeFlag,
          params: this.routeParams,
          StatefullPath: this.RoutePath + this.routeParams
        })
        // this.$store.dispatch('addVisitedViews', route)
      },
      moveToCurrentTag() {
        // console.log(this.$refs.tag_self)
        // tag_self
        const tags = this.$refs.tag_self
        this.$nextTick(() => {
          for (const tag of tags) {
        // console.log(tag.$el)            
            if (tag.to === this.$route.fullPath) {
              // this.$refs.scrollPane.moveToTarget(tag.$el)
            this.moveToTarget(tag.$el)
              
              break
            }
          }
        })
      },
          moveToTarget($target) {
      const $container = this.$refs.tag_wrap
      const $containerWidth = $container.offsetWidth
      const $targetLeft = $target.offsetLeft
      const $targetWidth = $target.offsetWidth
      console.log( $containerWidth)
console.log($targetLeft)
      if ($targetLeft <$containerWidth) {
        // tag in the activeLeft
        console.log('ddddddddddddd')
        this.activeLeft = -$targetLeft + 100
        // $targetLeft
      } else if ($targetLeft + padding > -this.activeLeft && $targetLeft + $targetWidth < -this.activeLeft + $containerWidth - padding) {
        // tag in the current view
        // eslint-disable-line
        console.log('22222222222222222222222')
        
      } else {
        // tag in the right
        console.log('33333333333333333333')
        
        this.activeLeft = -($targetLeft - ($containerWidth - $targetWidth) + 30)
      }
    },
      // generateRoute() {
      //   // console.log(this.$route)
      //   if (this.$route.name) {
      //     return this.$route
      //   }
      //   return false
      // },
      isActive(route) {
        // console.log(route.StatefullPath )
        // console.log(this.$route.fullPath)
        return route.StatefullPath == this.$route.fullPath;
      },
      // closeSelectedTag(view) {
      //   console.log(view)
      //   this.$store.dispatch('delVisitedViews', view).then((views) => {
      //     if (this.isActive(view)) {
      //       const latestView = views.slice(-1)[0]
      //       if (latestView) {
      //         this.$router.push(latestView.path)
      //       } else {
      //         this.$router.push('/')
      //       }
      //     }
      //   })
      // },
      closeOthersTags() {
        // delOthersViews
        console.log(this.selectedTag)
        this.$router.push(this.selectedTag.StatefullPath)
        this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
          // this.moveToCurrentTag()
        })
      },
      openMenu(tag, e) {
        this.visible = true
        this.selectedTag = tag
        this.styleLeft = e.clientX + 10
      },
      closeAllTags() {
        this.$store.dispatch('delAllViews')
        this.$router.push('/')
      },
      closeMenu() {
        this.visible = false
      },
      handleClose(view, ev) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          console.log(views)
          if (this.isActive(view)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView.StatefullPath);
              // 页签left值改变，最后一个页签激活状态可以显示出来
              // if ($('.tag_Ref').width() <= $('.tag').width() - 50) {
              //   this.$refs.tag_ref.style.left = (ev.clientX - 100) + "px";
              // } else {
              //   this.$refs.tag_ref.style.left = '30px';
              // }
              // console.log(ev.clientX - 100)
            } else {
              this.$router.push('/')
            }
          }
        })
        // console.log(view)
        //   this.$store.dispatch('delVisitedViews', view).then((views) => {
        // if (this.isActive(view)) {
        //   console.log(view)
        //   const latestView = views.slice(-1)[0]
        //   if (latestView) {
        //     this.$router.push(latestView.path)
        //   } else {
        //     this.$router.push('/')
        //   }
        // }
        // })
      },
      rightMove() {
        this.right = parseFloat(this.$refs.tag_ref.style.left);
        this.tagWidth = $('.tag_Ref').width();
        this.tagWrapWidth = $('.tag').width();
        if (this.tagWidth <= this.tagWrapWidth - 50) {
          this.$refs.tag_ref.style.left = '30px';
        } else {
          if (this.right <= (this.tagWidth - this.tagWrapWidth) * -1) {
            this.$refs.tag_ref.style.left = (this.tagWidth - this.tagWrapWidth + 40) * -1 + 'px';
          } else {
            this.$refs.tag_ref.style.left = this.right - 50 + "px";
          }
        }
      },
      leftMove() {
        console.log('le')
        // this.right = parseFloat(this.$refs.tag_ref.style.left);
        if (parseFloat(this.$refs.tag_ref.style.left) >= -20) {
          this.$refs.tag_ref.style.left = '30px';
        } else {
          this.$refs.tag_ref.style.left = parseFloat(this.$refs.tag_ref.style.left) + 50 + "px";
        }
      },
      // adk() {
      //   //   console.log( this.$store)

      // },

      // handleClosed(tag) {
      //   this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      // },
      // showInput() {
      //   // this.$store.commit("ADD_VISITED_VIEWS", {
      //   //   name: "kdl",
      //   //   path: '/SplitScreen',
      //   //   // flag: '01'
      //   // })
      //   this.$store.dispatch('addVisitedViews', {
      //     name: "迪恩",
      //     path: '/SplitScreen',
      //     // flag: '01'
      //   })
      //   // this.inputVisible = true;
      //   // this.$nextTick(_ => {
      //   //   this.$refs.saveTagInput.$refs.input.focus();
      //   // });
      // },
      changeFlag(tg) {
        // console.log(fg)
        if (tg.flag != '' || tg.flag != undefined || tg.flag != 'undefined') {
          this.judge.flag = tg.flag;
          // console.log(tg.params)
          localStorage.setItem("judge", JSON.stringify(this.judge));
          // localStorage.setItem("antiApplyFlag", JSON.stringify(tg.params));
        }
      },
      // handleInputConfirm() {
      //   let inputValue = this.inputValue;
      //   if (inputValue) {
      //     this.dynamicTags.push(inputValue);
      //   }
      //   this.inputVisible = false;
      //   this.inputValue = '';
      // },
      // OneLine() {
      //   console.log($('.tag_Ref').width())
      //   console.log($('.tag').width())
      //   // console.log( this.$refs.tag_ref.width)
      //   // console.log( this.$refs.tag_wrap.Width)
      //   if ($('.tag').width() > $('.tag_Ref').width()) {
      //     $('.btn').css('display', 'block');
      //     $('.tag_Ref').width($('.tag_Ref').width() - 80);
      //     // $('.tag_Ref').css('left', '40px');
      //   } else {
      //     this.aaa = false;
      //   }
      // },
      // move() {
      //   this.right = parseFloat(this.$refs.tag_ref.style.left);
      //   this.tagWidth = $('.tag_Ref').width();
      //   this.tagWrapWidth = $('.tag').width();
      // },

    },
  }

</script>
