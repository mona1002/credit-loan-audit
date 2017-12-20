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
// import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
// import zh from 'vee-validate/riskWeb/locale/zh_CN'
import messages from './assets/js/zh_CN';

Validator.updateDictionary({
    zh_CN: {
        messages
    }
});

const config = {
  locale: 'zh_CN', 
  strict: true,
  delay: 1000, 

};

Vue.use(VeeValidate, config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 定义全局 过滤器
// 日期过滤器
Vue.filter('dateFilter',function(value){
	if(!value) return ''
	console.log(value);
	// console.log(new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0])
	return new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0]
})