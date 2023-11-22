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
        /**
         * 獲取數據
         */
        async getTodos() {
            const { data } = await request.get<ITodoItem[]>('/')
            this.list = data
        },
        /**
         * 刪除數據
         * @param id 
         */
        async delTodo(id: number) {
            console.log(id)
            await request.delete(`/${id}`)
            this.getTodos()
        },
        /**
         * 更新數據
         * @param id 根據id來更新
         * @param key 更新誰
         * @param value 更新值
         */
        async updateTodo(id: number, key: string, value: string | boolean) {
            await request.patch(`/${id}`, {
                [key]: value
            })
            console.log('123')
            this.getTodos()
        }
    }
})

export default mainStore