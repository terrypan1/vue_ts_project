<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card, cardPrice } from './useBaseBlock';//BaseBlock
import { ref } from 'vue'
const rooms = ref([
    {
        "id": 1,
        "name": "海景三人房",
        "eng": "Sea view triple Room",
        "price": 7800,
        "amount": 0,
        "path": "bedroom1.png",
        "discount": 0.8,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    },
    {
        "id": 2,
        "name": "經濟雙人房",
        "eng": "Economy Double Room",
        "price": 7000,
        "amount": 0,
        "path": "bedroom2.png",
        "discount": 0.9,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "id": 3,
        "name": "尊享豪華房",
        "eng": "Exclusive Deluxe Room",
        "price": 9800,
        "amount": 0,
        "path": "bedroom3.png",
        "discount": 0.8,
        "equipment": {
            "wifi": true,
            "bathtub": false,
            "breakfast": true
        }
    },
    {
        "id": 4,
        "name": "商務雙人房",
        "eng": "Business Double Room",
        "price": 5600,
        "amount": 0,
        "path": "bedroom4.png",
        "discount": 0.9,
        "equipment": {
            "wifi": true,
            "bathtub": false,
            "breakfast": false
        }
    },
    {
        "id": 5,
        "name": "典雅景觀房",
        "eng": "Elegant landscape Room",
        "price": 5400,
        "amount": 0,
        "path": "bedroom3.png",
        "discount": 0.85,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },

    // {
    //     "name": "溫泉雙人房",
    //     "eng": "Hot spring double Room",
    //     "price": 8400,
    //     "amount": 0,
    //     "path": "http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg",
    //     "discount": 0.6,
    //     "equipment": {
    //         "wifi": true,
    //         "bathtub": true,
    //         "breakfast": true
    //     }
    // },
    // {
    //     "name": "總統套房",
    //     "eng": "Presidential Suite",
    //     "price": 23000,
    //     "amount": 0,
    //     "path": "http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg",
    //     "discount": 0.75,
    //     "equipment": {
    //         "wifi": true,
    //         "bathtub": true,
    //         "breakfast": true
    //     }
    // },
    // {
    //     "name": "奢華四人房",
    //     "eng": "Luxury four Room",
    //     "price": 8500,
    //     "amount": 0,
    //     "path": "http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg",
    //     "discount": 0.7,
    //     "equipment": {
    //         "wifi": true,
    //         "bathtub": true,
    //         "breakfast": false
    //     }
    //}
])
const selectedRoom = ref('')
</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        PriceCalculator
                    </div>
                </template>
                <template #content>
                    <div class="container">
                        <div>施工中...</div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="container-fuild">
                                    <div class="row me-1">
                                        <h5 class="fw-bold">飯店資料</h5>
                                        <hr>
                                        <div class="mb-4">
                                            <label class="pb-1">總折數</label>
                                            <input type="text" class="form-control" placeholder="請輸入折數">
                                        </div>
                                        <div class="mb-4">
                                            <label class="pb-1">服務費</label>
                                            <input type="text" class="form-control" placeholder="請輸入金額">
                                        </div>
                                        <h5 class="fw-bold">房間編輯</h5>
                                        <hr>
                                        <div class="mb-4">
                                            <select class="form-select" v-model="selectedRoom">
                                                <option value="">請選擇房間</option>
                                                <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name
                                                }}</option>
                                            </select>
                                        </div>
                                        <div class="mb-4">
                                            <ul style="list-style: none; border: 1px solid #eee; border-left: 3px solid rgb(204, 204, 204); padding-left: 0; margin-left: 0;"
                                                class="w-100 m-0">
                                                <li class="w-100">
                                                    <div class="d-flex justify-content-between align-items-center p-2">
                                                        <a>經濟雙人房</a>
                                                        <div>
                                                            <i class="bi bi-trash3-fill"></i>
                                                        </div>
                                                    </div>
                                                    <hr class="mb-3" style="margin-top: 0px;">
                                                    <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                        <label>名稱</label>
                                                        <input type="text" class="form-control form-control-alt">
                                                    </div>
                                                    <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                        <label>折價</label>
                                                        <input type="text" class="form-control form-control-alt">
                                                    </div>
                                                    <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                        <label>價錢</label>
                                                        <input type="text" class="form-control form-control-alt">
                                                    </div>
                                                    <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                        <label>圖片</label>
                                                        <input type="text" class="form-control form-control-alt">
                                                    </div>
                                                    <div class="d-flex mb-3 ms-2 justify-content-around">
                                                        <div>
                                                            設備 wifi <input type="checkbox">
                                                        </div>
                                                        <div>
                                                            浴缸<input type="checkbox">
                                                        </div>
                                                        <div>
                                                            早餐<input type="checkbox">
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="container-fuild">
                                    <div class="row">
                                        <h5 class="ms-3 fw-bold">房間列表</h5>
                                        <hr>
                                        <div class="col-lg-4" v-for="room in rooms" :key="room.id">
                                            <BaseBlock :show="cardPrice.show">
                                                <template #content>
                                                    <div class="priceCalculator-img-container">
                                                        <img :src="`/assets/imgs/${room.path}`" alt="">
                                                        <div class="priceCalculator-img-title">
                                                            <span>{{ room.name }}</span>
                                                        </div>
                                                    </div>
                                                    <span style="font-size: 14px;">Sea view triple Room</span><br>
                                                    <span>0.8*0.9 = 72折</span>
                                                    <h5>TWD
                                                        <span style="text-decoration: line-through;">7000</span>
                                                        <span style="color:rgb(220, 90, 92)"
                                                            class="fw-bold ps-2">5816$</span>
                                                    </h5>
                                                </template>
                                            </BaseBlock>
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
// * {
//     margin: 0px;
//     padding: 0px;
// }
.priceCalculator-img-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .priceCalculator-img-title {
        position: absolute;
        background-color: white;
        width: 100px;
        height: 30px;
        top: 60%;
    }
}
</style>