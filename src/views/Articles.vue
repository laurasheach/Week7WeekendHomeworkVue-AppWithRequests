<template lang="html">
  <div id="">
    <h1>Articles</h1>
    <h2>Headlines</h2>
    <p>Click headline for more information</p>
      <div id="headlines">
        <h3><article-list :articles="articles" :favourites="favourites"></article-list></h3>
        <article-list-detail :article="article" :favourites="favourites"></article-list-detail>
      </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import ArticleListDetail from '@/components/ArticleListDetail.vue'

export default {
  name: 'articles',
  props: ['articles', 'article', 'favourites'],
  components: {
    "article-list": ArticleList,
    "article-list-detail": ArticleListDetail
  }
}
</script>

<style lang="css" scoped>

#headlines {
  line-height: 2.0;
  width: 80%;
  margin: 0 auto;
  display: flex;
}

</style>
