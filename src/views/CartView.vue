<template>
    <div>
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
      <SpinnerC v-if="isLoading" />
    </div>
  </template>
  
  <script>
  import SpinnerC from '../components/ProductSpinner.vue';
  
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 20 },
          { id: 3, name: 'Product 3', price: 30 },
        ],
        isLoading: true,
      };
    },
    created() {
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    components: {
      SpinnerC,
    },
    
  };
  </script>
  
  


<style scoped>
    
</style>