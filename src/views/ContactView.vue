<template>
    <div id="contact">
        <NavBar></NavBar>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>

<style scoped>
#contact {
  background: url(https://i.postimg.cc/6q5hXj2z/World-Book-Day-2000-x-2000-px-4.jpg) fixed;
  background-size: contain;
  background-repeat: repeat-y;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* center horizontally */
  align-items: center;
  /* center vertically */
}
</style>