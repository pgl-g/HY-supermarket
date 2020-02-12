<template>
    <!-- 这里最好用ref来进行子组件的之间传值 -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
    name:'bscroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new bscroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad: true
        })  
        // 这是滚动条的一些滚动高度事件
       this.scroll.on('scroll',(position) => {
           /* console.log(position) */
           this.$emit('scroll',position)
       })
       // 下拉监听事件
       this.scroll.on('pullingUp',() => {
           this.$emit('pullingup')
           /* console.log('上拉加载跟多')
           scroll.finshPullUp() */
       })
    },
    methods:{
        finishPullUp(){
            this.scroll.finishPullUp();
        },
        refresh(){
           this.scroll && this.scroll.refresh && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>