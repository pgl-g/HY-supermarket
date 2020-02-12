<template>
  <div id="app">
    <maintab></maintab>
    <keep-alive exclude="Detail"> <router-view/></keep-alive>
   
  </div>
</template>

<script>
import maintab from './components/content/tabbar/maintab'
export default {
  name:'App',
  components:{
    maintab
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
