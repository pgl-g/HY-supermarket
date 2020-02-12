<template>
  <div class="detel">
    <detel-navbar @ImgTopY="ImgTopY" ref="nav"></detel-navbar>

    <Bscroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-baseinfo :goods="goods"></detail-baseinfo>
      <detail-shopinfo :shop="shop"></detail-shopinfo>
      <detail-image
        :detailInfo="detailInfo"
        @detailImageload="detailImageload"
      ></detail-image>
      <detail-params :paramInfo="paramInfo" ref="params"></detail-params>
      <detail-comment :commentInfo="commentInfo" ref="comment"></detail-comment>
      <goods-item :goods="recommend" ref="recommend"></goods-item>
    </Bscroll>
     <back-top @click.native="backClick" v-show="isshow"></back-top>
    <detail-bottom @addshopcar="addshopcar"></detail-bottom>

  </div>
</template>

<script>
import DetelNavbar from "../detel/Childcoment/DetelNavbar";
import DetailSwiper from "./Childcoment/DetelSwiper";
import DetailBaseinfo from "./Childcoment/DetailBaseinfo";
import DetailShopinfo from "./Childcoment/DetailShopinfo";
import DetailImage from "./Childcoment/DetailImage";
import DetailParams from "./Childcoment/DetailParams";
import DetailComment from "./Childcoment/DetailCommentInfo";
import GoodsItem from "../../components/content/goods/Goods";
import DetailBottom from './Childcoment/DetailBottom'
import BackTop from '../../components/content/backTop/backTop'

import {
  getdetel,
  Goods,
  Shop,
  GoodsParam,
  getrecommend
} from "../../network/detail";
import Bscroll from "../../components/comment/scroll/bscroll";
import { debounce } from "../../common/debounce";
// 混入mixin
import { ItemimgLisenter } from "../../common/mixin";
export default {
  name: "Detail",
  components: {
    DetelNavbar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShopinfo,
    DetailImage,
    DetailParams,
    DetailComment,
    Bscroll,
    GoodsItem,
    DetailBottom,
    BackTop,
  },
  mixins: [ItemimgLisenter],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      Imageload: null,
      Newrefresh: null,
      // 商品，参数，评论，推荐的高度
      ThemTopY: [],
      getThemTop: null,
      make: 0,
      isshow:false,
    };
  },
  created() {
    // 传入的每张图片iid
    this.iid = this.$route.params.iid;
    // 根据id请求详情数据
    getdetel(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      // 现在还没用这个数据
      this.topImages = data.itemInfo.topImages;
      // console.log(data)

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.获取商铺的信息
      this.shop = new Shop(data.shopInfo);
      // 4.获取详情中的信息
      // this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo)
      // 5.获取尺码
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 2.7.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
        // console.log(this.commentInfo)
      }
      // // 这个是在等created中的数据全部渲染好之后，在回调里面的函数
      // 但还是会不是最优的
      this.$nextTick(() => {
        this.ThemTopY.push(0);
        this.ThemTopY.push(this.$refs.params.$el.offsetTop);
        this.ThemTopY.push(this.$refs.comment.$el.offsetTop);
        this.ThemTopY.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.ThemTopY);
      });
    });
    // 获取推荐图片的数据
    getrecommend().then(res => {
      // console.log(res)
      this.recommend = res.data.list;
    });
  },
  mounted() {},
  methods: {
    detailImageload() {
      // 这里打印的是一个undefined？？？？
      this.Newrefresh();
    },
    ImgTopY(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.ThemTopY[index], 200);
    },
    // 监听滚动改变标题
    contentScroll(position) {
      const positionY = Math.floor(-position.y);
      // console.log(this.ThemTopY)  [0, 734, 1773, 1968, __ob__: Observer]
      // index = 0 : 0
      // index = 1 : 734
      // index = 2 : 1773
      // index = 3 : 1968
      let length = this.ThemTopY.length;
      for (let i = 0; i < length; i++) {
        // console.log(length - 1)
        if (
          (this.make !== length &&
            i < length - 1 &&
              positionY > this.ThemTopY[i] &&
              positionY < this.ThemTopY[i + 1]) ||
          (i == length - 1 && positionY > this.ThemTopY[i])
        ) {
          this.make = i
          // console.log(this.make)
         this.$refs.nav.make = this.make
        }
      }
      // 1.判断BackTop是否提示
      this.isshow = (Math.floor(-position.y)) > this.$refs.recommend.$el.offsetTop
      // console.log(this.isshow)
      
    },
    // 添加到购物车
    addshopcar(){
      const produce = {}
        produce.images = this.topImages[0]
        produce.title = this.goods.title
        produce.desc = this.goods.desc
        produce.nowPrice = this.goods.nowPrice
        produce.iid = this.iid
        // console.log(produce)
        // this.$store.commit('addcard',produce)
        // 这个是第一种办法，比较麻烦
        // this.$store.dispatch('addcard',produce).then((res)=>{
        //   this.ishow = true
        //   this.message = res
        //   setTimeout(()=>{
        //     this.ishow = false
        //     this.message = ''
        //   },1000)
        // })

        // 第二种方法，可以封装成一个插件直接引用
        this.$store.dispatch('addcard',produce).then((res)=>{
            this.$toast.show(res)
        })
    },
    // 监听滚动的位置 
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    }
  },
  destroyed() {
    this.$bus.$off("imgload", this.Imageload);
  }
};
</script>

<style scoped>
.detel {
  position: relative;
  z-index: 999;
  background: #ffffff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>
