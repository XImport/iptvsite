import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChannelsList from "../views/ChannelsList.vue";
import Contact from "../views/ContactView.vue";
import Pricing from "../views/IptvPricing.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/channels",
    name: "channels",
    component: ChannelsList,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: Pricing,
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;
