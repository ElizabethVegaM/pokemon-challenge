<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
body {
  background-color: #e5e5e5;
  color: #353535;
  margin: 0;
  padding: 0;
}

* {
  font-family: "Lato", sans-serif;
}

#app {
  text-align: center;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
}

p {
  color: #5e5e5e;
}

@media (max-width: 480px) {
  #app {
    width: 90%;
  }
}
</style>
