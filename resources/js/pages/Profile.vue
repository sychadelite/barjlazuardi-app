<template>
    <div style="min-height: 140vh; color: #fff; margin: auto; text-align: center; margin-top: 15%;">
        <h1>Ini Profile</h1>  
        <div>
            <img class="rounded-circle center-cropped avatar" :src="randomImage.picture.large" alt="Image API">
            <p>Name: <strong>{{ randomName }}</strong></p>
            <p>Email: <strong>{{ randomImage.email }}</strong></p>
            <p>Gender: <strong>{{ randomImage.gender }}</strong></p>
            <p>Capital: <strong>{{ randomCountry.capital }}</strong></p>
            <p>Language: <strong>{{ randomCountry.language }}</strong></p>
            <p>Nations: <strong>{{ randomCountry.nationality }}</strong></p>
        </div>
    </div>
</template>

<script>
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