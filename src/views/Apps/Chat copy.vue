<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock

</script>
<template>
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="m-lg-5">
            <BaseBlock :show="card.show">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        Chatroom
                    </div>
                </template>
                <template #content>
                    <!-- <div>施工中...</div> -->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
                                    <div class="search mb-4">
                                        <i class="bi bi-search search-icon"></i>
                                        <input type="text" placeholder="search" class="search-input">
                                    </div>
                                    <div class="d-flex flex-column chat-container">
                                        <ul style="list-style: none;padding: 0px;">
                                            <li style="border-bottom: 1px solid rgb(224, 230, 237);padding: 10px;">
                                                <a class="d-flex justify-content-between align-items-center"
                                                    style="text-decoration: none;color: rgb(59, 63, 92);font-weight: 900;">
                                                    <div class="d-flex flex-row">
                                                        <img src="/assets/imgs/avatar1.jpeg" alt="" class="rounded-circle"
                                                            width="60">
                                                        <div class="ms-4" style="max-width: 150px;">
                                                            <div style="color: rbg(65, 72, 97);" class="mb-1">Tia Fuller
                                                            </div>
                                                            <div
                                                                style="color: rgb(143, 150, 173); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                                How do you do?
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="mb-5" style="font-size: 14px;">2:09 PM</span>
                                                </a>
                                            </li>
                                            <li style="border-bottom: 1px solid rgb(224, 230, 237);padding: 10px;">
                                                <div class="d-flex justify-content-between align-items-center mb-4"
                                                    style="text-decoration: none;color: rgb(59, 63, 92);font-weight: 900;">
                                                    <div class="d-flex flex-row">
                                                        <img src="/assets/imgs/avatar2.jpeg" alt="" class="rounded-circle"
                                                            width="60">
                                                        <div class="ms-4" style="max-width: 150px;">
                                                            <div style="color: rbg(65, 72, 97);" class="mb-1">Mia Gilmore
                                                            </div>
                                                            <div
                                                                style="color: rgb(143, 150, 173); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                                Not coming to office today. This text is really long and
                                                                should show an ellipsis when it overflows.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="mb-5" style="font-size: 14px;">2:09 PM</span>
                                                </div>
                                            </li>
                                            <li style="border-bottom: 1px solid rgb(224, 230, 237);padding: 10px;">
                                                <a class="d-flex justify-content-between align-items-center"
                                                    style="text-decoration: none;color: rgb(59, 63, 92);font-weight: 900;">
                                                    <div class="d-flex flex-row">
                                                        <img src="/assets/imgs/avatar3.jpeg" alt="" class="rounded-circle"
                                                            width="60">
                                                        <div class="ms-4" style="max-width: 150px;">
                                                            <div style="color: rbg(65, 72, 97);" class="mb-1">Lia Sawyer
                                                            </div>
                                                            <div
                                                                style="color: rgb(143, 150, 173); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                                Hi, I am back from vacation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="mb-5" style="font-size: 14px;">2:09 PM</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">222</div>
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.search {
    position: relative;
    height: 40px;
    background-color: rgb(241, 242, 243);
    border-style: dashed;
    border-radius: 4px;

    .search-icon {
        position: absolute;
        left: 10px;
        line-height: 40px;
        font-size: 18px;
        z-index: 2;
    }

    input {
        position: absolute;
        top: 5px;
        left: 20px;
        font-size: 18px;
        height: 30px;
        padding-left: 20px;
        padding-bottom: 5px;
        width: 80%;
        border-style: none !important;
        background-color: rgb(241, 242, 243);

        &:focus {
            outline: none;
            /* 移除輪廓 */
            box-shadow: none;
            /* 移除陰影 */
            border-color: transparent;
            /* 選擇性地移除邊框顏色 */
        }
    }

    &:focus-within {
        // 在這裡定義當input獲得焦點時，.search要應用的樣式
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); // 例如添加一個陰影
        border-color: blue;
        border: 2px solid blue;
    }
}

.chat-container {
    background-color: white;
    li {
        &:hover {
            background-color: #ccc;
        }
    }
}
</style>