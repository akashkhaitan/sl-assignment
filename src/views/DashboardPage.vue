<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <Sidebar class="sidebar" />

  <div class="top-bar">Top Bar</div>
  <main class="main-container">
    <div>Right Content</div>
  </main>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: var(--dashboard-header-height);
  left: 0px;
  height: calc(100% - var(--dashboard-header-height));
  width: var(--sidebar-width);
}
.top-bar {
  position: fixed;
  top: var(--dashboard-header-height);
  left: var(--sidebar-width);
  width: calc(100% - var(--sidebar-width));
  height: 50px;
}
.main-container {
  background-color: var(--background);
  flex-grow: 1;
  display: flex;
  margin-left: var(--sidebar-width);
  margin-top: 100px;
}
</style>
