<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const activeLink = ref<string | null>(null)

const handleRotate = (link: string) => {
    if (activeLink.value === link) {
        // 如果當前連結已經是活躍的，則將其設為 null 以收回子菜單
        activeLink.value = null;
    } else {
        // 否則，將點擊的連結設為活躍連結
        activeLink.value = link;
    }
}
</script>
<template>
    <div id="sidebar">
        <nav id="navbar" class="nav-menu navbar d-flex flex-column">
            <ul>
                <li>
                    <a @click="handleRotate('Home')">
                        <i class="bi bi-house-door-fill"></i><span>Home</span>
                        <i class="bi bi-chevron-right" style="font-size: 14px;"
                            :class="{ iconActive: activeLink == 'Home' }"></i>
                    </a>
                    <ul :class="{ ulActive: activeLink == 'Home' }">
                        <li class="d-flex justify-content-center">
                            <RouterLink to="/layout/dashboard" style="background-color: rgb(232, 234, 239);">Home
                            </RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <a @click="handleRotate('Dashboard')">
                        <i class="bi bi-house-door-fill"></i><span>Dashboard</span>
                        <i class="bi bi-chevron-right" style="font-size: 14px;"
                            :class="{ iconActive: activeLink == 'Dashboard' }"></i>
                    </a>
                    <ul :class="{ ulActive: activeLink == 'Dashboard' }">
                        <li class="d-flex justify-content-center">
                            <RouterLink to="/layout/dashboard" style="background-color: rgb(232, 234, 239);">Dashboard
                            </RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <a @click="handleRotate('Todo')">
                        <i class="bi bi-house-door-fill"></i><span>Todo</span>
                        <i class="bi bi-chevron-right" style="font-size: 14px;"
                            :class="{ iconActive: activeLink == 'Todo' }"></i>
                    </a>
                    <ul :class="{ ulActive: activeLink == 'Todo' }">
                        <li class="d-flex justify-content-center">
                            <RouterLink to="/layout/todo" style="background-color: rgb(232, 234, 239);">Todo</RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
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
    // z-index: 1;
    // padding: 0 15px;
    background: rgb(232, 234, 239);
    // overflow-y: auto;
}

.nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-menu ul {
    margin-top: 10px;

    li {
        width: 190px;
        // border: 1px white solid;
        background: rgb(232, 234, 239);
        margin-top: 10px;

        a {
            display: flex;
            position: relative;
            align-items: center;
            color: black;
            padding: 0 0 0 10px;
            // margin-bottom: 8px;
            transition: 0.5s;
            font-size: 12px;
            text-decoration: none;

            .bi-chevron-right {
                position: absolute;
                right: 24px;
            }

            // icon 旋轉
            .iconActive {
                transition: 0.5s ease-in-out;
                margin-top: 15px;
                margin-right: 8px;
                transform: rotate(90deg);
            }
        }

        ul {
            display: none;

            li {
                font-size: 12px a {
                    background-color: rgb(232, 234, 239);
                }
            }
        }

        .ulActive {
            display: block;
        }
    }
}

.nav-menu a:hover {
    background-color: white;
    border-radius: 10px;
}

.nav-menu a:focus {
    background-color: white;
    border-radius: 10px;
    // display: flex;
    // align-items: center;
    // color: black;
    // // padding: 12px 15px;
    // // margin-bottom: 8px;
    // transition: 0.3s;
    // font-size: 12px;
    // text-decoration: none;
}

.nav-menu a i,
.nav-menu a:focus i {
    font-size: 20px;
    padding-right: 14px;
    border-radius: 10px;
    // color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
    text-decoration: none;
    color: blue;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover>a i {
    color: #149ddd;
}



@media (max-width: 992px) {
    #sidebar {
        left: -300px;
    }
}
</style>