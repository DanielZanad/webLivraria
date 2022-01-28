<template>
  <div class="home">
    <Header />
    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NavBar from "@/components/Nav.vue";

export default {
  name: "Home",
  components: { Header, NavBar },
};
</script>
