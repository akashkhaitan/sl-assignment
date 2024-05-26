<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        selected: false,
        title: 'Email Campaign',
        icon: 'IconEmailCamp',
        to: 'emailCampaign',
        link: ''
      }
    }
  }
})

import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const navigateTo = (to) => {
  router.push({ name: to })
}

const openLink = (link) => {
  window.open(link, '_blank')
}

const handleNavigation = (item) => {
  if (item.to) {
    navigateTo(item.to)
  } else {
    openLink(item.link)
  }
}

const getSelected = (to) => {
  return route.name === to
}
</script>

<template>
  <div
    :class="{ selected: getSelected(item.to), 'sidebar-item': true }"
    @click="handleNavigation(item)"
  >
    <span class="bar"></span>
    <component
      :is="item.icon"
      :outerFill="getSelected(item.to) ? '#757AE9' : '#E1E3EF'"
      :innerFill="getSelected(item.to) ? 'white' : '#A9ABC1'"
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
