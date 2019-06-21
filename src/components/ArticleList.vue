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
li {
  list-style: none;
}
</style>
