<script setup>
defineProps({
  outerFill: {
    type: String,
    default: '#E1E3EF'
  },
  innerFill: {
    type: String,
    default: '#A9ABC1'
  }
})
</script>

<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" :fill="outerFill" />
    <path
      d="M13.828 9.14519C14.4695 9.53458 14.4695 10.4654 13.8281 10.8548L8.51906 14.0779C7.85263 14.4824 7.00011 14.0027 7.00011 13.2231L7.00011 6.77695C7.00011 5.99733 7.85263 5.51756 8.51906 5.92214L13.828 9.14519Z"
      :fill="innerFill"
    />
  </svg>
</template>
