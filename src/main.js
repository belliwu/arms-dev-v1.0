// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//---------- Import bootstrap4 -----------------
global.jQuery = jQuery
import jQuery from "jquery"
let bootstrap = require("bootstrap")
import "bootstrap/dist/css/bootstrap.css"

//---------- End for bootstrap4 -----------------

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
