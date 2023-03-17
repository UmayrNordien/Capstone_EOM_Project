<template>
  <SpinnerC v-if="isloading"/>
  <div v-else>
    
    <!-- The User Table -->
    <div  class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8">
              <h3>Users</h3>
            </div>
            <div class="col.sm-4"> 
              </div>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>UserID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>User Pass</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="person in users" :key="person">
              <td>{{ person.userID }} </td>
              <td><img :src="person.imgURL" alt="prod.img" style="max-height: 10px;"></td>
              <td>{{ person.firstName }}</td>
              <td>{{ person.lastName }}</td>
              <td>{{ person.cellphoneNumber }}</td>
              <td>{{ person.emailAdd }}</td>
              <td>{{ person.userPass }}</td>
              <td> 
                <button><UpdateUser/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Products Table -->
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8">
              <h3>Product</h3>
            </div>
            <div class="col.sm-4"> 
              <button> <AddProduct/> </button>
            </div>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>prodID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Product Description</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="product in products" :key="product">
              <td>{{ product.prodId }} </td>
              <td><img :src="product.imgURL" alt={{product.imgURL}} style="max-height: 60px;"></td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.category }}</td>
              <td>R{{ product.price }}</td>
              <td> 
                <i><UpdateProduct :product="product" :productId="product.id"/></i>
                
                <i class="fa fa-trash" v-on:click="deleteProduct(product.id)"><DeleteProduct/> </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateProduct from '../components/UpdateProduct.vue';
import AddProduct from '../components/AddProduct.vue';
import UpdateUser from '../components/UpdateUser.vue';
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/ProductSpinner.vue'

export default {
  setup(){
    const store = useStore();
    store.dispatch('fetchProducts');
    store.dispatch('fetchUsers');

    let user = computed(()=> store.state.user);
    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);

    const deleteProduct = async (id) => {
      store.dispatch('deletedProduct', id);
      store.dispatch('fetchProducts');
      location.reload();
    }

    return{
      AddProduct,
      products,
      users,
      user,
      deleteProduct,
    }
  },
  components: {
    SpinnerC,
    UpdateProduct,
    AddProduct,
    UpdateUser
  },
  data(){
    return {
      isLoading: true,
    }
  },
  created(){
    setTimeout(()=> {
      this.loading = false;
    },2000);
  }
}
</script>

<style scoped>
  
.table{
  max-width: 1100px;
  margin: auto;
}
</style>