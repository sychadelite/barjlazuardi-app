<template>
    <div>
        <!-- start banner section -->
        <section id="banner" class="banner" style="background-image: url('/assets/background/forest-05.webp');">
            <div class="banner-content">
                <div style="margin-top: 5%;">
                    <img class="banner-content-logo" src="/assets/icon/buz-lightyear-seek.svg" alt="kali" height="100" width="100">
                    <span class="banner-content-title">
                        <h1 v-if="windowWidth > 450">bot lightyear here, ready to serve!</h1>
                        <h1 class="banner-content-title" v-else>bot lightyear here,<br>ready to serve!</h1>
                    </span>              
                </div>
            </div>
        </section>
        <!-- end banner section -->

        <div id="window-scale" style="position: fixed; bottom: 0; left: 0; text-align: start; font-size: 7px; color: #fff">
            <p>Window height: {{ windowHeight }}<br>{{ txtHeight }}<br></p>
            <p>Window width: {{ windowWidth }}<br>{{ txtWidth }}<br></p>
        </div>

        <!-- start services section -->
        <section id="service" class="service">
            <div class="service-content">
                <div>
                    <div style="margin-bottom: 2.25rem;">
                        <div class="section-content txt-center">
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

        <!-- start reviews section -->
        <section id="reviews" class="reviews">
            <div class="reviews-content">
                <div class="section-content txt-center">
                    <h1 class="section-title">Clients Satisfaction</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero, expedita veritatis quam tenetur pariatur reprehenderit ea sed, eveniet doloremque quae, laudantium non. Nesciunt cum fugiat iste, repudiandae modi recusandae.</p>
                </div>
            </div>
        
            <div class="reviews-content">
                <div style="margin-top: -2.25rem;">
                    <SliderCard/>
                </div>
            </div>
        </section>
        <!-- end reviews section -->

        <!-- start team section -->
        <section id="team" class="team">
            <div class="team-content">
                <div>
                    <div style="margin-bottom: 2.25rem;">
                        <div class="section-content txt-center">
                            <h1 class="section-title">Meet the Core Team & Advisors</h1>
                            <p>Say hello to the cool people behind our project!</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="column" v-for='index in 3' :key='index'>
                            <HoverCard :id="index"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end team section -->

        <!-- start advertisement section -->
        <section id="advertisement" class="advertisement">
            <div class="advertisement-content">
                <div class="section-content txt-center">
                    <h1 class="section-title">Valueable Information</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero, expedita veritatis quam tenetur pariatur reprehenderit ea sed, eveniet doloremque quae, laudantium non. Nesciunt cum fugiat iste, repudiandae modi recusandae.</p>
                </div>
            </div>
        
            <div class="advertisement-content">
                <!-- https://www.html.am/html-codes/marquees/html-scrolling-text.cfm -->
                <div>
                    <marquee behavior="scroll" direction="right" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                    <marquee behavior="scroll" direction="left" scrollamount="10" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                    <marquee behavior="scroll" direction="right" scrollamount="15" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                </div>

                <div>
                    <img src="/assets/avatar/AREmoji_20220514_093343_47_prev_ui.png" alt="AR">                    
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
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            txtHeight: '',
            txtWidth: '',
        }
    },
    watch: {
        windowHeight(newHeight, oldHeight) {
            this.txtHeight = `it changed to ${newHeight} from ${oldHeight}`;
        },
        windowWidth(windowWidth, oldWidth) {
            this.txtWidth = `it changed to ${windowWidth} from ${oldWidth}`;
        }        
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })

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
        onResize() {
            this.windowHeight = window.innerHeight
            this.windowWidth = window.innerWidth
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    }
}
</script>

<style>
/* start banner section */
.banner {
    position: relative;
    width: 100%;
    height: 120vh;
    /* background-image: url('/assets/background/forest-05.webp'); */
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
    margin-bottom: 2px;
    transition: 0.2s;
}

.banner-content-title {
    text-align: center;
    margin-right: 1rem;
    margin-left: 1rem;
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