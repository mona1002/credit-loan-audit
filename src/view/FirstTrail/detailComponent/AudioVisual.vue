<template>
  <div class="AudioVisual" id='AU'>
    <!-- 左侧list隐藏时显示的div      在根元素下面，与left right 平级-->
    <div class="hidDiv" v-show="!showListDiv" ref="hidDiv_ref">
      <img class="showBtn" src="../../../../static/images/Shape Copy.png" @click="showList" style="transform: rotate(180deg)">
    </div>
    <div class="AudioVisual_List" ref="AudioVisual_List_ref" v-show="showListDiv">
      <img class="hidBtn" src="../../../../static/images/Shape Copy.png" @click="hid">
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
        <el-collapse-item v-for="(item,ind) in ListParent" :key="ind">
          <template slot="title">
            <p>
              <!-- 一级节点 -->
              <span>{{item.arcName}} </span>
              <span>{{item.arcNum}}</span>
              <span>{{item.imageCount}}</span>
              <span>{{item.uploadDate }}</span>
            </p>
          </template>
          <div class="list_title_div">
            <!--  二级 内容 节点  -->
            <p v-for="(items,inds) in item.child" :key="inds" @click.stop="getImg(inds,items)">
              <el-tooltip class="item" effect="dark" :content="items.arcName" placement="right-end">
                <span style="width:151px;paddingLeft:20px;">{{items.arcName}}</span>
              </el-tooltip>
              <span>{{items.arcNum}}</span>
              <span>{{items.imageCount}}</span>
              <span v-bind:title="items.uploadDate">{{items.uploadDate}}</span>
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="AudioVisualLeft_btn_wrap">
        <el-button @click="SmallpicAlert" class="AudioVisualLeft_compareBtn">缩略图</el-button>
      </div>
    </div>
    <!-- 右侧 图片 -->
    <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove">
      <div ref="img_wrap" style="position:relative; left:0; top:0;height:99%;" id='FirstAud'>
        <div v-for="(val,key) in picArrays" :key="key" v-if="key==smallPicInd" @mouseenter='PerBtn'>
          <!-- 图片 -->
          <img ref="Big_pic_ref" :src="val.imagePath" v-if="val.imagePath.slice(-3)!='pdf'" @dblclick='next' />
          <!-- pdf -->
          <div class="big_pic_pdf" v-else @dblclick='next'>
            <iframe id='previewPdf' :src="val.imagePath" height="100%" width="100%"> </iframe>
          </div>
        </div>
      </div>
    </div>
    <img src="../../../../static/images/left.png" class="icon_pre " ref="preBtn" @click="pre" v-show="perfBtn"
      @mouseenter='PerBtn'>
    <img src="../../../../static/images/pc1.png" class="icon_next" @click="next" v-show="perfBtn" @mouseenter='PerBtn'>
    <div class="BtnIcons" v-show="perfBtn" @mouseenter='PerBtn' ref="PbtnIcons">
      <img src="../../../../static/images/efw.png" @click="smaller ">
      <img src="../../../../static/images/net.png" @click="larger">
      <img src="../../../../static/images/daf.png" @click="AclockWise ">
      <img src="../../../../static/images/dasf.png" @click="clockWise ">
      <span class="audioInd"> 第 {{showPage }} 页</span>
    </div>
    <!-- 缩略图弹出层  -->
    <div class="Small_pic_div" v-show="SmallPicShow">
      <p class="Small_pic_title"> 缩略图
        <img src="../../../../static/images/D625BA67-2F56-42C1-9E9D-A47AE03BA028@1x.png" class="small_pic_close" @click="SmallpicClose">
      </p>
      <!-- pngAyyrs  pdfArrys    picArrays-->
      <div class="small_pic_content">
        <!--  v-show="SmallmyPic" -->
        <figure v-for="(val,index) in picArrays" :key="index" class="small_pic_figure">
          <div class="Small_pic">
            <img :src="val.imagePath" @click="ChangeCss(index)" @dblclick="smallPic($event,index)" ref="small_pic_ref"
              v-if="val.imagePath.slice(-3)!='pdf'" />
            <iframe id='previewPdf' :src="val.imagePath" height="100%" width="100%" v-else ref="small_pic_ref">
            </iframe>
          </div>
          <p>{{val.arcSubType}}</p>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        litimg: [],
        litimgIndex: -1,
        litimgInd: -1,
        perfBtn: false, //功能按钮
        opendImg: [],
        closedImg: [],
        showListDiv: true,
        show: true,
        showPage: 0,
        smallPicInd: 0,
        SmallPicShow: false, //缩略图是否显示
        CompareAlert: true,
        ListParent: [],
        // imgPath: [],
        picArrays: [],
        // pdfArrys: [],
        // pngAyyrs: [],
        // myPng: false,
        // myPdf: false,
        // style: '',
        // SmallmyPic: false,
        // SmallmyPdf: false,
        // pdfTitle: '',

      }
    },
    methods: {
      mountedInf() {
        // 父菜单
        this.get('/productArchive/productArchives/' + this.applyId)
          .then(res => {
            if (res.statusCode == 200) {
              this.ListParent = res.data;
              this.$parent.$data.loading = false;
            } else {
              this.$parent.$data.loading = false;
              // this.$message.error(res.msg);
            }
          });
      },
      PerBtn() {
        this.perfBtn = true;
      },
      getImg(ind, item) {
        this.picArrays = item.imagePaths;
        this.smallPicInd = 0;
        this.showPage = 1;
        this.$refs.img_wrap.style.left = 0;
        this.$refs.img_wrap.style.top = 0;
        this.defaultBigPicCss();
      },
      hid() {
        this.showListDiv = false;
        this.$refs.preBtn.style.left = 37 + 'px';
        this.$refs.PbtnIcons.style.left = 'calc( 50% - 135px)';
        this.$refs.AudioVisual_Img_ref.style.left = 0;
        this.defaultBigPicCss();
      },
      showList() {
        this.showListDiv = true;
        this.$refs.preBtn.style.left = 417 + 'px';
        this.$refs.PbtnIcons.style.left = 'calc( 50% + 65px)';
        this.$refs.AudioVisual_Img_ref.style.left = 412 + "px";
        this.defaultBigPicCss();
      },
      SmallpicClose() {
        this.SmallPicShow = false;
      },
      SmallpicAlert() {
        this.SmallPicShow = true;
      },
      pre() {
        if (this.picArrays.length != 0) {
          this.smallPicInd--;
          this.showPage--;
          console.log(this.$refs.small_pic_ref)
          if (this.$refs.small_pic_ref) {
            if (this.smallPicInd < 0) {
              this.smallPicInd = this.$refs.small_pic_ref.length - 1;
              this.showPage = this.$refs.small_pic_ref.length;
            }
          }
          this.defaultBigPicCss();
        }
      },
      next() {
        if (this.picArrays.length != 0) {
          this.smallPicInd++;
          this.showPage++;
          if (this.$refs.small_pic_ref) {
            if (this.smallPicInd >= this.$refs.small_pic_ref.length) {
              this.smallPicInd = 0;
              this.showPage = 1;
            }
          }
          this.defaultBigPicCss();
        }
      },
      larger() {
        if (this.$refs.Big_pic_ref && this.$refs.Big_pic_ref.length > 0) {
          this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
            100 + "px";
          this.$refs.Big_pic_ref[0].style.width = "auto";
        }
      },
      smaller() {
        if (this.$refs.Big_pic_ref && this.$refs.Big_pic_ref.length > 0) {
          this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
            100 + "px";
          this.$refs.Big_pic_ref[0].style.width = "auto";
        }
      },
      clockWise() {
        if (this.$refs.Big_pic_ref && this.$refs.Big_pic_ref.length > 0) {
          if (this.$refs.Big_pic_ref[0].style.transform == "") {
            this.$refs.Big_pic_ref[0].style.transform += "rotate(90deg)";
          } else {
            this.$refs.Big_pic_ref[0].style.transform = this.$refs.Big_pic_ref[0].style.transform.slice(0, 7) + (
              parseFloat(this.$refs
                .Big_pic_ref[0]
                .style.transform.slice(7, -4)) + 90) + this.$refs.Big_pic_ref[0].style.transform.slice(-4);
          }
        }
      },
      AclockWise() {
        if (this.$refs.Big_pic_ref && this.$refs.Big_pic_ref.length > 0) {
          if (this.$refs.Big_pic_ref[0].style.transform == "") {
            this.$refs.Big_pic_ref[0].style.transform += "rotate(-90deg)";
          } else {
            this.$refs.Big_pic_ref[0].style.transform = this.$refs.Big_pic_ref[0].style.transform.slice(0, 7) + (
              parseFloat(this.$refs
                .Big_pic_ref[0]
                .style.transform.slice(7, -4)) - 90) + this.$refs.Big_pic_ref[0].style.transform.slice(-4);
          }
        }
      },
      ChangeCss(ind) {
        this.changeSmallPicCss(ind);
      },
      smallPic(ev, ind) {
        this.smallPicInd = ind;
        this.showPage = ind + 1;
        this.SmallPicShow = false;
        this.defaultBigPicCss();
      },
      defaultBigPicCss() {
        this.$nextTick(() => {
          // if (this.myPdf) {
          //   this.$refs.img_wrap.style.left = 0;
          //   this.$refs.img_wrap.style.top = 0;
          //   return
          // }
          if (this.$refs.Big_pic_ref && this.$refs.Big_pic_ref.length > 0) {
            this.$refs.Big_pic_ref[0].style.transform = "rotate(0deg)";
            this.$refs.img_wrap.style.left = 0;
            this.$refs.img_wrap.style.top = 0;
            var outsideH = this.$refs.AudioVisual_Img_ref.offsetHeight;
            var widthReduce = this.$refs.AudioVisual_Img_ref.offsetWidth - this.$refs.Big_pic_ref[0].offsetWidth;
            var heightReduce = this.$refs.AudioVisual_Img_ref.offsetHeight - this.$refs.Big_pic_ref[0].offsetHeight;
            if (widthReduce < heightReduce) {
              this.$refs.Big_pic_ref[0].style.width = '100%'; //calc( 100% - 202px)
              this.$refs.Big_pic_ref[0].style.height = 'auto'; //calc( 100% - 202px)
            } else {
              this.$refs.Big_pic_ref[0].style.width = 'auto';
              this.$refs.Big_pic_ref[0].style.height = (outsideH - 10) + "px";
            }
          }
        })
      },
      changeSmallPicCss(ind) {
        for (var i = 0; i < this.$refs.small_pic_ref.length; i++) {
          this.$refs.small_pic_ref[i].style.opacity = 1;
        }
        if (ind || ind == 0) {
          this.$refs.small_pic_ref[ind].style.opacity = 0.8;
        }
      },
      odivMove(id) {
        var disX = 0;
        var disY = 0;
        var oDiv = document.getElementById(id);
        oDiv.onmousedown = function (ev) {
          var oEvent = ev || event;
          disX = oEvent.clientX - oDiv.offsetLeft;
          disY = oEvent.clientY - oDiv.offsetTop;
          document.onmousemove = function (ev) {
            var oEvent = ev || event;
            oDiv.style.left = oEvent.clientX - disX + "px";
            oDiv.style.top = oEvent.clientY - disY + "px";
          }
          document.onmouseup = function (ev) {
            document.onmousemove = null;
            document.onmouseup = null;
          }
          return false;
        };
      },
      Imgscroll() {
        // if (this.myPdf) {
        //   return
        // };
        this.perfBtn = true;
        if (this.$refs.Big_pic_ref) {
          this.$refs.AudioVisual_Img_ref.onmousewheel = (event) => {
            event = event || window.event;
            if (event.wheelDelta < 0) {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
            }
          };
          this.$refs.AudioVisual_Img_ref.addEventListener("DOMMouseScroll", (event) => {
            if (event.detail > 0) {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false)
                .height) - 100 + "px";
              this.$refs.Big_pic_ref[0].style.width = 'auto';
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false)
                .height) + 100 + "px";
              this.$refs.Big_pic_ref[0].style.width = 'auto';
            }
          });
        }
      },
      ImgScrollRemove() {
        this.perfBtn = false;
        this.$refs.AudioVisual_Img_ref.onmousewheel = "";
        this.$refs.AudioVisual_Img_ref.removeEventListener('DOMMouseScroll', (event) => {
          event.preventDefault();
        }, false);
      },
    },
    props: {
      applyId: {
        default: '',
        required: true,
        type: String
      }
    },
    mounted() {
      this.odivMove("FirstAud");
      this.mountedInf();
    },
  }

</script>
<style scoped>
  .AudioVisual {
    height: 100%;
  }

  /* 图片功能按钮 */

  .showBtn {
    top: 7px;
  }

  .hidBtn {
    right: 10px;
  }

  /*  放大、缩小 按钮 wrap */

  .BtnIcons {
    left: calc(50% + 65px);
    width: 270px;
  }

  .icon_pre {
    left: 417px;
    z-index: 112;
  }

  .AudioVisual .AudioVisual_List {
    width: 401px;
    background: #eef0f9;
    border: 1px solid #bfcbd9;
    margin-right: 11px;
    position: relative;
  }

  .AU_mid {
    background: lightblue;
    height: calc(100% - 48px);
    width: 5px;
    position: absolute;
    left: 401px;
    cursor: e-resize;
  }

  .AudioVisual .AudioVisual_Img {
    position: absolute;
    left: 412px;
    right: 0;
    height: calc(100% - 48px);
  }

  /* 左侧折叠面板 */

  /* 折叠面板上面的四个 th 表头 */

  .AudioVisual .list_title span:nth-of-type(1),
  .AudioVisual .list_title_div p span:nth-of-type(1) {
    width: 150px;
  }

  .AudioVisual .list_title span:nth-of-type(2),
  .AudioVisual .list_title_div p span:nth-of-type(2) {
    width: 40px;
    border-right: none;
    border-left: none;
  }

  .AudioVisual .list_title span:nth-of-type(3),
  .AudioVisual .list_title_div p span:nth-of-type(3) {
    width: 40px;
  }

  .AudioVisual .list_title span:nth-of-type(4),
  .AudioVisual .list_title_div p span:nth-of-type(4) {
    width: calc(100% - 231px);
    border-left: none;
  }

  .big_pic_pdf {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

</style>
