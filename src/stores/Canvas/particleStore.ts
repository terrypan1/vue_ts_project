import { defineStore } from 'pinia';

const particleStore = defineStore('particle', {
    state: () => {
        return {
            maxSize: 40,
            minSize: 0,
        }
    },
    actions: {

    }
})

export default particleStore