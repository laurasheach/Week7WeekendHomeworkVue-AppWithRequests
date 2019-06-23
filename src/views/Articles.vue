<template lang="html">
  <div id="">
    <h1>Articles</h1>
    <h2>Headlines</h2>
      <div id="headlines">
        <h3><article-list :articles="articles" :favourites="favourites"></article-list></h3>
      </div>
      <div class="detail">
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
  display: flex;
  justify-content: center;
}

</style>
