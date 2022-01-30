<template>
  <div class="product-card" v-for="(product, id) in products" :key="id">
    <img
      class="img-product"
      id="img-product-id"
      :src="getImgUrl(product.img)"
      :alt="getAltImg(product.name)"
    />
    <p id="product-name">{{ product.name }}</p>
    <br />
    <p id="product-price">R$: {{ product.price }}</p>
    <button id="btn-info">Sinopse</button>
    <button id="btn-add">Adicionar</button>
  </div>
</template>

<script>
export default {
  name: "card-product",
  props: {
    products: Array,
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    getAltImg(picName) {
      return "Imagem do produto " + picName;
    },
  },
};
</script>

<style scoped>
div.product-card {
  display: inline-block;
  border-style: solid;
  border-color: #7ad3f0;
  border-radius: 5px;
  box-shadow: 7px 5px 5px rgb(0, 0, 0, 0.2);
  width: 190px;
  height: 260px;
  margin: 2px 2px 2px 80px;
}
img.img-product {
  height: 65%;
  width: 69%;
  margin: 8px 0px 0px 29px;
}
</style>