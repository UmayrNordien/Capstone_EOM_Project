<template>
    <div id="product">
        <a class="book-container" href="" target="_blank" rel="noreferrer noopener">
            <div class="book">
                <img alt="" src="https://i.postimg.cc/Vkd22MxL/1303.jpg" />
            </div>
        </a>
        <NavBar></NavBar>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
// import { useStore } from 'vuex';
// import {computed} from '@vue/runtime-core';
export default{
    // setup(){
    //     const store = useStore();
    //     const user = computed(() => store.state.user);
    //     store.dispatch('fetchProductById');
    //     const product = computed(() => store.state.product);
    //     return{
    //         user,
    //         product,
    //     }
    // },
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
</style>