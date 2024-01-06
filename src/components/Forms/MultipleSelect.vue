<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

interface Option {
    label: string;
    value: string;
    disabled: boolean;
    selected: boolean;
}

const state = reactive({
    options: [
        {
            label: "台灣",
            value: "Taiwan",
            disabled: false,
            selected: false
        },
        {
            label: "美國",
            value: "America",
            disabled: false,
            selected: false
        },
        {
            label: "日本",
            value: "Japan",
            disabled: false,
            selected: false
        },
        {
            label: "俄羅斯",
            value: "Russia",
            disabled: false,
            selected: false
        },
    ]
});

const postionShow = ref(false);
const dropdownRef: Ref<HTMLElement | null> = ref(null);
const selectedValues = ref<string[]>([]);

const handleClick = () => {
    postionShow.value = !postionShow.value;
};

const handleChange = (option: Option) => {
    if (!option.disabled) {
        option.selected = !option.selected;
        selectedValues.value = state.options.filter(opt => opt.selected).map(opt => opt.label);
    }
};

const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        postionShow.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    window.removeEventListener('click', closeDropdown);
});
</script>

<template>
    <!-- <div class="container-fuild"> -->
        <div class="row">
            <div class="col-lg-8 col-xl-5 w-100">
                <div class="multiple-select w-100" ref="dropdownRef">
                    <input type="text" readonly @click="handleClick" :value="selectedValues.join(', ')" class="form-select">
                    <div class="multiple-positionBox" v-if="postionShow">
                        <ul>
                            <li v-for="(option, index) in state.options" :key="index"
                                :class="{ 'item-disables-li': option.disabled, 'item-selected': option.selected }"
                                @click="handleChange(option)">
                                {{ option.label }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>



<style lang="scss" scoped>
.multiple-select {
    width: 200px;
    height: 30px;
    position: relative;
    input {
        border: 1px solid #d4d3d3;
        // padding: 8px 10px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
    }

    .multiple-positionBox {
        width: 100%;
        height: auto;
        border: 1px solid #d4d3d3;
        overflow: hidden;
        position: absolute;
        top: 42px;
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

        .item-selected {
            background-color: #c8e6c9;
            /* 選中選項的背景顏色 */
        }
    }
}
</style>