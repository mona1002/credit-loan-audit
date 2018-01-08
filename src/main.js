// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
// import store from './store/store'
import qs from 'qs'
import http from '@/util/http' 
import validation from '@/util/validation' 
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
Vue.filter('dateFilter',function(value){
	if(!value) return ''
	console.log(value);
	// console.log(new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0])
	return new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0]
})

// 加入 检测
var fundebug=require("fundebug-javascript");
fundebug.apikey="347f590e75f32983d0b6d5f1edbc193c12273337cf7bc082781ce64095c0eddb"

// vue2.2.0+ 提供的  errorHandler 
function formatComponentName(vm)
{
  if (vm.$root === vm) return 'root';

  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

}

Vue.config.errorHandler = function(err, vm, info)
{
  var componentName = formatComponentName(vm);
  var propsData = vm.$options && vm.$options.propsData;

  fundebug.notifyError(err,
  {
      metaData:
      {
          componentName: componentName,
          propsData: propsData,
          info: info
      }
   });
};
