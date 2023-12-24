import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'
//chat
export const helpers = ref<IBaseHeader>({
    label:'Apps Chat',
    desctiption:'Smooth chat room.',
    title: 'Apps',
    sub:'Chat',
    url: '/layout/chat'
})
//calender
export const calenderHelpers = ref<IBaseHeader>({
    label:'Apps Calender',
    desctiption:'Can freely choose calendar functions on the web.',
    title: 'Apps',
    sub:'Calender',
    url: '/layout/calender'
})