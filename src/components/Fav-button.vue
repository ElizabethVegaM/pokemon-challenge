<template>
  <button type="button" class="round-btn">
    <img v-if="isFavorite" src="../assets/starfav.png" alt="" srcset="">
    <img v-if="!isFavorite" src="../assets/stardef.png" alt="" srcset="">
  </button>
</template>

<script>
export default {
  name: "FavBtn",
  props: {
    isFavorite: Boolean,
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