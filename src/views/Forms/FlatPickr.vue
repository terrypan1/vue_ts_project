<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import BaseBlock from "../../components/BaseBlock.vue";
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


</script>

<template>
    <BaseBlock :title="'FlatPickr'">
        <!-- 這裡的內容會出現在 BaseBlock 的 <slot></slot> 中 -->
        <section>
            <div class="form-group" style="text-align: center;">
                <label class="form-label" for="example-flatpickr-default">Default format</label>
                <div class="input-group">
                    <flat-pickr v-model="flatPickrState.dateDefault" class="form-control" placeholder="Y-m-d" />
                </div>
            </div>
            <div class="mt-4">
                <button type="button" class="btn btn-primary" @click="isLoaded = true">異步組件</button>
                <AsyncComponent v-if="isLoaded"></AsyncComponent>
            </div>

            <!-- <div class="container">
                <div class="row mt-5">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="btn btn-primary" @click="isLoaded = true">異步組件</button>
                        <AsyncComponent v-if="isLoaded"></AsyncComponent>
                    </div>
                </div>
            </div> -->
        </section>
    </BaseBlock>
</template>
  
<style lang="scss">
@import "flatpickr/dist/flatpickr.css";
@import "../../assets/scss/flatPickr/bootstrap.scss";

.form-control {
    border-radius: 10px !important;
}

.form-label {
    font-weight: bold;
}
</style>