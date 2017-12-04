import axios from 'axios' 
import router from'../router/index'
// axios 配置
axios.defaults.timeout = 5000; 
//数据接口
 axios.defaults.baseURL = 'http://10.1.26.200:20716/riskManagement';
//  axios.defaults.baseURL = 'http://localhost:8080';
//  axios.defaults.baseURL = 'http://10.1.26.65:8090/interface/api/v1/';  //木接口地址
//  axios.defaults.baseURL = 'http://10.1.26.17:8080/riskManagement';//俊波本地地址
//  axios.defaults.baseURL = 'http://10.1.26.47:8080/riskManagement';//沿海本地地址

axios.defaults.withCredentials=true;

axios.interceptors.response.use(
  response => {
    if(response.data.statusCode == 900) {  
      router.push({
        path: '/',
        query: {redirect: router.currentRoute.fullPath} 
      })
    };
    return response;   
  },
  error => {
      return Promise.reject(error);
  });

axios.interceptors.request.use((config) => {
  if(config.url.indexOf("api") >= 0 ) { 
    config.url = config.url.replace('/api', "");
    config.baseURL = 'http://10.1.26.200/20717 ';
  }
  return config;
},(error) =>{
  return Promise.reject(error);
});

export default{
    install(Vue,options)
    {
      Vue.prototype.get = function (url, params = {}) {
        return new Promise((resolve, reject) => {
                axios.get(url, {
                  params: params
                })
                .then(response => {
                  resolve(response.data);
                })
                .catch(err => {
                  reject(err)
                })
              })
      },

      Vue.prototype.post = function (url, data = {}) {
        return new Promise((resolve, reject) => {
                axios.post(url, data)
                  .then(response => {
                    resolve(response.data);
                  }, err => {
                    reject(err);
                  })
            // .catch(err=>{
            //   reject(err)
            // })
              })
      }

    }
  }
