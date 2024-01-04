<script setup lang="ts">
import { tabsHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { reactive, ref } from 'vue';

const profiles = reactive([
    {
        id: 1,
        title: "Full Name",
        name: "Terry Pan",
        secondTitle: "Age",
        name2: "39"
    },
    {
        id: 2,
        title: "Phone",
        name: "0989181606",
        secondTitle: "Email",
        name2: "terrypan1@gmail.com"
    },
    {
        id: 3,
        title: "Website",
        name: "self-introduction",
        isLink: true, // 新增標記以指示這是一個鏈接
        secondTitle: "Degree",
        name2: "Bachelor's degree"
    },
    {
        id: 4,
        title: "City",
        name: "New Taipei City, Taiwan",
        secondTitle: "Job",
        name2: "Front-end engineer"
    }
])
const profileAbout = ref({
    title: "About",
    description: `歡迎來到我的網頁，一名熱情且經驗豐富的前端開發工程師。我專注於使用 Vue.js
                框架來創建直觀且動態的用戶介面。我對於撰寫乾淨且高效的代碼充滿熱情，並總是追求最佳的用戶體驗。 在前端領域，我不僅累積了豐富的 Vue
                開發經驗，也熟悉現代前端技術 。我習慣於在敏捷開發環境中與團隊密切合作，從產品設計到功能開發，我都能提供專業的技術支持。`,
    name: "Terry Pan",
    job: "Front-end engineer"
})
</script>
<template>
    <BaseHeadering :header="tabsHelpers"></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100 mb-4">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 90%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        Tabs
                    </div>
                </template>
                <template #content>
                    <div class="contaier me-2">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="d-flex flex-column align-items-center"
                                    style="text-align: center;background-color: rgb(235, 238, 242);border-radius: 4px;">
                                    <img src="/assets/imgs/T1.png" class="rounded-circle mb-3 img-fluid mt-4"
                                        style="width: 40%;">
                                    <h5 class="fw-bold">{{ profileAbout.name }}</h5>
                                    <span>{{ profileAbout.job }}</span>
                                    <div class="mb-2">
                                        <a href="https://github.com/terrypan1" class="me-2"><i class="bi bi-github"
                                                style="color: rgb(128, 148, 183);font-size: 22px;"></i></a>
                                        <a href="https://github.com/terrypan1"><i class="bi bi-facebook"
                                                style="color: rgb(128, 148, 183);font-size: 22px;"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="mt-4 mt-md-0" style="background-color: rgb(235, 238, 242);border-radius: 4px;">
                                    <ul class="nav nav-tabs pt-4 ps-4 pe-4" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                aria-selected="true">Profile</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                                aria-selected="false">Edit Profile</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact" type="button" role="tab" aria-controls="contact"
                                                aria-selected="false">Contact</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content p-4" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel"
                                            aria-labelledby="home-tab">
                                            <div class="mt-4 ms-2" style="color: black;">
                                                <h5 class="fw-bold">{{ profileAbout.title }}</h5>
                                                <p class="fst-italic">{{ profileAbout.description }}</p>
                                                <h5 class="fw-bold">Profile Details</h5>
                                                <div class="mt-4" v-for="profile in profiles" :key="profile.id">
                                                    <div class="row">
                                                        <div class="col-md-2" style="color: rgb(162, 127, 169);">{{
                                                            profile.title }}</div>
                                                        <div class="col-md-4">
                                                            <a v-if="profile.isLink" :href="profile.name">{{ profile.name
                                                            }}</a>
                                                            <span v-else>{{ profile.name }}</span>
                                                        </div>
                                                        <div class="col-md-2" style="color: rgb(162, 127, 169);">{{
                                                            profile.secondTitle }}</div>
                                                        <div class="col-md-4">{{ profile.name2 }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="profile" role="tabpanel"
                                            aria-labelledby="profile-tab">
                                            <div style="color: black;">
                                                <div class="row mt-4">
                                                    <div class="col-md-4" style="color: rgb(162, 127, 169);">
                                                        Profile Image
                                                    </div>
                                                    <div class="col-md-8">
                                                        <img src="/assets/imgs/T1.png" class=" mb-2 img-fluid mt-4"
                                                            style="width: 30%;">
                                                        <div>
                                                            <button
                                                                style="background-color: rgb(13, 110, 253);width: 30px;height: 30px;border: transparent;border-radius: 4px;">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="14"
                                                                    width="14" viewBox="0 0 448 512">
                                                                    <path
                                                                        d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
                                                                        fill="white" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                style="background-color: rgb(220, 53, 69);width: 30px;height: 30px;border: transparent;border-radius: 4px;"
                                                                class="ms-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="14"
                                                                    width="14" viewBox="0 0 448 512">
                                                                    <path
                                                                        d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                                                                        fill="white" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-4" v-for="profile in profiles" :key="profile.id">
                                                    <div class="col-md-4 mb-2" style="color: rgb(162, 127, 169);">
                                                        {{ profile.title }}
                                                    </div>
                                                    <div class="col-md-8 mb-2">
                                                        <input type="text" v-model="profiles[profile.id-1].name"
                                                            class="form-control form-control-alt"
                                                            >
                                                    </div>
                                                    <div class="col-md-4 mb-2" style="color: rgb(162, 127, 169);">
                                                        {{ profile.secondTitle }}
                                                    </div>
                                                    <div class="col-md-8 mb-2">
                                                        <input type="text" v-model="profiles[profile.id-1].name2"
                                                            class="form-control form-control-alt"
                                                            >
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button type="button" class="btn btn-primary mt-2" style="width: 100px;">確認</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="contact" role="tabpanel"
                                            aria-labelledby="contact-tab">
                                            Contact
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
<style lang="scss" scoped>
$bg-color: rgb(235, 238, 242);

.nav-link {
    color: black;
    background-color: bg-color;
}

.active {
    color: blue !important;
    background-color: darken($bg-color, 5%) !important;
    border-bottom: 2px solid blue !important;
}

.tab-pane.fade.show.active {
    background-color: transparent !important;
    /* 一定要加上 */
    border: transparent !important;
}</style>