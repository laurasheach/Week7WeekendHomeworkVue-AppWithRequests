<template lang="html">
  <div id="">
    <h1>Favourites</h1>
      <article-list :articles="favourites" :favourites="favourites"></article-list>
      <article-list-detail :article="article"></article-list-detail>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import ArticleListDetail from '@/components/ArticleListDetail.vue'

export default {
  name: 'favourites',
  props: ['favourites', 'article'],
  components: {
    'article-list': ArticleList,
    "article-list-detail": ArticleListDetail
  }
}
</script>

<style lang="css" scoped>
</style>
