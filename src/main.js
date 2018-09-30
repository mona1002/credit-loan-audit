// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
import store from './store/store'
import qs from 'qs'
import http from '@/util/http'
import validation from '@/util/validation'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import 'vue-pdf-shower/lib/dist/pdf.js';
import base from './util/base'
PDFJS.workerSrc = 'vue-pdf-shower/lib/dist/pdf.worker.js'
PDFJS.cMapUrl = '/static/web/cmaps/'
PDFJS.cMapPacked = true;
Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(http)
Vue.use(base)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
// 定义全局 过滤器
// 日期过滤器
// Vue.filter('dateFilter', function (value) {
//   if (!value) return ''
//   return String(new Date(value).getFullYear()) + '-' + String(new Date(value).getMonth() + 1) + '-' + String(new Date(value).getDate());

// })
// 日期过滤器 value:时间戳，sec：是否显示时分秒，twoDigitM月份不足两位是否补0，twoDigitD：天数是否补0（同上）
Vue.filter('dateFilter', function (value, sec = false, twoDigitM = false, twoDigitD = false) {
  if (!value) return ''
  typeof (value) == Number ? '' : value = value.toString() * 1;
  let time = new Date(value),
    year = time.getFullYear(),
    month = time.getMonth() + 1,
    day = time.getDate(),
    seconds = time.toString().split(' ')[4],
    Time = '';
  if (twoDigitM) {
    month < 10 && month > 0 ? month = '0' + month : '';
  }
  if (twoDigitD) {
    day < 10 && day > 0 ? day = '0' + day : '';
  }
  Time = year + '-' + month + '-' + day;
  sec ? Time = Time + ' ' + seconds : '';
  return Time;
})
// 信审审批 - 审批 计算倍数
Vue.filter('formatValue', function (value) {
  if (!value) return ''
  return Number(value) > 0 ? Math.round(Number(value) * 10000) / 100 + '%' : '0.00%';
})
// 金额过滤
Vue.filter('formatMoney', function (value) {
  if (value == 0) return 0;
  if (!value) return '';
  return value.toLocaleString();
})
// 精度问题
Vue.filter('formatAppmult', function (value) {
  if (!value) return '';
  return Math.ceil(Number(value));
})
Vue.filter('percent', function (value) {
  if (!value) return '';
  return value !== '' ? value + '%' : '';
})
// 证件号码*
Vue.filter('cerCodeStar', function (value) {
  if (!value) return '';
  value = value.replace(/(\w{6})\w*(\w{4})/, '$1********$2');
  return value;
})
// 手机号码*
Vue.filter('MobileStar', function (value) {
  if (!value) return '';
  value = value.replace(/(\w{7})\w*/, '$1****');
  return value;
})

Vue.filter('NumRound', function (value, num) {
  if (value == 0) return 0;
  if (!value) return '';
  value = parseFloat(value).toFixed(num);
  return value
})
// 0 未逾期 1 逾期
Vue.filter('overdue', function (value) {
  if (value == 0) return '未逾期';
  if (value == 1) return '逾期';
})
// 0 未逾期 1 逾期 -多个
Vue.filter('overduemMulti', function (value) {
  if (!value) return '';
  if (value.length > 0) return value.toString().replace(/[0]/g, '未逾期').replace(/[1]/g, '逾期');
})
// false 否 true 是
Vue.filter('YesOrNo', function (value) {
  if (value == true) return '是';
  if (value == false) return '否';
})
// *100 之后，变百分号留两位小数
Vue.filter("percent100", function (value) {
  if (value == 0) return '0.00%';
  if (!value) return '';
  return (value * 100).toFixed(2) + '%';
})
