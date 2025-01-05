<template>
    <div class="nav">
        <img class="logo1" src="../assets/dineHubLogo.png" />
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Café</router-link>
        <a v-on:click="logout" href="#">Logout</a>
        <img class="logo1" src="../assets/profilePic.png" />
    </div>
</template>

<script>

export default {
    name: 'HeaderBlock',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name: 'LoginPage'})
        }
    }
}

</script>

<style>

.nav {
    background-color: saddlebrown;
    overflow: hidden;
    text-align: center;
    font-weight: bold; 
    padding: 10px 0;
}
.nav a {
    /*float: left;*/
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
    display: inline-block;
}
.nav a:hover {
    background: #ddd;
    color: #333;
} 

/* Logo styling */
.logo1 {
    width: 40px;  /* Adjust the size of the logo */
    height: 40px;  /* Ensure the logo is square */
    border-radius: 50%;  /* Makes the logo circular */
    margin-right: 15px;  /* Adds space between the logo and Home link */
}

/* To align text and logo properly */
.nav a,
.logo1 {
    display: inline-block;
    vertical-align: middle;
}

</style>