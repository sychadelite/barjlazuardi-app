<template>
    <div class="main-container" :style="'background: url(' + person.photo + ') center / cover;'">
        <div class="info">
            <div>
                <p id="name">{{ person.name }}</p>
                <p id="job">{{ person.job }}</p>
            </div>
            <div class="links"> 
                <a href="#" content="instagram" v-tippy="{ theme : 'dark' }" @click.prevent="newTab('instagram')"><i class="fab fa-instagram" aria_hidden="true"></i></a>
                <a href="#" :content="`<p>github</p>`" v-tippy="{ theme : 'dark' }" @click.prevent="newTab('github')"><i class="fab fa-github" aria_hidden="true"></i></a>
                <a href="#" :content="person.social.whatsapp == undefined ? `<p>whatsapp: ${person.social.whatsapp}</p>` : `<p>whatsapp: 0${person.social.whatsapp}</p>`" v-tippy="{ theme : 'dark', interactive : true }" @click.prevent="newTab('whatsapp')"><i class="fab fa-whatsapp" aria_hidden="true"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import { tippy } from "vue-tippy";

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
                photo: String,
                social: {
                    instagram: String,
                    github: String,
                    whatsapp: Number,
                }
            },

            timer: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.timer++
        }, 1000);
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
                    this.person.social.instagram = 'https://www.instagram.com/barjlazuardi/'
                    this.person.social.github = 'https://github.com/sychadelite'
                    this.person.social.whatsapp = 87781303038
                    break;
                case 2:
                    this.person.name = 'Adam Canray'
                    this.person.job = 'Senior Web Developer'
                    this.person.photo = '/img/horvat.webp'
                    this.person.social.instagram = 'https://www.instagram.com/adamcanray/'
                    this.person.social.github = 'https://github.com/adamcanray'
                    this.person.social.whatsapp = undefined
                    break;
                case 3:
                    this.person.name = 'Idham Faizi'
                    this.person.job = 'System Analyst'
                    this.person.photo = '/img/horvat.webp'
                    this.person.social.instagram = 'https://www.instagram.com/idhamfaizi/'
                    this.person.social.github = 'https://github.com/idhamfaizi'
                    this.person.social.whatsapp = undefined
                    break;
                case 4:
                    this.person.name = 'Michael Handi'
                    this.person.job = 'Mid Level Manager'
                    this.person.photo = '/img/horvat.webp'
                    this.person.social.instagram = 'https://www.instagram.com/handimichaell/'
                    this.person.social.github = undefined
                    this.person.social.whatsapp = undefined
                    break;
                case 5:
                    this.person.name = 'Fhicky Lukmansyah'
                    this.person.job = 'High Level Manager'
                    this.person.photo = '/img/horvat.webp'
                    this.person.social.instagram = 'https://www.instagram.com/fhickylukmans/'
                    this.person.social.github = undefined
                    this.person.social.whatsapp = undefined
                    break;
                default:
                    this.person.name = 'Anonymous'
                    this.person.job = 'Unemployed'
                    this.person.photo = '/img/horvat.webp'
                    this.person.social.instagram = undefined
                    this.person.social.github = undefined
                    this.person.social.whatsapp = undefined
            }

            // console.log('user: ' + this.id, 'name: ' + this.person.name, 'photo: ' + this.person.photo)
        },
        newTab(identifier) {
            switch(identifier) {
                case 'instagram':
                    if(this.person.social.instagram !== undefined) {
                        window.open(this.person.social.instagram, "_blank")
                    }
                    break;
                case 'github':
                    if(this.person.social.github !== undefined) {
                        window.open(this.person.social.github, "_blank")
                    }
                    break;
                case 'whatsapp':
                    console.log(identifier + ' number: ' + this.person.social.whatsapp)
                    break;
                default:
                    console.log(identifier)
            }
        }
    }
}
</script>