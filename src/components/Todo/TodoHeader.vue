<script setup lang="ts">
import { ref } from 'vue';
import useStore from '../../stores/dotoIndex'
const { main } = useStore()
const { addTodo } = main
const nameInput = ref('')
const handleKeyup = (name: string) => {
    if (name.trim() == '') return alert('不能為空')
    addTodo(name)
    nameInput.value = ''
}

</script>

<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="nameInput" @keyup.enter="handleKeyup(nameInput)">
    </header>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>