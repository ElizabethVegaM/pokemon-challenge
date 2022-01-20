<template>
  <div>
    <input type="text" placeholder="search" class="search" />
    <div>

    </div>
    <section class="list-container">
      <Card v-for="pokemon in data" :key="pokemon.name" v-bind="pokemon" :pokemon="pokemon" />
    </section>
    <footer>
      <Btn text="All" />
      <Btn text="Favorites" />
    </footer>
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
import Card from "../components/Card.vue";

export default {
  components: {
    Btn,
    Card,
  },
  data() {
    return {
      data: null,
      isModalVisible: false,
    };
  },
  async mounted() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    this.data = data.results;
  },
};
</script>

<style scoped>
.search {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: none;
  width: 315px;
  height: 50px;
}

footer {
  height: 80px;
  width: 100vw;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>