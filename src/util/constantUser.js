// 一些全局公用变量

var appConstantUser = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "http://testplatform.nuoyuan.com.cn/remote/user/getUserInfo", // 开发环境
  testEnv = "http://testplatform.nuoyuan.com.cn/remote/user/getUserInfo", // 测试环境
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
  host = developmentEnv;
  // host = testEnv;// 开发 改测试环境接口
  // port = 20717;
}

// appConstantUser.baseUrl_user = "http://" + host + (80 === port ? '' : (':' + port)) + "/";
// appConstantUser.baseUrl_common = "http://" + host + (80 === port ? '' : (':' + port)) + "/riskManagement";
// appConstantUser.path= "http://" + host + (80 === port ? '' : (':' + port));
appConstantUser.path=host;

// 工作流接口
// appConstantUser.baseUrl_common2 = "http://" + host + ":9480/bpm-service/";
// appConstantUser.baseUrl_common2 = "http://10.1.26.200:9480/bpm-service/";

// export default appConstantUser
export default appConstantUser.path

