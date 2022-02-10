<template>
  <!-- The Modal -->
  <div id="modal" class="modal" @click="closeModalFromWindow">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal" class="close">&times;</span>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-register-error",
  props: {
    message: String,
  },
  emits: ["changeModalState"],
  methods: {
    closeModal() {
      let modal = document.getElementById("modal");
      modal.style.display = "none";
      this.$emit("changeModalState", { modal });
    },
    closeModalFromWindow() {
      let modal = document.getElementById("modal");
      var emit = this.$emit;
      window.onclick = function (event) {
        if (event.target == modal) {
          emit("changeModalState", { modal });
          modal.style.display = "none";
        }
      };
    },
  },
};
</script>

<style>
.modal {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
}


.modal-content {
  font-family: Roboto;
  font-size: 1.1em;
  color: red;
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 50%; 
}


.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>