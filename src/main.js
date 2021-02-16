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
  PUBLIC_CDN: "https://imagecdn.leasingoptions.co.uk/",
  PUBLIC_MICROSERVICE_VEHICLE_URL: "https://vehicle-website.api.leasingoptions.co.uk/",
  fetchHeaders: {
    headers: {
        'LO-ORIGINAL-IP': '127.0.0.1',
        'LO-ORIGINAL-USERAGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
        'LO-ORIGINAL-HOSTNAME': 'localhost:3000'
    }
  }
};


Vue.mixin({
  data: () => {
    return {
      currencySymbol: "£"
    }
  },
  computed: {
    getPublicCDN () {
      return window.env.PUBLIC_CDN
    },
    formatMoney() {
        return this.currencySymbol
    }
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
