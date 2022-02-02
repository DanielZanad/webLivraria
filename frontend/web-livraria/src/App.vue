<template>
  <router-view/>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['requestAllProducts'])
  },

  created(){
    this.requestAllProducts();
  }
}
</script>
<style>
body{
  margin: 0px;
}
</style>
