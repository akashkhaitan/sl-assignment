<script setup>
import { ref, watch } from 'vue'
import GiftBox from './icons/GiftBox.vue'
import QuestioMarkOutlined from './icons/QuestioMarkOutlined.vue'
import Hug from './common/Hug.vue'
import ThreeStars from './icons/ThreeStars.vue'

const props = defineProps({
  minimal: {
    default: false,
    type: Boolean,
    required: false
  }
})
const headerHeight = ref('50px')
watch(props, () => {
  headerHeight.value = props.minimal ? '80px' : '50px'
})
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="131" height="31" />

    <div v-if="!minimal" class="right-container">
      <Hug :icon="ThreeStars" text="Trail expires in 12 days" width="auto"> </Hug>
      <QuestioMarkOutlined></QuestioMarkOutlined>
      <GiftBox></GiftBox>
      <img src="@/assets/avatar-default.jpeg" class="avatar" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-height: v-bind(headerHeight);
  background-color: var(--header-background);
  justify-content: space-between;
  display: flex;
  place-items: center;
}

.logo {
  margin-left: 18px;
}

.right-container {
  display: flex;
  gap: 20px;
  place-items: center;
  margin-right: 20px;
}
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
