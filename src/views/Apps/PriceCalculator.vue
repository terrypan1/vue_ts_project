<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card, cardPrice } from './useBaseBlock';//BaseBlock
import { ref, computed } from 'vue'
import { registerCoordinateSystem } from 'echarts';
const isShow = ref(true)
interface Room {
    id: number;
    show: boolean;
    name: string;
    eng: string;
    price: number;
    amount: number;
    path: string;
    discount: number;
    equipment: {
        wifi: boolean;
        bathtub: boolean;
        breakfast: boolean;
    };
}
const rooms = ref([
    {
        "id": 1,
        "show": false,
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
        "show": false,
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
        "show": false,
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
        "show": false,
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
        "show": false,
        "name": "典雅景觀房",
        "eng": "Elegant landscape Room",
        "price": 5400,
        "amount": 0,
        "path": "bedroom5.png",
        "discount": 0.85,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "id": 6,
        "show": false,
        "name": "新增房間",
        "eng": "New Room",
        "price": 0,
        "amount": 0,
        "path": "bedroom6.png",
        "discount": 0.85,
        "equipment": {
            "wifi": false,
            "bathtub": false,
            "breakfast": false
        }
    },
])

const handleShow = (index: number) => {
    console.log(index);
    console.log(rooms.value[index - 1]);
    rooms.value[index - 1].show = !rooms.value[index - 1].show
}
// 擴展 Room 介面來包含 finalPrice
// interface RoomWithFinalPrice extends Room {
//     finalPrice: number;
// }
const finalPrices = computed(() => {
    return rooms.value.map(room => {
        const finalDiscount = (0.8 * room.discount * 100).toFixed(0);
        return {
            ...room,
            finalDiscount,
            finalPrice: room.price * room.discount
        };
    });
});
const handleDel = (index:number,event:MouseEvent)=>{
    event.stopPropagation();
    rooms.value.splice(index-1,1)
}
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
                        <div class="row">
                            <div class="col-md-3">
                                <div class="container-fuild">
                                    <div class="row me-1">
                                        <!-- <h5 class="fw-bold">飯店資料</h5>
                                        <hr>
                                        <div class="mb-4">
                                            <label class="pb-1">總折數</label>
                                            <input type="text" class="form-control" placeholder="請輸入折數">
                                        </div>
                                        <div class="mb-4">
                                            <label class="pb-1">服務費</label>
                                            <input type="text" class="form-control" placeholder="請輸入金額">
                                        </div> -->
                                        <h5 class="fw-bold">房間編輯</h5>
                                        <hr>
                                        <!-- <div class="mb-4">
                                            <select class="form-select" v-model="selectedRoom">
                                                <option value="">請選擇房間</option>
                                                <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name
                                                }}</option>
                                            </select>
                                        </div> -->
                                        <div class="mb-4">
                                            <ul style="list-style: none; border: 1px solid #eee;  padding-left: 0; margin-left: 0;"
                                                class="w-100 m-0">
                                                <li class="w-100 mb-2"
                                                    style="cursor: pointer;border-left: 3px solid rgb(204, 204, 204);"
                                                    v-for="room in rooms" :key="room.id">
                                                    <div class="d-flex justify-content-between align-items-center p-2"
                                                        @click="handleShow(room.id)">
                                                        <a>{{ room.name }}</a>
                                                        <div @click="handleDel(room.id, $event)">
                                                            <i class="bi bi-trash3-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div v-show="room.show">
                                                        <hr style="margin-top: 0px;">
                                                        <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                            <label>名稱</label>
                                                            <input type="text" class="form-control form-control-alt"
                                                                v-model="room.name">
                                                        </div>
                                                        <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                            <label>折價</label>
                                                            <input type="text" class="form-control form-control-alt"
                                                                v-model="room.discount">
                                                        </div>
                                                        <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                            <label>價錢</label>
                                                            <input type="text" class="form-control form-control-alt"
                                                                v-model="room.price">
                                                        </div>
                                                        <div class="d-flex flex-column mb-3 ms-2 me-2">
                                                            <label>圖片</label>
                                                            <input type="text" class="form-control form-control-alt">
                                                        </div>
                                                        <div class="d-flex mb-3 ms-2 justify-content-around">
                                                            <div>
                                                                設備 wifi <input type="checkbox"
                                                                    v-model="room.equipment.wifi">
                                                            </div>
                                                            <div>
                                                                浴缸<input type="checkbox" v-model="room.equipment.bathtub">
                                                            </div>
                                                            <div>
                                                                早餐<input type="checkbox" v-model="room.equipment.breakfast">
                                                            </div>
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
                                        <div class="col-lg-4" v-for="room in finalPrices" :key="room.id">
                                            <BaseBlock :show="cardPrice.show">
                                                <template #content>
                                                    <div class="priceCalculator-img-container">
                                                        <img :src="`/assets/imgs/${room.path}`" alt="">
                                                        <div class="priceCalculator-img-title">
                                                            <span>{{ room.name }}</span>
                                                        </div>
                                                    </div>
                                                    <span style="font-size: 12px;font-weight: 900;">
                                                        {{ room.eng }}
                                                        <i class="bi bi-wifi" v-if="room.equipment.wifi"></i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" v-if="room.equipment.bathtub"
                                                            class="ms-1" viewBox="0 0 512 512">
                                                            <path fill="rgb(76, 81, 82)"
                                                                d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                                                        </svg>
                                                        <i class="bi bi-cup-hot ms-1" v-if="room.equipment.breakfast"></i>
                                                    </span><br>
                                                    <span>0.8*{{ room.discount }} = {{ room.finalDiscount }}折</span>
                                                    <h5>TWD
                                                        <span style="text-decoration: line-through;">{{ room.price }}</span>
                                                        <span style="color:rgb(220, 90, 92);font-weight: bold;"
                                                            class="fw-bold ps-2">{{ room.finalPrice }}$</span>
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