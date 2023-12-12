import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const helpers = ref<IBaseHeader>({
    label:'Draggable',
    desctiption:'Allow elements to be moved using the mouse.',
    title: 'Scrumboard',
    sub:'Helpers',
    url: '/layout/scrumboard'
})