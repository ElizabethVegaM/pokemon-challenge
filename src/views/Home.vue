<template>
  <div class="hello">
    <img alt="Pikachu logo" src="../assets/pikachu.png" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <Btn text="Get started" @click="toMain()" styles="active normal-btn" />
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
export default {
  name: "Home",
  components: {
    Btn,
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
  width: 50%;
  margin: 50px auto;
}

@media (max-width: 480px) {
  img {
    width: 100%;
  }
  h1 {
    font-size: 26px;
  }
  p {
    font-size: 18px;
  }
}
</style>
