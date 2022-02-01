<template>
  <div class="card-product" v-for="(product, id) in products" :key="id">
    <img
      class="img-product"
      id="img-product-id"
      :src="getImgUrl(product.img)"
      :alt="getAltImg(product.name)"
    />
    <p id="product-name">{{ product.name }}</p>
    <p id="product-price">R$: {{ product.price }}</p>
    <div id="card-buttons">
      <button id="button-info" class="card-button">Sinopse</button>
      <button id="button-add" class="card-button">Adicionar</button>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
div.card-product {
  display: inline-block;
  border-style: solid;
  border-color: #7ad3f0;
  border-radius: 5px;
  box-shadow: 7px 5px 5px rgb(0, 0, 0, 0.2);
  width: 250px;
  height: 360px;
  margin: 30px 2px 2px 66px;
}
div.card-product > p {
  font-family: Roboto;
  font-style: normal;
  margin: 0px 0px 0px 30px;
}
p#product-name {
  font-weight: bolder;
}
img.img-product {
  height: 69%;
  width: 75%;
  margin: 15px 0px 5px 32px;
}

.card-button {
  padding: 2px 10px 2px 10px;
  margin: 8px 0px 0px 35px;
  border-style: solid;
  border-color: #7ad3f0;
  cursor: pointer;
}
</style>