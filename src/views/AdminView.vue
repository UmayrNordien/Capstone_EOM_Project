<template>
    <div>
      <div class="spacing"></div>
      <AddUser></AddUser>
      <div class="spacing2"></div>
      <AddProduct></AddProduct>
      <RouterView></RouterView>
      <NavBar></NavBar>
    </div>
  </template>
    
    <script>
    import AddUser from '@/components/AddUser.vue';
    import AddProduct from '@/components/AddProduct.vue';
    import NavBar from '@/components/NavBar.vue';

    export default {
      components: {
    AddUser,
    AddProduct,
    NavBar
}
    }
    </script>
  
    <style scoped>
    .spacing{
      margin-bottom: 100px;
    }
    .spacing2{
      margin-bottom: 200px;
    }
    </style>
  