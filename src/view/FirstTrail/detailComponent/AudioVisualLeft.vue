<template>
  <div class="AudioVisualLeft" id="AU">
    <!-- 左侧list隐藏时显示的div     在根元素下面，与left right 平级-->
    <div class="hidDiv" v-show="!showListDiv" ref="hidDiv_ref">
      <img class="showBtn" src="../../../../static/images/Shape Copy.png" @click="showList" style="transform: rotate(180deg)">
    </div>
    <!-- ================================= -->
    <!-- 左侧 折叠面板 -->
    <div class="AudioVisual_List" ref="AudioVisual_List_ref" v-show="showListDiv" style="">
      <p>{{this.mwidth}}
      </p>
      <!-- {{imgUrl}} -->
      <!-- 折叠面板title -->
      <img class="hidBtn" src="../../../../static/images/Shape Copy.png" @click="hid">
      <!-- 折叠面板-手风琴List -->
      <p class="list_title clearFix">
        <span>影像名称
          <img src="../../../../static/images/BAA30772-8C58-4169-9CF3-C1ACA1DB9C62@1x.png" style="position:absolute;top:12px;right:17px">
          <img src="../../../../static/images/693BC9A6-4912-42DA-A313-32E8E75CD126@1x.png" style="position:absolute;top:19px;right:17px">
        </span>
        <span>页数</span>
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
              <span>{{item.imageCount}}</span>
            </p>
          </template>
          <div class="list_title_div">
            <!--  二级 内容 节点  @mouseenter.once.stop="fff && getImg(ind)"-->
            <p v-for="(item,ind) in ListDetails" :key="ind" @click.stop="getImg(ind,$event)">
              <el-tooltip class="item" effect="dark" :content="item.arcName" placement="right-end">
                <span style="width:105px;marginLeft:20px;">{{item.arcName}}</span>
              </el-tooltip>
              <span>{{item.imageCount}}</span>
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- 按钮 : 缩略图 对比  -->
      <div class="AudioVisualLeft_btn_wrap">
        {{AUpreWidth}}
        <el-button @click="SmallpicAlert" class="AudioVisualLeft_compareBtn">缩略图</el-button>
        <el-button type="primary" @click="compBtnShow" v-if="this.comBtn">对比</el-button>
      </div>
    </div>
    <div class="A_mid" id="MID"></div>
    <!-- 右侧 图片 -->
    <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove" style="border:1px solid green;">
      <div ref="img_wrap" style="position:relative;" :id='msg'>
        <!-- <div id="aaaaa"> </div> -->
        <img ref="Big_pic_ref" v-for="(val,key) in imgPath" style="width:auto;height:auto;" :key="key" :src="imgBaseUrl+val.imagePath"
          v-if="key==smallPicInd" />
        <!-- <img ref="Big_pic_ref" v-for="(val,key) in imgPathDetail" style="width:auto;height:auto;" :key="key" :src="imgBaseUrl+val.imagePath"
          />  -->
        <!-- v-if="key==smallPicInd" -->
        <!-- <img ref="Big_pic_ref" id='abcd'  style="width:auto;height:auto;" :src="uurl" /> -->
      </div>
    </div>
    <img src="../../../../static/images/left.png" class="icon_pre " ref="preBtn" v-show="perfBtn" @click="pre" @mouseenter='PerBtn'>
    <img src="../../../../static/images/pc1.png" class="icon_next" v-show="perfBtn" @click="next" @mouseenter='PerBtn'>
    <div class="BtnIcons" v-show="perfBtn" @mouseenter='PerBtn' ref="PbtnIcons">
      <img src="../../../../static/images/efw.png" @click="smaller ">
      <img src="../../../../static/images/net.png" @click="larger">
      <img src="../../../../static/images/daf.png" @click="AclockWise ">
      <img src="../../../../static/images/dasf.png" @click="clockWise ">
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
          <p> {{val.arcSubType}} </p>
        </figure>
      </div>
    </div>
    <!--=================================  查询弹出层 ================================= -->
    <div v-show="dataa" class="posi">
      <!-- 折叠 -->
      <p>内部匹配客户查询列表
        <i class="el-icon-close" style="color:white;fontSize:18px;right:13px;top:16px" @click="closeAlertSearch"></i>
      </p>
      <div class="posi_content">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="本人进件列表" name="1">
            <div>
              <el-table :data="personal" height="250" border @dblclick.native="getParentList(currentRow.matchApplyId)" @current-change="handleCurrentChange"
                style="width: 100%">
                <el-table-column property="matchApplyCustName" label="客户名称">
                </el-table-column>
                <el-table-column property="matchApplySubNo" label="进件编号">
                </el-table-column>
                <el-table-column property="matchApplyDate" label="申请时间">
                </el-table-column>
                <el-table-column prop="matchApplyStateTxt" label="业务状态">
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
                <el-table-column prop="matchApplyStateTxt" label="业务状态">
                </el-table-column>
              </el-table>
            </div>
            <!-- 确认  取消 按钮 -->
            <div style="margin-top: 20px">
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
    <!-- ================================= 结束================================= -->
  </div>
</template>

<script>
  import imgUrl from '../../../util/ConstantSocialAndPn'
  export default {
    data() {
      return {
        mwidth: '',
        mheight: '',
        // =============
        perfBtn: false,
        judgeFlag: '',
        opendImg: [],
        closedImg: [],
        uurl: '',
        imgBaseUrl: '',
        localInf: [], //初始化的时候，根据传进来的applyId获取初始化数据
        showListDiv: true,
        show: true,
        smallPicInd: 0, // 未知
        SmallPicShow: false,
        CompareAlert: true,
        ListParent: [],
        ListDetails: [],
        applyId: '', //入参
        imgPath: [],
        imgPathDetail: [],
        // ----------------------------------
        activeNames: ['1', '2'], //查询弹出框 默认展开选项
        dataa: false,
        personal: [], // 匹配查询-个人
        others: [], // 匹配查询-他人
        currentRow: null,
        custName: '',
        custmatchApplySubNo: '',
        AULwrapWidth:null,
      }
    },
    props: ['msg', 'comBtn','AUpreWidth'],
    methods: {
      closeAlertSearch() {
        this.dataa = false;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      PerBtn() {
        this.perfBtn = true;
      },
      personalNunPerson() {
        this.dataa = true;
        // 个人进件        
        this.post("/internalMatch/getPersonalInternalMatchList", {
          // applySubNo: "201504130173041858",
          // certCode: "341422198409070094",
          applySubNo: this.localInf.applySubNo,
          certCode: this.localInf.certCode,
        }).then(res => {
          if (res.statusCode == 200) {
            this.personal = res.data;
          } else {
            this.$message.error(res.msg);
          }
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
          if (res.statusCode == 200) {
            this.others = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getParentList(id) { //  未写 -----未对
        console.log("table选中-获取父节点")
        this.post("/productArchive/getProductArchiveParentList", {
          applyId: id, //上面删除后 此处打开
          // a2b23bbf-46ef-4d94-9872-322843cebb7d matchApplyId
          // applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",//上面删除后 此处打开
        }).then(res => {
          if (res.statusCode == 200) {
            this.ListParent = res.data;
            this.localInf.applyId = id;
            this.dataa = false;
            this.custName = this.currentRow.matchApplyCustName;
            this.custmatchApplySubNo = this.currentRow.matchApplySubNo;
            this.$emit('inputInf', this.custName, this.custmatchApplySubNo)
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getChildrenList(id, ind, item) {
        console.log("子节点")
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
          applyId: this.localInf.applyId,
          // applyId: "62fecf51-4839-4639-afe0-9b7cde722a5e",
          pid: id
        }).then(res => {
          if (res.statusCode == 200) {
            this.ListDetails = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      smallPic(ev, ind) {
        this.smallPicInd = ind;
        this.SmallPicShow = false;
        this.defaultBigPicCss();
      },
      getImg(ind) {
        this.smallPicInd = 0;
        this.imgPath = this.ListDetails[ind].applyArchiveInfos;
        this.$refs.img_wrap.style.left = 0;
        this.$refs.img_wrap.style.top = 0;
        this.defaultBigPicCss();
      },
      hid() {
        this.showListDiv = false;
        this.$refs.preBtn.style.left = 37 + 'px';
        this.$refs.PbtnIcons.style.left = 'calc( 50% - 97px)';
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 31px)";
        this.defaultBigPicCss();
      },
      showList() {
        this.showListDiv = true;
        this.$refs.preBtn.style.left = 223 + 'px';
        this.$refs.PbtnIcons.style.left = ' calc( 50% + 9px)';
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 214px)";
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
        if (this.$refs.small_pic_ref) {
          if (this.smallPicInd < 0) {
            this.smallPicInd = this.$refs.small_pic_ref.length - 1;
          }
        }
        this.defaultBigPicCss();
      },
      next() {
        this.smallPicInd++;
        if (this.$refs.small_pic_ref) {
          if (this.smallPicInd >= this.$refs.small_pic_ref.length) {
            this.smallPicInd = 0;
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
        this.$refs.img_wrap.scrollIntoView()

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
      defaultBigPicCss() {
        this.$nextTick(() => {
          if (this.$refs.Big_pic_ref) {
            this.$refs.Big_pic_ref[0].style.transform = "rotate(0deg)";
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
                  .height) -
                100 + "px";
              this.$refs.Big_pic_ref[0].style.width = "auto"
            } else {
              this.$refs.Big_pic_ref[0].style.height = parseFloat(getComputedStyle(this.$refs.Big_pic_ref[0], false)
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
//       childc(){
// console.log('触发子组件')
//  $("#AU").width(this.AUpreWidth)
//       },
      MyMove() {
        console.log("移动left")
        console.log(this.AUpreWidth)
        var AUclickX, AUleftOffset, inx, AUnextW2, nextW,preLeft;
        var moving = false;
        var doc = document;
        var bor = $("#MID");
        var AUwrapWidth = this.AUpreWidth || $("#AU").width();
        var Pre = this.$refs.rLeft;
        var Nex = this.$refs.rRight;
        bor.bind('mousedown', ()=> {
          moving = true;
          AUleftOffset = $("#AU").offset().left;
        var AUwrapWidth = this.AUpreWidth || $("#AU").width();
          console.log("影音down");
          doc.onmousemove = function (e) {
            console.log("影音move")
            if (moving) {
              AUclickX = e.pageX;
              if (AUclickX > AUleftOffset + 10  &&AUclickX < (AUwrapWidth-5)) {
                bor.eq(0).css('left', AUclickX - AUleftOffset + 2 + 'px'); //按钮移动
                bor.eq(0).prev().width(AUclickX - AUleftOffset + 'px'); //前一个div宽度变化
                console.log( 11111111111)
                AUnextW2 = AUclickX - AUleftOffset;
                // bor.eq(0).next().width(AUwrapWidth - AUnextW2 - 17 + 'px'); //减多少宽地待算
                bor.eq(0).next().css('left',  parseFloat(bor.eq(0).prev().width()) + 10 + 'px'); //减多少宽地待算
                //  bor.eq(0).prev().width()
              } else if(AUclickX < AUleftOffset + 10 &&AUclickX < (AUwrapWidth-5)) {
                console.log( 22222222222222)
                bor.eq(0).css('left', '10px');
                bor.eq(0).prev().width('10px');
                // bor.eq(0).next().width(AUwrapWidth - 17 + 'px'); //减多少宽地待算
                 bor.eq(0).next().css('left', '20px'); 
              }
              console.log(AUclickX + "=========" + AUwrapWidth)
              if (AUclickX > (AUwrapWidth - 10)) {
                console.log( 3333333333333)
                // console.log(AUwrapWidth)
                bor.eq(0).css('left', parseFloat(AUwrapWidth) - 11 + 'px');
                bor.eq(0).prev().width(AUwrapWidth - 24 + 'px');
              }
            }
          };
         
        });
         $(doc).mouseup(function (e) {
            moving = false;
            e.cancelBubble = true;
          });
        //      $(doc).mouseup(function (e) {
        //   moving = false;
        //   e.cancelBubble = true;
        // });

      },
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
      } else if (this.judgeFlag.flag == '02') {
        this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      } else if (this.judgeFlag.flag == '03') {
        this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
      } else if (this.judgeFlag.flag == '04') {
        this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      }
      
      // this.MyMove();
      this.imgBaseUrl = imgUrl.imgBaseUrl;
      // 父菜单
      this.post("/productArchive/getProductArchiveParentList", {
        applyId: this.localInf.applyId,
        // applyId: "62fecf51-4839-4639-afe0-9b7cde722a5e",
        //  applyId:"e0b51098-b24d-4211-8ae4-f08f657d7886"
      }).then(res => {
        if (res.statusCode == 200) {
          this.ListParent = res.data;
          if (this.ListParent) {
            for (var i = 0; i < this.ListParent.length; i++) {
              this.opendImg[i] = true;
              this.closedImg[i] = false;
            }
          }
        } else {
          this.$message.error(res.msg);
        }
      });
      this.odivMove(this.msg);
    }
  }

</script>
<style scoped>
  /* css */

  .AudioVisualLeft {
    height: 100%;
    width: 100%;
    position: relative;
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
    top: 11px;
    right: 2px;
  }

  .hidBtn {
    position: absolute;
    top: 10px;
    right: 5px;
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

  .showHidIcons {
    display: none;
  }

  /*  放大、缩小 按钮 wrap */

  .BtnIcons {
    position: absolute;
    z-index: 2;
    left: calc( 50% + 9px);
    top: calc( 100% - 110px);
    width: 193px;
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
    left: 223px;
    top: 50%;
    z-index: 2;
  }

  .icon_next {
    position: absolute;
    right: 24px;
    z-index: 2;
    top: 50%;
  }

  .A_mid {
    /* background: lightblue; */
    /* background: white; */
    height: 100%;
    width: 5px;
    position: absolute;
    left: 203px;
    cursor: e-resize;
  }

  .AudioVisualLeft .AudioVisual_List,
  .AudioVisualLeft .AudioVisual_Img {
    float: left;
    height: 100%;
    overflow: auto;
    position: relative;
  }

  .AudioVisualLeft .AudioVisual_Img {
    /* width: calc( 100% - 214px); */
    position: absolute;
    left:214px;
    right:0;
  }

  .AudioVisualLeft .AudioVisual_List {
    width: 203px;
    background: #eef0f9;
    border: 1px solid #bfcbd9;
    border: 1px solid red;
position: absolute;left: 0;
    /* border:3px solid red; */
    /* border-radius: 6px 6px 0 0; */
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
    position: relative;
  }

  .AudioVisualLeft .list_title span {
    font-size: 14px;
  }

  .AudioVisualLeft .list_title_div p span {
    font-size: 13px;
    cursor: pointer;
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
    width: calc(100% - 125px);
    border-right: none;
    border-left: none;
  }

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

  .AudioVisualLeft .Small_pic {
    height: calc( 100% - 60px);
    /* UI设计部分 */
    border-radius: 5px;
    border: 2px solid #bfcbd9;
    box-shadow: 2px 4px 10px 0 #bfcbd9, inset 0 1px 3px 0 #bfcbd9;
  }

  /* --------------------------- */

  .NamParentNode {
    margin-left: 20px;
    display: block;
    font-style: normal;
    width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ----------------------------- */

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

  .posi_content {
    height: calc(100% - 48px);
    overflow: auto;
  }

</style>
