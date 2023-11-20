<template>
    <div id="sidebar">
        <nav id="navbar" class="nav-menu navbar">
            <ul>
                <li>
                    <a href="#hero"><i class="bi bi-house-door-fill"></i><span>Home</span></a>
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
    width: 200px;
    // transition: all ease-in-out 0.5s;
    // z-index: 1;
    // transition: all 0.5s;
    // padding: 0 15px;
    background: #040b14;
    // overflow-y: auto;
}

.nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-menu>ul>li {
    position: relative;
    white-space: nowrap;
}

.nav-menu a,
.nav-menu a:focus {
    display: flex;
    align-items: center;
    color: #a8a9b4;
    padding: 12px 15px;
    margin-bottom: 8px;
    transition: 0.3s;
    font-size: 15px;
}

.nav-menu a i,
.nav-menu a:focus i {
    font-size: 24px;
    padding-right: 8px;
    color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
    text-decoration: none;
    color: #fff;
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