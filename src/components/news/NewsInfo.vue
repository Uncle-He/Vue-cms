<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间: 2019-4-16 13:22:34</span>
      <span>点击: 3次</span>
    </p>

    <hr>

    <div class="content">
      新闻ID:{{ id }},由于数据借口无法使用,所以更改为静态页面
    </div>

    <comment-box></comment-box>


    <!--<div class="newsinfo-container">-->
      <!--&lt;!&ndash; 大标题 &ndash;&gt;-->
      <!--<h3 class="title">{{ newsinfo.title }}</h3>-->
      <!--&lt;!&ndash; 子标题 &ndash;&gt;-->
      <!--<p class="subtitle">-->
        <!--<span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>-->
        <!--<span>点击：{{ newsinfo.click }}次</span>-->
      <!--</p>-->

      <!--<hr>-->

      <!--&lt;!&ndash; 内容区域 &ndash;&gt;-->
      <!--<div class="content" v-html="newsinfo.content"></div>-->

      <!--&lt;!&ndash; 评论子组件区域 &ndash;&gt;-->
      <!--<comment-box :id="this.id"></comment-box>-->
    <!--</div>-->
  </div>
</template>

<script>
  import { Toast } from "mint-ui";
  import comment from '../subcomponents/comment.vue';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        newsinfo: {}
      }
    },
    methods: {
      getNewsInfo() {
        // 获取新闻详情
        this.$http.get("api/getnew/" + this.id).then(result => {
          if (result.body.status === 0) {
            this.newsinfo = result.body.message[0];
          } else {
            Toast("获取新闻失败！");
          }
        });
      }
    },
    created() {
      this.getNewsInfo()
    },
    components: {
      'comment-box': comment
    }
  }

</script>

<style lang="scss">
  .newsinfo-container {
    padding: 0 4px;
    .title {
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle {
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    .content {
      img {
        width: 100%;
      }
    }
  }
</style>