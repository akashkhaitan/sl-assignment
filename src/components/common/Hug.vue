<script setup>
defineProps({
  text: {
    type: String
  },
  icon: {
    type: Object
  },
  width: {
    type: String
  }
})
</script>

<template>
  <div class="hug">
    <component :is="icon"></component>
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.hug {
  width: v-bind(width);
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff20;
  color: white;
  border-radius: 46px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.62px;
}
</style>
