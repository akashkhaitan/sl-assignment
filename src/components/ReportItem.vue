<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        count: '',
        countColor: '',
        percent: '',
        label: '',
        icon: null
      }
    }
  }
})

const countColor = props.item.countColor
</script>

<template>
  <div class="report-item">
    <div class="count-section gap4">
      <span class="count-font count-color"> {{ item.count }}</span>
      <span v-if="item.percent" class="text-color-2 percent-size"> {{ item.percent }}%</span>
    </div>
    <div class="label-section gap4">
      <span class="text-color-2 label-size">{{ item.label }}</span>
      <component v-if="item.icon" :is="item.icon"></component>
    </div>
  </div>
</template>

<style scoped>
.gap4 {
  gap: 4px;
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

.count-color {
  color: v-bind(countColor);
}

.percent-size {
  font-size: 12px;
}

.label-size {
  font-size: 14px;
}

.text-color-2 {
  color: #282b4260;
  font-weight: 400 !important;
}

.count-section {
  display: flex;
  flex-direction: row;
  align-items: end;
}
.label-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
