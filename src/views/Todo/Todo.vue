<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import Header from '../../components/Todo/TodoHeader.vue'
import Main from '../../components/Todo/TodoMain.vue'
import Footer from '../../components/Todo/TodoFooter.vue'


interface Person {
    name: string,
    age?: number,
    gender: string
}

// let tom:Person = {
//     name:'Tom',
//     age:25,
//     gender:'male'
// }
// let tom = ref<Person>({
//     name:'',
//     age:0,
//     gender:''
// })

// let list= ref<any[]>([])
// list.value = ['123','321']

</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        To-Do List
                    </div>
                </template>
                <template #content>
                    <div class="container" style="width: 80%;">
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
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import'../../assets/todo/todoBase.css';
@import'../../assets/todo/todoIndex.css';
</style>
