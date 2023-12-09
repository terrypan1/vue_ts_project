<script setup lang="ts">
import type { IBaseHeader } from '../../types/data'
const props = defineProps({
    header: {
        type: Object as () => IBaseHeader,
        required: true
    }
})
console.log(props.header);

</script>
<template>
    <div class="continer-fuild" style="background-color: rgb(246, 247, 249);">
        <div class="d-flex flex-column flex-md-row justify-content-between ms-md-5 me-5">
            <div class="mt-5 ms-md-5 mb-4 ms-3">
                <h3 class="fw-bold" style="font-family:Arial, Helvetica, sans-serif;">{{ props.header.label }}</h3>
                <p class="fw-bold">{{ props.header.desctiption }}</p>
            </div>
            <div class="mt-md-5 me-md-5 mb-4 ms-3">
                <div class="d-flex flex-row base-header mt-md-3">
                    <RouterLink :to=props.header.url class="fw-bold m-1">
                        {{ props.header.title }}
                    </RouterLink>
                    <!-- <span class="fw-bold" style="color: rgb(76, 120, 221);">Tables</span> -->
                    <i class="bi bi-chevron-right fw-bold m-1" style="color: rgb(210, 215, 220)"></i>
                    <span class="m-1 fw-bold"> {{ props.header.sub }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.base-header {
    a {
        text-decoration: none;
        transition: all 0.5 ease-in-out;
    }

    a:hover {
        text-decoration: underline;
        font-weight: bold;
    }
}
</style>