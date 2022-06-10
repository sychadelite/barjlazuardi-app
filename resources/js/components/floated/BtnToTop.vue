<template>
    <div>
        <button id="btnScrollToTop" class="ripple">
            <i class="material-icons" style="padding-top: 3px;">arrow_upward</i>
        </button>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'BtnToTop',
    data() {
        return {
            
        }
    },
    mounted() {        
        // show/hide scroll to top button
        var previousScroll = 0;

        $(window).scroll(function(event) {
            if(window.location.pathname === '/' || window.location.pathname === '/portofolio') {
                var scroll = $(this).scrollTop();

                if (scroll > previousScroll){
                    document.getElementById("btnScrollToTop").style.display = "block";
                } else {
                    document.getElementById("btnScrollToTop").style.display = "none";
                }

                previousScroll = scroll;
            }
        });

        // scroll to top button behavior
        const btnScrollToTop = document.querySelector("#btnScrollToTop");

        btnScrollToTop.addEventListener("click", function () {
            // jquery method
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    },
    beforeDestroy() {

    }
}
</script>