import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
export const useDarkModeStore = defineStore('darkMode', () => {
    const enabled = ref(false)
    return { enabled}
})