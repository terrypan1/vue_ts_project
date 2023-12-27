import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
export const useDarkModeStore = defineStore('darkMode', () => {
    const enabled = ref(false)
    // 添加 setTheme 方法
    const setTheme = (value:any) => {
        enabled.value = value;
    };
    return { enabled, setTheme }
})