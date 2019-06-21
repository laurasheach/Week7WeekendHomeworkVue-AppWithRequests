<template lang="html">

  <div v-if="article" id="articleDetail">
    <p><span>Guardian Section Name</span>: {{article.sectionName}}</p>
  </div>

</template>

<script>
export default {
  name: 'article-detail',
  props: ['article']
}
</script>

<style lang="css" scoped>
</style>
