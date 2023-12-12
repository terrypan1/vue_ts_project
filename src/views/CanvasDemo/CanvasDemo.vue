<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import WritingBoard from '../../components/CanvasDemo/WritingBoard.vue'

</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        handwriting pad
                    </div>
                </template>
                <template #content>
                    <WritingBoard></WritingBoard>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>