<template>
  <div class="home">
    <Header />
    <NavBar />
    <Discount />
    <DiscountFilter />
    <div id="products" v-for="(productArray,id) in productComputed" :key="id">
      <CardProduct :products="productArray"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NavBar from "@/components/Nav.vue";
import Discount from "@/components/Discounts.vue";
import DiscountFilter from "@/components/DiscountsFilter.vue";
import CardProduct from '@/components/CardProduct.vue'

export default {
  name: "Home",
  data(){
    return{
      product: []
    }
  },
  components: { Header, NavBar, Discount, DiscountFilter,CardProduct },
  created() {
    this.$store.dispatch('requestAllProducts');
  },
  computed:{
    productComputed(){
      return this.$store.getters.productList
    }
  }
};
</script>
