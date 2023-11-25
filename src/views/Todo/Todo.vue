<script setup lang="ts">
import Header from '../../components/Todo/TodoHeader.vue'
import Main from '../../components/Todo/TodoMain.vue'
import Footer from '../../components/Todo/TodoFooter.vue'
</script>
<template>
    <div class="container">
        <section class="todoapp">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <!-- Remove the below line ↓ -->
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            <!-- Change this out with your name and url ↓ -->
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>
