<template>
<header id="navbar" class="topnav">
    <a href="#" class="logo">
        <img src="/icon/buzz-form-toys-story.svg" class="logo-icon" alt="logo" width="60" height="50" style="margin-right: 20px;">
        <p class="logo-text">Buzz</p>
    </a>
    <ul class="nav-menu">
        <li class="nav-item"><a :class="{'nav-menu-active': $route.fullPath ==='/welcome' || $route.fullPath === '/welcome'}" @click.prevent="toLandingPage()">Home</a></li>
        <li class="nav-item"><a :class="{'nav-menu-active': $route.fullPath ==='/portofolio' || $route.fullPath === '/portofolio'}" @click.prevent="toPortofolio()">Portofolio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
        <li class="nav-item"><a :class="{'nav-menu-active': $route.fullPath ==='/profile' || $route.fullPath === '/profile'}" @click.prevent="toProfile()">Profile</a></li>
    </ul>

    <button id="btnHamburgerMenu" class="hamburger" @click.prevent="openNav()" href="javascript:void(0);">
        <i class="material-icons" style="padding-top: 4px;">menu</i>
    </button>
    
    <div id="myLinks" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click.prevent="closeNavByOverlay()">&times;</a>
        <div class="overlay-content">
            <a class="nav-link" :class="{'nav-menu-active': $route.fullPath ==='/welcome' || $route.fullPath === '/welcome'}" @click.prevent="toLandingPageByOverlay()" href="#">Home</a>
            <a class="nav-link" :class="{'nav-menu-active': $route.fullPath ==='/portofolio' || $route.fullPath === '/portofolio'}" @click.prevent="toPortofolioByOverlay()" href="#">Portofolio</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" :class="{'nav-menu-active': $route.fullPath ==='/profile' || $route.fullPath === '/profile'}" @click.prevent="toProfileByOverlay()" href="#">Profile</a>
        </div>
    </div>
</header>
</template>

<script type="text/javascript">
import $ from 'jquery'

export default {
    name: "Navbar",
    mounted() {
        function hideMyLinks(s) {
            var x = document.getElementById("myLinks");
            var h = document.getElementById("btnHamburgerMenu");
            if (s.matches) {                                            // If media query matches
                // document.body.style.backgroundColor = "yellow";
                x.style.width = "0%";  
                h.style.display = "none";
            }
            else {
                h.style.display = "block";
            }
        }
        var s = window.matchMedia("(min-width: 621px)")
        
        hideMyLinks(s)                                                  // Call listener function at run time
        s.addListener(hideMyLinks)                                      // Attach listener function on state changes
    },
    methods: {
        openNav() {
            var x = document.getElementById("myLinks");
            var h = document.getElementById("btnHamburgerMenu");
                // if (x.style.display === "block") {
                //     x.style.display = "none";
                //     x.style.width = "0%";
                // } 
                // else {
                //     x.style.display = "block";
                //     x.style.width = "100%";
                // }
            x.style.width = "100%";    
            h.style.display = "none";
        },
        closeNav() {
            var x = document.getElementById("myLinks");
            // var h = document.getElementById("btnHamburgerMenu");
            x.style.width = "0%";
            // h.style.display = "block";
        },
        closeNavByOverlay() {
            var x = document.getElementById("myLinks");
            var h = document.getElementById("btnHamburgerMenu");
            x.style.width = "0%";
            h.style.display = "block";
        },
        toLandingPage() {                      
            this.$router.push({
                name: 'LandingPage',
                params: {}
            })
            this.closeNav();
        },
        toLandingPageByOverlay() {                      
            this.$router.push({
                name: 'LandingPage',
                params: {}
            })
            this.closeNavByOverlay();
        },
        toPortofolio() {                      
            this.$router.push({
                name: 'Portofolio',
                params: {}
            })
            this.closeNav();
        },
        toPortofolioByOverlay() {                      
            this.$router.push({
                name: 'Portofolio',
                params: {}
            })
            this.closeNavByOverlay();
        },
        toProfile() {                      
            this.$router.push({
                name: 'Profile',
                params: {}
            })
            this.closeNav();
        },
        toProfileByOverlay() {                      
            this.$router.push({
                name: 'Profile',
                params: {}
            })
            this.closeNavByOverlay();
        },
    }
}
</script>