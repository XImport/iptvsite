<template>
  <v-carousel
    v-model="model"
    id="main-carousel"
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeView",

  components: {},
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>

<style scoped>
.mynav .navbar .dropdown-content {
  z-index: 99;
}

.v-carousel {
  z-index: 1;
}

#main-carousel {
  margin-top: -6% !important;
}

@media only screen and (max-width: 600px) {
  #main-carousel {
    margin-top: -15% !important;
  }
}
</style>
