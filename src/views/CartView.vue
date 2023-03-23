<template>
  <div class="cart-container">
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
    <div class="buy-btn-container">
      <button class="buy-btn" @click="noti()">Buy Now</button>
    </div>
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
  methods: {
    noti() {
      alert("Thanks for your purchase!");
    }
  }
  
};
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.buy-btn-container {
  text-align: right;
}

.buy-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-btn:hover {
  background-color: #3e8e41;
}
</style>