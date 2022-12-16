import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MenuHome from "../views/MenuHome.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/menu/",
    component: MenuHome,
  },
  {
    path: "/menu/search-places/",
    component: () => import("@/views/SearchPlaces.vue"),
  },
  {
    path: "/menu/places/",
    component: () => import("@/views/PlacesFiltered.vue"),
  },
  {
    path: "/menu/detail/:id",
    component: () => import("@/views/DetailsPage.vue"),
  },
  {
    path: "/menu/in-map/:id",
    component: () => import("@/views/ShowInMap.vue"),
  },
  {
    path: "/menu/contacts/",
    component: () => import("@/views/ContactPage.vue"),
  },
  {
    path: "/menu/whopage/",
    component: () => import("@/views/WhoPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
