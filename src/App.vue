<template>
  <img alt="Pikamchu logo" src="./assets/pikachu.png">
  <WelcomePage />
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'

export default {
  name: 'App',
  components: {
    WelcomePage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
body {
  background-color: #E5E5E5;
  font-family: 'Lato', sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
