<template>
  <div>
    <router-link to="/">
      <div id="web-livraria-logo">
        <img src="../assets/WebLivrariaLogo_1.png" alt="" />
      </div>
    </router-link>
    <div id="register">
      <h1>Criar Conta</h1>
      <hr />
      <div id="register-form">
        <div id="form-row1" class="form-rows">
          <input v-model="user.name" type="text" placeholder="nome" id="name" />
          <input
            v-model="user.phone"
            type="text"
            placeholder="celular"
            id="cel"
          />
          <input
            v-model="user.birth"
            type="date"
            placeholder="__/__/__"
            id="birth"
          />
        </div>
        <div id="form-row2" class="form-rows">
          <input
            v-model="user.email"
            type="email"
            placeholder="Email"
            id="email"
          />
          <select v-model="user.gender" name="gender" id="gender">
            <option disabled value="">Gênero</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
        </div>
        <div id="form-row3" class="form-rows">
          <input
            v-model="user.password"
            type="password"
            placeholder="Senha"
            id="password"
          />
          <input
            v-model="user.confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            id="conf-password"
          />
        </div>
        <div id="btn-register-div">
          <button id="btn-register" @click="registerUser">Cadastre-se</button>
        </div>
      </div>
    </div>
    <ModalRegisterError
      v-if="modal"
      :message="registerError"
      @changeModalState="showModal()"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ModalRegisterError from "../components/ModalShowError.vue";

export default {
  name: "register",
  data() {
    return {
      registerError: "",
      modal: false,
      user: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        birth: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  components: {
    ModalRegisterError,
  },

  created() {
    document.body.style.backgroundColor = "#CCE9F3";
  },
  computed: {
    ...mapState({
      checkError: (state) => state.User.response,
    }),
  },
  methods: {
    ...mapActions(["registerNewUser"]),
    verifyForm() {
      if (this.user.password != this.user.confirmPassword) {
        return {
          error: true,
          message: "Senhas estao diferentes",
        };
      } else {
        for (let key in this.user) {
          if (
            this.user[key] === "" ||
            this.user[key] === undefined ||
            this.user[key].length === 0 ||
            /^\s*$/.test(this.user[key])
          ) {
            return {
              error: true,
              message: "Algum espaço do formulario esta vazio",
            };
          }
        }
        return { error: false, message: "Tudo Ok" };
      }
    },

    async registerUser() {
      let verify = await this.verifyForm();
      if (!verify.error) {
        delete this.user.confirmPassword;
        this.registerNewUser(this.user);
        setTimeout(() => {
          if (this.checkError[0].status) {
            this.$router.push({ path: "/login" });
            console.log(this.checkError[0]);
          }
        }, 1000);
      } else {
        this.modal = true;
        this.registerError = verify.message;
      }
    },

    showModal() {
      this.modal = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
* {
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
div#register-form {
  text-align: left;
  margin-left: 80px;
}
.form-rows {
  margin: 50px;
  font-family: Roboto;
}

div input[id="name"],
div input[id="email"],
div input[id="password"],
div input[id="conf-password"] {
  font-size: 20px;
  width: 40%;
  height: 40px;
  margin-right: 15px;
  border-radius: 5px;
}
div input[id="birth"] {
  font-size: 20px;
  width: 23%;
  height: 35px;
  margin-left: 15px;
  padding-top: 4px;
  border-radius: 5px;
}
div input[id="cel"] {
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