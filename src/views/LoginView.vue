<template>
  <div id="login">
      <div class="container">
<input id="register_toggle" type="checkbox">
<div class="slider">
  <form class="form">
    <span class="title">Login</span>
    <div class="form_control">
  <input required="" v-model="emailAdd" class="input" type="text">
  <label class="label">Username</label>
</div>

    <div class="form_control">
      <input required="" v-model="userPass" class="input" type="password">
      <label class="label">Password</label>
    </div>
    <button class="login" @click="login">Login</button>

    <span class="bottom_text">Don't have an account? <router-link to="/register"><label class="switch" for="login_toggle">Register</label></router-link></span>
  <!-- <span class="bottom_text">Don't have an account? <label class="switch" for="register_toggle">Register</label></span> -->
  <!-- </form>
  <form class="form">
    <span class="title">Sign Up</span>
    <div class="form_control">
      <input required="" class="input" type="text">
      <label class="label">Email</label>
    </div>
    <div class="form_control">
      <input required="" class="input" type="email">
      <label class="label">Email</label>
    </div>
    <div class="form_control">
      <input required="" class="input" type="password">
      <label class="label">Password</label>
    </div>
    <button>Sign Up</button>

    <span class="bottom_text">Already have an account? <label class="swtich" for="register_toggle">Sign In</label> </span> -->
  </form>
  </div>
</div>
  <NavBar></NavBar>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import axios from 'axios'

export default {
  components: {
      NavBar
  },
  data() {
  return {
    emailAdd: '',
    userPass: '',
  }
},

methods: {
  login() {
    axios
      .post('https://capstone-ecommerce.onrender.com/', {
        email: this.emailAdd,
        userPass: this.userPass
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
}
</script>

<style scoped>
#login {
background: url(https://i.postimg.cc/6q5hXj2z/World-Book-Day-2000-x-2000-px-4.jpg) fixed;
background-size: contain;
background-repeat: repeat-y;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
/* center horizontally */
align-items: center;
/* center vertically */
}

.container {
margin-top: 2vh;
width: 600px;
margin:25px;
position: relative;
border-radius: 1rem;
overflow: hidden;

background: -webkit-linear-gradient(to left, #fffcdc, #212121);  
background: linear-gradient(to left, #fffcdc, #212121); 
box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
border: #b8b8b8 0.2rem solid;
/* opacity: 69%; */
transition: 0.4s ease-out; /* apply transition here */
}

.container:hover{
/* remove transition from here */
border: #FD0363 0.2em solid;
border-radius: 2.5rem 0 2.5rem 0;
opacity: 100%;
background: #212121;
transform: scale(1.1)
}

.container .slider {
width: 200%;
position: relative;
transition: transform ease-out 0.3s;
display: flex;
}

#register_toggle {
display: none;
}

.container #register_toggle:checked + .slider {
transform: translateX(-50%);
}

.form {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
padding: 1.5em 3em;
width: 50%;
}

.title {
text-align: center;
font-weight: 700;
font-size: 2em;
}

form .form_control {
width: 100%;
position: relative;
overflow: hidden;
}

form .form_control .label {
position: absolute;
top: 50%;
left: 10px;
transition: transform ease 0.2s;
transform: translate(0%, -50%);
font-size: 0.75em;
user-select: none;
pointer-events: none;
color: #b0b0b0;
}

form .form_control .input {
width: 100%;
background-color: transparent;
border: none;
outline: none;
color: #FFFFFF;
padding: 0.5rem;
font-size: 0.75rem;
border-radius: 5px;
transition: box-shadow ease 0.2s;
box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;
}

form .form_control .input:focus,
form .form_control .input:valid {
box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
}

form .form_control .input:focus + .label,
form .form_control .input:valid + .label {
transform: translate(-150%, -50%);
}

form button {
width: 100%;
background-color: transparent;
border: none;
outline: none;
color: #fff;
padding: 0.5rem;
font-size: 0.75rem;
border-radius: 5px;
transition: box-shadow ease 0.1s;
box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
}

form button:active {
box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
}

.container:hover .login {
color: #FD0363;
}
.container:hover form .form_control .label{
color:#000000
}

.bottom_text {
font-size: 0.65em;
}

.bottom_text .swtich {
font-weight: 700;
cursor: pointer;
}

span{
margin-left: 5px;
font-size: 18px;
color: #ffffff !important;
text-align: center;
animation: glow 1s ease-in-out infinite alternate;
}
.container:hover span {
transform: scale(1.1);
color: #FD0363 !important;
text-shadow: 0 0 20px #FD0363, 0 0 30px #FD0363, 0 0 40px #FD0363, 0 0 50px #FD0363, 0 0 60px #FD0363, 0 0 70px #FD0363, 0 0 80px #FD0363;
transition: 1s;
}

/* gradient color loop for h6 */
.container:hover span {
animation: gradient 2s linear infinite;
}
@keyframes gradient {
0% {
  color: #FD0363;
  text-shadow: 0 0 10px #FD0363;
}
17% {
  color: #CC095D;
  text-shadow: 0 0 10px #CC095D;
}
34% {
  color: #9C1057;
  text-shadow: 0 0 10px #9C1057;
}
51% {
  color: #6B1650;
  text-shadow: 0 0 10px #6B1650;
}
68% {
  color: #3B1D4A;
  text-shadow: 0 0 10px #3B1D4A;
}
85% {
  color: #0A2344;
  text-shadow: 0 0 10px #0A2344;
}
100% {
  color: #FD0363;
  text-shadow: 0 0 10px #FD0363;
}
}
</style>
