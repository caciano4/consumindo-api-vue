<template>
  <main>
    <b-container class="mt-5">
      <b-row class="justify-content-center flex-column">
        <b-col lg="6" class="align-self-center">
          <b-img :src="require('@/assets/astronaut.svg')" fluid />
        </b-col>
        <b-col lg="6" class="align-self-center mt-5">
          <h1>404</h1>
          <h2>UH OH! Você está Perdido.</h2>
          <p class="mt-3">
            Esta página que você está não existe. Como você chegou aqui é um
            mistério. Mas não se preocupe em segundos será redirecionado para à
            página principal
          </p>
          <p>Prepare-se para a contagem regressiva: 00:0{{ counter }}</p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script>
import { BCol, BRow, BContainer, BImg } from "bootstrap-vue";
export default {
  name: "PageNotFound",
  components: {
    BCol,
    BRow,
    BContainer,
    BImg,
  },
  data() {
    return {
      counter: 9,
    };
  },
  mounted() {
    this.countDown(this.counter);
  },
  methods: {
    countDown() {
      var data = this;
      window.setInterval(function () {
        if (data.counter !== 0) {
          data.counter = data.counter - 1;
        }
      }, 1000);
      window.setTimeout(()=>{
        this.$router.push({name: 'home'})
      }, 10000)
    },
  },
};
</script>
