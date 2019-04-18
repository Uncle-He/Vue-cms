// 入口文件

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';


import app from './App.vue';
import 'mint-ui/lib/style.css';
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import router from './router.js';


// 定义全局的过滤器(格式化时间)
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
});

new Vue({
  el: '#app',
  render: function (createElements) {
    return createElements(app)
  },
  router
});