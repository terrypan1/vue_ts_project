<script setup lang="ts">
import { storeToRefs } from "pinia";
import TodoItem from "./TodoItem.vue";
import useStore from "../../stores/dotoIndex";
import type { ITodoItem } from '../../types/data'; // 使用 type 關鍵字導入
const { main } = useStore()
const { getTodos, delTodo, updateTodo, updateAllStatus } = main
const { list, mainRadioStatus } = storeToRefs(main)
getTodos()
const handleChangeAll = (done: boolean) =>{
    updateAllStatus(done)
    console.log('執行')
}

</script>
<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" :checked=mainRadioStatus
            @change="handleChangeAll(!mainRadioStatus)">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
            <TodoItem v-for="item in list" :key="item.id" :item="item"></TodoItem>
        </ul>
    </section>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>