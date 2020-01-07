<template>
    <div class="tabcontrol">
        <div class="tab-control-item" 
        v-for="(item,index) in titles" 
        :key="index" 
        :class="{active: index === make}"
        @click="tabItem(index)"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            make:0
        }
    },
    methods:{
        tabItem(index){ 
             this.make = index;
            this.$emit('tabClick',index); 
        }
    }
}
</script>

<style>
.tabcontrol{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 17px;
    background: #ffffff;
    z-index: 9;
}
.tab-control-item{
    flex: 1;
}
.active span{
    color: pink;
    border-bottom: 2px solid pink
    }
</style>