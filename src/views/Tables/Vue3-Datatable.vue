<script setup lang="ts">
import { dataTablehelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import DataTable from '../../components/Tables/DataTable.vue'
</script>
<template>
    <BaseHeadering :header=dataTablehelpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        VUE DATATABLE
                    </div>
                </template>
                <template #content>
                    <DataTable></DataTable>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>