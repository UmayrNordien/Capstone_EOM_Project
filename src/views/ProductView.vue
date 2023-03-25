<!-- <template>
    <div id="product">
        <a class="book-container" href="" target="_blank" rel="noreferrer noopener">
            <div class="book">
                <img alt="" src="https://i.postimg.cc/Vkd22MxL/1303.jpg"/>
            </div>
        </a>
        <NavBar></NavBar>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue';

import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
    setup(){
        const store = useStore();
        const user = computed(() => store.state.user);
        store.dispatch('fetchProductById');
        const product = computed(() => store.state.product);
        return{
            user,
            product,
        }
    },
    components: {
        NavBar
    }
}
</script>


<style scoped>
#product {
  background: url(https://i.postimg.cc/6q5hXj2z/World-Book-Day-2000-x-2000-px-4.jpg) fixed;
  background-size: contain;
  background-repeat: repeat-y;
  width: 100%;
  height: 100vh !important;
  display: flex;
  justify-content: center;
  /* center horizontally */
  align-items: center;
  /* center vertically */
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.book-container {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
}

@keyframes initAnimation {
    0% {
        transform: rotateY(-37deg);
    }

    100% {
        transform: rotateY(-15deg);
    }
}

.book {
    width: 200px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-15deg);
    transition: 2s ease;
    animation: 1s ease 0s 1 initAnimation;
}

.book:hover {
    transform: rotateY(-37deg);
}

.book> :first-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    width: 200px;
    height: 300px;
    transform: translateZ(12.5px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
}

.book::before {
    position: absolute;
    content: ' ';
    background-color: blue;
    left: 0;
    top: 2px;
    width: 23px;
    height: 296px;
    transform: translateX(185.5px) rotateY(90deg);
    background: linear-gradient(90deg,
            #fff 0%,
            #f9f9f9 5%,
            #fff 10%,
            #f9f9f9 15%,
            #fff 20%,
            #f9f9f9 25%,
            #fff 30%,
            #f9f9f9 35%,
            #fff 40%,
            #f9f9f9 45%,
            #fff 50%,
            #f9f9f9 55%,
            #fff 60%,
            #f9f9f9 65%,
            #fff 70%,
            #f9f9f9 75%,
            #fff 80%,
            #f9f9f9 85%,
            #fff 90%,
            #f9f9f9 95%,
            #fff 100%);
}

.book::after {
    position: absolute;
    top: 0;
    left: 0;
    content: ' ';
    width: 200px;
    height: 300px;
    transform: translateZ(-12.5px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
}
</style> -->

<template>
    <div id="product">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img class="card-img-top mx-auto mt-5" :src="product?.imgURL" :alt="product?.name"
                            style="width: 100%; max-height: 300px; object-fit: contain;" />
                        <div class="card-body">
                            <h4 class="card-title">{{ product?.name }}</h4>
                            <h6>[{{ product?.category }}]</h6>
                            <h5>R{{ product?.price }}</h5>
                            <p class="card-text">{{ product?.description }}</p>
                        </div>
                        <div class="card-footer">
                            <router-link to="/cart">
                                <a href="#" class="btn btn-outline-light">Add To Cart</a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavBar/>
    </div>
    <FooterC></FooterC>
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import FooterC from "@/components/FooterC.vue";

export default {
    components: {
        NavBar,
        FooterC
    },
    computed: {
        product: function () {
            return this.$store.state.product;
        },
        loggedUser () {
            return this.$store.state.loggedUser
        },
    },
    created() {
        this.$store.dispatch("fetchProduct", this.$route.params.id);
    },
};
</script>
  
<style scoped>
#product {
    background: url(https://i.postimg.cc/6q5hXj2z/World-Book-Day-2000-x-2000-px-4.jpg) fixed;
    background-size: contain;
    background-repeat: repeat-y;
    width: 100%;
    height: 100vh !important;
}

.card {
    margin-top: 7vh;
    background: -webkit-linear-gradient(to left, #fffcdc, #212121);
    background: linear-gradient(to left, #8d8d8d, #212121);

    border-radius: 1rem;
    border: #b8b8b8 0.2rem solid;
    transition: all 0.4s ease-in;
    box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
    position: relative;
    color: #FFFFFF;
}

.card h6 {
    color: #FD0363;
    font-weight: bold;
}

.card:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
    border: #FD0363 0.2em solid;
    border-radius: 2.5rem 0 2.5rem 0;
    opacity: 100%;
    background: #212121;
    transform: scale(1);
    color: white;
}

.card-body {
    text-align: center;
    padding-bottom: 0;
}

.card-footer {
    border-radius: 1rem;
    background-color: transparent;
    border-top: none;
    text-align: center;
    padding-top: 10px;
}

.container img:hover {
    width: 150%;
    height: 150%;
    object-fit: contain;
    transform: scale(2.2);
    transition: 2s;
    margin: 0;
    padding: 0;
    transform: translateY(-20px);
    transition: 0.4s ease-out;
    /* border: #FD0363 0.2em solid; */
    border-radius: 2.5rem 0 2.5rem 0;
    /* how to make it so that the border wraps around the image with no space or the image having this border upon hover */
}
</style>