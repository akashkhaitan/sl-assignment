<script setup>
import AllCampaigns from '@/components/AllCampaigns.vue'
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
</script>

<template>
  <Sidebar class="sidebar" />
  <Topbar class="top-bar" />
  <main class="main-container">
    <AllCampaigns></AllCampaigns>
  </main>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: var(--dashboard-header-height);
  left: 0px;
  height: calc(100% - var(--dashboard-header-height));
  width: var(--sidebar-width);
  border-right: 1px solid #e1e3ef;
}
.top-bar {
  position: fixed;
  background-color: white;
  top: var(--dashboard-header-height);
  left: var(--sidebar-width);
  width: calc(100% - var(--sidebar-width));
  height: 60px;
}
.main-container {
  padding: 20px;
  background-color: var(--background);
  flex-grow: 1;
  display: flex;
  margin-left: var(--sidebar-width);
  margin-top: 100px;
}
</style>
