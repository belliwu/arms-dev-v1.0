import Vue from "vue";
import Router from "vue-router";

import TestPage from "@/components/TestPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "TestPage",
      component: TestPage
    }
  ]
});
