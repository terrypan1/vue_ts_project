<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, computed, watch } from 'vue';
import type { Ref } from 'vue';
import data from '../../../TwCities.json'

const selectVal = ref('')
const city = reactive([...data])
const postionShow = ref(false);
// 明確指定 dropdownRef 的類型
const dropdownRef: Ref<HTMLElement | null> = ref(null);
const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        postionShow.value = false;
    }
};
const handleInput = () => {
    postionShow.value = true;
};
const handleChange = (item: string) => {
    selectVal.value = item
    postionShow.value = false;
}
const normalizeCityName = (name:string) => {
    return name.replace(/臺/g, "台");
};

const filterResult = computed(() => {
    if (selectVal.value) {
        let normalizedInput = normalizeCityName(selectVal.value);
        let arr = city.filter(option => normalizeCityName(option.name).includes(normalizedInput));
        if (arr.length > 0) {
            return arr[0].districts;
        }
    }
    return [{
        name: "請輸入要查詢的縣市",
        zip: ""
    }];
});
onMounted(() => {
    window.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    window.removeEventListener('click', closeDropdown);
});
</script>

<template>
    <div class="row">
        <div class="col-lg-8 col-xl-5 w-100">
            <div class="filter-select w-100" ref="dropdownRef">
                <input type="text" @click="handleInput" v-model="selectVal" @keydown="handleInput" class="form-select">
                <div class="filter-positionBox" v-if="postionShow">
                    <ul>
                        <li v-for="(option, index) in filterResult" :key="index" @click="handleChange(option.name)">
                            {{ `${option.zip}  ${option.name}` }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.filter-select {
    width: 150px;
    height: 30px;
    position: relative;

    input {
        border: 1px solid #d4d3d3;
        outline: none;
        width: 100%;
        box-sizing: border-box;
    }

    .filter-positionBox {
        width: 100%;
        height: auto;
        border: 1px solid #d4d3d3;
        overflow: hidden;
        position: absolute;
        top: 40px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 99;

        ul {
            padding: 0;
            margin: 0;
            background-color: white;
            width: 100%;

            li {
                list-style: none;
                line-height: 42px;
                padding: 0 10px;
                box-sizing: border-box;
                cursor: pointer;

                &:hover {
                    background-color: #f0f0f0;
                }
            }
        }

        .item-disables-li {
            cursor: no-drop;
            color: #808080;
        }
    }
}
</style>