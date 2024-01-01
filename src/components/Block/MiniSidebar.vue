<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { menuLable } from '../../hooks/useBaseSidebar'
import Simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';
import { useRoute } from 'vue-router'
const $route = useRoute()
const activeLink = ref<string | null>('/layout/dashboard') // 設置初始值為 Dashboard 的路徑
const handleClick = (path: string) => {
    activeLink.value = path
    console.log(path, activeLink.value)
}
onMounted(() => {
    // 初始時檢查當前路徑，如果非 dashboard，則更新
    if ($route.path !== '/layout/dashboard') {
        activeLink.value = $route.path
    }

    // 監聽路由變化
    watch(() => $route.path, (newPath: any) => {
        activeLink.value = newPath
    })
})
</script>
<template>
    <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasLeftHeader"
        aria-labelledby="offcanvasLeftHeaderLabel" style="background-color: rgb(31, 41, 55);">
        <div class="d-flex flex-column w-100" style="background-color:rgb(35, 46, 62);">
            <div class="d-flex align-items-center justify-content-between">
                <div class="ms-5 mt-1">
                    <a href="/" class="text-decoration-none fw-bolder"
                        style="line-height:1.75rem;color: rgb(203, 211, 218);">
                        <span class="fs-5">Sidebar</span>
                    </a>
                    <div class="dropdown d-inline-block ms-2">
                        <button class="btn" type="button" id="dropdownMenuOffset" data-bs-toggle="dropdown"
                            aria-expanded="false" aria-haspopup="true" data-bs-offset="-100,0" style="width: 40px;">
                            <i class="bi bi-moon text-white" style="font-size: 14px;"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <li class="ms-5 "><a class="dropdown-li-a" href="#">
                                    <input class="form-check-input" type="radio" id="radio-dark-mode-off" value="light" />
                                    Light
                                </a>
                            </li>
                            <li class="ms-5"><a class="dropdown-li-a" href="#">
                                    <input class="form-check-input" type="radio" id="radio-dark-mode-off" value="light" />
                                    Dark
                                </a>
                            </li>
                            <li class="ms-5"><a class="dropdown-li-a" href="#">
                                    <input class="form-check-input" type="radio" id="radio-dark-mode-off" value="light" />
                                    Anthentication
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown d-inline-block">
                        <button class="btn" type="button" id="dropdownMenuOffset" data-bs-toggle="dropdown"
                            aria-expanded="false" aria-haspopup="true" data-bs-offset="-100,0" style="width: 40px;">
                            <i class="bi bi-brush text-white"></i> </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <li class="ms-5 "><a class="dropdown-li-a" href="#">
                                    <input class="form-check-input" type="radio" id="radio-dark-mode-off" value="light" />
                                    Light
                                </a>
                            </li>
                            <li class="ms-5"><a class="dropdown-li-a" href="#">
                                    <input class="form-check-input" type="radio" id="radio-dark-mode-off" value="light" />
                                    Dark
                                </a>
                            </li>
                            <li class="ms-5"><a class="dropdown-li-a" href="#">
                                    <input class="form-check-input" type="radio" id="radio-dark-mode-off" value="light" />
                                    Anthentication
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="close-btn">
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" style="width: 40px;">
                        <i class="bi bi-x-lg text-white" style="font-size: 16px;"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- <hr> -->
        <div class="siderbar-ul h-100 w-100">
            <ul class="list-unstyled ps-0 flex-column m-1 h-100">
                <Simplebar style="max-width: 500px;height: 90%;" class="js-sidebar-scroll">
                    <li class="mb-1" v-for="(list, item) in menuLable" :key="item">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" :data-bs-target=list.target aria-expanded="false">
                            {{ list.lable }}
                        </button>
                        <div class="collapse" :id=list.target2>
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li v-for="(subList, subItem) in list.sub" :key="subItem">
                                    <RouterLink :to=subList.path style="color: rgb(158, 173, 191);"
                                        class="d-inline-flex text-decoration-none rounded"
                                        :class="{ active: activeLink === subList.path }" @click="handleClick(subList.path)">
                                        {{ subList.title }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </Simplebar>
            </ul>
        </div>
        <!-- </div> -->
    </div>
</template>
<style lang="scss" scoped>
.siderbar-ul {
    ul {
        button {
            color: rgb(158, 173, 191);
        }
    }
}

.dropdown-toggle {
    outline: 0;
}

.btn-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* 設置寬度為100% */
    background-color: transparent;
    /* 移除背景顏色 */
    border: none;

    text-align: left;
}

.btn-toggle::before {
    order: 2;
    width: 1.25em;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform .35s ease;
    transform-origin: .5em 50%;
}

[data-bs-theme="dark"] .btn-toggle::before {
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
}

.btn-toggle[aria-expanded="true"] {
    // color: rgba(var(--bs-emphasis-color-rgb), .85);
    color: white;
}

.btn-toggle[aria-expanded="true"]::before {
    transform: rotate(90deg);
}

.btn-toggle-nav a {
    padding: .1875rem .5rem;
    margin-top: .125rem;
    margin-left: 1.25rem;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
    // background-color: var(--bs-tertiary-bg);
    color: white !important;
}

.scrollarea {
    overflow-y: auto;
}

// @media (max-width: 992px) {
//     #sidebar {
//         left: -300px;
//     }
// }

.active {
    color: white !important;
}

.dropdown {
    button {
        color: rgb(158, 173, 191);

        &:hover {
            background-color: black;
        }

        &:focus {
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
    }
}

.close-btn {
    button {
        // background-color: rgb(108, 117, 125);

        &:hover {
            background-color: black;
        }

        &:focus {
            background-color: black;
            outline: 0;
            /* 移除瀏覽器默認的輪廓 */
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
    }
}

.dropdown-li-a {
    text-decoration: none;
    color: rgb(57, 71, 90);
    font-size: 16px;
    font-weight: 900;
}

.js-sidebar-scroll {
    height: calc(100% - 20%);
    overflow-y: auto;
}

.simplebar-scrollbar::before {
    width: 4px;
}

.simplebar-scrollbar::before {
    background-color: darkgrey;
}</style>