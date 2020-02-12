<template>
  <div class="shop">
    <nab-bar class="nav-shop">
      <div slot="center">购物车({{cartLength}})</div>
    </nab-bar>
    <shop-item></shop-item>
    <shop-bottom></shop-bottom>
  </div>
</template>

<script>
/* 头部导航 */
import NabBar from "../../components/comment/navbar/NavBar";
import ShopItem from './children/ShopItem'
import ShopBottom from './children/ShopBottom'
import {mapGetters} from 'vuex'
export default {
  name: "Shop",
  components: {
    NabBar,
    ShopItem,
    ShopBottom
  },
  data() {
    return {
     
    };
  },
  computed:{
    cartLength(){
      return this.$store.state.cardList.length
    }
  //  ...mapGetters(['cartLength','cardList'])
  // ...mapGetters({
  //   length:'cartLength',
  //   list:'cardList'
  // })
  },
  methods: {
   
  }
};
</script>

<style scoped>
.shop{
  height: 100vh;
}
.nav-shop {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: #ff8198;
  color: #fff;
}
</style>
