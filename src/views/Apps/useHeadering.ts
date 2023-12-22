import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const helpers = ref<IBaseHeader>({
    label:'Apps Chat',
    desctiption:'Smooth chat room.',
    title: 'Apps',
    sub:'Chat',
    url: '/layout/chat'
})