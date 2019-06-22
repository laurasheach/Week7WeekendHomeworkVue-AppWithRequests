<template lang="html">
  <div id="">
    <h1>Favourites</h1>
    <article-list :articles="favourites" :favourites="favourites"></article-list>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'favourites',
  props: ['favourites'],
  components: {
    'article-list': ArticleList
  }
}
</script>

<style lang="css" scoped>
</style>
