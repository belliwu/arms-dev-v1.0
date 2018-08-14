import Vue from "vue";
import Router from "vue-router";

import TestPage from "@/components/template/TestPage";
import Admin from "@/components/template/Admin";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/admin",
      name: "Admin",
      component: Admin
    },
    {
      path: "/test",
      name: "TestPage",
      component: TestPage
    }
  ]
});
