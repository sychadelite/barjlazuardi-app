<template>
    <div class="dummy-content">
        <div>
            <h1 class="animate__animated animate__swing">Ini Portofolio</h1>
            <p>My name is Mohammad Barj Lazuardi Dindashwara</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    setup() {
        
    },
    mounted() {
        // this.scrollToTop()
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>

<style>
.dummy-content {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100vh;
   color: #fff;
}
</style>