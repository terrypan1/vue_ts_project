<script setup lang="ts">

</script>
<template>
    <div id="sidebar">
        <nav id="navbar" class="nav-menu navbar d-flex flex-column">
            <ul>
                <li>
                    <a href="#hero"><i class="bi bi-house-door-fill"></i><span>Home</span></a>
                </li>
                <li>
                    <a>
                        <i class="bi bi-house-door-fill"></i><span>dashboard</span>
                        <div>
                            <i class="bi bi-chevron-right ps-4" style="font-size: 14px;"></i>
                        </div>
                    </a>
                    <ul v-if="true">
                        <li>a</li>
                        <li>b</li>
                    </ul>
                </li>
                <li>
                    <a href="#hero"><i class="bi bi-house-door-fill"></i><span>Home</span></a>
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
    // transition: all ease-in-out 0.5s;
    // z-index: 1;
    // transition: all 0.5s;
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
            align-items: center;
            color: black;
            padding: 0 0 0 10px;
            // margin-bottom: 8px;
            transition: 0.3s;
            font-size: 12px;
            text-decoration: none;
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

//
// .sidebar-dropdown {
//     li {
//         padding-left: 50px;
        
//         a {
//             background-color: rgb(232, 234, 239);
//         }
//     }

// }

// 修改bootstrap的css
// .dropdown-menu {
//     margin-top: -10px !important;
//     background: rgb(232, 234, 239);
//     border: 0;
// }

@media (max-width: 992px) {
    #sidebar {
        left: -300px;
    }
}
</style>