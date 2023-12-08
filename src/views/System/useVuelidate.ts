import { reactive, computed } from 'vue'
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

interface IState {
    username: null | string,
    password: null | string
}
export function useValidation() {
    const state  = reactive<IState>({
        username: null,
        password: null,
    });
    // Validation rules
    const rules = computed(() => {
        return {
            username: {
                required,
                minLength: minLength(3),
            },
            password: {
                required,
                minLength: minLength(5),
            },
        };
    });
    // 使用 Vuelidate
    const v$ = useVuelidate(rules, state);

    // 將需要的部分暴露出去
    return { state, v$ };
}