<template>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer" style="height: 100px;">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>0</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters" style="height: 100px !important;">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Clear completed</button>
    </footer>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>