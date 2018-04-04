// 一些全局公用变量

var appConstantSP = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "testriskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境diao
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn", // 生产环境
  press = "ycriskmgt.nuoyuan.com.cn"; // 压测环境
  postfix = '',
  testU = '';
if (host === productionEnv) {
  host = "nyph-credit.nuoyuan.com.cn";
  postfix = '/ptopCredit/rm';
} else if (host === releaseEnv) {
  host = "120.26.131.205:8081";
  postfix = '/ptopCredit/rm';
} else if (host === testEnv) {
  host = "10.1.26.6:8080";
  testU = "http://10.1.26.10:8080/basePtopCredit/rm" //本地
  postfix = '/ptopCredit/rm';
} else if (host === press) {
  host = "10.20.20.38:8080";
  postfix = '/ptopCredit/rm';
} else {
  host = "10.1.26.6:8080";
  testU = "http://10.1.26.10:8080/basePtopCredit/rm" //本地
  postfix = '/ptopCredit/rm';
}

appConstantSP.BaseUrl = "http://" + host + postfix;
appConstantSP.imgBaseUrl = "http://" + host;
appConstantSP.testUrl = testU;
export default appConstantSP
