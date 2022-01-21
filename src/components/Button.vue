<template>
  <button type="button" :class="styles">
    <img
      v-if="hasIcon"
      :src="require(`@/assets/${filename}`)"
      alt=""
      srcset=""
    />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
    styles: String,
    isActive: Boolean,
    hasIcon: Boolean,
    filename: String,
  },
};
</script>

<style scoped>
button {
  align-items: center;
  border: none;
  padding: 11px 20px;
  height: 44px;
  align-self: center;
  color: #fff;
  border-radius: 60px;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 20px;
}

button img {
  height: 80%;
}

.active {
  background: #f22539;
}

.inactive {
  background: #bfbfbf;
}

.active:hover {
  background: #c00e20;
}

.normal-btn {
  width: 160px;
}

.wide-btn {
  width: 80%;
  margin-right: 5px;
}
</style>