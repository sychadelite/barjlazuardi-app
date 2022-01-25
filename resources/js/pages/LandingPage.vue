<template>
    <!-- start banner section -->
    <div>
        <Navbar/>
        <section id="banner" class="banner">
        <div class="banner-content">
            <div>
                <img class="banner-content-logo" src="/img/sychadelite.webp" alt="kali" height="100" width="100">
                <h1>i am the home page</h1>
            </div>
        </div>
        </section>
        <!-- end banner section -->

        <!-- start services section -->
        <section id="service" class="service">
        <div class="service-content">
            <div>
                <div style="margin-bottom: 2.25rem;">
                    <div style="text-align: center;">
                    <h1 class="sec-title">Our Services</h1>
                    <p>Welcome to our gym & fitness training centre. Sore today, strong tomorrow, Improve your fitness today</p>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Barj Lazuardi</p>
                                <p id="job">Data Analyst</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Idham Noor Faidzi</p>
                                <p id="job">Web Developer</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Adam Canray</p>
                                <p id="job">Data Analyst</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Barj Lazuardi</p>
                                <p id="job">Data Analyst</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Barj Lazuardi</p>
                                <p id="job">Data Analyst</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Buzz Lightyear</p>
                                <p id="job">Web Developer</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Buzz Lightyear</p>
                                <p id="job">Web Developer</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                    <div class="main-container">
                        <div class="info">
                            <div>
                                <p id="name">Barj Lazuardi</p>
                                <p id="job">Android Developer</p>
                            </div>
                            <div class="links"> 
                                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <!-- end services section -->

        <!-- start scroll to top button -->
        <button id="btnScrollToTop">
            <i class="material-icons">arrow_upward</i>
        </button>
        <!-- end scroll to top button -->
    </div>
</template>

<script type="text/javascript">
import $ from 'jquery'
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    },
    mounted() {
        // show/hide scroll to top button
        var previousScroll = 0;
        $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if (scroll > previousScroll){
                document.getElementById("btnScrollToTop").style.display = "block";
        } else {
                document.getElementById("btnScrollToTop").style.display = "none";
        }
        previousScroll = scroll;
        });

        // scroll to top button behavior
        const btnScrollToTop = document.querySelector("#btnScrollToTop");

        btnScrollToTop.addEventListener("click", function () {
            // window.scrollTo(0, 0);

            // plain javascript method
            // window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: "smooth"
            // });

            // jquery method
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
}
</script>

<style>
/* start banner styling */
.banner {
   position: relative;
   width: 100%;
   height: 100vh;
   background-image: url('/img/forest-04.webp');
   background-size: cover;
}

.banner-content {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
}

.banner-content-logo {
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 1rem;
   transition: 0.2s;
}

.banner-content-logo:hover {
   transform: scale(0.9);
   cursor: pointer;
   transition: 0.2s;
   filter: drop-shadow(0 0 30px #333); 
}
/* end banner styling */


/* start service styling */
.service-content {
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   margin-bottom: 6.75rem;
   margin-top: 6.75rem;
}

.service-content .sec-title {
   text-align: center;
   margin-bottom: 10px;
}

.service-content p {
   text-align: center;
}

   /* start service card styling */
   .main-container {
      position: relative;
      margin: auto;
      width: 290px;
      height: 300px;
      background: #121212;
      box-shadow: 0 10px 20px rgba(0, 0, 0, .4);
      overflow: hidden;
   }

   .main-container::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('/img/horvat.webp') center / cover;
      transition: .7s ease;
   }

   .main-container::before { 
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #121212 6%, transparent);
      opacity: 0;
      transition: .7s ease;
      z-index: 1;
   }

   .info {
      position: absolute;
      bottom: 0;
      color: #fff;
      width: 100%;
      height: 110px;
      text-align: center;
      align-items: center;
      font-size: 15px;
      opacity: 0;
      transition: .7s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      z-index: 1;
   }

   #name {
      font-weight: bolder;
   }

   .links a {
      color: #fff;
      font-size: 21px;
      padding: 5px 13px;
   }

   .main-container:hover,
   .main-container:hover .info {
      cursor: pointer;
      opacity: 1;
   }

   .main-container:hover::before {
      opacity: 1;
   }

   .main-container:hover::after {
      transform: scale(1.06);
   }
   /* end service card styling */
/* end service styling */

</style>