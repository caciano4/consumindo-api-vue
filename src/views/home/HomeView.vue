<template>
  <div id="home-view">
    <principal-header :btnStyle="btnStyle" :btnName="btnName" />
    <form-new-user v-show="clicked" />
    <card-user />
  </div>
</template>

<script>
import PrincipalHeader from "../../components/header/PrincipalHeader.vue";
import CardUser from "../../components/card-user/CardUser.vue";
import FormNewUser from "../../components/form-user/FormNewUser.vue";

export default {
  name: "HomeView",
  components: {
    PrincipalHeader,
    CardUser,
    FormNewUser,
  },
  data() {
    return {
      clicked: false,
      btnStyle: "btn-register",
      btnName: "Novo usuário",
    };
  },
  mounted() {
    this.$root.$on("clicked", (e) => {
      if (e) {
        this.btnName = "Cancelar";
        this.btnStyle = "btn-cancel";
        document.getElementById("form-new-user").style.animation =
          "form-animation-open 0.5s linear";
        this.clicked = e;
      } else {
        document.getElementById("form-new-user").style.animation =
          "form-animation-close 0.5s linear";
        this.btnStyle = "btn-register";
        this.btnName = "Novo usuário";
        setTimeout(() => {
          this.clicked = e;
        }, 500);
      }
    });
  }
};
</script>

<style lang="scss">
@import './scss/style.scss';
</style>
