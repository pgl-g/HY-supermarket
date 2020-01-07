<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="rec-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Homerecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 14px;
        padding: 10px 0px 20px;
        border-bottom: 7px solid #eee
    }
    .rec-item{
        flex: 1 ;
      
    }
    .rec-item img{
        width: 80px;
        height: 80px;
        margin-bottom: 5px
    }
</style>
