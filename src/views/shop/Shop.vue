<template>
  <div class="shop">
    <nab-bar class="nav-shop">
      <div slot="center">购物车</div>
    </nab-bar>

    <!-- 主干内容区域 -->
    <div class="shop-content">

        <div v-if="shopcard.length > 0">
      <div class="item" v-for="(item, index) in shopcard" :key="index">
        <mt-cell-swipe 
          :right="[
            {
              content: '删除',
              style: { background: 'red', color: '#fff' },
              handler: () => del(index)
            }
          ]"
        >
        <!-- 左边按钮 -->
        <div class="item-border">
          <input type="radio" />
        </div>
        <!-- 图片 -->
        <div class="item-img">
          <img :src="item.img" alt="顾孝标" />
        </div>
        <!-- 消息 -->
        <div class="item-info">
          <div class="item-title">
            {{ item.title }}
          </div>
          <div class="item-dece">
            {{ item.dece }}
          </div>
          <div class="item-bottom">
            <div class="price-left">￥{{ item.pricetotle }}</div>
            <div class="num-right">
              <button class="btn" @click="btnClick(true, index)">+</button>
              {{ item.num }}
              <button class="btn" @click="btnClick(false, index)">-</button>
            </div>
          </div>
        </div>
        </mt-cell-swipe>
      </div>
      </div>
      <div v-else>商品已经显示完了</div>
    </div>

    <!-- 底部算账 -->
    <footer>
      <!-- 左边 -->
      <div class="total-left">
        <input class="inp" type="radio" />
        <span>全选</span>
      </div>
      <!-- 右边 -->
      <div class="total-right">
        <span class="total-price">合计:￥{{ ALLprice }}</span>
        <div class="buy-produce">
          去计算
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
/* 头部导航 */
import NabBar from "../../components/comment/navbar/NavBar";
import { CellSwipe } from "mint-ui";
export default {
  name: "Shop",
  components: {
    NabBar
  },
  data() {
    return {
      shopcard: [
        {
          id: 11,
          img:
            "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
          title:
            "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          dece:
            "商品描述: 2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          pricetotle: 178.0,
          num: 1
        },
        {
          id: 123,
          img:
            "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
          title:
            "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          dece:
            "商品描述: 2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          pricetotle: 178.0,
          num: 1
        },
        {
          id: 13,
          img:
            "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
          title:
            "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          dece:
            "商品描述: 2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          pricetotle: 178.0,
          num: 1
        },
        {
          id: 14,
          img:
            "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
          title:
            "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          dece:
            "商品描述: 2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          pricetotle: 178.0,
          num: 1
        },
        {
          id: 15,
          img:
            "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
          title:
            "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          dece:
            "商品描述: 2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
          pricetotle: 178.0,
          num: 1
        }
      ],
      ALLprice: 0
    };
  },
  methods: {
    // 总计
    getprice() {
      let price = 0;
      this.shopcard.forEach((item, index) => {
        price += item.num * item.pricetotle;
      });
      this.ALLprice = price.toFixed(2);
    },
    btnClick(bool, index) {
      let shopCount = this.shopcard[index];
      if (bool) {
        shopCount.num++;
      } else if (shopCount.num <= 1) {
        return;
      } else {
        shopCount.num--;
      }
      this.getprice();
    },
    del(index){
        this.shopcard.splice(index,1)
    }
  },
  mounted() {
    this.getprice();
  }
};
</script>

<style scoped>
.nav-shop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ff8198;
  color: #fff;
}
.shop-content {
  width: 100%;
  margin-top: 50px;
}
.item {
  display: flex;
  justify-content: space-around;
  height: 120px;
  margin: 15px 0 0 0;
}
.item .item-border {
  width: 18px;
  height: 120px;
  background: #fff;
  line-height: 120px;
  text-align: center;
}
.item .item-border input {
  width: 16px;
  height: 16px;
}
.item .item-img {
  width: 80px;
  height: 100px;
}
.item .item-img img {
  width: 100%;
  border-radius: 5px;
}
.item .item-info {
  width: 250px;
  height: 50px;
  padding: 5px;
}
.item .item-info .item-title {
  font-size: 17px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 240px;
}
.item .item-info .item-dece {
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 240px;
  margin-top: 15px;
}
.item .item-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  font-size: 17px;
}
.item .item-bottom .price-left {
  color: red;
}
.item .item-bottom .num-right {
  color: #333;
}
.item .item-bottom .num-right .btn {
  width: 25px;
  height: 24px;
  background: #f2f2f2;
  outline: none;
}
footer {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  background: #ffffff;
}
footer .total-left {
  padding: 0 0 0 20px;
  font-size: 14px;
}
footer .total-left .inp {
  width: 16px;
  height: 16px;
}
footer .total-left span {
  margin-left: 5px;
}
footer .total-right {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
footer .total-right .total-price {
  padding: 0 5px;
}
footer .total-right .buy-produce {
  width: 100px;
  background: #ff4500;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
}
.mint-cell-swipe-button{
    line-height: 150px !important;
}
</style>
