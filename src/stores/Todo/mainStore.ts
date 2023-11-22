import type { ITodoItem } from '@/types/data';
import request from '../../utils/requests';
import { defineStore } from 'pinia';

const mainStore = defineStore('main', {
    state: () => {
        return {
            list: [] as ITodoItem[]
        }
    },
    actions: {
        async getTodos() {
            console.log(request)
            const { data } = await request.get('/')
            this.list = data
        }
    }
})

export default mainStore