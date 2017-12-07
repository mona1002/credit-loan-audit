<template>
  <div class="AudioVisualLeft">
    <!-- <div class="CompareShow"> -->
    <!-- 左侧list隐藏时显示的div     在根元素下面，与left right 平级-->
    <div class="hidDiv" v-show="!showListDiv" ref="hidDiv_ref">
      <img class="showBtn" src="../../../../static/images/Shapearrowhide@1x.png" @click="showList" style="transform: rotate(180deg)">
    </div>
    <!-- ================================= -->
    <!-- 左侧 折叠面板 -->
    <div class="AudioVisual_List" ref="AudioVisual_List_ref" v-show="showListDiv">
      <!-- 折叠面板title -->
      <img class="hidBtn" src="../../../../static/images/Shapearrowhide@1x.png" @click="hid">
      <!-- 折叠面板-手风琴List -->
      <p class="list_title clearFix">
        <span>影像名称</span>
        <span>页数</span>
      </p>
      <el-collapse accordion>
        <el-collapse-item v-for="(item,ind) in ListParent" :key="ind" @click.native="getChildrenList(item.id,ind,item)">
          <template slot="title">
            <p>
              <!-- 一级节点 -->
              <span>{{item.arcName}}</span>
              <span>{{item.imageCount}}</span>
            </p>
          </template>
          <div class="list_title_div">
            <!--  二级 内容 节点 -->
            <p v-for="(item,ind) in ListDetails" :key="ind" @click.stop="getImg(ind)">
              <span>{{item.arcName}}</span>
              <span>{{item.imageCount}}</span>
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- 按钮 : 缩略图 对比  -->
      <el-button @click="SmallpicAlert" class="compareBtn">缩略图</el-button>
      <el-button type="primary" @click="compBtnShow" class="checkDetailBtn">对比</el-button>
    </div>
    <!-- 右侧 图片 -->
    <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove">
      <img src="../../../../static/images/0865C99F-2D8D-417E-A39D-1644063E5A84@1x.png" class="icon_pre " @click="pre">
      <img src="../../../../static/images/C20F2D59-5CCD-4C61-B12F-874344861071@1x.png" class="icon_next" @click="next">
      <div class="BtnIcons">
        <img src="../../../../static/images/efw.png" @click="smaller ">
        <img src="../../../../static/images/net.png" @click="larger">
        <img src="../../../../static/images/daf.png" @click="AclockWise ">
        <img src="../../../../static/images/dasf.png" @click="clockWise ">
      </div>
      <img ref="Big_pic_ref" v-for="(val,key) in imgPath" :key="key" :src="'http://10.1.26.6:8080'+val.imagePath" v-if="key==smallPicInd"
      />
    </div>
    <!-- 缩略图弹出层    不在右侧div里面，再 wrap 里面 -->
    <div class="Small_pic_div" v-show="SmallPicShow">
      <p class="Small_pic_title"> 缩略图-申请信息
        <img src="../../../../static/images/D625BA67-2F56-42C1-9E9D-A47AE03BA028@1x.png" class="small_pic_close" @click="SmallpicClose">
      </p>
      <div class="small_pic_content">
        <figure v-for="(val,index) in imgPath" :key="index" class="small_pic_figure">
          <img class="Small_pic" :src="'http://10.1.26.6:8080'+val.imagePath" @click="ChangeCss(index)" @mouseenter="smallPic($event,index)"
            ref="small_pic_ref" />
          <p> {{val.arcSubType}} </p>
        </figure>
      </div>
    </div>
    <!--=================================  查询弹出层 ================================= -->
    <div v-show="dataa" class="posi">
      <!-- 折叠 -->
      <p>内匹配客户查询列表
        <i class="el-icon-close" style="color:white;fontSize:18px;right:13px;top:16px" @click="closeAlertSearch"></i>
      </p>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="本人进件列表" name="1">
          <div>
            <!-- <i class="el-icon-edit" style="color:white;fontSize:18px"></i> -->
            <!-- <el-table :data="personal" height="250" border style="width: 100%" @change="handleChange">
            </el-table> -->
            <!--  @dblclick="getParentList(currentRow.matchApplyId)" -->
            <el-table :data="personal" height="250" border @dblclick.native="getParentList(currentRow.matchApplyId)" @current-change="handleCurrentChange"
              style="width: 100%">
              <el-table-column property="matchApplyCustName" label="客户名称">
              </el-table-column>
              <el-table-column property="matchApplySubNo" label="进件编号">
              </el-table-column>
              <el-table-column property="matchApplyDate" label="申请时间">
              </el-table-column>
              <el-table-column prop="matchApplyDate" label="业务状态">
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
        <!-- 折叠2 -->
        <el-collapse-item title="内匹客户进件" name="2">
          <div>
            <el-table :data="others" height="250" border @dblclick.native="getParentList(currentRow.matchApplyId)" @current-change="handleCurrentChange"
              style="width: 100%">
              <el-table-column property="matchApplyCustName" label="客户名称">
              </el-table-column>
              <el-table-column property="matchApplySubNo" label="进件编号">
              </el-table-column>
              <el-table-column property="matchApplyDate" label="申请时间">
              </el-table-column>
              <el-table-column prop="matchApplyDate" label="业务状态">
              </el-table-column>
            </el-table>
          </div>
          <!-- 确认  取消 按钮 -->
          <div style="margin-top: 20px">
            <!-- <el-button @click.native="getParentList(currentRow.matchApplyId)">确认</el-button> -->
          </div>
        </el-collapse-item>

      </el-collapse>
    </div>
    <!-- ================================= 结束================================= -->
    <!-- </div> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        // props:[smallPicDivClose],
        // picData: [],
        localInf: [], //初始化的时候，根据传进来的applyId获取初始化数据
        showListDiv: true, // 列表显示与否
        show: true, // 收缩按钮显示控制
        smallPicInd: 0, // 未知
        SmallPicShow: false,
        CompareAlert: true,
        ListParent: [], //父节点title列表
        ListDetails: [], //子节点列表
        applyId: '', //入参
        imgPath: [], //图片路径
        // ----------------------------------
        activeNames: ['1', '2'], //查询弹出框 默认展开选项
        dataa: false,
        // // AlertSearchProps:false
        personal: [], // 匹配查询-个人
        others: [], // 匹配查询-他人
        currentRow: null,
        custName: '', //客户名称-input（disable）
        custmatchApplySubNo: '', //客户进件编号-input（disable）
        // // currentRowId:"",
        // ----------------------------------------
      }
    },
    methods: {
      closeAlertSearch() {
        this.dataa = false;
      },
      handleCurrentChange(val) { // 选中当前行信息
        //   console.log(val)
        this.currentRow = val;
        // console.log(this.currentRow)
      },
      // 通过父组件触发的子组件事件--显示弹框，并请求数据展示
      personalNunPerson() {
        console.log("子组件a")
        this.dataa = true;
        // console.log(  this.localInf.applySubNo)
        // console.log(  this.localInf.certCode)
        // 个人进件        
        this.post("/internalMatch/getPersonalInternalMatchList", {
          // applySubNo: "201504130173041858",
          // certCode: "341422198409070094",
          applySubNo: this.localInf.applySubNo,
          certCode: this.localInf.certCode,
        }).then(res => {
          console.log("个人")
          this.personal = res.data;
          // console.log(this.personal)
        });
        // //他人进件（ 不包含个人）
        this.post("/internalMatch/getNonPersonalInternalMatch", {
          pageParam: {
            pageNum: "1", //当前页
            pageSize: '1000' //每页的显示数量
          },
          //  applySubNo: "201504130173041858",
          // certCode: "341422198409070094",
          applySubNo: this.localInf.applySubNo,
          certCode: this.localInf.certCode,
        }).then(res => {
          console.log("他人")
          this.others = res.data;
          // console.log(this.others)
        });
      },
      getParentList(id) { //  未写 -----未对
        console.log("table选中-获取父节点")
        console.log(id);
        this.post("/productArchive/getProductArchiveParentList", {
          // applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",//待删除-----------------------------------------
          applyId: id, //上面删除后 此处打开
          // a2b23bbf-46ef-4d94-9872-322843cebb7d matchApplyId
          // applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",//上面删除后 此处打开

        }).then(res => {
          console.log("双击选中")
          console.log(res);
          // console.log(res.data)
          this.ListParent = res.data;
          this.localInf.applyId = id; //将此处获得的matchApplyId赋值给 this.localInf.applyId,更改localInf的值，以便用更改后的值获取子节点
          // console.log( this.localInf.applyId)
          //  this.localInf.applyId="e0b51098-b24d-4211-8ae4-f08f657d7886";
          console.log(id)
          this.dataa = false;
          this.custName = this.currentRow.matchApplyCustName;
          this.custmatchApplySubNo = this.currentRow.matchApplySubNo;
          this.$emit('inputInf', this.custName, this.custmatchApplySubNo)
        });
      },
      getChildrenList(id, ind, item) {
        console.log("获取子节点");
        // console.log(id)//父节点获取的id
        // console.log( this.localInf.applyId)
        this.post("/productArchive/getProductArchiveChildList", {
          applyId: this.localInf.applyId,
          pid: id
        }).then(res => {
          console.log(res.data)
          this.ListDetails = res.data;
          //  this.others = res.data;   aut里面的写法
        });
      },
      getImg(ind) {
        console.log("获取图片");
        console.log(ind)
        this.imgPath = this.ListDetails[ind].applyArchiveInfos;
        // console.log(this.imgPath)
        // this.$nextTick(function () {
        // })
      },
      hid() { //左侧 li 列表
        console.log("hid");
        this.showListDiv = false;
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 31px)";
      },
      showList() { //左侧 li 列表
        this.showListDiv = true;
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 214px)";
      },
      SmallpicClose() { //缩略图弹框 关闭
        this.SmallPicShow = false;
      },
      SmallpicAlert() { //缩略图弹框 打开
        this.SmallPicShow = true;
      },
      pre() {
        console.log("上一页")
        this.smallPicInd--;
        this.defaultBigPicCss(); // 点击切换图片时，让显示的大图高度重新为100%，不旋转。 作用 ：避免点击放大缩小之后，切换图片会保留上一张图片缩放的大小比例
        if (this.smallPicInd < 0) {
          console.log("我下标小于0了")
          this.smallPicInd = this.$refs.small_pic_ref.length - 1;
        }
      },
      next() {
        console.log("下一页")
        this.smallPicInd++;
        this.defaultBigPicCss(); // 同上
        if (this.smallPicInd >= this.$refs.small_pic_ref.length) {
          this.smallPicInd = 0;
        }
      },
      larger() {
        console.log("放大")
        this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
          100 + "px";
      },
      smaller() {
        console.log("缩小")
        this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
          100 + "px";
      },
      clockWise() {
        console.log("顺时针");
        if (this.$refs.Big_pic_ref[0].style.transform == "") { // 输出结果为： rotate(900deg) 每次加 90度
          this.$refs.Big_pic_ref[0].style.transform += "rotate(90deg)";
        } else {
          this.$refs.Big_pic_ref[0].style.transform = this.$refs.Big_pic_ref[0].style.transform.slice(0, 7) + (
            parseFloat(this.$refs
              .Big_pic_ref[0]
              .style.transform.slice(7, -4)) + 90) + this.$refs.Big_pic_ref[0].style.transform.slice(-4);
        }
      },
      AclockWise() {
        console.log("逆时针")
        if (this.$refs.Big_pic_ref[0].style.transform == "") {
          this.$refs.Big_pic_ref[0].style.transform += "rotate(-90deg)";
        } else {
          this.$refs.Big_pic_ref[0].style.transform = this.$refs.Big_pic_ref[0].style.transform.slice(0, 7) + (
            parseFloat(this.$refs
              .Big_pic_ref[0]
              .style.transform.slice(7, -4)) - 90) + this.$refs.Big_pic_ref[0].style.transform.slice(-4);
        }
      },
      ChangeCss(ind) { // 图片单击 不选中图片，标注选中，增加css效果
        this.changeSmallPicCss(ind);
      },
      smallPic(ev, ind) {
        this.smallPicInd = ind; //  选中图片的下标赋值给data里面的值， 以便大图片根据这个下标值 显示对应下标的图片
        this.defaultBigPicCss();
        // this.changeSmallPicCss(ind);
        // this.SmallPicShow = false;
      },
      // 公共重复方法
      defaultBigPicCss() { // （重复代码）通用方法 ：  大图 --------------- 恢复默认高度、不旋转
        console.log(getComputedStyle(this.$refs.Big_pic_ref[0], false).height)
        console.log(getComputedStyle(this.$refs.Big_pic_ref[0], false).width)
        console.log(typeof (getComputedStyle(this.$refs.Big_pic_ref[0], false).width))
        // if (getComputedStyle(this.$refs.Big_pic_ref[0], false).width > getComputedStyle(this.$refs.Big_pic_ref[0], //判断宽度>高度  按宽度100%显示
        //     false).height) { // 点击切换图片时，让显示的大图宽高度重新为100%。 作用 ：避免点击放大缩小之后，切换图片会保留上一张图片缩放的大小比例
        //   this.$refs.Big_pic_ref[0].style.width = "100%";//calc( 100% - 202px)
        //   console.log("默认大图css样式if width >>>>>>>>>>> height" + this.$refs.Big_pic_ref[0].style.width)
        // } else {
        //   this.$refs.Big_pic_ref[0].style.height = "100%";
        //   console.log("默认大图css样式else  width <<<<<<  height")
        //   console.log(this.$refs.Big_pic_ref[0])
        //   console.log(this.$refs.Big_pic_ref[0].style.height)
        // }
        // this.$refs.Big_pic_ref[0].style.transform = "rotate(0deg)";
        //  this.$refs.big_pic[0].style.height = "100%"; // 点击切换图片时，让显示的大图高度重新为100%。 作用 ：避免点击放大缩小之后，切换图片会保留上一张图片缩放的大小比例
        // this.$refs.big_pic[0].style.transform = "rotate(0deg)"
      },
      changeSmallPicCss(ind) { // （重复代码）通用方法： 遍历所有小图片，恢复默认（初始时）设置的css样式--------- click时改变显示大图和选中小图的 高度 + 透明度
        for (var i = 0; i < this.$refs.small_pic_ref.length; i++) {
          // this.$refs.small_pic_ref[i].style.width="100px"; //设置所有图片默认高度
          this.$refs.small_pic_ref[i].style.opacity = 1; //设置所有图片默认透明度
        }
        if (ind || ind == 0) {
          this.$refs.small_pic_ref[ind].style.opacity = 0.8; //设置显示图片改变后的透明度 
        }
        // else{
        // this.$refs.small_pic_ref[this.smallPicInd].style.opacity = 0.8; //设置显示图片改变后的透明度   
        // }
      },
      Imgscroll() { //滚轮放大缩小图片
        // console.log("我是mouseout滚轮事件")
        this.$refs.AudioVisual_Img_ref.onmousewheel = (event) => { // 非 Firefox 浏览器
          event = event || window.event;
          this.$refs.AudioVisual_Img_ref.scrollTop = 0; //  让图片一直top为0， 可以显示 上面的按钮
          // event.Handled =true;
          console.log(event)
          console.log(this.$refs.AudioVisual_Img_ref.scrollTop)
          if (event.wheelDelta < 0) { // 放大
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
              100 + "px";
          } else { //  缩小
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
              100 + "px";
          }
          console.log(event.wheelDelta)
        };
        this.$refs.AudioVisual_Img_ref.addEventListener("DOMMouseScroll", (event) => { // 兼容 Firefox 浏览器
          console.dir(event);
          console.log(event.detail)
          this.$refs.AudioVisual_Img_ref.scrollTop = 0; //  让图片一直top为0， 可以显示 上面的按钮          
          if (event.detail > 0) { // 放大
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
              100 + "px";
          } else { //  缩小
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
              100 + "px";
          }
        });
      },
      ImgScrollRemove() {
        // console.log("我是mouseout移除滚轮事件")
        this.$refs.AudioVisual_Img_ref.onmousewheel = "";
        this.$refs.AudioVisual_Img_ref.removeEventListener('DOMMouseScroll', (event) => {
          event.preventDefault();
        }, false);
      },
      compBtnShow() {
        console.log("对比按钮出发")
        this.$emit('CompareShow')
      }
    },
    mounted() {
      // localStorage.setItem("userInf", JSON.stringify(userInf));
      console.log(" 影音资料左")
      // console.log(JSON.parse(localStorage.getItem("applicationInformationDetail") ));
      // this.tastwaitingPass = JSON.parse(localStorage.getItem("taskInWaitting"));
      this.localInf = JSON.parse(localStorage.getItem("taskInWaitting"))//获取列表详情的id
      // this.localInf = JSON.parse(localStorage.getItem("applicationInformationDetail"))   
      console.log(this.localInf)
      // 父菜单
      this.post("/productArchive/getProductArchiveParentList", {
        applyId: this.localInf.applyId,
        // applyId:"62fecf51-4839-4639-afe0-9b7cde722a5e",
        //  applyId:"e0b51098-b24d-4211-8ae4-f08f657d7886"
      }).then(res => {
        // console.log(res.data)
        // console.log("ListParent")
        this.ListParent = res.data; //父节点数组 [{},{},{},{}]----获取父节点名称
        // console.log( this.ListParent )
      });
    }
  }

</script>
<style scoped>
  /* css */

  .AudioVisualLeft {
    height: 100%;
    /* position: relative; */
    /* background: red; */
  }
  /* public */

  .small_pic_close {
    position: absolute;
    right: 18px;
    top: 13px;
  }
  /* 图片功能按钮 */

  .showBtn {
    position: absolute;
    top: 7px;
    right: 2px;
  }

  .hidBtn {
    position: absolute;
    top: 7px;
    right: 5px;
  }

  .hidDiv {
    float: left;
    height: 100%;
    overflow: auto;

    width: 20px;
    background: #eef0f9;
    margin-right: 11px;
    border: 1px solid #bfcbd9;
    border-radius: 0 6px 6px 0;
    position: relative;
    z-index: 2;
  }
  /* 对比-按钮 */

  .compareBtn {
    position: absolute;
    bottom: 18px;
    right: 100px;
    color: #0077ff;
    border: 1px solid #0077ff;
    background: #eef0f9;
  }
  /* 缩略图-按钮 */

  .checkDetailBtn {
    position: absolute;
    bottom: 18px;
    right: 10px;
  }
  /*  放大、缩小 按钮 wrap */

  .BtnIcons {
    position: absolute;
    z-index: 2;
    left: calc( 50% - 63px);
    bottom: 57px;
    width: 193px;
    height: 52px;
    /* background:#475669; */
    /* background:#475669; */
    background: rgba(71, 86, 105, 0.26);
    box-shadow: 0 10px 20px 0 #47566942;
    border-radius: 6px;
    padding: 12px 0 11px 19px;
  }

  .BtnIcons img {
    margin-right: 10px
  }

  .position_and_size {
    position: absolute;
    font-size: 30px;
    z-index: 10;
  }

  .icon_pre {
    position: absolute;
    left: 20px;
    top: 50%;
    z-index: 2;
  }

  .icon_next {
    position: absolute;
    right: 24px;
    z-index: 2;
    top: 50%;
  }
  /* .icon_larger {
    right: 20px;
    top: 200px;
  }

  .icon_smaller {
    left: 20px;
    top: 200px;
  }

  .icon_clockWise {
    left: 20px;
    top: 270px;
  }

  .icon_AclockWise {
    right: 20px;
    top: 270px;
  } */
  /* private */
  /* .CompareShow {
    height: 100%;
    position: relative;
    background: red;
    overflow: auto;
  } */
  /*  css */

  .AudioVisualLeft .AudioVisual_List,
  .AudioVisualLeft .AudioVisual_Img {
    float: left;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  /*  css */

  .AudioVisualLeft .AudioVisual_Img {
    width: calc( 100% - 214px);
    /* background: yellowgreen; */
  }
  /*  css */

  .AudioVisualLeft .AudioVisual_List {
    width: 203px;
    background: #eef0f9;
    border: 1px solid #bfcbd9;
    border-radius: 6px 6px 0 0;
    margin-right: 11px;
  }
  /* ----------------------------------- */
  /* 左侧折叠面板 */
  /* 折叠面板上面的四个 th 表头 */

  .AudioVisualLeft .list_title {
    line-height: 27px;
    font-weight: bold;
  }

  .AudioVisualLeft .list_title span,
  .AudioVisualLeft .list_title_div p span {
    height: 35px;
    line-height: 35px;
    display: block;
    float: left;
    border: 1px solid #e6ebf5;
    /* border: 1px solid black; */
    border-bottom: none;
    text-align: center;
  }

  .AudioVisualLeft .list_title span {
    font-size: 14px;
  }

  .AudioVisualLeft .list_title_div p span {
    font-size: 13px;
  }

  .AudioVisualLeft .list_title span:nth-of-type(1),
  .AudioVisualLeft .list_title_div p span:nth-of-type(1) {
    width: 125px;
    /* 省略号 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-left: none;
  }

  .AudioVisualLeft .list_title span:nth-of-type(2),
  .AudioVisualLeft .list_title_div p span:nth-of-type(2) {
    width: 70px;
    border-right: none;
    border-left: none;
  }
  /* 
.AudioVisualLeft .list_title span:nth-of-type(3),
.AudioVisualLeft .list_title_div p span:nth-of-type(3) {
    width: 60px;
  } */
  /* .AudioVisualLeft .list_title span:nth-of-type(4),
.AudioVisualLeft .list_title_div p span:nth-of-type(4) {
    width: 144px;
    border-left: none;
  } */
  /* ------------------------------- */
  /* 缩略图最外侧div */

  .AudioVisualLeft .Small_pic_div {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    overflow: auto;
    border: 1px solid #bfcbd9;
    background: #ffffff;
    /* background: #000; */
    border-radius: 4px;
  }
  /* 缩略图 p 标签  title */

  .AudioVisualLeft .Small_pic_title {
    font-size: 16px;
    text-align: center;
    background: rgba(0, 119, 255, 0.75);
    /* opacity: 0.75; */
    /* background: #0077ff; */
    height: 48px;
    line-height: 48px;
    color: #f8f9fd;
    /* 不换行 */
    /* white-space:nowrap; */
    overflow: hidden;
    position: relative;
  }
  /* 缩略图 content */

  .AudioVisualLeft .small_pic_content {
    position: relative;
    height: calc( 100% - 48px);
    overflow: auto;
    padding-top: 30px;
  }
  /* 缩略图片-figure-wrap */

  .AudioVisualLeft .small_pic_figure {
    float: left;
    width: 30%;
    height: 200px;
    margin: 15px 0 0 2%;
    /* margin: 0 0 0 23px; */
  }
  /*  缩略图 figure 内 图片名字 p 标签 */

  .AudioVisualLeft .small_pic_figure p {
    height: 22px;
    line-height: 22px;
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    color: #475669;
    letter-spacing: 0.11px;
    /* 超出 省略号显示 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* 缩略图 各个 img 图片 */

  .AudioVisualLeft .Small_pic {
    height: calc( 100% - 60px);
    /* UI设计部分 */
    border-radius: 5px;
    border: 1px solid #bfcbd9;
    box-shadow: 2px 4px 10px 0 #bfcbd9, inset 0 1px 3px 0 #bfcbd9;
  }
  /* --------------------------- */

  .posi {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
     z-index: 28;
  }

  .posi p {
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
        background: rgba(0, 119, 255, 0.75);
       
        color: #f8f9fd;
    text-align: center
        
  }

</style>
