import { ref } from 'vue';
import type { INavMenu } from '../types/data';
export const menuLable = ref<INavMenu[]>([
    {
        lable: 'Dashboard',
        target: '#menu1',
        target2: 'menu1',
        sub: [
            { title: 'dashboard', path: '/layout/dashboard' },
        ]
    },
    {
        lable: 'Apps',
        target: '#menu2',
        target2: 'menu2',
        sub: [
            { title: 'chat', path: '/layout/chat' },
            { title: 'calendar', path: '/layout/calendar' },
            { title: 'priceCalculator', path: '/layout/priceCalculator' },
            { title: 'infiniteScroll', path: '/layout/infiniteScroll' },
        ]
    },
    {
        lable: 'Todos',
        target: '#menu3',
        target2: 'menu3',
        sub: [
            { title: 'todos', path: '/layout/todo' },
        ]
    },
    {
        lable: 'Canvas',
        target: '#menu4',
        target2: 'menu4',
        sub: [
            { title: 'canvas', path: '/layout/canvasDemo' },
        ]
    },
    {
        lable: 'Forms',
        target: '#menu5',
        target2: 'menu5',
        sub: [
            { title: 'flastPicker', path: '/layout/flastPickerDemo' },
            { title: 'tabs', path: '/layout/tabs' },
        ]
    },
    {
        lable: 'Draggable',
        target: '#menu6',
        target2: 'menu6',
        sub: [
            { title: 'Scrumboard', path: '/layout/scrumboard' },
        ]
    },
    {
        lable: 'Anthentication',
        target: '#menu7',
        target2: 'menu7',
        sub: [
            { title: 'Login', path: '/layout/login' },
        ]
    },
    {
        lable: 'Tables',
        target: '#menu8',
        target2: 'menu8',
        sub: [
            { title: 'helpers', path: '/layout/helpers' },
            { title: 'datatable', path: '/layout/datatable' },
        ]
    },
    {
        lable: 'Elements',
        target: '#menu9',
        target2: 'menu9',
        sub: [
            { title: 'imagesOverlay', path: '/layout/imagesOverlay' },
            { title: 'carousel', path: '/layout/carousel' },
            { title: 'pagination', path: '/layout/pagination' },
            { title: 'wizard', path: '/layout/wizard' },
        ]
    },
])

