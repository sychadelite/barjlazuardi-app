<template>
    <div style="height: 140vh; color: #fff; margin: auto; text-align: center; justify-content: center; margin-top: 25%;">
        <h1>Ini Profile</h1>  
        <p>Your Random Name: {{ randomName }}</p>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            randomName: null
        }
    },
    setup() {
        
    },
    mounted() {
        // this.scrollToTop()
        this.getPublicIp()
    },
    methods: {
        getPublicIp() {
            axios.get('https://random-data-api.com/api/name/random_name')
                .then(response => {                 
                    console.log(response.data)
                    this.randomName = response.data.name_with_middle
            })
            // fetch('https://random-data-api.com/api/blood/random_blood')
            // .then(response => response.json())
            // .then(data => console.log(data));
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>