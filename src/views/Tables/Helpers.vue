<script setup lang="ts">
import { ref } from 'vue'
import BaseHeadering from '../../components/Block/BaseHeadering.vue'
import BaseBlock from "../../components/Block/BaseBlock.vue";
import { helpers } from './useHeadering';//使用BaseHeadering
import type { IShowProps } from '../../types/data'

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
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <template #header>
                    <div class="card-header border-0 fw-bolder" style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        VUE DATASET
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>