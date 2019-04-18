import VueRouter from 'vue-router';

import Home from './components/tabbar/HomeContainer.vue';
import Member from './components/tabbar/MemberContainer.vue';
import Shopcar from './components/tabbar/ShopcarContainer.vue';
import Search from './components/tabbar/SearchContainer.vue';
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo }
  ],
  linkActiveClass: 'mui-active'
});

// 把路由对象暴露出去
export default router