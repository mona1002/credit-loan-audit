// 一些全局公用变量

var appConstantSP = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "testriskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境diao
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn", // 生产环境
  postfix = '',
  testU='';
if (host === productionEnv) {
  host = "nyph-credit.nuoyuan.com.cn";
  postfix = '/ptopCredit/';
} else if (host === releaseEnv) {
<<<<<<< HEAD
  host = "http://120.26.131.205:8081/ptopCredit/rm";
=======
  host = "120.26.131.205:8081";
  postfix = '/ptopCredit/';
>>>>>>> dev
} else if (host === testEnv) {
  host = "10.1.26.6:8080";
  testU="http://10.1.26.10:8080/baseCredit/rm" //本地
  postfix = '/ptopCredit/rm';
} else {
  host = "10.1.26.6:8080";
  testU="http://10.1.26.10:8080/baseCredit/rm"//本地
  postfix = '/ptopCredit/rm';
}

appConstantSP.BaseUrl = "http://" + host + postfix;
appConstantSP.imgBaseUrl = "http://" + host;
appConstantSP.testUrl=testU;
export default appConstantSP
