<template>
  <div>
    <button type="button" class="card" @click="showModal()">
      {{ pokemon.name }}
      <span><img alt="favorite" src="../assets/star1.png" /></span>
    </button>
    <Modal v-show="isModalVisible" @close="closeModal" :pokemon="pokemon" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
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
.card {
  background: #ffffff;
  border: none;
  list-style: none;
  border-radius: 5px;
  text-transform: capitalize;
  text-align: initial;
  height: 50px;
  padding-left: 12px;
}

.card span {
  height: 80%;
}

span img {
  height: 60%;
}
</style>