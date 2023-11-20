<script setup lang="ts">
import BaseSidebar from '../components/BaseSidebar.vue';
</script>

<template>
  <BaseSidebar></BaseSidebar>
  <div class="content">
    <RouterView />
  </div>
</template>
<style lang="scss" scoped>
// .main-sidebar {
//   position: fixed;
// }

.content {
  margin-left: 300px; // 將主內容向右移，避免與側邊欄重疊
}
@media (max-width:991px) {
  .content {
  margin-left: 0px; // 將主內容向右移，避免與側邊欄重疊
}
}
</style>
