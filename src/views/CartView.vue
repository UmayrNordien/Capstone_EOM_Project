<template>
  <div id="cart" class="cart-container">
    <h1>Your Cart</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>R{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
    <div class="buy-btn-container">
      <button class="buy-btn" @click="noti()">Buy Now</button>
    </div>
    <SpinnerC v-if="isLoading" />
    <NavBar></NavBar>
  </div>
</template>

<script>
import SpinnerC from '../components/ProductSpinner.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      products: [
        { id: 1, 
          name: 'BATMAN 2016 Series DC REBIRTH #100', 
          price: 100 
        },

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
    NavBar
  },
  methods: {
    noti() {
      alert("Receipt Product: BATMAN 2016 Series DC REBIRTH #100 Price: R100 Quantity: 1 Total: R100 [Thank you for your purchase!]");
    }
  }
};
</script>

<style scoped>
#cart {
  background: url(https://i.postimg.cc/6q5hXj2z/World-Book-Day-2000-x-2000-px-4.jpg) fixed;
  background-size: contain;
  background-repeat:repeat-y;
  width: 100%;
  height: 100vh;
}
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #FD0363;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 17px;
  padding: 1rem 2rem;
  border: 1px solid #ffffff1f;
  border-radius: 20px;
  background: #ebebeb;
  box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
  transition: box-shadow 0.3s ease-in-out;
}

h1:hover {
  color: #FD0363;
  background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
  /* box-shadow: 5px 5px 15px #cccccc, -5px -5px 15px #ffffff; */
}

h1:active {
  color: #CC095D;
  background: #ebebeb;
  box-shadow: inset 5px 5px 15px #cccccc, inset -5px -5px 15px #ffffff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.buy-btn-container {
  display: flex;
  justify-content: center;
}

.buy-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-btn:hover {
  background-color: #3e8e41;
}
tbody{
  background-color: white;
}
</style>