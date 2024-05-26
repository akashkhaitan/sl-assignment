<script setup>
import Sidebar from '@/components/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="dasboardContainer">
    <Sidebar class="sidebar" />
    <RouterView />
  </div>
</template>

<style scoped>
.dasboardContainer {
  width: calc(100% - var(--sidebar-width));
  height: 100%;
  margin-top: var(--dashboard-header-height);
  margin-left: var(--sidebar-width);
}
.sidebar {
  position: fixed;
  top: var(--dashboard-header-height);
  left: 0px;
  height: calc(100% - var(--dashboard-header-height));
  width: var(--sidebar-width);
  border-right: 1px solid #e1e3ef;
}
</style>
