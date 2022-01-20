<template>
  <button type="button" :class="styles">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
    styles: String,
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
  font-size: 22px;
}

.red-btn {
  background: #f22539;
}

.red-btn:hover {
    background: #C00E20;
}

.normal-btn {
  width: 131px;
}

.wide-btn {
  width: 80%;
  margin-right: 5px;
}

</style>