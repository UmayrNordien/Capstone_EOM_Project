<template>
  <div id="home">

    <div class="container">
      <div class="card">
        <h6 class="title">Coming Soon</h6>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle" style="background-image: url(https://i.postimg.cc/3JVR5b56/Ample-Creamy-Kagu-size-restricted.gif); background-repeat: no-repeat; background-size: cover;">

        </div>
      </div>
      <div class="card">
        <h6 class="title">Latest</h6>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle" style="background-image: url(https://i.postimg.cc/J0HDVwnT/Candid-Regular-Comet-size-restricted.gif); background-repeat: no-repeat; background-size: cover;">


        </div>
      </div>
      <div class="card" >
        <h6 class="title">Best Selling</h6>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle" style="background-image: url(https://i.postimg.cc/Qt1g1WgN/Impractical-Bowed-Icelandichorse-size-restricted.gif); background-size: cover;">
        </div>
      </div>
      <div class="card">
        <h6 class="title">Manga</h6>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle" style="background-image: url(https://i.postimg.cc/vBzt5XwB/giphy-gif-cid-ecf05e47b4ggjqxzdn41c71l7t0mmf8v0j2wea42pg0jpmuj-rid-giphy.gif);">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#home {
  background: url(https://i.postimg.cc/HsWrwPb8/shapelined-JBKdviwe-XI-unsplash.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* center horizontally */
  align-items: center;
  /* center vertically */
}

.container {
  margin-top: 18vh;
  position: absolute;
  height: 250px;
  width: 580px;
  top: 60px;
  left: calc(50% - 300px);
  display: flex;
}

@media (max-width: 768px) {
  .container {
    height: 200px;
    width: 400px;
    top: 100px;
    left: calc(50% - 200px);
  }
}

@media (max-width: 576px) {
  .container {
    height: 150px;
    width: 300px;
    top: 100px;
    left: calc(50% - 150px);
  }
}

@media only screen and (max-width: 768px) {
  .bar {
    display: none;
    width: 100%
  }
}
@media only screen and (max-height: 804px) {
  #home {
    height: 100vh;
  }
}


.card {
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #cccccc;
  border-radius: 1rem;
  border: #b8b8b8 0.2rem solid;
  transition: all 0.4s ease-in;
  box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
  position: relative;
  left: 0px;
  opacity: 69%;
}
.title{
  text-align: center
}

.card:not(:first-child) {
  margin-left: -50px;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
  border: #FD0363 0.2em solid;
 border-radius: 2.5rem 0 2.5rem 0;
 opacity: 90%;
}

.card:hover~.card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

.title {
  color: #000000;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
}

.bar {
  position: absolute;
  top: 100px;
  left: 20px;
  height: 5px;
  width: 150px;
}

.emptybar {
  background-color: #ffffff;
  width: 75%;
  height: 100%;
}

.filledbar {
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 0px;
  height: 100%;
  background: #FD0363;
  background: linear-gradient(90deg, #FD0363 0%,#CC095D 16.6%, #9C1057 32.2%, #6B1650 49.8%, #3B1D4A 66.4%, #0A2344 100%);
  transition: 0.6s ease-out;
}

.card:hover .filledbar {
  width: 120px;
  transition: 0.4s ease-out;
}

.circle {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-position: center;
  background-size: contain; 
}</style>




