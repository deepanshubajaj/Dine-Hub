<template>
  <div id="app" :class="{ 'home-page': $route.name === 'HomePage', 'default-bg': $route.name !== 'HomePage' }">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  padding: 0;
  margin: 0;
}

.logo {
  padding-top: 10px;
  width: 150px
}

.register input,
.login input,
.addCafe input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid salmon;
}

.register button,
.login button,
.addCafe button {
  width: 320px;
  height: 40px;
  border: 2px solid salmon;
  background: goldenrod;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

/* Background image Specific to HomePage only */
.home-page {
  background-image: url('../src/assets/backgroundimage.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps the background fixed when scrolling */
  min-height: 100vh; /* Ensure it covers at least the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to top */
}

/* Background image for all pages except HomePage */
.default-bg {
  background-image: url('../src/assets/allScreenBg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh; 
}

</style>
