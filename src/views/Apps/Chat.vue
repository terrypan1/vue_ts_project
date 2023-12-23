<script setup lang="ts">
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { reactive,ref } from 'vue'
import Simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

interface Icontent {
    user_id: number,
    name: string,
    path: string,
    time: string,
    preview: string
    messages: []
}
let content = reactive<Icontent[]>([
    {
        user_id: 1,
        name: "Tia Fuller",
        path: "avatar1.jpeg",
        time: "2:09 PM",
        preview: "How do you do?",
        messages: [
            // { from_user_id: login_user_id.value, to_usr_id: 1, text: "Hi, I am back from vacation" },
            // { from_user_id: login_user_id.value, to_usr_id: 1, text: "How are you?" },
            // { from_user_id: 1, to_usr_id: login_user_id.value, text: "Welcom Back" },
            // { from_user_id: 1, to_usr_id: login_user_id.value, text: "I am all well" },
            // { from_user_id: login_user_id.value, to_usr_id: 1, text: "Coffee?" },
        ],
    },
    {
        user_id: 2,
        name: "Mia Gilmore",
        path: "avatar2.jpeg",
        time: "3:11 PM",
        preview: "Not coming to office today. This text is really long andshould show an ellipsis when it overflows.",
        messages: []
    },
    {
        user_id: 3,
        name: "Lia Sawyer",
        path: "avatar3.jpeg",
        time: "4:21 PM",
        preview: "Hi, I am back from vacation",
        messages: []
    },
    {
        user_id: 4,
        name: "Ria Bentley",
        path: "avatar4.jpeg",
        time: "1:21 PM",
        preview: "I’ve forgotten how it felt before",
        messages: []
    },
    {
        user_id: 4,
        name: "Ria Bentley",
        path: "avatar5.jpeg",
        time: "1:21 PM",
        preview: "I’ve forgotten how it felt before",
        messages: []
    },
    {
        user_id: 4,
        name: "Ria Bentley",
        path: "avatar5.jpeg",
        time: "1:21 PM",
        preview: "I’ve forgotten how it felt before",
        messages: []
    }
])

interface Message {
  text: string;
  isMine: boolean;
}
const messages = ref<Message[]>([
  { text: 'Hello, how are you?', isMine: false },
  { text: 'I am fine, thanks!', isMine: true },
  { text: 'I am John', isMine: true },
  // 更多消息...
]);
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
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 d-none d-md-block">
                                <div class="d-flex flex-column align-items-stretch flex-shrink-0">
                                    <div class="search mb-4">
                                        <i class="bi bi-search search-icon"></i>
                                        <input type="text" placeholder="search" class="search-input">
                                    </div>
                                    <Simplebar style="max-height: 430px;max-width: 100vw;" class="js-sidebar-scroll">
                                        <div class="d-flex flex-column chat-container">
                                            <ul style="list-style: none;padding: 0px;">
                                                <li style="border-bottom: 1px solid rgb(224, 230, 237);padding: 10px;"
                                                    v-for="(list, item) in content" :ket="item">
                                                    <div class="d-flex justify-content-between align-items-center"
                                                        style="text-decoration: none;color: rgb(59, 63, 92);font-weight: 900;">
                                                        <div class="d-flex flex-row">
                                                            <img :src="`/assets/imgs/${list.path}`" alt=""
                                                                class="rounded-circle" width="60">
                                                            <div class="ms-4" style="max-width: 150px;">
                                                                <a class="mb-1">{{ list.name }}</a>
                                                                <div
                                                                    style="color: rgb(143, 150, 173); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                                    {{ list.preview }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span class="mb-5" style="font-size: 14px;">{{ list.time }}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Simplebar>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <img src="/assets/imgs/avatar1.jpeg" style="width: 40px;border-radius: 10px;"
                                            class="m-2">
                                        <span>Tia Fuller</span>
                                    </div>
                                    <div class="mt-3" style="font-size: 18px;">
                                        <i class="bi bi-telephone"></i>
                                        <i class="bi bi-camera-video ms-2"></i>
                                        <i class="bi bi-three-dots-vertical ms-2"></i>
                                    </div>
                                </div>
                                <div class="chat-box">
                                    <div class="d-flex justify-content-center align-items-center h-100" v-if="false">
                                        <div style="background-color: rgb(191, 201, 212);border-radius: 4px;width: 250px;height: 40px;line-height: 40px;"
                                            class="d-flex flex-row justify-content-center">
                                            <i class="bi bi-chat-left me-2 fw-bold"
                                                style="font-size: 20px;color: rgb(136, 142, 168);"></i>
                                            <p>Click User To Chat</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center pt-4">
                                        <span
                                            style="background-color: white;width:140px;font-size: 12px;border-radius: 10px;color: rgb(73, 112, 240);"
                                            class="p-2 text-center fw-bold">Today, 6:48 AM</span>
                                    </div>
                                    <div v-for="(message, index) in messages" :key="index" class="message-row">
                                        <div class="d-flex"
                                            :class="{ 'justify-content-end': message.isMine, 'justify-content-start': !message.isMine }">
                                            <span :class="['message', message.isMine ? 'my-message' : 'other-message']">
                                                {{ message.text }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="chat-message mt-1 w-100">
                                        <i class="bi bi-chat-left me-2 ms-2 fw-bold chat-message-icon"
                                            style="font-size: 20px;color: rgb(136, 142, 168);"></i>
                                        <input type="text" placeholder="Message">
                                    </div>
                                </div>
                            </div>
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
            background-color: rgb(248, 248, 248);
            cursor: pointer;

            a {
                color: rgb(67, 97, 238); // 当鼠标悬停在 li 上时，a 标签变蓝色
            }
        }

        a {
            text-decoration: none;
            color: black;
        }
    }
}

.chat-box {
    height: 390px;
    background-image: url('/assets/imgs/bg.png');
}

.chat-message {
    position: relative;
    border-style: dashed;
    border-radius: 4px;
    height: 40px;
    padding-left: 16px;
    box-sizing: border-box;

    .chat-message-icon {
        position: absolute;
        z-index: 2;
        left: 10px;
        /* 调整图标位置 */
        line-height: 40px;
    }

    input {
        position: absolute;
        left: 0;
        top: 6px;
        font-size: 14px;
        width: 100%;
        border-style: none !important;
        box-sizing: border-box;
        padding-left: 42px;

        &:focus {
            outline: none;
            box-shadow: none;
            border-color: transparent;
        }
    }

    &:focus-within {
        // 在這裡定義當input獲得焦點時，.search要應用的樣式
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); // 例如添加一個陰影
        border-color: blue;
        border: 2px solid blue;
    }
}

.message-row {
    width: 100%;
}

.message {
    max-width: 60%;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    margin: 5px 0;
}

.my-message {
    background-color: rgb(67, 97, 238); /* 消息的背景色 */
    color:#fff;
    margin-right: 30px;
}

.other-message {
    background-color: rgb(255, 255, 255);/* 其他人的消息的背景色 */
    color: rgb(73, 112, 240);
    margin-left: 30px;
}
</style>