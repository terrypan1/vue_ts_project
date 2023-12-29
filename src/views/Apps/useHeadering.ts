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
    label:'Apps Calendar',
    desctiption:'Can freely choose calendar functions on the web.',
    title: 'Apps',
    sub:'Calendar',
    url: '/layout/calendar'
})
//PriceCalculator
export const priceCalculatorHelpers = ref<IBaseHeader>({
    label:'Apps PriceCalculator',
    desctiption:'Simple calculation tool.',
    title: 'Apps',
    sub:'PriceCalculator',
    url: '/layout/priceCalculator'
})
//InfiniteScroll
export const infiniteScrollHelpers = ref<IBaseHeader>({
    label:'Apps InfiniteScroll',
    desctiption:'Simple calculation tool.',
    title: 'Apps',
    sub:'InfiniteScroll',
    url: '/layout/infiniteScroll'
})