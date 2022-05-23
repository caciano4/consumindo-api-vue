<template>
  <div id="card-user">
    <div class="mh-custom">
      <b-row
        class="container-user mt-3"
        v-for="(user, index) in paginatedItems"
        :key="index"
      >
        <b-col
          lg="6 m-auto"
          class="card-user d-flex justify-content-between rounded"
        >
          <b-col lg="8" class="align-self-center d-flex">
            <b-img :src="user.avatar" lg="mx-4" sm="mx-2" md="mx-2" class="rounded  img-size" fluid-img />
            <b-col>
              <h3 class="info-user">#{{ user.id }}</h3>
              <h2 class="name-user">
                {{ user.first_name }} {{ user.last_name }}
              </h2>
              <h3 class="info-user">{{ user.email }}</h3>
            </b-col>
          </b-col>
          <b-col id="icons" lg="4" class="d-flex justify-content-end align-self-center">
            <edit-icon
              @click="maintenenceRoute"
              size="22"
              class="icon-color icon-edit"
            ></edit-icon>
            <trash-2-icon
              @click="removeUser(user.id)"
              size="22"
              class="icon-color mx-3 icon-delete"
            ></trash-2-icon>
            <eye-icon
              @click="showDetails(user.id)"
              size="22"
              class="icon-color mr-icon-eye icon-show"
            ></eye-icon>
          </b-col>
        </b-col>
      </b-row>
    </div>
    <b-col lg="6 m-auto" class="mt-4">
      <b-pagination
        class="d-flex justify-content-center"
        v-model="currentPage"
        @change="onPageChanged"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        pills
      ></b-pagination>
    </b-col>
  </div>
</template>

<script>
import { BCol, BRow, BImg, BPagination } from "bootstrap-vue";
import customAxios from "../../services/axios.js";
import { EditIcon, Trash2Icon, EyeIcon } from "vue-feather-icons";
import Swal from "sweetalert2";
export default {
  props: ["btnStyle", "btnName"],
  name: "CardUser",
  components: {
    BCol,
    BRow,
    BImg,
    EditIcon,
    Trash2Icon,
    EyeIcon,
    BPagination,
  },
  data() {
    return {
      users: [],
      currentPage: 1,
      perPage: 6,
      paginatedItems: [],
      rows: null,
    };
  },
  methods: {
    showDetails(id) {
      this.$router.push({ name: "detailuser", params: { id: id } });
    },
    maintenenceRoute() {
      this.$router.push({ name: "maintenence" });
    },
    onPageChanged(page) {
      this.fetchUser(page);
    },
    removeUser(id) {
      console.log(id);
      Swal.fire({
        title: "Tem certeza?",
        text: "Esta ação removera o usuario!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Não, cancelar!",
        confirmButtonText: "Sim, deletar",
      }).then((result) => {
        if (result.isConfirmed) {
          customAxios.delete(`users/${id}`).then(() => {
            this.fetchUser(this.currentPage);
            Swal.fire(
              "Deletado!",
              "Usuario selecionado foi deletado!",
              "success"
            );
          });
        }
      });
    },
    fetchUser(page) {
      customAxios.get(`users?page=${page}`).then((response) => {
        let { data } = response.data;
        this.rows = response.data.total;
        this.perPage = response.data.per_page;
        this.currentPage = response.data.page;

        this.users = data;
        this.paginatedItems = data;
      });
    },
  },
  mounted() {
    this.fetchUser(1);
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>
