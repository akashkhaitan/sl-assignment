<script setup>
import CampaignCard from './CampaignCard.vue'

defineProps({
  campaigns: {
    type: Object
  }
})
</script>

<template>
  <div class="campaign-table">
    <div class="header">
      <div class="select">
        <span class="checkbox"></span>
        <!-- <input type="checkbox" /> -->
      </div>
      <div class="campaign">Campaign Details</div>
      <div class="report">Report</div>
    </div>
    <CampaignCard
      v-for="campaign in campaigns"
      :key="campaign.id"
      :campaignData="campaign"
    ></CampaignCard>
  </div>
</template>

<style scoped>
.campaign-table {
  width: 100%;
}
.header {
  height: 50px;
  background-color: var(--table-header-bg-color);
  color: var(--table-header-color);
  width: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
}
.select {
  width: 5%;
}
.checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #dadce0;
  background-color: white;
  border-radius: 4px;
  display: inline-block;
}

input[type='checkbox'] {
  transform: scale(1.23);
}

.campaign {
  width: 35%;
}
.report {
  flex-grow: 1;
}
</style>
