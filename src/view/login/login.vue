<template>
  <!-- 大背景 -->
  <div class="bg">
    <div class="login">
      <div class="container">
        <div class="bg-left"></div>
        <div class="content">
          <div class="log">
            <div class="log-icon">
            </div>
            <div class="log-title">
              <div class="log-title-first">
                诺远风控管理系统
              </div>
              <div class="log-title-second">
                Nuoyuan Risk Management System
              </div>
            </div>
          </div>
          <div class="form-class">
            <div class="user-class">用户名</div>
            <span class="user-icon"></span>
            <el-input prefix-icon="el-icon-user" class="user-input" v-model="userName" placeholder="请输入内容">
              <!-- <i slot="prefix" class="el-input__icon el-icon-date"></i> -->
            </el-input>
            <div class="password-class">密码</div>
            <span class="password-icon"></span>
            <el-input type="password" prefix-icon="el-icon-password" class="password-input" v-model="password" placeholder="请输入内容">
            </el-input>
            <el-button class="submit-button" type="primary">登 录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  }
};

</script>
<style>
.bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #00a1ff, #42b1f2);
}



/* 1366 * 768 */

.login {
  min-width: 1080px;
  min-height: 530px;
  /*padding: 123px;*/
  /*background: linear-gradient(to right, #00a1ff, #42b1f2);*/
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -540px;
  margin-top: -265px;
}


.container {
  width: 100%;
  height: 535px;
}



/* 左块 区域 */

.bg-left {
  width: 446px;
  height: 100%;
  background: url("./images/bg-2.png") no-repeat;
  float: left;
  margin-top: 50px;
}



/* 右块 区域 */


/* 右侧 包含 Log*/

.content {
  width: 530px;
  height: 530px;
  float: left;
  margin-left: 100px;
}



/* log */

.log {
  width: 100%;
  height: 56px;
  margin-bottom: 30px;
  /*background: url("./images/log-1.png") no-repeat 43px;*/
}
/* log-icon */
/* 自定义的 icon */

.log-icon {
  position: relative;
  top: 5px;
  z-index: 99;
  display: inline-block;
  width: 145px;
  height: 100%;
  background: url("./images/log-1.png") no-repeat 43px;

}

.log-title {
  width: 385px;
  height: 54px;
  float: right;
  text-align: center;
}

.log-title-first {
  font-size: 30px;
  vertical-align: middle;
  color: #fff;
  line-height: 30px;
  text-align: left;
  padding-left: 30px;
  letter-spacing: 4px;
  font:  '微软雅黑', tahoma, arial, '\5b8b\4f53';
}

.log-title-second {
  font-size: 16px;
  color: #fff;
  text-align: left;
  padding-left: 30px;
  line-height: 30px;
  font:  '宋体', tahoma, arial, '\5b8b\4f53';
  font-weight: lighter;
}



/* 表单 */

.form-class {
  padding: 40px;
  padding-top: 50px;
  border-radius: 20px;
  background: #fff;
  height: 443px;
  width: 530px;
}



/* 用户名 */

.user-class {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  text-indent: 10px;
}



/* 用户名 输入框 */

.user-input {
  outline: 0px;
  border-radius: 10px;
  border: 0px;
  margin-bottom: 30px;
  width: 100%;
  height: 45px;
}

.password-class {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  text-indent: 10px;
}

.password-input {
  width: 100%;
  height: 45px;
  margin-bottom: 75px;
}

.submit-button {
  width: 100%;
  height: 60px;
  font-size: 24px;
}





.el-icon-user {
  /* position: relative;
  top: 5px;
  z-index: 99; */
  background: url("./images/icon-user.png") 5px no-repeat;
  /* width: 30px;
  height: 30px;
  display: inline-block; */
}

.el-icon-password {
  /* position: relative;
  top: 35px;
  z-index: 99; */
  background: url("./images/icon-password.png") 5px no-repeat;
  /* width: 20px;
  height: 20px;
  display: inline-block; */
}

.el-input__inner {
  text-indent: 10px;
  border-radius: 8px;
  border: 3px solid rgb(229,229,229);
  height: 45px;
  line-height: 45px;
}

.el-input__icon {
  line-height: 45px;
}

.el-input__prefix {
  width: 40px;
  height: 30px;
  top: 7px;
  left: 2px;
  /* left: 0px !important; */
}



/* .el-icon-user{
  width: 30px;
  height: 30px;
  background:red;
} */



</style>
