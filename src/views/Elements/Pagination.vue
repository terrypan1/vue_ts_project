<script setup lang="ts">
import { paginationHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { ref, watch, computed, reactive } from 'vue'
import { getAllPhotos } from '../../api/gtPhotos'
import data from '../../data/usersDataset.json'

interface IPageList {
    pageNo: number,
    pageSize: number,
    pageTotal: number
}
interface IPhotos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
const photosList = ref<IPhotos[]>([]);
const selectedOption = ref(10); // 用於綁定選中的選項
const options = ref([
    { value: 5, text: '5' },
    { value: 10, text: '10' },
    { value: 25, text: '25' },
    { value: 50, text: '50' },
    { value: 100, text: '100' }
])
getAllPhotos().then(result => {
    photosList.value = result;
    console.log(photosList.value.length);
    pageList.pageTotal = totalPages.value;
});
//計算總共有幾頁
const totalPages = computed(() => {
    console.log(photosList.value.length);
    return Math.ceil(photosList.value.length / selectedOption.value);
});
const pageList = reactive<IPageList>({
    pageNo: 1,//頁碼
    pageSize: selectedOption.value,//每頁的筆數
    pageTotal: totalPages.value,//總頁數
})
//當前頁
const curPage = (index: number | string) => {
    console.log(index);
    if (typeof index === 'string') return; 
    pageList.pageNo = index; 
}
//上一頁
const prePage = () => {
    console.log(pageList.pageNo);
    if (pageList.pageNo > 1) {
        pageList.pageNo--
    }
}
//下一頁
const nextPage = () => {
    if (pageList.pageNo < pageList.pageTotal) {
        pageList.pageNo++
    }
}
const pages = computed(() => {
    let pagesArray = [];
    if (pageList.pageNo <= 5) {
        pagesArray = [1, 2, 3, 4, 5, 6, '...', pageList.pageTotal];
        return pagesArray;
    } else if (pageList.pageNo >= pageList.pageTotal - 4) {
        return [1, '...', pageList.pageTotal - 5, pageList.pageTotal - 4, pageList.pageTotal - 3, pageList.pageTotal - 2, pageList.pageTotal - 1, pageList.pageTotal]
    } else {
        return [1, '...', pageList.pageNo - 2, pageList.pageNo - 1, pageList.pageNo, pageList.pageNo + 1, pageList.pageNo + 2, '...', pageList.pageTotal]
    }
});
// 使用 watch 來監聽 totalPages 的變化
watch(totalPages, (newTotalPages) => {
    pageList.pageTotal = newTotalPages;
});
//監聽 selectedOption 的變化來更新 pageSize 和重置 pageNo
watch(selectedOption, (newPageSize) => {
    pageList.pageSize = newPageSize;
    pageList.pageNo = 1; // 需要重置頁碼到第一頁
});
</script>
<template>
    <BaseHeadering :header=paginationHelpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100 mb-4">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        Pagination
                    </div>
                </template>
                <template #content>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <h5 class="mb-4">5000筆資料</h5>
                                <select class="form-select mb-4" v-model="selectedOption">
                                    <option v-for="option in options" :key="option.value" :value="option.value">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-8">
                                <div class="d-flex justify-content-center flex-column align-items-center">
                                    <label style="font-weight: 900;" class="mb-4">Defaul Pagination</label>
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination-ul d-flex justify-content-md-start">
                                            <li class="page-item-li" @click="prePage">
                                                <a class="page-link-a" href="javascript:void(0)" aria-label="Previous">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-chevron-left mb-1"
                                                        viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                                            stroke="currentColor" stroke-width="1" />
                                                    </svg>
                                                </a>
                                                <span class="visually-hidden">Previous</span>
                                            </li>
                                            <li class="page-item-li" v-for="(page, item) in pages" :key="item"
                                            :class="pageList.pageNo == page ? 'current-page-activate' : ''"
                                            @click="curPage(page)">
                                            <a class="page-link-a" href="javascript:void(0)">
                                                {{ page }}
                                            </a>
                                        </li>
                                            <li class="page-item-li" @click="nextPage">
                                                <a class="page-link-a" href="javascript:void(0)" aria-label="Previous">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                            stroke="currentColor" stroke-width="1" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
    <!-- <div class="container-fuild mt-5 ms-4" style="width: 96%;">
        <div class="row me-3 ms-md-2">
            <div class="col-md-6 mb-4">
                <BaseBlock :show="card.show" class="base-block">
                    <template #header>
                        <div class="card-header border-0 fw-bold">
                            Pagination
                        </div>
                    </template>
                    <template #content>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>5000筆資料</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <select class="form-select" v-model="selectedOption">
                                        <option v-for="option in options" :key="option.value" :value="option.value">
                                            {{ option.text }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul class="pagination-ul d-flex justify-content-md-start">
                                <li class="page-item-li" @click="prePage">
                                    <a class="page-link-a" href="javascript:void(0)" aria-label="Previous">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-chevron-left mb-1" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                                stroke="currentColor" stroke-width="1" />
                                        </svg>
                                    </a>
                                    <span class="visually-hidden">Previous</span>
                                </li>
                                <li class="page-item-li" v-for="(page, item) in pages" :key="item"
                                    :class="pageList.pageNo == page ? 'current-page-activate' : ''" @click="curPage(page)">
                                    <a class="page-link-a" href="javascript:void(0)">
                                        {{ page }}
                                    </a>
                                </li>
                                <li class="page-item-li" @click="nextPage">
                                    <a class="page-link-a" href="javascript:void(0)" aria-label="Previous">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                stroke="currentColor" stroke-width="1" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </template>
                </BaseBlock>
            </div>
        </div>
    </div> -->
</template>
<style lang="scss" scoped>
.pagination-ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap; // 允许分页项换行
    justify-content: center; // 在容器中居中分页
    .page-item-li {
        min-width: 28px;
        height: 30px;
        display: flex;
        margin-right: 2px;
        // border: 1px solid black;
        padding: 4px 8px;
        justify-content: space-around;
         // 響應式調整
         @media (max-width: 767px) {
            min-width: 20px; 
            padding: 2px 4px; 
            font-size: 0.75rem; 
        }
        .page-link-a {
            margin: 1px;
            border: none;
            color: black;
            font-weight: bold;
            text-decoration: none;
            white-space: nowrap;
            text-align: center;
        }

        &:hover {
            background-color: rgb(235, 238, 242);
            border-bottom: 2px rgb(76, 120, 221) solid;
        }
    }

    .current-page-activate {
        /* 使用新的類別名 */
        background-color: rgb(235, 238, 242);

        a {
            color: rgb(76, 120, 221) !important;
        }
    }
}
</style>