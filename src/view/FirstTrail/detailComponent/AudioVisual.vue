<template>
  <div class="AudioVisual" id='AU'>
    <!-- 左侧list隐藏时显示的div     在根元素下面，与left right 平级-->
    <div class="hidDiv" v-show="!showListDiv" ref="hidDiv_ref">
      <img class="showBtn" src="../../../../static/images/Shape Copy.png" @click="showList" style="transform: rotate(180deg)">
    </div>
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
              <span style="position:relative;">
                <b class="NamParentNode"> {{item.arcName}}</b>
                <img src="../../../../static/images/918FE1E0-6EEB-4642-A5E6-253AC973FF41@1x.png" style="position:absolute;top:12px;left:10px"
                  v-show="opendImg[ind]">
                <img src="../../../../static/images/5530D698-2823-417F-B8BC-8DC9037BC848@1x.png" style="position:absolute;top:14px;left:10px"
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
                <span style="width:135px;paddingLeft:20px;">{{item.arcName}}</span>
              </el-tooltip>
              <span>{{item.arcNum}}</span>
              <span>{{item.imageCount}}</span>
              <span v-bind:title="item.uploadDate">{{item.uploadDate}}</span>
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- 按钮 : 缩略图 对比  -->
      <div class="AudioVisualLeft_btn_wrap">
        <el-button @click="SmallpicAlert" class="AudioVisualLeft_compareBtn">缩略图</el-button>
      </div>
    </div>
    <!-- 中间 -->
    <!-- <div class="AU_mid" id="auMID"></div> -->
    <!-- 右侧 图片 -->
    <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove">
      <div ref="img_wrap" style="position:relative; left:0; top:0;" id='FirstAud'>
        <img ref="Big_pic_ref" v-for="(val,key) in pngAyyrs" :key="key" :src="imgBaseUrl+val.imagePath" v-if="key==smallPicInd" v-show="myPng"
          @dblclick='next' />
        <p v-show="myPdf" is="pdfDiv" ID='firstTirl' v-bind:title="pdfArrys"></p>
      </div>
    </div>
    <img src="../../../../static/images/left.png" class="icon_pre " ref="preBtn" @click="pre" v-show="perfBtn" @mouseenter='PerBtn'>
    <img src="../../../../static/images/pc1.png" class="icon_next" @click="next" v-show="perfBtn" @mouseenter='PerBtn'>
    <div class="BtnIcons" v-show="perfBtn" @mouseenter='PerBtn' ref="PbtnIcons">
      <img src="../../../../static/images/efw.png" @click="smaller ">
      <img src="../../../../static/images/net.png" @click="larger">
      <img src="../../../../static/images/daf.png" @click="AclockWise ">
      <img src="../../../../static/images/dasf.png" @click="clockWise ">
      <span class="audioInd"> 第 {{showPage }} 页</span>
    </div>
    <!-- 缩略图弹出层    不在右侧div里面，再 wrap 里面 -->
    <div class="Small_pic_div" v-show="SmallPicShow">
      <p class="Small_pic_title"> 缩略图
        <img src="../../../../static/images/D625BA67-2F56-42C1-9E9D-A47AE03BA028@1x.png" class="small_pic_close" @click="SmallpicClose">
      </p>
      <div class="small_pic_content">
        <figure v-for="(val,index) in pngAyyrs" :key="index" class="small_pic_figure" v-show="SmallmyPic">
          <div class="Small_pic">
            <img :src="imgBaseUrl+val.imagePath" @click="ChangeCss(index)" @dblclick="smallPic($event,index)" ref="small_pic_ref" />
          </div>
          <p v-if="SmallmyPic">{{val.arcSubType}}</p>
        </figure>
        <figure class="small_pic_figure" v-show="SmallmyPdf" @dblclick="pdfClose()">
          <div class="Small_pic" @dblclick="pdfClose()">
            <p is="pdfDiv" ID='firstTirlSmall' :cvsWidth='200' :cvsHeight='200' SmallClass="SmallWrap" v-bind:title="pdfArrys" @dblclick="pdfClose()"></p>
          </div>
          <p> {{pdfTitle}} </p>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  import imgUrl from '../../../util/ConstantSocialAndPn'
  import pdfDiv from '../../pdf'
  export default {
    data() {
      return {
        imgBaseUrl: '',
        litimg: [],
        litimgIndex: -1,
        litimgInd: -1,
        perfBtn: false, //功能按钮
        judgeFlag: {},
        opendImg: [],
        closedImg: [],
        showListDiv: true,
        show: true,
        showPage: 0,
        smallPicInd: 0,
        SmallPicShow: false,
        CompareAlert: true,
        ListParent: [],
        ListDetails: [],
        // applyId: '', //入参
        imgPath: [],
        localInf: [], //localstorage 接收的所有参数,
        pdfArrys: [],
        pngAyyrs: [],
        myPng: false,
        myPdf: false,
        style: '',
        SmallmyPic: false,
        SmallmyPdf: false,
        pdfTitle: '',

      }
    },
    methods: {
      mountedInf() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")); // 初审
        } else if (this.judgeFlag.flag == '02') {
          this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
          this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈
        } else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
          this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议
        } else if (this.judgeFlag.flag == '14' || this.judgeFlag.flag == '15') {
          this.localInf = JSON.parse(localStorage.getItem("TtaskInWaitting")) // 任务管理
        }
        this.imgBaseUrl = imgUrl.imgBaseUrl;
        // 父菜单
        this.post("/productArchive/getProductArchiveParentList", {
          // applyId: this.localInf.applyId,
           applyId:this. applyId
        }).then(res => {
          if (res.statusCode == 200) {
            this.ListParent = res.data;
            if (this.ListParent) {
              var MDate = null;
              for (var i = 0; i < this.ListParent.length; i++) {
                var MDate = new Date(this.ListParent[i].uploadDate);
                this.ListParent[i].uploadDate = this.comput(MDate)
              }
              for (var i = 0; i < this.ListParent.length; i++) {
                this.opendImg[i] = true;
                this.closedImg[i] = false;
              }
            }
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      PerBtn() {
        this.perfBtn = true;
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
          // applyId: this.localInf.applyId,
          applyId:this. applyId,
          pid: id
        }).then(res => {
          if (res.statusCode == 200) {
            this.ListDetails = res.data;
            if (this.ListDetails) {
              var MChiDate = null;
              for (var i = 0; i < this.ListDetails.length; i++) {
                var MChiDate = new Date(this.ListDetails[i].uploadDate);
                this.ListDetails[i].uploadDate = this.comput(MChiDate)
              }
            }
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      pdfClose() {
        this.SmallPicShow = false;
        this.showPage = 1;
        //  this.defaultBigPicCss();
      },
      getImg(ind) {
        this.pdfArrys = [];
        this.pngAyyrs = [];
        this.smallPicInd = 0;
        this.showPage = 1;
        this.imgPath = this.ListDetails[ind].applyArchiveInfos;
        if (this.imgPath[0].imagePath.substring(this.imgPath[0].imagePath.length - 3) == 'pdf') {
          this.pdfArrys = this.imgPath;
          this.myPdf = true;
          this.myPng = false;
        } else {
          this.myPng = true;
          this.myPdf = false;
          this.pngAyyrs = this.imgPath;
        };
        this.$refs.img_wrap.style.left = 0;
        this.$refs.img_wrap.style.top = 0;
        this.defaultBigPicCss();
      },
      hid() {
        this.showListDiv = false;
        this.$refs.preBtn.style.left = 37 + 'px';
        // this.$refs.PbtnIcons.style.right = 'calc( 50% - 97px)';
        this.$refs.PbtnIcons.style.left = 'calc( 50% - 135px)';
        this.$refs.AudioVisual_Img_ref.style.left = 0;
        this.defaultBigPicCss();
      },
      showList() {
        this.showListDiv = true;
        this.$refs.preBtn.style.left = 417 + 'px';
        // this.$refs.PbtnIcons.style.right = 'calc( 50% - 303px)';
        this.$refs.PbtnIcons.style.left = 'calc( 50% + 65px)';
        this.$refs.AudioVisual_Img_ref.style.left = 412 + "px";
        this.defaultBigPicCss();
      },
      SmallpicClose() {
        this.SmallPicShow = false;
        this.SmallmyPdf = false;
        this.SmallmyPic = false;
      },
      SmallpicAlert() {
        this.SmallPicShow = true;
        if (this.myPdf) { //显示pdf
          this.SmallmyPdf = true;
          this.SmallmyPic = false;
          this.pdfTitle = this.pdfArrys[0].arcSubType;
        } else { //显示图片
          this.SmallmyPic = true;
          this.SmallmyPdf = false;
        }
      },
      pre() {
        if (this.pngAyyrs.length != 0) {
          this.smallPicInd--;
          this.showPage--;
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
        if (this.pngAyyrs.length != 0) {
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
        if (this.$refs.Big_pic_ref) {
          this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
            100 + "px";
          this.$refs.Big_pic_ref[0].style.width = "auto";
        }
      },
      smaller() {
        if (this.$refs.Big_pic_ref) {
          this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
            100 + "px";
          this.$refs.Big_pic_ref[0].style.width = "auto";
        }
      },
      clockWise() {
        if (this.$refs.Big_pic_ref) {
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
        if (this.$refs.Big_pic_ref) {
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
          if (this.myPdf) {
            this.$refs.img_wrap.style.left = 0;
            this.$refs.img_wrap.style.top = 0;
            return
          }
          if (this.$refs.Big_pic_ref) {
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
      comput(val) {
        val = val.getFullYear() + "-" + (val.getMonth() + 1) + "-" + val.getDate() + " " + (val.toString().split(' ')[4]);
        return val;
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
        if (this.myPdf) {
          return
        };
        this.perfBtn = true;
        if (this.$refs.Big_pic_ref) {
          this.$refs.AudioVisual_Img_ref.onmousewheel = (event) => {
            event = event || window.event;
            //  this.$refs.AudioVisual_Img_ref.scrollTop = 0;
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
            //  this.$refs.AudioVisual_Img_ref.scrollTop = 0;
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
      compBtnShow() {
        this.$emit('CompareShow')
      },
    },
    props: ['applyId','AURpreWidth', 'applyID'],
    mounted() {
      this.odivMove("FirstAud");
      this.mountedInf();
    },
    components: {
      pdfDiv
    }
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
    left: calc( 50% + 65px);
    width: 270px;
  }

  .icon_pre {
    left: 417px;
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
    height: calc( 100% - 48px);
    width: 5px;
    position: absolute;
    left: 401px;
    cursor: e-resize;
  }

  .AudioVisual .AudioVisual_Img {
    position: absolute;
    left: 412px;
    right: 0;
    height: calc( 100% - 48px);
  }

  /* 左侧折叠面板 */

  /* 折叠面板上面的四个 th 表头 */

  .AudioVisual .list_title span:nth-of-type(1),
  .AudioVisual .list_title_div p span:nth-of-type(1) {
    width: 135px;
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
    width: calc(100% - 255px);
    border-left: none;
  }

</style>
