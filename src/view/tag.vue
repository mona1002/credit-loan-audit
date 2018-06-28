<template>
  <div class="tag">
    <div ref='tag_wrap' class="tagWrap">
      <div ref='tag_ref' class="tag_Ref" :style="{left:activeLeft+'px'}">
        <nobr>
          <div :class="[isActive(tag)?'active':'','pai']" :key="ind" v-for="(tag,ind) in visitedViews" @click="changeFlag(tag)">
            <router-link :to='tag.StatefullPath' ref="tag_self">
              <p class="button_bottom">
                <span v-show="tag.name!='工作台'" @click.stop.prevent="handleClose(tag,$event)" class="el-icon-close close_tag"> </span> {{tag.name}}
              </p>
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
  </div>
</template>

<style>
  .tag {
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.11px;
    width: 100%;
    min-width: 1366px;
  }

  .tagWrap {
    width: 100%;
    height: 39px;
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
    color: rgb(0, 119, 255);

  }

  a:hover {
    text-decoration: none;
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
    border: 2px solid green;
    margin-top: 3px;
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
  }

  .rightBtn {
    right: 0;
  }

  .leftBtn {
    left: 0
  }

</style>

<script>
  export default {
    data() {
      return {
        nodeFlag: "",
        nodeMatchFlag: '',
        RoutePath: '',
        nodeName: '',
        routeParams: '',
        taskNodeName: '',
        taskNodeParams: '',
        processMoniParams: '',
        right: null,
        left: null,
        tagWidth: null,
        tagWrapWidth: null,
        antiNode: '',
        visible: false,
        views: null,
        styleLeft: 0,
        activeLeft: 30,
        // styleTop: 0,
        fggggg: '',
        judge: {
          flag: ''
        },
        MatchFlag: {
          MatchFlag: ''
        }
      };
    },
    computed: {
      visitedViews() {
        return this.$store.state.visitedViews
      }
    },
    watch: {
      $route(to, from) {
        this.addViewTags()
        this.moveToCurrentTag()
      },
    },
    mounted() {
      this.addViewTags()
    },
    methods: {
      addViewTags() {
        const route = this.$route;
        route.fullPath.indexOf('?') != -1 ? this.taskNodeName = route.fullPath.split('?')[1].split('&')[0].split('=')[1] :
          this.taskNodeName;
        this.nodeFlag = this.nodeMatchFlag = this.routeParams = '';
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
        } else if (route.path == '/FtaskInWaitting') { // 终审 审批
          if (this.taskNodeName == "creditApp_finalTrial_one") {
            this.nodeName = '终审一级审批';
          } else if (this.taskNodeName == "creditApp_finalTrial_two") {
            this.nodeName = '终审二级审批'
          } else if (this.taskNodeName == "creditApp_finalTrial_three") {
            this.nodeName = '信审经理审批';
          } else if (this.taskNodeName == "creditApp_finalTrial_four") {
            this.nodeName = '信审高级经理审批'
          } else if (this.taskNodeName == "creditApp_finalTrial_five") {
            this.nodeName = '信审总监审批'
          }
          this.nodeFlag = "02";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=02";
        } else if (route.path == '/FSplitScreen') { //终审详情
          this.nodeFlag = "02";
          this.nodeName = "终审详情";
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
        } else if (route.path == '/AntiAudit') { //反欺诈详情
          this.nodeName = "反欺诈详情";
        } else if (route.path == '/AntiFraud') { //反欺诈申请  
          this.nodeName = "反欺诈申请";
          this.routeParams = '?taskNodeName=antiFraudApp_apply';
        } else if (route.path == '/AntiApplyInf') { //反欺诈申请-查看
          this.nodeName = "反欺诈申请-查看";
        } else if (route.path == '/AntiApplyAdd') { //反欺诈申请-添加
          this.nodeName = "反欺诈申请-添加";
        } else if (route.path == '/AntiApplyEditf') { //反欺诈申请-编辑  
          this.nodeName = "反欺诈申请-编辑";
        } else if (route.path == '/AntiApplyEdit') { //反欺诈申请列表-编辑  
          this.nodeName = "反欺诈申请列表-编辑";
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
        } else if (route.path == '/historicalTask') { // 任务管理-信审历史任务
          this.nodeName = "信审历史任务";
        } else if (route.path == '/doTheTask') { // 任务管理- 信审已办任务
          this.nodeName = "信审已办任务";
        } else if (route.path == '/TaskManagementSplit') { // 任务管理- 信审历史任务-详情
          this.nodeName = "信审任务管理-详情";
        } else if (route.path == '/aDoneTask') { // 任务管理- 反欺诈已办任务
          this.nodeName = "反欺诈已办任务";
        } else if (route.path == '/aHistoryTask') { // 任务管理- 反欺诈历史任务
          this.nodeName = "反欺诈历史任务";
        } else if (route.path == '/HistoryTask') { // 任务管理- 复议历史任务
          this.nodeName = "复议历史任务";
        } else if (route.path == '/DoneTask') { // 任务管理- 复议已办任务
          this.nodeName = "复议已办任务";
        } else if (route.path == '/QTDoneTask') { // 任务管理- 复议已办任务
          this.nodeName = "质检已办任务";
        } else if (route.path == '/QTHistoryTask') { // 任务管理- 复议已办任务
          this.nodeName = "质检历史任务";
        } else if (route.path == '/AntiCaseNum') { // 案件编号维护
          this.nodeName = "案件编号维护";
        } else if (route.path == '/AntiRules') { // 反欺诈规则设定
          this.nodeName = "反欺诈规则设定";
        } else if (route.path == '/MatchingInf') { // 匹配信息-查看
          this.nodeName = "匹配信息-查看";
          this.nodeMatchFlag = 'internal'
        } else if (route.fullPath == '/processMoniTrilUndistributed') { //流程监控
          this.nodeName = "信审未分配流程";
        } else if (route.fullPath == '/processMoniTrilDistributed') {
          this.nodeName = "信审已分配流程";
        } else if (route.fullPath == '/processMoniTrilDone') {
          this.nodeName = "信审已完成流程";
        } else if (route.fullPath == '/processMoniAntiDistributed') {
          this.nodeName = "反欺诈已分配流程";
        } else if (route.fullPath == '/processMoniAntiUndistributed') {
          this.nodeName = "反欺诈未分配流程";
        } else if (route.fullPath == '/processMoniAntiDone') {
          this.nodeName = "反欺诈已完成流程";
        } else if (route.fullPath == '/processMoniReDone') {
          this.nodeName = "复议已完成流程";
        } else if (route.fullPath == '/processMoniReDistributed') {
          this.nodeName = "复议已分配流程";
        } else if (route.fullPath == '/processMoniReUndistributed') {
          this.nodeName = "复议未分配流程";
        } else if (route.fullPath == '/processMoniQTDone') {
          this.nodeName = "质检已完成流程";
        } else if (route.fullPath == '/processMoniQTDistributed') {
          this.nodeName = "质检已分配流程";
        } else if (route.fullPath == '/processMoniQTUndistributed') {
          this.nodeName = "质检未分配流程";
        } else if (route.path == '/PneCtrl') {
          this.nodeName = "大数据风控";
        } else if (route.path == '/SocialSe') {
          this.nodeName = "社保公积金";
        } else if (route.path == '/IntegratedQuery') {
          this.nodeName = "综合查询";
        } else if (route.path == '/MatchingInfQuery') {
          this.nodeName = "综合查询-详情";
          this.nodeMatchFlag = 'Query';
        } else if (route.path == '/commissioner') { //质检专员审批
          this.nodeName = "质检专员审批";
          this.nodeFlag = "07";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.path == '/manager') { //质检主管审批
          this.nodeName = "质检主管审批";
          this.nodeFlag = "08";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.path == '/SelfTaskList') { //初终审本人
          this.nodeName = "初终审本人审批";
          this.nodeFlag = "09";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.path == '/ManagerTaskList') { //初终审主管
          this.nodeName = "初终审主管审批";
          this.nodeFlag = "10";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.path == '/ReManagerTaskList') { //质检主管复议审批（首次）
          this.nodeName = "质检主管复议审批（首次）";
          this.nodeFlag = "11";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.fullPath == '/ACManagerTaskList?taskNodeName=checkApp_regional_manager&flag=12') { //区域经理审批
          this.nodeName = "区域经理审批";
          this.nodeFlag = "12";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.fullPath == '/ACManagerTaskList?taskNodeName=checkApp_compliance_manager&flag=13') { //合规经理审批
          this.nodeName = "合规经理审批";
          this.nodeFlag = "13";
          this.routeParams = '?taskNodeName=' + this.taskNodeName + "&flag=" + this.nodeFlag;
        } else if (route.path == '/ReApply') { // 质检功能
          this.nodeName = "复议申请";
        } else if (route.path == '/regularConfig') { // 质检功能 - 常规抽单配置功能
          this.nodeName = "质检常规抽单配置";
        } else if (route.path == '/reconsiderResult') { // 质检功能 - 复议结果查询
          this.nodeName = "质检复议结果查询";
          // }  else if (route.path == '/batchApportion') { // 质检功能
          //   this.nodeName = "质检任务批量转分派";
        } else if (route.path == '/specialConfig') { // 质检功能
          this.nodeName = "质检专纵向抽单配置";
        } else if (route.path == '/MatchingInfQT') {
          this.taskNodeParams = route.fullPath.split('?')[1]
          this.nodeName = "质检详情";
          this.nodeMatchFlag = 'QT';
          this.routeParams = '?' + this.taskNodeParams //---------------------------做判断-----
        } else if (route.path == '/timedTask') { // 定时任务
          this.nodeName = "自动通知查询";
        }
        this.RoutePath = route.path;
        this.$store.dispatch('addVisitedViews', {
          name: this.nodeName,
          path: this.RoutePath,
          flag: this.nodeFlag,
          matchflag: this.nodeMatchFlag,
          params: this.routeParams,
          StatefullPath: this.RoutePath + this.routeParams
        })
      },
      moveToCurrentTag() {
        const tags = this.$refs.tag_self
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to === this.$route.fullPath) {
              this.moveToTarget(tag.$el)
              break
            }
          }
        })
      },
      moveToTarget($target) {
        const $container = this.$refs.tag_wrap
        const $containerWidth = $container.offsetWidth
        const $tag_refWidth = this.$refs.tag_ref.offsetWidth
        const $tag_refLeft = Math.abs(this.$refs.tag_ref.offsetLeft)
        const $targetLeft = $target.offsetLeft
        const $targetWidth = $target.offsetWidth
        if ($targetLeft + $targetWidth < $tag_refLeft) {
          this.activeLeft = 30
        } else if ($targetLeft > $containerWidth) {
          this.activeLeft = $containerWidth - $targetLeft - $targetWidth - 30;
        }
      },
      isActive(route) {
        return route.path == '/MatchingInfQT' ? route.path == this.$route.path : route.StatefullPath == this.$route.fullPath;
      },
      handleClose(view, ev) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          if (this.isActive(view)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView.StatefullPath);
            } else {
              this.$router.push('/')
            }
          }
        })
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
        if (parseFloat(this.$refs.tag_ref.style.left) >= -20) {
          this.$refs.tag_ref.style.left = '30px';
        } else {
          this.$refs.tag_ref.style.left = parseFloat(this.$refs.tag_ref.style.left) + 50 + "px";
        }
      },
      changeFlag(tg) {
        localStorage.setItem("MatchFlag", JSON.stringify(this.MatchFlag));
        if (tg.flag != '' || tg.flag != undefined || tg.flag != 'undefined') {
          this.judge.flag = tg.flag;
          localStorage.setItem("judge", JSON.stringify(this.judge));
        }
        this.MatchFlag.MatchFlag = tg.matchflag;
        localStorage.setItem("MatchFlag", JSON.stringify(this.MatchFlag));
      },
    },
    // beforeRouteLeave(to, from, next) {
    //   console.log(to)
    //   // if (to.path == "/") {  
    //   //   to.meta.keepAlive = true;  
    //   // } else {  
    //   //   to.meta.keepAlive = false;  
    //   // }  
    //   next();
    // }
  }

</script>
