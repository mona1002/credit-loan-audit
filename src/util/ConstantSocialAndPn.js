// 一些全局公用变量

var appConstantSP = {};

// url 配置
var host = location.hostname,
  // port = 80,
  // developmentEnv = "http://10.1.26.10:8080/baseCredit/rm", // 开发环境
  // testEnv = "http://10.1.26.10:8080/baseCredit/rm", // 测试环境
  developmentEnv = "http://10.1.26.6:8080/ptopCredit/rm", // 开发环境
  testEnv = "http://10.1.26.6:8080/ptopCredit/rm", // 测试环境
  releaseEnv = "http://120.26.131.205:8081/ptopCredit/", // 准生产环境
  productionEnv = "http://nyph-credit.nuoyuan.com.cn/ptopCredit/"; // 生产环境

if (host === productionEnv) {
  host = productionEnv;
} else if (host === releaseEnv) {
  host = releaseEnv;
} else if (host === testEnv) {
  host = testEnv;
} else {
  host = developmentEnv;
}
appConstantSP.BaseUrl=host;

export default appConstantSP.BaseUrl
