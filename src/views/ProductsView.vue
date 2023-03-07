<template>
<div class="bg">
  <h1>Products</h1>
</div>
<NavBar></NavBar>
  </template>
  
  <script>
import NavBar from '@/components/NavBar.vue';

  export default {
    components: { NavBar }
}
  </script>
  
  <style scoped>
  .bg{
    background-image: url(https://i.postimg.cc/3Rf2kR3n/Untitled-1.jpg);
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
  