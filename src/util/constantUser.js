// 一些全局公用变量

var appConstantUser = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "testriskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn"; // 生产环境

if (host === productionEnv) {
  host = "riskmgt.nuoyuan.com.cn";
} else if (host === releaseEnv) {
  host = "http://preplatform.nuoyuan.com.cn/";
} else if (host === testEnv) {
  host = "http://testplatform.nuoyuan.com.cn/";
} else {
  host = "http://testplatform.nuoyuan.com.cn/";

}

appConstantUser.path=host;

export default appConstantUser.path

