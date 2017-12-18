// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
import qs from 'qs'
import http from '@/util/http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(http)

// 设置options 不进行发送option 验证  ------错误用法？
// Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

// 定义全局 过滤器
// 日期过滤器
Vue.filter('dateFilter', function(value) {
  if (!value) return ''
  console.log(value);
  // console.log(new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0])
  return new Date(value).toLocaleString().replace(/\//g, '-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0]
})

// 定义全局 过滤器
// 日期过滤器
Vue.filter('numbersTwo', function(num,cent,isThousand) {
    if (!num) return ''
    console.log(num);
    


    var num = num.toString().replace(/\$|\,/g, '');

    // 检查传入数值为数值类型
    if (isNaN(num))
      num = "0";

    // 获取符号(正/负数)
    let sign = (num == (num = Math.abs(num)));

    num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
    let cents = num % Math.pow(10, cent); // 求出小数位数值
    num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
    cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度

    // 补足小数位到指定的位数
    while (cents.length < cent)
      cents = "0" + cents;

    if (isThousand) {
      // 对整数部分进行千分位格式化.
      for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    if (cent > 0)
      return (((sign) ? '' : '-') + num + '.' + cents);
    else
      return (((sign) ? '' : '-') + num);
  })




