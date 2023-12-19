<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import DataSet from '../../components/Tables/DataSet.vue'
</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <div class="d-flex justify-content-end">
                <div class="excel-file">
                    <button type="button" class="btn btn-primary mb-4 me-2">選擇Excel檔案</button>
                    <button type="button" class="btn btn-primary mb-4 me-2">上傳Excel檔案</button>
                    <button type="button" class="btn btn-primary mb-4">下載Excel範例</button>
                </div>
            </div>
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        VUE DATASET
                    </div>
                </template>
                <template #content>
                    <DataSet></DataSet>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.gg-select {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(1);
    width: 22px;
    height: 22px;
}

.gg-select::after,
.gg-select::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    left: 7px;
    transform: rotate(-45deg);
}

.gg-select::before {
    border-left: 2px solid;
    border-bottom: 2px solid;
    bottom: 4px;
    opacity: 0.3;
}

.gg-select::after {
    border-right: 2px solid;
    border-top: 2px solid;
    top: 4px;
    opacity: 0.3;
}

th.sort {
    cursor: pointer;
    user-select: none;

    &.asc {
        .gg-select::after {
            opacity: 1;
        }
    }

    &.desc {
        .gg-select::before {
            opacity: 1;
        }
    }
}

.pagination {
    font-weight: 900;
}

$table-striped-bg: rgb(246, 247, 249);
$primary: rgb(76, 120, 221);

$pagination-color: rgb(57, 78, 117);
$pagination-bg: none;
$pagination-border-width: none;
// $pagination-border-radius: $border-radius;
// $pagination-margin-start: -$pagination-border-width;
$pagination-border-color: none;

// $pagination-focus-color: $link-hover-color;
// $pagination-focus-bg: $gray-200;
$pagination-focus-box-shadow: none;
$pagination-focus-outline: 0;

// $pagination-hover-color: $link-hover-color;
$pagination-hover-bg: none;
// $pagination-hover-border-color: $gray-300;

$pagination-active-color: $primary; //一定要有
$pagination-active-bg: rgb(235, 238, 242);
$pagination-active-border-color: none;

$pagination-disabled-color: none;
$pagination-disabled-bg: none;
$pagination-disabled-border-color: none;

$pagination-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

// $pagination-border-radius-sm: $border-radius-sm;
// $pagination-border-radius-lg: $border-radius-lg;
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';

.excel-file {
    button {
        color: white;
        &:focus {
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
    }
}
</style>
