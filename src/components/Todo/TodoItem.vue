<script setup lang="ts">
import { ref, nextTick } from "vue";
import useStore from '../../stores/dotoIndex';
import type { ITodoItem } from '../../types/data'; // 使用 type 關鍵字導入
const { main } = useStore()
const { getTodos, delTodo, updateTodo, updateAllStatus } = main
const inputRef = ref<HTMLInputElement>() //選中元素 再到console 去打$0.__proto__ 
defineProps<{
    item: ITodoItem
}>()
const isEditing = ref(false)
const handleChangeInput = (item: ITodoItem) => {
    updateTodo(item.id, 'done', !item.done)
}
/**
 * 雙擊 聚焦
 */
const handledbClick = () => {
    isEditing.value = true
    nextTick(() => inputRef.value.focus()) //使用nextTick 元素更新後再聚焦
    // inputRef.value.focus() //要聲明後才能使用focus
}
const handleBlur = () => {
    isEditing.value = false
}
</script>

<template>
    <li :class="{
        completed: item.done,
        editing: isEditing,
    }">
        <div class="view">
            <input class="toggle" type="checkbox" :checked="item.done" @change="handleChangeInput(item)">
            <label @dblclick="handledbClick">{{ item.name }}</label>
            <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" ref="inputRef" @blur="handleBlur">
    </li>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>