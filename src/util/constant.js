// 一些全局公用变量

var appConstant = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "10.1.26.203", // 开发环境
  // developmentEnv = "10.1.26.50", // 刘礼飞本地环境
  testEnv = "10.1.26.200", // 测试环境
  releaseEnv = "10.1.26.200", // 准生产环境
  productionEnv = "10.1.26.200"; // 生产环境

if (host === productionEnv) {
  host = productionEnv;
} else if (host === releaseEnv) {
  host = releaseEnv;
} else if (host === testEnv) {
  host = testEnv;
  port = 20716;
} else {
  host = developmentEnv;
  port = 20716;
  // port = 8080;
}

// appConstant.baseUrl_user = "http://" + host + (80 === port ? '' : (':' + port)) + "/";
appConstant.baseUrl_common = "http://" + host + (80 === port ? '' : (':' + port)) + "/riskManagement";

export default appConstant