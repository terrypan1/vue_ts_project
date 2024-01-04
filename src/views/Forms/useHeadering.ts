import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const helpers = ref<IBaseHeader>({
    label: 'FlatPickr Helpers',
    desctiption: 'Custom functionality to further enrich your tables.',
    title: 'Froms',
    sub: 'FlatPickr',
    url: '/layout/flastPickerDemo'
})

export const tabsHelpers = ref<IBaseHeader>({
    label: 'Tabs Helpers',
    desctiption: 'Tabs are quasi-navigation components which can highly improve website clarity and increase user experience.',
    title: 'Froms',
    sub: 'Tabs',
    url: '/layout/tabs'
})