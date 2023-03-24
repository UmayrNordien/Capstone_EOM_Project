<template>
  <div class="navbar">
    <div class="button-container">
      <router-link to="/admin">
        <button>Admin</button>
      </router-link>
      <router-link to="/cart" class="ms-3">
        <button>Cart</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
  color: #212121;
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

button:hover {
  color: #FD0363;
  background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
  /* box-shadow: 5px 5px 15px #cccccc, -5px -5px 15px #ffffff; */
}

button:active {
  color: #CC095D;
  background: #ebebeb;
  box-shadow: inset 5px 5px 15px #cccccc, inset -5px -5px 15px #ffffff;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.button-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>