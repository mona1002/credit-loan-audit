// 一些全局公用变量

var appConstantSP = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "http://10.1.26.10:8080/baseCredit/rm", // 开发环境
  testEnv = "http://10.1.26.10:8080/baseCredit/rm", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn"; // 生产环境

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
