<template lang="html">
  <div id="articleList">
    <ul>
      <list-component v-for="(article, index) in articles" :article="article" :key="index" >{{article.webTitle}}</list-component>
    </ul>
  </div>
</template>

<script>
import ListComponent from './ListComponent.vue'

export default {
  name: 'article-list',
  props: ['articles'],
  components: {
    "list-component": ListComponent
  }
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
}
</style>
