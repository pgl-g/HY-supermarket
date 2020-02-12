import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cardList:[],
  },
  mutations: {
    // mutations唯一的目的就是修改state状态
    // mutations中的每一个方法尽可能完成的事件比较单一一点
   addCounter(state,payload){
    payload.count++
   },
   addToCart(state,payload){
    state.cardList.push(payload)
   }
  },
  actions: {
    // actions会返回一个promise的回调函数，因为action本身就是解决异步的
    addcard(context,payload){
     return new Promise((resolve,reject)=>{
        // console.log(payload)
      // 1.查看是否添加过
      let Oldproduce = context.state.cardList.find(item => item.iid === payload.iid)
      // 2.+1或者新添加
      if(Oldproduce){
        // Oldproduce.count += 1
        context.commit('addCounter',Oldproduce)
        resolve('商品添加+1')
      }else{
        payload.count = 1
        payload.checked = true
        // context.state.cardList.push(payload)
        context.commit('addToCart',payload)
      resolve('恭喜添加新的商品')
      }
     })
    }
  },
  modules: {
  },
  getters
})
export default store