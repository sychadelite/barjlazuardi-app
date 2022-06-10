<template>
    <div>
        <!-- start banner section -->
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
                        <div class="section-content">
                            <h1 class="section-title">Our Services</h1>
                            <p>Welcome to our platform as a service centre.<br>Sore today, strong tomorrow, Improve your skills today</p>
                            <!-- <h1 class="section-title">Our Services</h1>
                            <p>Welcome to our gym & fitness training centre. Sore today, strong tomorrow, Improve your fitness today</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end services section -->

        <!-- start team section -->
        <section id="team" class="team">
            <div class="team-content">
                <div>
                    <div style="margin-bottom: 2.25rem;">
                        <div class="section-content">
                            <h1 class="section-title">Meet the Core Team & Advisors</h1>
                            <p>Say hello to the cool people behind our project!</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="column" v-for='index in 5' :key='index'>
                            <HoverCard :id="index"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end team section -->
        
        <!-- start reviews section -->
        <section id="reviews" class="reviews">
            <div class="section-content">
                <h1 class="section-title">Clients Satisfaction</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero, expedita veritatis quam tenetur pariatur reprehenderit ea sed, eveniet doloremque quae, laudantium non. Nesciunt cum fugiat iste, repudiandae modi recusandae.</p>
            </div>
        
            <div class="reviews-content">
                <div style="margin-top: -2.25rem;">
                    <SliderCard/>
                </div>
            </div>
        </section>
        <!-- end reviews section -->

        <!-- start advertisement section -->
        <section id="advertisement" class="advertisement">
            <div class="section-content">
                <h1 class="section-title">Valueable Information</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero, expedita veritatis quam tenetur pariatur reprehenderit ea sed, eveniet doloremque quae, laudantium non. Nesciunt cum fugiat iste, repudiandae modi recusandae.</p>
            </div>
        
            <div class="advertisement-content">
                <!-- https://www.html.am/html-codes/marquees/html-scrolling-text.cfm -->
                <div>
                    <marquee behavior="scroll" direction="right" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                    <marquee behavior="scroll" direction="left" scrollamount="10" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                    <marquee behavior="scroll" direction="right" scrollamount="15" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                </div>
            </div>
        </section>
        <!-- end advertisement section -->

        <!-- start scroll to top button -->
        <BtnToTop/>
        <!-- end scroll to top button -->
    </div>
</template>

<script type="text/javascript">
import $ from 'jquery'

import HoverCard from '../components/card/HoverCard.vue'
import SliderCard from '../components/card/SliderCard.vue'
import BtnToTop from '../components/floated/BtnToTop.vue'

export default {
    components: {
        HoverCard, SliderCard, BtnToTop
    },
    data() {
        return {
            
        }
    },
    mounted() {
        // this.scrollToTop()

        // swal({
        //     title: "Sorry mate, my website isn't completed yet",
        //     text: "Regarding design or features, currently still under development.",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //     closeOnClickOutside: false,
        //     closeOnEsc: false,
        //     })
        //     .then((willDelete) => {
        //     if (willDelete) {
        //         swal("Poof! Your imaginary file has been deleted!", {
        //             icon: "success",
        //         });
        //     } else {
        //         swal("Thank you for your understanding");
        //     }
        // });
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>

<style>
/* start banner section */
.banner {
    position: relative;
    width: 100%;
    height: 120vh;
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


/* start service & reviews section */
.advertisement-content,
.reviews-content,
.team-content,
.service-content {
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    margin-bottom: 6.75rem;
    margin-top: 6.75rem;
}
/* end service & reviews section */
</style>