// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//---------- Import bootstrap 4 -----------------
// global.jquery = jQuery;
// import jQuery from "jquery";
// let bootstrap = require("bootstrap");
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/scss/bootstrap.scss";

//---------- Import font-awesome  -----------------
// import "font-awesome/css/font-awesome.min.css";

//------------------------------------------------------
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
