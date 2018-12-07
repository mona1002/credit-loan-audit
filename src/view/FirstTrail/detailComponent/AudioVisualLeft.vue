<template>
  <div class="AudioVisualLeft" id="AUL">
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
        <span>页数</span>
      </p>
      <el-collapse accordion>
        <el-collapse-item v-for="(item,ind) in ListParent" :key="ind">
          <template slot="title">
            <p>
              <!-- 一级节点 -->
              <span>{{item.arcName}} </span>
              <span>{{item.imageCount}}</span>
            </p>
          </template>
          <div class="list_title_div">
            <!--  二级 内容 节点 -->
            <p v-for="(items,inds) in  item.child" :key="inds" @click.stop="getImg(inds,items)">
              <el-tooltip class="item" effect="dark" :content="items.arcName" placement="right-end">
                <span style="width:105px;marginLeft:20px;">{{items.arcName}}</span>
              </el-tooltip>
              <span>{{items.imageCount}}</span>
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="AudioVisualLeft_btn_wrap">
        <el-button @click="SmallpicAlert" class="AudioVisualLeft_compareBtn">缩略图</el-button>
        <el-button type="primary" @click="compBtnShow" v-if="this.comBtn">对比</el-button>
      </div>
    </div>
    <!-- 右侧 图片 -->
    <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove">
      <div ref="img_wrap" style="position:relative; left:0; top:0;height:99%;" :id='msg'>
        <!--  @mouseenter='PerBtn' -->
        <div v-for="(val,key) in picArrays" :key="key" v-if="key==smallPicInd">
          <!-- 图片 -->
          <!-- <img ref="Big_pic_ref" :src="val.imagePath" v-if="val.imagePath.slice(-3)!='pdf'" @dblclick='next' /> -->
          <img ref="Big_pic_ref" style="width:auto;height:auto;" :src="val.imagePath" v-if="val.imagePath.slice(-3)!='pdf' "
            @dblclick='next' />
          <!-- pdf -->
          <div class="big_pic_pdf" v-else @dblclick='next'>
            <iframe id='firstTirlLeft' :src="val.imagePath" height="100%" width="100%"> </iframe>
          </div>
        </div>
      </div>
    </div>
    <img src="../../../../static/images/left.png" class="icon_pre " ref="preBtn" v-show="perfBtn" @click="pre"
      @mouseenter='PerBtn'>
    <img src="../../../../static/images/pc1.png" class="icon_next" v-show="perfBtn" @click="next" @mouseenter='PerBtn'>
    <div class="BtnIcons" v-show="perfBtn" @mouseenter='PerBtn' ref="PbtnIcons">
      <img src="../../../../static/images/efw.png" @click="smaller ">
      <img src="../../../../static/images/net.png" @click="larger">
      <img src="../../../../static/images/daf.png" @click="AclockWise ">
      <img src="../../../../static/images/dasf.png" @click="clockWise ">
      <span class="audioInd"> 第 {{showPage}} 页</span>
    </div>
    <!-- 缩略图弹出层   -->
    <div class="Small_pic_div" v-show="SmallPicShow">
      <p class="Small_pic_title"> 缩略图
        <img src="../../../../static/images/D625BA67-2F56-42C1-9E9D-A47AE03BA028@1x.png" class="small_pic_close" @click="SmallpicClose">
      </p>
      <div class="small_pic_content">
        <figure v-for="(val,index) in picArrays" :key="index" class="small_pic_figure">
          <div class="Small_pic">
            <img :src="val.imagePath" @click="ChangeCss(index)" ref="small_pic_ref" v-if="val.imagePath.slice(-3)!='pdf'" />
            <iframe id='firstTirlLeftSmall' ref="small_pic_ref" v-else scrolling="no" :src="val.imagePath" height="100%" width="100%"> </iframe>
            <!-- 点击iframe/图片触发事件-iframe点击事件问题 -->
            <div class="big_pic_pdf" @dblclick="smallPic(index)"> </div>
          </div>
          <p> {{val.arcSubType}} </p>
        </figure>
      </div>
    </div>
    <div v-show="searchAlert" class="posi">
      <p>内部匹配客户查询列表
        <i class="el-icon-close" style="color:white;fontSize:18px;right:13px;top:12px" @click="closeAlertSearch"></i>
      </p>
      <div class="posi_content">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="本人进件列表" name="1">
            <el-table :data="personal" border height="350" @dblclick.native="getParentList(currentRow.matchApplyId)"
              @current-change="handleCurrentChange">
              <el-table-column property="matchApplyCustName" label="客户名称">
              </el-table-column>
              <el-table-column property="matchApplySubNo" label="进件编号">
              </el-table-column>
              <el-table-column property="matchApplyDate" label="申请时间">
              </el-table-column>
              <el-table-column prop="matchApplyStateTxt" label="业务状态">
              </el-table-column>
            </el-table>
          </el-collapse-item>
          <el-collapse-item title="内匹客户进件" name="2">
            <el-table :data="others" border height="350" @dblclick.native="getParentList(currentRow.matchApplyId)"
              @current-change="handleCurrentChange">
              <el-table-column property="matchApplyCustName" label="客户名称">
              </el-table-column>
              <el-table-column property="matchApplySubNo" label="进件编号">
              </el-table-column>
              <el-table-column property="matchApplyDate" label="申请时间">
              </el-table-column>
              <el-table-column prop="matchApplyStateTxt" label="业务状态">
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        perfBtn: true,
        showListDiv: true,
        show: true,
        showPage: 0,
        smallPicInd: 0, // 未知
        SmallPicShow: false,
        CompareAlert: true,
        ListParent: [],
        picArrays: [],
        activeNames: ['1', '2'], //查询弹出框 默认展开选项
        searchAlert: false,
        personal: [], // 匹配查询-个人
        others: [], // 匹配查询-他人
        currentRow: null,
        custName: '',
        custmatchApplySubNo: '',
        applyId: this.list.applyId,
        applySubNo: this.list.applySubNo,
        certCode: this.list.certCode
      }
    },
    props: {
      list: {
        type: Object,
        required: true,
        default: function () {
          return {
            applyId: '',
            applySubNo: '',
            certCode: ''
          }
        }
      },
      msg: {
        default: "",
        required: true,
        type: String
      },
      comBtn: {
        default: true,
        type: Boolean
      }
    },

    methods: {
      mountedInf() {
        // 恢复到初始状态
        this.pngAyyrs = [];
        this.pdfArrys = [];
        this.SmallPicShow = false; //缩略图
        // 父菜单
        this.get('/productArchive/productArchives/' + this.applyId).then(res => {
          if (res.statusCode == 200) {
            this.ListParent = res.data;
            this.$parent.$data.loading = false;
          } else {
            // this.$message.error(res.msg);
            this.$parent.$data.loading = false;
          }

        });
      },
      closeAlertSearch() {
        this.searchAlert = false;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      PerBtn() {
        this.perfBtn = true;
      },
      personalNunPerson() {
        this.searchAlert = true;
        // 个人进件        
        this.post("/internalMatch/getPersonalInternalMatchList", {
          applySubNo: this.applySubNo,
          certCode: this.certCode,
        }).then(res => {
          if (res.statusCode == 200) {
            this.personal = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
        //他人进件（ 不包含个人）
        this.post("/internalMatch/getNonPersonalInternalMatch", {
          pageParam: {
            pageNum: "1", //当前页
            pageSize: '1000' //每页的显示数量
          },
          applySubNo: this.applySubNo,
          certCode: this.certCode,
        }).then(res => {
          if (res.statusCode == 200) {
            this.others = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getParentList(id) {
        this.get('/productArchive/productArchives/' + id).then(res => {
          if (res.statusCode == 200) {
            this.ListParent = res.data;
            this.applyId = id;
            this.searchAlert = false;
            this.custName = this.currentRow.matchApplyCustName;
            this.custmatchApplySubNo = this.currentRow.matchApplySubNo;
            this.$emit('inputInf', this.custName, this.custmatchApplySubNo)
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      smallPic(ind) {
        this.smallPicInd = ind;
        this.showPage = ind + 1;
        this.SmallPicShow = false;
        this.defaultBigPicCss();
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
        this.$refs.preBtn.style.left = 223 + 'px';
        this.$refs.PbtnIcons.style.left = 'calc( 50% - 34px)';
        this.$refs.AudioVisual_Img_ref.style.left = "214px";
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
        this.$refs.img_wrap.scrollIntoView()
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
      defaultBigPicCss() {
        this.$nextTick(() => {
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
            oEvent.stopPropagation();
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
        this.perfBtn = true;
        if (this.$refs.Big_pic_ref) {
          this.$refs.AudioVisual_Img_ref.onmousewheel = (event) => {
            event = event || window.event;
            if (event.wheelDelta < 0) {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0],
                  false).height) -
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0],
                  false).height) +
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
            }
          };
          this.$refs.AudioVisual_Img_ref.addEventListener("DOMMouseScroll", (event) => {
            if (event.detail > 0) {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0],
                    false)
                  .height) -
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0],
                    false)
                  .height) +
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
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
    mounted() {
      this.odivMove(this.msg);
      this.mountedInf();
    },
  }

</script>
<style scoped>
  .AudioVisualLeft {
    height: 100%;
    width: 100%;
  }

  /* 图片功能按钮 */

  .showBtn {
    top: 11px;
  }

  .hidBtn {
    right: 5px;
  }

  /*  放大、缩小 按钮 wrap */

  .BtnIcons {
    left: calc(50% - 34px);
    width: 270px;
  }

  .icon_pre {
    left: 223px;
    z-index: 112;
  }

  .AudioVisualLeft .AudioVisual_Img {
    position: absolute;
    left: 214px;
    right: 0;
    height: calc(100% - 48px);
  }

  .AudioVisualLeft .AudioVisual_List {
    width: 203px;
  }

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
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    background: rgba(0, 119, 255, 0.75);
    color: #f8f9fd;
    text-align: center
  }

  .posi_content {
    height: calc(100% - 40px);
    overflow: auto;
    /* overflow-x: hidden; */
    /* overflow: hidden; */
  }

</style>
