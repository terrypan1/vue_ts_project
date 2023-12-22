import { ref } from 'vue'
import type { IShowProps } from '../../types/data'

export const card = ref<IShowProps>({
    show: {
        header: true,
        content: true,
        footer: false
    },
})