<script setup>
import SearchBar from './common/SearchBar.vue'
import Button from './common/Button.vue'
import IconSearch from './icons/IconSearch.vue'

const emit = defineEmits(['searchTextChange'])
</script>

<template>
  <div class="topbar">
    <div class="tab">
      <span> All Campaigns(24)</span>
      <span class="bar"> </span>
    </div>
    <div class="right-con">
      <SearchBar
        width="264px"
        :icon="IconSearch"
        class="search"
        @input="(event) => emit('searchTextChange', event.target.value)"
      />
      <Button class="add-camp-button">+ Add Campaign</Button>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  border-bottom: 1px solid #e1e3ef;
  font-size: 16px;
}
.tab {
  height: 40px;
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-items: center;
  color: #282b42;
}
.tab .bar {
  width: 39px;
  height: 3px;
  background-color: var(--primary);
  display: inline-block;
  border-radius: 3px 3px 0px 0px;
}
.search {
  margin-right: 29px;
}
.right-con {
  display: flex;
}
.add-camp-button {
  width: 147px;
}
</style>
