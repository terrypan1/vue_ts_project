import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const helpers = ref<IBaseHeader>({
    label:'Table Helpers',
    desctiption:'Custom functionality to further enrich your tables.',
    title: 'Tables',
    sub:'Helpers',
    url: '/layout/helpers'
})