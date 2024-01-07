<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, computed, watch } from 'vue';
import type { Ref } from 'vue';
const selectVal = ref('')
const state = reactive({
    options: [
        {
            label: "台灣",
            value: "Taiwan",
            disabled: false,
        },
        {
            label: "美國",
            value: "America",
            disabled: false,
        },
        {
            label: "日本",
            value: "Japan",
            disabled: false,
        },
        {
            label: "俄羅斯",
            value: "Russia",
            disabled: false,
        },
    ]
})
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
const filterResult = computed(() => {
    if (selectVal.value) {
        return state.options.filter(option => option.label.includes(selectVal.value));
    }
    return [{
        label: "請輸出要查詢的值",
        value: "",
        disabled: false,
    }];
})
watch(filterResult, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
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
                        <li v-for="(option, index) in filterResult" :key="index"
                            :class="{ 'item-disables-li': option.disabled }" @click="handleChange(option.label)">
                            {{ option.label }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-4">
                {{ state.options }}
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