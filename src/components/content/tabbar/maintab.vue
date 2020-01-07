<template>
    <div>
<tab-bar>
      <tab-baritem path='/home' activecolor="green">
        <img slot="img_icon" src="../../../assets/img/tabar/house.png" alt="" />
        <img slot="img_icon2" src="../../../assets/img/tabar/house2.png" alt="">
        <div slot="img_text">首页</div>
      </tab-baritem>
      <tab-baritem path='/fenlei' activecolor="green">
        <img slot="img_icon" src="../../../assets/img/tabar/fenlei.png" alt="" />
        <img slot="img_icon2" src="../../../assets/img/tabar/fenlei2.png" alt="">
        <div slot="img_text">分类</div>
      </tab-baritem>
      <tab-baritem path='/shop' activecolor="green">
        <img slot="img_icon" src="../../../assets/img/tabar/shop.png" alt="" />
        <img slot="img_icon2" src="../../../assets/img/tabar/shop2.png" alt="">
        <div slot="img_text">购物车</div>
      </tab-baritem>
      <tab-baritem path='/mine' activecolor="green">
        <img slot="img_icon" src="../../../assets/img/tabar/wede.png" alt="" />
        <img slot="img_icon2" src="../../../assets/img/tabar/wede2.png" alt="">
        <div slot="img_text">我的</div>
      </tab-baritem>
    </tab-bar>
    </div>
</template>

<script>
import TabBar from "../../../components/comment/tabbar/TabBar";
import TabBaritem from "../../../components/comment/tabbar/TabBaritem";

export default {
    name:'maintab',
    components:{
        TabBar,
        TabBaritem
    }
}
</script>

<style scoped>

</style>