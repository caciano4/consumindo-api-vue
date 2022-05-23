<template>
  <div class="box">
    <div>
      Fechado !
    </div>
    <p>
      <span>para manutênção</span> Desculpe o transtorno, Estamos trabalhando
      para melhor atendê-los.<br /> Você sera redirecionado em instantes: 00:0{{
        counter
      }}
    </p>
  </div>
</template>
<script>
export default {
  name: "MaintenenceVue",
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
      window.setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 10000);
    },
  },
};
</script>

<style>
@import './scss/style.scss';
</style>
