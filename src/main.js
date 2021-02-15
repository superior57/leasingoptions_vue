require('dotenv').config();
import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
// import Buefy from "buefy";
// import "buefy/dist/buefy.css";
import VueSweetalert2 from "vue-sweetalert2";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import "./assets/style.css";
import "./assets/css/custom.css";


Vue.use(VueSweetalert2);  
// Vue.use(Buefy);

window.env = {
  PUBLIC_CDN: "https://imagecdn.leasingoptions.co.uk/"
};

Vue.mixin({
  computed: {
    getPublicCDN () {
      return window.env.PUBLIC_CDN
    },
  },
  methods: {
    // getPublicCDN: function () {
    //   return window.PUBLIC_CDN
    // },
  },
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
