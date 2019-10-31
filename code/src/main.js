// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import store from './vuex/index.js';
//在这导入bootstrap和jquery
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;

//路由守卫   用不到登录 先不加呢
/* router.beforeEach((to,from,next)=>{
  let user = JSON.parse(localStorage.getItem('user'));
  if(!user && to.path != '/login'){
    next({path:'/login'})
  }else{
    next();
  }
}) */


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
