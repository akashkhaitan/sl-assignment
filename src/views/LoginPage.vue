<script setup>
import LoginCard from '@/components/LoginCard.vue'
</script>

<template>
  <main class="main-container">
    <LoginCard></LoginCard>
  </main>
</template>

<style scoped>
.main-container {
  background-color: var(--background);
  flex-grow: 1;
  place-content: center;
  display: flex;
  margin-top: 80px;
  padding-top: 64px;
}
</style>
