<template>
  <button type="button" class="round-btn" @click="handleClick()">
    <img v-if="isFavorite === true" src="../assets/starfav.png" alt="" srcset="" />
    <img v-else src="../assets/stardef.png" alt="" srcset="" />
  </button>
</template>

<script>
// import { onMounted } from "vue";
import usePokemons from "../store/pokemons.js";

export default {
  name: "FavBtn",
  setup() {
    const { checkIfFavorite, addToFavorites, removeFromFavorites } = usePokemons();

    return {
      checkIfFavorite,
      addToFavorites,
      removeFromFavorites,
    };
  },
  data() {
    return {
      isFavorite: this.checkIfFavorite(this.pokemon),
    };
  },
  beforeCreate() {
    this.isFavorite = this.checkIfFavorite(this.pokemon);
  },
  updated() {
    this.isFavorite = this.checkIfFavorite(this.pokemon);
  },
  props: {
    pokemon: Object,
  },
  methods: {
    handleClick() {
      if (this.checkIfFavorite(this.pokemon)) {
        this.removeFromFavorites(this.pokemon);
        this.isFavorite = false;
      } else {
        this.addToFavorites(this.pokemon);
        this.isFavorite = true;
      }
    },
  },
};
</script>

<style scoped>
.round-btn {
  align-items: center;
  border: none;
  padding: 8px;
  height: 44px;
  width: 44px;
  align-self: center;
  color: #fff;
  border-radius: 50%;
}

.round-btn img {
  height: 100%;
}
</style>