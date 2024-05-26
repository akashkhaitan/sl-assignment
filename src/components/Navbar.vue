<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import GiftBox from './icons/GiftBox.vue'
import QuestioMarkOutlined from './icons/QuestioMarkOutlined.vue'
import Hug from './common/Hug.vue'
import ThreeStars from './icons/ThreeStars.vue'
import Button from './common/Button.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const props = defineProps({
  minimal: {
    default: false,
    type: Boolean,
    required: false
  }
})

const store = useStore()
const loggedInUser = computed(() => store.getters.loggedInUser)
const clearLoggedInUser = () => store.dispatch('clearLoggedInUser')

const headerHeight = ref('50px')
watch(props, () => {
  headerHeight.value = props.minimal ? '80px' : '50px'
})

const handleLogout = (event) => {
  event.stopPropagation()
  clearLoggedInUser()
}

const router = useRouter()
const redirectToLogin = () => {
  router.replace({ name: 'login' })
}

watch(loggedInUser, () => {
  if (loggedInUser.value === null) {
    redirectToLogin()
  }
})

onMounted(() => {
  if (loggedInUser.value === null) {
    redirectToLogin()
  }
})
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="131" height="31" />

    <div v-if="!minimal" class="right-container">
      <Hug :icon="ThreeStars" text="Trail expires in 12 days" width="auto"> </Hug>
      <QuestioMarkOutlined></QuestioMarkOutlined>
      <GiftBox></GiftBox>
      <button class="avatar-button">
        <img src="@/assets/avatar-default.jpeg" class="avatar" />
        <div class="popup">
          <div class="popup-item">Logged In User</div>
          <div class="popup-item">{{ loggedInUser?.email }}</div>
          <div class="popup-item">
            <Button class="logout-button" @click="handleLogout">Logout</Button>
          </div>
        </div>
      </button>
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

.avatar-button {
  width: 24px;
  height: 24px;
  position: relative;
  background-color: transparent;
  border: none;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.avatar-button .popup {
  display: none;
  border-radius: 3px;
  padding: 20px;
  height: auto;
  width: 240px;
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
}

.avatar-button:hover .popup {
  display: block;
}

.logout-button {
  width: 100%;
  padding: 5px;
}
</style>
