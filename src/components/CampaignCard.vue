<script setup>
import DraftedIcon from './icons/DraftedIcon.vue'
import PausedIcon from './icons/PausedIcon.vue'
import StoppedIcon from './icons/StoppedIcon.vue'
import SentIcon from './icons/SentIcon.vue'
import { computed, ref } from 'vue'
import Pause from './icons/actions/Pause.vue'
import Edit from './icons/actions/Edit.vue'
import More from './icons/actions/More.vue'

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
</script>

<template>
  <div class="card">
    <div class="select">
      <span class="checkbox"></span>
      <!-- <input type="checkbox" /> -->
    </div>
    <div class="campaign">
      <component :is="icons[campaignData.status]"></component>
      <div class="campTitleSec">
        <span class="title-text">{{ campaignData.title }}</span>
        <div class="info text-color-2">
          <span><span class="dot"></span></span>
          <span>{{ campaignData.status }} on {{ campaignData.date }}</span>
          <span>|</span>
          <span>{{ campaignData.sequence }} Sequences</span>
        </div>
      </div>
    </div>
    <div class="report">
      <div class="report-item">
        <span
          class="count-font sent-color"
          :class="{ 'draft-color': campaignData.status === 'drafted' }"
        >
          {{ campaignData.sentCount }}</span
        >
        <span class="text-color-2">Sent</span>
      </div>
      <div class="report-item">
        <span
          class="count-font clicked-color"
          :class="{ 'draft-color': campaignData.status === 'drafted' }"
        >
          {{ campaignData.clickedCount }}</span
        >
        <span class="text-color-2">Clicked</span>
      </div>
      <div class="report-item">
        <span
          class="count-font opened-color"
          :class="{ 'draft-color': campaignData.status === 'drafted' }"
        >
          {{ campaignData.openedCount }}</span
        >
        <span class="text-color-2">Opened</span>
      </div>
      <div class="report-item">
        <span
          class="count-font replied-color"
          :class="{ 'draft-color': campaignData.status === 'drafted' }"
        >
          {{ campaignData.repliedCount }}</span
        >
        <span class="text-color-2">Replied</span>
      </div>
      <div class="report-item">
        <span
          class="count-font positive-reply-color"
          :class="{ 'draft-color': campaignData.status === 'drafted' }"
        >
          {{ campaignData.positiveReplyCount }}</span
        >
        <span class="text-color-2">Positive Reply</span>
      </div>
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
.campTitleSec {
  display: flex;
  flex-direction: column;
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
.report-item {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.count-font {
  font-weight: 500;
  font-size: 20px;
  line-height: 26.04px;
}

.sent-color {
  color: #6e58f1;
}
.clicked-color {
  color: #eeb728;
}
.opened-color {
  color: #bf51c1;
}
.replied-color {
  color: #51c1c1;
}
.positive-reply-color {
  color: #2cdb28;
}

.draft-color {
  color: #999ba8;
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
