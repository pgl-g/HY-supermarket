<template>
  <div class="shop-item">
      <Scroll class="content" ref="scroll">
          <shop-item-list v-for="(item,index) in getcartLis" :key="index" :produce="item"></shop-item-list>
      </Scroll>
  </div>
</template>

<script>
import  Scroll from '../../../components/comment/scroll/bscroll'
import ShopItemList from './ShopItemList'
export default {
    components:{
        Scroll,
        ShopItemList
    },
    computed:{
        getcartLis(){
            return this.$store.state.cardList
        }
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
.shop-item{
    height: calc(100% - 44px - 49px - 40px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>