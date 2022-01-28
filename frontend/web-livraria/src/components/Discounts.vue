<template>
  <div id="container">
    <div id="center-button">
      <button class="discount-button" id="left-button">←</button>
      <button class="discount-button" id="right-button">→</button>
    </div>
    <div id="discount-img">
        <div id="discount-msg">
            <h2>Livros com até 20% de Desconto</h2>
        </div>
      <img src="../assets/book_discount.png" alt="discont" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

#container {
  width: 95%;
  height: 210px;
  border-radius: 20px;
  background: rgb(187, 183, 183);
  margin: 30px 100px 0px 40px;
}
.discount-button {
  border: 0;
  border-radius: 90px;
  margin-top: 85px;
  font-size: 1.5em;
  cursor: pointer;
}
#left-button {
  float: left;
  margin-left: 10px;
}
#right-button {
  float: right;
  margin-right: 10px;
}
#discount-img > img {
  display: inline;
  float: right;
}
#discount-msg{
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 1.2em;
    display: inline-block;
    width: 290px;
    margin-left: 35px;
    margin-top: 30px;
    
}
</style>