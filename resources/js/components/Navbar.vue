<template>
<header id="navbar" class="topnav">
    <a href="#" class="logo">Buzz</a>
    <ul class="nav-menu">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Courses</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
    </ul>

    <button id="btnHamburgerMenu" class="hamburger" @click.prevent="openNav()" href="javascript:void(0);">
        <i class="material-icons" style="padding-top: 4px;">menu</i>
    </button>
    
    <div id="myLinks" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click.prevent="closeNav()">&times;</a>
        <div class="overlay-content">
            <a @click.prevent="closeNav()" class="" href="#">Home</a>
            <a @click.prevent="closeNav()" class="" href="#">About</a>
            <a @click.prevent="closeNav()" class="" href="#">Courses</a>
            <a @click.prevent="closeNav()" class="" href="#">Profile</a>
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
        var s = window.matchMedia("(min-width: 601px)")
        
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
            var h = document.getElementById("btnHamburgerMenu");
            x.style.width = "0%";
            h.style.display = "block";
        }
    }
}
</script>