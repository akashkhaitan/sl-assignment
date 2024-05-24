<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { ref, watch } from 'vue'

const route = useRoute()
const minimalNav = ref(false)
watch(route, () => {
  route.name === 'login' ? (minimalNav.value = true) : (minimalNav.value = false)
})
</script>

<template>
  <Navbar :minimal="minimalNav" />
  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  place-items: center;
  /*    padding-right: calc(var(--section-gap) / 2); */
}

.logo {
  margin-left: 18px;
}

header .wrapper {
  flex-grow: 1;
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
