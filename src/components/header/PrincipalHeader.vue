<template>
  <b-row id="principal-header">
    <b-col
      lg="6 mx-auto mt-header-custom" 
      class="d-flex justify-content-between p-0 col-10 col-sm-9 col-md-8 col-lg-6"
    >
      <h1 class="user-title">Usuários</h1>
      <button @click="toggleForm" :class="btnStyle">
        {{ btnName }}
      </button>
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
export default {
  props: ["btnStyle", "btnName"],
  name: "PrincipalHeader",
  components: {
    BCol,
    BRow,
  },
  methods: {
    toggleForm() {
      if (this.clicked === true) {
        this.$root.$emit("clicked", false);
        this.clicked = false;
      } else {
        this.$root.$emit("clicked", true);
        this.clicked = true;
      }
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>
