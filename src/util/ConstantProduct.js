// 一些全局公用变量

var ProductConstant = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "http://10.1.26.200:20717/remote/product/getProductForUser", // 开发环境
  testEnv = "http://10.1.26.200:20717/remote/product/getProductForUser", // 测试环境
  releaseEnv = "http://10.1.26.200:20717/remote/product/getProductForUser", // 准生产环境
  productionEnv = "http://10.1.26.200:20717/remote/product/getProductForUser"; // 生产环境

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

// ProductConstant.baseUrl= "http://" + host + (80 === port ? '' : (':' + port)) + "/base";
ProductConstant.baseUrl= host;

export default ProductConstant.baseUrl
