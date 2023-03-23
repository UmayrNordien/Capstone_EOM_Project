<template>
  <div class="home">
    <HomePage></HomePage>
    <NavBar></NavBar>
  </div>
  <FooterC></FooterC>
</template>

<script>

import HomePage from '../components/HomePage.vue'
import NavBar from '../components/NavBar.vue'
import FooterC from '@/components/FooterC.vue';

export default {
  components: {
    HomePage,
    NavBar,
    FooterC
  }
}
</script>

<style scoped>
</style>
