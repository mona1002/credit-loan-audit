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
    <!-- 右侧 图片 -->
    <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove">
      <div ref="img_wrap" style="position:relative; left:0; top:0;" id='RFirstAud'>
        <!-- <img ref="Big_pic_ref" v-for="(val,key) in imgPath" :key="key" :src="imgBaseUrl+val.imagePath" v-if="key==smallPicInd" /> -->
        <img ref="Big_pic_ref" v-for="(val,key) in pngAyyr" :key="key" :src="imgBaseUrl+val.imagePath" v-if="key==smallPicInd" v-show="myPng"
          @dblclick='next' />
        <p v-if="myPdf" is="RpdfDiv" ID='ReadTril' v-bind:title="pdfArry"></p>
      </div>
    </div>
    <img src="../../../../static/images/left.png" class="icon_pre " ref="preBtn" v-show="perfBtn" @click="pre" @mouseenter='PerBtn'>
    <img src="../../../../static/images/pc1.png" class="icon_next" v-show="perfBtn" @click="next" @mouseenter='PerBtn'>
    <div class="BtnIcons" v-show="perfBtn" @mouseenter='PerBtn' ref="PbtnIcons">
      <img src="../../../../static/images/efw.png" @click="smaller ">
      <img src="../../../../static/images/net.png" @click="larger">
      <img src="../../../../static/images/daf.png" @click="AclockWise ">
      <img src="../../../../static/images/dasf.png" @click="clockWise ">
      <span class="audioInd"> 第 {{showPage }} 页</span>
    </div>
    <!-- 缩略图弹出层    不在右侧div里面，再 wrap 里面 -->
    <div class="Small_pic_div" v-show="SmallPicShow">
      <p class="Small_pic_title"> 缩略图-申请信息
        <img src="../../../../static/images/D625BA67-2F56-42C1-9E9D-A47AE03BA028@1x.png" class="small_pic_close" @click="SmallpicClose">
      </p>
      <div class="small_pic_content">
        <figure v-for="(val,index) in imgPath" :key="index" class="small_pic_figure">
          <img class="Small_pic" :src="imgBaseUrl+val.imagePath" @click="ChangeCss(index)" @dblclick="smallPic($event,index)" ref="small_pic_ref"
          />
          <p>{{val.arcSubType}} </p>
        </figure>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
  import imgUrl from '../../../util/ConstantSocialAndPn'
  import RpdfDiv from '../../pdf'
  export default {
    data() {
      return {
        // picData: [],
        imgBaseUrl: '',
        perfBtn: false,
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
        applyId: '', //入参
        imgPath: [],
        localInf: [], //localstorage 接收的所有参数
        MatchFlag: '',
        pdfArry: [],
        pngAyyr: [],
        myPng: false,
        myPdf: false,
      }
    },
    methods: {
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
        this.post("/productArchive/getProductArchiveChildList", {
          applyId: this.localInf.matchApplyId,
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
      getImg(ind) {
        this.pdfArry = [];
        this.pngAyyr = [];
        this.smallPicInd = 0;
        this.showPage = 1;
        this.imgPath = this.ListDetails[ind].applyArchiveInfos;
        if (this.imgPath[0].imagePath.substring(this.imgPath[0].imagePath.length - 3) == 'pdf') {
          this.pdfArry = this.imgPath;
          this.myPdf = true;
          this.myPng = false;
        } else {
          this.myPng = true;
          this.myPdf = false;
          this.pngAyyr = this.imgPath;
          console.log(this.pngAyyr.length);
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
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 31px)";
        this.defaultBigPicCss();
      },
      showList() {
        this.showListDiv = true;
        this.$refs.preBtn.style.left = 417 + 'px';
        // this.$refs.PbtnIcons.style.right = 'calc( 50% - 303px)';
        this.$refs.PbtnIcons.style.left = 'calc( 50% + 65px)';
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 412px)";
        this.defaultBigPicCss();
      },
      SmallpicClose() {
        this.SmallPicShow = false;
      },
      SmallpicAlert() {
        this.SmallPicShow = true;
      },
      pre() {
        this.smallPicInd--;
        this.showPage--;
        if (this.$refs.small_pic_ref) {
          if (this.smallPicInd < 0) {
            this.smallPicInd = this.$refs.small_pic_ref.length - 1;
            this.showPage = this.$refs.small_pic_ref.length;
          }
        }
        this.defaultBigPicCss();
      },
      next() {
        this.smallPicInd++;
        this.showPage++;
        if (this.$refs.small_pic_ref) {
          if (this.smallPicInd >= this.$refs.small_pic_ref.length) {
            this.smallPicInd = 0;
            this.showPage = 1;
          }
        }
        this.defaultBigPicCss();
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
          if (this.$refs.Big_pic_ref[0].style.transform == "") { // 输出结果为： rotate(900deg) 每次加 90度
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
      changeSmallPicCss(ind) { // （重复代码）通用方法： 遍历所有小图片，恢复默认（初始时）设置的css样式--------- click时改变显示大图和选中小图的 高度 + 透明度
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
        }
        this.perfBtn = true;
        if (this.$refs.Big_pic_ref) {
          this.$refs.AudioVisual_Img_ref.onmousewheel = (event) => {
            event = event || window.event;
            this.$refs.AudioVisual_Img_ref.scrollTop = 0;
            if (event.wheelDelta < 0) {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) -
                100 + "px";
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false).height) +
                100 + "px";
            }
          };
          this.$refs.AudioVisual_Img_ref.addEventListener("DOMMouseScroll", (event) => {
            this.$refs.AudioVisual_Img_ref.scrollTop = 0;
            if (event.detail > 0) {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false)
                  .height) -
                100 + "px";
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false)
                  .height) +
                100 + "px";
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
      }
    },
    mounted() {
      // this.odivMove("RFirstAud");
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag"))
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.localInf = JSON.parse(localStorage.getItem("internalObj")) //匹配查看
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.localInf = JSON.parse(localStorage.getItem("Query")) //综合查询
      } else if (this.MatchFlag.MatchFlag == 'QT') {
        this.localInf = JSON.parse(localStorage.getItem("QT")) //综合查询
      }
      this.imgBaseUrl = imgUrl.imgBaseUrl;
      this.odivMove("RFirstAud");
      this.post("/productArchive/getProductArchiveParentList", {
        applyId: this.localInf.matchApplyId,
        // applyId:"62fecf51-4839-4639-afe0-9b7cde722a5e",
        //  applyId:"e0b51098-b24d-4211-8ae4-f08f657d7886"
      }).then(res => {
        if (res.statusCode == 200) {
          this.ListParent = res.data;
          if (this.ListParent) {
            var c = null,
              MDate = null;
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
    components: {
      RpdfDiv
    }
  }

</script>
<style scoped>
  .AudioVisual {
    height: 100%;
  }

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
    position: relative;
    z-index: 2;
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
    /* right: calc( 50% - 303px); */
    left: calc( 50% + 65px);
    top: calc( 100% - 110px);
    width: 270px;
    height: 52px;
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
    left: 417px;
    top: 50%;
    z-index: 2;
  }

  .icon_next {
    position: absolute;
    right: 24px;
    z-index: 2;
    top: 50%;
  }

  .NamParentNode {
    margin-left: 20px;
    display: block;
    font-style: normal;
    width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .AudioVisual .AudioVisual_List,
  .AudioVisual .AudioVisual_Img {
    float: left;
    height: 100%;
    overflow: auto;
    position: relative;
  }

  .AudioVisual .AudioVisual_Img {
    width: calc( 100% - 412px);
  }

  .AudioVisual .AudioVisual_List {
    width: 401px;
    background: #eef0f9;
    border: 1px solid #bfcbd9;
    margin-right: 11px;
  }

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
    width: calc(100% - 255px);
    border-left: none;
  }

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
    border-radius: 4px;
  }

  /* 缩略图 p 标签  title */

  .AudioVisual .Small_pic_title {
    font-size: 16px;
    text-align: center;
    background: rgba(0, 119, 255, 0.75);
    height: 48px;
    line-height: 48px;
    color: #f8f9fd;
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
    margin: 0 0 0 18px;
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
    border-radius: 5px;
    border: 2px solid #bfcbd9;
    box-shadow: 2px 4px 10px 0 #bfcbd9, inset 0 1px 3px 0 #bfcbd9;
  }

</style>
