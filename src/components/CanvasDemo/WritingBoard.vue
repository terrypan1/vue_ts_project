<script setup lang="ts">
import { ref, onMounted } from 'vue';


const canvasRef = ref()
let isSwitch = false
const handleClear = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  //清除整個畫布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
onMounted(() => {
  const ctx = canvasRef.value.getContext('2d')
  canvasRef.value.addEventListener('mousedown', (e: MouseEvent) => {
    isSwitch = true
    ctx.beginPath(); // 開始新的路徑
    ctx.moveTo(e.offsetX, e.offsetY)
  })
  canvasRef.value.addEventListener('mousemove', (e: MouseEvent) => {
    if (isSwitch) {
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.strokeStyle = 'red'
      ctx.stroke()
    }
  })
  canvasRef.value.addEventListener('mouseup', (e: MouseEvent) => {
    isSwitch = false
  })
})

</script>
<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 mt-4">
        <div class="d-flex justify-content-center flex-column align-items-center">
          <h1 class="display-5 fw-bold">Canvas 簡易手寫板</h1>
          <ul style="margin-bottom: 2px;">
            <li style="font-weight: bolder;">滑鼠點下壓著拖動</li>
            <li class="fw-bolder">滑鼠放開即停止</li>
          </ul>
        </div>
        <div class="d-flex flex-column mb-4">
          <p class="fw-bolder m-2">
            畫筆顏色
          </p>
          <div class="d-flex">
            <button type="button" class="btn btn-danger m-2 " style="width: 15%;">紅色</button>
            <button type="button" class="btn btn-primary m-2" style="width: 15%;">藍色</button>
          </div>
        </div>
        <button type="button" class="btn btn-primary m-2" style="width: 20%;" @click="handleClear">清除</button>
      </div>
      <div class="col-md-6 mt-4">
        <div class="d-flex justify-content-center">
          <canvas ref="canvasRef" class="canvas-bg" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  </div>
  <!-- <canvas ref="canvasRef"  class="canvas-bg" width="600"></canvas> -->
</template>
<style lang="scss" scoped>
.container-bg {
  background: url(../../assets/imgs/intro-bg.jpg) center;
}

.canvas-bg {
  background-color: rgb(244, 244, 244);
  border-radius: 10px;
}
</style>
  
  