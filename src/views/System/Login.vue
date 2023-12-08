<script setup lang="ts">
import { swalSuccess } from './useSweetAlert'
import { useValidation } from './useVuelidate';

// 使用自定義的鉤子
const { state, v$ } = useValidation();
async function onSubmit() {
    const result = await v$.value.$validate();
    if (!result) {
        console.log('執行');
        console.log(state.username);
        return;
    }
    swalSuccess('登陸成功')
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 md-wd" style="margin-top:50px;width:450px">
                <div class="card fw-bold" style="border: 0px;">
                    <div class="card-header" style="border: 0px;">
                        <span>Sign In</span>
                    </div>
                    <div class="card-body p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                        <h1 class="fw-bold">WelCome</h1>
                        <p class="fw-medium text-muted mb-4">please login</p>
                        <div class="mb-4">
                            <input type="text" class="form-control form-control-alt" placeholder="Username"
                                :class="{ 'is-invalid': v$.username.$errors.length, }" v-model="state.username"
                                @blur="v$.username.$touch">
                            <div v-if="v$.username.$errors.length" class="invalid-feedback">
                                請輸入使用者名稱
                            </div>
                        </div>
                        <div class="mb-4">
                            <input type="password" class="form-control form-control-alt" placeholder="Password"
                                :class="{ 'is-invalid': v$.password.$errors.length }" v-model="state.password"
                                @blur="v$.password.$touch">
                            <div v-if="v$.password.$errors.length" class="invalid-feedback">
                                請輸入使用者密碼
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-6 col-xl-5">
                                <button type="button" class="btn w-100 btn-primary" @click="onSubmit">
                                    <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.invalid-feedback {
    color: rgb(220, 38, 38);
}

.form-control-alt {
    background-color: rgb(235, 238, 242);

    & .is-valid {
        border-color: rgb(248, 212, 212);

        &:focus {
            border-color: rgb(248, 212, 212);
            ;
            background-color: rgb(248, 212, 212) !important;
            ;
        }
    }

    &.is-invalid {
        border-color: rgb(248, 212, 212);
        background-color: rgb(248, 212, 212);
        ;

        &:focus {
            border-color: rgb(248, 212, 212);
            background-color: rgb(248, 212, 212);
        }
    }
}


@media (max-width: 768px) {
    .md-wd {
        width: 800px !important;
    }
}
</style>
  