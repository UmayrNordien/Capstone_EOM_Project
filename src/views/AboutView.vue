<template>
  <div id="home">
  </div>
<NavBar></NavBar>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  components: {
      NavBar
  }
}
let screenWidth = window.innerWidth; // get initial screen width
let bgSize = 100; // set initial background size
const decreaseAmount = 49; // set amount by which screen width must decrease to trigger size increase

window.addEventListener('resize', () => { // listen for screen size changes
  const newScreenWidth = window.innerWidth; // get new screen width
  if (newScreenWidth < screenWidth && screenWidth - newScreenWidth >= decreaseAmount) { // check if screen width decreased by at least 49px
    bgSize += 1; // increase background size by 1%
    document.body.style.backgroundSize = `${bgSize}%`; // update background size
    screenWidth = newScreenWidth; // update screen width
  }
});
</script>

<style scoped>
#home {
  /* background: url(https://i.postimg.cc/HsWrwPb8/shapelined-JBKdviwe-XI-unsplash.jpg); */
  background: url(https://i.postimg.cc/DZK2mjPt/World-Book-Day-2000-x-2000-px-5.jpg) fixed;
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
  </style>