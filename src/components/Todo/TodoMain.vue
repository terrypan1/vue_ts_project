<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../stores/dotoIndex";
import { ITodoItem } from '../../types/data'
const { main } = useStore()
const { getTodos, delTodo, updateTodo, updateAllStatus } = main
const { list, mainRadioStatus } = storeToRefs(main)
getTodos()
const handleChangeInput = (item: ITodoItem) => {
    // console.log(item)
    updateTodo(item.id, 'done', !item.done)
}
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
            <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
                <div class="view">
                    <input class="toggle" type="checkbox" :checked="item.done" @change="handleChangeInput(item)">
                    <label>{{ item.name }}</label>
                    <button class="destroy" @click="delTodo(item.id)"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Buy a unicorn</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li>
        </ul>
    </section>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>