<template>
  <div id="profile">
    <div class="card">
      <img :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName">
      <h2><i class="bi bi-patch-check"></i> {{ user.firstName + ' ' + user.lastName }}</h2>
      <p><i class="bi bi-envelope"></i> {{ user.emailAdd }}</p>
      <p><i class="bi bi-person-bounding-box"></i> {{ user.userRole }}</p>
      <p><i class="bi bi-calendar"></i> {{ user.joinDate }}</p>
    </div>
    <NavBar></NavBar>
  </div>
  <FooterC></FooterC>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterC from '@/components/FooterC.vue';

export default {
  components: {
    NavBar,
    FooterC
  },
  data() {
    return {
      user: {
        userProfile: "https://i.postimg.cc/2657mzQk/placeholder-Admin-Profile.png",
        firstName: "John",
        lastName: "Doe",
        emailAdd: "johndoe@example.com",
        userRole: "Member",
        joinDate: "March 15, 2023",
      },
    };
  },
};
</script>

<style scoped>
#profile {
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

.card {
margin: 20px;
width: 400px;
height: 600px;
border-radius: 30px;
background: lightgrey;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
}

.card img {
width: 80%;
height: auto;
border-radius: 50%;
margin-bottom: 10px;
background: 0.5rem solid #CC095D;
background: linear-gradient(90deg, #FD0363 0%,#CC095D 16.6%, #9C1057 32.2%, #6B1650 49.8%, #3B1D4A 66.4%, #0A2344 100%) !important;
}

.card h2 {
font-size: 1.2rem;
font-weight: bold;
margin-bottom: 5px;
}

.card p {
font-size: 0.9rem;
margin-bottom: 3px;
}

</style>