<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  minimal: {
    default: false,
    type: Boolean,
    required: false
  }
})
const headerHeight = ref('50px')
watch(props, () => {
  console.log(props.minimal)
  headerHeight.value = props.minimal ? '80px' : '50px'
})
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="131" height="31" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-height: v-bind(headerHeight);
  background-color: var(--background);
}

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

  nav {
    text-align: left;
    /* margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem; */
  }
}
</style>
