<script setup>
import DraftedIcon from './icons/DraftedIcon.vue'
import PausedIcon from './icons/PausedIcon.vue'
import StoppedIcon from './icons/StoppedIcon.vue'
import SentIcon from './icons/SentIcon.vue'
import { computed, ref } from 'vue'
import Pause from './icons/actions/Pause.vue'
import Edit from './icons/actions/Edit.vue'
import More from './icons/actions/More.vue'
import ReportItem from './ReportItem.vue'
import InfoFilled from './icons/InfoFilled.vue'
import InfoOutlined from './icons/InfoOutlined.vue'
import ErrorIcon from './icons/ErrorIcon.vue'
import OpenTab from './icons/OpenTab.vue'

const props = defineProps({
  campaignData: {
    type: Object,
    required: true
  }
})
const status = ref(props.campaignData.status)

const statusColor = computed(() => {
  switch (status.value) {
    case 'stopped':
      return '#CB4B4B'
    case 'sent':
      return '#5ECA39'
    case 'drafted':
      return '#B7BBD4'
    case 'paused':
      return '#DD9553'
  }
  return '#B7BBD4'
})

const icons = {
  sent: SentIcon,
  drafted: DraftedIcon,
  stopped: StoppedIcon,
  paused: PausedIcon
}

const colors = {
  draft: '#999ba8',
  sent: '#6e58f1',
  clicked: '#eeb728',
  opened: '#bf51c1',
  replied: '#51c1c1',
  positiveReply: '#2cdb28'
}
</script>

<template>
  <div class="card">
    <div class="select">
      <span class="checkbox"></span>
      <!-- <input type="checkbox" /> -->
    </div>
    <div class="campaign">
      <component :is="icons[campaignData.status]"></component>
      <div class="camp-title-sec">
        <div class="title-sec">
          <span class="title-text">{{ campaignData.title }}</span>
          <OpenTab></OpenTab>
        </div>
        <div class="info text-color-2">
          <span><span class="dot"></span></span>
          <span>{{ campaignData.status }} on {{ campaignData.date }}</span>
          <span>|</span>
          <span>{{ campaignData.sequence }} Sequences</span>
        </div>
      </div>
    </div>
    <div class="report">
      <ReportItem
        :item="{
          count: campaignData.sentCount,
          countColor: campaignData.status === 'drafted' ? colors.draft : colors.sent,
          percent: '',
          label: 'Sent',
          icon: null
        }"
      ></ReportItem>

      <ReportItem
        :item="{
          count: campaignData.clickedCount,
          countColor: campaignData.status === 'drafted' ? colors.draft : colors.clicked,
          percent: campaignData.clickedPercent,
          label: 'Clicked',
          icon: campaignData.status === 'drafted' ? ErrorIcon : null
        }"
      ></ReportItem>

      <ReportItem
        :item="{
          count: campaignData.openedCount,
          countColor: campaignData.status === 'drafted' ? colors.draft : colors.opened,
          percent: campaignData.openedPercent,
          label: 'Opened',
          icon: campaignData.status === 'drafted' ? ErrorIcon : null
        }"
      ></ReportItem>

      <ReportItem
        :item="{
          count: campaignData.repliedCount,
          countColor: campaignData.status === 'drafted' ? colors.draft : colors.replied,
          percent: campaignData.repliedPercent,
          label: 'Replied',
          icon: campaignData.status === 'drafted' ? ErrorIcon : null
        }"
      ></ReportItem>

      <ReportItem
        :item="{
          count: campaignData.positiveReplyCount,
          countColor: campaignData.status === 'drafted' ? colors.draft : colors.positiveReply,
          percent: campaignData.positiveReplyPercent,
          label: 'Positive Reply',
          icon: campaignData.status === 'drafted' ? InfoFilled : InfoOutlined
        }"
      ></ReportItem>
    </div>
    <div class="actions">
      <button class="action-button">
        <Pause></Pause>
      </button>
      <button class="action-button">
        <Edit></Edit>
      </button>
      <button class="action-button">
        <More></More>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
  margin-bottom: 0.25rem;
  height: 92px;
  background-color: white;
  display: flex;
  place-items: center;
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
  border: 1px solid #dadce0;
  transform: scale(1.23);
}

.campaign {
  width: 35%;
  display: flex;
  gap: 1rem;
}
.camp-title-sec {
  display: flex;
  flex-direction: column;
}

.title-sec {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}

.title-text {
  color: #6e58f1;
  font-weight: 700;
  font-size: 15px;
  line-height: 19.53px;
}

.info {
  display: flex;
  gap: 10px;
  place-items: center;
}

.dot {
  height: 6px;
  width: 6px;
  background-color: v-bind(statusColor);
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 1px;
}

/* Report Section Css */
.report {
  width: 45%;
  display: flex;
}

.text-color-2 {
  color: #282b4260;
  font-weight: 400 !important;
  font-size: 14px;
}

/* Actions Css Section */

.actions {
  width: 15%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.action-button {
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  border: 1px solid #e5e7f9;
  background-color: #fafaff;
  cursor: pointer;
}
</style>
