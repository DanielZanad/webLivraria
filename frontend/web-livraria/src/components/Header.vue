<template>
  <div id="header">
    <img
      src="../assets/WebLivrariaLogo_1.png"
      alt="WebLivraria Logo"
      id="logo"
    />
    <div id="searchBar">
      <input type="text" placeholder="Buscar Produto..." />
      <div id="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#657789"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>
    <div id="cart">
      <img src="../assets/shopping-cart-solid.png" alt="" />
    </div>
    <div id="user-image">
      <img src="../assets/carbon_user.png" alt="" id="img-user" />
      <div id="user-login-register">
        <p>Ola Bem Vindo</p>
        <br />
        <router-link to="/login" class="link">Entre</router-link> ou
        <router-link to="/register" class="link">Cadastra-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
img#logo {
  height: 85px;
  width: 260px;
  margin: 10px 80px 15px 60px;
}
div#searchBar {
  text-align: center;
  display: inline-block;
  position: absolute;
  top: 31px;
  width: 36%;
  padding: 9px;
  border: 3px solid #7ad3f0;
  margin: auto;
}
input[type="text"] {
  font-size: 15px;
  float: left;
  margin-top: 3px;
  width: 70%;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  outline: none !important;
}
div#icon {
  display: inline;
  width: 10px;
  height: 10px;
  float: right;
  padding: 0px 0px 10px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
}
div#user-image {
  display: inline;
  float: right;
  margin: 33px 110px 20px 20px;
}
img#img-user {
  margin-right: 5px;
}
p {
  display: inline;
}
div#user-login-register {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  display: inline-block;
  font-size: 0.9em;
}
.link {
  text-decoration: none;
}
div#cart {
  display: inline;
  float: right;
  margin: 34px 50px 20px 20px;
}
</style>