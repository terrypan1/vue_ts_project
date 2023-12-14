<script setup lang="ts">
import { swalSuccess } from '../views/Anthentication/useSweetAlert'
import { useValidation } from '../views/Anthentication/useVuelidate';
import { useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
const isImageLoaded = ref(false);//定義一個數據屬性 來追蹤圖片是否加載完成

// 使用自定義的鉤子
const { state, v$ } = useValidation();
const $router = useRouter()
state.username = 'guest'
state.password = 'guest'
async function onSubmit() {
    const result = await v$.value.$validate();
    if (!result) {
        return;
    }
    swalSuccess('登陸成功')
    $router.push("/layout/dashboard")
}
onMounted(() => {
    const img = new Image();
    img.src = '/assets/media/intro-bg.jpg';
    img.onload = () => {
        isImageLoaded.value = true;
    };
});
</script>
<template>
    <div v-if="isImageLoaded">
    <div class="container-fuild h-100" style="background-color: white !important;">
        <div class="row g-0 h-100 w-100">
            <div class="col-lg-4 left-container d-none d-lg-block">
                <div class="left-img">
                </div>
            </div>
            <div class="col-lg-8 h-100">
                <div class="row g-0">
                    <div class="d-flex flex-column align-items-center justify-content-center" style="height: 100vh;">
                        <div class="d-flex flex-column align-items-center right-container">
                            <h1 class="fw-bold">Sign In</h1>
                            <p class="fw-medium text-muted fw-bold">
                                Welcome,Please log in or
                                <a href="">
                                    create a new account
                                </a>
                            </p>
                            <div class="mb-4 mt-4">
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
                            <div class="mb-4 w-100">
                                <div class="d-flex justify-content-between ms-4 me-4">
                                    <a style="text-decoration: none;font-size: 14px;color: rgb(84, 91, 98);"
                                        class="fw-bold">Forgot Password?</a>
                                    <button type="button" class="btn btn-primary login-btn" @click="onSubmit">
                                        <i class="bi bi-box-arrow-right"></i>
                                        sigh in
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div v-else>
        <div>Loading...</div>
    </div>
</template>
<style lang="scss" scoped>
.left-img {
    position: relative;
    height: 100vh;
    background-image: url("/assets/media/intro-bg.jpg");
    background-size: cover;
    background-position: top; //有這個才有自適應的感覺
    // clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}

.left-img::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.3);
    /* 調整這裡的rgba值來改變透明度和顏色 */
    z-index: 1;
}

.invalid-feedback {
    color: rgb(220, 38, 38);
}

.form-control-alt {
    width: 300px;
    height: 50px;
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

.login-btn {
    color: white;

    &:focus {
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
}
</style>