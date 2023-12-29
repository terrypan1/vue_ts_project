<script setup lang="ts">
import { infiniteScrollHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { ref, onMounted } from 'vue'
import getPhotos from '../../api/gtPhotos'
const page = ref(1)
const limit = ref(10)
interface IPhotos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
const photosList = ref<IPhotos[]>([]);
getPhotos(page.value, limit.value).then(result => {
    photosList.value = result;
    page.value++
});
//加載資料
let loading = false;
// let notEnough = false
const load = async () => {
    console.log(page.value);
    if (loading) return;//滾輪開關
    loading = true;
    // if (notEnough) return;//資料不夠的開關
    try {
        console.log(page.value, limit.value);
        const res = await getPhotos(page.value, limit.value)
        photosList.value.push(...res)
        page.value++
        loading = false;
    } catch (err) {
        console.log(err);
    }

}
//計算滾輪到底的距離
const scrollContainer = ref<HTMLElement | null>(null);
const scrollHandle = () => {
    if (scrollContainer.value) {
        //scrollHeight-scrollTop-clientHeight
        const scrollHeight = scrollContainer.value.scrollHeight;//整張頁面的高度
        const scrollTop = scrollContainer.value.scrollTop;//滾輪下拉計算距離頂部的高度
        const clientHeight = scrollContainer.value.clientHeight;//當前視窗的高度
        const distance = scrollHeight - scrollTop - clientHeight;//離底部的距離
        if (distance < 50) {
            load();
        }
    }
}
onMounted(() => {
    // 如果是整個頁面滾動，則改為監聽 window 的滾動事件
    // window.addEventListener('scroll', scrollHandle);
    scrollContainer.value?.addEventListener('scroll', scrollHandle);
});
</script>
<template>
    <BaseHeadering :header=infiniteScrollHelpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        InfiniteScroll
                    </div>
                </template>
                <template #content>
                    <div class="photos-container" ref="scrollContainer">
                        <div v-for="photo in photosList" :key="photo.id" class="photo-header">
                            <h2 style="font-size: 24px;">{{ photo.id + '.' }}{{ photo.title }}</h2>
                            <img :src="photo.thumbnailUrl">
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.photos-container {
    max-height: 500px;
    /* 設定最大高度 */
    overflow-y: auto;
    /* 允許垂直方向滾動 */
}

.photo-header {
    height: 250px;
    img {
        height: 150px;
        width: 150px;
    }

    .fetch-data {
        text-align: center;
        color: #555;
        background-color: #fff;
        padding: 1rem;
        margin: 0;
    }
}
</style>