<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        selected: false,
        title: 'Email Campaign',
        icon: 'IconEmailCamp'
      }
    }
  }
})
</script>

<template>
  <div :class="{ selected: item.selected, 'sidebar-item': true }">
    <span class="bar"></span>
    <component
      :is="item.icon"
      :outerFill="item.selected ? '#757AE9' : '#E1E3EF'"
      :innerFill="item.selected ? 'white' : '#A9ABC1'"
    ></component>
    <span>{{ item.title }}</span>
  </div>
</template>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  gap: 20px;
}

.bar {
  width: 3px;
  height: 40px;
  background-color: transparent;
}

.selected {
  background-color: var(--primary10);
  margin-right: 2px;
}

.selected .bar {
  background-color: var(--primary);
}
</style>
