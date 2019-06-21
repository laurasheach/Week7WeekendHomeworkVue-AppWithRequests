<template lang="html">
  <div id="">
    <!-- <h2>{{newsArticles[0].webTitle}}</h2> -->
    <ul>
      <li v-for="news in newsArticles" :news="news" >{{news.webTitle}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'news-list',
  props: ['newsArticles']
}
</script>

<style lang="css" scoped>
</style>
