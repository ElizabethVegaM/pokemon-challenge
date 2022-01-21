<template>
  <section class="card-container">
    <div class="card">
      <button class="pokemon-list" type="button" @click="showModal()">
        {{ pokemon.name }}
      </button>
      <FavBtn v-bind="pokemon" :pokemon="pokemon" />
    </div>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      v-bind="pokemon"
      :pokemon="pokemon"
    />
  </section>
</template>

<script>
import FavBtn from "./Fav-button.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    FavBtn,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      isPokemonFavorite: false,
    };
  },
  props: {
    pokemon: Object,
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.card-container {
  margin: 0;
  padding: 0;
}

.card {
  background: #ffffff;
  border-radius: 5px;
  height: 50px;
  padding: 0 12px;
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card .pokemon-list {
  border: none;
  font-size: 22px;
  text-align: initial;
  text-transform: capitalize;
  background: transparent;
  width: 100%;
}

.card span {
  height: 80%;
}

span img {
  height: 60%;
}
</style>