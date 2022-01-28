<template>
  <div class="home">
    <Header />
    <NavBar />
    <Discount />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NavBar from "@/components/Nav.vue";
import Discount from '@/components/Discounts.vue';

export default {
  name: "Home",
  components: { Header, NavBar, Discount },
};
</script>
