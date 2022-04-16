// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from "vue-router";
Vue.config.productionTip = false

/* eslint-disable no-new */
const router1 = new VueRouter({
  mode: "history",
  router,
});


new Vue({
  router1,
  render: (h) => h(App),
}).$mount("#main-app");


