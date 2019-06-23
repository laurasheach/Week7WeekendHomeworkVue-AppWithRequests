<template lang="html">
  <div id="articleList">

    <ul>
      <article-list-component v-for="(article, index) in articles" :article="article" :key="index" >{{article.webTitle}}</article-list-component>
    </ul>

  </div>
</template>

<script>
import ArticleListComponent from './ArticleListComponent.vue'

export default {
  name: 'article-list',
  props: ['articles'],
  components: {
    "article-list-component": ArticleListComponent
  }
}
</script>

<style lang="css" scoped>
ul {
  text-align: left;
  width: 45vw;
  margin: 0;
  padding: 0;
  background: rgba(210, 210, 210, 0.75);
}

li {
  list-style: square;
  list-style-position: inside;
}
</style>
