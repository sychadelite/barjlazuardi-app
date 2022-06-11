<template>    
    <div class="swiper mySwiper container">    
        <div class="swiper-wrapper content">
            <div class="swiper-slide slider-card" v-for="row in review.client" :key="row.id">
                <div class="slider-card-content">
                    <div class="image">
                        <img src="/assets/avatar/AREmoji_20220514_093904_792.png" alt="horvat">
                    </div>
                    <div class="media-icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="name-achievement">
                        <span class="name">{{ row.username + row.id }}</span>
                        <span class="description" v-if="row.status == 'accepted'">{{ row.comment }}</span>
                        <span class="description" v-if="row.status == 'rejected'"><i>{{ row.comment }}</i></span>
                    </div>
                    <div class="rating">
                        <span><i class="fas fa-star" v-for="index in (row.star / 2)" :key="index"></i></span>
                        <span><i class="far fa-star" v-for="index in (5 - (row.star / 2))" :key="index"></i></span>
                    </div>
                    <div class="button">
                        <button class="btn-about-me">Explore</button>
                        <button class="btn-vote-me">Vote</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider-indicator">
            <div class="swiper-button-next ripple" id="btnNavigatorSlider"></div>
            <div class="swiper-button-prev ripple" id="btnNavigatorSlider"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SliderCard",
    props: {
        
    },
    data() {
        return {
            review: {
                client: []
            }
        }
    },
    mounted() {
        this.getClient()

        var swiper = new Swiper(".mySwiper", {
            speed: 1000,
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            autoplay: {
                delay: 6500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }

            // Responsive breakpoints
            /*
            breakpoints: {
                // when window width is <= 480px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                },
                // when window width is <= 900px
                480: {
                    slidesPerView: 2,
                    spaceBetweenSlides: 10,
                    slidesPerGroup: 2,
                },
                // when window width is <= 900px
                600: {
                    slidesPerView: 2,
                    spaceBetweenSlides: 10,
                    slidesPerGroup: 2,
                }
            }
            */
        });
    },
    methods: {
        getClient() {
            for(let i = 0; i<9; i++) {
                switch(i) {
                    case 0:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: 'website keren, inovatif, informatif dan kreatif.',
                            star: 6,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    case 1:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: 'website keren, inovatif, informatif dan kreatif.',
                            star: 6,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    case 2:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: 'website mantap, suka banget, desainnya keren dan ga ngebosenin.',
                            star: 10,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    case 3:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: 'website sampah, sok ngide, cacat dan ngelag.',
                            star: 4,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    case 4:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: '국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.',
                            star: 4,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    case 5:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: 'जैसी ध्वनि संस्थान मर्यादित विस्तरणक्षमता बदले मुख्यतह विश्लेषण',
                            star: 10,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    case 6:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: '判行座再規掲障者続保第載宮両経局堀中構。',
                            star: 8,
                            status: 'accepted'
                        }
                        
                        this.review.client.push(obj)
                        break;
                    default:
                        var obj = {
                            id: 666 + i,
                            username: 'Anonymous',
                            comment: 'Comments on this review have been limited.',
                            star: 10,
                            status: 'rejected'
                        }

                        this.review.client.push(obj)
                }
            }
        }
    }
}
</script>

<style>
.slider-indicator {
    --swiper-theme-color: #034947;
}
.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -5px;
}
.swiper {
    width: 900px;
}
.slider-card .image {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    padding: 3px;
    background: #041e1d;
}
.slider-card .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #8ca2ae;
}
.slider-card {
    position: relative;
    background: #d5dcdf;
    border-radius: 20px;
    margin: 20px 0;
    width: 200px;
    cursor: pointer;
}
.slider-card::before {
    content: "";
    position: absolute;
    height: 140px;
    width: 100%;
    background: #103433;
    border-radius: 70px 20px 0 0;
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
.name-achievement .description {
    font-size: 15px;
    font-weight: 500;
    text-align: center;
}
.slider-card .rating {
    display: flex;
    align-items: center;
    margin-top: 18px;
}
.slider-card .rating span i {
    font-size: 18px;
    margin: 0 2px;
    color: #103433;
}
.slider-card .button {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.slider-card .button button {
    background: #103433;
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
    background: #415c5b;
}
</style>