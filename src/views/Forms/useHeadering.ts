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

export const elemantsHelpers = ref<IBaseHeader>({
    label: 'Form Elements',
    desctiption: 'Carefully designed elements that will ensure a great experience for your users.',
    title: 'Froms',
    sub: 'Elements',
    url: '/layout/elements'
})

export const quillHelpers = ref<IBaseHeader>({
    label: 'Form QuillEditor',
    desctiption: 'VueQuill is a Component for building rich text editors.',
    title: 'Froms',
    sub: 'QuillEditor',
    url: '/layout/quill'
})