<template>
  <b-row id="single-user-header">
    <b-col
      lg="6 mx-auto mt-header-custom"
      class="d-flex justify-content-between p-0"
    >
      <h1 class="user-title">#{{ this.$route.params.id }}</h1>
      <button @click="returnHome" class="btn-cancel">
        Voltar
      </button>
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
export default {
  name: "PrincipalHeader",
  components: {
    BCol,
    BRow,
  },
  methods: {
    returnHome() {
      this.$router.push({ name: "home" });
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
