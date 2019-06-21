<template lang="html">

  <div v-if="article" id="articleDetail">
    <p><span>Guardian Section Name</span>: {{article.sectionName}}</p>
    <p v-model="dateFormatted"><span>Publication Date: {{dateFormatted}}</span></p>
    <a :href="article.webUrl">Visit Article</a>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'article-detail',
  props: ['article'],
  computed: {
    dateFormatted: function (){
      const shortDate = this.article.webPublicationDate.slice(0,10);
      return shortDate
    }
  }
}
</script>

<style lang="css" scoped>
</style>
