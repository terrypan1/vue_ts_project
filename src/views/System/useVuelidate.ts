import { reactive, computed } from 'vue'
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import type { IVuelidate } from '@/types/data';
// interface IState {
//     username: null | string,
//     password: null | string
// }
export function useValidation() {
    const state = reactive<IVuelidate>({
        username: null,
        password: null,
    });
    // Validation rules
    const rules = computed(() => {
        return {
            username: {
                required,
                minLength: minLength(4),
            },
            password: {
                required,
                minLength: minLength(4),
            },
        };
    });
    // 使用 Vuelidate
    const v$ = useVuelidate(rules, state);

    // 將需要的部分暴露出去
    return { state, v$ };
}