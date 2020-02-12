import {debounce} from './debounce'
export const ItemimgLisenter = {
    data(){
        return{
            Newrefresh:null
        }
    },
    mounted(){
       this.Newrefresh = debounce(this.$refs.scroll.refresh,200)
        // 刷新图片的加载事件
        this.Imageload = () => {
          this.Newrefresh();
        }
        this.$bus.$on('imgload',this.Imageload)
     
      }
}