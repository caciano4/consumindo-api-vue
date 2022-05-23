<template>
  <b-row>
    <b-col
      lg="6 mx-auto mt-header-custom"
      class="d-flex justify-content-between p-0"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* //////////////////// */
@import "../../styles/global.css";
.user-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  /* identical to box height */

  letter-spacing: 0.2px;
  color: var(--black-color);
}

.btn-register {
  width: 185px;
  height: 55px;
  background-color: var(--black-color);
  border-radius: 5px;
  border: none;
  color: var(--color-white);

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.btn-register::hover {
  background-color: rgba(red, green, blue, alpha);
}
.btn-cancel{
  width: 185px;
  height: 55px;
  background-color: var(--bg-card);
  border-radius: 5px;
  border: none;
  color: var(--black-color);

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.mt-header-custom {
  margin-top: 56px;
}
</style>
