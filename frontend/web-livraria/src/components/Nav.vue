<template>
  <div id="nav-container">
    <div id="nav-buttons">
      <button class="nav-button">Livros</button>

      <button class="nav-button">Jogos</button>

      <button class="nav-button">Brinquedos</button>

      <button class="nav-button">Filmes e Series</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div#nav-container {
  background: #7ad3f0;
  height: 70px;
}
div#nav-buttons {
  text-align: center;
  padding: 14px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.158);
}
.nav-button {
  margin-right: 50px;
  font-size: 1.1em;
  font-weight: bolder;
  color: white;
  padding: 10px;
  border: 0;
  background: #7ad3f0;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.3s;
}
#nav-buttons > button:hover{
  background-color: #66b5cf;
    color: #417283; 
}
</style>