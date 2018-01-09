// 一些全局公用变量

var appConstant = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "coderiskmgt.nuoyuan.com.cn", // 开发环境
  // developmentEnv = "codeplatform.nuoyuan.com.cn", // 开发环境-用户
  // developmentEnv = "10.1.26.50", // 刘礼飞本地环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境
  // testEnv = "coderiskmgt.nuoyuan.com.cn", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn"; // 生产环境

if (host === productionEnv) {
  host = productionEnv;
} else if (host === releaseEnv) {
  host = releaseEnv;
} else if (host === testEnv) {
  host = testEnv;
  //port = 20716;
} else {
  host = testEnv;
  // host = testEnv;// 开发 改测试环境接口
  // port = 20717;
}

// appConstant.baseUrl_user = "http://" + host + (80 === port ? '' : (':' + port)) + "/";
appConstant.baseUrl_common = "http://" + host + (80 === port ? '' : (':' + port)) + "/riskManagement";

// 工作流接口
// appConstant.baseUrl_common2 = "http://" + host + ":9480/bpm-service/";
appConstant.baseUrl_common2 = "http://10.1.26.200:9480/bpm-service/";

export default appConstant
