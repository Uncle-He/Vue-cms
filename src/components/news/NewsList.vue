<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/1">
          <img class="mui-media-object mui-pull-left" src="../../images/banner2.jpeg">
          <div class="mui-media-body">
            <h1>你现在过的幸福吗？</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：2019-4-19</span>
              <span>点击：1次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/2">
          <img class="mui-media-object mui-pull-left" src="../../images/banner1.jpeg">
          <div class="mui-media-body">
            <h1>如果给你一次机会你还会选择现在的工作吗?</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：2019-4-20</span>
              <span>点击：10次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/3">
          <img class="mui-media-object mui-pull-left" src="../../images/banner2.jpeg">
          <div class="mui-media-body">
            <h1>现在不努力，将来白费力！</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：2019-4-21</span>
              <span>点击：8次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <!--<ul class="mui-table-view">-->
      <!--<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">-->
        <!--<router-link :to="'/home/newsinfo/' + item.id">-->
          <!--<img class="mui-media-object mui-pull-left" :src="item.img_url">-->
          <!--<div class="mui-media-body">-->
            <!--<h1>{{ item.title }}</h1>-->
            <!--<p class='mui-ellipsis'>-->
              <!--<span>发表时间：{{ item.add_time | dateFormat }}</span>-->
              <!--<span>点击：{{item.click}}次</span>-->
            <!--</p>-->
          <!--</div>-->
        <!--</router-link>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import { Toast } from "mint-ui";

  export default {
    data() {
      return {
        newslist: [] // 新闻列表
      };
    },
    created() {
      this.getNewsList();
    },
    methods: {
      getNewsList() {
        // 获取新闻列表
        this.$http.get("api/getnewslist").then(result => {
          if (result.body.status === 0) {
            // 如果没有失败，应该把数据保存到 data 上
            this.newslist = result.body.message;
          } else {
            Toast("获取新闻列表失败！");
          }
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .mui-table-view {
    li {
      h1 {
        font-size: 14px;
      }
      .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>