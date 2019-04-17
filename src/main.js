// 入口文件

import Vue from 'vue';



import app from './App.vue';
import 'mint-ui/lib/style.css';
import { Header, Tabbar, TabItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


import './lib/mui/css/mui.min.css';

new Vue({
  el: '#app',
  render: function (createElements) {
    return createElements(app)
  }
});