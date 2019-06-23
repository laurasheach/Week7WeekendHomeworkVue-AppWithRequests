<template>
  <div id="app">
    <header>Guardian News Search</header>
    <!-- <article-list :articles="articles"></article-list>
    <article-detail :article="selectedArticle"></article-detail> -->

    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'articles'}">Articles List</router-link>
      <router-link :to="{ name: 'favourites'}">Favourites</router-link>
    </nav>

    <body>
    <router-view :articles="articles" :article='selectedArticle' :favourites="favourites" id="view"></router-view>

    </body>
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
      favourites: [],
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
    });

    eventBus.$on('article-selected', (article) => {
      this.favourites.push(article)
    });

    eventBus.$on('subject-selected', (subject) => {
      this.selectedSubject = subject
    });
  }
}
</script>

<style>
* {
  margin-top: 0;
  padding: 0;
}

#app {
  font-family: 'Rosario', sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #3423A6;

}

header {
  background: #3423A6;
  height: 15vh;
  width: 100vw;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Rosario', sans-serif;
  font-size: 50px;
}

nav {
  background: #FFFFFF;
  height: 8vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-family: 'Rosario', sans-serif;
  font-size: 20px;
}

body {
  font-family: 'Rosario', sans-serif;
  font-size: 20px;
}

body::after {
  content: "";
  background: url('./assets/guardian.png');
  opacity: 0.25;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: -1;
  background-size: 100%;
  background-repeat: no-repeat;
}

a {
  color: #3423A6;
  padding: 10px;
}

a:visited{
  color: #3423A6;
}

</style>
