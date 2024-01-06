<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import type { Ref,PropType } from 'vue';
const selectVal = ref('')
interface ShowProps {
    label: string;
    value: string;
    disabled: boolean;
}
const props = defineProps({
    options: {
        type: Array as PropType<ShowProps[]>,
        required: true
    },
});
const postionShow = ref(false);
// 明確指定 dropdownRef 的類型
const dropdownRef: Ref<HTMLElement | null> = ref(null);
const handleClick = () => {
    postionShow.value = !postionShow.value;
};
const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        postionShow.value = false;
    }
};
const handleChange = (item: string) => {
    selectVal.value = item
    postionShow.value = false;
}
onMounted(() => {
    window.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    window.removeEventListener('click', closeDropdown);
});
</script>
<template>
    <div class="single-select" ref="dropdownRef">
        <input type="text" readonly @click="handleClick" :value="selectVal">
        <div class="single-positionBox" v-if="postionShow">
            <ul>
                <li v-for="(option, index) in props.options" :key="index" :class="{ 'item-disables-li': option.disabled }"
                    @click="handleChange(option.lable)">
                    {{ option.lable }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.single-select {
    width: 150px;
    height: 30px;
    position: relative;

    input {
        border: 1px solid #d4d3d3;
        // padding: 8px 4px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
    }

    .single-positionBox {
        width: 100%;
        height: auto;
        border: 1px solid #d4d3d3;
        overflow: hidden;
        position: absolute;
        top: 30px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 99;
        ul {
            padding: 0;
            margin:0;
            background-color: white;
            width: 100%;

            li {
                list-style: none;
                width: 100%;
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