<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <div name="header">
          <img
            :src="pokemon.sprites.other.home.front_default"
            :alt="pokemon.name + 'front picture'"
          />
        </div>
        <button type="button" class="btn-close" @click="close">
          <img src="../assets/close.png" alt="" srcset="" />
        </button>
      </header>

      <section class="modal-body">
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
        <hr>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <hr>
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <hr>
        <p>
          <strong>Types: </strong>
          <span v-for="type in pokemon.types" :key="type.type.name"
            >{{ type.type.name }} ,
          </span>
        </p>
        <hr>
      </section>

      <footer class="modal-footer">
        <Btn text="Share to my friends" styles="red-btn wide-btn" />
        <FavBtn v-bind="pokemon" :pokemon="pokemon" />
      </footer>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
import FavBtn from "../components/Fav-button.vue";
export default {
  name: "Modal",
  components: {
    Btn,
    FavBtn,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    pokemon: Object,
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50%;
  border-radius: 5px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
  background-image: url("../assets/background.png");
  background-size: cover;
  height: 40%;
}

.modal-header div {
  width: 100%;
}

.modal-header img {
  margin: auto;
  height: 100%;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: space-evenly;
}

.modal-body {
  position: relative;
  padding: 20px 40px;
  text-align: initial;
}

.modal-body p {
  text-transform: capitalize;
}

.modal-body strong {
  font-weight: 800;
}

.modal-body hr {
  border-bottom: 1px #eeeeeef6;
  width: 100%;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-close img {
  height: 30px;
}
</style>