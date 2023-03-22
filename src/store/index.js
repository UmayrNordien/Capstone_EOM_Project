import { createStore } from 'vuex'
import axios from 'axios';
const aStoreURL = "https://capstone-ecommerce.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: [],
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.patch(`${aStoreURL}login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${aStoreURL}register`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context) {
      let res = await axios.get(`${aStoreURL}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload) {
      let res = await axios.put(`${aStoreURL}users/${payload.id}`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id) {
      console.log(`Delete: ${id}`);
      let res = await axios.delete(`${aStoreURL}user/${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
      }else {
        context.commit('setMessage', err);
      }
    },
    async addProduct(context, payload) {
      let res = await axios.post(`${aStoreURL}product`, payload);
      let {msg, err}  = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context) {
      const res = 
      await axios.get(`${aStoreURL}products`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProducts', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
      console.log(aStoreURL);
    },
    async fetchProduct(context, id) {
      const res = 
      await axios.get(`${aStoreURL}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProduct', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
      console.log("single product view");
    },
    async updateProduct(context, payload) {
      const res = 
      await axios.put(`${aStoreURL}product/${payload.id}`, payload);
      const {msg, err} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', msg || err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${aStoreURL}product/${id}`);
      const {err, msg} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})
