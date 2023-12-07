<script setup lang="ts">
import BaseSidebar from '../components/BaseSidebar.vue';
import BaseHeader from '../components/BaseHeader.vue'
</script>

<template>
  <BaseSidebar></BaseSidebar>
  <div class="content">
    <BaseHeader></BaseHeader>
    <RouterView />
  </div>
</template>
<style lang="scss" scoped>
// .main-sidebar {
//   position: fixed;
// }
.content {
  margin-left: 220px; // 將主內容向右移，避免與側邊欄重疊
}

@media (max-width:991px) {
  .content {
    margin: 0px;
    margin-left: 0px; // 將主內容向右移，避免與側邊欄重疊
  }
}
</style>
