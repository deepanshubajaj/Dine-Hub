<template>
    <HeaderBlock />
    <h1>Hello {{ userName }}, Welcome to Update Café Page !!</h1>
    <img class="cafeGif" src="../assets/cafes.gif" />
    <img class="updateGif" src="../assets/update.gif" />

    <form class="addCafe">
        <input type="text" name="name" placeholder="Enter Café Name" v-model="cafes.name" />
        <input type="text" name="address" placeholder="Enter Café Address" v-model="cafes.address" />
        <input type="text" name="contact" placeholder="Enter Café Contact No." v-model="cafes.contact" />
        <button type="button" v-on:click="updateCafes">Update Café</button>
    </form>
    
</template>

<script>

import HeaderBlock from './HeaderBlock.vue';
import axios from 'axios';

export default {
    name: 'UpdateCafe',
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
        async updateCafes() {
            console.warn(this.cafes)
            const result = await axios.put('http://localhost:3000/cafes/' + this.$route.params.id, {
                name: this.cafes.name,
                address: this.cafes.address,
                contact: this.cafes.contact,
            });

            if ( result.status == 200) {
                this.$router.push({name: 'HomePage'})
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name: 'SignUp'})
        } else {
            this.userName = JSON.parse(user).name; // retrieve user name from localStorage
        }

        const result = await axios.get('http://localhost:3000/cafes/' + this.$route.params.id)
        //console.warn(this.$route.params.id)
        console.warn(result.data)
        this.cafes = result.data
    }
}

</script>

<style>

.cafeGif {
    position: absolute;
    width: 400px; 
    height: auto;
    left: 50px;
}

.updateGif {
    position: absolute;
    width: 300px; 
    height: auto;
    right: 100px;
}

/* Hiding images on smaller screens */
@media (max-width: 768px) {
    .cafeGif,
    .updateGif {
        display: none;
    }
}

</style>