<template>
  <div>
      <div  class="toast" v-show="ishow">
          <div>{{message}}</div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            ishow:false,
            message:''
        }
    },
    methods:{
        show(message='默认文字',duration=2000){
            this.ishow = true 
            this.message = message
            setTimeout(()=>{
                this.ishow = false
                this.message = ''
            },duration)
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, .75);
    padding: 8px 15px;
    border-radius: 3px;
    color: #ffffff;
}
</style>