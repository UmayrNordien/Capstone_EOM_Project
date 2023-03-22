<template>
  <div class="admin">
    <div v-if="spinner" class="d-flex justify-content-center">
      <SpinnerC />
    </div>

    <div v-else-if="!spinner">

      <!--PRODUCTS TABLE-->
      <div class="productsTable">
        <h2 class="fw-bold">Products</h2>
        <table class="table table-hover table-striped table-darker mx-auto">
          <thead>
            <tr>
              <th class="fw-bold">Name</th>
              <th class="d-none d-sm-table-cell fw-bold">Description</th>
              <th class="fw-bold">Price</th>
              <th class="fw-bold">Quantity</th>
              <th class="d-none d-sm-table-cell fw-bold">Image</th>
              <th class="fw-bold">Edit/Del</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td>{{ product.name }}</td>
              <td class="d-none d-sm-table-cell">{{ product.description }}</td>
              <td>R{{ product.price }}</td>
              <td>{{ product.quantity }}</td>
              <td class="d-none d-sm-table-cell">
                <img :src="product.imgURL" :alt="product.name" width="85" height="75">
              </td>
              <td>
                <UpdateProduct :product="product" class="btn btn-success"/>
                <button class="btn btn-outline-danger" v-on:click="deleteProduct(product)">X</button>
              </td>
            </tr>
          </tbody>
        </table>
        <AddProduct/>
      </div>

      <!--USERS TABLE-->
      <div class="usersTable pb-2">
        <h2 class="fw-bold">Users</h2>
        <table class="table table-hover table-striped table-darker mx-auto">
          <thead>
            <tr>
              <th class="fw-bold">Name</th>
              <th class="fw-bold">Email</th>
              <th class="fw-bold">Role</th>
              <th class="fw-bold">Password</th>
              <th class="d-none d-sm-table-cell fw-bold">Join Date</th>
              <th class="d-none d-sm-table-cell fw-bold">Profile Image</th>
              <th class="fw-bold">Edit/Del</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.userPass }}</td>
              <td class="d-none d-sm-table-cell">{{ user.joinDate }}</td>
              <td class="d-none d-sm-table-cell">
                <img class="rounded-circle" :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName" width="85" height="75">
              </td>
              <td>
                <UpdateUser :userDetails="user" class="btn outline-dark"/>
                <button class="btn btn-outline-danger" v-on:click="deleteUser(user)">X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddUser/>
    </div>
  </div>
  <NavBar></NavBar>
</template>


<script>
import NavBar from '@/components/NavBar.vue';

import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

import UpdateProduct from '../components/UpdateProduct.vue';
import AddProduct from '../components/AddProduct.vue';
import UpdateUser from '../components/UpdateUser.vue';
import AddUser from '../components/AddUser.vue';

import SpinnerC from '../components/ProductSpinner.vue';

export default{
  components: {
        NavBar,
        UpdateProduct,
        AddProduct,
        UpdateUser,
        AddUser,
        SpinnerC
    },
    setup(){
        const store = useStore();
        store.dispatch('fetchUsers');
        store.dispatch('fetchProducts');
        const users = computed(() => store.state.users);
        const products = computed(() => store.state.products);
        
        let deleteProduct = async (product) => {
            await store.dispatch('deleteProduct', product.prodID);
            await store.dispatch('fetchProducts');
        }
        const spinner = computed(() => store.state.spinner);
        return{
            users,
            products,
            deleteProduct,
            spinner
        }
    }
}
</script>

<style scoped>
  h1{
    margin-top: 10px;
    margin-bottom: 10px;
  }
#products{
  margin-bottom: 30vh;
}
.usersTable{
  margin-top: 30vh;
}

/* button{
  border: 1px solid black;
  display: inline block;
  border-bottom: 5px !important;
  width: fit-content;
  background-color: rgb(140, 140, 140);
} */
</style>