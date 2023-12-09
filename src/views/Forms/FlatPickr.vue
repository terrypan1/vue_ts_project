<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import BaseBlock from "../../components/Block/BaseBlock.vue";
import BaseHeadering from '../../components/Block/BaseHeadering.vue'
import type { IBaseHeader } from '../../types/data'
import type { IShowProps } from '../../types/data'

// import AsyncComponent from '../../components/defineAsyncComponent/buttonDemo.vue'
const isLoaded = ref(false)
//異步組件
const AsyncComponent = defineAsyncComponent(() => {
    return import('../../components/defineAsyncComponent/buttonDemo.vue')
})

const flatPickrState = reactive({
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
//BaseHeadering
const header = ref<IBaseHeader>({
    label: 'FlatPickr Helpers',
    desctiption: 'Custom functionality to further enrich your tables.',
    title: 'Froms',
    sub: 'FlatPickr',
    url: '/layout/flastPickerDemo'
})
//BaseBlock
const card = ref<IShowProps>({
    show: {
        header: true,
        content: true,
        footer: false
    },
})
</script>

<template>
    <BaseHeadering :header="header"></BaseHeadering>
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
                    <div class="form-group" style="text-align: center;">
                        <label class="form-label" for="example-flatpickr-default">Default format</label>
                        <div class="input-group">
                            <flat-pickr v-model="flatPickrState.dateDefault" class="form-control" placeholder="Y-m-d" />
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-center flex-column text-center">
                        <div>
                            <button type="button" class="btn btn-primary" @click="isLoaded = true">異步組件</button>
                        </div>
                        <div>
                            <AsyncComponent v-if="isLoaded"></AsyncComponent>
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

body {
    background-color: rgb(235, 238, 242);
    padding: 0;
    margin: 0;
}
</style>