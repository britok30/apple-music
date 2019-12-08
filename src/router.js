import Vue from "vue";
import Router from "vue-router";
import NotFound from "./components/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/404",
      name: "notfound",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
