<script setup>
import AllCampaigns from '@/components/AllCampaigns.vue'
import Topbar from '@/components/Topbar.vue'
import { ref, watch } from 'vue'
import { campaigns } from '@/mocks/allCampaigns'

const searchText = ref('')
const filteredCampaigns = ref([...campaigns])

const handleSearchValue = (searchValue) => {
  searchText.value = searchValue
}

watch(searchText, () => {
  filteredCampaigns.value = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchText.value.toLowerCase())
  )
})
</script>

<template>
  <Topbar class="top-bar" @searchTextChange="handleSearchValue" />
  <main class="main-container">
    <AllCampaigns :campaigns="filteredCampaigns"></AllCampaigns>
  </main>
</template>

<style scoped>
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
  margin-top: 60px;
}
</style>
