import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/comment/toast/index'
import  FastClick  from  'fastclick'
import VueLazyload from 'vue-lazyload'




// mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
// 安装toast插件
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body);

// 图片懒加载
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
