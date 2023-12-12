<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue';
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import flatPickr from 'vue-flatpickr-component';
import type { IBaseHeader } from '../../types/data'
import type { IShowProps } from '../../types/data'

// import AsyncComponent from '../../components/defineAsyncComponent/buttonDemo.vue'
const isLoaded = ref(false)
//異步組件
const AsyncComponent = defineAsyncComponent(() => {
    return import('../../components/defineAsyncComponent/buttonDemo.vue')
})

const flatPickrState = reactive<any>({
    // Initial values
    dateDefault: null,
    dateCustom: null,
    dateFriendly: null,
    dateRange: null,
    timeStandalone: null,
    timeStandalone24: null,
    timeDateTime: null,
    timeDateTime24: null,
    inlineDefault: null,
    inlineTime: null,

    // Configuration, get more form https://chmln.github.io/flatpickr/options/
    configCustom: { dateFormat: "d-m-Y" },
    configFriendly: { dateFormat: "F j, Y" },
    configRange: { mode: "range", minDate: "today" },
    configTimeStandalone: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    },
    configTimeStandalone24: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
    },
    configDateTime: { enableTime: true },
    configDateTime24: { enableTime: true, time_24hr: true },
    configInlineDefault: { inline: true },
    configInlineTime: { inline: true, enableTime: true },
});

const greet = (person: string, date: Date) => {
    console.log(person, date.toISOString().split('T')[0]);
}
greet('小名', new Date('2023-11-12'))
</script>

<template>
    <BaseHeadering :header="helpers"></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <!-- 這裡的內容會出現在 BaseBlock 的 <slot></slot> 中 -->
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        FlatPickr
                    </div>
                </template>
                <template #content>
                    <div class="contaier">
                        <div class="row">
                            <div class="col-md-4">
                                <p style="color: rgb(119, 127, 135);">flatpickr is a lightweight and powerful datetime
                                    picker.</p>
                            </div>
                            <div class="col-md-8 mb-5">
                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <label class="form-label" for="example-flatpickr-default">Default format</label>
                                        <flat-pickr v-model="flatPickrState.dateDefault" class="form-control"
                                            placeholder="Y-m-d" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="border-bottom mb-4 pb-2 mt-4 fw-bold">
                            Datepicker Range
                        </p>
                        <div class="row">
                            <div class="col-md-4">
                                <p style="color: rgb(119, 127, 135);">Very useful for booking or calendaring web apps</p>
                            </div>
                            <div class="col-md-8">
                                <label class="form-label" for="example-flatpickr-default">Date Range</label>
                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <flat-pickr class="form-control" placeholder="Date Range"
                                            v-model="flatPickrState.dateRange" :config="flatPickrState.configRange" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="border-bottom mb-4 pb-2 mt-4 fw-bold">
                            異步組件
                        </p>
                        <div class="row">
                            <div class="col-md-4">
                                <p style="color: rgb(119, 127, 135);">Can be used to optimize initial load time.</p>
                            </div>
                            <div class="col-md-8">
                                <label class="form-label" for="example-flatpickr-default">AsyncComponent</label>
                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <div>
                                            <button type="button" class="btn btn-primary"
                                                @click="isLoaded = true">異步組件</button>
                                        </div>
                                        <div>
                                            <AsyncComponent v-if="isLoaded"></AsyncComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
  
<style lang="scss">
@import "../../assets/css/flatpickr.css";


.form-control {
    border-radius: 10px !important;
}

.form-label {
    font-weight: bold;
}

// body {
//     background-color: rgb(235, 238, 242);
//     padding: 0;
//     margin: 0;
// }
</style>