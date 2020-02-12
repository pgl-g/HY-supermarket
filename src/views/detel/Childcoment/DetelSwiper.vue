<template>
  <div>
    <Swiper class="detel-swiper">
      <swiper-item class="item" v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/comment/swiper'
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    getIahe(){
      console.log(this.topImages)
    }
  }
}
</script>

<style scoped>
.detel-swiper{
  height: 300px;
  overflow: hidden;
}

</style>