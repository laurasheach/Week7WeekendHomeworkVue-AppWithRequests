<template lang="html">

  <div v-if="article" id="articleDetail">
    <p><span>Guardian Section Name</span>: {{article.sectionName}}</p>
    <p><span>Publication Date</span>: {{article.webPublicationDate}}</p>
    <a :href="article.webUrl">Visit Article</a>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'article-detail',
  props: ['article'],
  methods: {
    handleClick(){
      eventBus.$emit('article-selected', this.article)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
