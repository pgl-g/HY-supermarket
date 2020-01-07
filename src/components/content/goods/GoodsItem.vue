<template>
<div class="goods-item" @click="detelClick">

            <img :src="goodsitems.show.img" alt="" @load="imgitem">

        <div class="goods-info">
            <p>{{goodsitems.title}}</p>
            <span class="price">{{goodsitems.price}}</span>
            <span class="collect">{{goodsitems.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GoodsItem',
    data(){
        return {
        }
    },
    props:{
        goodsitems:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgitem(){
            this.$bus.$emit('imgload')
        },
        detelClick(){
          this.$router.push('/detel/' + this.goodsitems.iid)
        }
    }
}
</script>

<style>
.goods-item{
    position: relative;
    padding-bottom: 40px;
    width: 48%;
   }
.goods-item img{
    width: 100%;
    border-radius: 5px
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;left: 0;right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price{
    color: brown;
    margin-right: 20px;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;top: -1px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg')0 0/14px 14px;
}
</style>