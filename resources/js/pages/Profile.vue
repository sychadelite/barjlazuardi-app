<template>
    <div class="dummy-section">
        <div class="section-content">
            <h1 class="section-title mt-half animate__animated animate__jello">My Profile</h1>
            <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_y9czxcb9.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    components: {

    },
    data() {
        return {
            randomName: null,
            randomCountry: {
                capital: null,
                language: null,
                nationality: null,
            },
            randomImage: {
                gender: '',
                email: '',
                picture: {
                    large: ''
                }
            }
        }
    },
    setup() {
        
    },
    mounted() {
        // this.scrollToTop()
        this.getRandomName(),
        this.getRandomCountry(),
        this.getRandomImage()
    },
    methods: {
        getRandomName() {
            axios.get('https://random-data-api.com/api/name/random_name')
                .then(response => {                 
                    // console.log(response.data)
                    this.randomName = response.data.name_with_middle
            })
            // fetch('https://random-data-api.com/api/blood/random_blood')
            // .then(response => response.json())
            // .then(data => console.log(data));
        },
        getRandomCountry() {
            axios.get('https://random-data-api.com/api/nation/random_nation')
                .then(response => {
                    // console.log(response.data)
                    this.randomCountry = response.data
                })
        },
        getRandomImage() {
            axios.get('https://randomuser.me/api/')
                .then(response => {
                    console.log(response.data.results)
                    this.randomImage = response.data.results[0]
                })
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>

<style>
</style>