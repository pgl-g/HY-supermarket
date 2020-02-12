<template>
  <div class="shop-bottom">
      <div class="check-box">
          <check-button :checked="isCheckadd" class="check-button" @click.native="CheckClick"></check-button>
          <span class="alladd">全选</span>
      </div>
      <div class="tatal">
          合计:￥{{Total}}
      </div>
      <div class="calculate" @click="calClick">
          去结算{{cartLis}}
      </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkbutton/CheckButton'
export default {
    components:{
        CheckButton
    },
    methods:{
        CheckClick(){
            // console.log(1)
            // 1.这是filter写法
        //   return  this.$store.state.cardList.filter(item=>{
        //        if(item.checked){
        //            return item.checked = false
        //        }else{
        //            return item.checked = true
        //        }
        //     })

        // 2.可以直接拿计算属性里面的方法就好了
        if(this.isCheckadd){
            this.$store.state.cardList.forEach( item => item.checked = false);
        }else{
            this.$store.state.cardList.forEach( item => item.checked = true);
        }
        },
        // 点击去计算，弹出toast
         calClick(){
            if(!this.isCheckadd){
                this.$toast.show('请选择购买的商品',2000)
            }
        }
    },
    computed:{
        Total(){
            return this.$store.state.cardList.filter((item)=>{
                return  item.checked   // 选中的状态
            }).reduce((proValue,item)=>{  // 汇总价格
                // console.log(item)
                return proValue + item.nowPrice*item.count
            },0).toFixed(2)
        },
        cartLis(){
            return this.$store.state.cardList.filter(item => item.checked).length
        },
        isCheckadd(){
            
            if(this.$store.state.cardList.length === 0 ) return false
                // filter方法
            // return !(this.$store.state.cardList.filter(item => !item.checked).length)    // 其中要是有一个没选中那就都没选中
                // find方法
            // return !this.$store.state.cardList.find(item => !item.checked)
            // for of 遍历方法
            for(let item of this.$store.state.cardList){
                if(!item.checked){
                    return false
                }else{
                    return true
                }
            }
        }
    }
}
</script>

<style scoped>
.shop-bottom{
    background: #dddddd;
    height: 40px;
    line-height: 40px;
    display: flex;
}
.check-box{
    display: flex;
    align-items: center;
    width: 70px;
}
.check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
}
.alladd{
    margin-left: 5px;
}
.tatal{
    margin-left: 20px;
    flex: 1;
}
.calculate{
    background: #f47000;
    width: 70px;
    text-align: center;
   
}
</style>