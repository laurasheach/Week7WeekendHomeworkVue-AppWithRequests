<template>
  <div id="app">
    <h1>Guardian News Search</h1>
    <!-- <article-list :articles="articles"></article-list>
    <article-detail :article="selectedArticle"></article-detail> -->
    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link> ||
      <router-link :to="{ name: 'articles'}">Articles List</router-link> ||
      <router-link :to="{ name: 'favourites'}">Favourites</router-link>
    </nav>
    <router-view :articles="articles" :article='selectedArticle' :favourites="favourites" id="view"></router-view>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import ArticleList from './components/ArticleList.vue'
import ArticleListDetail from './components/ArticleListDetail.vue'

export default {
  name: 'app',
  data(){
    return {
      articles: [],
      selectedArticle: null,
      favourites: []
    }
  },

  components: {
    "article-list": ArticleList,
    "article-detail": ArticleListDetail
  },

  mounted(){
    fetch("https://content.guardianapis.com/search?order-by=newest&q=news&api-key=test")
    .then(result => result.json())
    .then(articles => this.articles = articles.response.results)

    eventBus.$on('article-detail', (article) => {
      this.selectedArticle = article
    })

    eventBus.$on('article-selected', (article) => {
      this.favourites.push(article)
    })
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
