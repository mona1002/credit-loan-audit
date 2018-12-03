import axios from 'axios'
import router from '../router/index'
import appConstant from './constant'
import platforUrl from './constantUser'
/*axios.defaults.timeout = 5000;*/
//数据接口
axios.defaults.baseURL = appConstant.baseUrl_common;
//  axios.defaults.baseURL = 'http://10.1.26.203:20716/riskManagement';
//  axios.defaults.baseURL = 'http://coderiskmgt.nuoyuan.com.cn:20717/remote';
//  axios.defaults.baseURL = 'http://10.1.26.65:8090/interface/api/v1/';  //木接口地址
//  axios.defaults.baseURL = 'http://10.1.26.17:8080/riskManagement';//俊波本地地址
//  axios.defaults.baseURL = 'http://10.1.26.47:8080/riskManagement';//沿海本地地址
// axios.defaults.baseURL = 'http://10.1.26.27:8080/riskManagement';//宝来本地地址
axios.defaults.withCredentials = true;
axios.interceptors.response.use(response => {
  if (response.data && response.data.statusCode == 900) {
    window.location.href = platforUrl.path + "#/";
  };
  return response;
}, error => {
  return Promise.reject(error);
});

export default {
  install(Vue, options) {
    Vue.prototype.get = function (url, params = {}) {
        return new Promise((resolve, reject) => {
          axios.get(url, {
            params: params
          }).then(response => {
            resolve(response.data);
          }).catch(err => {
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
            .catch((error) => {})
        })
      },
      Vue.prototype.Delete = function (url, data = {}) {
        return new Promise((resolve, reject) => {
          axios.delete(url, data)
            .then(response => {
              resolve(response.data);
            }, err => {
              reject(err);
            })
            .catch((error) => {})
        })
      }
  }
}
