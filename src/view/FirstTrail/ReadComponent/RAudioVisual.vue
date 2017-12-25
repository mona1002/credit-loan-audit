<template>
  <div class="AudioVisual">
    <!-- <div class="CompareShow"> -->
    <!-- 左侧list隐藏时显示的div     在根元素下面，与left right 平级-->
    <div class="hidDiv" v-show="!showListDiv" ref="hidDiv_ref">
      <img class="showBtn" src="../../../../static/images/Shape Copy.png" @click="showList" style="transform: rotate(180deg)">
    </div>
    <!-- ================================= -->
    <!-- 左侧 折叠面板 -->
    <div class="AudioVisual_List" ref="AudioVisual_List_ref" v-show="showListDiv">
      <!-- 折叠面板title -->
      <img class="hidBtn" src="../../../../static/images/Shape Copy.png" @click="hid">
      <!-- 折叠面板-手风琴List -->
      <p class="list_title clearFix">
        <span>影像名称
          <img src="../../../../static/images/BAA30772-8C58-4169-9CF3-C1ACA1DB9C62@1x.png" style="position:absolute;top:12px;right:17px">
          <img src="../../../../static/images/693BC9A6-4912-42DA-A313-32E8E75CD126@1x.png" style="position:absolute;top:19px;right:17px">
        </span>
        <span>编号</span>
        <span>页数</span>
        <span>上传日期</span>
      </p>
      <el-collapse accordion>
        <el-collapse-item v-for="(item,ind) in ListParent" :key="ind" @click.native="getChildrenList(item.id,ind,item)">
          <template slot="title">
            <p>
              <!-- 一级节点 -->
              <span style="position:relative;">{{item.arcName}}
                <img src="../../../../static/images/918FE1E0-6EEB-4642-A5E6-253AC973FF41@1x.png" style="position:absolute;top:12px;left:26px"
                  v-show="opendImg[ind]">
                <img src="../../../../static/images/5530D698-2823-417F-B8BC-8DC9037BC848@1x.png" style="position:absolute;top:14px;left:26px"
                  v-show="closedImg[ind]">
              </span>
              <span>{{item.arcNum}}</span>
              <span>{{item.imageCount}}</span>
              <span>{{item.uploadDate}}</span>
            </p>
          </template>
          <div class="list_title_div">
            <!--  二级 内容 节点 -->
            <p v-for="(item,ind) in ListDetails" :key="ind" @click.stop="getImg(ind)">
              <el-tooltip class="item" effect="dark" :content="item.arcName" placement="right-end">
                <span v-bind:title="item.arcName">{{item.arcName}}</span>
              </el-tooltip>
              <span>{{item.arcNum}}</span>
              <span>{{item.imageCount}}</span>
              <span v-bind:title="item.uploadDate">{{item.uploadDate}}</span>
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
      <div class="showHidIcons" ref="showHidIcons">
        <img src="../../../../static/images/left.png" class="icon_pre " @click="pre">
        <img src="../../../../static/images/pc1.png" class="icon_next" @click="next">
        <div class="BtnIcons">
          <img src="../../../../static/images/efw.png" @click="smaller ">
          <img src="../../../../static/images/net.png" @click="larger">
          <img src="../../../../static/images/daf.png" @click="AclockWise ">
          <img src="../../../../static/images/dasf.png" @click="clockWise ">
        </div>
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
          <img class="Small_pic" :src="'http://10.1.26.6:8080'+val.imagePath" @click="ChangeCss(index)" @dblclick="smallPic($event,index)"
            ref="small_pic_ref" />
          <p>{{val.arcSubType}} </p>
        </figure>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // picData: [],
        opendImg: [true, true, true, true], //一级节点图标flag
        closedImg: [false, false, false, false],
        showListDiv: true,
        show: true,
        smallPicInd: 0,
        SmallPicShow: false,
        CompareAlert: true,
        ListParent: [],
        ListDetails: [],
        applyId: '', //入参
        imgPath: [],
        localInf: [] //localstorage 接收的所有参数
      }
    },
    methods: {
      opend(vv) {
        console.log(vv)
      },
      getChildrenList(id, ind, item) {
        // 一级节点
        if (this.opendImg[ind] == false) {
          this.opendImg[ind] = true;
          this.closedImg[ind] = false;
        } else {
          for (var i = 0; i < this.opendImg.length; i++) {
            this.opendImg[i] = true;
            this.closedImg[i] = false;
          }
          this.opendImg[ind] = false;
          this.closedImg[ind] = true;
        }
        this.closeImg = ind;
        this.openImg = ind
        // 二级（子）节点
        console.log("获取子节点");
        this.post("/productArchive/getProductArchiveChildList", {
          applyId: this.localInf.applyId,
          pid: id
        }).then(res => {
          this.ListDetails = res.data;
        });
      },
      getImg(ind) {
        this.imgPath = this.ListDetails[ind].applyArchiveInfos;
      },
      hid() {
        this.showListDiv = false;
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 31px)";
      },
      showList() {
        this.showListDiv = true;
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 412px)";
      },
      SmallpicClose() {
        this.SmallPicShow = false;
      },
      SmallpicAlert() {
        this.SmallPicShow = true;
      },
      pre() {
        this.smallPicInd--;
        this.defaultBigPicCss();
        if (this.smallPicInd < 0) {
          this.smallPicInd = this.$refs.small_pic_ref.length - 1;
        }
      },
      next() {
        this.smallPicInd++;
        this.defaultBigPicCss();
        if (this.smallPicInd >= this.$refs.small_pic_ref.length) {
          this.smallPicInd = 0;
        }
      },
      larger() {
        this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
          100 + "px";
      },
      smaller() {
        this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
          100 + "px";
      },
      clockWise() {
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
        if (this.$refs.Big_pic_ref[0].style.transform == "") {
          this.$refs.Big_pic_ref[0].style.transform += "rotate(-90deg)";
        } else {
          this.$refs.Big_pic_ref[0].style.transform = this.$refs.Big_pic_ref[0].style.transform.slice(0, 7) + (
            parseFloat(this.$refs
              .Big_pic_ref[0]
              .style.transform.slice(7, -4)) - 90) + this.$refs.Big_pic_ref[0].style.transform.slice(-4);
        }
      },
      ChangeCss(ind) {
        this.changeSmallPicCss(ind);
      },
      smallPic(ev, ind) {
        this.smallPicInd = ind;
        this.defaultBigPicCss();
        this.SmallPicShow = false;
      },
      // 公共重复方法
      defaultBigPicCss() { // （重复代码）通用方法 ：  大图 --------------- 恢复默认高度、不旋转
        // console.log(getComputedStyle(this.$refs.Big_pic_ref[0], false).height)
        // console.log(getComputedStyle(this.$refs.Big_pic_ref[0], false).width)
        // console.log(typeof (getComputedStyle(this.$refs.Big_pic_ref[0], false).width))
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
          this.$refs.small_pic_ref[i].style.opacity = 1;
        }
        if (ind || ind == 0) {
          this.$refs.small_pic_ref[ind].style.opacity = 0.8;
        }
      },
      Imgscroll() {
        this.$refs.showHidIcons.style.display = "block";
        this.$refs.AudioVisual_Img_ref.onmousewheel = (event) => {
          event = event || window.event;
          this.$refs.AudioVisual_Img_ref.scrollTop = 0;
          if (event.wheelDelta < 0) {
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
              100 + "px";
          } else {
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
              100 + "px";
          }
        };
        this.$refs.AudioVisual_Img_ref.addEventListener("DOMMouseScroll", (event) => {
          this.$refs.AudioVisual_Img_ref.scrollTop = 0;
          if (event.detail > 0) {
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
              100 + "px";
          } else {
            this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
              100 + "px";
          }
        });
      },
      ImgScrollRemove() {
        this.$refs.showHidIcons.style.display = "none";
        this.$refs.AudioVisual_Img_ref.onmousewheel = "";
        this.$refs.AudioVisual_Img_ref.removeEventListener('DOMMouseScroll', (event) => {
          event.preventDefault();
        }, false);
      },
      compBtnShow() {
        this.$emit('CompareShow')
      }
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.localInf = JSON.parse(localStorage.getItem("internalId")) //初审-匹配查看
      } else if (this.judgeFlag.flag == '02') {
        this.localInf = JSON.parse(localStorage.getItem("FinalinternalId")) //终审-匹配查看
      }else if (this.judgeFlag.flag == '03') {
        this.localInf = JSON.parse(localStorage.getItem("AntiinternalId")) //反欺诈专员-匹配查看
      }else if (this.judgeFlag.flag == '04') {
        this.localInf = JSON.parse(localStorage.getItem("AntiManagerinternalId")) //反欺诈主管-匹配查看
      }
      this.post("/productArchive/getProductArchiveParentList", {
        applyId: this.localInf.matchApplyId,
        // applyId: this.localInf.applyId,
        // applyId:"62fecf51-4839-4639-afe0-9b7cde722a5e",
        //  applyId:"e0b51098-b24d-4211-8ae4-f08f657d7886"
      }).then(res => {
        this.ListParent = res.data;
      });
    }
  }

</script>
<style scoped>
  /* css */

  .AudioVisual {
    height: 100%;
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
    top: 10px;
    right: 10px;
    z-index: 2;
  }

  .hidDiv {
    float: left;
    height: 100%;
    overflow: auto;
    width: 20px;
    background: #eef0f9;
    margin-right: 11px;
    border: 1px solid #bfcbd9;
    /* border-radius: 0 6px 6px 0; */
    position: relative;
    z-index: 2;
  }
  /* 对比-按钮 */

  .compareBtn {
    position: absolute;
    bottom: 18px;
    right: 98px;
    color: #0077ff;
    border: 1px solid #0077ff;
    background: #eef0f9;
  }
  /* 缩略图-按钮 */

  .checkDetailBtn {
    position: absolute;
    bottom: 18px;
    right: 17px;
  }

  .showHidIcons {
    display: none;
  }
  /*  放大、缩小 按钮 wrap */

  .BtnIcons {
    position: absolute;
    z-index: 2;
    left: calc( 50% - 97px);
    bottom: 57px;
    width: 193px;
    height: 52px;
    /* background:#475669; */
    /* background:#475669; */
    background: rgba(71, 86, 105, 0.6);
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

  .AudioVisual .AudioVisual_List,
  .AudioVisual .AudioVisual_Img {
    float: left;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  /*  css */

  .AudioVisual .AudioVisual_Img {
    width: calc( 100% - 412px);
    /* background: yellowgreen; */
  }
  /*  css */

  .AudioVisual .AudioVisual_List {
    width: 401px;
    background: #eef0f9;
    border: 1px solid #bfcbd9;
    /* border-radius: 6px 6px 0 0; */
    margin-right: 11px;
  }
  /* ----------------------------------- */
  /* 左侧折叠面板 */
  /* 折叠面板上面的四个 th 表头 */

  .AudioVisual .list_title {
    line-height: 27px;
    font-weight: bold;
  }

  .AudioVisual .list_title span,
  .AudioVisual .list_title_div p span {
    height: 35px;
    line-height: 35px;
    display: block;
    float: left;
    border: 1px solid #e6ebf5;
    border-bottom: none;
    /* border: 1px solid black; */
    text-align: center;
    position: relative;
  }

  .AudioVisual .list_title span {
    font-size: 14px;
  }

  .AudioVisual .list_title_div p span {
    font-size: 13px;
    cursor: pointer;
  }

  .AudioVisual .list_title span:nth-of-type(1),
  .AudioVisual .list_title_div p span:nth-of-type(1) {
    width: 135px;
    /* 省略号 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .AudioVisual .list_title span:nth-of-type(2),
  .AudioVisual .list_title_div p span:nth-of-type(2) {
    width: 60px;
    border-right: none;
    border-left: none;
  }

  .AudioVisual .list_title span:nth-of-type(3),
  .AudioVisual .list_title_div p span:nth-of-type(3) {
    width: 60px;
  }

  .AudioVisual .list_title span:nth-of-type(4),
  .AudioVisual .list_title_div p span:nth-of-type(4) {
    width: 144px;
    border-left: none;
  }
  /* ------------------------------- */
  /* 缩略图最外侧div */

  .AudioVisual .Small_pic_div {
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

  .AudioVisual .Small_pic_title {
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

  .AudioVisual .small_pic_content {
    position: relative;
    height: calc( 100% - 48px);
    overflow: auto;
    padding-top: 30px;
  }
  /* 缩略图片-figure-wrap */

  .AudioVisual .small_pic_figure {
    float: left;
    width: 187px;
    height: 200px;
    /* margin: 30px 0 30px 23px; */
    margin: 0 0 0 18px;

    /* margin-left:40px;  */
  }
  /*  缩略图 figure 内 图片名字 p 标签 */

  .AudioVisual .small_pic_figure p {
    height: 22px;
    width: 186px;
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

  .AudioVisual .Small_pic {
    height: calc( 100% - 60px);
    /* UI设计部分 */
    border-radius: 5px;
    border: 2px solid #bfcbd9;
    box-shadow: 2px 4px 10px 0 #bfcbd9, inset 0 1px 3px 0 #bfcbd9;
  }

</style>
