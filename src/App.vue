<template>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
body {
  background-color: #E5E5E5;
  color: #353535;
  margin: 0;
  padding: 0;
}

* {
  font-family: 'Lato', sans-serif;
}

#app {
  text-align: center;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
}

p {
  color: #5E5E5E;
}
</style>
