import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Order from "./components/Order";
import Self from "./components/Self";
import Out from "./components/Out";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/self",
      component: Self
    },
    {
      path: "/out",
      component: Out
    }
  ]
});

export default router;
