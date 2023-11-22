import { defineStore } from 'pinia';

const mainStore = defineStore('main', {
    state: () => {
        return {
            list: [
                {
                    id: 0,
                    name: '吃飯',
                    done: true
                },
                {
                    id: 1,
                    name: '睡覺',
                    done: false
                }
            ]
        }
    }
})

export default mainStore