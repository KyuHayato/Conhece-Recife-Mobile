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
    path: "/menu/places/",
    component: () => import("@/views/PlacesPage.vue"),
  },
  {
    path: "/menu/details/",
    component: () => import("@/views/DetailsPage.vue"),
  },
  {
    path: "/menu/showplaces/",
    component: () => import("@/views/ShowPlacesPage.vue"),
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
