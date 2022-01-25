<template>
    <div class="swiper mySwiper container">
        <div class="swiper-wrapper content">
            <div class="swiper-slide slider-card" v-for='index in 18' :key='index'>
                <div class="slider-card-content">
                    <div class="image">
                        <img src="/img/horvat.webp" alt="horvat">
                    </div>
                    <div class="media-icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="name-achievement">
                        <span class="name">Crazy Rich Perumnas Tangerang</span>
                        <span class="year">2022</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="button">
                        <button class="btn-about-me">Explore</button>
                        <button class="btn-vote-me">Vote</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    name: "SliderCard",
    components: {

    },
    setup() {

    },
    mounted() {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
    }
}
</script>

<style>
.swiper {
    width: 950px;
}
.slider-card .image {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    padding: 3px;
    background: #7d2ae8;
}
.slider-card .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #fff;
}
.slider-card {
    position: relative;
    background: #fff;
    border-radius: 20px;
    margin: 20px 0;
    width: 280px;
}
.slider-card::before {
    content: "";
    position: absolute;
    height: 40%;
    width: 100%;
    background: #7d2ae8;
    border-radius: 20px 20px 0 0;
}
.slider-card .slider-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    position: relative;
    z-index: 50;
}
.slider-card .media-icons {
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.slider-card .media-icons i {
    margin-top: 10px;
    opacity: 0.6;
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
}
.slider-card .media-icons i:hover {
    opacity: 1;
}
.slider-card .name-achievement {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    color: #333;
}
.name-achievement .name {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
}
.name-achievement .year {
    font-size: 15px;
    font-weight: 500;
    text-align: center;
}
.slider-card .rating {
    display: flex;
    align-items: center;
    margin-top: 18px;
}
.slider-card .rating i {
    font-size: 18px;
    margin: 0 2px;
    color: #7d2ae8;
}
.slider-card .button {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.slider-card .button button {
    background: #7d2ae8;
    outline: none;
    border: none;
    color: #fff;
    padding: 8px 22px;
    border-radius: 20px;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.button button:hover {
    background: #6616d0;
}
</style>