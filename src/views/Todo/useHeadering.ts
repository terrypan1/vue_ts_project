import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const helpers = ref<IBaseHeader>({
    label:'To-Do List',
    desctiption:'Reminders, to-do items, time management, schedule.',
    title: 'Todos',
    sub:'Helpers',
    url: '/layout/todo'
})