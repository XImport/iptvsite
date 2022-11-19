import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "animate.css";
import CarouselCard from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  CarouselCard,
  vuetify,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
