<template>
  <div class="home">
    <HomePage></HomePage>
    <NavBar></NavBar>
    <NavBar2></NavBar2>
  </div>
  <FooterC></FooterC>
</template>

<script>

import HomePage from '../components/HomePage.vue'
import NavBar from '../components/NavBar.vue'
import NavBar2 from '@/components/NavBar2.vue';
import FooterC from '@/components/FooterC.vue';

export default {
  components: {
    HomePage,
    NavBar,
    NavBar2,
    FooterC
  }
}
</script>

<style scoped>
</style>
