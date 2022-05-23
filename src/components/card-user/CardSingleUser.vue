<template>
  <div id="card-single-user" class="mt-5">
    <div class="mh-custom">
      <b-row class="container-user">
        <b-col lg="6 m-auto" class="card-user d-flex p-0">
          <b-col lg="8" class="align-self-center d-flex">
            <b-img :src="user.avatar" class="rounded img-size" fluid-img />
            <b-col class="align-self-center mx-3">
              <label for="user-name">Primeiro nome</label>
              <h2 name="user-name" id="user-name" class="field">
                {{ user.first_name }}
              </h2>
            </b-col>
            <b-col class="align-self-center">
              <label for="user-last-name">Último nome</label>
              <h2 name="user-last-name" id="user-last-name" class="field">
                {{ user.last_name }}
              </h2>
            </b-col>
          </b-col>
        </b-col>
      </b-row>
    </div>
    <div class="mh-custom">
      <b-row class="container-user">
        <b-col lg="6 m-auto" class="card-user d-flex p-0">
          <b-col lg="12" class="align-self-center d-flex flex-column justify-content-start">
            <b-col class="mt-4">
              <p for="user-name" class="text-start">Endereço de e-mail</p>
              <h2 name="user-name" id="user-name" class="field text-start">
                {{ user.email }}
              </h2>
            </b-col>
            <b-col class="mt-3">
              <p for="user-name" class="text-start">Link do avatar</p>
              <h2 name="user-name" id="user-name" class="field text-start">
                {{ user.avatar }}
              </h2>
            </b-col>
            <b-col class="mt-3">
              <p for="user-name" class="text-start">Link de suporte</p>
              <h2 name="user-name" id="user-name" class="field text-start">
                {{ support_user.url }}
              </h2>
            </b-col>
            <b-col class="mt-3">
              <p for="user-name" class="text-start">Descrição do usuário</p>
              <h2 name="user-name" id="user-name" class="field text-start">
                {{ support_user.text }}
              </h2>
            </b-col>
          </b-col>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BCol, BRow, BImg } from "bootstrap-vue";
import customAxios from "../../services/axios.js";
export default {
  name: "CardSingleUser",
  components: {
    BCol,
    BRow,
    BImg,
  },
  data() {
    return {
      user: [],
      user_id: null,
      support_user:null
    };
  },
  methods: {
    fetchUser() {
      customAxios.get(`users/${this.user_id}`).then((response) => {
        let { data, support } = response.data;
        this.user = data;
        this.support_user = support;
      });
    },
  },
  mounted() {
    this.user_id = this.$route.params.id;
    this.fetchUser();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../styles/global.css";
#card-single-user {
  .field {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.2px;
    color: var(--black-color);
  }

  .img-size {
    width: 120px;
    height: 120px;
  }

  label,
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.2px;
    margin-bottom: 5px;
    color: var(--gray-color);
  }
}
</style>
