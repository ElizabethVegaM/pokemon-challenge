<template>
  <div class="main-container">
    <input type="text" placeholder="Search" class="search-input" />
    <section class="list-container">
      <Card
        v-for="pokemon in data"
        :key="pokemon.name"
        v-bind="pokemon"
        :pokemon="pokemon"
      />
    </section>
    <footer>
      <section>
        <Btn text="All" styles="red-btn wide-btn" />
        <Btn text="Favorites" styles="red-btn wide-btn" />
      </section>
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
  async created() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    this.data = data.results;
  },
};
</script>

<style scoped>
.main-container {
  max-height: 90vh;
}
.search-input {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 50px;
  margin: 20px 0;
}

.list-container {
  padding-bottom: 11vh;
}

footer {
  height: 10vh;
  width: 100vw;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
}

footer section {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
}
</style>