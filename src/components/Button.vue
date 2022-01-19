<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
  },
};
</script>

<style>
.button {
  align-items: center;
  padding: 11px 20px;
  width: 131px;
  height: 44px;
  background: #f22539;
  border-radius: 60px;
  border: none;
  color: #fff;
  align-self: center;
}
</style>