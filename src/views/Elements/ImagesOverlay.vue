<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock

</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        Images Overlay
                    </div>
                </template>
                <template #content>
                    <div class="container">
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
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss">
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
</style>