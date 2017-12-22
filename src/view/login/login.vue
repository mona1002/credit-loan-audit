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
            <div class="user-class login-font">用户名</div>
            <!-- <span class="user-icon" model="userCode"></span> -->
            <el-input prefix-icon="el-icon-user" class="user-input" v-model="userCode" placeholder="请输入内容">
              <!-- <i slot="prefix" class="el-input__icon el-icon-date"></i> -->
            </el-input>
            <div class="password-class login-font">密码</div>
            <span class="password-icon"></span>
            <el-input type="password" prefix-icon="el-icon-password" class="password-input" v-model="loginPassword" placeholder="请输入内容">
            </el-input>
            <el-button class="submit-button" type="primary" @click="loginFn()">登 录</el-button>
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
      userCode: "ddyy",
      loginPassword: "111111"
    };
  },
  methods: {
    loginFn() {
      console.log('login ')
      localStorage.removeItem('isFull')
      this.post("/smUser/login", {
        userCode: this.userCode,
        password: this.loginPassword
      }).then(res => {
        console.log(res);
        console.log(res.statusCode)
        if (res.statusCode != '200') {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
          return;
        }
        if (res.statusCode == '200') {


          // uesrCode 用户编码
          this.userCode = res.data.userCode;
          // orgCode 机构编码
          this.orgCode = res.data.orgCode;
          console.log(this.userCode, this.orgCode);

          console.log(JSON.stringify(res.data))

          localStorage.setItem("userInf", JSON.stringify(res.data));
          localStorage.setItem("userCode", JSON.stringify(res.data.userCode));
          
          localStorage.setItem("orgCode", JSON.stringify(res.data.orgCode));
          console.log(res.data);

          const userCode = this.userCode;
          const orgCode = this.orgCode;
          // 
          // this.$router.push({ name: 'workbench', params: { userCode: this.userCode, orgCode: this.orgCode } });

          // this.$router.push({ path: 'workbench', query: { userCode: this.userCode, orgCode: this.orgCode } });
          this.$router.push({ path: 'workbench'});
        }

      });



      // this.$router.push({ path: '/login', query: { stage: stage } });

      // /creTelInfo/queryTels
    }
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

.login .container {
  width: 100%;
  height: 535px;
}


/* 左块 区域 */

.login .bg-left {
  width: 446px;
  height: 100%;
  background: url("./images/bg-2.png") no-repeat;
  float: left;
  margin-top: 50px;
}


/* 右块 区域 */


/* 右侧 包含 Log*/

.login .content {
  width: 530px;
  height: 530px;
  float: left;
  margin-left: 100px;
}


/* log */

.login .log {
  width: 100%;
  height: 56px;
  margin-bottom: 30px;
  /*background: url("./images/log-1.png") no-repeat 43px;*/
}


/* log-icon */


/* 自定义的 icon */

.login .log-icon {
  position: relative;
  top: 5px;
  z-index: 99;
  display: inline-block;
  width: 145px;
  height: 100%;
  background: url("./images/log-1.png") no-repeat 43px;
}

.login .log-title {
  width: 385px;
  height: 54px;
  float: right;
  text-align: center;
  border-left: 1px solid #fff;
}

.login .log-title-first {
  font-size: 30px;
  vertical-align: middle;
  color: #fff;
  line-height: 30px;
  text-align: left;
  padding-left: 30px;
  letter-spacing: 4px;
  font: '微软雅黑', tahoma, arial, '\5b8b\4f53';
}

.login .log-title-second {
  font-size: 16px;
  color: #fff;
  text-align: left;
  padding-left: 30px;
  line-height: 30px;
  font: '宋体', tahoma, arial, '\5b8b\4f53';
  font-weight: lighter;
}


/* 表单 */

.login .form-class {
  padding: 40px;
  padding-top: 50px;
  border-radius: 20px;
  background: #fff;
  height: 443px;
  width: 530px;
}


/* 用户名 */

.login .user-class {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  text-indent: 10px;
}


/* 用户名 输入框 */

.login .user-input {
  outline: 0px;
  border-radius: 10px;
  border: 0px;
  margin-bottom: 30px;
  width: 100%;
  height: 45px;
}

.login .password-class {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  text-indent: 10px;
}

.login .password-input {
  width: 100%;
  height: 45px;
  margin-bottom: 75px;
}

.login .submit-button {
  width: 100%;
  height: 60px;
  font-size: 24px;
  border-radius: 10px;
}

.login .el-icon-user {
  /* position: relative;
  top: 5px;
  z-index: 99; */
  background: url("./images/icon-user.png") 5px no-repeat;
  /* width: 30px;
  height: 30px;
  display: inline-block; */
}

.login .el-icon-password {
  /* position: relative;
  top: 35px;
  z-index: 99; */
  background: url("./images/icon-password.png") 5px no-repeat;
  /* width: 20px;
  height: 20px;
  display: inline-block; */
}

.login .el-input__inner {
  text-indent: 10px;
  border-radius: 8px;
  border: 3px solid rgb(229, 229, 229);
  height: 43px;
  line-height: 43px;
  font-size: 16px; 
}

.login .el-input__icon {
  line-height: 45px;
}

.login .el-input__prefix {
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

.login .el-button--primary{
  background-color: #409eff;
  border-color: #409eff;
}
/* 用户名 / 密码  */
.login .login-font{
  color: rgb( 0, 161, 255 );
  font-size: 16px;
}

</style>
