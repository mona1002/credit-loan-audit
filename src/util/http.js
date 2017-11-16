import axios from 'axios' 
// axios 配置
axios.defaults.timeout = 5000; 
//数据接口
 axios.defaults.baseURL = 'http://localhost:8080/api/v1';

axios.defaults.withCredentials=true;

axios.interceptors.response.use(
  response => {
    if(response.data.status == 900) {  
      router.push({
        path: '/login',
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
                console.log("我是post方法")
                    resolve(response.data);
                  }, err => {
                    reject(err);
                  })
              })
      }

    }
  }
