<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <button tabindex="1" v-bind="attrs"><slot /></button>
</template>

<style scoped>
button {
  background: var(--primary-but);
  color: white;
  border: none;
  font-weight: 500;
  border-radius: 3px;
  font-size: 15px;
}
button:disabled {
  background: #edeef8;
  color: #a9abc1;
}
</style>
