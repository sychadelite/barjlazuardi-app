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
                    <div class="column" v-for='index in 2' :key='index'>
                        <HoverCard/>
                    </div>
                    <div class="column">
                        <div class="main-container">
                            <div class="info">
                                <div>
                                    <p id="name">Adam Canray</p>
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
                </div>
            </div>
        </div>
        </section>
        <!-- end services section -->
        
        <!-- start slider card section -->
        <section id="achievement" class="achievement">
            <div class="achievement-content">
                <div>
                    <SliderCard/>
                </div>
            </div>
        </section>
        <!-- end slider card section -->

        <!-- start scroll to top button -->
        <button id="btnScrollToTop" class="ripple">
            <i class="material-icons" style="padding-top: 3px;">arrow_upward</i>
        </button>
        <!-- end scroll to top button -->
    </div>
</template>

<script type="text/javascript">
import $ from 'jquery'
import Navbar from '../components/Navbar.vue'
import HoverCard from '../components/card/HoverCard.vue'
import SliderCard from '../components/card/SliderCard.vue'

export default {
    components: {
        Navbar, HoverCard, SliderCard
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
/* start banner section */
.banner {
   position: relative;
   width: 100%;
   height: 100vh;
   background-image: url('/img/forest-05.webp');
   background-size: cover;
}

.banner-content {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   color: #fff;
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
/* end banner section */


/* start service section */
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
/* end service section */

/* start achievement section*/
.achievement {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #041e1d;
}
/* end achievement section*/

</style>