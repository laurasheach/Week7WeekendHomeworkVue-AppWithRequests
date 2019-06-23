<template lang="html">
  <div class="">

    <h3>For today's headlines please head on in:</h3>
    <router-link :to="{ name: 'articles'}">
    <button type="button" name="button">Enter</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<style lang="css" scoped>

button {
  background-color: rgba(255, 255, 255, 0.75);
  border: none;
  color: #3423A6;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
}

</style>
