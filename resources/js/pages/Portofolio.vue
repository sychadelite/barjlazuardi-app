<template>
    <div>
        <section class="dummy-section" style="background-color: #010001;">
            <!-- autoplay will only work if you specify it as muted by default -->
            <!-- <iframe width="1060" height="615" src="https://www.youtube.com/embed/L_gGKD8UNKA?autoplay=1&mute=1" title="Youtube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <video id="myVideo" autoplay loop muted>
                <source src="/assets/video/Rotation of The Planet Earth.mp4">
            </video>
            
            <!-- Optional: some overlay text to describe the video -->                
            <div class="section-content content-video">
                <h1 class="section-title">Description</h1>
                <marquee behavior="scroll" direction="right" style="color: white;">Here is some informations on scrolling text... left to right!</marquee>
                <!-- Use a button to pause/play the video with JavaScript -->
                <button id="myBtn" @click.prevent="pauseVideo()">Pause</button>
            </div>
        </section>
        
        <section class="dummy-section">
            <div class="section-content">
                <h1 class="section-title animate__animated animate__swing">Ini Portofolio</h1>
                <p>My name is Mohammad Barj Lazuardi Dindashwara</p>
            </div>
        </section>

        <section class="dummy-section">
            <div class="section-content">
                <div class="wave">
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                </div>
            </div>
        </section>

        <!-- start scroll to top button -->
        <BtnToTop/>
        <!-- end scroll to top button -->
    </div>
</template>

<script>
import BtnToTop from '../components/floated/BtnToTop.vue'

export default {
    components: {
        BtnToTop
    },
    mounted() {
        
    },
    methods: {
        pauseVideo() {
            // Get the video
            var video = document.getElementById("myVideo");

            // Get the button
            var btn = document.getElementById("myBtn");

            if (video.paused) {
                video.play();
                btn.innerHTML = "Pause";
            } else {
                video.pause();
                btn.innerHTML = "Play";
            }
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    },
    computed: {
        
    }
}
</script>

<style>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

/* Add some content at the bottom of the video/page */
.content-video {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  height: fit-content;
  padding: 20px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}


.wave {
    height: 306px;
    width: 306px;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateX(60deg);
}
.wave span {
    position: absolute;
    display: block;
    border: 3px solid #00802A;
    border-radius: 50%;
    box-shadow: 0 5px 0 #014d1a;
    animation: animate_wave 3s ease-in-out infinite;
}
@keyframes animate_wave {
    0%,100% {
        transform: translateZ(-100px);
    }
    50% {
        transform: translateZ(100px);
    }
}


.wave span:nth-child(1) {
    inset: 0;
    animation-delay: 1.6s;
}
.wave span:nth-child(2) {
    inset: 10px;
    animation-delay: 1.5s;
}
.wave span:nth-child(3) {
    inset: 20px;
    animation-delay: 1.4s;
}
.wave span:nth-child(4) {
    inset: 30px;
    animation-delay: 1.3s;
}
.wave span:nth-child(5) {
    inset: 40px;
    animation-delay: 1.2s;
}
.wave span:nth-child(6) {
    inset: 50px;
    animation-delay: 1.1s;
}
.wave span:nth-child(7) {
    inset: 60px;
    animation-delay: 1s;
}
.wave span:nth-child(8) {
    inset: 70px;
    animation-delay: 0.9s;
}
.wave span:nth-child(9) {
    inset: 80px;
    animation-delay: 0.8s;
}
.wave span:nth-child(10) {
    inset: 90px;
    animation-delay: 0.7s;
}
.wave span:nth-child(11) {
    inset: 100px;
    animation-delay: 0.6s;
}
.wave span:nth-child(12) {
    inset: 110px;
    animation-delay: 0.5s;
}
.wave span:nth-child(13) {
    inset: 120px;
    animation-delay: 0.4s;
}
.wave span:nth-child(14) {
    inset: 130px;
    animation-delay: 0.3s;
}
.wave span:nth-child(15) {
    inset: 140px;
    animation-delay: 0.2s;
}
.wave span:nth-child(16) {
    inset: 150px;
    animation-delay: 0.1s;
}


.wave span:nth-child(1), .wave span:nth-child(5),
.wave span:nth-child(9), .wave span:nth-child(13) {
    border-color: #F8F2FF;
    box-shadow: 0 5px 0 #c5c2c9;
}
.wave span:nth-child(2), .wave span:nth-child(6),
.wave span:nth-child(10), .wave span:nth-child(14) {
    border-color: #3FC1C9;
    box-shadow: 0 5px 0 #339da3;
}
.wave span:nth-child(3), .wave span:nth-child(7),
.wave span:nth-child(11), .wave span:nth-child(15) {
    border-color: #FC5185;
    box-shadow: 0 5px 0 #c53963;
}
.wave span:nth-child(4), .wave span:nth-child(8),
.wave span:nth-child(12), .wave span:nth-child(16) {
    border-color: #5d23a4;
    box-shadow: 0 5px 0 #4b247a;
}
</style>