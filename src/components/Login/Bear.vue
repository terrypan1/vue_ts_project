<template>
    <div class="d-flex justify-content-center align-items-center" style="height:100vh">
        <div class="bear"></div>Loading...
    </div>
</template>
<style lang="scss" scoped>
.bear {
    position: absolute;
    width: 200px;
    height: 100px;
    background: url('/assets/media/bear.png') no-repeat;
    animation: bear .4s steps(8) infinite, move 3s forwards;
}

@keyframes bear {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -1600px 0;
    }
}

@keyframes move {
    0% {
        left: 0;
    }

    100% {
        left: 50%;
        /* margin-left: -100px; */
        transform: translateX(-50%);
    }
}
</style>