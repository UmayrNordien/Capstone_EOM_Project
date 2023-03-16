<template>
	<div id="products">

		<div class="slider">
			<div class="slide-track">
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src="" height="100" width="250" alt="" />
				</div>
		</div>
			</div>

	<div class="container">
      <div class="row" v-if="!isLoading && products">
        <div v-for="product in products" :key="product.name" class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <img class="card-img-top mx-auto mt-5" :src="product.imgURL" :alt="product.name" style="width: 160px; height: 200px;">
            <div class="card-body">
              <h4 class="card-title">{{ product.name }}</h4>
              <h6>[{{ product.category }}]</h6>
              <h5>R{{ product.price }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>
            <div class="card-footer">
              <RouterLink to=/product><a href="#" class="btn btn-outline-light">View More</a></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavBar></NavBar>
    <SpinnerC v-if="isLoading" />
  </div>

</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import SpinnerC from '../components/ProductSpinner.vue';

export default {
  data() {
    return {
      products: [],
      isLoading: true,
      sortDir: 'asc'
    };
  },
  methods: {
    async getProducts() {
      let res = await axios.get('https://capstone-ecommerce.onrender.com/products');
      let { results } = await res.data;
      this.products = results;
    },
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  },
  mounted() {
    this.getProducts();
  },
  components: {
    SpinnerC,
    NavBar
  }
};
</script>


<style scoped>
#products {
  background: url(https://i.postimg.cc/kGQPpCX7/brett-jordan-Cs-ZQ50x-O35-I-unsplash.jpg) fixed;
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
  transform: scale(1.1)
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
  border: #FD0363 0.2em solid;
  border-radius: 2.5rem 0 2.5rem 0; /* how to make it so that the border wraps around the image with no space or the image having this border upon hover */
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
  background: -webkit-linear-gradient(to left, #fffcdc, #212121);  
  background: linear-gradient(to left, #8d8d8d, #212121); 

  border-radius: 1rem;
  border: #b8b8b8 0.2rem solid;
  transition: all 0.4s ease-in;
  box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
  position: relative;
  color:#FFFFFF;
}

.card h6{
  color: #FD0363;
  font-weight: bold;
}
.card:hover{
  transform: translateY(-20px);
  transition: 0.4s ease-out;
  border: #FD0363 0.2em solid;
  border-radius: 2.5rem 0 2.5rem 0;
  opacity: 100%;
  background: #212121;
  transform: scale(1);
  color: white;
}

.card-footer{
  background-color: transparent;
}
</style>
  