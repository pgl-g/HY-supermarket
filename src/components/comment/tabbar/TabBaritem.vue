<template>
    <div class="tabbar-item" @click="tabar_item">
      <!-- <img src="../../assets/img/tabar/house.png" alt="" />
      <div>首页</div> -->
      <div class="item-icon" v-if="isactive"><slot name="img_icon"></slot></div>
      <div class="item-active-icon" v-else><slot name="img_icon2"></slot></div>
      <div class="item-text" :style="isactivecolor"><slot name="img_text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBaritem',
    props:{
        path:String,
        activecolor:{
            type:String,
            default:"pink"
        }
    },
    data(){
        return {
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        isactivecolor(){
            return this.isactive ? {color:"pink"} : {}
        }
    },
    methods:{
        tabar_item(){
           return this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
}
.tabbar-item img, .item-active-icon img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.item-text {
    font-size: 14px;
    margin-top: 3px;
    color: #333;
  }
</style>