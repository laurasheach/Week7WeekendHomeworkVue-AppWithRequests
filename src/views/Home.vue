<template lang="html">
  <div class="">

    <h1>Homepage</h1>

    <router-link :to="{ name: 'articles'}">
    <button type="button" name="button">News</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css" scoped>
</style>
