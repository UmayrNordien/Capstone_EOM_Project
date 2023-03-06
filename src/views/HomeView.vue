<template>
  <div class="home">
    <h1>Home</h1>
    <HomePage></HomePage>
    <NavBar></NavBar>
  </div>
</template>

<script>

import HomePage from '../components/HomePage.vue'
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    HomePage,
    NavBar
  }
}
</script>

<style scoped>
</style>
