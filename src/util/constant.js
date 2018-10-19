// 一些全局公用变量

var appConstant = {};

// url 配置
var host = location.hostname,

  port = 80,
  developmentEnv = "coderiskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn", // 生产环境
  press = "ycriskmgt.nuoyuan.com.cn"; // 压测环境
if (host === productionEnv) {
  host = productionEnv;
} else if (host === releaseEnv) {
  host = releaseEnv;
} else if (host === testEnv) {
  host = testEnv;
  // host = '10.1.26.203';
  // port= 20716;
} else if (host === press) {
  host = press;
} else if (host === developmentEnv) {
  // host=developmentEnv;
  host = '10.1.26.203';
  port= 20716;
} else {
  host = testEnv;
  // host = '10.1.26.203';
  // port= 20716;
}

appConstant.baseUrl_common = "http://" + host + (80 === port ? '' : (':' + port)) + "/riskManagement";
//任务管理-产品名称接口
appConstant.path = "http://" + host + (80 === port ? '' : (':' + port));
// 工作流接口
appConstant.baseUrl_common2 = "http://" + host + "/bpm-service/";

// 用户系统接口
appConstant.baseUrl_user = "http://" + host + "/";


export default appConstant
