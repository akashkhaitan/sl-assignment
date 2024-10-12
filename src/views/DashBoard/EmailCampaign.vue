<script setup>
import AllCampaigns from '@/components/AllCampaigns.vue'
import Topbar from '@/components/Topbar.vue'
import { ref, watch } from 'vue'
import { campaigns } from '@/mocks/allCampaigns'
import { useRouter } from 'vue-router'

const filteredCampaigns = ref([...campaigns])

const props = defineProps({
  searchText: {
    type: String,
    default: ''
  }
})

const router = useRouter()

const handleSearchValue = (searchValue) => {
  const query = { search: searchValue }
  if (searchValue === '') delete query.search
  router.replace({ name: 'emailCampaign', query })
}

watch(() => {
  filteredCampaigns.value = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(props.searchText.toLowerCase())
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
