<template>
  <div class="hello">
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world..
    </p>
    <Btn text="Get started" />
  </div>
</template>

<script>
import Btn from "./Button.vue";
export default {
  name: "WelcomePage",
  components: {
    Btn,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    display: flex;
    flex-direction: column;  
  }
</style>
