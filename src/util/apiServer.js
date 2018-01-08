import axios from 'axios'

function apiService(baseUrl) {
  return {
    build: function (oUrl) {
      return Object.keys(oUrl).reduce(function (o, name) {
        var url = oUrl[name], method = axios.post;
        if (~url.indexOf("::")) {
          var ar = url.split('::');
          url = ar[1];
          method = ar[0].toLowerCase() === 'get' ? axios.get : axios.post;
        }
        o[name] = function (postData) {
          return method.bind(axios)(baseUrl + url, postData);
        };
        return o;
      }, {})
    }
  }
}

export default apiService