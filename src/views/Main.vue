<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else class="main-container">
    <input
      type="text"
      placeholder="Search"
      class="search-input"
      v-model="inputData"
      @keydown.enter="handleInput"
    />
    <section
      v-if="showFavorites && favPokemons.length > 0"
      class="list-container"
    >
      <Card
        v-for="pokemon in favPokemons"
        :key="pokemon.name"
        v-bind="pokemon"
        :pokemon="pokemon"
      />
    </section>
    <section
      v-else-if="!showFavorites && !showSearch && pokemons.length > 0"
      class="list-container"
    >
      <Card
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        v-bind="pokemon"
        :pokemon="pokemon"
      />
    </section>
    <section
      v-else-if="showSearch && !showFavorites && searchPokemon.length > 0"
      class="list-container"
    >
      <Card
        v-for="pokemon in searchPokemon"
        :key="pokemon.name"
        v-bind="pokemon"
        :pokemon="pokemon"
      />
    </section>
    <section v-else class="list-container">
      <h1>Uh-Oh!</h1>
      <p>You look lost on your journey!</p>
      <Btn text="Go back home" styles="active wide-btn" @click="backHome" />
    </section>
    <footer>
      <section>
        <Btn
          text="All"
          hasIcon
          filename="list.png"
          :class="{ active: !showFavorites }"
          styles="wide-btn"
          @click="showFavs(false)"
        />
        <Btn
          :class="{ active: showFavorites }"
          hasIcon
          filename="starwhite.png"
          text="Favorites"
          styles="wide-btn"
          @click="showFavs(true)"
        />
      </section>
    </footer>
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePokemons from "../store/pokemons.js";
import Loading from "../components/Loading.vue";
import Btn from "../components/Button.vue";
import Card from "../components/Card.vue";

export default {
  setup() {
    const {
      pokemons,
      fetchPokemons,
      fetchPokemonData,
      favPokemons,
      searchPokemon,
      loading,
    } = usePokemons();

    onMounted(() => {
      fetchPokemons();
    });

    return {
      pokemons,
      favPokemons,
      loading,
      searchPokemon,
      fetchPokemonData,
    };
  },
  components: {
    Btn,
    Card,
    Loading,
  },
  data() {
    return {
      showSearch: false,
      showFavorites: false,
    };
  },
  methods: {
    handleInput() {
      if (this.inputData) {
        this.fetchPokemonData(
          "https://pokeapi.co/api/v2/pokemon/" + this.inputData
        );
        this.showSearch = true;
      }
    },
    backHome() {
      this.$router.push("/");
    },
    showFavs(option) {
      this.showFavorites = option;
      this.showSearch = option;
    },
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

@media (max-width: 480px) {
  footer section {
    width: 90%;
  }
}
</style>