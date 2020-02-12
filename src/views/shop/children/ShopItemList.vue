<template>
  <div class="shop-list">
     <div class="item-selector">
      <CheckButton :checked="produce.checked" @click.native="Checkclick" v-model="produce.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="produce.images" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{produce.title}}</div>
      <div class="item-desc">商品描述: {{produce.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{produce.nowPrice}}</div>
        <div class="item-count right">x{{produce.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkbutton/CheckButton'
export default {
    props:{
        produce:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    components:{
        CheckButton
    },
    methods:{
        Checkclick(){
            this.produce.checked = !this.produce.checked
        }
    }
}
</script>


<style scoped>
  .shop-list {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>
