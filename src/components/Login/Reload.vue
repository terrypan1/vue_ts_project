<template>
    <div class="w-100 d-flex justify-content-center align-items-center" style="height: 90vh;">
      <div id="page-loader"></div>
    </div>
</template>
<style lang="scss" scoped>
#page-loader {
  background-color: rgb(235, 238, 242); /* 替換 SASS 變量 $white */
  z-index: 9;
  transform: translateY(0);

  &::after {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: blue;
    content: "";
    z-index: 999999;
    animation: page-loader 0.9s infinite ease-in-out;
  }
}

@keyframes page-loader {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>