import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const header = ref<IBaseHeader>({
    label:'Login Feature',
    desctiption:'Custom login enhancements for a smoother user experience.',
    title: 'Systems',
    sub:'Login',
    url: '/layout/login'
})
