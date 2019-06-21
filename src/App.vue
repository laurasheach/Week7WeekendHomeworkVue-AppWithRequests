<template>
  <div id="app">
    <h1>Guardian News Search</h1>
    <article-list :news="news"></article-list>
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue'

export default {
  name: 'app',
  data(){
    return {
      news: {}
    }
  },

  components: {
    "article-list": ArticleList
  },

  mounted(){
    fetch("https://content.guardianapis.com/search?q=news&format=json&api-key=test")
    .then(result => result.json())
    .then(news => this.news = news.response)
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
