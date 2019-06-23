<template lang="html">

  <div v-if="article" id="articleDetail">
    <p><span>Guardian Section Name</span>: {{article.sectionName}}</p>
    <p v-model="dateFormatted"><span>Publication Date: {{dateFormatted}}</span></p>
    <a :href="article.webUrl">Visit Article</a>
    <br>
    <br>
    <button v-if="!inFavourites" v-on:click="handleButton" type="button" name="button">Add to Favourites</button>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'article-detail',
  props: ['article', 'favourites'],
  computed: {
    dateFormatted: function (){
      const shortDate = this.article.webPublicationDate.slice(0,10);
      return shortDate
    },
    inFavourites: function (){
      return this.favourites.includes(this.article);
    }
  },
  methods: {
    handleButton: function() {
        eventBus.$emit('article-selected', this.article)
    }
  }
}
</script>

<style lang="css" scoped>

#articleDetail {
  box-sizing: border-box;
  height: 200px;
  margin: auto;
  width: 30%;
  background: #eee;
  color: #222;
  padding: 10px;
  border: 1px solid #ccc;
}

</style>
