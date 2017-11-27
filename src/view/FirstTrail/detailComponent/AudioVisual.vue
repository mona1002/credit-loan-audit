<template>
  <div class="AudioVisual">
    <div class="CompareShow">
      <!-- 左侧 折叠面板 -->
      <div class="AudioVisual_List" ref="AudioVisual_List_ref">
        <!-- 折叠面板title -->
        <button @click="hid" style="margin:0 0 0 130px;">隐藏</button>
        <button @click="showList">显示</button>
        <!-- 折叠面板-手风琴List -->
        <p class="list_title">
          <span>影像名称</span>
          <span>编号</span>
          <span>页数</span>
          <span>上传日期</span>
        </p>
        <el-collapse>
          <!-- v-for="" -->
          <el-collapse-item v-for="(item,ind) in ListParent" :key="ind" @click.native="getChildrenList">
            <template slot="title">
              <p>
                <span>{{item.arcName}}</span>
                <span>{{item.arcNum}}</span>
                <span>{{item.imageCount}}</span>
                <span>{{item.uploadDate}}</span>
              </p>
            </template>
            <div class="list_title_div">
              <p v-for="(item,ind) in ListDetails" :key="ind" @click.stop="getImg">
                <span>{{item.arcName}}</span>
                <span>{{item.arcNum}}</span>
                <span>{{item.imageCount}}</span>
                <span>{{item.uploadDate}}</span>
              </p>
            </div>
            <!-- 此处为重复的样式  得到数据之后删除 -->
            <div class="list_title_div">
              <p>
                <span>影像名称</span>
                <span>编号</span>
                <span>页数</span>
                <span>上传日期</span>
              </p>
            </div>
            <!-- 重复部分结束 -->
          </el-collapse-item>
          <!-- 此处为重复的样式  得到数据之后删除 -->
          <el-collapse-item>
            <template slot="title">
              <p>
                <span>影像名称</span>
                <span>编号</span>
                <span>页数</span>
                <span>上传日期</span>
              </p>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <!-- 重复部分结束 -->
        </el-collapse>
        <!-- 按钮 : 缩略图 对比  -->
        <el-button type="primary" @click="SmallpicAlert" style="position:absolute;top:700px">缩略图</el-button>
        <el-button type="primary" @click="compBtnShow" style="position:absolute;top:700px;left:90px;padding:0 30px;">对比</el-button>
      </div>
      <!-- 右侧 图片 -->
      <div class="AudioVisual_Img" ref="AudioVisual_Img_ref" @mouseenter="Imgscroll" @mouseleave="ImgScrollRemove">
        <!-- <img src="http://img.1ppt.com/uploads/allimg/1606/4_160609151925_1.jpg"> -->
        <i class="el-icon-arrow-left position_and_size icon_pre" @click="pre"></i>
        <i class="el-icon-arrow-right position_and_size icon_next" @click="next"></i>
        <i class="el-icon-zoom-in position_and_size icon_larger" @click="larger "></i>
        <i class="el-icon-zoom-out position_and_size icon_smaller" @click="smaller"></i>
        <i class="el-icon-refresh position_and_size icon_clockWise" @click="clockWise "></i>
        <i class="el-icon-sort position_and_size icon_AclockWise" @click="AclockWise "></i>
        <img v-for="(val,key) in picData" :src="val.pic" v-if="key==smallPicInd" ref="Big_pic_ref" />
      </div>
      <!-- 缩略图弹出层    不在右侧div里面，再 wrap 里面 -->
      <div class="Small_pic_div" v-show="SmallPicShow">
        <i class="el-icon-close small_pic_close" @click="SmallpicClose"></i>
        <img class="Small_pic" v-for="(val,index) in picData" :src="val.pic" @click="ChangeCss(index)" @mouseenter="smallPic($event,index)"
          ref="small_pic_ref" />
      </div>
    </div>

  </div>
</template>

<script>
  // import AudVis from "./AudioVisual";
  import AudVis from "./AudioVisual";

  export default {
    data() {
      return {
        picData: [],
        smallPicInd: 0, // 未知
        SmallPicShow: false,
        CompareAlert: true,
        ListParent: [],
        ListDetails: [],
        // d:'',
        // v: [{ // 单位性质
        //   value: 'yes',
        //   label: '是'
        // }, {
        //   value: 'no',
        //   label: '否'
        // }],
      }
    },
    components: {
      AudVis
    },
    methods: {
      getChildrenList() {
        console.log("获取子节点");
        this.post("/productArchive/getProductArchiveChildList", {
          applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",
          pid: "9c3a2556-4111-42c4-aa78-0034866cf041"
        }).then(res => {
          console.log(res);
          // console.log(res.data)
          this.ListDetails=res.data;
          // this.picData=res.data[0].uploadArcPaths;
          for(var i=0;i<=res.data.length;i++){
            
          }
          // console.log(this.picData)
        });
      },
      getImg() {
        console.log("获取图片");
        this.post("/internalMatch/getInternalMatchCustName", {
          applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",
          pid: "9c3a2556-4111-42c4-aa78-0034866cf041"
        }).then(res => {
          console.log(res);
          // console.log(res.data)
          // this.picData=res.data
        });
      },
      hid() { //左侧 li 列表
        console.log("hid");
        this.$refs.AudioVisual_List_ref.style.left = "-175px";
        this.$refs.AudioVisual_Img_ref.style.left = "25px";
        // this.$refs.AudioVisual_Img_ref.style.width = document.documentElement.clientWidth - 25 + "px";
        // this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 25px)";
        this.$refs.AudioVisual_Img_ref.style.width = "100%";
      },
      showList() { //左侧 li 列表
        this.$refs.AudioVisual_List_ref.style.left = "0";
        this.$refs.AudioVisual_List_ref.style.width = "200px";
        this.$refs.AudioVisual_Img_ref.style.left = "200px";
        this.$refs.AudioVisual_Img_ref.style.width = document.documentElement.clientWidth - 200 + "px";
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
        // this.changeSmallPicCss();
      },
      next() {
        console.log("下一页")
        this.smallPicInd++;
        this.defaultBigPicCss(); // 同上
        if (this.smallPicInd >= this.$refs.small_pic_ref.length) {
          this.smallPicInd = 0;
        }
        // this.changeSmallPicCss();
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
      // 登录
      //  this.post("/smUser/login", {
      //           userCode:"02114C1405",
      //           loginPassword:"111111"
      //         }).then(res => {
      //           console.log(res);
      //           console.log(res.data)
      //         });
// 父菜单
      this.post("/productArchive/getProductArchiveParentList", {
        // id:"bb30607c-b5aa-4915-9474-460e099a33e8",
        applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",
      }).then(res => {
        // console.log(res);
        // console.log(res.data)
        this.ListParent = res.data
      });

      // 子菜单栏
      // this.post("/productArchive/getProductArchiveChildList", {
      //   applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",
      //   pid: "9c3a2556-4111-42c4-aa78-0034866cf041"
      // }).then(res => {
      //   console.log(res);
      //   // console.log(res.data)
      //   // this.ListParent=res.data
      // });
      // 图片
      //  this.post("/internalMatch/getInternalMatchCustName", {
      //   applyId:"e0b51098-b24d-4211-8ae4-f08f657d7886",
      //   pid:"9c3a2556-4111-42c4-aa78-0034866cf041"
      // }).then(res => {
      //   console.log(res);
      //   console.log(res.data)
      //   this.ListParent=res.data
      // });


      //     if (getComputedStyle(this.$refs.Big_pic_ref[0], false).width > getComputedStyle(this.$refs.Big_pic_ref[0], //判断宽度>高度  按宽度100%显示
      //     false).height) { // 点击切换图片时，让显示的大图宽高度重新为100%。 作用 ：避免点击放大缩小之后，切换图片会保留上一张图片缩放的大小比例
      //   this.$refs.Big_pic_ref[0].style.width = "100%";//calc( 100% - 202px)
      //   console.log("默认大图css样式if width >>>>>>>>>>> height" + this.$refs.Big_pic_ref[0].style.width)
      // } else {
      //   this.$refs.Big_pic_ref[0].style.height = "100%";
      //   console.log("默认大图css样式else  width <<<<<<  height")
      //   console.log(this.$refs.Big_pic_ref[0])
      //   console.log(this.$refs.Big_pic_ref[0].style.height)
      // }
    }
  }

</script>

<style scope>
  /* public */

  .small_pic_close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  /* 左侧折叠面板 */
  /* 折叠面板上面的四个 th 表头 */

  .list_title {
    line-height: 27px;
    font-weight: bold;
  }

  .list_title span,
  .list_title_div p span {
    display: inline-block;
    border: 1px solid #e6ebf5;
    text-align: center;
  }

  .list_title span:nth-of-type(1) {
    width: 30%;
  }

  .list_title span:nth-of-type(2) {
    width: 20%;
    border-right: none;
    border-left: none;
  }

  .list_title span:nth-of-type(3) {
    width: 20%;
  }

  .list_title span:nth-of-type(4) {
    width: 30%;
    border-left: none;
  }
  /* 图片功能按钮 */

  .position_and_size {
    position: absolute;
    font-size: 30px;
    z-index: 10;
  }

  .icon_pre {
    left: 20px;
    top: 50%;
  }

  .icon_next {
    right: 20px;
    top: 50%;
  }

  .icon_larger {
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
  }
  /* private */

  .CompareShow {
    position: relative;
    /* height: 99vh; */
    background: red;
  }

  .AudioVisual_List,
  .AudioVisual_Img {
    position: absolute;
    height: 86vh;
    overflow: auto;
  }

  .AudioVisual_Img {
    width: calc( 100% - 200px);
    left: 200px;
    background: yellowgreen;
    /* background: red; */
  }

  .AudioVisual_List {
    width: 200px;
    /* background: pink; */
    border: 1px solid black;
    left: 0;
    z-index: 4;
  }

  .list_title_div p span:nth-of-type(1) {
    width: 30%;
    border-top: none;
  }

  .list_title_div p span:nth-of-type(2) {
    width: 20%;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  .list_title_div p span:nth-of-type(3) {
    width: 20%;
    border-top: none;
    border-right: none;
  }

  .list_title_div p span:nth-of-type(4) {
    border-top: none;
    width: 30%;
  }



  .Small_pic_div {
    border: 1px solid black;
    background: #894837;
    overflow: auto;
    /* position: fixed; */
    position: absolute;
    /* left: 0; */
    /* top: 0; */
    /* right: 0; */
    /* bottom: 30px; */
    width: 300px;
    height: 500px;
    z-index: 20;
  }

  .Small_pic {
    width: 30%;
    margin: 0 1%;
  }

</style>
