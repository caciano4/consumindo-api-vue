<template>
  <b-row id="form-new-user" class="mt-2 mb-4">
    <b-col lg="6 m-auto" class="p-0">
      <b-form ref="form-user">
        <ValidationObserver ref="form-register-user">
          <b-col lg="12" class="card-user rounded">
            <b-form-group label="Nome do usuário">
              <ValidationProvider
                rules="required"
                name="Nome"
                v-slot="{ errors }"
              >
                <b-form-input
                  type="text"
                  v-model="name"
                  name="name"
                  class="custom-form-input rounded"
                />
                <span class="text-danger" id="error-name">{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col lg="12" class="card-user rounded mt-4">
            <b-form-group label="Função do usuário">
              <ValidationProvider
                rules="required"
                name="função"
                v-slot="{ errors }"
              >
                <b-form-select
                  :options="options"
                  v-model="selected"
                  name="job"
                  class="custom-form-input col-12 rounded custom"
                />
                <span class="text-danger" id="error-role">{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col lg="12" class="card-user rounded mt-4">
            <button @click.prevent="onSubmit" class="btn-register-user col-12">
              Salvar dados do usuário
            </button>
          </b-col>
        </ValidationObserver>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import customAxios from "@/services/axios";
import {
  BCol,
  BRow,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
} from "bootstrap-vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Swal from "sweetalert2";
export default {
  name: "FormNewUser",
  components: {
    BCol,
    BRow,
    BForm,
    BFormGroup,
    BFormSelect,
    BFormInput,
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
    async onSubmit() {
      const validateForm = await this.$refs["form-register-user"].validate();
      if (validateForm) {
        let formData = new FormData(this.$refs["form-user"]);
        let { data } = await customAxios.post(`users`, formData);
        this.data = data;
        Swal.fire("Sucesso!", "Usuario salvo com sucesso", "success");
      }
    },
  },
  mounted() {
    this.$root.$on("clicked", (e) => {
      if (e) {
        this.name = "";
        this.selected = null;
      }
    });
  },
  data() {
    return {
      name: "",
      selected: null,
      options: [
        { value: "Desenvolvedor", text: "Desenvolvedor" },
        { value: "Gerente de Projetos", text: "Gerente de Projetos" },
        { value: "Tech Lead", text: "Tech Lead" },
        { value: "UI/UX Designe", text: "UI/UX Designer" },
      ],
      data:null,
    };
  },
};
</script>

<style>
@import "../../styles/global.css";
.custom-form-input {
  width: 584px;
  height: 55px;
  border-color: var(--light-color);
  background: transparent;
}
.form-control:focus {
  color: #212529;
  background-color: var(--white-color);
  border-color: var(--black-color) !important;
  outline: 0;
  box-shadow: none !important;
}
.btn-register-user {
  width: 584px;
  height: 55px;
  background: var(--black-color);
  border-radius: 5px;
  color: var(--color-white);
}
legend {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.2px;

  color: var(--black-color);
}
</style>
