<template>
    <div class="nav-bar">
        <div class="nav-left"><slot name="left"></slot></div>
        <div class="nav-center"><slot name="center"></slot></div>
        <div class="nav-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
    .nav-bar{
        position: relative;
        z-index: 10;

        display: flex;
        /* 一般上部的导航栏为44 */
        line-height: 44px;
        height: 44px;
        text-align: center;
        box-shadow: 0px 1px 1px rgba(100, 100, 100, .2)
    }
    .nav-left, .nav-right{
        width: 60px;
    }
    .nav-center{
        flex: 1;
    }
</style>