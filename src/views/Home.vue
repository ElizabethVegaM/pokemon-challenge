<template>
  <div class="hello">
    <img alt="Pikachu logo" src="../assets/pikachu.png" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world..
    </p>
    <Btn text="Get started" v-on:click="toMain()" />
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
export default {
  name: "Home",
  components: {
    Btn,
  },
  props: {
    msg: String,
  },
  methods: {
    toMain: function () {
      this.$router.push("main");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 40%;
  margin: 50px auto;
}
</style>
