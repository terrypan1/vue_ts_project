import type { ITodoItem,ITodoResponse } from '@/types/data';
import request from '../../http/requests';
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
            const { data } = await request.get<ITodoResponse>('/')
            this.list = data.info
            console.log(this.list)
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
            await request.patch(`/${id}/`, {
                [key]: value
            })
            this.getTodos()
        },
        /**
         * 添加數據
         * @param name 
         */
        async addTodo(name: string) {
            await request.post('/', {
                name,
                done: false
            })
            this.getTodos()
        },
        /**
         * 更新狀態
         * @param done boolean 
         */
        async updateAllStatus(done: boolean) {
            const arrPromise = this.list.map((item) => {
                //每次呼叫 this.updateTodo 都會返回一個 Promise
                return this.updateTodo(item.id, 'done', done)
            })
            console.log(arrPromise);
            await Promise.all(arrPromise)
            this.getTodos()
        }
    },
    getters: {
        mainRadioStatus(): boolean {
            return this.list.every((item) => {
                console.log(item);
                return item.done
            })
        }
    }
})

export default mainStore