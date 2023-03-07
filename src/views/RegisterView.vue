<template>
    <div class="bg">
        <h1>Register</h1>
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
.bg{
  background-image: url(https://i.postimg.cc/T19jT9p5/Untitled-3.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* center horizontally */
  align-items: center;
  /* center vertically */
}
</style>