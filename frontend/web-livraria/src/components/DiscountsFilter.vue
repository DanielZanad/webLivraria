<template>
  <div id="discount-filters">
    <div id="discount-filters-msg">
      <h3>Livros e mais livros</h3>
      <p>
        Aqui você encontra as melhores opções em Livros, Games, Músicas e
        Eletrônicos além de eventos gratuitos e as melhores ofertas. Confira!
      </p>
    </div>
    <div id="discount-filters-btn">
      <button class="button-filter">Mais vendidos</button>
      <button class="button-filter">Destaques</button>
      <button class="button-filter">Super ofertas</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div#discount-filters-msg {
  font-family: "Roboto", sans-serif;
  margin-left: 40px;
  font-size: 1.2em;
}
div#discount-filters-msg > h3 {
  font-style: normal;
  font-weight: bolder;
  line-height: 35px;
  margin-bottom: 5px;
}
div#discount-filters-btn {
  margin: 40px 40px 20px 0px;
}
.button-filter {
  font-family: "Roboto", sans-serif;
  margin-left: 40px;
  padding: 15px;
  font-size: 1.1em;
  color: #6ab6cf;
  border: solid;
  border-radius: 10px;
  cursor: pointer;
}
.button-filter:focus {
  background-color: #7ad3f0;
  color: white;
}
</style>