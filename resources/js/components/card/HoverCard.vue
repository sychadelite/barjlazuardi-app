<template>
    <div class="main-container" :style="'background: url(' + person.photo + ') center / cover;'">
        <div class="info">
            <div>
                <p id="name">{{ person.name }}</p>
                <p id="job">{{ person.job }}</p>
            </div>
            <div class="links"> 
                <a href="#"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                <a href="#"><i class="fab fa-github" aria_hidden="true"></i></a>
                <a href="#"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HoverCard",
    props: {
        id: Number
    },
    data() {
        return {
            person: {
                name: String,
                job: String,
                photo: String
            }
        }
    },
    mounted() {
        
    },
    created() {
        this.getPerson()
    },
    methods: {
        getPerson() {
            switch(this.id) {
                case 1:
                    this.person.name = 'Barj Lazuardi'
                    this.person.job = 'Junior Web Developer'
                    this.person.photo = '/img/20211122_142826_cropped.jpg'
                    break;
                case 2:
                    this.person.name = 'Adam Canray'
                    this.person.job = 'Senior Web Developer'
                    this.person.photo = '/img/horvat.webp'
                    break;
                case 3:
                    this.person.name = 'Idham Faidzi'
                    this.person.job = 'System Analyst'
                    this.person.photo = '/img/horvat.webp'
                    break;
                case 4:
                    this.person.name = 'Michael Handi'
                    this.person.job = 'Mid Level Manager'
                    this.person.photo = '/img/horvat.webp'
                    break;
                case 5:
                    this.person.name = 'Fhicky Lukmansyah'
                    this.person.job = 'High Level Manager'
                    this.person.photo = '/img/horvat.webp'
                    break;
                default:
                    this.person.name = 'Anonymous'
                    this.person.job = 'Unemployed'
                    this.person.photo = '/img/horvat.webp'
            }

            // console.log('user: ' + this.id, 'name: ' + this.person.name, 'photo: ' + this.person.photo)
        }
    }
}
</script>