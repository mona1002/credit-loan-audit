// 一些全局公用变量

var appConstantUser = {};

// url 配置
var host = location.hostname,
  gate,
  port = 80,
  developmentEnv = "coderiskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn", // 生产环境
  press = "ycriskmgt.nuoyuan.com.cn"; // 压测环境

if (host === productionEnv) {
  host = "http://platform.nuoyuan.com.cn/";
} else if (host === releaseEnv) {
  host = "http://preplatform.nuoyuan.com.cn/";
} else if (host === testEnv) {
  host = "http://testplatform.nuoyuan.com.cn/";
} else if (host === press) {
  host = "http://ycplatform.nuoyuan.com.cn/";
} else if (host === developmentEnv) {
  host = "http://codeplatform.nuoyuan.com.cn/";
  gate = 'http://test-gateway.nuoyuan.com.cn/';
} else {
  host = "http://testplatform.nuoyuan.com.cn/";
  host = "http://codeplatform.nuoyuan.com.cn/";
  gate = 'http://test-gateway.nuoyuan.com.cn/';
}

appConstantUser.path = host;
appConstantUser.gate = gate + 'users/';
export default appConstantUser
