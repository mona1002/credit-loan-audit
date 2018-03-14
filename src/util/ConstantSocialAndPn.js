// 一些全局公用变量

var appConstantSP = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "testriskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn"; // 生产环境
  
if (host === productionEnv) {
  host = "http://nyph-credit.nuoyuan.com.cn/ptopCredit/";
} else if (host === releaseEnv) {
  host = "http://120.26.131.205:8081/ptopCredit/";
} else if (host === testEnv) {
  host = "http://10.1.26.6:8080/ptopCredit/rm";
  // host="http://10.1.26.10:8080/baseCredit/rm" //本地
  
} else {
  host = "http://10.1.26.6:8080/ptopCredit/rm";
  // host="http://10.1.26.10:8080/baseCredit/rm"//本地
}
appConstantSP.BaseUrl=host;

export default appConstantSP.BaseUrl
