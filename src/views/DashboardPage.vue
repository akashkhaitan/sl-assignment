<template>
  <div class="sidebar">Sidebar</div>
  <div class="top-bar">Top Bar</div>
  <main class="main-container">Right Content</main>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 50px;
  left: 0px;
  height: 100%;
  width: var(--sidebar-width);
}
.top-bar {
  position: fixed;
  top: 50px;
  left: var(--sidebar-width);
  width: 100%;
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
