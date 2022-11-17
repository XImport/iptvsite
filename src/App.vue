<template>
  <v-app>
    <v-app-bar app color="transparent" class="elevation-0">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>

      <div v-for="(btn, index) in HomeNavButtons" :key="index">
        <v-btn :class="`${btn.class}`" depressed color="transparent">
          <strong> {{ btn.label }} </strong>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    HomeNavButtons: [
      { label: "Home" },
      { label: "IPTV PRICING" },
      { label: "CHANNELS LIST" },
      { label: "CONTACT" },
    ],
  }),
};
</script>

<style scoped>
.mynav .navbar .dropdown-content {
  z-index: 99 !important;
}
</style>
