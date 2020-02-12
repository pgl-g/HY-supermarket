<template>
    <div>   
        <navbar class="navbar">
            <div slot="left" class="detel-left" @click="tohome">
             <img src="../../../assets/img/common/fanhui.png" alt="">
           </div>
           <div slot="center" class="detel-navbar">

               <div :class="{active:make === index}"  
               v-for="(item,index) in navtop" :key="index"
               @click="navClick(index)"
               >{{item}}</div>
           </div>
        </navbar>
    </div>
</template>

<script>
import navbar from '../../../components/comment/navbar/NavBar'
export default {
    name:'DetelNavbar',
    components:{
        navbar
    },
    data(){
        return {
            navtop:['商品','参数','评论','推荐'],
            make:0
        }
    },
    methods:{
        navClick(index){
            this.make = index
            this.$emit('ImgTopY',index)
            },
        tohome(){
                this.$router.push({
                    path:'/home'
                })
            }
    }
}
</script>

<style scoped>
.navbar{
    background: #ffffff;
}
.detel-navbar{
    display: flex;
    justify-content: space-around;
    
    }
    .active{
        color: pink;
    }
.detel-left img{
    width: 15px;
    height: 15px;
    }
</style>