<template>
    <div class="nav-fenlei">
        <nav-bar class="fenlei-top">
            <div slot="center">商品分类</div>
        </nav-bar>
    

    </div>
</template>

<script>
import NavBar from 'components/comment/navbar/NavBar'
export default {
    name:'Fenlei',
    data(){
        return {
            scroll:null
        }
    },
    components:{
        NavBar
    }
}
</script>

<style scoped>
.fenlei-top{
    background: #FF8198;
    color: #fff;
}
</style>