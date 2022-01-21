<template>
  <button type="button" :class="styles">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
    styles: String,
    isActive: Boolean,
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

.active {
  background: #f22539;
}

.inactive {
  background: #bfbfbf;
}

.active:hover {
    background: #C00E20;
}

.normal-btn {
  width: 160px;
}

.wide-btn {
  width: 80%;
  margin-right: 5px;
}

</style>