<script setup lang="ts">
import { reactive, computed } from "vue";

const prop = defineProps({
    title: {
        type: String,
        required: true,
        default: ''
    }
})
</script>


<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card fw-bold text-center">
                    <div class="card-header">
                        {{ prop.title }}
                    </div>
                    <div class="card-body">
                        <!-- 默認插槽 -->
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-header {
    background-color: rgb(246, 247, 249);
}
</style>