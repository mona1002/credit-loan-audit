<template>
  <div id="AudioVisual">
    <div class="AudioVisual_wrap">
      <!-- 左侧 折叠面板 -->
      <div class="AudioVisual_List" ref="AudioVisual_List_ref">
        <!-- 折叠面板title -->
        <button @click="hid" style="margin:0 0 0 130px;">隐藏</button>
        <button @click="showList">显示</button>
        <p>
          <span>影像名称</span>
          <span>页数</span>
        </p>
        <!-- 折叠面板-手风琴List -->
        <!--缩略图 对比 按钮  -->
        <el-button type="primary" @click="SmallpicAlert">缩略图</el-button>
        <el-button type="primary">对比</el-button>
      </div>
      <!-- 右侧 图片 -->

      <!-- 缩略图弹出层    不在右侧div里面，再 wrap 里面 -->
    

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        picData: "",
        smallPicInd: 0, // 未知
        SmallPicShow: false,
      }
    },
    methods: {
      hid() { //左侧 li 列表
        console.log("hid");
        this.$refs.AudioVisual_List_ref.style.left = "-175px";
        this.$refs.AudioVisual_Img_ref.style.left = "25px";
        // this.$refs.AudioVisual_Img_ref.style.width = document.documentElement.clientWidth - 25 + "px";
        this.$refs.AudioVisual_Img_ref.style.width = "calc( 100% - 25px)";
      },
      showList() { //左侧 li 列表
        this.$refs.AudioVisual_List_ref.style.left = "0";
        this.$refs.AudioVisual_List_ref.style.width = "200px";
        this.$refs.AudioVisual_Img_ref.style.left = "200px";
        this.$refs.AudioVisual_Img_ref.style.width = document.documentElement.clientWidth - 200 + "px";
      },

      SmallpicAlert() { //缩略图弹框 打开
        this.SmallPicShow = true;
      },
     
    },
    mounted() {
      this.get('../../../../static/json/img.json').then(response => { // axios 请求
        console.info(response.data.items);
        this.picData = response.data.items;

      });
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
    top: 30px;
  }

  .icon_smaller {
    left: 20px;
    top: 30px;
  }

  .icon_clockWise {
    left: 20px;
    top: 70px;
  }

  .icon_AclockWise {
    right: 20px;
    top: 70px;
  }
  /* private */

  .AudioVisual_wrap {
    position: relative;
  }

  .AudioVisual_List,
  .AudioVisual_Img {
    border: 1px solid red;
    position: absolute;
    height: 100vh;
    overflow: auto;
  }

  .AudioVisual_List {
    width: 200px;
    background: pink;
    left: 0;
    z-index: 4;
  }

  .AudioVisual_Img {
    width: calc( 100% - 200px);
    left: 200px;
    background: red;
  }

  .Small_pic_div {
    border: 1px solid black;
    background: #894837;
    overflow: auto;
    /* position: fixed; */
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    /* bottom: 30px; */
    /* width: 300px;
    height: 300px; */
    z-index: 20;
  }

  .Small_pic {
    width: 30%;
    margin: 0 1%;
  }

</style>
