<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
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
        loadImage('/assets/imgs/overlay1.png'),
        loadImage('/assets/imgs/overlay2.png'),
    ]);
    isImageLoaded.value = true;
});
</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div v-if="isImageLoaded">
        <div class="container mt-xl-5 mt-3 w-100 mb-4">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        Images Overlay
                    </div>
                </template>
                <template #content>
                    <div class="container mb-4">
                        <div class="row">
                            <div class="col-md-4">
                                <label
                                    style="text-transform: uppercase;font-weight: bold;font-size: 14px;letter-spacing: 1px;">Image
                                    Default</label>
                                <div class="options-container">
                                    <img src="/assets/imgs/overlay1.png" alt="Image" class="img-fluid options-item">
                                    <div class="options-overlay">
                                        <div
                                            class="options-overlay-content d-flex justify-content-center align-items-center h-100 flex-column">
                                            <h3 class="h4 text-white mb-2">Image Caption</h3>
                                            <div>
                                                <a class="me-2 btn btn-sm"><i class="bi bi-pencil p-1"
                                                        style="color: rgb(76, 120, 221);"></i>Edit</a>
                                                <a class="btn btn-sm"><i class="bi bi-x-lg p-1"
                                                        style="color: red;font-weight: bold;"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label
                                    style="text-transform: uppercase;font-weight: bold;font-size: 14px;letter-spacing: 1px;">
                                    IMAGE ZOOM IN
                                </label>
                                <div class="options-container">
                                    <img src="/assets/imgs/overlay1.png" alt="Image" class="img-fluid img-zoomIn">
                                    <div class="options-overlay">
                                        <div
                                            class="options-overlay-content d-flex justify-content-center align-items-center h-100 flex-column">
                                            <h3 class="h4 text-white mb-2">Image Caption</h3>
                                            <div>
                                                <a class="me-2 btn btn-sm"><i class="bi bi-pencil p-1"
                                                        style="color: rgb(76, 120, 221);"></i>Edit</a>
                                                <a class="btn btn-sm"><i class="bi bi-x-lg p-1"
                                                        style="color: red;font-weight: bold;"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label
                                    style="text-transform: uppercase;font-weight: bold;font-size: 14px;letter-spacing: 1px;">
                                    IMAGE ROTATE RIGHT
                                </label>
                                <div class="options-container">
                                    <img src="/assets/imgs/overlay1.png" alt="Image" class="img-fluid img-rotateRight">
                                    <div class="options-overlay">
                                        <div
                                            class="options-overlay-content d-flex justify-content-center align-items-center h-100 flex-column">
                                            <h3 class="h4 text-white mb-2">Image Caption</h3>
                                            <div>
                                                <a class="me-2 btn btn-sm"><i class="bi bi-pencil p-1"
                                                        style="color: rgb(76, 120, 221);"></i>Edit</a>
                                                <a class="btn btn-sm"><i class="bi bi-x-lg p-1"
                                                        style="color: red;font-weight: bold;"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label
                                    style="text-transform: uppercase; font-weight: bold; font-size: 14px; letter-spacing: 1px;">
                                    Overlay Slide Left
                                </label>
                                <div class="image-container">
                                    <img src="/assets/imgs/overlay2.png" alt="Image"
                                        class="img-fluid image-item image-zoom">
                                    <div class="overlay-slide-in-left">
                                        <div
                                            class="options-overlay-content d-flex justify-content-center align-items-center h-100 flex-column">
                                            <h3 class="h4 text-white mb-2">Image Caption</h3>
                                            <div>
                                                <a class="me-2 btn btn-sm"><i class="bi bi-pencil p-1"
                                                        style="color: rgb(76, 120, 221);"></i>Edit</a>
                                                <a class="btn btn-sm"><i class="bi bi-x-lg p-1"
                                                        style="color: red;font-weight: bold;"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label
                                    style="text-transform: uppercase; font-weight: bold; font-size: 14px; letter-spacing: 1px;">
                                    Overlay Slide Right
                                </label>
                                <div class="image-container">
                                    <img src="/assets/imgs/overlay2.png" alt="Image"
                                        class="img-fluid image-item image-zoom">
                                    <div class="overlay-slide-in-right">
                                        <div
                                            class="options-overlay-content d-flex justify-content-center align-items-center h-100 flex-column">
                                            <h3 class="h4 text-white mb-2">Image Caption</h3>
                                            <div>
                                                <a class="me-2 btn btn-sm"><i class="bi bi-pencil p-1"
                                                        style="color: rgb(76, 120, 221);"></i>Edit</a>
                                                <a class="btn btn-sm"><i class="bi bi-x-lg p-1"
                                                        style="color: red;font-weight: bold;"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label
                                    style="text-transform: uppercase; font-weight: bold; font-size: 14px; letter-spacing: 1px;">
                                    Overlay SLIDE DOWN
                                </label>
                                <div class="image-container">
                                    <img src="/assets/imgs/overlay2.png" alt="Image"
                                        class="img-fluid image-item image-zoom">
                                    <div class="overlay-slide-in-down">
                                        <div
                                            class="options-overlay-content d-flex justify-content-center align-items-center h-100 flex-column">
                                            <h3 class="h4 text-white mb-2">Image Caption</h3>
                                            <div>
                                                <a class="me-2 btn btn-sm"><i class="bi bi-pencil p-1"
                                                        style="color: rgb(76, 120, 221);"></i>Edit</a>
                                                <a class="btn btn-sm"><i class="bi bi-x-lg p-1"
                                                        style="color: red;font-weight: bold;"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
    </div>
    <div v-else>
        <Reload></Reload>
    </div>
</template>
<style lang="scss" scoped>
.options-container {
    position: relative;
    display: block;
    z-index: 1;
    overflow: hidden;

    &:hover {
        .options-overlay {
            opacity: 1;
        }

        .img-zoomIn {
            transform: scale(1.5);
        }

        .img-rotateRight {
            transform: scale(1.5) rotate(30deg);
        }
    }

    .img-zoomIn {
        transition: transform 0.5s ease;
    }

    .img-rotateRight {
        transition: transform 0.5s ease;
    }

    .options-item {
        transition: all 0.5s;
    }

    .options-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(0, 0, 0, 0.75);
        transition: all 0.3s ease-in;
        opacity: 0;
        .options-overlay-content {
            a {
                border: 0;
                background-color: rgb(235, 238, 242);
                color: black;
                font-size: 14px;
                font-weight: bolder;
                text-decoration: none;

                &:active,
                &:focus {
                    box-shadow: 0 0 0 0.25rem rgba(235, 238, 242, 0.5);
                }
            }
        }
    }
}
.image-container {
    position: relative;
    display: block;
    z-index: 1;
    overflow: hidden;

    &:hover {
        .overlay-slide-in-down {
            opacity: 1;
            transform: translateY(0);
        }
        .overlay-slide-in-left {
            opacity: 1;
            transform: translateX(0);
        }
        .overlay-slide-in-right {
            opacity: 1;
            transform: translateX(0);
        }
        .image-zoom {
            transform: scale(1.5);
        }
        .image-rotate {
            transform: scale(1.5) rotate(30deg);
        }
    }
    .options-overlay-content {
            a {
                border: 0;
                background-color: rgb(235, 238, 242);
                color: black;
                font-size: 14px;
                font-weight: bolder;
                text-decoration: none;

                &:active,
                &:focus {
                    box-shadow: 0 0 0 0.25rem rgba(235, 238, 242, 0.5);
                }
            }
        }
    .image-zoom {
        transition: transform 0.5s ease;
    }

    .image-rotate {
        transition: transform 0.5s ease;
    }

    .image-item {
        transition: all 0.5s;
    }

    .overlay-slide-in-left,
    .overlay-slide-in-right {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(0, 0, 0, 0.75);
        transition: all 0.3s ease-in;
        opacity: 0;
    }
    .overlay-slide-in-down {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(0, 0, 0, 0.75);
        transition: all 0.3s ease-in;
        opacity: 0;
        transform: translateY(-100%);
    }
    .overlay-slide-in-left {
        transform: translateX(-100%);
    }

    .overlay-slide-in-right {
        transform: translateX(100%);
    }
    .overlay-slide-in-down {
        transform: translateY(-100%);
    }
}

</style>