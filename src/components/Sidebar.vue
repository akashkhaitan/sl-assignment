<script setup>
import SidebarItem from './SidebarItem.vue'
import IconAllLeads from './icons/IconAllLeads.vue'
import IconEmailCamp from './icons/IconEmailCamp.vue'
import IconMasterInbox from './icons/IconMasterInbox.vue'
import IconSlack from './icons/IconSlack.vue'
import IconTutorial from './icons/IconTutorial.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const icons = {
  IconAllLeads,
  IconEmailCamp,
  IconMasterInbox,
  /* Below icons */
  IconSlack,
  IconTutorial
}

const routeItems = [
  {
    selected: false,
    title: 'All Leads',
    icon: icons.IconAllLeads,
    to: 'allLeads'
  },
  {
    selected: false,
    title: 'Master Inbox',
    icon: icons.IconMasterInbox,
    to: 'masterInbox'
  },
  {
    selected: false,
    title: 'Email Campaign',
    icon: icons.IconEmailCamp,
    to: 'emailCampaign'
  }
]

const linkItems = [
  {
    selected: false,
    title: 'Join Slack Community',
    icon: icons.IconSlack,
    link: 'http://google.com'
  },
  {
    selected: false,
    title: 'Smartlead Tutorials',
    icon: icons.IconTutorial,
    link: 'http://google.com'
  }
]
</script>

<template>
  <div class="sidebar">
    <div class="upper-section">
      <SidebarItem v-for="sidebaritem in routeItems" :item="sidebaritem" :key="sidebaritem.title" />
    </div>
    <div class="bootom-section">
      <div class="bar-section">
        <span class="bar"></span>
      </div>
      <div class="bottom-items">
        <SidebarItem
          v-for="sidebaritem in linkItems"
          :item="sidebaritem"
          :key="sidebaritem.title"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bootom-section {
  height: 100px;
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
}

.bar-section {
  display: flex;
  justify-content: center;
}

.bar {
  width: 50px;
  display: inline-block;
  height: 2px;
  background-color: #e1e3ef;
  border-radius: 3px 3px 0px 0px;
}
</style>
