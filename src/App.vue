<template>
  <v-app>
    <v-app-bar app :class="navstate">
      <div class="d-flex align-center btn--colors">
        <v-app-bar-nav-icon
          dark
          class="hidden-sm-and-up"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 ml-6"
          contain
          min-width="100"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>

      <div
        v-for="(btn, index) in HomeNavButtons"
        :key="index"
        class="hidden-sm-and-down"
      >
        <v-btn
          :class="`${btn.class} animate__animated animate__fadeInUp`"
          depressed
          class="transparent ml-4 white--text"
          :to="btn.url"
        >
          <strong> {{ btn.label }} </strong>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        class="transparent ml-4 white--text mode"
        fab
        small
        @click="switchTheme()"
        v-if="islight"



      >
        <v-icon> mdi-lightbulb-on </v-icon>
      </v-btn>
      <v-btn class="transparent ml-4 white--text mode" fab small  @click="switchTheme()" v-if="isdark" >
        <v-icon> mdi-lightbulb </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app bottom>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>IPTV SITE</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(item, index) in HomeNavButtons"
          :key="index"
          link
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    navstate: "transparent elevation-0",
    isdark: null,
    islight :null,

    scrollPosition: null,
    drawer: false,

    HomeNavButtons: [
      { label: "Home", icon: "mdi-home", url: "/" },
      { label: "IPTV PRICING", icon: "mdi-wallet-membership", url: "/pricing" },
      { label: "CHANNELS LIST", icon: "mdi-television-box", url: "/channels" },
      { label: "CONTACT", icon: "mdi-email", url: "/contact" },
    ],
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;

      if (this.scrollPosition > 599) {
        this.navstate = "changeColor elevation-0";
        this.mode = "changeColor elevation-0";
      } else if (
        window.matchMedia("only screen and (max-width: 760px)").matches &&
        this.scrollPosition > 100
      ) {
        this.navstate = "changeColor elevation-0";
        this.mode = "changeColor elevation-0";
      } else {
        this.navstate = "transparent elevation-0";
        this.mode = "transparent elevation-0";
      }
    },
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light');
      this.isdark =!this.isdark;
      this.islight = !this.islight;
      // if (this.$vuetify.theme.light) {
      //   console.log("light theme");
      // }
      // if (this.$vuetify.theme.light) {
      //   console.log("light theme");
      // }
      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      // this.$cookies.set('app.darkMode', this.$vuetify.theme.dark);
    },
  },
  mounted() {
    if (this.$route.name == "chadasdnnels") {
      this.navstate = "changeColor elevation-0";
    }
    window.addEventListener("scroll", this.updateScroll);
  },

created(){
  this.islight = true
  this.isdark = false
},

  watch: {
    $route() {
      if (this.$route.name == "sdsachannels") {
        this.navstate = "changeColor elevation-0";
      } else {
        this.navstate = "transparent elevation-0";
      }
    },
  },
};
</script>

<style scoped>
.mynav .navbar .dropdown-content {
  z-index: 99 !important;
}

.btn--colors {
  background-color: rgba(34, 34, 34, 0.1) !important;
  color: aliceblue;
}

.btn--colors[data-v-7ba5bd90] {
  background-color: rgba(34, 34, 34, 0) !important;
  color: aliceblue;
}

.changeColor {
  background-color: rgb(0, 0, 0) !important;
  transition: all 0.5s ease-in !important;
}

.mode {
  box-shadow: none !important;
}
</style>
