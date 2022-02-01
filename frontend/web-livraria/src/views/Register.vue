<template>
  <router-link to="/">
    <div id="web-livraria-logo">
      <img src="../assets/WebLivrariaLogo_1.png" alt="" />
    </div>
  </router-link>
  <div id="register">
    <h1>Criar Conta</h1>
    <hr />
    <form action="" id="register-form">
      <div id="form-row1" class="form-rows">
        <input type="text" placeholder="nome" id="name" />
        <input type="text" placeholder="celular" id="cel" />
        <input type="date" placeholder="__/__/__" id="birth" />
      </div>
      <div id="form-row2" class="form-rows">
        <input type="text" placeholder="Email" id="email" />
        <select name="gender" id="gender">
          <option value="Gênero" disabled selected>Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div id="form-row3" class="form-rows">
        <input type="text" placeholder="Senha" id="password" />
        <input type="text" placeholder="Confirmar Senha" id="conf-password" />
      </div>
      <div id="btn-register-div">
        <button id="btn-register">Cadastre-se</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  created(){
    document.body.style.backgroundColor = "#CCE9F3"
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
*{
  font-size: 20px;
}
div#web-livraria-logo {
  width: 100%;
  text-align: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.288);
  background-color: white;
}
h1 {
  padding-top: 20px;
  margin: 10px;
  font-size: 1.5em;
  font-family: Roboto;
}
div#register {
  margin: auto;
  text-align: center;
  margin-top: 50px;
  background-color: white;
  width: 900px;
  height: 500px;
  border-radius: 20px;
}
form#register-form {
  text-align: left;
  margin-left: 80px;
}
.form-rows {
  margin: 50px;
  font-family: Roboto;
  
}

form input[id="name"],
form input[id="email"],
form input[id="password"],
form input[id="conf-password"] {
  font-size: 20px;
  width: 40%;
  height: 40px;
  margin-right: 15px;
  border-radius: 5px;
}
form input[id="birth"] {
  font-size: 20px;
  width: 23%;
  height: 35px;
  margin-left: 15px;
  padding-top: 4px;
  border-radius: 5px;
}
form input[id="cel"] {
  font-size: 20px;
  width: 19%;
  height: 40px;
  border-radius: 5px;
}
select#gender {
  width: 20%;
  height: 45px;
  border-radius: 5px;
}
div#btn-register-div {
  text-align: center;
}
button {
  margin-top: 10px;
  margin-right: 60px;
  padding: 15px 100px 15px 100px;
  border-radius: 20px;
  border: 0;

  background-color: #7ad3f0;
  color: black;
  cursor: pointer;
}
hr {
  width: 70%;
}
</style>