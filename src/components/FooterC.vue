<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-about">The Archives is a premier online store for comic and manga enthusiasts, offering an extensive collection of classic and contemporary titles from around the world. Whether you're a hardcore collector or just starting out on your comic book journey, The Archives has everything you need to fuel your passion for this exciting art form. Our team of experts carefully curates our inventory to ensure that we only offer the highest quality comics and manga, so you can rest assured that you're getting the very best. With fast and reliable shipping, easy ordering, and unparalleled customer service, The Archives is your go-to destination for all things comic and manga.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="">Coming Soon</a></li>
              <li><a href="">Latest</a></li>
              <li><a href="">Trending</a></li>
              <li><a href="">Manga</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Navigate</h6>
            <ul class="footer-links">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Register</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12 mx-auto">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by Umayr Nordien
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="bi bi-twitter"></i></a></li>
              <li><a class="instagram" href="#"><i class="bi bi-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="bi bi-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  z-index: 1; /* make sure it's above the main content */
}

.site-footer
{
  background-color:#323232;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}

.text-about{
  color: white;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-size:16px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;

  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#FD0363
}
.social-icons a.twitter:hover
{
  background-color:#CC095D
}
.social-icons a.linkedin:hover
{
  background-color:#9C1057
}
.social-icons a.instagram:hover
{
  background-color:#6B1650
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>