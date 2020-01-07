<template>
  <div id="nav-home">
    <!-- 头部导航 -->
    <nav-bar class="nav-top">
      <div slot="center">购物街</div>
    </nav-bar>
     <!-- 导航控制 -->
    <tabControl
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabcontrol1"
      class="tab-control"
      v-show="isoffsetTtopfixed"
    ></tabControl>
    <bscroll 
    class="scroll-content" 
    ref="scroll" 
    :probe-type="3"
    @scroll="Contentscroll"
    :pull-up-load="true"
    @pullingup="loadmore"
    >
    <!-- 轮播图 -->
    <HomeSwiper :banners="banners" @imgload="imgloaditem"></HomeSwiper>
    <!-- 详情页 -->
    <Homerecommend :recommends="recommends"></Homerecommend>
    <!-- 特色内容 -->
    <feature></feature>
    <!-- 导航控制 -->
    <tabControl
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabcontrol2"
    ></tabControl>
    <!-- 图片的懒加载 -->
    <Goods :goods="goods[make].list"></Goods>
  </bscroll>
    <!-- 回到顶部设置 -->
    <back-top @click.native="backClick" v-show="isshow"></back-top>  <!-- 这是：点击事件的修饰符，专门在监听组件的监听事件 -->
    </div>
</template>

<script>
import NavBar from "components/comment/navbar/NavBar";
/* 轮播图 */
import HomeSwiper from "./children/HomeSwiper";
/* 详情页 */
import Homerecommend from "./children/Homerecommend";
/* 特色内容 */
import feature from "./children/feature";
/* 导航控制 */
import tabControl from "components/content/tabControl/tabControl";
/* 数据懒加载的实现 */
import Goods from "components/content/goods/Goods";
/* 滚动条设置 */
import bscroll from 'components/comment/scroll/bscroll'
/* 回到顶部的组件 */
import BackTop from 'components/content/backTop/backTop'
/* 网络请求 */
import { gethomeDate, getGoodsdata } from "network/home"; 



export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Homerecommend,
    feature,
    tabControl,
    Goods,
    bscroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      make: 'pop',
      isshow:false,
      TaboffsetTop:0,
      isoffsetTtopfixed:false,
      active:0
    };
  },
   // 保留之前刷新的状态
   activated(){
      this.$refs.scroll.scroll.scrollTo(0,this.active)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.active = this.$refs.scroll.scroll.y
    },
  created() {
    // 1. 请求多个数据
    this.gethomeDate();
    // 2.请求商品数据
    this.getGoodsdata('pop');

    this.getGoodsdata('new');

    this.getGoodsdata('sell');
   
  },
  mounted(){
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
    // 刷新图片的加载事件
    this.$bus.$on('imgload',() => {
      refresh();
    })
 
  },
  methods: {

    // 监听图片加载
    
    imgloaditem(){
    this.TaboffsetTop = this.$refs.tabcontrol2.$el.offsetTop
    },
    // 防抖动事件包装
    debounce(func, delay){
      let timer = null
      return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    },

    // 点击切换控制
    tabClick(index) {
        /* console.log(index) */
      switch (index) {
        case 0:
          this.make = 'pop';
          break;
        case 1:
          this.make = "new";
          break;
        case 2:
          this.make = 'sell';
          break;
      }
       
    this.$refs.tabcontrol1.make = index

    this.$refs.tabcontrol2.make = index
    
    },
    // 监听滚动的位置 
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    Contentscroll(position){
      // 1.判断BackTop是否提示
      this.isshow = (-position.y) > 1000
    
      //  2.决定tabControl 是否吸顶(position:fixed)
      this.isoffsetTtopfixed = (-position.y) > this.TaboffsetTop
    },
    // 监听加载更多
    loadmore(){
      this.getGoodsdata(this.make)
    },

  
    // 获取轮播图的数据
    gethomeDate() {
      gethomeDate().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取懒加载页面的数据
    getGoodsdata(type) {
      const page = this.goods[type].page + 1;
      getGoodsdata(type, page).then(res => {
/*         console.log(res); */
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    },
   
  }
};
</script>

<style scoped>
#nav-home {
  position: relative;
 /*  padding-top: 44px; */
  height: 100vh;
}
.nav-top {
  background: #ff8198;
  color: #fff;
}
.tab-control{
  position: relative;
  z-index: 9;
}
.scroll-content{
 /* height: 300px; */
position: absolute;
top: 44px;bottom: 49px;
left: 0;right: 0;
 overflow: hidden;
}
</style>
