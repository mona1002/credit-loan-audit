import axios from 'axios' 
import router from'../router/index'
import appConstant from './constant'
// axios 配置
axios.defaults.timeout = 5000; 
//数据接口
 axios.defaults.baseURL =appConstant.baseUrl_common;


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
