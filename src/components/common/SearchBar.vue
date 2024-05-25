<script setup>
defineProps({ width: { type: String }, icon: { type: Object } })
</script>

<template>
  <div class="searchbar">
    <component :is="icon" />
    <input type="text" placeholder="Search Campaigns" />
  </div>
</template>

<style scoped>
.searchbar {
  width: v-bind(width);
  display: flex;
  gap: 10px;
  border: 1px solid #e5e7f9;
  padding: 10px;
  background-color: #fafaff;
}
input {
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
}
</style>
