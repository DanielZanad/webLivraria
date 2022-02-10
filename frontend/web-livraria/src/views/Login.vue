<template>
  <router-link to="/">
    <div id="web-livraria-logo">
      <img src="../assets/WebLivrariaLogo_1.png" alt="" />
    </div>
  </router-link>
  <div id="login">
    <h1>Login</h1>
    <hr />
    <form action="" id="login-form">
      <div class="form-rows">
      <input type="text" placeholder="email" id="email" />
    </div>
    <div class="form-rows">
      <input type="text" placeholder="Senha" id="password"/>
    </div>
    <button id="btn-login">Entar</button>
    </form>
  </div>
  <ModalShowError v-if="modal"/>
</template>

<script>
import ModalShowError from '../components/ModalShowError.vue';

export default {
  name: "login",
  data(){
    return{
      modal: false
    }
  },
  components:{
    ModalShowError
  },
  created(){
    document.body.style.backgroundColor = "#CCE9F3"
  }
};
</script>

<style scoped>
div#web-livraria-logo {
  width: 100%;
  text-align: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.288);
  background-color: white;
}
h1 {
  padding-top: 20px;
  font-family: Roboto;
}
hr {
  width: 70%;
  margin-bottom: 30px;
}
div#login {
  margin: auto;
  text-align: center;
  margin-top: 50px;
  background-color: rgb(255, 255, 255);
  width: 900px;
  height: 500px;
  border-radius: 20px;
  font-family: Roboto;
  
}
div.form-rows{
  margin: 20px;
}
form input[id='email'],
form input[id='password']{
  height: 40px;
  font-size: 20px;
  width: 40%;
}
button#btn-login{
  margin-top: 100px;
  padding: 15px 100px 15px 100px;
  border-radius: 20px;
  border: 0;
  background-color: #7ad3f0;
  color: black;
  cursor: pointer;
  font-size: 20px;
}




</style>