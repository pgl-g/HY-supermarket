<template>
    <div class="goods">
      <goods-item v-for="(item,index) in goods" :key="index" :goodsitems="item" />
    </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
    name:'Goods',
    components:{
        GoodsItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>