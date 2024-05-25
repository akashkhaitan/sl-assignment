<script setup>
import { ref } from 'vue'
import CampaignCard from './CampaignCard.vue'

const campaigns = ref([
  {
    id: '123',
    status: 'sent',
    title: 'SW Zero Personalisation 1',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: '234',
    status: 'drafted',
    title: 'Untitled Campaign',
    date: '13 Apr 2023',
    sequence: 5,
    sentCount: 0,
    clickedCount: 0,
    clickedPercent: '0.0',
    openedCount: 0,
    openedPercent: '0.0',
    repliedCount: 0,
    repliedPercent: '0.0',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: '345',
    status: 'stopped',
    title: 'SW Zero Personalisation 2',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: '456',
    status: 'paused',
    title: 'SW Zero Personalisation 3',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: '567',
    status: 'drafted',
    title: 'Untitled Campaign',
    date: '13 Apr 2023',
    sequence: 5,
    sentCount: 0,
    clickedCount: 0,
    clickedPercent: '0.0',
    openedCount: 0,
    openedPercent: '0.0',
    repliedCount: 0,
    repliedPercent: '0.0',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: '789',
    status: 'sent',
    title: 'SW Zero Personalisation 1',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: 'cde',
    status: 'drafted',
    title: 'Untitled Campaign',
    date: '13 Apr 2023',
    sequence: 5,
    sentCount: 0,
    clickedCount: 0,
    clickedPercent: '0.0',
    openedCount: 0,
    openedPercent: '0.0',
    repliedCount: 0,
    repliedPercent: '0.0',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: 'efg',
    status: 'stopped',
    title: 'SW Zero Personalisation 2',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: 'ghi',
    status: 'paused',
    title: 'SW Zero Personalisation 3',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: 'ijk',
    status: 'drafted',
    title: 'Untitled Campaign',
    date: '13 Apr 2023',
    sequence: 5,
    sentCount: 0,
    clickedCount: 0,
    clickedPercent: '0.0',
    openedCount: 0,
    openedPercent: '0.0',
    repliedCount: 0,
    repliedPercent: '0.0',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  },
  {
    id: 'klm',
    status: 'sent',
    title: 'SW Zero Personalisation 1',
    date: '15 Apr 2023',
    sequence: 3,
    sentCount: 520,
    clickedCount: 39,
    clickedPercent: '19.6',
    openedCount: 202,
    openedPercent: '39.8',
    repliedCount: 4,
    repliedPercent: '12.4',
    positiveReplyCount: 0,
    positiveReplyPercent: '0.0'
  }
])
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
  width: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
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
