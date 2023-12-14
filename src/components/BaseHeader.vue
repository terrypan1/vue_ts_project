<script setup lang="ts">
import MiniSideBar from './Block/MiniSidebar.vue'
</script>
<template>
    <MiniSideBar></MiniSideBar>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid md-flex">
            <div class="left-container">
                <button type="button" class="btn d-none d-lg-block">
                    <i class="bi bi-three-dots-vertical text-white"></i>
                </button>
                <button type="button" class="btn d-md-block d-lg-none" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasLeftHeader" aria-controls="offcanvasLeftHeader">
                    <i class="bi bi-list text-white"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                <img class="rounded-circle" src="/assets/media/avatar10.jpg" alt="Header Avatar"
                                    style="width: 21px" />
                                <span class="d-none d-sm-inline-block ms-2">Terry</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <div class="text-center"
                                    style="background-color: rgb(246, 247, 249);border-bottom: 1px solid #ccc;">
                                    <img class="rounded-circle" src="/assets/media/avatar10.jpg" alt="Header Avatar"
                                        style="width: 50px" />
                                    <div class="fw-bolder">Terry Pan</div>
                                    <p class="mb-3 fw-bold" style="font-size: 14px;color: rgb(108, 117, 125);">Front-end
                                        engineer</p>
                                </div>
                                <li class="p-1"><a class="dropdown-item d-flex justify-content-between align-items-center"
                                        href="#">
                                        <span>Inbox</span>
                                        <span class="badge rounded-pill"
                                            style="background-color: rgb(76, 120, 221);">1</span>
                                    </a>
                                </li>
                                <li class="p-1"><a class="dropdown-item d-flex justify-content-between align-items-center"
                                        href="#">
                                        <span>Profile</span>
                                        <span class="badge rounded-pill"
                                            style="background-color: rgb(76, 120, 221);">3</span>
                                    </a>
                                </li>
                                <li class="p-1">
                                    <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span>Settings</span>
                                        <span class="badge rounded-pill"
                                            style="background-color: rgb(76, 120, 221);">3</span>
                                    </a>
                                </li>
                                <div class="border-bottom"></div>
                                <li class="mt-1 p-1">
                                    <RouterLink class="dropdown-item" to="/login">Login out</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item ms-2">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                <i class="bi bi-bell"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">NOTIFICATIONS</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item me-5 ms-2">
                        <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasSecond" aria-controls="offcanvasRight">
                            <i class="bi bi-list-ul"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSecond" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">施工中....</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            ...
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dropdown-menu {
    li a:hover {
        background-color: rgb(234, 237, 241);
    }

    a {
        color: rgb(108, 117, 125);
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
    }
}

@media (max-width: 767.98px) {
    .navbar-collapse {
        display: flex;
        /* 改為 flex 以允許內部元素並排 */
        flex-grow: 1;
        /* 允許此元素擴展以填滿可用空間 */
        align-items: center;
        /* 垂直居中對齊元素 */
    }

    .navbar-collapse>ul {
        flex-direction: row;
        /* 確保 ul 內的 li 也是橫向排列 */
        padding-left: 0;
        /* 移除預設的 padding */
        margin-bottom: 0;
        /* 移除預設的 margin */
    }

    .container-fluid {
        display: flex;
        /* 確保 container 是 flex 容器 */
        flex-wrap: nowrap;
        /* 防止元素換行 */
    }

    .dropdown-menu {
        position: absolute;
        /* 確保下拉選單能夠正確彈出 */
    }

}

.left-container {

    button {
        background-color: rgb(108, 117, 125);

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
</style>