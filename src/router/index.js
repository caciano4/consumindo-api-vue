import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import Maintenence from "../views/maintenance/Maintenence.vue";
import PageNotFound from "../views/not_found/NotFound.vue";
import DetailUser from "../views/detail_user/DetailUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/manutencao",
    name: "maintenence",
    component: Maintenence,
  },
  {
    path: "/detalhes-usuario/:id",
    name: "detailuser",
    component: DetailUser,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
