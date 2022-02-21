<template>
    <div class="dummy-content">
        <div>
            <h1 class="animate__animated animate__bounce">Ini Profile</h1>  
            <div>
                <object data="http://stackoverflow.com/does-not-exist.png" type="image/png">
                    <img class="rounded-circle center-cropped avatar animate__animated animate__rotateIn" style="--animate-duration: 2s;" :src="randomImage.picture.large" alt="Image API">
                </object>
                <p class="animate__animated animate__zoomInLeft" style="--animate-duration: 2s;">Name: <strong>{{ randomName }}</strong></p>
                <p class="animate__animated animate__zoomInLeft" style="--animate-duration: 2s;">Email: <strong>{{ randomImage.email }}</strong></p>
                <p class="animate__animated animate__zoomInLeft" style="--animate-duration: 2s;">Gender: <strong>{{ randomImage.gender }}</strong></p>
                <p class="animate__animated animate__zoomInLeft" style="--animate-duration: 2s;">Capital: <strong>{{ randomCountry.capital }}</strong></p>
                <p class="animate__animated animate__zoomInLeft" style="--animate-duration: 2s;">Language: <strong>{{ randomCountry.language }}</strong></p>
                <p class="animate__animated animate__zoomInLeft" style="--animate-duration: 2s;">Nations: <strong>{{ randomCountry.nationality }}</strong></p>
            </div>
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
                    console.log(response.data)
                    this.randomName = response.data.name_with_middle
            })
            // fetch('https://random-data-api.com/api/blood/random_blood')
            // .then(response => response.json())
            // .then(data => console.log(data));
        },
        getRandomCountry() {
            axios.get('https://random-data-api.com/api/nation/random_nation')
                .then(response => {
                    console.log(response.data)
                    this.randomCountry = response.data
                })
        },
        getRandomImage() {
            axios.get('https://randomuser.me/api/')
                .then(response => {
                    console.log(response.data.results[0])
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
.some-class {
    font-weight: 700;
}
</style>