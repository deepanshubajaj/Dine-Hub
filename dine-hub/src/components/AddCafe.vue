<template>
    <HeaderBlock />
    <h1>Hello {{ userName }}, Welcome to Add Café Page !!</h1>
    <img class="cafeGif" src="../assets/cafes.gif" />
    <img class="newGif" src="../assets/new.gif" />
    
    <form class="addCafe">
        <input type="text" name="name" placeholder="Enter Café Name" v-model="cafes.name" />
        <input type="text" name="address" placeholder="Enter Café Address" v-model="cafes.address" />
        <input type="text" name="contact" placeholder="Enter Café Contact No." v-model="cafes.contact" />
        <button type="button" v-on:click="addCafes">Add new Café</button>
    </form>

</template>

<script>

import HeaderBlock from './HeaderBlock.vue';
import axios from 'axios';

export default {
    name: 'AddCafe',
    components: {
        HeaderBlock
    },
    data() {
        return {
            cafes: {
                name: '',
                address: '',
                contact: ''
            },
            userName: ''
        }
    },
    methods: {
        async addCafes() {
            console.warn(this.cafes)
            const result = await axios.post("http://localhost:3000/cafes", {
                name: this.cafes.name,
                address: this.cafes.address,
                contact: this.cafes.contact,
            });

            if ( result.status == 201) {
                this.$router.push({name: 'HomePage'})
            }

            console.warn("result: ", result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name: 'SignUp'})
        } else {
            this.userName = JSON.parse(user).name; // retrieve user name from localStorage
        }
    }
}

</script>

<style>

h1 {
    padding-top: 20px;
    padding-bottom: 30px; 
    text-align: center; 
}

.cafeGif {
    position: absolute;
    width: 400px; 
    height: auto;
    left: 50px;
}

.newGif {
    position: absolute;
    width: 300px; 
    height: auto;
    right: 100px;
}

/* Hiding images on smaller screens */
@media (max-width: 768px) {
    .cafeGif,
    .newGif {
        display: none;
    }
}

</style>