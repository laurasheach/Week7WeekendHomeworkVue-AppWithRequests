<template lang="html">

  <div v-if="article" id="articleDetail">
    <p><span>Guardian Section Name</span>: {{article.sectionName}}</p>
    <p><span>Article Type</span>: {{article.type}}</p>
    <p v-model="dateFormatted"><span>Publication Date: {{dateFormatted}}</span></p>
    <a :href="article.webUrl" class="favourites" >Visit Article</a>
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
  height: 300px;
  margin: auto;
  width: 30%;
  background: rgba(210, 210, 210, 0.75);
  color: #3423A6;
  padding: 10px;
  border: 1px solid #ccc;
}

.favourites {
  color: #3423A6;
  padding: 10px;
}

.favourites{
  color: #3423A6;
}

button {
  background-color: rgba(255, 255, 255, 0.75);
  border: none;
  color: #3423A6;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
