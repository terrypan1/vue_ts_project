<script setup lang="ts">
import { carouselHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { ref, onMounted } from 'vue'
import Reload from '../../components/Login/Reload.vue'

const isImageLoaded = ref(false);//定義一個數據屬性 來追蹤圖片是否加載完成
const loadImage = (src: string) => {
    return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            resolve();
        };
    });
}
onMounted(async () => {
    // 等待所有圖片加載
    await Promise.all([
        loadImage('/assets/imgs/carousel1.png'),
        loadImage('/assets/imgs/carousel2.png'),
        loadImage('/assets/imgs/carousel3.png')
    ]);
    isImageLoaded.value = true;
});
</script>
<template>
    <BaseHeadering :header=carouselHelpers></BaseHeadering>
    <div v-if="isImageLoaded">
        <div class="container-fuild mt-5 ms-4" style="width: 93%;">
            <div class="row me-3 ms-md-2">
                <div class="col-md-6 mb-4">
                    <BaseBlock :show="card.show" class="base-block">
                        <template #header>
                            <div class="card-header border-0 fw-bold">
                                Carousel
                            </div>
                        </template>
                        <template #content>
                            <div id="carouselExampleControls" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active img-container">
                                        <img src="/assets/imgs/carousel1.png" class="d-block w-100"
                                            alt="Carousel Image 1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/imgs/carousel2.png" class="d-block w-100"
                                            alt="Carousel Image 2" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/imgs/carousel3.png" class="d-block w-100"
                                            alt="Carousel Image 3" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </template>
                    </BaseBlock>
                </div>
                <div class="col-md-6 mb-4">
                    <BaseBlock :show="card.show">
                        <template #header>
                            <div class="card-header border-0 fw-bold">
                                Carousel
                            </div>
                        </template>
                        <template #content>
                            <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
                                <div class="carousel-indicators" style="background-color: rgb(0,0,0,0.5);">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/assets/imgs/carousel3.png" class="d-block w-100"
                                            alt="Carousel Image 1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/imgs/carousel2.png" class="d-block w-100"
                                            alt="Carousel Image 1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/imgs/carousel1.png" class="d-block w-100"
                                            alt="Carousel Image 1" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </template>
                    </BaseBlock>
                </div>
                <div class="col-md-12 mb-4">
                    <BaseBlock :show="card.show">
                        <template #header>
                            <div class="card-header border-0 fw-bold">
                                Carousel
                            </div>
                        </template>
                        <template #content>
                            <div id="carouselExampleCaptions" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/assets/imgs/carousel2.png" class="d-block w-100"
                                            alt="Carousel Image 1" />
                                        <div class="carousel-caption d-none d-md-block rounded-3 px-3"
                                            style="background-color: rgb(0,0,0,0.5);">
                                            <h5 class="h3 mb-2">Terry Pan</h5>
                                            <p class="mb-0">Welcome to my profile</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/imgs/carousel1.png" class="d-block w-100"
                                            alt="Carousel Image 2" />
                                        <div class="carousel-caption d-none d-md-block rounded-3 px-3"
                                            style="background-color: rgb(0,0,0,0.5);">
                                            <h5 class="h3 mb-2">Terry Pan</h5>
                                            <p class="mb-0">Welcome to my profile</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/imgs/carousel3.png" class="d-block w-100"
                                            alt="Carousel Image 3" />
                                        <div class="carousel-caption d-none d-md-block rounded-3 px-3"
                                            style="background-color: rgb(0,0,0,0.5);">
                                            <h5 class="h3 mb-2">Terry Pan</h5>
                                            <p class="mb-0">Welcome to my profiles</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </template>
                    </BaseBlock>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <Reload></Reload>
    </div>
</template>
<style lang="scss" scoped></style>