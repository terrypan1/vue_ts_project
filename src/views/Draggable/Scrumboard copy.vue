<script setup lang="ts">
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';

// 初始化列表
const items = ref([
    { text: '項目 1' },
    { text: '項目 2' },
    { text: '項目 3' },
]);

// TypeScript 介面定義（可選）
interface Item {
    text: string;
}

watch(items, (newValue) => {
    console.log(newValue)
})


const project_list = ref([]);

project_list.value = [
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
];


</script>
<template>
    <div class="draggable-container">
        <draggable v-model="items" class="drag-area" :item-key="'text'">
            <template #item="{ element }">
                <div class="drag-item">{{ element.text }}</div>
            </template>
        </draggable>
    </div>
    <div>
        {{ items }}
    </div>
    <div v-for="project in project_list" :item-key="'task_id'">
        <h3>{{ project.title }}</h3>
        <draggable class="connect-sorting-content" group="default" ghost-class="ui-state-highlight"
            drag-class="ui-sortable-helper" :animation="200" :item-key="'task_id'">
            <template>
                <div v-for="project in project_list" :key="project.id">
                    <h3>{{ project.title }}</h3>
                    <draggable class="connect-sorting-content" group="default" :list="project.tasks"
                        ghost-class="ui-state-highlight" drag-class="ui-sortable-helper" :animation="200"
                        :item-key="'task_id'">
                        <template>
                            <div v-for="project in project_list" :key="project.id">
                                <h3>{{ project.title }}</h3>
                                <draggable class="connect-sorting-content" group="default" :list="project.tasks"
                                    ghost-class="ui-state-highlight" drag-class="ui-sortable-helper" :animation="200"
                                    :item-key="'task_id'">
                                    <template #item="{ element }">
                                        <div class="card task-text-progress cursor-move ui-sortable-handle">
                                            {{ element.title }}
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </template>
                    </draggable>
                </div>
            </template>
        </draggable>
    </div>
</template>
<style>
.draggable-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
}

.drag-area {
    list-style: none;
    padding: 0;
}

.drag-item {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #fff;
    cursor: move;
    /* 光標變為可移動的標誌 */
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

.drag-item:hover {
    background-color: #eaeaea;
}
</style>
  
  