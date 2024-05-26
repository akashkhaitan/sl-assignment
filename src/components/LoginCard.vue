<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import Button from './common/Button.vue'
import InputField from './common/InputField.vue'
import { slUsers } from '@/mocks/slUsers'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const addLoggedInUser = (user) => store.dispatch('addLoggedInUser', user)
const loggedInUser = computed(() => store.getters.loggedInUser)

const router = useRouter()
const userEmail = ref('')
const userPassword = ref('')

const showPassword = ref(false)

const handleShowPassword = (event) => {
  event.preventDefault()
  showPassword.value = !showPassword.value
}

const passwordInput = computed(() => {
  return showPassword.value
    ? {
        type: 'text',
        buttonText: 'Hide'
      }
    : {
        type: 'password',
        buttonText: 'Show'
      }
})

const error = ref(false)

const clearError = () => {
  error.value = false
}
/* Any change in user email or password, make error as false */
watch(userEmail, clearError)
watch(userPassword, clearError)

const handleSignIn = (event) => {
  event.preventDefault()
  if (
    Object.prototype.hasOwnProperty.call(slUsers, userEmail.value) &&
    slUsers[userEmail.value].password === userPassword.value
  ) {
    error.value = false
    addLoggedInUser(slUsers[userEmail.value].details)
  } else {
    error.value = true
  }
}

watch(loggedInUser, () => {
  if (loggedInUser.value !== null) {
    router.push({ name: 'dashboard' })
  }
})

onMounted(() => {
  if (loggedInUser.value !== null) {
    router.push({ name: 'dashboard' })
  }
})
</script>

<template>
  <div class="login-card flex-column login-item-gap">
    <div class="flex-column heading-section">
      <span class="heading">Welcome to Smartlead.ai</span>
      <span class="sub-heading">Log in to your account </span>
    </div>
    <form class="input-section flex-column" @submit="handleSignIn">
      <InputField label="Email" v-model="userEmail"></InputField>
      <InputField
        label="Password"
        :type="passwordInput.type"
        v-model="userPassword"
        autoComplete="on"
      >
        <template #rightAbove>
          <button class="link-button forgot-password">Forgot password?</button>
        </template>
        <template #rightAnchor>
          <button class="link-button" @click="handleShowPassword">
            {{ passwordInput.buttonText }}
          </button>
        </template>
      </InputField>
    </form>

    <Button class="signinButton" :disabled="!userEmail || !userPassword" @click="handleSignIn"
      >Sign In</Button
    >
    <div v-if="error" class="error">Invalid Credentials</div>
  </div>
</template>

<style scoped>
/* Common classes */
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-center {
  align-items: center;
}

.login-card {
  box-shadow: 0px 2px 4px 0px #8d8fa940;
  width: 545px;
  height: 424px;
  background-color: #ffffff;
  padding: 70px 60px;
  border-radius: 3px;
}
.login-item-gap {
  gap: 25px;
}

.heading-section {
  gap: 10px;
}

.heading {
  font-size: 24px;
  font-weight: 700;
  line-height: 31.25px;
  text-align: center;
}
.sub-heading {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.23px;
  text-align: center;
}

.input-section {
  gap: 10px;
}

.link-button {
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  font-weight: 500;
  font-size: 14px;
  color: #686b8a;
}

.forgot-password {
  color: #757ae9;
}

.signinButton {
  width: 100%;
  padding: 10px;
  height: 40.4px;
  cursor: pointer;
}

.error {
  text-align: center;
  color: var(--negative);
}
</style>
