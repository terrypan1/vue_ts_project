import type { IBaseHeader } from '../../types/data'
import { ref } from 'vue'

export const helpers = ref<IBaseHeader>({
    label:'Images Overlay',
    desctiption:'Image hover effect.',
    title: 'Elements',
    sub:'Images Overlay',
    url: '/layout/imagesOverlay'
})

export const carouselHelpers = ref<IBaseHeader>({
    label:'Carousel',
    desctiption:'A slideshow component for cycling through elements.',
    title: 'Elements',
    sub:'Carousel',
    url: '/layout/carousel'
})
export const paginationHelpers = ref<IBaseHeader>({
    label:'Pagination',
    desctiption:'Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.',
    title: 'Elements',
    sub:'Pagination',
    url: '/layout/pagination'
})