<template>
	<div id="products">

		<div class="slider">
			<div class="slide-track">
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
				</div>
		</div>
			</div>

	<div class="container">
      <div class="row">
        <div v-for="product in products" :key="product.name" class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <img class="card-img-top" image-fluid :src="product.image" :alt="product.name" style="width: 400px; height: 300px;">
            <div class="card-body">
              <h4 class="card-title">{{ product.name }}</h4>
              <h5>R{{ product.price }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-outline-dark">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavBar></NavBar>
  </div>

</template>
  
<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          price: 199.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 2",
          price: 240.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 3",
          price: 290.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 4",
          price: 199.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 5",
          price: 240.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 6",
          price: 210.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 7",
          price: 69.69,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 8",
          price: 290.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 9",
          price: 420.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        },
        {
          name: "Product 10",
          price: 140.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://i.postimg.cc/P5fT0Gk4/01-paperback-book-cover-mockup-standing-removebg-preview.png"
        }
      ]
    }
  }
}
</script>

  
<style scoped>
#products {
  /* background: url(https://i.postimg.cc/6q5hXj2z/World-Book-Day-2000-x-2000-px-4.jpg) fixed; */
  background: url(https://i.postimg.cc/kGQPpCX7/brett-jordan-Cs-ZQ50x-O35-I-unsplash.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
}

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}

.slider {
  margin: 50px auto;
  width: 960px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.125);
}

.slide-track {
  display: flex;
  animation: scroll 400s linear infinite;
}

.slide {
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide img {
  width: 150%;
  height: 150%;
  object-fit: contain;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1750px);
  }
}

.container { 
  margin-top: 250px;
  position:absolute;
  flex-direction: column;
  align-items: center;
}

.card{
  border-radius: 50px;
  background: rgb(180, 180, 180);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
}
.card:hover{
 border: none;
 border-radius: 50px;
 background: #e0e0e0;
 box-shadow: 20px 20px 60px #bebebe,
               -20px -20px 60px #ffffff;
 transform: translateY(-5px);
}

.card-footer{
  background-color: transparent;
}
</style>
  