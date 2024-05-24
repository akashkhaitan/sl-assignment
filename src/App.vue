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
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
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
}
</style>
