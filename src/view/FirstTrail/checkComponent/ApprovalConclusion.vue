<template>
  <div id="AudioVisual">
    <h2> 影音资料</h2>
    <div>
      <div class="AVLeft" ref="AuVleft" @mouseenter.stop="mouseEnter">
        <!--  @mouseleave.stop="mouseOut" -->
        <p>
          <span>申请信息</span>
          <span>页数</span>
        </p>
        <!-- 手风琴 折叠菜单 -->
        <button @click="hid">隐藏</button>
        <!-- 点击隐藏 右侧列表 按钮 -->
        <el-collapse v-model="activeNames">
          <!-- @change="handleChange" -->
          <el-collapse-item title="申请信息" name="1">
            <div @click="AVtab(1)">申请信息表</div>
          </el-collapse-item>
          <el-collapse-item title="身份证明" name="2">
            <div @click="AVtab(2)">证明</div>
            <div @click="AVtab(3)">不证明</div>
          </el-collapse-item>
          <el-collapse-item title="信用报告" name="3">
            <div>ajflk d </div>
          </el-collapse-item>
          <el-collapse-item title="工作证明" name="4">
            <div>dasf ads </div>
          </el-collapse-item>
        </el-collapse>
        <!-- 折叠菜单结束 -->
      </div>
      <div class=" AVRight" ref="AuVright">
        <!-- 申请信息表 -->
        <div v-if=" this.ind==1">
          <h2>申请信息表格</h2>
          <!-- 大图片 div -->
          <div class="AVRight_big_pic">
            <!-- <img src="../../static/imgs/ChMkJ1jCIAqIEHL7AAEGb1rHtwkAAan9wPwOlkAAQaH376.jpg" @mouseover="" ref="big_pic" /> -->
            <img v-for="(val,key) in picData.items" :src="val.pic" v-if="key==smallPicInd" ref="big_pic" />
            <!-- 大图片上的按钮部分 -->
            <p class="btn_Wrap">
              <span class=" preBtn " @click="pre">上一页</span>
              <span class=" nextBtn " @click="next">下一页</span>
              <span class=" largeBtn " @click="larger">放大</span>
              <span class=" smallBtn " @click="smaller">缩小</span>
              <span class=" clockBtn " @click="clockWise">顺时针旋转</span>
              <span class=" antiClockBtn " @click="antiClockWise">逆时针旋转</span>
            </p>
          </div>
          <!-- 小图片 div -->
          <div class="AVRight_small_pic">
            <img class="small_pic_size" v-for="(val,index) in picData.items" :src="val.pic" v-if="" @click="smallPic($event,index)" ref="small_pic"
            />
          </div>
        </div>
        <!-- 身份证明 ===证明  -->
        <div v-if=" this.ind==2">
          <h2>身份证明</h2>
          <img src="../../static/imgs/20170512114059421.png" />
        </div>
        <!-- 身份证明 ====不证明  -->
        <div v-if=" this.ind==3">
          <h2>不证明</h2>
          <img src="../../static/imgs/20170512114059421.png" />
        </div>
        <!-- 未完待续... -->
        <div v-if="">
          <h2> </h2>
          <!-- <img :src=""> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        ind: "1",
        // imgSrc:"",
        picData: "",
        smallPicInd: 0,
      };
    },
    mounted() {
      // 鼠标点击隐藏，放上去显示的时候 解开。 放上去显示 mouseOUt 隐藏的时候  注释掉
      this.$refs.AuVright.style.width = document.documentElement.clientWidth - 200 + "px";
      // 发送get请求
      this.axios.get('../../static/json/imgData.json')
        //  .then(function (response) {
        //   console.info(response.data);
        //   console.log(this)
        //   // this.$set(this,picData,response.data)
        //   // console.log(this.picData)
        // })
        .then((response) => {
          console.info(response.data);
          this.picData = response.data.data;
          console.log(this.picData)
        })
      // .catch(function(res){
      //   console.log(res)
      // }) ;
      // ev各事件 及 各宽度
      //   console.log("ev.clientX==" + ev.clientX + ",ev.clientWidth==" + ev.clientWidth + ",body.clientWidth==" +
      //     document.body.clientWidth + ",document.documentElement.clientWidth==" + document.documentElement.clientWidth +
      //     ",window.innerWidth==" + window.innerWidth)
      //-------------------------滚轮事件---------------------------------------------
      document.body.onmousewheel = (event) => { // 非 Firefox 浏览器
        event = event || window.event;
        // console.dir(event);
        if (event.wheelDelta < 0) { // 放大
          this.$refs.big_pic[0].style.height = parseFloat(getComputedStyle(this.$refs.big_pic[0], false).height) +
            100 + "px";
        } else { //  缩小
          this.$refs.big_pic[0].style.height = parseFloat(getComputedStyle(this.$refs.big_pic[0], false).height) -
            100 + "px";
        }
        console.log(event.wheelDelta)
      };

      document.body.addEventListener("DOMMouseScroll", (event)=> { // 兼容 Firefox 浏览器
        console.dir(event);
        console.log(event.detail)
        if (event.detail > 0) { // 放大
          this.$refs.big_pic[0].style.height = parseFloat(getComputedStyle(this.$refs.big_pic[0], false).height) +
            100 + "px";
        } else { //  缩小
          this.$refs.big_pic[0].style.height = parseFloat(getComputedStyle(this.$refs.big_pic[0], false).height) -
            100 + "px";
        }
      });
      // ------------------------------------------------------------------------------------------------
    },
    methods: {
      AVtab(id) {
        var ev = ev || event;
        this.ind = id;
      },
      mouseEnter() { //  移入显示 列表
        this.$refs.AuVleft.style.left = "0";
        this.$refs.AuVleft.style.width = "200px";
        this.$refs.AuVright.style.left = "200px";
        this.$refs.AuVright.style.width = document.documentElement.clientWidth - 200 + "px";
      },
      mouseOut() { // 移出 隐藏列表
        this.$refs.AuVleft.style.left = "-195px";
        this.$refs.AuVright.style.left = "5px";
        this.$refs.AuVright.style.width = window.innerWidth - 5 + "px";
      },
      hid() { // 点击 隐藏列表
        this.$refs.AuVleft.style.left = "-195px";
        this.$refs.AuVright.style.left = "5px";
        this.$refs.AuVright.style.width = document.documentElement.clientWidth - 5 + "px";
      },
      pre() {
        console.log("上一页")
        this.smallPicInd--;
        this.defaultBigPicCss(); // 点击切换图片时，让显示的大图高度重新为100%，不旋转。 作用 ：避免点击放大缩小之后，切换图片会保留上一张图片缩放的大小比例
        if (this.smallPicInd < 0) {
          console.log("我下标小于0了")
          this.smallPicInd = this.$refs.small_pic.length - 1;
        }
        this.changeSmallPicCss();
      },
      next() {
        console.log("下一页")
        this.smallPicInd++;
        this.defaultBigPicCss(); // 同上
        if (this.smallPicInd >= this.$refs.small_pic.length) {
          this.smallPicInd = 0;
        }
        this.changeSmallPicCss();
      },
      larger() {
        console.log("放大")
        this.$refs.big_pic[0].style.height = parseFloat(getComputedStyle(this.$refs.big_pic[0], false).height) +
          100 + "px";
      },
      smaller() {
        console.log("缩小")
        this.$refs.big_pic[0].style.height = parseFloat(getComputedStyle(this.$refs.big_pic[0], false).height) -
          100 + "px";
      },
      clockWise() {
        console.log("顺时针");
        // console.log(this.$refs.big_pic[0].style);
        // this.$refs.big_pic[0].style.transform += "rotate(90deg)"; // 输出结果为 ： rotate(90deg) rotate(90deg) rotate(90deg) rotate(90deg)   每次加一个 rotate(90deg)
        if (this.$refs.big_pic[0].style.transform == "") { // 输出结果为： rotate(900deg) 每次加 90度
          this.$refs.big_pic[0].style.transform += "rotate(90deg)";
        } else {
          this.$refs.big_pic[0].style.transform = this.$refs.big_pic[0].style.transform.slice(0, 7) + (parseFloat(this.$refs
            .big_pic[0]
            .style.transform.slice(7, -4)) + 90) + this.$refs.big_pic[0].style.transform.slice(-4);
        }
      },
      antiClockWise() {
        console.log("逆时针")
        // this.$refs.big_pic[0].style.transform += "rotate(-90deg)";  // 同上
        if (this.$refs.big_pic[0].style.transform == "") {
          this.$refs.big_pic[0].style.transform += "rotate(-90deg)";
        } else {
          this.$refs.big_pic[0].style.transform = this.$refs.big_pic[0].style.transform.slice(0, 7) + (parseFloat(this.$refs
            .big_pic[0]
            .style.transform.slice(7, -4)) - 90) + this.$refs.big_pic[0].style.transform.slice(-4);
        }
      },
      smallPic(ev, ind) {
        console.log(ind);
        var ev = ev || event;
        this.smallPicInd = ind; //  选中图片的下标赋值给data里面的值， 以便大图片根据这个下标值 显示对应下标的图片
        this.defaultBigPicCss();
        this.changeSmallPicCss();
      },
      defaultBigPicCss() { // （重复代码）通用方法 ：  大图 --------------- 恢复默认高度、不旋转
        this.$refs.big_pic[0].style.height = "100%"; // 点击切换图片时，让显示的大图高度重新为100%。 作用 ：避免点击放大缩小之后，切换图片会保留上一张图片缩放的大小比例
        this.$refs.big_pic[0].style.transform = "rotate(0deg)";
      },
      changeSmallPicCss() { // （重复代码）通用方法： 遍历所有小图片，恢复默认（初始时）设置的css样式--------- click时改变显示大图和选中小图的 高度 + 透明度
        for (var i = 0; i < this.$refs.small_pic.length; i++) {
          // this.$refs.small_pic[i].style.width="100px"; //设置所有图片默认高度
          this.$refs.small_pic[i].style.opacity = 1; //设置所有图片默认透明度
        }
        // this.$refs.small_pic[this.smallPicInd].style.width="100px";  //设置显示图片改变后的高度        
        this.$refs.small_pic[this.smallPicInd].style.opacity = 0.8; //设置显示图片改变后的透明度       
      },
      handleChange() {
        console.log("手风琴自带")

      },
    },

  }

</script>
<style scoped>
  * {
    box-sizing: border-box;
  }

  .AVLeft,
  .AVRight {
    float: left;
    height: 800px;
    border: 1px solid red;
    position: absolute;
  }
  /* 点击隐藏，放上去显示时 CSS样式 */

  .AVLeft {
    background: lightblue;
    width: 200px;
    left: 0;
    z-index: 4;
  }

  .AVRight {
    background: yellowgreen;
    left: 200px;
  }
  /* 放上去显示，移开隐藏时  CSS样式 */
  /* .AVLeft {
    width: 10%;
    background: lightblue;
    left: -9.5%;
    z-index: 4;
  }

  .AVRight {
    background: yellowgreen;
    width: 99.5%;
    left: 0.5%;
  } */
  /* 影音资料 大图片 CSS样式 */

  .AVRight .AVRight_big_pic {
    height: 300px;
    background: orange;
    border: 1px solid black;
    overflow: auto;
    position: relative;
  }
  .AVRight .AVRight_big_pic img {
    display: block;
    height: 100%;
    background: purple;
    border: 3px solid black;

    /* height:300px; */
  }
  /* 影音资料 小图片 css样式 */

  .small_pic_size {
    width: 100px;
    border: 1px solid black;
    margin: 2px;
    /* box-shadow:4px; */
  }

  .small_pic_size:first-of-type {
    opacity: 0.8;
  }
  /* img 上 功能按钮 css样式 */

  .btn_Wrap {
    position: absolute;
    left: 0;
    top: 0;
    /* right:0;    
    bottom:0; */
    /* width:100%;
    height:100%; */
    width: 300px;
    height: 300px;
    z-index: 6;
    background: silver;
    opacity: 0;
  }

  .btn_Wrap:hover {
    opacity: 0.6;
  }

  .btn_Wrap span {
    display: inline-block;
    background: pink;
    border: 1px solid green;
    border-radius: 4px;
    padding: 2px;
    margin: 10px 2px;
    position: absolute;
    /* z-index: 5; */
  }

  .preBtn {
    left: 0;
    top: 120px;
  }

  .nextBtn {
    left: 230px;
    top: 120px;
  }

  .largeBtn {
    left: 0;
    top: 0;
  }

  .smallBtn {
    left: 0;
    top: 30px;
  }

  .clockBtn {
    left: 200px;
    top: 0;
  }

  .antiClockBtn {
    left: 200px;
    top: 30px;
  }

</style>
