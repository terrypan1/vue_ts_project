<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { INavMenu } from '../../src/types/data';

const menuLable = ref<INavMenu[]>([
    {
        lable: 'Dashboard',
        target: '#menu1',
        target2: 'menu1',
        sub: [
            { title: 'dashboard', path: '/layout/dashboard' },
        ]
    },
    {
        lable: 'Todos',
        target: '#menu2',
        target2: 'menu2',
        sub: [
            { title: 'todos', path: '/layout/todo' },
        ]
    },
    {
        lable: 'Canvas',
        target: '#menu3',
        target2: 'menu3',
        sub: [
            { title: 'cnavas', path: '/layout/canvasDemo' },
        ]
    },
    {
        lable: 'Forms',
        target: '#menu4',
        target2: 'menu4',
        sub: [
            { title: 'flastPicker', path: '/layout/flastPickerDemo' },
        ]
    },
    {
        lable: 'Draggable',
        target: '#menu5',
        target2: 'menu5',
        sub: [
            { title: 'Scrumboard', path: '/layout/scrumboard' },
        ]
    },
    {
        lable: 'System',
        target: '#menu6',
        target2: 'menu6',
        sub: [
            { title: 'Login', path: '/layout/login' },
        ]
    },
])
const activeLink = ref(null)
const handleClick = (link:string) => {
    activeLink.value = link
    console.log(link,activeLink.value)
}
</script>
<template>
    <div id="sidebar">
        <div class="d-flex flex-column mt-3">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 text-white text-decoration-none"
                style="border-bottom: 1px solid white;">
                <svg class="bi pe-none me-2" width="40" height="32">
                    <use xlink:href="#bootstrap" />
                </svg>
                <span class="fs-4">Sidebar</span>
            </a>
            <hr>
            <ul class="list-unstyled ps-0 flex-column m-1">
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
                                    :class="{ active: activeLink == list.lable }" @click="handleClick(list.lable)">
                                    {{ subList.title }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
#sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 220px;
    transition: all 0.5s ease-in-out;
    background: rgb(31, 41, 55);

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

@media (max-width: 992px) {
    #sidebar {
        left: -300px;
    }
}

.active {
    color: white !important;
}
</style>