// 一些全局公用变量

var ProductConstant = {};

// url 配置
var host = location.hostname,
  port = 80,
  // developmentEnv = "remote/product/getProductForUser", // 开发环境
  developmentEnv = "testriskmgt.nuoyuan.com.cn", // 开发环境
  testEnv = "testriskmgt.nuoyuan.com.cn", // 测试环境
  releaseEnv = "preriskmgt.nuoyuan.com.cn", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn"; // 生产环境
if (host === productionEnv) {
  host = "http://10.1.26.200:20717/remote/product/getProductForUser";
} else if (host === releaseEnv) {
  host = "http://10.1.26.200:20717/remote/product/getProductForUser";
} else if (host === testEnv) {
  host = "http://10.1.26.200:20717/remote/product/getProductForUser";
  //port = 20716;
} else {
  host = "http://10.1.26.200:20717/remote/product/getProductForUser";
  // host = testEnv;// 开发 改测试环境接口
  // port = 20717;
}

// ProductConstant.baseUrl= "http://" + host + (80 === port ? '' : (':' + port)) + "/base";
ProductConstant.baseUrl= host;

export default ProductConstant.baseUrl
