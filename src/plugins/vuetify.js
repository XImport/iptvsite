import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        SoftBgGrey: "#f5f4f0",
      },
      dark: {
        SoftBgGrey: "#202020",
      },
    },
  },
});
