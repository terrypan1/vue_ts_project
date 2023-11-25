<script setup lang="ts">
import BaseSidebar from '../components/BaseSidebar.vue';
import BaseSidebar2 from '../components/BaseSidebar2.vue';
</script>

<template>
  <!-- <BaseSidebar></BaseSidebar> -->
  <BaseSidebar2></BaseSidebar2>
  <div class="content">
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
  margin-left: 0px; // 將主內容向右移，避免與側邊欄重疊
}
}
</style>
