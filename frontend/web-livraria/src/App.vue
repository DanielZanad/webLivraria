<template>
  <router-view/>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('requestAllProducts');
  }
}
</script>
<style>
body{
  margin: 0px;
}
</style>
