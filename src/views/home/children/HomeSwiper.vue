<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/comment/swiper/index'

	export default {
    name: "HomeSwiper",
    data(){
      return {
        isload:false
        }
    },
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      imgload(){
        if(!this.isload){
           this.$emit('imgload')
           this.isload = true
        }
       
      }
    }
	}
</script>

<style scoped>

</style>
