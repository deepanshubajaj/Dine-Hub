<template>
    <img class = "logo" src = "../assets/dineHubLogo.png" />
    <h1>Login Here</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="loginFunc">Login</button>

        <p>
            <router-link to="/sign-up">Go to >>> SIGN-UP</router-link>
        </p>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async loginFunc() {

            // Checking if email and password fields are empty
            if (!this.email || !this.password) {
                alert('Credentials fields are empty');
                return;  
            }

            try {
                
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );

                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: 'HomePage' });
                } else {
                    alert('Wrong credentials'); // Show alert for wrong credentials
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred. Please try again later.');
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