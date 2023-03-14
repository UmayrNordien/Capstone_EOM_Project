<template>
    <div id="contact">
        <div class="container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <form action="https://formspree.io/f/mqkoarve" method="POST">
                        <span class="contact-us">Contact Us</span>
                        <input type="text" class="field" name="name" placeholder="Your Name" required>
                        <input type="text" class="field" name="email" placeholder="Your Email" required>
                        <input type="text" class="field" name="contact" placeholder="Phone" required>
                        <textarea placeholder="Message Us" name="text" id="message" class="field"></textarea>
                        <button type="submit" class="send">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <NavBar></NavBar>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>

<style scoped>
#contact {
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
    border-radius: 1rem;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 25px;
}

.container:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    filter: blur(1000px);
    z-index: -1;
}

.contact-box {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    transition: .4s ease-in-out;
    background: -webkit-linear-gradient(to left, #fffcdc, #212121);
    background: linear-gradient(to left, #fffcdc, #212121);
    box-shadow: 0.4rem 0.4rem 0.6rem #00000040;
    border: #b8b8b8 0.2rem solid;
    border-radius: 1rem;
}

.contact-box:hover {
    border: #FD0363 0.2em solid;
    /* border-radius: 2.5rem 0 2.5rem 0; */
    opacity: 100%;
    background: #212121;
    transform: scale(1.1)
}

.left {
    background: url(https://i.postimg.cc/J0WbD5Cz/brett-jordan-n-RWv-T3z5-Dnc-unsplash.jpg) no-repeat center;
    background-size: cover;
    height: 100%;
    border-radius: 1rem;
}
.left:hover{
    background: url(https://i.postimg.cc/9Fbn2ry7/hermes-rivera-SLrc-Ed-Epb-SA-unsplash.jpg) no-repeat center;
    background-size: cover;
    height: 100%;
    border-radius: 25px;
    transition: 5s ease-out;
}

.right {
    padding: 25px 40px;
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

h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
    color: #9EA1D4;
}

h2:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #EB455F;
}

.field {
    width: 100%;
    margin-bottom: 22px;
    border-radius: 5px;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
    outline: none;
    padding: 0.7em;
    transition: .4s ease-in-out;
    transition: .3s;
}

textarea {
    min-height: 150px;
}

.contact-box input {
  color: white;
}
.contact-box:hover input {
  background-color: #212121;
}
.contact-box:hover textarea {
  background-color: #212121;
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

  .container:hover .send {
    color: #FD0363;
  }


@media screen and (max-width: 880px) {
    .contact-box {
        grid-template-columns: 1fr;
    }

    .left {
        height: 200px;
    }
}
</style>