<template>
    <img class = "logo" src = "../assets/dineHubLogo.png" />
    <h1>Sign Up Here</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Go to >>> LOGIN</router-link>
        </p>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name : 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {

            // Check if all fields are filled
            if (!this.name || !this.email || !this.password) {
                alert('Data is Missing!! \nPlease fill all the given fields.');
                return;  
            }

            try {
                let result = await axios.post("http://localhost:3000/users", {
                    email: this.email,
                    password: this.password,
                    name: this.name
                });

                console.warn(result);
                
                if (result.status == 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({ name: 'HomePage' });
                }
            } catch (error) {
                console.error(error);
                alert('Something went wrong. Please try again later.');
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({name: 'HomePage'})
        }
    }
}
</script>

<style>
</style>