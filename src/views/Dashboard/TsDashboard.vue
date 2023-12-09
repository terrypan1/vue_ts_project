<script setup lang="ts">
import { ref } from 'vue'
import BaceBlock from '../../components/Block/BaseBlock.vue'
import type { IShowProps } from '../../types/data'
//BaseBlock
const card = ref<IShowProps>({
    show: {
        header: false,
        content: true,
        footer: true
    },
})
</script>
<template>
    <div class="container mt-5" style="width: 80%;">
        <div class="d-flex justify-content-md-between w-80  flex-md-row flex-column">
            <div class="">

                <h1 class="h3 fw-bold mb-2">最新消息</h1>
                <h2 class="h6 fw-medium fw-medium text-muted mb-0">
                    Welcome
                    <span class="fw-semibold" style="color: rgb(76, 120, 221);">Terry,</span>
                    everything
                    looks great.
                </h2>
            </div>
            <div class="mt-3 mt-md-0 ms-md-3 space-x-1">
                <a class="btn btn-sm btn-alt-secondary space-x-1">
                    <i class="bi bi-calendar-event-fill opacity-50"></i>
                    <span class="me-3 ms-1 fw-bold">Settings</span>
                </a>
                <span class="btn btn-sm fw-bold ms-1 btn-alt-secondary">All time</span>
            </div>
        </div>
        <div class="content">
        </div>
    </div>
    <div class="container mt-xl-5 mt-3" style="width: 85%;">
        <div class="row ms-md-2">
            <div class="col-sm-6 col-xxl-3 mb-3">
                <BaceBlock :show="card.show">
                    <template #content>
                        <div class="d-flex justify-content-between">
                            <div>
                                <div class="fs-3 fw-bold"
                                    style="text-align: left !important;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                                    32
                                </div>
                                <div class="fw-medium fs-sm" style="color: rgb(125, 133, 140) !important;">Pending Orders
                                </div>
                            </div>
                            <div>
                                <div
                                    style="width: 60px;height: 60px;background-color: rgb(246, 247, 249);border-radius: 20px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"
                                        class="mt-3">
                                        <path fill="rgb(76, 120, 221)"
                                            d="M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </template>
                    <template #footer>
                        <div class="d-flex justify-content-between">
                            <div class="footer-card">
                                <a>
                                    <span class="fw-bold ms-2">View all orders</span>
                                </a>
                            </div>
                            <div class="footer-card-icon">
                                <a>
                                    <i class="bi bi-arrow-right-circle-fill" style="font-size: 20px;"></i>
                                </a>
                            </div>
                        </div>
                    </template>
                </BaceBlock>
            </div>
            <div class="col-sm-6 col-xxl-3 mb-3">
                <BaceBlock :show="card.show">
                    <template #content>
                        <div class="d-flex justify-content-between">
                            <div>
                                <div class="fs-3 fw-bold"
                                    style="text-align: left !important;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                                    123</div>
                                <div class="fw-medium fs-sm" style="color: rgb(125, 133, 140) !important;">New Customers
                                </div>
                            </div>
                            <div>
                                <div
                                    style="width: 60px;height: 60px;background-color: rgb(246, 247, 249);border-radius: 20px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"
                                        class="mt-3">
                                        <path fill="rgb(76, 120, 221)"
                                            d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </template>
                    <template #footer>
                        <div class="d-flex justify-content-between">
                            <div class="footer-card">
                                <a>
                                    <span class="fw-bold ms-2">View all customers</span>
                                </a>
                            </div>
                            <div class="footer-card-icon">
                                <a>
                                    <i class="bi bi-arrow-right-circle-fill" style="font-size: 20px;"></i>
                                </a>
                            </div>
                        </div>
                    </template>
                </BaceBlock>
            </div>
            <div class="col-sm-6 col-xxl-3 mb-3">
                <BaceBlock :show="card.show">
                    <template #content>
                        <div class="d-flex justify-content-between">
                            <div>
                                <div class="fs-3 fw-bold"
                                    style="text-align: left !important;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                                    45</div>
                                <div class="fw-medium fs-sm" style="color: rgb(125, 133, 140) !important;">Message
                                </div>
                            </div>
                            <div>
                                <div
                                    style="width: 60px;height: 60px;background-color: rgb(246, 247, 249);border-radius: 20px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"
                                        class="mt-3">
                                        <path fill="rgb(76, 120, 221)"
                                            d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </template>
                    <template #footer>
                        <div class="d-flex justify-content-between">
                            <div class="footer-card">
                                <a>
                                    <span class="fw-bold ms-2">View all meaasge</span>
                                </a>
                            </div>
                            <div class="footer-card-icon">
                                <a>
                                    <i class="bi bi-arrow-right-circle-fill" style="font-size: 20px;"></i>
                                </a>
                            </div>
                        </div>
                    </template>
                </BaceBlock>
            </div>
            <div class="col-sm-6 col-xxl-3 mb-3">
                <BaceBlock :show="card.show">
                    <template #content>
                        <div class="d-flex justify-content-between">
                            <div>
                                <div class="fs-3 fw-bold"
                                    style="text-align: left !important;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
                                    4.5%</div>
                                <div class="fw-medium fs-sm" style="color: rgb(125, 133, 140) !important;">Conversion Rate
                                </div>
                            </div>
                            <div>
                                <div
                                    style="width: 60px;height: 60px;background-color: rgb(246, 247, 249);border-radius: 20px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"
                                        class="mt-3">
                                        <path fill="rgb(76, 120, 221)"
                                            d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </template>
                    <template #footer>
                        <div class="d-flex justify-content-between">
                            <div class="footer-card">
                                <a>
                                    <span class="fw-bold ms-2">View all statistics</span>
                                </a>
                            </div>
                            <div class="footer-card-icon">
                                <a>
                                    <i class="bi bi-arrow-right-circle-fill" style="font-size: 20px;"></i>
                                </a>
                            </div>
                        </div>
                    </template>
                </BaceBlock>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer-card {
    a {
        text-decoration: none;
        color: rgb(76, 120, 221);
        cursor: pointer;
    }

    a:hover {
        color: rgb(5, 74, 236);
    }

}

.footer-card-icon {
    a {
        text-decoration: none;
        color: rgb(196, 209, 240);
        cursor: pointer;
    }

    a:hover {
        color: rgb(5, 74, 236);
    }

}

.btn-alt-secondary {
    color: #283342;
    cursor: pointer;
}

.btn-alt-secondary:hover {
    background-color: #d4d6da;
    border-color: #d4d6da;
}</style>