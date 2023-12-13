<script setup lang="ts">
import { ref, watch } from 'vue';
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { VueDraggableNext as draggable } from 'vue-draggable-next';

const project_list = ref([
    {
        id: 1,
        title: "In Progress",
        tasks: [
            { task_id: 1, title: "Creating a new Portfolio on Dribble", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: true, date: " 08 Aug, 2020" },
            { task_id: 2, title: "Singapore Team Meet", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", date: " 09 Aug, 2020" },
        ],
    },
    {
        id: 2,
        title: "Complete",
        tasks: [
            { task_id: 1, title: "Dinner with Kelly Young", description: "", date: " 08 Aug, 2020" },
            {
                task_id: 2,
                title: "Launch New SEO Wordpress Theme ",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                date: " 09 Aug, 2020",
            },
        ],
    },
    {
        id: 3,
        title: "New",
        tasks: [],
    },
])
// 監聽 projectList 數據的變化
watch(project_list, (newValue, oldValue) => {
    console.log('新的任務列表:', newValue);
}, { deep: true });


</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        Scrumboard
                    </div>
                </template>
                <template #content>
                    施工中...
                    <div class="task-boards">
                        <div v-for="project in project_list" :key="project.id" class="task-board">
                            <h3>{{ project.title }}</h3>
                            <draggable class="task-list" v-model="project.tasks" group="tasks" :animation="200">
                                <div v-for="task in project.tasks" :key="task.task_id" class="task">
                                    <h4>{{ task.title }}</h4>
                                    <p>{{ task.description }}</p>
                                    <span>{{ task.date }}</span>
                                </div>
                            </draggable>
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.task-boards {
    display: flex;
    justify-content: space-around;

    .task-board {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        width: 30%;
        background-color: rgb(226, 230, 234);
    }

    .task-list {
        min-height: 200px;
    }

    .task {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #f9f9f9;

        &:hover {
            cursor: move;
        }
    }
}
</style>
  
  