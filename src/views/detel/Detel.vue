<template>
    <div class="detel">
     <detel-navbar></detel-navbar>
    </div>
</template>

<script>
import DetelNavbar from '../detel/Childcoment/DetelNavbar'
export default {
    name:'Detel',
    components:{
        DetelNavbar
    },
    data() {
        return {
            iid: null
        }
    },
    created(){
        this.iid = this.$route.params.iid
    }
}
</script>

<style scoped>

</style>