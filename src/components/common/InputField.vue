<script setup>
defineProps({
  label: { type: String },
  width: { type: String },
  icon: { type: Object },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <div class="flex-spacebetween">
      <span class="label">{{ label }}</span>
      <slot name="rightAbove"></slot>
    </div>
    <div class="input-field">
      <input
        tabindex="1"
        type="text"
        v-bind="$attrs"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <slot name="rightAnchor"></slot>
    </div>
  </div>
</template>

<style scoped>
.flex-spacebetween {
  display: flex;
  justify-content: space-between;
}

.label {
  color: #7a7d9c;
}
.input-field {
  width: v-bind(width);
  display: flex;
  gap: 10px;
  border: 1px solid #c6c7db;
  padding: 10px;
  border-radius: 3px;
}
input {
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
}
</style>
